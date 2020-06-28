class CocktailsAdapter {
    constructor() {
        this.baseUrl = 'https://nomu-api.herokuapp.com/api/v1/cocktails'
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

    showInfo(cocktailDataId) {
        let configObj = {
            method: "GET",
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            }
        }
        return fetch(this.baseUrl + `/${cocktailDataId}`, configObj)
            .then(resp => resp.json())
    }
    


    destroyCocktailId(cocktailId) { 
        let configObj = {
            method: "DELETE",
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            }
        }
        return fetch(this.baseUrl + `/${cocktailId}`, configObj)
            .then(resp => resp.json())
    }

}
