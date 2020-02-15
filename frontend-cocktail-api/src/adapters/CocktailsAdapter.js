class CocktailsAdapter {
    constructor() {
        this.baseUrl = 'http://localhost:3000/api/v1/cocktails'
        // debugger
    }

    getCocktails() {
        return fetch(this.baseUrl)
        .then(res => res.json())
    }
}

// adapter = new CocktailsAdapter()

// const cocktails = adapter.getCocktails()


// const BACKEND_URL = 'http://localhost:3000/api/v1/cocktails';

// fetch(`${BACKEND_URL}`)
//   .then(response => response.json())
//   .then(parsedResponse => console.log(parsedResponse));