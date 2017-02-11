Feature: Viewing Projects
  As a visitor of Joey's portfolio
  I want to see all of the projects in his portfolio
  So I can see what he knows

  Background:
    Given I am on Joey's portfolio

  Scenario Outline: Viewing Projects
    When I click on a project titled <title>
    Then I should see the name <name>

    Examples:
    | title         | name                 |
    | pokestay-img  | Pokemon Stay!        |
    | raspi-img     | Raspberry Pi SmartTV |
    | digidex-img   | Digital Rolodex      |
    | power-img     | Power Ranking        |
