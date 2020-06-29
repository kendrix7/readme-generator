exports.questions = [
  {
    type: "input",
    message: "What is your Email address?",
    name: "email",
    default: "example@example.com",
    validate: function (answer) {
      if (answer.length < 1) {
        return console.log("A valid Email is required.");
      }
      return true;
    },
  },
  {
    type: "input",
    message: "What is your GitHub username? (No @ needed)",
    name: "username",
    default: "JohnNielsen1221",
    validate: function (answer) {
      if (answer.length < 1) {
        return console.log("A valid GitHub username is required.");
      }
      return true;
    },
  },
  {
    type: "input",
    message: "What is the name of your GitHub repo?",
    name: "repo",
    default: "readme-generator",
    validate: function (answer) {
      if (answer.length < 1) {
        return console.log("A valid GitHub repo is required for a badge.");
      }
      return true;
    },
  },
  {
    type: "input",
    message: "What is the title of your project?",
    name: "title",
    default: "Project Title",
    validate: function (answer) {
      if (answer.length < 1) {
        return console.log("A valid project title is required.");
      }
      return true;
    },
  },
  {
    type: "input",
    message: "Please write a description of your project.",
    name: "description",
    default: "Project Description",
    validate: function (answer) {
      if (answer.length < 1) {
        return console.log("A valid project description is required.");
      }
      return true;
    },
  },
  {
    type: "input",
    message:
      "If applicable, describe the steps required to install your project for the Installation section.",
    name: "installation",
  },
  {
    type: "input",
    message:
      "Provide instructions and examples of your project in use for the Usage section.",
    name: "usage",
  },
  {
    type: "input",
    message:
      "If applicable, provide guidelines on how other developers can contribute to your project.",
    name: "contributing",
  },
  {
    type: "input",
    message:
      "If applicable, provide any tests written for your application and provide examples on how to run them.",
    name: "tests",
  },
  {
    type: "list",
    message: "Choose a license for your project.",
    choices: [
      "Apache2.0",
      "BSD--3--Clause",
      "BSD--2--Clause",
      "gpl--license",
      "lgpl--license",
      "MIT",
    ],
    name: "license",
  },
];
