describe('Second Quizful test', function () {

    const BASE_URL = 'http://www.quizful.net/test'
    const USER_LOGIN = "MariaMitko"
    const USER_PASSWORD = "ZcysqGthtw13"

    let mainPage = require('../page/mainPage.js')
    let loginPage = require('../page/loginPage.js')
    let userPage = require('../page/userPage.js')

    beforeEach( function () {
        browser.ignoreSynchronization = true
        browser.get(BASE_URL)
         mainPage.clickLogIn()
         loginPage.logIn(USER_LOGIN, USER_PASSWORD)

    })

    it('checking of the UserName',  function () {
        let userName = userPage.getUserName()
         expect(userName).toEqual('MariaMitko')
        console.log("UserName test method was executed")
    })

    afterEach( function () {
         userPage.clickLogOut()
    })
})