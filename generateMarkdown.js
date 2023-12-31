// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
# ${data.title}

## Table of Contents
- [Description](#description)
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)

## Description
${data.description}

## Installation
${data.installation}

## Usage
${data.usage}

## License
This application is covered under the ${data.license} license. ![License: ${data.license}](https://img.shields.io/badge/License-${encodeURIComponent(data.license)}-brightgreen)

## Contributing
${data.contribution}

## Tests
${data.test}

## Questions
If there are any further questions, reach out to the following:
- ${data.github}(https://github.com/${data.github})
- ${data.email}
    
`;
}

module.exports = generateMarkdown;
