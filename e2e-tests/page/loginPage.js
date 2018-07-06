require('../page/userPage.js')

var loginPage = function (){
	
	this.getURL =  function(){
		var currentURL =  browser.getCurrentUrl()
		return currentURL;
		
	}
	
	this.enterUserLogin = function(loginValue){
		element(by.name("loginForm.login")).sendKeys(loginValue);
		
	}
	
	this.enterUserPassword = function(passwordValue){
		element(by.name("loginForm.password")).sendKeys(passwordValue)
	}
	
	this.clickOkButton = function(){
		element(by.name('ok')).click()
		
	}
	
	this.logIn =  async function(userLogin, userPassword){
		await element(by.name("loginForm.login")).sendKeys(userLogin)
		await element(by.name("loginForm.password")).sendKeys(userPassword)
		await element(by.name('ok')).click()
	}

}
		module.exports = new loginPage()