Feature: Karate ui automation
  Scenario: locators test
    * configure driver = {type: 'chrome'}
    Given driver 'https://www.amazon.in/'
    And driver.maximize()
    * delay(3000)
  #  And match script('.nav-logo-locale','_.innerHTML') == '.in'
    # for shadowRoot
 * def heading = Script(" document.querySelector('body > downloads-manager').shadowRoot.querySelector(' ').shadowRoot.querySelector(' ').shadowRoot.querySelector('#leftSpacer > h1').textContent")
Then print "heading---'heading