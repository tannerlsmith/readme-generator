// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  let links = ""
  links +=
  `[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)]`
    if (license) {
      return links  
    } else {
      return ""
    }
 
} 

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license) {
    return links
  }

}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  let licenseNames = ["MIT", "apache", "GPL"];
  console.log(licenseNames)
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