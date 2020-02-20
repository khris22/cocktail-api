class Cocktail {
    constructor(cocktail) {
        // debugger
        this.id = cocktail.id
        this.name = cocktail.name
        this.flavor = cocktail.flavor
        this.ingredient = cocktail.ingredient
        this.preparation = cocktail.preparation
        this.pic = cocktail.pic
        this.liquors = this.getLiquorNames(cocktail.liquors)
        //  this.liquors = cocktail.liquors
        // this.initBindingAndEventListeners()
    }
    
    getLiquorNames(liquors){    
        return liquors.map(l => l.name).join(', ')
    }

    cocktailHTML(){
        return(`
            
            <div class="card-group">
            <div name='cocktail-card' class='cocktail-card card border-secondary mb-3 card-body' data-id='${this.id}'>
            <div class="card-header"><h4>${this.name}</h4></div></br>
            <img class='cocktail-pic' src='${this.pic}'/></br>
            <p class="card-text">Flavor: ${this.flavor}</p>
            <p>Liquor Needed: ${this.liquors}</p>
            <p>Ingredients: ${this.ingredient}</p>
            <p>Preparation: ${this.preparation}</p>
            <button name='delete-card' class="delete-button btn btn-secondary btn-sm">Delete</button>
            </div>
            </div>
                   
            `)
    }

    // <button onClick="handleDeleteCocktail()" id='deleteBtn'>delete</button>
    // handleDeleteCocktail(e){
    //     debugger
    // }
}




