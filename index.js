const puppeteer = require('puppeteer');
const chalk = require('chalk');
const logSymbols = require('log-symbols');

const error = chalk.bold.red;
const success = chalk.bold.green;

(async () => {

    try {
        var browser = await puppeteer.launch({headless: true});
        var page = await browser.newPage();
        await page.goto('https://www.google.com/');
        await page.screenshot({path: 'example.png'});
        await browser.close();
        console.log(logSymbols.success, success('Browser closed'));
    } catch (err) {
        console.log(logSymbols.error, error(err));
        await browser.close();
        console.log(logSymbols.error, error('Browser closed'));
    }
})();