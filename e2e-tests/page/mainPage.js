require('../page/loginPage.js')

var mainPage = function (){
	
	this.clickLogIn = async function(){
		await element(by.xpath('//*[@id="user-panel"]/li[1]/a')).click()
	}
}

module.exports =  new mainPage()
