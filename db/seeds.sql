INSERT INTO department (name)
VALUES ("sales"),
        ("production"),
        ("management");
INSERT INTO role (title, salary, department_id)
VALUES ("manager", 60000, 3),
        ("csr", 40000, 2),
        ("sales consultant", 90000,1);
INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("Mr", "Managey",1,Null),
        ("Chris", "Customery",2,1),
        ("Sly", "Salesly",3,1);
        