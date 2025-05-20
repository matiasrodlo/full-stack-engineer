SELECT *
FROM store
LIMIT 10;

SELECT COUNT(DISTINCT(order_id)) 
FROM store;

SELECT COUNT(DISTINCT(customer_id)) 
FROM store;

SELECT customer_id, customer_email, customer_phone
FROM store
WHERE customer_id = 1;

SELECT item_1_id, item_1_name, item_1_price
FROM store
WHERE item_1_id = 4;

CREATE TABLE customers AS
SELECT DISTINCT customer_id, customer_phone, customer_email
FROM store;
