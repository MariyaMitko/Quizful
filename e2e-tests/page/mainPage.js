require('../page/loginPage.js')

let mainPage = function () {
    this.clickLogIn = async function () {
        let loginLink = element(by.xpath('//a[@href="/LoginAction.loginForm"]'))
        let EC = protractor.ExpectedConditions
        browser.wait(EC.presenceOf(element(by.xpath('//a[@href="/LoginAction.loginForm"]'))), 15000,
            "Login link did no appear at the Main page in 15 seconds")
        await element(by.xpath('//a[@href="/LoginAction.loginForm"]')).click()
    }
}

module.exports = new mainPage()