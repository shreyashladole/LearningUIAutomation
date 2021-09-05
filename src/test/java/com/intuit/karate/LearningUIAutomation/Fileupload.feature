Feature: karate Ui automation
  Scenario: locators test
    * configure driver = {type: 'chrome'}
    * driver ' https://the-internet.herokuapp.com/upload'
    And waitFor("#file-upload")
    * delay(2000)
    When driver.inputFile("#file-upload","gmail.PNG")
    #if in feature file in package & jpg in project folder
#When driver.inputFile("#file-upload","file:java_while.jpg")
#if in feature file in package & jpg in another folder
#When driver.inputFile("#file-upload","file:src/test/java/data/java_while.jpg")

    And waitFor("#file-submit")
    * delay(2000)
    When click("#file-submit")
    * delay(2000)
    And waitForText("#uploaded-files","gmail.PNG")
    * delay(2000)