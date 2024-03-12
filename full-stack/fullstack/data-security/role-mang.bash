$ CREATE ROLE p_customers_read;
CREATE ROLE$ GRANT SELECT ON customers TO p_customers_read;
GRANT$ CREATE ROLE g_employees;
CREATE ROLE$ GRANT p_customers_read TO g_employees
GRANT$ GRANT p_customers_read TO g_employees;
GRANT$ CREATE ROLE u_example WITH LOGIN;
CREATE ROLE$ GRANT g_employees TO u_example;
GRANT$ REVOKE SELECT ON customers FROM PUBLIC;
REVOKE$ 