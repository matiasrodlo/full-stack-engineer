SELECT rolname 
FROM pg_roles
WHERE rolsuper;

SELECT * 
FROM pg_roles;

CREATE ROLE abc_open_data WITH LOGIN;

CREATE ROLE publishers WITH NOLOGIN IN ROLE abc_open_data;

GRANT USAGE ON SCHEMA analytics TO publishers;

GRANT SELECT ON ALL TABLES IN SCHEMA analytics TO publishers;

SELECT * FROM information_schema.table_privileges
WHERE grantee = 'publishers';

SELECT * FROM analytics.downloads limit 10;

SELECT * FROM directory.datasets LIMIT 5;

GRANT USAGE ON SCHEMA directory TO publishers;


GRANT SELECT (id, create_date, hosting_path, publisher, src_size) 
ON directory.datasets TO publishers;

SELECT id, publisher, hosting_path, data_checksum 
FROM directory.datasets;

-- Create the row-level security policy
CREATE POLICY publisher_select_policy ON analytics.downloads 
FOR SELECT TO publishers USING (publisher = current_user);

-- Enable row-level security on the table
ALTER TABLE analytics.downloads ENABLE ROW LEVEL SECURITY;


-- Query the table as superuser
SELECT * FROM analytics.downloads LIMIT 10;

-- Set your role to abc_open_data
SET ROLE abc_open_data;

-- Query the table again as abc_open_data
SELECT * FROM analytics.downloads LIMIT 10;