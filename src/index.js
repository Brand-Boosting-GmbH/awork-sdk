import { Client } from "./client"
import { Companies } from "./endpoints/Companies"

export class Awork {

    constructor({ apiKey }){
        this.client = new Client(apiKey)
    }

    get companies() {
        return new Companies(this.client)
    }

}