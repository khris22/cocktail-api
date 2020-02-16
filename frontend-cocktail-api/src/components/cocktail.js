class Cocktail {
    constructor(cocktail) {
        // debugger
        this.id = cocktail.id
        this.name = cocktail.name
        this.flavor = cocktail.flavor
        this.ingredient = cocktail.ingredient
        this.preparation = cocktail.preparation
        this.pic = cocktail.pic
        this.liquors = cocktail.liquors.map(l =>l.name)
        //  this.liquors = cocktail.liquors
        // debugger
    }
    

    cocktailHTML(){
        return(`
            <div id='cocktail-card' class='cocktail-card' data-id='${this.id}'>
            <h4>${this.name}</h4>
            <img class='cocktail-pic' src='${this.pic}' style="width:150px;height:150px;"> 
            <p>Flavor: ${this.flavor}</p>
            <p>Liquor Needed: ${this.liquors}</p>
            <p>Ingredients: ${this.ingredient}</p>
            <p>Preparation: ${this.preparation}</p>
           
            
            </div>
        `)
    }


}
{/* <p>Liquor Needed: ${this.liquors.map(l => l.name)}</p> */}



