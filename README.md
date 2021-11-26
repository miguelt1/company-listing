# Company Listing App

This application shows the company list.

in `/` the user see the company list
in `/company/:companyId` the user should see a table of numbers that belong to that company
in `/number/:numberId` the user should see the number details
in both `/number/:numberId` and `/companies/:companyId` there should be a `Go Back` button that goes to the previous page

## Setup

1.  Clone this repo using the following command

2.  Move to the repo that you have just cloned and run the following command

`npm install`

3. To start the json-server, run

`npm run api`

4.  Create a .env with the same key as .env.example, set with the port you'll use to run the api

5. To start the app, run

`npm start`

4. To build the project for production, run

`npm run build`

## Tech Stack

Following is the tech stack:

- **ReactJS** - The V in the MVC pattern
- **Redux** - Used to maintain the state of the app
- **TypeScript** - TypeScript is a language that aims at easing development of large scale applications written in JavaScript
- **SASS** - Using SASS files instead of plain CSS


## 'src' Directory

- **assets** - where assets are e.g icons
- **components** - Dumb or stateless React Components
- **constants** - File with constants
- **pages** - Stateful React Components. These components gets connected to the redux store
- **store** - Contains react reducer and actions files and main store
- **styles** - Generic Styles for the application
- **services** - Create a instance of API
- **utilities** - Contains helper and utility functions for the application


## Responsiveness

The application is responsive. It does not uses any third-party libraries like bootstrap for making it responsive.


## CSS

The repo uses SASS instead of plain CSS. SASS is easy to maintain and comes with lot of options for developers.

- Eric Meyer's reset sass file is used for resetting
- Constants for the application like theme colour, text colour are stored in **src/styles/\_constants.scss**
- Styles for UI components are added in the src/components
- Styles for the containers are added in src/containers.


