import {SearchScreen} from "../screenobjects/search/search.action";
import {SearchValidator} from "../screenobjects/search/search.validator";

const searchScreen = new SearchScreen()
const validator = new SearchValidator(searchScreen)

describe('Test suites for search screen', () => {
    beforeEach(async () => {

    });

    afterEach(async () => {

    })
    it('verify the welcome section', async () => {
        await validator.expectedWelcomeText('Welcome!')
    })

    xit('tap search button', async () => {
        await searchScreen.tapSearchButton()
        browser.pause(5000)
    })

})