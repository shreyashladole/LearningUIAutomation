Feature: karate ui automation
  Background:
* configure afterScenario =
    """
    function(){
    var info = karate.info;
    karate.log(info);
    if(info.errorMessage){
    driver.screenshot();
    }
    }
    """
  Scenario: Sample UI automation screenshot
    * configure driver = {type: 'chrome'}
    Given driver 'https://www.amazon.in/'
    Then maximize()
    * delay(5000)
    #* screenshot()
    #for taking particular element
  #* delay(1000).screenshot("//a[text()='Computers ']")
   # And waitFor('#abc')