Feature: karate ui automation
  Scenario: Dynamic locators test
    * def data = read('Data.json')
    * configure driver = {type: 'chrome'}
      Given driver 'http://www.seleniumeasy.com/test/basic-first-form-demo.html/'
    And driver.maximize()
    And waitFor("///a[text()='No, thanks!']")
    When click("///a[text()='No, thanks!']")
    And waitFor("#user-message")
    #And input("#user-message","Hello")
#when added json file
 And input("#user-message",data.message)
    And waitFor("//button[text() ='Show Message']")
    When click("//button[text() ='Show Message']")
   # And waitFor("//span[@id='display'][text()='Hello']")
#when added json file
    * def mesg = "//span[@id='display'][text()='"+data.message+"']"
    Then print 'mesf==',mesg
    And waitFor("//span[@id='display'][text()='"+data.message+"']")

    * delay(5000)


