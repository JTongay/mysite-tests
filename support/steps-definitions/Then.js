const myPage = require('../pages/mysite.page');

module.exports = function(){

  this.Then(/^I should see the title "([^"]*)"$/, title =>{
    return browser.getTitle().should.equal(myPage.myTitle)
  });

  this.Then(/^I should see the name "([^"]*)"$/, name =>{
    return browser.isVisible('h1').should.be.true;
  });

}
