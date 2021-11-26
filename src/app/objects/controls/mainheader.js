const { element } = require("protractor");
const BaseObject = require("../baseobjects");

class MainHeader extends BaseObject {
    constructor() {
        super();
        this.container = element(by.css('.navbar-collapse '));

        this.mainItems = this.container.all(by.css('.navbar-nav>li'));

    }

    async selectHeaderItem(position) {
        const target = (await this.container.all(by.css('.navbar-nav>li')))[position];
        await target.click();
        
    }



}

module.exports = MainHeader;