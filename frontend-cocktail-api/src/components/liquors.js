class Liquors {
    constructor() {
        this.liquors = []
        this.adapter = new LiquorsAdapter()
        this.initBindingAndEventListeners()
        this.fetchAndLoadLiquor()
    }

    initBindingAndEventListeners() {
        // Dropdown for adding cocktail
        this.liquorSelect = document.querySelector('#input-liquor')
        this.searchContainer = document.querySelector('#search-container')
        // Dropdown for Liquor Info
        this.liquorInfo = document.querySelector('#search-liquor')
        this.liquorInfo.addEventListener('change', this.findMatch.bind(this))
        this.searchResult = document.querySelector('#search-result')   
    }

    fetchAndLoadLiquor() {
        this.adapter
            .getLiquors()
            .then(liquors => {
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
            // .then(() => this.searchLiquorInfo())
    }

    renderLiquorsOptions() {       
        let options = this.liquors.map(liquor => liquor.name)
        let sortedOptions = options.sort()    
        for(const liquor of sortedOptions) {
           let element = document.createElement('option')
           element.innerText = liquor
           const el2 = element.cloneNode(true)
           this.liquorSelect.appendChild(element) 
           this.liquorInfo.appendChild(el2)
        }    
    }

    // searchLiquorInfo() {
    //     let options = this.liquors.map(liquor => liquor.name)
    //     let sortedOptions = options.sort()
    //     for(const liquor of sortedOptions) {
    //        let element = document.createElement('option')
    //        element.innerText = liquor         
    //        this.liquorInfo.appendChild(element)
    //     }
    // }
  
    findMatch(e) {
        e.preventDefault()
        const input = e.currentTarget.value
        let matchArray = this.liquors.filter(liq => liq.name.includes(input)) 
        let newLiquorArray = matchArray.map(liq => liq.liquorHTML()).join('')
        this.searchResult.innerHTML = newLiquorArray
    }
   
}
