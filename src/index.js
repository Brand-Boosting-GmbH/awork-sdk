import { Client } from "./client"
import { Companies } from "./endpoints/Companies"
import { Projects } from "./endpoints/Projects"

export class Awork {

    constructor({ apiKey }){
        this.client = new Client(apiKey)
    }

    get companies() {
        return new Companies(this.client)
    }

    get projects() {
        return new Projects(this.client)
    }

}