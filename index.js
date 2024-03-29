const inquirer = require('inquirer');
const d = require('./queries');
const cTable = require('console.table');

const openQuestion = [{
        type: 'list',
        name: 'opening',
        message: 'Please select from the following options:',
        choices: [
            'view all departments',
            'view all roles',
            'view all employees',
            'add a department',
            'add a role',
            'add an employee',
            'update an employee role',

        ]
    }];

const departmentQuestion = [{
        type: "input",
        name: "department",
        message: 'please enter the name of the department you would like to add'
    },]

const roleQuestions = [
    {
        type: "input",
        name: "title",
        message: 'please enter the name of the role you would like to add'
    }, {
        type: "input",
        name: "salary",
        message: 'please enter the salary of the role you would like to add'
    }, {
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
    }, {
        type: "input",
        name: "lastname",
        message: 'please enter the last name of the employee you would like to add'
    }, {
        type: "input",
        name: "role",
        message: 'please enter the role of the employee you would like to add'
    }, {
        type: "input",
        name: "manager",
        message: 'please enter the manager id of the employee you would like to add or press enter if none'
    },

];


function updateEmployee() {
    d.viewAllEmployees().then(([allEmps]) => {
        let choices = allEmps.map(emp => emp.first_name + " " + emp.last_name);
        let updateQuestionOne = [{
                type: 'list',
                name: 'name',
                message: 'Please select an employee to update',
                choices
            },];
        d.viewAllRoles().then(([allRoles]) => {
            let choices = allRoles.map(role => role.title + " " + role.id);
            const updateQuestionTwo = [{
                    type: "list",
                    name: "role",
                    message: `Please select this employee's new role`,
                    choices
                }];

            inquirer.prompt(updateQuestionOne.concat(updateQuestionTwo)).then(answers => {
                let {name, role} = answers;
                d.updateDatabase(name, role);
                offerOptions();
                console.log("\n database updated")
            });
            
        });
    });

}


function offerOptions() {
    inquirer.prompt(openQuestion).then(answer => {
        let {opening} = answer;
        if (opening === 'view all departments') {
            d.viewAllDepartments().then(([allDeps]) => {
                console.log("\n");
                console.table(allDeps);
                offerOptions();
            });

        }
        if (opening === 'view all roles') {
            d.viewAllRoles().then(([allRoles]) => {
                console.log("\n");
                console.table(allRoles);
                offerOptions();
            });
        }
        if (opening === 'view all employees') {
            d.viewAllEmployees().then(([allEmps]) => {
                console.log("\n");
                console.table(allEmps);
                offerOptions();
            });

        }
        if (opening === 'add a department') {
            addDepartment();
        }

        if (opening === 'add a role') {
            addRole();


        }
        if (opening === 'add an employee') {
            addEmployee();


        }
        if (opening === 'update an employee role') {
            updateEmployee();
        }
        if (opening === 'view budget by department') {
            viewBudgets();
        }


    })
};


function addDepartment() {
    inquirer.prompt(departmentQuestion).then(answer => {
        let {department} = answer;
        d.addDepartmentToDatabase(department);
        console.log("\n database updated")
        offerOptions();
    });

};

function addRole() {
    inquirer.prompt(roleQuestions).then(answers => {
        let {title, salary, department} = answers;
        d.getDepartmentIdFromName(department).then(([department]) => {
            department = department[0].id;
            d.addRoleToDatabase(title, salary, department)
            console.log("\n database updated")
        });
        offerOptions();
    });

};
function addEmployee() {
    inquirer.prompt(employeeQuestions).then(answers => {
        let {firstname, lastname, role, manager} = answers;
        d.getRoleIdFromName(role).then(([role]) => {
            role = role[0].id;
            d.addEmployeeToDatabase(firstname, lastname, role, manager);
            console.log("\n database updated");
            offerOptions();
        });

    });

};


function init() {

    offerOptions();
}

init();
