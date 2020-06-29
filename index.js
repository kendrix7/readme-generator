const inquirer = require("inquirer");
const fs = require("fs");
const util = require("util");
const api = require("./utils/githubapi.js");
const generateMarkdown = require("./utils/generateMarkdown.js");
const questionsHelper = require("./helpers/questions.helper");

const writeFileAsync = util.promisify(writeToFile);

function writeToFile(fileName, data) {
  fs.writeFile(fileName, data, (err) => {
    if (err) {
      return console.log("Error in writeToFile:\n", err);
    }
    console.log("Success! Your README.md file has been generated");
  });
}

async function init() {
  try {
    const userResponses = await inquirer.prompt(questionsHelper.questions);
    console.log("Your responses: ", userResponses);
    console.log(
      "Thank you for your responses! Fetching your GitHub data next..."
    );
    const userInfo = await api.getUser(userResponses);
    console.log("Your GitHub user info: ", userInfo);
    console.log("Generating your README next...");
    const markdown = generateMarkdown(userResponses, userInfo);
    await writeFileAsync("ExampleREADME.md", markdown);
  } catch (error) {
    console.log("Error in init:\n", error);
  }
}

init();
