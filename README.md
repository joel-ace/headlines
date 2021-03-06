[![Code Climate](https://codeclimate.com/github/codeclimate/codeclimate/badges/gpa.svg)](https://github.com/joel-ace/headlines)
[![Coverage Status](https://coveralls.io/repos/github/joel-ace/headlines/badge.svg?branch=master)](https://coveralls.io/github/joel-ace/headlines?branch=master)
[![Build Status](https://travis-ci.org/joel-ace/headlines.svg?branch=master)](https://travis-ci.org/joel-ace/headlines)

Headlines
=========
Headlines is a news application that aggregates news from over 50 sources using NewsApi.org endpoints to bring news to you at your convinience. Headlines gives you the ease of getting news headlines from different sources in one place instead of having to visit these sites separately. [Click Here](http://joel-headlines.herokuapp.com) to view the hosted app.

Features
--------------
- View and search through a list of available News Sources
- View headlines and excerpts based on news source
- View Headlines based on sort options (e.g top, latest) 

Getting Started
--------------
- Requirements
  - An installation of node.js is required to run the app locally
- Setting up the project
  - Clone the repo `git clone https://github.com/joel-ace/headlines.git`
  - Run `cd headlines` to change into headlines directory
  - Run `npm install` to install all dependencies
  - Run `npm start` to run the application
- How to run tests
  - Run `npm test`

How to use the app
------------------
On app startup:
- Click on the 'Login with Google' Button to login 
- On successful login, browse through the list of sources or use search to filter news sources
- Click on the source name to view the news headlines from particular news source.
- Use the sort drop down at the top right part of the page to view news based on the sort options available.

Tech Stack
--------------
- **[Node JS](https://nodejs.org/en/)** - Node.js is a JavaScript runtime environment built on Chrome's V8 JavaScript engine.
- **[React](https://facebook.github.io/react/)** - React is a JavaScript library developed by Facebook Software Engineers for building user interfaces.
- **[Webpack](https://webpack.github.io/)** - webpack is a module bundler for modern JavaScript applications.
- **[Babel](https://babeljs.io/)** - Babel is a JavaScript compiler, it is used for transpiling ES6 down to ES5.
- **[Express](https://expressjs.com/)** - Express is a minimal and flexible Node.js web application framework, It is used as the web server.
- **[Jest](https://facebook.github.io/jest/)** - Complete and easy to set-up JavaScript testing solution.

Limitations of the project
--------------------------
- The Application uses only Google Login as a form of Authentication
- The Application does not display news stories on the site
- The Application can not save favorite articles for later viewing
- Users cannot share news headlines or stories from the site

Contributing to the project
---------------------------
- Fork this repository to your account
- Clone this repository - `git clone https://github.com/joel-ace/headlines.git`
- Create a new branch for your feature - `git checkout -b <new-feature>`
- Commit your changes - `git commit -m "did something"`
- Push to the remote branch - `git push origin <new-feature>`
- Open a pull request

Contributions should be written in **[ES6](http://es6-features.org/)** and should extend the **[Airbnb JavaScript Style](https://github.com/airbnb/javascript)** 


Author
--------------
- Joel Akwevagbe

License
--------------
This project is licensed under the MIT license.