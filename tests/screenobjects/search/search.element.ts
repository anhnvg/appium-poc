export class SearchElement {
    private readonly selectors = {
        welcomeText: '~Welcome!',
        findYourDreamHomeText: '~Find your dream home',
        search: '~Search properties',
    }

    public get welcomeText() {
        return $(this.selectors.welcomeText)
    }

    public get searchButton(){
        return $(this.selectors.search)
    }

    public get findYourDreamHome(){
        return $(this.selectors.findYourDreamHomeText)
    }
}