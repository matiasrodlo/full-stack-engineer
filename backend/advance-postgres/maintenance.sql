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

-- Deletes and Table Size

DELETE FROM mock.stock_prices
WHERE day_id IN (5, 6);

SELECT pg_size_pretty(pg_total_relation_size('mock.stock_prices'))

ANALYZE mock.stock_prices;

SELECT relname, n_dead_tup 
FROM pg_stat_all_tables 
WHERE relname = mock.stock_prices;

-- Vacuum Full

select relname, n_live_tup, n_dead_tup , last_vacuum
from pg_catalog.pg_stat_all_tables
where relname = 'orders';

VACUUM FULL mock.orders;

SELECT pg_size_pretty(
    pg_total_relation_size('mock.orders')
) as total_size;

-- Truncate

TRUNCATE mock.current_day_logins;

SELECT 
    pg_size_pretty(pg_table_size('mock.current_day_logins')) as tbl_size, 
    pg_size_pretty(pg_indexes_size('mock.current_day_logins')) as idx_size,
    pg_size_pretty(pg_total_relation_size('mock.current_day_logins')) as total_size;
