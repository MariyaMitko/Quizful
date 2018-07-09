describe('First Quizful test', function () {

    const BASE_URL = 'http://www.quizful.net/test'
    const USER_LOGIN = "MariaMitko"
    const USER_PASSWORD = "ZcysqGthtw13"

    let mainPage = require('../page/mainPage.js')
    let loginPage = require('../page/loginPage.js')
    let userPage = require('../page/userPage.js')

    beforeEach(function () {
        browser.ignoreSynchronization = true
        browser.get(BASE_URL)
    })

    it('checking of the page URL', async function () {
        await mainPage.clickLogIn()
        let loginPageURL = loginPage.getURL()
        await expect(loginPageURL).toEqual("http://www.quizful.net/LoginAction.loginForm")
        console.log("URL test method was executed")
    })

})