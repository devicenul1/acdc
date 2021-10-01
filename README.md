

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