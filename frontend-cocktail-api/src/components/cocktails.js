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

        // Form fields
        this.cocktailForm = document.querySelector('#new-cocktail-form')
        this.inputLiquor = this.cocktailForm.querySelector('#input-liquor')
        this.cocktailName = this.cocktailForm.querySelector('#name')
        this.cocktailFlavor = this.cocktailForm.elements.flavor
        // this.cocktailFlavor = document.getElementById("myRadio")
        // this.cocktailFlavor = this.cocktailForm.querySelector('#flavor')
        // debugger
        this.cocktailIngredients = this.cocktailForm.querySelector('#input-ingredients')
        this.cocktailPreparation = this.cocktailForm.querySelector('#input-prep')
        this.cocktailPic = this.cocktailForm.querySelector('#pic')
        // debugger

        // submit button
        this.cocktailForm.addEventListener('submit', this.createCocktail.bind(this))
    }

    createCocktail(e) {
        e.preventDefault()
        const name = this.cocktailName.value
        const liquor = this.inputLiquor.value
        // const flavor = this.cocktailFlavor.checked.value
        const flavor = this.cocktailFlavor.value
        //  debugger
        const ingredient = this.cocktailIngredients.value
        const preparation = this.cocktailPreparation.value
        const pic = this.cocktailPic.value
        const params = [name, liquor, flavor, ingredient, preparation, pic]
        // debugger
        this.adapter.createCocktailDB(params)
            .then(cocktail => {
                this.cocktails.push(new Cocktail(cocktail))
                this.showCocktails()
            })
        
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