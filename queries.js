const mysql = require('mysql2');
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'pw',
    database: 'employee_db'
  });
  const cTable = require('console.table');





function viewAllDepartments () {
// shows a formatted table showing department names and ids
connection.query(
    'SELECT * FROM `department`',
    function(err, results) {
      console.log('\n');
      console.table(results);
      console.log ('arrow up to return to the menu');
    if (err) throw err;
    });
}

function viewAllRoles() {
// shows the job title, role id, the department that role belongs to, and the salary for that role
connection.query(
    'SELECT * FROM `role`',
    function(err, results) {
      console.log('\n');
      console.table(results);
      console.log ('arrow up to return to the menu');
    if (err) throw err;
    });
}

function viewAllEmployees() {
    connection.query('SELECT * FROM `employee`',
    function(err, results) {
      console.log('\n');
      console.table(results);
      console.log ('arrow up to return to the menu');
    if (err) throw err;
    });
}
function addDepartmentToDatabase(department) {
    //adds department to database
    console.log(department);
}

function addRoleToDatabase(name, salary, department, manager) {
console.log(name, salary, department, manager);
}
function addEmployeeToDatabase (firstname, lastname, role, manager){
    console.log(firstname, lastname, role, manager);
};

function getUpdateArray() {
    //returns a list of all employees in a stringified array that is then available for the inquirer question
   return 'larry';
}
function getRoleArray () {
    return 'manager';
}

function updateDatabase(employee, role) {
//updates the database with the selected employee's updated role
console.log(employee, role);
}


module.exports = {
    viewAllDepartments, viewAllRoles, viewAllEmployees, addDepartmentToDatabase, getUpdateArray, getRoleArray, updateDatabase, addRoleToDatabase, addEmployeeToDatabase
}