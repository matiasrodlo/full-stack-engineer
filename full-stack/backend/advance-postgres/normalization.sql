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