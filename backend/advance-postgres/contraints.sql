SELECT * 
FROM talks
LIMIT 10;

SELECT *
FROM speakers
LIMIT 10;

-- PostgreSQL Data Types

CREATE TABLE attendees (
    id integer,
    name varchar,
    total_tickets_reserved integer,
    standard_tickets_reserved integer,
    vip_tickets_reserved integer
 );

 INSERT INTO attendees VALUES (1, 'John Smith', 2.0, 1, 1);

-- Nullability Constraints

create table speakers (
  id integer NOT NULL,
  email varchar NOT NULL,
  name varchar NOT NULL,
  organization varchar,
  title varchar,
  years_in_role integer
);

INSERT INTO speakers (id, email, name, organization, title, years_in_role)
VALUES (1, 'awilson@ABCcorp.com', 'A. Wilson', 'ABC Corp.', 'CTO', 6);

-- Improving Tables with Constraints

ALTER TABLE speakers 
ALTER COLUMN name SET NOT NULL;

UPDATE speakers
SET organization = 'Unaffiliated'
WHERE organization IS NULL;

ALTER TABLE speakers 
ALTER COLUMN organization SET NOT NULL;

-- CHECK

ALTER TABLE speakers
ADD CHECK (years_in_role < 100);

-- Check Constraints Continued

ALTER TABLE speakers 
ADD CHECK (years_in_role < 100 AND years_in_role > 0);

ALTER TABLE attendees 
ADD CHECK (standard_tickets_reserved + vip_tickets_reserved = total_tickets_reserved);

-- Using Unique Constraints

ALTER TABLE speakers
ADD UNIQUE (email);

CREATE TABLE registrations (
    id integer NOT NULL,
    attendee_id integer NOT NULL,
    session_timeslot timestamp NOT NULL,
    talk_id  integer NOT NULL,
    UNIQUE (session_timeslot, attendee_id)
);

-- primary keys

ALTER TABLE speakers
ADD PRIMARY KEY (id);

INSERT INTO speakers (email, name, organization, title, years_in_role, id)
VALUES ('J.Saunders@ABCTech.com', 'Joan Saunders', 'ABC Tech.', 'Sr. Data Scientist', 6, 100);

-- Foreign Keys

ALTER TABLE talks
ADD FOREIGN KEY (speaker_id)
REFERENCES speakers (id);

INSERT INTO talks (id, title, speaker_id, estimated_length, session_timeslot) VALUES (21, 'Data Warehousing Best Practices', 101, 30, '2020-08-15 18:00');

-- Cascading Changes

ALTER TABLE talks
ADD FOREIGN KEY (speaker_id)
REFERENCES speakers (id) ON DELETE CASCADE;

DELETE FROM speakers 
WHERE id = 2;