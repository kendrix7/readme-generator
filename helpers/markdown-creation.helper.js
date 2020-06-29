const textHelper = require("./text.helper");

exports.createLicense = (userResponses) => {
  return `[![License](http://img.shields.io/badge/License-${userResponses.license}-brightgreen.svg)](http://opensource.org/licenses/${userResponses.license})`;
};

exports.createLicenseVerbiage = (license) => {
  try {
    if (license === "Apache2.0") {
      return textHelper.apacheText;
    }
    if (license === "BSD--3--Clause") {
      return textHelper.bsd3Text;
    }
    if (license === "BSD--2--Clause") {
      return textHelper.bsd2Text;
    }
    if (license === "gpl--license") {
      return textHelper.gplText;
    }
    if (license === "lgpl--license") {
      return textHelper.lgplText;
    }
    if (license === "MIT") {
      return textHelper.mitText;
    }
  } catch (error) {
    console.error("Error in determineLicenseVerbiage:\n", error.message);
  }
};

exports.createToC = (userResponses) => {
  try {
    let draftToC = `## Table of Contents`;

    if (userResponses.installation !== "") {
      draftToC += `\n* [Installation](#installation)`;
    }
    if (userResponses.usage !== "") {
      draftToC += `\n* [Usage](#usage)`;
    }
    if (userResponses.contributing !== "") {
      draftToC += `\n* [Contributing](#contributing)`;
    }
    if (userResponses.tests !== "") {
      draftToC += `\n* [Tests](#tests)`;
    }
    draftToC += `\n* [License](#license)`;

    return draftToC;
  } catch (error) {
    console.error("Error in createToC:\n", error.message);
  }
};

exports.createOptionalSections = (userResponses) => {
  try {
    let optionalMarkdown = "";

    if (userResponses.installation !== "") {
      optionalMarkdown += `\n\n## Installation
      \n*Steps required to install project and how to get the development environment running:*
      \n\n${userResponses.installation}`;
    }

    if (userResponses.usage !== "") {
      optionalMarkdown += `\n\n## Usage 
      \n*Instructions and examples for use:*
      \n${userResponses.usage}`;
    }

    if (userResponses.contributing !== "") {
      optionalMarkdown += `\n\n## Contributing
      \n*If you would like to contribute it, you can follow these guidelines for how to do so.*
      \n${userResponses.contributing}`;
    }

    if (userResponses.tests !== "") {
      optionalMarkdown += `\n\n## Tests
      \n*Tests for application and how to run them:*
      \n${userResponses.tests}`;
    }

    return optionalMarkdown;
  } catch (error) {
    console.log("Error in createOptionalSections", error.message);
  }
};

exports.createInstallationMarkdown = (userResponses) => {
  let installation = "";
  if (userResponses.installation !== "") {
    installation += `\n\n## Installation
    \n*Steps required to install project and how to get the development environment running:*
    \n\n${userResponses.installation}`;
  }
  return installation;
};

exports.createLicenceSection = (userResponses) => {
  const licenseVerbiage = this.createLicenseVerbiage(userResponses.license);
  const licenseSection = `\n\n## License
  \n${userResponses.license}
  \n${licenseVerbiage}\n`;

  return licenseSection;
};

exports.createQuestionsSection = (userResponses, userInfo) => {
  let questionsSection = `\n---
    \n## Questions?
    \n![Developer Profile Picture](${userInfo.avatar_url}) 
    \nFor any questions, please contact me with the information below:
    \nGitHub: [@${userInfo.login}](${userInfo.url})
    \nEmail: [${userResponses.email}]`;
  if (userInfo.email !== null) {
    questionsSection += `\nEmail: ${userInfo.email}`;
  }

  return questionsSection;
};
