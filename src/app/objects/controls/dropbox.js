const { element } = require("protractor");
const BaseObject = require("../baseobjects");

class DropBox extends BaseObject {
    constructor() {
        super();

        this.dropBoxItems = element.all(by.css('.dropdown.open > ul > li'));

    }

    async selectDropbox(position) {
        const target = (await element.all(by.css('.dropdown.open > ul > li')))[position];
        await target.click();
    }
    
}

module.exports = DropBox;