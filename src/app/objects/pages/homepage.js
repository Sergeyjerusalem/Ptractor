const MainHeader = require('../controls/mainheader');
const DropBox = require('../controls/dropbox')
const BasePage = require('./basepage');
const List = require('../controls/listunstyled');

class HomePage extends BasePage {
    constructor() {
        super();
        this.mainLogo = element(by.css('.protractor-logo'));
        this.columnTitles = element.all(by.css('.col-sm-4>h3'));
        this.apiTitle = element(by.css('div.col-sm-9.ng-scope > h3'));
    }

    get header() {
        return new MainHeader;
    }

    get dropbox() {
        return new DropBox;
    }

    get list() {
        return new List;
    }
}

module.exports = HomePage;