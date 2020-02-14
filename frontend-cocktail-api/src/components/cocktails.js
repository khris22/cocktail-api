class Cocktails {
    constructor() {
        this.cocktails = []
        this.adapter = new CocktailsAdapter()
        // this.bindEventListeners()
        this.fetchAndLoadCocktails()
    }

    fetchAndLoadCocktails() {
        this.adapter.getCocktails().then(cocktails => {
            console.log(cocktails)
        })
    }

}