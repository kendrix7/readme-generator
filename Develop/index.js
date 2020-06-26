const inquirer = require("inquirer");
const fs = require("fs");
const axios = require('axios');

const api = {
  getUser(username) {
axios
.get(`https://api.github.com/users/${username}`, 
{
  headers: {"Authorization": `${process.env.GH_TOKEN}`}
})
  .then(function(res) {
    console.log(res.data)
     
    })
     
    .catch(error => console.log(error))
 
}
}

api.getUser("kddayhoff");

module.exports = api;

// array of questions for user
const questions = () => {
    inquirer.prompt([
     {
         type: "input",
         name: "title",
         message: "What is the title of the project?"
     },
     {
       type: "input",
       name: "description",
       message: "What is the description of the project?"
     },
     {
       type: "input",
       name: "installation",
       message: "How does someone install the project?"
     },
     {
       type: "input",
       name: "usage",
       message: "How does a user use the project?"
     },
     {
       type: "input",
       name: "authors",
       message: "Who contributed to the project and are there any acknowledgments?"
     },

     {
       type: "input",
       name: "license",
       message: "What is the license for the project?"
     },
     {
       type: "input",
       name: "contributing",
       message: "Are you open to contributions and what are the requirements for accepting them?"
     },
     {
       type: "input",
       name: "tests",
       message: "What are the instructions for running the tests for this project?"
     },
     {
       type: "input",
       name: "name",
       message: "What is your full name?"
     },
     {
       type: "input",
       name: "linkedin",
       message: "What is your LinkedIn profile name?"
     },
     {
       type: "input",
       name: "username",
       message: "What is your GitHub username",  
     }
   ])

   // get user github profile
   .then(function(answers) {
    let username = answers.username;
getUser(username, answers);
});
  
// call the github API
    function getUser(username, answers) {
  axios
  .get(`https://api.github.com/users/${username}`, 
  {
    headers: {"Authorization": `token ${process.env.GH_TOKEN}`}
  })
    .then(function(res) {
        const data = res.data
        // console.log(data);
        // console.log(data.email);
      generateReadme(data, answers);
      }) 
      .catch(error => console.log(error))
  }}


// function to write README file
function writeToFile(fileName, data) {
}

// function to initialize program
function init() {

}

// function call to initialize program
init();
