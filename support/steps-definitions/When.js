const myPage = require('../pages/mysite.page');
const powerRank = require('../pages/power-rank.page');

module.exports = function(){

  this.When(/^I click on a project titled "([^"]*)"$/, arg =>{
    console.log(arg);
    browser.click('#' + arg);
    browser.pause(500);
  })

  this.When(/^I go to "([^"]*)"$/, login =>{
    browser.url(powerRank.myUrl+login)
  })

  this.When(/^type in the email "([^"]*)", password "([^"]*)" and submit the form$/, (email, password) =>{
    console.log(email);
    console.log(password);
    browser.setValue(powerRank.emailForm, email)
    browser.setValue(powerRank.passwordForm, password)
    browser.click(".btn")
  })



}
