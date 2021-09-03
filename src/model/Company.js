
export class Company {
    constructor(data) {
        this._data = data || {}
    }

    /**
     * @type {String}
     */
    get id() {
        return this._data.id
    }

    get name() {
        return this._data.name
    }

    /**
     * @type {Boolean}
     */
    get hasImage() {
        return this._data.title
    }

    toPlainObject() {
        return {
            id: this._data.id,
            name: this._data.name,
            hasImage: this._data.hasImage,
        }
    }
}