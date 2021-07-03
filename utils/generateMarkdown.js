// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if ((license == MIT)){
    return `![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)`
  }

  if (license == apache) {
    return `![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)`
  }

  if (license == IPL) {
    return `![License: IPL 1.0](https://img.shields.io/badge/License-IPL%201.0-blue.svg)`
  } else {
    return ""
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if ((license == MIT)){
    return `https://opensource.org/licenses/MIT`
  }

  if (license == apache) {
    return `https://opensource.org/licenses/Apache-2.0`
  }

  if (license == IPL) {
    return `https://opensource.org/licenses/IPL-1.0`
  } else {
    return ""
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  data.license !== 'None'
  if (license == MIT) {
    return `# license ${data.license}`
  }

  if (license == apache) {
    return `# license ${data.apache}`
  } 

  if (license == IPL) {
    return `# license ${data.IPL}`
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

# description
${data.description}

# installation
${data.installation}

# contributing
${data.contributing}

# usageInformation
${data.usageInformation}

# tests
${data.tests}

# license
${data.license}

# questions
If you have any questions, contact my email...
${data.email}

# githubUsername
${data.githubUsername}

`;
}

module.exports = generateMarkdown;