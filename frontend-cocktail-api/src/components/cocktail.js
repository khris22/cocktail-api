class Cocktail {
    constructor(cocktail) {
        // debugger
        this.id = cocktail.id
        this.name = cocktail.name
        this.flavor = cocktail.flavor
        this.ingredient = cocktail.ingredient
        this.preparation = cocktail.preparation
        this.pic = cocktail.pic
        this.liquors = cocktail.liquors.map(l => l.name).join(', ')
        //  this.liquors = cocktail.liquors
        // this.initBindingAndEventListeners()
    }
    

    cocktailHTML(){
        return(
            `<div name='cocktail-card' class='cocktail-card' data-id='${this.id}'>
            <h4>${this.name}</h4>
            <img class='cocktail-pic' src='${this.pic}' style="width:200px;height:200px;" /> 
            <p>Flavor: ${this.flavor}</p>
            <p>Liquor Needed: ${this.liquors}</p>
            <p>Ingredients: ${this.ingredient}</p>
            <p>Preparation: ${this.preparation}</p>
            <button name='delete-card' class='delete-button' >delete</button>
            </div>`
            
        )
    }

    // <button onClick="handleDeleteCocktail()" id='deleteBtn'>delete</button>
    // handleDeleteCocktail(e){
    //     debugger
    // }
}




