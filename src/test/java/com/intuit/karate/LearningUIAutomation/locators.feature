Feature: karate ui automation

  Scenario: locators test
    Given driver 'https://www.amazon.in/'
    And driver.maximize();
    And waitFor("{div/a}Computers")
#And waitFor("{}Computers")// if not know tag name
    And waitFor("{^a}Today")
    * delay(5000)
    * leftOf("{^a}Today").find('{a}Best Sellers').click()
    * delay(7000)
