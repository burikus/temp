CREATE SCHEMA IF NOT EXISTS svc_mailbox;

CREATE TABLE IF NOT EXISTS svc_mailbox."EMails"
(
    "Uid" uuid NOT NULL,
    "MessageData" text NOT NULL,
	"IsSent" boolean NOT NULL DEFAULT false,
	"AttemptsCount" int NOT NULL DEFAULT 0,
	"LastAttempt" timestamp without time zone NULL,
	"LastAttemptError" text NULL,
	"Created" timestamp without time zone NOT NULL DEFAULT NOW(),
    CONSTRAINT "PK_EMails" PRIMARY KEY ("Uid")
);

CREATE INDEX IF NOT EXISTS IX_EMails_Created ON svc_mailbox."EMails" ("Created" ASC);