SELECT * FROM customers;

UPDATE customers
SET years_old = 42
WHERE last_name = 'Hall';

SELECT * FROM customers;

-- How are Triggers Activated?

CREATE TRIGGER insert_trigger
  BEFORE INSERT ON customers
  FOR EACH ROW
  EXECUTE PROCEDURE insert_function();

SELECT * FROM customers;

INSERT INTO customers (first_name, last_name)
VALUES ('John', 'Doe');

SELECT * FROM customers;

-- When is a Trigger Activated?

SELECT *
FROM customers
ORDER BY customer_id;

CREATE TRIGGER after_trigger
AFTER UPDATE ON customers
FOR EACH ROW
EXECUTE PROCEDURE log_customers_change();

UPDATE customers
SET years_old = years_old + 10
WHERE customer_id = 1;

SELECT * FROM customers ORDER BY customer_id;

SELECT * FROM customers_log;