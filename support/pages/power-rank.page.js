const Page = require('./page');

const powerRank = Object.create(Page, {

  myUrl: {value: "http://power-rank.com.s3-website-us-west-2.amazonaws.com/"},
  myTitle: {value: "PowerRankFrontend"},
  emailForm: {value: "#email"},
  passwordForm: {value: "#password"},
  browseSection: {value: ".browse-section"}

})
