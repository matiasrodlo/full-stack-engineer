SELECT * FROM customers;

SELECT *
FROM pg_Indexes
WHERE tablename = 'customers';

-- partial index

EXPLAIN ANALYZE SELECT *
FROM customers
WHERE years_old BETWEEN 13 AND 19;

CREATE INDEX customers_years_old_teen_idx ON customers (years_old) WHERE years_old BETWEEN 13 and 19;

EXPLAIN ANALYZE SELECT *
FROM customers
WHERE years_old BETWEEN 13 AND 19;

--Order By

CREATE INDEX customers_state_name_email_address_idx ON customers(state_name, email_address);

EXPLAIN ANALYZE SELECT state_name, email_address
FROM customers
WHERE state_name = 'California' OR state_name = 'Ohio'
ORDER BY state_name DESC, email_address;

CREATE INDEX customers_state_name_email_address_ordered_idx ON customers(state_name DESC, email_address ASC);

EXPLAIN ANALYZE SELECT state_name, email_address
FROM customers
WHERE state_name = 'California' OR state_name = 'Ohio'
ORDER BY state_name DESC, email_address

-- primary key

ALTER TABLE customers ADD PRIMARY KEY (customer_id);

SELECT *
FROM pg_Indexes
WHERE tablename = 'customers';

-- clustered index

CLUSTER customers USING customers_last_name_idx;

CLUSTER customers

-- non clustered index

CREATE INDEX customers_state_name_idx ON customers(state_name);

SELECT last_name, state_name
FROM customers
WHERE state_name = 'Texas'
ORDER BY last_name;

-- Index-Only Scans

EXPLAIN ANALYZE SELECT first_name, last_name, email_address
FROM customers
WHERE last_name = 'Smith';

CREATE INDEX customers_last_name_first_name_email_address_idx ON customers (last_name, first_name, email_address);

EXPLAIN ANALYZE SELECT first_name, last_name, email_address
FROM customers
WHERE last_name = 'Smith';