const inquirer = require('inquirer');
const d = require ('./queries');

const openQuestion = [
{
    type: 'list',
    name: 'opening',
    message: 'Please select from the following options:',
    choices: ['view all departments', 'view all roles', 'view all employees', 'add a department', 'add a role', 'add an employee', 'update an employee role' ]
}
];

const departmentQuestion = [
    {
        type: "input",
        name: "department",
        message: 'please enter the name of the department you would like to add'
    },
]

const roleQuestions = [
    {
        type: "input",
        name: "name",
        message: 'please enter the name of the role you would like to add'
    },
    {
        type: "input",
        name: "salary",
        message: 'please enter the salary of the role you would like to add'
    },
    {
        type: "input",
        name: "department",
        message: 'please enter the department of the role you would like to add'
    },

];

const employeeQuestions = [
    {
        type: "input",
        name: "firstname",
        message: 'please enter the first name of the employee you would like to add'
    },
    {
        type: "input",
        name: "lastname",
        message: 'please enter the last name of the employee you would like to add'
    },
    {
        type: "input",
        name: "role",
        message: 'please enter the role of the employee you would like to add'
    },
    {
        type: "input",
        name: "manager",
        message: 'please enter the manager of the employee you would like to add'
    },

];


function questionOne () {
let choices = [d.getUpdateArray()];
const updateQuestionOne = [
{
type: 'list',
name: 'name',
message: 'Please select an employee to update',
choices, 
},
];
return updateQuestionOne;
}
function questionTwo () {
let choices = [d.getRoleArray()];
const updateQuestionTwo = [
{
type: "list",
name: "role",
message: `Please select this employee's new role`,
choices,
}

];
return updateQuestionTwo;
}

function offerOptions() { 
    inquirer.prompt(openQuestion).then(answer => {
        let {opening} = answer;
    
    if (opening === 'view all departments') {
         d.viewAllDepartments();
         offerOptions();
          }
        
    if (opening === 'view all roles') {
        d.viewAllRoles();
        offerOptions();
        
    }
    if (opening === 'view all employees') {
        d.viewAllEmployees();
        offerOptions();
    }
    if (opening === 'add a department') {
        addDepartment();
        offerOptions();
    }
    if (opening === 'add a role') {
        addRole();
        offerOptions();
        
    }
    if (opening === 'add an employee') {
        addEmployee();
        offerOptions();
        
    }
    if (opening === 'update an employee role') {
        updateEmployee();
        offerOptions();
        
    }



}
    )};


function addDepartment() {
inquirer.prompt(departmentQuestion).then(answer => {
    let {department} = answer;
d.addDepartmentToDatabase(department);
}
)};

function addRole() {
    inquirer.prompt(roleQuestions).then(answers => {
        let {
            name,
            salary,
            department
        } = answers;
        d.addRoleToDatabase(name, salary, department);
}
    )};
function addEmployee() {
    inquirer.prompt(employeeQuestions).then(answers => {
        let {
            firstname,
            lastname,
            role,
            manager
        } = answers;
        d.addEmployeeToDatabase(firstname, lastname, role, manager);
}
    )};

function updateEmployee() {
    inquirer.prompt(questionOne().concat(questionTwo())).then(answers => {
        let {
            name,
            role
        } = answers;
        d.updateDatabase(name, role);
}

    )};



function init() {

    offerOptions();
}

init();

