const { element } = require("protractor");
const BaseObject = require("../baseobjects");

class List extends BaseObject {
    constructor() {
        super();
        this.container = element(by.css('div.hidden-xs > div > ul'));

        this.listItems = element.all(by.css('div.hidden-xs > div > ul > li'));

    }

    async selectList(position) {
        const target = (await this.container.all(by.css('div.hidden-xs > div > ul > li')))[position];
        await target.click();
        
    }

    async selectAllLists(elements) {
        for (let i = 0; i < await this[elements].count(); i++) {
            await this[elements].get(i).click();
        }
        
             
    }



}

module.exports = List;