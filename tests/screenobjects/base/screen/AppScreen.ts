import {ChainablePromiseElement} from "webdriverio";

export default class AppScreen {
    // private selector: string;
    //
    // constructor (selector: string) {
    //     this.selector = selector;
    // }
    //
    // async waitForIsShown (isShown = true): Promise<boolean | void> {
    //     return $(this.selector).waitForDisplayed({
    //         reverse: !isShown,
    //     });
    // }

    async waitForIsShown(element: ChainablePromiseElement<WebdriverIO.Element>,isShown = true): Promise<boolean | void> {
        return element.waitForDisplayed({
            reverse: !isShown,
        });
    }

}