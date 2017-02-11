Feature: My Site
  As a visitor of my website
  I want to see Joey's name
  So that I know who's website I'm on

  Background:
    Given I am on Joey's portfolio

  Scenario: Viewing the homepage
    Then I should see the title "Joseph Tongay"
