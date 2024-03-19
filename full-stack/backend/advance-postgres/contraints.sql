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
