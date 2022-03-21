
const env = require('dotenv').config();
require('chromedriver');
const selenium = require('selenium-webdriver');
const { Builder, By, Key, until } = require('selenium-webdriver');
var capabilities = selenium.Capabilities.chrome();
var chrome = require('selenium-webdriver/chrome');
const screen = {
    width: 1200,
    height: 800
};
const driver = new selenium.Builder().forBrowser("chrome").setChromeOptions(new chrome.Options().headless().windowSize(screen)).build();
var baseUrl = '';
var userName = '';
var password = '';
if (process.env.NODE_ENV == "test") {
    baseUrl = process.env.baseUrlDev;
    userName = process.env.UserDev;
    password = process.env.passwordDev;
}
else if (process.env.NODE_ENV == "hom") {
    baseUrl = process.env.baseUrlTest;
    userName = process.env.UserTest;
    password = process.env.passwordTest;
}
else if (process.env.NODE_ENV == "prod") {
    baseUrl = process.env.baseUrlProd;
    userName = process.env.UserProd;
    password = process.env.passwordProd;
}

var chai = require('chai');
var expect = chai.expect;
var should = chai.should();
var assert = chai.assert;
var request = require("request");
var routes = {
    login: 'login',
    home: 'home'
};

describe('Login Page test cases', async function () {

    it('should show invalid credentials message', async function () {
        await driver.get(baseUrl + 'login');
        await driver.findElement(By.name('Username')).sendKeys('invalidUser');
        await driver.findElement(By.name('password')).sendKeys('password');
        await driver.findElement(By.id('button-login')).click();
        await driver.sleep(3000);
        await driver.findElement(By.className("alert")).getAttribute("innerText").then((value) => {
            assert.isDefined(value);
            assert.include(value, 'Usuário ou Senha incorretos.');
        });

    });

    it('should login sucessfully', async function () {
        await driver.get(baseUrl + 'login');
        await driver.findElement(By.name('Username')).sendKeys(userName);
        await driver.findElement(By.name('password')).sendKeys(password);
        await driver.findElement(By.id('button-login')).click();
        await driver.sleep(3000);
        await driver.getCurrentUrl().then(url => {
            assert.isDefined(url);
            assert.notInclude(url, 'login');
        });
    });

    it('should access all routes', async function () {
        var allRoutesAvaliable = true;
        let testRoutes = Object.keys(routes);
        testRoutes.forEach(r => {
            driver.get(baseUrl + r).catch(error => {
                allRoutesAvaliable = false;
            })
        });
        assert.isTrue(allRoutesAvaliable);

    });




});




