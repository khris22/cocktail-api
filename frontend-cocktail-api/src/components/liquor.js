class Liquor {
    constructor(liquor) {
        // debugger
        this.id = liquor.id
        this.name = liquor.name
        this.alcohol_content = liquor.alcohol_content
        this.made_from = liquor.made_from
        this.origin = liquor.origin
        this.cocktails = liquor.cocktails
       
    }

    liquorHTML() {
        return (`
            <div id='liquor-container' class='liquor-container'>
                <h4>${this.name}</h4>
            </div>
            
        `)
    }
}

// t.string "name"
// t.string "alcohol_content"
// t.string "made_from"
// t.string "origin"