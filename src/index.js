import { Client } from "./client"
import { Companies } from "./endpoints/Companies"
import { Projects } from "./endpoints/Projects"
import { Teams } from "./endpoints/Teams"
import { Tasks } from "./endpoints/Tasks"


/**
 * @typedef {Object} FilterQuery
 */


/**
 * @typedef {Object} ListOptions
 * @property {Number} [page] The current page number
 * @property {Number} [pageSize] How many items should be returned on each page. Maximum of 1000.
 * @property {(FilterQuery|String)} [filterBy] Filter String or FilterQuery
 */

/**
 * @typedef {('attach_money'|'poll'|'golf_course'|'all_inclusive'|'portrait'|'timeline'|'transform'|'description'|'folder'|'computer'|'web'|'phone_iphone'|'cloud'|'local_movies'|'shopping_cart'|'brush'|'image'|'camera_alt'|'movie_creation'|'public'|'whatshot'|'extension'|'explore'|'lock'|'settings'|'stars'|'store'|'school'|'local_bar'|'question_answer'|'favorite'|'work'|'flight_takeoff'|'map'|'local_dining')} Icon Possible awork icons.
 */

/**
 * @typedef {('red'|'coral'|'yellow'|'green'|'teal'|'arctic'|'blue'|'azure'|'purple'|'violet')} Color Colors supported by awork.
 */

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

    /**
     * @returns {Tasks}
     */
     get tasks() {
        return new Tasks(this.client)
    }

}