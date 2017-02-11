const myPage = require('../pages/mysite.page');

module.exports = function(){

  this.Given(/^I am on Joey's portfolio$/, () =>{
    browser.url(myPage.myUrl)
  })



}
