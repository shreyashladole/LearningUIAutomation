Feature: karate ui automation

 # Scenario: Sample UI Automation Test
#Given driver 'https://www.amazon.in/'
#And driver.maximize();
 #* delay(5000)
 #And driver.fullscreen();
# * delay(5000)
   # * def urlValue = driver.url // coming url from above
    #And match urlValue == 'https://www.amazon.in/'
 #* delay(5000)
 #* driver.url = urlValue
  #  Then print 'title--',driver.title
    #Then match driver.title == 'facebook - log in or sign up'
 #When click('{span}Returns')
  #* delay(2000)
  #* driver.back()
  #* delay(5000)
  #* driver.forward()
  #* delay(2000)
  #* driver.refresh()
  #* driver.reload()
#for multiple browser
  Scenario: Sample UI Automation Test
   # * configure driver = {type: 'chromedriver', executable: 'chrome'}
    * configure driver = {type: 'geckodriver'}
    Given driver 'https://www.amazon.in/'
And driver.maximize();
 * delay(5000)