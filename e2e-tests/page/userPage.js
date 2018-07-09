var userPage = function () {

    let EC = protractor.ExpectedConditions

    let nameField = element(by.xpath('//*[@id="user-panel"]/li[1]/b/a'))
    let logoutLink = element(by.xpath('//*[@id="user-panel"]/li[7]/a'))

    this.getUserName = async function () {
        browser.wait(EC.presenceOf(nameField), 15000,
            "Logout button did not appear in 15 sec")
        return nameField.getText()
    }

    this.clickLogOut = async function () {
        browser.wait(EC.presenceOf(logoutLink), 15000,
            "Logout button did not appear in 15 sec")
        await logoutLink.click()
    }

    this.getURL = function () {
        var currentURL = browser.getCurrentUrl()
        return currentURL;
    }

}
module.exports = new userPage()
