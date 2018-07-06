describe('Quizful tests', function () {

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

    xdescribe('LoginPage test', function () {
        xit('checking of the page URL', async function () {
            await mainPage.clickLogIn()
            let loginPageURL = loginPage.getURL()
            await expect(loginPageURL).toEqual("http://www.quizful.net/LoginAction.loginForm")
            console.log("URL test method was executed")
        })
    })

    describe('opening of the userPage with using of PageObject Pattern', function () {
        beforeEach(async function () {
            await mainPage.clickLogIn()
            await loginPage.logIn(USER_LOGIN, USER_PASSWORD)

        })

        afterEach(async function () {
            await userPage.clickLogOut()

        })

        it('checking of the UserName', function () {
            var userName = userPage.getUserName()
            expect(userName).toEqual('MariaMitko')

        })
        describe('opening of the userPage with using of PageObject Pattern', function () {
           it('checking of the LoginOut button', function () {
                userPage.clickLogOut()
                let pageURL = userPage.getURL()
                expect(pageURL).toEqual("http://www.quizful.net/LoginAction.loginForm")
            })
        })
    })
})