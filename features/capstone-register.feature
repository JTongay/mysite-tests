Feature: Logging In
  As a new user of the site
  I would like to log in
  So I can see all of the content

  Scenario: Logging In
    Given I visit "http://power-rank.com.s3-website-us-west-2.amazonaws.com/"
    When I go to "/login"
    And type in the email "admin", password "password" and submit the form
    Then I should see all of the genres to browse
