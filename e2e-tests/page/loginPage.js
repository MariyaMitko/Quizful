require('../page/userPage.js')

let loginPage = function () {
    let loginInput = element(by.name('loginForm.login'))
    let passwordInput = element(by.name('loginForm.password'))
    let okButton = element(by.name('ok'))

    this.getURL = function () {
        var currentURL = browser.getCurrentUrl()
        return currentURL;

    }

    /*
        this.logIn = async function (userLogin, userPassword) {

            let EC = protractor.ExpectedConditions
            browser.wait(EC.presenceOf(element(by.name("loginForm.login"))), 15000,
                "field for entering of login did no appear in 15 sec")

            await element(by.name('loginForm.login')).sendKeys(userLogin)
            await element(by.name('loginForm.password')).sendKeys(userPassword)
            await element(by.name('ok')).click()
        }*/

    this.enterUserLogin = async function (loginValue) {
        await loginInput.sendKeys(loginValue)

    }

    this.enterUserPassword = async function (passwordValue) {
        await passwordInput.sendKeys(passwordValue)
    }

    this.logIn = async function (userLogin, userPassword) {
        this.enterUserLogin(userLogin)
        this.enterUserPassword(userPassword)
        await okButton.click()
    }

}
module.exports = new loginPage()

