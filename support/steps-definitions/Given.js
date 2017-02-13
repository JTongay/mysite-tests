const myPage = require('../pages/mysite.page');
const powerRank = require('../pages/power-rank.page');
const redditClone = require('../pages/reddit-clone.page');

module.exports = function(){

  this.Given(/^I am on Joey's portfolio$/, () =>{
    browser.url(myPage.myUrl)
  })

  // this.Given(/^I visit "([^"]*)"$/, site =>{
  //   browser.url(site)
  // })

  this.Given(/^I go to the page "([^"]*)"$/, (url)=>{
    browser.url(url)
  })


}
