CREATE SCHEMA IF NOT EXISTS svc_lock;

CREATE TABLE IF NOT EXISTS svc_lock."Locks"
(
    "Id" uuid NOT NULL,
    "ResourceId" character varying(256),
	"LockToken" uuid,
	"LockStart" timestamp without time zone,
	"LockEnd" timestamp without time zone,
	CONSTRAINT "UNQ_Locks_LockToken" UNIQUE("LockToken"),
	CONSTRAINT "UNQ_Locks_ResourceId" UNIQUE("ResourceId"),
    CONSTRAINT "PK_Locks" PRIMARY KEY ("Id")
);

CREATE OR REPLACE FUNCTION svc_lock.TryAquireResourceLockToken(
	resourceId character varying(256),
	lockSpanSeconds integer
	)
	RETURNS uuid AS $$
DECLARE
	LockId uuid;
	LockTokenId uuid;
	LockStart timestamp without time zone;
	LockEnd timestamp without time zone;
BEGIN
	SELECT
		"Id",
		"LockToken",
		"LockStart",
		"LockEnd"
	INTO
		LockId,
		LockTokenId,
		LockStart,
		LockEnd
	FROM svc_lock."Locks"
	WHERE "ResourceId" = resourceId FOR UPDATE;
	
	-- check if resource lock is new
	IF (LockId IS NULL)
	THEN
		LockId := uuid_generate_v4();
		LockTokenId := uuid_generate_v4();
		LockStart := CURRENT_TIMESTAMP;
		LockEnd := CURRENT_TIMESTAMP + make_interval(secs => lockSpanSeconds);
		
		INSERT INTO svc_lock."Locks" (
			"Id", "ResourceId", "LockToken", "LockStart", "LockEnd"
		)
		VALUES (
			LockId, resourceId, LockTokenId, LockStart, LockEnd
		);
		
		RETURN LockTokenId;
	END IF;
	
	IF (LockEnd IS NOT NULL AND CURRENT_TIMESTAMP < LockEnd)
	THEN
		RETURN NULL; -- previous lock is not expired
	END IF;
	
	LockTokenId := uuid_generate_v4();
	LockStart := CURRENT_TIMESTAMP;
	LockEnd := CURRENT_TIMESTAMP + make_interval(secs => lockSpanSeconds);
	
	UPDATE svc_lock."Locks"
	SET
		"LockToken" = LockTokenId,
		"LockStart" = LockStart,
		"LockEnd" = LockEnd
	WHERE "Id" = LockId;
	
	RETURN LockTokenId;
END;
$$ LANGUAGE plpgsql;

CREATE OR REPLACE FUNCTION svc_lock.ReleaseResourceLockToken(
	lockTokenId uuid
	)
	RETURNS uuid AS $$
DECLARE
	LockId uuid;
BEGIN
	SELECT
		"Id"
	INTO
		LockId
	FROM svc_lock."Locks"
	WHERE "LockToken" = lockTokenId;
	
	-- check if resource lock exists
	IF (LockId IS NULL)
	THEN
		RETURN NULL;
	END IF;
	
	UPDATE svc_lock."Locks"
	SET
		"LockToken" = NULL,
		"LockStart" = NULL,
		"LockEnd" = NULL
	WHERE "Id" = LockId;
	
	RETURN lockTokenId;
END;
$$ LANGUAGE plpgsql;
