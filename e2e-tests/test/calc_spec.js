describe('Protractor Demo App', function() {
    let firstNumber = element(by.model('first'))
    let secondNumber = element(by.model('second'))
    let goButton = element(by.id('gobutton'))
    let latestResult = element(by.binding('latest'))

    beforeEach(function() {
        browser.get('http://juliemr.github.io/protractor-demo/')
    })

    it('should have a title', function() {
        expect(browser.getTitle()).toEqual('Super Calculator')
    })

    it('should add one and two', async function() {
        firstNumber.sendKeys(1)
        secondNumber.sendKeys(2)
        goButton.click()

        let loginLink = element(by.xpath('//a[@href="/LoginAction.loginForm"]'))
        let EC = protractor.ExpectedConditions
        browser.wait(EC.presenceOf(element(by.xpath('//*[text()="3"]'))), 10000,
            "Correct result of calculation of 1+2 is not presented in 10 seconds")
        expect(latestResult.getText()).toEqual('3')
    })

    it('should add four and six', function() {
        // Fill this in.
        expect(latestResult.getText()).toEqual('10')
    })

    it('should read the value from an input', function() {
        firstNumber.sendKeys(1);
        let EC = protractor.ExpectedConditions
        browser.wait(EC.presenceOf(element(firstNumber)), 10000,
            "Correct value of input number is not presented in 10 seconds")
        expect(firstNumber.getAttribute('value')).toEqual('1')
    })
})
