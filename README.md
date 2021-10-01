# React App

Created using the (https://create-react-app.dev/docs/adding-typescript/)[create-react-app] typescript template, the build process uses their react-scripts. The package (https://reactrouter.com/web/guides/quick-start)[react-router-dom] was used to give the app some general URL routing and redirect to the /Breweries url (the only working page). (https://github.com/sheaivey/react-axios)[Axios] is used to help manage the HTTPClient requests for outside service calls, the service call URLs are defined in .env files and injected into the production builds via dockerfiles. Following the MVC pattern the app routes to a controller which controls the views, modeled the app routes / views after the Open Brewery DB calls. The views are just JSX templates wrapped in a function. Components / Elements are the other folders, seemed like a logical grouping of things, components being custom React components and elements just HTML "reactified". Interfaces folder is used to hold some models to more tightly type cast the app.

## Development

Just running npm ci and npm start run should get the react app up and running, hosted on a local server that should bring up your default browser. 

``` bash
npm ci 
npm run start
```

## Production

``` bash
npm ci
npm run build
```

# Heroku

The Heroku deployment is using docker containers, it's a multi-stage build file with a production build of the react app. Since react can't read docker environment variables, they are injected into the build stage for react. Alpine linux for size / portability and nginx for the web server. We use nginx's container templating to inject Heroku's PORT environment variable into nginx via the nginx/default.conf.template file.

``` bash
heroku container:login
heroku create
heroku ps:scale web=1 --app ${YOUR_APP_NAME}
heroku container:push web --app ${YOUR_APP_NAME}
heroku container:release web --app ${YOUR_APP_NAME}
```

## Known issues

Server side routing needs to be fixed, hitting the app's root URL works fine, but if your browsing directly to /Breweries it will 404.