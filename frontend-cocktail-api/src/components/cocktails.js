class Cocktails {
    constructor() {
        this.cocktails = []
        this.adapter = new CocktailsAdapter()
        this.initBindingAndEventListeners()
        this.fetchAndLoadCocktails()
    }

    initBindingAndEventListeners() {
        this.container = document.querySelector('#cocktails-container')
        // Form fields
        this.cocktailForm = document.querySelector('#new-cocktail-form')
        this.inputLiquor = this.cocktailForm.querySelector('#input-liquor')
        this.cocktailName = this.cocktailForm.querySelector('#name')
        this.cocktailFlavor = this.cocktailForm.elements.flavor
        this.cocktailIngredients = this.cocktailForm.querySelector('#input-ingredients')
        this.cocktailPreparation = this.cocktailForm.querySelector('#input-prep')
        this.cocktailPic = this.cocktailForm.querySelector('#pic')
        // submit btn adding a cocktail
        this.cocktailForm.addEventListener('submit', this.createCocktail.bind(this))
    }

    createCocktail(e) {
        e.preventDefault()
        const name = this.cocktailName.value
        const liquor = this.inputLiquor.value
        const flavor = this.cocktailFlavor.value
        const ingredient = this.cocktailIngredients.value
        const preparation = this.cocktailPreparation.value
        const pic = this.cocktailPic.value
        const params = [name, liquor, flavor, ingredient, preparation, pic]

        this.adapter.createCocktailDB(params)
            .then(cocktail => {
                this.cocktails.push(new Cocktail(cocktail.data.attributes))
                this.renderCocktails()
            })
        this.cocktailName.value = ''
        this.inputLiquor.value = ''
        this.cocktailFlavor.value = ''
        this.cocktailIngredients.value = ''
        this.cocktailPreparation.value = ''
        this.cocktailPic.value = ''
    }

    fetchAndLoadCocktails() {
        this.adapter
            .getCocktails()
            .then(cocktails => {
                for(const cocktail of cocktails) {
                // cocktails.data.forEach(cocktail => {
                    // debugger
                    let cocktailObj = {
                        id: cocktail.id,
                        liquors: cocktail.liquors,
                        name: cocktail.name,
                        flavor: cocktail.flavor,
                        ingredient: cocktail.ingredient,
                        preparation: cocktail.preparation,
                        pic: cocktail.pic
                    }
                    let newCocktail = new Cocktail(cocktailObj)
                    this.cocktails.push(newCocktail)
                }
            })
            .then(() => this.renderCocktails())            
    }

    renderCocktails() {
        this.container.innerHTML = this.cocktails.map(cocktail => cocktail.cocktailHTML()).join('')   
        this.container.addEventListener('click', (e) => {
            e.preventDefault()
            if(e.target.classList.contains('delete-button')) {
            let cocktailId = e.target.parentElement.getAttribute("data-id")
            this.deleteCocktail(cocktailId)               
            }
        })
    }

    deleteCocktail(cocktailId) {
        let parsedId = parseInt(cocktailId, 10)
        // remove from db
        this.adapter
            .destroyCocktailId(parsedId)
        // remove from JS ObjectsArray
        let removeIndex = this.cocktails.map(function(c){          
                return c.id
            }).indexOf(parsedId)
        this.cocktails.splice(removeIndex, 1)
        // remove from DOM
        document.querySelector('[data-id="' + cocktailId + '"]').parentElement.remove()
        // parentNode.remove()
    }
}
