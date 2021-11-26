
const { browser } = require("protractor");
const BaseObject = require("../baseobjects");

class BasePage extends BaseObject {
    constructor() {
        super(browser);
        this._browser = browser;

     this.baseUrl = 'https://www.protractortest.org/#/'
    }

    async getBrowser() {
        if (!this._browser) {
            this._browser = await new browser();
        }
        return this._browser;
    }

    async browse(url) {
        await browser.get(`${this.baseUrl}${url || ''}`)
    }

    async sleep(ms) {
        await browser.sleep(ms);
    }

    async clear() {
        await browser.executeScript('window.sessionStorage.clear();');
        await browser.refresh();
    }
}

module.exports = BasePage;