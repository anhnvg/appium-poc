export class SearchElement {
    private readonly iOSSelectors = {
        welcomeText: '~Welcome!',
        findYourDreamHomeText: '~Find your dream home',
        search: '~Search properties',
    }

    private readonly androidSelectors = {
        welcomeText: '#simpleSearchWelcome'
    }

    public get welcomeText() {
        if (driver.isIOS) {
            return $(this.iOSSelectors.welcomeText)
        } else {
            return $(this.androidSelectors.welcomeText)
        }
    }

    public get searchButton() {
        if (driver.isIOS) {
            return $(this.iOSSelectors.search)
        } else {
            return $(this.iOSSelectors.search)
        }
    }

    public get findYourDreamHome() {
        return $(this.iOSSelectors.findYourDreamHomeText)
    }
}