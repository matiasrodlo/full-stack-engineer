SELECT *
FROM customers;

SELECT *
FROM pg_Indexes
WHERE tablename = 'customers';

-- Impact of Indexes

EXPLAIN ANALYZE SELECT *
FROM customers
WHERE first_name = 'David';

EXPLAIN ANALYZE SELECT *
FROM customers
WHERE last_name = 'Jones';

-- How to Build an Index

CREATE INDEX customers_city_idx ON customers(city);