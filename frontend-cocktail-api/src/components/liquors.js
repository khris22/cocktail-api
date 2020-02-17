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
        // this.searchForm = document.querySelector('#search-form')
        // this.searchForm.style.visibility = "visible"
        // this.searchForm.style.display
        
        // this.searchBox.style.visibility = "visible"
        // debugger
        this.searchContainer = document.querySelector('#search-container')
        // debugger
        this.searchBox = document.querySelector('#search-box')
        // this.searchBox.addEventListener('input', this.findMatch.bind(this))
        this.liquorInfo = document.querySelector('#search-liquor')
        this.liquorInfo.addEventListener('change', this.findMatch.bind(this))
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
            .then(() => this.searchLiquorInfo())
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
        //    this.liquorInfo .appendChild(element)
        }
        
    }

    searchLiquorInfo() {
        let options = this.liquors.map(liquor => liquor.name)
        for(const liquor of options) {
           let element = document.createElement('option')
           element.innerText = liquor
        //    this.liquorSelect.appendChild(element) 
           this.liquorInfo.appendChild(element)
        //    this.liquorInfo.value = ''
        //    debugger
        }
    }
  
    findMatch(e) {
        e.preventDefault()

        // this.searchBox.value
        // debugger
        const input = e.currentTarget.value


        //   debugger
        let matchArray = this.liquors.filter(liq => liq.name.toLowerCase().includes(input))

        let newLiquorArray = matchArray.map(liq => liq.liquorHTML()).join('')
        // this.liquorInfo.value = ''

        // this.render(this.searchBox)
        // debugger
        this.searchContainer.innerHTML = newLiquorArray
        // this.searchBox.value = ''
        //         this.searchContainer.innerHTML = newLiquorArray
        // e.target.value
        
        // String.prototype.includes is the heavy lifter of the filter. You pass it a string and it gives you back true or false to let you know if its a substring of the original string.

        // let filterLiquor = this.filterMatch()
        // this.searchBox.value = ''
        // this.renderLiquorsOptions(filterLiquor)


        // this.searchBox.value = ''
        // debugger

        // let newLiquorArray = matchLiquor.map(liq => liq.liquorHTML()).join('')
        // this.searchContainer.innerHTML = newLiquorArray
        // this.searchForm.style.display = "visible"
        // filterMatch() {
        //     let matchLiquor = this.liquors.filter(liquor => { 
        //         return liquor.name.toLowerCase().includes(input.toLowerCase()) 
        //         }) 
        //         let newLiquorArray = matchLiquor.map(liq => liq.liquorHTML()).join('')
        //         this.searchContainer.innerHTML = newLiquorArray
        // }
 

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