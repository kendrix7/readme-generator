# Professional README Generator
  [![License](http://img.shields.io/badge/License-MIT-brightgreen.svg)](http://opensource.org/licenses/gpl--license)
  
  ## Description 
    
  This is a Command Line application that will prompt the user with questions and then create a README with the answers given.
  
  ## Table of Contents
  * [Installation](#installation)
  * [Usage](#usage)
  * [Links](#links)
  * [License](#license)
  
  ## Installation
  
  *Steps required to install project and how to get the development environment running:*

  To generate your own README:
  * Clone this repository to your own system.
  * Run `npm install` from the command line in the root directory in order to install the following npm package dependencies as specified in the `package.json`:
  * [`inquirer`](https://www.npmjs.com/package/inquirer) that will prompt you for your inputs from the command line 
  * [`axios`](https://www.npmjs.com/package/axios) to fetch your info from the GitHub API

The application itself can be invoked with `node index.js`.
  
  ## Usage 
  
  *Instructions and examples for use:*
  
  When you run `node index.js`, the application uses the `inquirer` package to prompt you in the command line with a series of questions about your GitHub and about your project.

The application then takes your responses and uses `axios` to fetch your GitHub profile from the [GitHub API](https://developer.github.com/v3/), including your GitHub profile picture and email.
From there, the application will generate markdown and a table of contents for the README conditionally based on your responses to the Inquirer prompts (so, if you don't answer the optional questions, such as Installation, an Installation section will not be included in your README).

Finally, `fs.writeFile` is used to generate your project's README.md file. You may view an eexample of such create file by looking at the "ExampleREADME.md in this file.

## Links
GitHub Repo - https://github.com/JohnNielsen1221/readme-generator
Live Page - 

  ## License
  
  Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
  
  ---
  
  ## Questions?
  
  ![Developer Profile Picture](https://avatars3.githubusercontent.com/u/63129723?v=4) 
  
  For any questions, please contact me with the information below:
 
  GitHub: [@JohnNielsen1221](https://api.github.com/users/JohnNielsen1221)

  Email: johnhayesnielsen@gmail.com