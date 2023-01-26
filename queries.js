const mysql = require('mysql2');
const connection = mysql.createConnection({host: 'localhost', user: 'root', password: 'pw', database: 'employee_db'});


function viewAllDepartments() {
    return connection.promise().query('SELECT * FROM `department`');
}
function viewAllRoles() {
    return connection.promise().query('SELECT * FROM `role`');
}

function viewAllEmployees() {
    return connection.promise().query('SELECT * FROM `employee`');
}
function addDepartmentToDatabase(department) {
    let addDep = 'INSERT INTO department (name) VALUES' + ' ' + '(' + '"' + `${department}` + '"' + ')';
    return connection.promise().query(addDep);
}

function addRoleToDatabase(title, salary, department) {
    let addRole = 'INSERT INTO role (title, salary, department_id) VALUES' + ' ' + '(' + '"' + `${title}` + '"' + ',' + `${salary}` + ',' + '"' + `${department}` + '"' + ')';
    return connection.promise().query(addRole);
}
function addEmployeeToDatabase(firstname, lastname, role, manager) {
    if (manager === "") {
      manager = 'null'
    }
    let addEmployee = 'INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES' + ' ' + '(' + '"' + `${firstname}` + '"' + ',' + '"' + `${lastname}` + '"' + ',' + `${role}` + ',' + `${manager}` + ')';
    return connection.promise().query(addEmployee);
};

function updateDatabase(employee, role) { // updates the database with the selected employee's updated role
    let first_name = employee.substring(0, employee.indexOf(' '));
    let last_name = employee.substring(employee.indexOf(' ') + 1);
    let role_id = parseInt(role.substring(role.indexOf(' ') + 1));
    let update = `UPDATE employee SET role_id = ${role_id} WHERE first_name = "${first_name}" AND last_name = "${last_name}"`
    connection.query(update);

    console.log("\n database updated")
}

function getDepartmentIdFromName(department) {

    return connection.promise().query(`SELECT id FROM department WHERE name = "${department}"`);
}

function getRoleIdFromName(role) {
    return connection.promise().query(`SELECT id FROM role WHERE title = "${role}"`);
}
function getEmployeeIdFromName(manager) {
    let first_name = manager.substring(0, manager.indexOf(' '));
    let last_name = manager.substring(manager.indexOf(' ') + 1);
    return connection.promise().query(`SELECT id FROM employee WHERE first_name = "${first_name}" AND last_name = ${last_name}`);
}

function getDepartmentBudget(department) {
    let department_id = parseInt(department.substring(department.indexOf(' ') + 1));
    return connection.promise().query(`SELECT * FROM role WHERE department_id = ${department_id}`);

}

//SELECT SUM (salary) FROM role WHERE department_id = ${department_id}
// (`SELECT * FROM role WHERE department_id = ${department_id}`);

module.exports = {
    viewAllDepartments,
    viewAllRoles,
    viewAllEmployees,
    addDepartmentToDatabase,
    updateDatabase,
    addRoleToDatabase,
    addEmployeeToDatabase,
    getDepartmentIdFromName,
    getRoleIdFromName,
    getEmployeeIdFromName,
    getDepartmentBudget
}
