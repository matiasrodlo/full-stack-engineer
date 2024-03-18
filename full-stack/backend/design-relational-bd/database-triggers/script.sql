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

--What Records are modified by a Trigger?

SELECT * FROM customers;

CREATE TRIGGER each_statement_trigger
  AFTER UPDATE ON customers
  FOR EACH STATEMENT
  EXECUTE PROCEDURE statement_function();

UPDATE customers
SET years_old = years_old + 1;

SELECT * FROM customers;

-- Focus trigger    

CREATE TRIGGER update_trigger_high
  BEFORE UPDATE ON clients
  FOR EACH ROW
  WHEN (NEW.total_spent >= 1000)
  EXECUTE PROCEDURE set_high_spender();

CREATE TRIGGER update_trigger_low
  BEFORE UPDATE ON clients
  FOR EACH ROW
  WHEN (NEW.total_spent < 1000)
  EXECUTE PROCEDURE set_low_spender();

SELECT * FROM clients ORDER BY client_id;

UPDATE clients
SET total_spent = 5000
WHERE last_name = 'Campbell';

UPDATE clients
SET total_spent = 100
WHERE last_name = 'Lewis';

SELECT * FROM clients ORDER BY client_id;