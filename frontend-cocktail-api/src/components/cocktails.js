class Cocktails {
    constructor() {
        this.cocktails = []
        this.adapter = new CocktailsAdapter()
        this.initBindingAndEventListeners()
        this.fetchAndLoadCocktails()
        // this.createCocktail()
    }

    initBindingAndEventListeners() {
        this.container = document.querySelector('#cocktails-container')
        this.cocktailForm = document.querySelector('#new-cocktail-form') 
        // this.
    }

    createCocktail() {
        // this.cocktailForm = document.querySelector('#new-cocktail-form')
        // debugger
    }

    fetchAndLoadCocktails() {
        this.adapter
            .getCocktails()
            .then(cocktails => {
                // console.log(cocktails)
                for(const cocktail of cocktails.data) {
                // cocktails.data.forEach(cocktail => {
                    let cocktailObj = {
                        id: cocktail.id,
                        liquors: cocktail.attributes.liquors,
                        name: cocktail.attributes.name,
                        flavor: cocktail.attributes.flavor,
                        ingredient: cocktail.attributes.ingredient,
                        preparation: cocktail.attributes.preparation,
                        pic: cocktail.attributes.pic
                    }
                    let newCocktail = new Cocktail(cocktailObj)
                    this.cocktails.push(newCocktail)
                    // console.log(this.cocktails)
                }
            
            })
            // console.log(this.cocktails)
            .then(() => this.renderCocktails())
    }

    renderCocktails() {
        // this.container = document.querySelector('#cocktails-container')
        this.container.innerHTML = this.cocktails.map(cocktail => cocktail.cocktailHTML()).join('')      
    }
}