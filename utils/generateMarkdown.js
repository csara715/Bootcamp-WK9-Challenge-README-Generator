// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (!license) {
    return "";
  }
  switch (license) {
    case "MIT":
      return "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)]";
      break;
    case "Apache":
      return "[![License: Apache 2.0](https://img.shields.io/badge/License-Apache_2.0-blue.svg)]";
      break;
    case "GPL":
      return "[![License: GPL 3.0](https://img.shields.io/badge/License-GPLv3-green.svg)]";
      break;
    case "BSD":
      return "[![License: BSD 3](https://img.shields.io/badge/License-BSD_3--Clause-red.svg)]";
      break;
    default:
      return "[![License: NONE](https://img.shields.io/badge/license-Unlicense-orange.svg)]";
  }

  // [![License: Apache 2.0](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)
  // [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
  // [![License: GPL 3.0](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)
  // [![License: BSD 3](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)
  // [![License: NONE](https://img.shields.io/badge/license-Unlicense-blue.svg)](http://unlicense.org/)
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (!license) {
    return "";
  }
  switch (license) {
    case "MIT":
      return "(https://opensource.org/licenses/MIT)";
      break;
    case "Apache":
      return "(https://opensource.org/licenses/Apache-2.0)";
      break;
    case "GPL":
      return "(https://www.gnu.org/licenses/gpl-3.0)";
      break;
    case "BSD":
      return "(https://opensource.org/licenses/BSD-3-Clause)";
      break;
    default:
      return "(http://unlicense.org/)";
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (!license) {
    return "";
  }
  const badge = renderLicenseBadge(license);
  const link = renderLicenseLink(license);
  return badge + link;
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  const licenseBadge = renderLicenseSection(data.license);

  return `# ${data.title}

${licenseBadge}
    
## Description

### ${data.description}

<br />

## Table of Contents
  
* [Installation](#installation)

* [Tests](#tests)

* [Usage](#usage)

* [License](#license)

* [Contributing](#contributing)

* [Questions](#questions)

<br />

## Installation

### To install necessary dependencies, run the following command:

>
>
>${data.dependencies}
>
>

<br />

### To install optional dependencies, run the following command:

>
> 
>${data.optional}
>
> 
  
<br />

## Tests

### To run tests, run the following command:

>
> 
>${data.tests}
>
> 

<br />

## Usage

### ${data.usage}

<br />

## License

This project is licensed under the ${data.license} license.

<br />

## Contributing
    
### ${data.contributions}

<br />

## Questions

If you have any questions about the repository, please open an issue or contact me directly at ${data.email}.

You can find more of my work at [my github repository](https://github.com/${data.username}).`;
}

module.exports = generateMarkdown;
