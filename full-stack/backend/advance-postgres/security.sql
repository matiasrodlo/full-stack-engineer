SELECT current_user;

-- Investigating Superuser Permissions

SELECT rolname
FROM pg_catalog.pg_roles;

SET ROLE analyst;

SELECT grantee, table_name, privilege_type 
FROM information_schema.table_privileges 
WHERE grantee = 'analyst';

SELECT * FROM event_log WHERE id = 1;

-- Creating and Modifying Database Roles

CREATE ROLE analyst WITH LOGIN NOSUPERUSER;

CREATE ROLE analyst_mgmt WITH LOGIN CREATEROLE;

ALTER ROLE analyst_mgmt WITH LOGIN CREATEDB;

SET ROLE analyst_mgmt;

CREATE ROLE wilson WITH LOGIN;

SELECT * FROM pg_catalog.pg_roles 
ORDER BY rolname;


-- Modifying Permissions on Existing Schemas and Tables

GRANT CREATE, USAGE ON SCHEMA marketing TO analyst;

GRANT SELECT, INSERT, DELETE ON marketing.prospects TO analyst;

REVOKE DELETE ON marketing.prospects FROM analyst;

SET ROLE analyst;

DELETE FROM marketing.prospects WHERE id = 2;

-- Modifying Default Permissions

GRANT SELECT, DELETE, UPDATE, INSERT ON census.economic_survey TO writer;

ALTER DEFAULT PRIVILEGES IN SCHEMA census
GRANT SELECT, DELETE, UPDATE, INSERT ON TABLES TO writer;

CREATE TABLE census.housing_survey (
    area_id int primary key, 
    median_rent int
);

SELECT
    grantee, 
    table_schema,
    table_name,
    privilege_type
FROM information_schema.table_privileges 
WHERE table_schema  = 'census'
AND grantee = 'writer';