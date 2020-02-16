class Liquors {
    constructor() {
        this.liquors = []
        this.adapter = new LiquorsAdapter()
        this.initBindingAndEventListeners()
        this.fetchAndLoadLiquor()
        // this.createCocktail()
    }

    initBindingAndEventListeners() {
        this.liquorSelect = document.querySelector('#input-liquor')
        // debugger
    }


    fetchAndLoadLiquor() {
        this.adapter
            .getLiquors()
            .then(liquors => {
                // console.log(liquors.data)
                for(const liquor of liquors.data) {
                    let liquorObj = {
                        id: liquor.id,
                        name: liquor.attributes.name,
                        alcohol_content: liquor.attributes.alcohol_content,
                        made_from: liquor.attributes.made_from,
                        origin: liquor.attributes.origin,
                        cocktails: liquor.attributes.cocktails
                    }
                    let newLiquor = new Liquor(liquorObj)
                    this.liquors.push(newLiquor)
                    
                }
            })
            .then(() => this.renderLiquorsOptions())
    }

    renderLiquorsOptions() {
        
        let options = this.liquors.map(liquor => liquor.name)
        for(const liquor of options) {
        // for(let i=0; i < options.length; i++) {
            // debugger
            // let opt = options[i]
           let element = document.createElement('option')
           element.innerText = liquor
        //    element.value = i + 1
        // debugger
           this.liquorSelect.appendChild(element)
        }
        
    }
  

}

// .then(cocktails => {
//     // console.log(cocktails)
//     for(const cocktail of cocktails.data) {
//     // cocktails.data.forEach(cocktail => {
//         let cocktailObj = {
//             id: cocktail.id,
//             liquors: cocktail.attributes.liquors[0].name,
//             name: cocktail.attributes.name,
//             flavor: cocktail.attributes.flavor,
//             ingredient: cocktail.attributes.ingredient,
//             preparation: cocktail.attributes.preparation,
//             pic: cocktail.attributes.pic
//         }
//         let newCocktail = new Cocktail(cocktailObj)
//         this.cocktails.push(newCocktail)
//         // console.log(this.cocktails)
//     }