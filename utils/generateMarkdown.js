//  This returns a license badge based on which license is selected
function renderLicenseBadge() {
  let badgeLink;
  switch (data.license) {
    case 'MIT':
      badgeLink = '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)';
      break;
    case 'GNU':
      badgeLink = '[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)';
      break;
    case 'Apache':
      badgeLink = '[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)';
      break;
  }
  return badgeLink;
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink() {
  let licenseLink;
  switch (data.license) {
    case 'MIT':
      licenseLink = '[MIT License](https://spdx.org/licenses/MIT.html)';
      break;
    case 'GNU':
      licenseLink = '[GNU General Public License version 3.0 or later](https://spdx.org/licenses/GPL-3.0-or-later.html)';
      break;
    case 'Apache':
      licenseLink = '[Apache License version 2.0](https://www.apache.org/licenses/LICENSE-2.0)';
      break;
  }
  return licenseLink;
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  function renderLicenseBadge() {
    let badgeLink;
    switch (data.license) {
      case 'MIT':
        badgeLink = '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)';
        break;
      case 'GNU':
        badgeLink = '[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)';
        break;
      case 'Apache':
        badgeLink = '[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)';
        break;
    }
    return badgeLink;
  }

  function renderLicenseLink() {
    let licenseLink;
    switch (data.license) {
      case 'MIT':
        licenseLink = '[MIT License](https://spdx.org/licenses/MIT.html)';
        break;
      case 'GNU':
        licenseLink = '[GNU General Public License version 3.0 or later](https://spdx.org/licenses/GPL-3.0-or-later.html)';
        break;
      case 'Apache':
        licenseLink = '[Apache License version 2.0](https://www.apache.org/licenses/LICENSE-2.0)';
        break;
    }
    return licenseLink;
  }

  return `# ${data.title}
${renderLicenseBadge()}
${data.desc}

## Instructions
${data.inst}

## Usage
${data.usage}

## Contributing
${data.contr}

## Tests
${data.tests}

## Contact
* GitHub page: [${data.ghName}](https://github.com/${data.ghName})
* Email: [${data.email}](mailto:${data.email})

## License
This project uses the ${data.license} license. For more information, visit: ${renderLicenseLink()}
`;
}

export default generateMarkdown;
