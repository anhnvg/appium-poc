import {SearchScreen} from "./search.action";
import {IValidator} from "../base/validator/IValidatator";

export class SearchValidator implements IValidator {
    constructor(public screen: SearchScreen) {
    }

    async expectedWelcomeText(expectedMessage: string) {
        const actualText = await this.screen.getWelcomeText()
        expect(actualText).toEqual(expectedMessage)
    }
}

