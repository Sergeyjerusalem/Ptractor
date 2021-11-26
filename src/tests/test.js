
const HomePage = require('../app/objects/pages/homepage');

describe('Test suite 1', function () {
    let hp = new HomePage();

    beforeAll(async function () {
        await hp.getBrowser();
    });

    afterEach(async function () {
        await hp.clear();
    });

    it('Test', async function () {

        
        await hp.browse();
        expect(await hp.isDisplayed('mainLogo')).toEqual(true);
        let titles = ['Test Like a User', 'For Angular Apps', 'Automatic Waiting'];
        expect(await hp.getTextForEach('columnTitles')).toEqual(titles);
        let headeritems = ['Home', 'Quick Start', 'Protractor Setup', 'Protractor Tests', 'Reference'];
        expect(await hp.header.getTextForEach('mainItems')).toEqual(headeritems);
    });

    it('Test suite2', async function () {
        
        await hp.browse();
        await hp.header.selectHeaderItem(1);
        let dropboxitems = ['Tutorial'];
        expect(await hp.dropbox.getTextForEach('dropBoxItems')).toEqual(dropboxitems);
       

    });

    it('Test suite3', async function () {
        
        await hp.browse();
        await hp.header.selectHeaderItem(4);
        await hp.dropbox.selectDropbox(1);
        await hp.list.selectAllLists('listItems');
        expect(await hp.isDisplayed('apiTitle')).toEqual(true);
        await hp.sleep(2000);

    });

    
});