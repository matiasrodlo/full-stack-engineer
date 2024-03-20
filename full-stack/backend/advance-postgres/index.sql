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

-- Index Filtering

CREATE INDEX customers_last_name_idx ON customers(last_name);

--Multicolumn Indexes

EXPLAIN ANALYZE SELECT *
FROM customers
WHERE last_name= 'Jones'
     AND first_name= 'David';

CREATE INDEX customers_last_name_first_name_idx ON customers(last_name, first_name);

EXPLAIN ANALYZE SELECT *
FROM customers
WHERE last_name= 'Jones'
     AND first_name= 'David';

-- Drop an Index

SELECT *
FROM pg_Indexes
WHERE tablename = 'customers';

DROP INDEX customers_last_name_idx;

SELECT *
FROM pg_Indexes
WHERE tablename = 'customers';