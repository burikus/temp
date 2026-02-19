CREATE SCHEMA IF NOT EXISTS svc_lock;

CREATE TABLE IF NOT EXISTS svc_lock."Locks"
(
    "Uid" uuid NOT NULL,
    "ResourceId" character varying(256),
	"LockToken" uuid,
	"LockStart" timestamp without time zone,
	"LockEnd" timestamp without time zone,
	CONSTRAINT "UNQ_Locks_LockToken" UNIQUE("LockToken"),
	CONSTRAINT "UNQ_Locks_ResourceId" UNIQUE("ResourceId"),
    CONSTRAINT "PK_Locks" PRIMARY KEY ("Uid")
);

CREATE OR REPLACE FUNCTION svc_lock.TryAquireResourceLockToken(
	resourceId character varying(256),
	lockSpanSeconds integer
	)
	RETURNS uuid AS $$
DECLARE
	LockUid uuid;
	LockTokenUid uuid;
	LockStart timestamp without time zone;
	LockEnd timestamp without time zone;
BEGIN
	SELECT
		"Uid",
		"LockToken",
		"LockStart",
		"LockEnd"
	INTO
		LockUid,
		LockTokenUid,
		LockStart,
		LockEnd
	FROM svc_lock."Locks"
	WHERE "ResourceId" = resourceId FOR UPDATE;
	
	-- check if resource lock is new
	IF (LockUid IS NULL)
	THEN
		LockUid := uuid_generate_v4();
		LockTokenUid := uuid_generate_v4();
		LockStart := CURRENT_TIMESTAMP;
		LockEnd := CURRENT_TIMESTAMP + make_interval(secs => lockSpanSeconds);
		
		INSERT INTO svc_lock."Locks" (
			"Uid", "ResourceId", "LockToken", "LockStart", "LockEnd"
		)
		VALUES (
			LockUid, resourceId, LockTokenUid, LockStart, LockEnd
		);
		
		RETURN LockTokenUid;
	END IF;
	
	IF (LockEnd IS NOT NULL AND CURRENT_TIMESTAMP < LockEnd)
	THEN
		RETURN NULL; -- previous lock is not expired
	END IF;
	
	LockTokenUid := uuid_generate_v4();
	LockStart := CURRENT_TIMESTAMP;
	LockEnd := CURRENT_TIMESTAMP + make_interval(secs => lockSpanSeconds);
	
	UPDATE svc_lock."Locks"
	SET
		"LockToken" = LockTokenUid,
		"LockStart" = LockStart,
		"LockEnd" = LockEnd
	WHERE "Uid" = LockUid;
	
	RETURN LockTokenUid;
END;
$$ LANGUAGE plpgsql;

CREATE OR REPLACE FUNCTION svc_lock.ReleaseResourceLockToken(
	lockTokenUid uuid
	)
	RETURNS uuid AS $$
DECLARE
	LockUid uuid;
BEGIN
	SELECT
		"Uid"
	INTO
		LockUid
	FROM svc_lock."Locks"
	WHERE "LockToken" = lockTokenUid;
	
	-- check if resource lock exists
	IF (LockUid IS NULL)
	THEN
		RETURN NULL;
	END IF;
	
	UPDATE svc_lock."Locks"
	SET
		"LockToken" = NULL,
		"LockStart" = NULL,
		"LockEnd" = NULL
	WHERE "Uid" = LockUid;
	
	RETURN lockTokenUid;
END;
$$ LANGUAGE plpgsql;
