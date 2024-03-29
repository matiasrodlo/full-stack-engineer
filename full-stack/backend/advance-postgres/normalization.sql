SELECT *
FROM college
LIMIT 10;

-- Duplicated Data

SELECT advisor_name, advisor_department, advisor_email
FROM college
WHERE advisor_name = 'Brunson';

SELECT major_1, major_1_credits_reqd
FROM college
WHERE major_1 = 'Computer Science';

-- Data Update Challenges

SELECT advisor_name,advisor_department, advisor_email 
FROM college 
WHERE advisor_name='Sommer';

UPDATE college
SET advisor_email = 'sophie@college.edu'
WHERE advisor_name = 'Sommer' AND advisor_department = 'Statistics';

-- Data Insertion Challenges

INSERT INTO college (student_id, advisor_name,advisor_department, advisor_email)
VALUES ('-1', 'Stern', 'Biology', 'stern111@college.edu');

SELECT *
FROM college
WHERE student_id = '-1'

-- Search and Sort Efficiency

WITH majors AS(
SELECT major_1 as major 
FROM college
UNION ALL
SELECT major_2 as major
FROM college
WHERE major_2 IS NOT NULL
)
SELECT major, count(*)
FROM majors
GROUP BY major
ORDER BY count DESC;

-- Restructuring the Advisor Columns

CREATE TABLE advisors AS
SELECT DISTINCT advisor_email, advisor_name, advisor_department 
FROM college;

ALTER TABLE college
DROP COLUMN advisor_name, 
DROP COLUMN advisor_department;

SELECT *
FROM advisors
WHERE advisor_name = 'Brunson';

CREATE TABLE majors AS
SELECT DISTINCT major_1, major_1_credits_reqd
FROM college;

CREATE TABLE students_majors AS
SELECT major_1 as major, student_id 
FROM college
UNION ALL
SELECT major_2 as major, student_id
FROM college
WHERE major_2 IS NOT NULL;

ALTER TABLE college
DROP COLUMN major_1, 
DROP COLUMN major_1_credits_reqd,
DROP COLUMN major_2,
DROP COLUMN major_2_credits_reqd;

SELECT *
FROM students_majors
ORDER BY student_id
LIMIT 10;