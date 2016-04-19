Car helper

You need clone repository
`git clone https://github.com/burymm/carhelper-yeoman.git`

Than you need install node, python and install global packages

`npm install -g yo gulp bower`
`npm install -g generator-gulp-angular`

After all this operation you need to install application

`npm install && gulp install`

It's time to use Gulp tasks:
- `$ gulp` to build an optimized version of your application in folder dist
- `$ gulp serve` to start BrowserSync server on your source files with live reload
- `$ gulp serve:dist` to start BrowserSync server on your optimized application without live reload
- `$ gulp test` to run your unit tests with Karma
- `$ gulp test:auto` to run your unit tests with Karma in watch mode
- `$ gulp protractor` to launch your e2e tests with Protractor
- `$ gulp protractor:dist` to launch your e2e tests with Protractor on the dist files