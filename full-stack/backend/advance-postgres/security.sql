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
