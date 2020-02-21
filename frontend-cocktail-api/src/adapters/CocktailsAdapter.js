class CocktailsAdapter {
    constructor() {
        this.baseUrl = 'http://localhost:3000/api/v1/cocktails'
    }

    getCocktails() {
        return fetch(this.baseUrl)
        .then(res => res.json())
    }

   async createCocktailDB(params) {
        let cocktailData = {
            name: params[0],
            liquor: params[1],
            flavor: params[2],
            ingredient: params[3] ,
            preparation: params[4],
            pic: params[5]
        }

        return fetch(this.baseUrl, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify(cocktailData)
        })
            .then(resp => resp.json())
    }

    destroyCocktailId(cocktailId) { 
        let configObj = {
            method: "DELETE"
        }
        return fetch(this.baseUrl + `/${cocktailId}`, configObj)
            .then(resp => resp.json())
    }

}
