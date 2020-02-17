class Cocktails {
    constructor() {
        this.cocktails = []
        this.adapter = new CocktailsAdapter()
        this.initBindingAndEventListeners()
        this.fetchAndLoadCocktails()
        // this.deleteCocktail()
        // debugger
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
        // debugger

        // submit button
        this.cocktailForm.addEventListener('submit', this.createCocktail.bind(this))

        // debugger
        // for patch request
        // this.container.addEventListener('dblclick', function() { 
        //     console.log('double click')
        // })

        // this.deleteBtn = this.container.querySelector('#deleteBtn')
        // this.deleteBtn.addEventListener('click', this.deleteCocktail.bind(this))
        // this.deleteBtn = document.querySelector("#deleteBtn")
        // this.deleteBtn.addEventListener('click', console.log('delete'))
        
        // debugger
        // this.handleDeleteCocktail

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
                // debugger
                this.cocktails.push(new Cocktail(cocktail.data.attributes))
                this.renderCocktails()
            })
            this.cocktailName.value = ''
            this.inputLiquor.value = ''
            this.cocktailFlavor.value = 'sweet'
            this.cocktailIngredients.value = ''
            this.cocktailPreparation.value = ''
            this.cocktailPic.value = ''
        // debugger
    }

    fetchAndLoadCocktails() {
        this.adapter
            .getCocktails()
            .then(cocktails => {
                // console.log(cocktails)
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
                    // console.log(this.cocktails)
                }
            })
            // console.log(this.cocktails)
            .then(() => this.renderCocktails())
            // .then(() => this.deleteCocktail())
            
    }

    renderCocktails() {
        // this.container = document.querySelector('#cocktails-container')
        this.container.innerHTML = this.cocktails.map(cocktail => cocktail.cocktailHTML()).join('') 
        
        // debugger
        // this.deleteCocktail()
        // this.deleteBtn = document.querySelector("#deleteBtn")
        // this.container.querySelector('button')
        // this.deleteBtn = this.container.querySelectorAll('deleteBtn')
        this.deleteBtn = this.container.querySelectorAll('.delete-button')

        // debugger
        for(const del of this.deleteBtn) {
            del.addEventListener('click', this.deleteCocktail.bind(this))
        }
        // this.deleteBtn.addEventListener('click', this.deleteCocktail.bind(this))
    }

    deleteCocktail(e) {
        // debugger
        // this.deleteBtn = this.container.querySelector('#deleteBtn')
        // this.deleteBtn.addEventListener('click', this.deleteCocktail.bind(this))
        e.preventDefault()
        // debugger
        let cocktailId = e.target.parentElement.getAttribute("data-id")

        this.adapter
            .destroyCocktailId(cocktailId)
            .then(json => {
                // debugger
            })

    }
}
