npx create-react-app . --template typescript

yarn add axios react-router-dom  @material-ui/core @material-ui/icons 

yarn add @types/react-router-dom prettier --dev

### Requirements

Application Features When the user opens the application, the user sees a form that contains one text input and a submit button. Use Enter country as a placeholder text in the text input form field.

The submit button is disabled if text input is empty.

When the user enters a country name or partial country name in the input field and presses submit, make a call to https://restcountries.eu/rest/v2/name/{{FORM_INPUT_HERE}}

The user is taken to a screen that now displays the information about the country. 
Display the following information: 
-capital 
-population 
-latlng 
-flag (render the image from the URL provided in the response)

On the country information page, add a button called Capital Weather.

When the user clicks the Capital Weather button, the current weather for the city is displayed.

Display the following information: 
-temperature 
-weather_icons (render the image from the URL provided in the response) 
-wind_speed 
-precip

To get weather information, sign up for a free account on https://weatherstack.com/. After you sign up you will receive an API key.

Use the following API to get city weather data. http://api.weatherstack.com/current? access_key={{YOUR_ACCESS_KEY}}&query ={{ENTER CAPITAL CITY HERE}}








# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
