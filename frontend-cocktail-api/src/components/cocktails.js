class Cocktails {
    constructor() {
        this.cocktails = []
        this.adapter = new CocktailsAdapter()
        
        this.fetchAndLoadCocktails()
        // this.initBindingsAndEvents()
        
    }

//    initBindingsAndEvents() {
//         // debugger
//         this.container = document.querySelector('#cocktails-container')
//     }

    fetchAndLoadCocktails() {
        this.adapter
            .getCocktails()
            .then(cocktails => {
                // console.log(cocktails)
                for(const cocktail of cocktails.data) {
                // cocktails.data.forEach(cocktail => {
                    let cocktailObj = {
                        id: cocktail.id,
                        liquors: cocktail.attributes.liquors[0].name,
                        name: cocktail.attributes.name,
                        flavor: cocktail.attributes.flavor,
                        ingredient: cocktail.attributes.ingredient,
                        preparation: cocktail.attributes.preparation
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
        this.container = document.querySelector('#cocktails-container')
        this.container.innerHTML = this.cocktails.map(cocktail => cocktail.cocktailHTML()).join('')
   
        
    }
}