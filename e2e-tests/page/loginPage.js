require('../page/userPage.js')

let loginPage = function () {

    this.getURL = function () {
        var currentURL = browser.getCurrentUrl()
        return currentURL;

    }


    this.logIn =  function (userLogin, userPassword) {

        let EC = protractor.ExpectedConditions
        browser.wait(EC.presenceOf(element(by.name("loginForm.login"))), 15000,
            "field for entering of login did no appear in 15 sec")

         element(by.name("loginForm.login")).sendKeys(userLogin)
         element(by.name("loginForm.password")).sendKeys(userPassword)
         element(by.name('ok')).click()
    }

}
module.exports = new loginPage()