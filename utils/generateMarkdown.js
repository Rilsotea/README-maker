// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license === 'MIT') {
    return `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](${renderLicenseLink(license)})`
  } else if (license === 'GNU') {
    return `[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](${renderLicenseLink(license)})`

  } else if (license === 'Apache') {
    return `[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](${renderLicenseLink(license)})`

  } else if (license === 'BSD3') {
    return `[![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)](${renderLicenseLink(license)})`
  } else if (license === 'Mozilla') { return `[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](${renderLicenseLink(license)})` }
  else {
    return '';
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license === 'MIT') {
    return 'https://opensource.org/licenses/MIT';
  } else if (license === 'GNU') {
    return 'https://www.gnu.org/licenses/gpl-3.0';
  } else if (license === 'Apache') {
    return 'https://opensource.org/licenses/Apache-2.0';
  } else if (license === 'BSD3') {
    return 'https://opensource.org/licenses/BSD-3-Clause';
  } else if (license === 'Mozilla') {
    return 'https://opensource.org/licenses/MPL-2.0';
  } else {
    return '';
  }
}
// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license) {
    return `## License
    ${renderLicenseBadge(license)}
    This project is licensed under the ${license} license.`
  } else {
    return '';
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(answers) {
  return `
# ${answers.projectTitle}
    
## Description
${answers.description}
    
## Table of Contents
${answers.tableOfContents}
    
## Installation Instructions
${answers.installationInstructions}
    
## Usage
${answers.usage}
    
${renderLicenseSection(answers.license)}
    
## Contributing
${answers.contributing}
    
## Tests
${answers.tests}
    
## Questions
For questions about anything involving the project contact me at:
-GitHub: [${answers.githubUsername}](https://github.com/${answers.githubUsername})

-Email: ${answers.email}
`
}

export default generateMarkdown;
