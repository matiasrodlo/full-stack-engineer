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