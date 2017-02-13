const myPage = require('../pages/mysite.page');
const powerRank = require('../pages/power-rank.page');

module.exports = function(){

  this.Then(/^I should see the title "([^"]*)"$/, title =>{
    return browser.getTitle().should.equal(myPage.myTitle)
  });

  this.Then(/^I should see the name "([^"]*)"$/, name =>{
    return browser.isVisible(name).should.be.true;
  });

  this.Then(/^I should see all of the genres to browse$/, ()=>{
    return browser.isVisible(powerRank.browseSection).should.be.true;
  })

};
