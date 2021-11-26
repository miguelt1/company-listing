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

3. Create a db.json with the following format:
```
{
    "companies": [
        { "id": 1, "name": "Local Public Office", "vatin": "500754012" },
        { "id": 2, "name": "Real Estate Franchising", "vatin": "500754042" },
        { "id": 3, "name": "Car Wash", "vatin": "500754043" },
        { "id": 4, "name": "Engineering Company", "vatin": "500754044" },
        { "id": 5, "name": "Delivery Company", "vatin": "500754045" }
    ],
    "phone_numbers": [
        { "id": "351910000000", "type": "mobile", "company_id": 1 },
        { "id": "351910000001", "type": "mobile", "company_id": 2 },
        { "id": "351910000002", "type": "mobile", "company_id": 1 },
        { "id": "351910000003", "type": "mobile", "company_id": 2 },
        { "id": "351910000004", "type": "mobile", "company_id": 2 },
        { "id": "351910000005", "type": "mobile", "company_id": 5 },
        { "id": "351910000006", "type": "mobile", "company_id": 5 },
        { "id": "351910000007", "type": "mobile", "company_id": 2 },
        { "id": "351210000001", "type": "landline", "company_id": 1 },
        { "id": "351210000002", "type": "landline", "company_id": 1 },
        { "id": "351210000003", "type": "landline", "company_id": 2 },
        { "id": "351210000004", "type": "landline", "company_id": 2 },
        { "id": "351210000005", "type": "landline", "company_id": 1 },
        { "id": "351210000006", "type": "landline", "company_id": 1 },
        { "id": "351210000007", "type": "landline", "company_id": 2 },
        { "id": "351210000008", "type": "landline", "company_id": 4 },
        { "id": "351210000009", "type": "landline", "company_id": 4 }
    ]
  }

```

4. To start the json-server, run

`npm run api`

5.  Create a .env with the same key as .env.example, set with the port you'll use to run the api
  
6. To start the app, run

`npm start`

7. To build the project for production, run

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


