import { Client } from "./client"
import { Companies } from "./endpoints/Companies"
import { Projects } from "./endpoints/Projects"
import { Teams } from "./endpoints/Teams"

/**
 * Awork Class
 * @category Util
 */
export class Awork {

    /**
     * 
     * @param {({apiKey: String})} init 
     */
    constructor({ apiKey }){
        this.client = new Client(apiKey)
    }

    /**
     * @returns {Companies}
     */
    get companies() {
        return new Companies(this.client)
    }

    /**
     * @returns {Projects}
     */
    get projects() {
        return new Projects(this.client)
    }

    /**
     * @returns {Teams}
     */
    get teams() {
        return new Teams(this.client)
    }

}