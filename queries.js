const mysql = require('mysql2');
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'pw',
    database: 'employee_db'
  });



function viewAllDepartments () {
 return connection.promise().query('SELECT * FROM `department`');
}
 function viewAllRoles() {
return connection.promise().query('SELECT * FROM `role`');
}

function viewAllEmployees() {
  return connection.promise().query('SELECT * FROM `employee`');
}
function addDepartmentToDatabase(department) {
    let addDep = 'INSERT INTO department (name) VALUES' + ' ' + '(' + '"'+`${department}`+'"'+')';
  return  connection.promise().query(addDep);  
}

function addRoleToDatabase(title, salary, department) {
let addRole = 'INSERT INTO role (title, salary, department_id) VALUES' + ' ' + '(' + '"'+`${title}`+'"'+',' +`${salary}`+',' + '"'+`${department}`+'"'+')';
return connection.promise().query(addRole);
}
function addEmployeeToDatabase (firstname, lastname, role, manager){
    console.log(firstname, lastname, role, manager);
let addEmployee = 'INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES' + ' ' + '(' + '"'+`${firstname}`+'"'+','+'"' +`${lastname}`+'"'+',' + `${role}`+',' +`${manager}`+')';
return connection.promise().query(addEmployee);
};

function getUpdateArray() {
    //returns a list of all employees in a stringified array that is then available for the inquirer question
      return connection.query('SELECT * FROM `employee`');
    }

   

  //   return viewAllEmployees().then(([allEmps]) => {
  //     choices = allEmps.map(emp => emp.first_name + emp.last_name);  
  // });
  
function getRoleArray () {
    return 'manager';
}

function updateDatabase(employee, role) {
//updates the database with the selected employee's updated role
console.log(employee, role);



}





module.exports = {
    viewAllDepartments, viewAllRoles, viewAllEmployees, addDepartmentToDatabase, getUpdateArray, getRoleArray, updateDatabase, addRoleToDatabase, addEmployeeToDatabase,
}