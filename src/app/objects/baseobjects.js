
class BaseObject {
    async isDisplayed(element) {
        return await this[element].isDisplayed();
    }

    async getText(element) {
        return (await this[element].getText()).trim();
    }

    async getTextForEach(elements) {
        let arr = [];
        for (let i = 0; i < await this[elements].count(); i++) {
            arr.push((await this[elements].get(i).getText()).trim());
        }
        return arr;
             
    }
}

module.exports = BaseObject;