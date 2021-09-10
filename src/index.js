import { Client } from "./client"
import { Companies } from "./endpoints/Companies"
import { Projects } from "./endpoints/Projects"
import { Teams } from "./endpoints/Teams"

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

    get teams() {
        return new Teams(this.client)
    }

}