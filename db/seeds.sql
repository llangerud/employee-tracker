INSERT INTO department (name)
VALUES ("sales"),
        ("production"),
        ("management");
INSERT INTO role (title, salary, department_id)
VALUES ("manager", 1000, 1),
        ("CSR", 100, 2),
        ("CEO", 1000000,3);
INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("robert", "robertson",3,1),
        ("karen", "karrenton",2,Null),
        ("kyle", "kylewright",1,1);
        