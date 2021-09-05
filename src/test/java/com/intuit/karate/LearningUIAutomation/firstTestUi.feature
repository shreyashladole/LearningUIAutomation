Feature: karate ui automation
  Scenario: Sample UI automation test
    Given driver 'https://www.google.com/'
    And waitFor("input[title='Search']")
    And input("input[title='Search']",'karate Ui Autoomation')
    And waitFor(".FPdoLc input[value='Google Search']")
    When click(".FPdoLc input[value='Google Search']")
    Then waitFor("//h3[text()='Karate UI - Intuit']")
