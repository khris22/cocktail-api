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

# Another option for handling delete button
> cocktails.js (initBindings...)
        // this.deleteBtn = this.container.querySelector('#deleteBtn')
        // this.deleteBtn.addEventListener('click', this.deleteCocktail.bind(this))
> renderCocktails()
        // this.deleteBtn = this.container.querySelectorAll('.delete-button')
        // for(const del of this.deleteBtn) {
        //     del.addEventListener('click', this.deleteCocktail.bind(this))
        // }



### Additional Features
[ ] User Login
[ ] Add more options for Liquor (Cocktail has_many liquors)
[ ] Use of bootstrap modal
[ ] Update/Edit an entry