# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.


### Docker

* Build docker image

    ```
    docker build -t evacacela/pokemon-challenge:1.0.0-RELEASE .
    ```

* Run docker container
    ```
    docker run -it -p 8080:3000 evacacela/pokemon-challenge:1.0.0-RELEASE
    ```

* Push docker image
    ```
    docker push evacacela/pokemon-challenge:1.0.0-RELEASE
    ```
