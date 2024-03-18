-- Queries to view initial data in customers and customers_log tables
SELECT *
FROM customers
ORDER BY customer_id;

SELECT *
FROM customers_log;

-- Creating a trigger for customer updates
CREATE TRIGGER customer_updated
    BEFORE UPDATE ON customers
    FOR EACH ROW
    EXECUTE PROCEDURE log_customers_change();

-- Update operations on customers
UPDATE customers
SET first_name = 'Steve'
WHERE last_name = 'Hall';

-- Query to view updated data in customers table
SELECT *
FROM customers
ORDER BY customer_id;

-- No query needed here as the trigger will log the update in customers_log table

-- Correction: UPDATE statement to modify the years_old column, not customers_log
UPDATE customers
SET years_old = 24
WHERE last_name = 'Cook';

-- Query to view updated data in customers table
SELECT *
FROM customers
ORDER BY customer_id;

-- No query needed here as the trigger will log the update in customers_log table

-- Creating a trigger for customer insertions
CREATE TRIGGER customer_insert
    AFTER INSERT ON customers
    FOR EACH STATEMENT
    EXECUTE PROCEDURE log_customers_change();

-- Insert operation on customers
INSERT INTO customers (first_name, last_name, years_old)
VALUES
    ('Jeffrey', 'Cook', 66),
    ('Arthur', 'Turner', 49),
    ('Nathan', 'Cooper', 72);

-- Query to view inserted data in customers table
SELECT *
FROM customers
ORDER BY customer_id;

-- No query needed here as the trigger will log the insertions in customers_log table

-- Creating a trigger for enforcing minimum age
CREATE TRIGGER customer_min_age
    BEFORE UPDATE ON customers
    FOR EACH ROW
    WHEN (NEW.years_old < 13)
    EXECUTE PROCEDURE override_with_min_age();

-- Update operation on customers to set years_old to 12
UPDATE customers
SET years_old = 12
WHERE last_name = 'Campbell';

-- Update operation on customers to set years_old to 9 and first_name to 'Dennis'
UPDATE customers
SET years_old = 9,
    first_name = 'Dennis'
WHERE last_name = 'Hall';

-- Query to view updated data in customers table
SELECT *
FROM customers
ORDER BY customer_id;

-- No query needed here as the triggers will log the updates in customers_log table

-- Query to view entries in customers_log table
SELECT *
FROM customers_log;
