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

Feel free to customize and expand this SQL cheat sheet according to your needs!
