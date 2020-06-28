const mrkdwnCreationHelper = require('../helpers/markdown-creation.helper');

function generateMarkdown(userResponses, userInfo) {
  const title = `# ${userResponses.title}`;
  const license = mrkdwnCreationHelper.createLicense(userResponses);
  const description = `## Description\n\n${userResponses.description}`;
  const tableOfContents = mrkdwnCreationHelper.createToC(userResponses);
  const optionalSections = mrkdwnCreationHelper.createOptionalSections(userResponses);
  const licenseSection = mrkdwnCreationHelper.createLicenceSection(userResponses);
  const questionsSection = mrkdwnCreationHelper.createQuestionsSection(userResponses, userInfo);

  // Generate markdown for the top required portions of the README
  let finalMarkdown = 
  `${title}
  ${license}
  ${description}
  ${tableOfContents}
  ${optionalSections}
  ${licenseSection}
  ${questionsSection}`;

  return finalMarkdown;  
}

module.exports = generateMarkdown;