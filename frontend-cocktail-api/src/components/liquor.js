class Liquor {
    constructor(liquor) {
        // debugger
        this.id = liquor.id
        this.name = liquor.name
        this.alcohol_content = liquor.alcohol_content
        this.made_from = liquor.made_from
        this.origin = liquor.origin
        this.cocktails = liquor.cocktails.map(c => c.name).join(', ')
       
    }

    liquorHTML() {
        return (`
            <div id='liquor-container' class='liquor-container'>
                <h4>Liquor: ${this.name}</h4>
                <p>Alcohol Content: ${this.alcohol_content} alcohol by volume (ABV)</p>
                <p>Made from: ${this.made_from}</p>
                <p>Origin: ${this.origin}</p>
                <p>Cocktails: ${this.cocktails}</p>
            </div>
            
        `)
    }
}

// t.string "name"
// t.string "alcohol_content"
// t.string "made_from"
// t.string "origin"