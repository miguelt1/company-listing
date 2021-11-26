# Company Listing App

This application shows the company list.

In `/` the user see the company list

In `/company/:companyId` the user see a table of numbers that belong to that company

In `/number/:numberId` the user see the number details

In both `/number/:numberId` and `/companies/:companyId` there is a `Go Back` button that goes to the previous page

## Setup

1.  Clone this repo using the following command

2.  Move to the repo that you have just cloned and run the following command

`npm install`

3. To start the json-server, run

`npm run api`

4.  Create a .env with the same key as .env.example, set with the port you'll use to run the api

5. To start the app, run

`npm start`

6. To build the project for production, run

`npm run build`

## Tech Stack

Following is the tech stack:

- **ReactJS** - The V in the MVC pattern
- **Redux** - Used to maintain the state of the app
- **TypeScript** - TypeScript is a language that aims at easing development of large scale applications written in JavaScript
- **SASS** - Using SASS files instead of plain CSS
- **ESLint** - Used to lint the JS code


## 'src' Directory

- **assets** - where assets are e.g icons
- **components** - Dumb or stateless React Components
- **constants** - File with constants
- **pages** - Stateful React Components. These components gets connected to the redux store
- **store** - Contains react reducer and actions files and main store
- **styles** - Generic Styles for the application
- **services** - Create a instance of API
- **utilities** - Contains helper and utility functions for the application

**ESLint**

The project is enabled with ESLint and a production version of application can be made only if all the files pass the ESLint test.

The reason for choosing ESLint is, it enforces a common rule across the team. Developers working on this project will be forced to have uniform code styling. This helps in maintaining the project in long run.

 - ESLint configurations are maintained in the .eslintrc file in the root directory
 - The project uses babel as its parser for JS files and ES6 is enforced for all JS files
 - The project extends the ESLint rules from [**AirBnB**](https://github.com/airbnb/javascript/tree/master/packages/eslint-config-airbnb). AirBnB is a famous and widely used standard across front-end projects.

## Responsiveness

The application is responsive. It does not uses any third-party libraries like bootstrap for making it responsive.


## CSS

The repo uses SASS instead of plain CSS. SASS is easy to maintain and comes with lot of options for developers.

- Eric Meyer's reset sass file is used for resetting
- Constants for the application like theme colour, text colour are stored in **src/styles/\_constants.scss**
- Styles for UI components are added in the src/components


