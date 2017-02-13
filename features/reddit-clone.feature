Feature:
  As a student who makes reddit clones
  I want to have login/signup functionality
  So that my websites are secure and useable

  Scenario: Log in
    Given I go to the page "https://arcane-meadow-50906.herokuapp.com/login"
    When I enter the username "Hello" and the password "password"
    And I submit the form
    Then I should see "Signed in as Hello" in the navbar
