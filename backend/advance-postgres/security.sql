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

-- Groups and Inheritance

CREATE ROLE pgdba WITH SUPERUSER CREATEDB NOLOGIN; 

CREATE ROLE david WITH LOGIN IN ROLE pgdba, employees; 

SELECT rolname, rolsuper 
FROM pg_catalog.pg_roles 
WHERE rolname = 'david';

SET ROLE david;

SELECT * 
FROM cc_user.company_startdates;

-- Column Level Security

GRANT UPDATE (project_name, project_status) 
ON projects to manager;

select * 
from information_schema.column_privileges
where grantee = 'manager';

-- Row Level Security

CREATE POLICY sales_rls_policy ON accounts FOR DELETE
TO sales USING (salesperson = current_user);

ALTER TABLE accounts ENABLE ROW LEVEL SECURITY;

SET ROLE alice;

DELETE FROM accounts WHERE contract_amt < 10000;

SELECT * FROM accounts;


