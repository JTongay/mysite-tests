const myPage = require('../pages/mysite.page');

module.exports = function(){

  this.When(/^I click on a project titled "([^"]*)"$/, arg =>{
    browser.click('#' + arg);
    return browser.pause(500);
  })



}
