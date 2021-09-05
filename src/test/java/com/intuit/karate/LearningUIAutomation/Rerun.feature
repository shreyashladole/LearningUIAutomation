Feature: karate ui automation
  Background:
    * configure afterScenario =
    """
    function(){
    var info = karate.info;
    karate.log(info);
    if(info.errorMessage){
    driver.screenshot();
    karate.call('Rerun.feature');
    }
    }
    """
    Scenario:  sample UI automation rerun test
      * configure driver = {type: 'chrome'}
      Given driver 'https://www.amazon.in/'
      Then maximize()
      And waitFor('#abc')
