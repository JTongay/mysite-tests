const myPage = require('../pages/mysite.page');

module.exports = function(){

  this.When(/^I click on a project titled "([^"]*)"$/, arg =>{
    console.log(arg);
    browser.click('#' + arg);
    browser.pause(500);
  })



}
