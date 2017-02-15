const Page = require('./page');

const redditClone = Object.create(Page, {

  myUrl: {value: 'https://arcane-meadow-50906.herokuapp.com/'},
  myTitle: {value: 'RailsRedditClone'},
  formUsername: {value: '#session_username'},
  formPassword: {value: '#session_password'},
  signupUsername: {value: '#user_username'},
  signupPassword: {value: '#user_password'},
  formSubmit: {value: '.btn'},
  navbarText: {value: '.navbar-text'},

})

module.exports = redditClone;
