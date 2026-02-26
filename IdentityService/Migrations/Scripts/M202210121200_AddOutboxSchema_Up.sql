CREATE SCHEMA IF NOT EXISTS svc_outbox;

CREATE TABLE IF NOT EXISTS svc_outbox."Messages"
(
    "Uid" uuid NOT NULL,
    "Message" text NOT NULL,
	"Created" timestamp without time zone DEFAULT NOW(),
    CONSTRAINT "PK_Messages" PRIMARY KEY ("Uid")
);

CREATE INDEX IF NOT EXISTS IX_Messages_Created ON svc_outbox."Messages" ("Created" ASC);