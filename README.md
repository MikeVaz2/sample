# Coding Challenge Overview
Each of our Paylocity product teams operates like a small startup, empowered to deliver business value in whatever way
they see fit. Because our teams are close knit and fast moving it is imperative that you are able to work collaboratively
with your fellow developers.
This coding challenge is designed to allow you to demonstrate your abilities and discuss your approach to design and
implementation with your potential colleagues. You are not expected to spend more than a few hours on this project,
and you are free to use whatever technologies you prefer but please be prepared to discuss the choices you’ve made.
The most important part of this challenge is to use your work as a jumping off point for a broad and deep
conversation with our developers.
We are expecting candidates to typically spend few hours on this exercise, and we realize that this may lead to an
incomplete implementation. Please take this as an opportunity to demonstrate the best of your abilities – feel free to
mock out or skip pieces of the implementation and focus your time on exactly what you’d like to show us. We’re not
looking for you to give up your weekend for this project, we want something to start a meaningful conversation.

## Business Need:
One of the critical functions that we provide for our clients is the ability to pay for their employees’ healthcare benefits
package. A portion of these costs are deducted from their paycheck, and we handle that deduction. Create a front-end
application that displays the total cost of their healthcare benefits package per paycheck.

### Calculation breakdown:
- The cost of benefits is $1000/year for each employee
- Each dependent (children and possibly spouses) incurs a cost of $500/year
-  Anyone whose name starts with ‘A’ gets a 10% discount, employee or dependent

### Assumptions:
-  All employees are paid $2000 per paycheck before deductions.
- There are 26 paychecks in a year.

### Requirements:
- Mock out an API for the retrieval of employee/dependent data
  - Tip: All data can be stored client-side in memory
- List out the employee and their dependents
- Allow the user to change their elections and display a preview of the calculated benefits
- CRUD functionality
  - I.E Add/edit employee + dependents
- Allow the user to save their changes and reflect them on subsequent page loads

### Don't waste your time on:
- Implementing a backend, data-access layer, etc.
- Perfect UI/UX design, though a general knowledge should be shown

### Delivery of solution:
- Please include instructions on how to run the application in your submission.
- You are not expected to spend more than a few hours on this project, and you are free to use whatever
technologies you prefer but please be prepared to discuss the choices you’ve made. The most important part of
this challenge is to use your work as a jumping-off point for a deeper conversation with our developers.


## My Plan

* Use provider for configuration including plans and other parameters
* Create a hook to get a list of employees and manage employees.
* Create a hook to manage employee and their dependents and other setting.
* Include some minimal styles.
* Abstract Employee benefits calculation in a class
* Out of scope: 
  * Form Validation
  * Employee's personal info, Dependent's personal info.

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
