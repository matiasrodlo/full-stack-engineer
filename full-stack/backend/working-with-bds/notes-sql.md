Sure, here's the updated SQL Query Cheat Sheet:

````markdown
# SQL Query Cheat Sheet

## Initialization

1. **`CREATE DATABASE`**

   - _Description:_ Creates a new database.
   - _How to use:_ Execute `CREATE DATABASE <database_name>;` in your SQL environment.

2. **`USE`**

   - _Description:_ Switches to a specific database.
   - _How to use:_ Use `USE <database_name>;` to select the database for subsequent operations.

3. **`CREATE TABLE`**

   - _Description:_ Creates a new table in the current database.
   - _How to use:_ Execute a statement like:
     ```sql
     CREATE TABLE <table_name> (
         column1 datatype1,
         column2 datatype2,
         ...
     );
     ```

4. **`INSERT INTO`**
   - _Description:_ Adds new records to a table.
   - _How to use:_ Execute a statement like:
     ```sql
     INSERT INTO <table_name> (column1, column2, ...)
     VALUES (value1, value2, ...);
     ```

## Checking Data

5. **`SELECT`**
   - _Description:_ Retrieves data from one or more tables.
   - _How to use:_ Execute `SELECT * FROM <table_name>;` to retrieve all columns from a specific table.

## Filtering Data

6. **`WHERE`**
   - _Description:_ Filters data based on a specified condition.
   - _How to use:_ Add `WHERE <condition>` to your `SELECT` statement to filter results.

## Sorting Data

7. **`ORDER BY`**
   - _Description:_ Sorts the result set based on one or more columns.
   - _How to use:_ Add `ORDER BY <column_name> [ASC|DESC];` to your `SELECT` statement to specify sorting.

## Aggregating Data

8. **`GROUP BY`**

   - _Description:_ Groups rows based on the values in specified columns.
   - _How to use:_ Include `GROUP BY <column_name>;` in your `SELECT` statement for aggregating data.

9. **`HAVING`**
   - _Description:_ Filters grouped data based on a specified condition.
   - _How to use:_ Add `HAVING <condition>` after `GROUP BY` for additional filtering.

## Joining Tables

10. **`INNER JOIN`**

    - _Description:_ Retrieves records that have matching values in both tables.
    - _How to use:_ Execute `SELECT * FROM table1 INNER JOIN table2 ON table1.column = table2.column;` to perform an inner join.

11. **`LEFT JOIN`**

    - _Description:_ Retrieves all records from the left table and the matched records from the right table.
    - _How to use:_ Use `SELECT * FROM table1 LEFT JOIN table2 ON table1.column = table2.column;` for a left join.

12. **`RIGHT JOIN`**

    - _Description:_ Retrieves all records from the right table and the matched records from the left table.
    - _How to use:_ Execute `SELECT * FROM table1 RIGHT JOIN table2 ON table1.column = table2.column;` for a right join.

13. **`FULL OUTER JOIN`**
    - _Description:_ Retrieves all records when there is a match in either the left or right table.
    - _How to use:_ Use `SELECT * FROM table1 FULL OUTER JOIN table2 ON table1.column = table2.column;` for a full outer join.

## Updating Data

14. **`UPDATE`**
    - _Description:_ Modifies existing records in a table.
    - _How to use:_ Execute `UPDATE <table_name> SET <column1=value1, column2=value2, ...> WHERE <condition>;` to update records.

## Deleting Data

15. **`DELETE`**
    - _Description:_ Deletes records from a table based on a condition.
    - _How to use:_ Use `DELETE FROM <table_name> WHERE <condition>;` to delete specific records.

## Common Commands

16. **`SELECT`**

    - _Description:_ The primary command for querying information from a database.
    - _How to use:_ `SELECT column1, column2 FROM table_name WHERE condition;`

17. **`AS`**

    - _Description:_ Renames a column or table in the query result.
    - _How to use:_ `SELECT column_name AS alias_name FROM table_name;`

18. **`DISTINCT`**

    - _Description:_ Returns unique values in a specified column or columns.
    - _How to use:_ `SELECT DISTINCT column_name FROM table_name;`

19. **`LIKE` and `BETWEEN`**

    - _Description:_ Special operators for pattern matching and range selection.
    - _How to use:_ `SELECT * FROM table_name WHERE column_name LIKE 'pattern';` or `SELECT * FROM table_name WHERE column_name BETWEEN value1 AND value2;`

20. **`AND` and `OR`**

    - _Description:_ Logical operators to combine multiple conditions.
    - _How to use:_ `SELECT * FROM table_name WHERE condition1 AND condition2;` or `SELECT * FROM table_name WHERE condition1 OR condition2;`

21. **`ORDER BY`**

    - _Description:_ Sorts the result set based on specified columns.
    - _How to use:_ `SELECT * FROM table_name ORDER BY column1 ASC, column2 DESC;`

22. **`LIMIT`**

    - _Description:_ Specifies the maximum number of rows returned by the query.
    - _How to use:_ `SELECT * FROM table_name LIMIT 10;`

23. **`CASE`**
    - _Description:_ Creates different outputs based on specified conditions.
    - _How to use:_
      ```sql
      SELECT column_name,
             CASE
                WHEN condition1 THEN 'output1'
                WHEN condition2 THEN 'output2'
                ELSE '
      ```

default_output'
END AS new_column
FROM table_name;
```

## Aggregate Functions

24. **`COUNT()`**

    - _Description:_ Counts the number of rows in a specified column or the entire table.
    - _How to use:_ `SELECT COUNT(column_name) FROM table_name;`

25. **`SUM()`**

    - _Description:_ Calculates the sum of values in a specified column.
    - _How to use:_ `SELECT SUM(column_name) FROM table_name;`

26. **`MAX()` and `MIN()`**

    - _Description:_ Retrieve the largest or smallest value in a specified column.
    - _How to use:_ `SELECT MAX(column_name) FROM table_name;` or `SELECT MIN(column_name) FROM table_name;`

27. **`AVG()`**

    - _Description:_ Calculates the average of values in a specified column.
    - _How to use:_ `SELECT AVG(column_name) FROM table_name;`

28. **`ROUND()`**
    - _Description:_ Rounds the values in a specified column to a specified number of decimal places.
    - _How to use:_ `SELECT ROUND(column_name, decimals) FROM table_name;`

## Advanced Commands

29. **`JOIN`**

    - _Description:_ Combines rows from different tables based on a specified condition.
    - _How to use:_ `SELECT * FROM table1 JOIN table2 ON table1.column = table2.column;`

30. **`LEFT JOIN`**

    - _Description:_ Returns every row from the left table and fills in NULL values for unmatched rows from the right table.
    - _How to use:_ `SELECT * FROM table1 LEFT JOIN table2 ON table1.column = table2.column;`

31. **`PRIMARY KEY`**

    - _Description:_ A column that serves as a unique identifier for rows in a table.
    - _How to use:_ `CREATE TABLE table_name (column1 datatype PRIMARY KEY, ...);`

32. **`FOREIGN KEY`**

    - _Description:_ A column that contains the primary key of another table, establishing a link between the two tables.
    - _How to use:_ `CREATE TABLE table_name (column1 datatype, column2 datatype, FOREIGN KEY (column1) REFERENCES another_table(column1));`

33. **`CROSS JOIN`**

    - _Description:_ Combines all rows of one table with all rows of another table, creating a Cartesian product.
    - _How to use:_ `SELECT * FROM table1 CROSS JOIN table2;`

34. **`UNION`**

    - _Description:_ Combines the result sets of two or more SELECT statements.
    - _How to use:_ `SELECT column1, column2 FROM table1 UNION SELECT column1, column2 FROM table2;`

35. **`WITH`**
    - _Description:_ Defines one or more temporary tables (common table expressions) that can be referenced within the context of a SELECT, INSERT, UPDATE, or DELETE statement.
    - _How to use:_
      ```sql
      WITH temp_table AS (
        SELECT column1, column2 FROM original_table WHERE condition
      )
      SELECT * FROM temp_table;
      ```
````
