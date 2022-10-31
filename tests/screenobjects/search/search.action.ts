import AppScreen from "../base/screen/AppScreen";
import {SearchElement} from "./search.element";

export class SearchScreen extends AppScreen{
    private searchElement = new SearchElement()

    async getWelcomeText() {
        return this.searchElement.welcomeText.getText()
    }

    async tapSearchButton() {
        await this.searchElement.searchButton.click()
    }

    async getSearchButtonText(){
        return this.searchElement.searchButton.getText()
    }

    async isWelcomeTextDisplayed() {
        return this.searchElement.welcomeText.isDisplayed()
    }

    async isFindYourDreamHomeDisplayed() {
        return this.searchElement.findYourDreamHome.isDisplayed()
    }

    async getFindYourDreamHomeText(){
        return this.searchElement.findYourDreamHome.getText()
    }

    async getTextOfWelcomeSection(){
        let welcomeSectionText = []
        welcomeSectionText.push(this.getWelcomeText(),this.getFindYourDreamHomeText() , this.getSearchButtonText())
        return welcomeSectionText
    }


}