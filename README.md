# To run this project:
1. Clone this project using: 
git clone https://github.com/niranjanshankar/gitreposearch.git

2. Then, go inside the project folder gitreposearch, run the cmd:
npm install

3. After the packaes are all installed, type:
ng serve

4. Upon successful completion, go to a browser and type:
https://localhost:4200/

5. Sample user names: google, python, niranjanshankar

# Gitreposearch

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 7.2.1.
Bulma framework (https://bulma.io/) has been used for CSS layout
Basic pagination implemented using GitHub API's response headers

# What is it about?

1. This project lets you search public GitHub repositories usig usernames.

2. The landing page is a repository page. A user can search based a GitHub username (e.g., python, angular, google, niranjanshankar, etc.) This will show them a list of repositories related to the user. 

3. Each page displays a max of 15 repositories and there are buttons below to help user navigate to different pages.

4. On these repositories, the user can click on the "contributors" button to see who are the other cotributors to that repository.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
