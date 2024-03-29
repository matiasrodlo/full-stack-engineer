SELECT * from mock.time_series LIMIT 10;

-- Understanding Object Size

SELECT pg_size_pretty(
  pg_table_size('mock.house_prices')
);

SELECT pg_size_pretty( 
    pg_indexes_size('mock.house_prices')
);

SELECT pg_size_pretty(pg_total_relation_size('mock.house_prices_pk'));

SELECT pg_size_pretty(pg_total_relation_size('mock.house_prices'));

--Updates and Table Size

SELECT pg_size_pretty(
  pg_total_relation_size('mock.house_prices')
);

UPDATE mock.house_prices 
SET  broker_id = 'GA'
WHERE broker_id = 'GE';

SELECT pg_size_pretty(
  pg_total_relation_size('mock.house_prices')
);

-- VACUUM

UPDATE mock.stock_prices
SET price_sh = price_sh + 10.00
WHERE trading_date > '2020-01-01'::date;

VACUUM mock.stock_prices;

SELECT pg_size_pretty(
    pg_total_relation_size('mock.stock_prices')
) as total_size;

-- Analyze and Autovacuum

analyze mock.orders;

SELECT schemaname, relname, 
    last_vacuum,
    last_autovacuum, 
    last_analyze
FROM pg_stat_all_tables
WHERE relname = 'orders';
