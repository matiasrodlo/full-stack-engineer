EXPLAIN ANALYZE
SELECT customer_id, quantity
FROM orders
WHERE quantity > 18;

CREATE INDEX idx_quantity_gt_18 ON orders(quantity) WHERE quantity > 18;

EXPLAIN ANALYZE
SELECT customer_id, quantity
FROM orders
WHERE quantity > 18;

ALTER TABLE customers
  ADD CONSTRAINT customers_pkey
    PRIMARY KEY (customer_id);

EXPLAIN ANALYZE SELECT *
FROM customers
WHERE customer_id < 100;

CLUSTER customers USING customers_pkey;

-- Create a composite index on author and title columns
CREATE INDEX idx_author_title ON books(author, title);

EXPLAIN ANALYZE
SELECT *
FROM orders
WHERE quantity * price_base > 100;

CREATE INDEX orders_shipping_delay_idx ON orders ((ship_date - order_date));

EXPLAIN ANALYZE
SELECT *
FROM orders
WHERE quantity * price_base > 100;