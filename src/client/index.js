

export class Client {

    constructor (basePath = 'https://api.awork.io/api/v1'){
        this.basePath = basePath
    }


    static getPlainObject (obj) {
        if( typeof obj === 'object' && typeof obj.toPlainObject === 'function' ) {
            return obj.toPlainObject()
        }
        return obj
    }

    post(path, payload) {
        let data = Client.getPlainObject(payload)
        
    }

}