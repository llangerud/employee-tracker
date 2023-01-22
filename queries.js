function viewAllDepartments() {
// shows a formatted table showing department names and ids
console.log('viewall dept function');
}

function viewAllRoles() {
// shows the job title, role id, the department that role belongs to, and the salary for that role
console.log('viewall roles function');
}

function viewAllEmployees() {
// shows a formatted table  with employee data, including employee ids, first names, last names, job titles, departments, salaries, and managers that the employees report to
console.log('viewall employees function');
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