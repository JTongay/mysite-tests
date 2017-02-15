Feature: Signing up
  In order to sign up for an account
  As a brand new user
  I want to access all of the content on the page

  Scenario: Sign up
    Given I visit the signup portion
    When I enter the new username "Hello2" and the password "password"
    And I submit the form
    Then I should see "Signed in as Hello2" in the navbar
