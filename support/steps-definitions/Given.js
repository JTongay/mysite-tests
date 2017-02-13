const myPage = require('../pages/mysite.page');
const powerRank = require('../pages/power-rank.page');

module.exports = function(){

  this.Given(/^I am on Joey's portfolio$/, () =>{
    browser.url(myPage.myUrl)
  })

  this.Given(/^I visit "([^"]*)"$/, site =>{
    browser.url(site)
  })



}
