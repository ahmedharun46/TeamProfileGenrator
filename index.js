const inquirer = require("inquirer");
const fs = require("fs");
const util = require("util");
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const generateHTML = require("./src/htmlSource");

const writeFileAsync = util.promisify(fs.writeFile);
const appendFileAsync = util.promisify(fs.appendFile);

let teamArray = [];
let teamString = ``;

async function main() {
    try {


        for (let i = 0; i < teamArray.length; i++) {
            teamString = teamString + `<div class="card" style="width: 18rem;">
            <div class="card-body"><h5 class="card-title">${teamArray[i].title}</h5>
              <h5 class="card-title">${teamArray[i].name}</h5>
              <h6 class="card-subtitle mb-2 text-muted">${teamArray[i].id}</h6>
              <p class="card-text">${teamArray[i].email}.</p>`
            if (teamArray[i].title === "Manager") {
                teamString += `
             
                <p class="card-link">${teamArray[i].officeNumber}</p>
                </div>
            </div>`
            }
            else if (teamArray[i].title === "Engineer") {
                teamString += `
           
                <p class="card-link">${teamArray[i].github}</p>
            </div>
            </div>`
            } else {
                teamString += `
             
                <p class="card-link">${teamArray[i].school}</p>
            </div>
            </div>`

            }
        }

        let finalHtml = generateHTML(teamString)
        console.log(finalHtml)

        writeFileAsync("./dist/index.html", finalHtml);
    } catch (err) {
        return console.log(err);
    }
};

async function prompt() {
    let responseDone = "";

    try {

        inquirer.prompt([

            {
                type: "input",
                name: "name",
                message: "What is the employee's name?: "
            },
            {
                type: "input",
                name: "id",
                message: "Enter the employee's ID: "
            },
            {
                type: "input",
                name: "email",
                message: "Enter the employee's email address: "
            },
            {
                type: "list",
                name: "role",
                message: "What what is the employee's role:",
                choices: [
                    "Engineer",
                    "Intern",
                    "Manager"
                ]
            },
            {
                type: "input",
                name: "github",
                message: "What is the employee's github username?:",
                when: response => response.role === "Engineer"
            },


            {
                type: "input",
                name: "school",
                message: "What school is the employee attending?:",
                when: response => response.role === "Intern"
            }, {
                type: "input",
                name: "officeNumber",
                message: "What is the manager office Number?:",
                when: response => response.role === "Manager"

            }
        ]).then(response => {
            switch (response.role) {
                case "Engineer":
                    const engineer = new Engineer(response.name, response.id, response.email, response.github);
                    teamArray.push(engineer);
                    addMoreEmployee();
                    break;
                case "Intern":
                    const intern = new Intern(response.name, response.id, response.email, response.school);
                    teamArray.push(intern);
                    addMoreEmployee()
                    break;
                case "Manager":

                    const manager = new Manager(response.name, response.id, response.email, response.officeNumber);
                    teamArray.push(manager);
                    addMoreEmployee()
                    break;
            }
        })

    } catch (err) {
        console.log(err);
    }
}

function addMoreEmployee() {
    inquirer.prompt([{
        type: "list",
        name: "finish",
        message: "Do you want to continue?: ",
        choices: [
            "Yes",
            "No"
        ]

    }]).then(res => {
        switch (res.finish) {
            case "Yes":
                prompt();
                break;
            case "No":
                main()
        }
    })
}

//intial program    
prompt();

