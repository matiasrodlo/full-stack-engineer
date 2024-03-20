SELECT current_user;

-- Investigating Superuser Permissions

SELECT rolname
FROM pg_catalog.pg_roles;

SET ROLE analyst;

SELECT grantee, table_name, privilege_type 
FROM information_schema.table_privileges 
WHERE grantee = 'analyst';

SELECT * FROM event_log WHERE id = 1;
