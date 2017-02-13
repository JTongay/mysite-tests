const myPage = require('../pages/mysite.page');
const powerRank = require('../pages/power-rank.page');
const redditClone = require('../pages/reddit-clone.page');

module.exports = function(){

  this.When(/^I click on a project titled "([^"]*)"$/, arg =>{
    console.log(arg);
    browser.click('#' + arg);
    browser.pause(500);
  })

  // this.When(/^I go to "([^"]*)"$/, login =>{
  //   browser.url("http://power-rank.com.s3-website-us-west-2.amazonaws.com/login")
  // })
  //
  // this.When(/^type in the email "([^"]*)", password "([^"]*)" and submit the form$/, (email, password) =>{
  //   console.log(email);
  //   console.log(password);
  //   browser.setValue("#email", email)
  //   browser.setValue("#password", password)
  //   browser.click(".btn")
  // })

  this.When(/^I enter the username "([^"]*)" and the password "([^"]*)"$/, (username, password)=>{
    browser.setValue(redditClone.formUsername, username)
    browser.setValue(redditClone.formPassword, password)
    browser.pause(500)
  })

  this.When(/^I submit the form$/, ()=>{
    browser.click(redditClone.formSubmit)
  })



}
