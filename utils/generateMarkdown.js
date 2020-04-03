function generateProjectUrl(github, title) {
  const caseTitle = title.toLowerCase().split("").join("-"); 
  return `https://github.com/${github}/${caseTitle}`; 
}

function renderLicenseBadge(license, github, title) {
  if (license !== "None") {
    return `[![GitHub license](https://imgshields.io/badge/license-${license}-b)`
  }
  return ''
}

function renderLicenseSection(license) {
  if (license !== "None") {
    return (
      `## License 
      
This project is license under the ${license} license.`
    )
  }
  return ''
}

function generateMarkdown(data) {
  return `
  # ${data.title}
  ${renderLicenseBadge(data.license, data.github, data.title)}
  
  ## Description 

  ${data.description}

  ## Table of Contents 

  *[Installation](#installation)

  *[Usage](#usage)

  *[License](#license)

  *[Contributing](#contributing)

  *[Tests](#tests)

  *[Questions](#questions)

  ## Installation

  To install required dependencies, run this command: 

  \'\'\'
  ${data.installation}
  \'\'\'

  ## Usage 

  ${data.usage}
  
  ${renderLicenseSection(data.license)}

  ## Contributing 

  ${data.contributing}

  ## Tests 

  To run tests, run this command: 

  \'\'\'
  ${data.test}
  \'\'\'

  ## Questions 

  <img src="${data.avatar_url}" 

  Questions regarding this repo, reach out to [${data.github.user}]

  `; 
}


module.exports = generateMarkdown;
