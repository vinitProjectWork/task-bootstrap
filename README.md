# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!


Folder Structure 
|-public
|-src
    |--asset
        |---js -> utility files should be here
        |---scss -> scss file for project shoudl be here
    |--component -> New component should be created here
    |--layout -> layout files should be under this folder
|-app.js -> main entry point of react js
|-inedx.js -> main entry point of code


## Install JSON SERVER
`npm install -g json-server`

## RUN JSON SERVER

to run JSON server use below command.
`json-server --watch db.json`