
$ CREATE ROLE p_students_read;
^CREATE ROLE$ CREATE ROLE p_teachers_read;
^CREATE ROLE$ CREATE ROLE p_students_write;
^CREATE ROLE$ CREATE ROLE p_teachers_write;
^CREATE ROLE$ ..
command not recognized$ 
$ GRANT SELECT ON students TO p_students_read;
GRANT$ GRANT SELECT ON teachers TO p_teachers_read;
GRANT$ 
$ GRANT SELECT, INSERT, UPDATE, DELETE ON teachers TO p_teachers_write;
GRANT$ GRANT SELECT, INSERT, UPDATE, DELETE ON teachers TO p_students_write;
GRANT$ 
$ CREATE ROL g_school
command not recognized$ CREATE ROLE g_school
^CREATE ROLE$ CREATE ROLE g_district
^CREATE ROLE$ 
$ GRANT p_students_read TO g_school;
GRANT$ GRANT p_teachers_read TO g_school;
GRANT$ GRANT p_teachers_write TO g_school;
GRANT$ GRANT p_students_write TO g_school;
GRANT$ 
$ CREATE ROLE u_principal_skinner WITH LOGIN
^CREATE ROLE$ CREATE ROLE u_teacher_hodge WITH LOGIN
^CREATE ROLE$ CREATE ROLE u_it_sonia WITH LOGIN
^CREATE ROLE$ 
$ GRANT g_district TO u_principal_skinner;
GRANT$ GRANT g_school TO u_teacher_hodge;
GRANT$ GRANT g_school TO u_it_sonia;
GRANT$ 
$ REVOKE ALL ON students FROM PUBLIC
REVOKE$ REVOKE ALL ON teachers FROM PUBLIC
REVOKE$ 