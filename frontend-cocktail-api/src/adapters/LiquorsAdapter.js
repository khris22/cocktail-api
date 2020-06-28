class LiquorsAdapter {
    constructor() {
        this.baseUrl = 'https://nomu-api.herokuapp.com/api/v1/liquors'
    }

    getLiquors() {
        return fetch(this.baseUrl)
        .then(res => res.json())
    }
}
