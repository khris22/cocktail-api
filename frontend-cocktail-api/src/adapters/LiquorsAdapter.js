class LiquorsAdapter {
    constructor() {
        this.baseUrl = 'http://localhost:3000/api/v1/liquors'
        // debugger
    }

    getLiquors() {
        return fetch(this.baseUrl)
        .then(res => res.json())
    }
}
