const myPage = require('../pages/mysite.page');
const powerRank = require('../pages/power-rank.page');
const redditClone = require('../pages/reddit-clone.page');

module.exports = function(){

  this.Then(/^I should see the title "([^"]*)"$/, title =>{
    return browser.getTitle().should.equal(myPage.myTitle)
  });

  this.Then(/^I should see the name "([^"]*)"$/, name =>{
    return browser.isVisible(name).should.be.true;
  });

  // this.Then(/^I should see all of the genres to browse$/, ()=>{
  //   browser.pause(1000)
  //   return browser.isVisible(powerRank.browseSection).should.be.false;
  // })

  this.Then(/^I should see "([^"]*)" in the navbar$/, (name)=>{
    return browser.getText(redditClone.navbarText).should.equal(name)
  })

};
