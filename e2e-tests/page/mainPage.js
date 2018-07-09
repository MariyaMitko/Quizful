require('../page/loginPage.js')

let mainPage = function () {
    this.clickLogIn =  function () {
        let loginLink = element(by.xpath('//*[@id="user-panel"]/li[1]/a"]'))
        let EC = protractor.ExpectedConditions
        browser.wait(EC.presenceOf(element(by.xpath('//*[@id="user-panel"]/li[1]/a"]'))), 15000,
            "Login link did no appear at the Main page in 15 seconds")
         element(by.xpath('//a[@href="/LoginAction.loginForm"]')).click()
    }
}

module.exports = new mainPage()