# bind()
The bind() method creates a new function that, when called, has its this keyword set to the provided value, with a given sequence of arguments preceding any provided when the new function is called.

From book: binding is the process of stating whcih event you are waiting to happen, and which element you are waiting for that event to happen upon

Deleting objects in an array
# parseInt() method converts a string into an integer (a whole number).
It accepts two arguments. The first argument is the string to convert. The second argument is called the radix. This is the base number used in mathematical systems. For our use, it should always be 10.
# .map(function(el){return ???})
# .indexOf() 
get index of object
# splice()
When we provide two arguments to .splice(), the first is still the index at which to begin splicing, and the second dictates how many elements we want to remove from the Array.

# join table has no other input but the ids of the models we want to associate --> has_and_belongs_to_many :liquors

# db: Set-up ON_DELETE CASCADE
 class UpdateForeignKeyAddOnDeleteConstraint < ActiveRecord::Migration[6.0]
   def change
     remove_foreign_key :liquor_cocktails, :cocktails
     remove_foreign_key :liquor_cocktails, :liquors 
     add_foreign_key :liquor_cocktails, :cocktails, on_delete: :cascade
     add_foreign_key :liquor_cocktails, :liquors, on_delete: :cascade
   end
 end

# CocktailsControllerOption1 Using Fast Json Serializer
        cocktails = Cocktail.all
        # options = {
        #     include: [:liquors]
        #   }
        # render json: CocktailSerializer.new(cocktails, options)

        Option2 - Destroy
        # cocktail = Cocktail.find_by(id:params[:id])
        # render json: cocktail
        # Cocktail.destroy(cocktail.id)

# Another option for handling delete button
> cocktails.js (initBindings...)
        // this.deleteBtn = this.container.querySelector('#deleteBtn')
        // this.deleteBtn.addEventListener('click', this.deleteCocktail.bind(this))
> renderCocktails()
        // this.deleteBtn = this.container.querySelectorAll('.delete-button')
        // for(const del of this.deleteBtn) {
        //     del.addEventListener('click', this.deleteCocktail.bind(this))
        // }
>using filter
        // console.log('START', this.cocktails)   
        // this.cocktails.filter(function(c) {
        //     const indexN = parseInt(cocktailId, 10)
        //     return c.id != indexN
        // })      
        // e.target.parentNode.remove()
        // this.renderCocktails()
        // console.log('END', this.cocktails)
>refreshes the page when rendering
        // working but does not seem ideal
        // location.reload()

# Adding a search box
        // this.searchBox = document.querySelector('#search-box')
        // this.searchBox.addEventListener('input', this.findMatch.bind(this))
        // findMatch(e) {
        // e.preventDefault()
        // this.searchBox.value // const input = e.currentTarget.value
        // filter??
        // let matchArray = this.liquors.find(liq => liq.name.toLowerCase() === input.toLowerCase()) //returns an Object
        // this.liquorInfo.value = ''


        // let filterLiquor = this.filterMatch()
        // this.renderLiquorsOptions(filterLiquor)
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

# renderLiquorsOptions() { 
          // for(let i=0; i < options.length; i++) {
          // debugger
          // let opt = options[i]
          // let element = document.createElement('option')
          // element.value = i + 1
          // this.liquorInfo .appendChild(element)

  # String.prototype.includes is the heavy lifter of the filter. You pass it a string and it gives you back true or false to let you know if its a substring of the original string.

# sort()
      // .sort((a, b) => {
      //     if (a > b) return 1;
      //     if (a < b) return -1;
      //     return 0;
      //   })
      // .sort(function (a, b) {
      //     if (a < b) {
      //         return -1;
      //     }
      //     if (b < a) {
      //         return 1;
      //     }
      //     return 0;
      // })
      // .sort((a, b) => { return a > b; })


### Additional Features
[ ] User Login
[ ] Add more options for Liquor (Cocktail has_many liquors)
[ ] Use of bootstrap modal
[ ] Update/Edit an entry