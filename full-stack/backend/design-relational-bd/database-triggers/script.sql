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
