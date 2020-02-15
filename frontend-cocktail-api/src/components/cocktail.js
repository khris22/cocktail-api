class Cocktail {
    constructor(cocktail) {
        // debugger
        this.id = cocktail.id
        this.name = cocktail.name
        this.flavor = cocktail.flavor
        this.ingredient = cocktail.ingredient
        this.preparation = cocktail.preparation
        this.pic = cocktail.pic
        this.liquors = cocktail.liquors
    }

    cocktailHTML(){
        return(`
            <div id='cocktail-card' class='cocktail-card' data-id='${this.id}'>
            <h4>${this.name}</h4>
            <img class='cocktail-pic' src='${this.pic}' style="width:150px;height:150px;"> 
            <p>${this.flavor}</p>
            <p>${this.ingredient}</p>
            <p>${this.preparation}</p>
            <p>${this.liquors}</p>
            
            </div>
        `)
    }


}




