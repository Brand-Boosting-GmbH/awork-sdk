type FilterQuery = any;
type ListOptions = {
    /**
     * The current page number
     */
    page?: number;
    /**
     * How many items should be returned on each page. Maximum of 1000.
     */
    pageSize?: number;
    /**
     * Filter String or FilterQuery
     */
    filterBy?: (FilterQuery | string);
};
/**
 * Possible awork icons.
 */
type Icon = ('attach_money' | 'poll' | 'golf_course' | 'all_inclusive' | 'portrait' | 'timeline' | 'transform' | 'description' | 'folder' | 'computer' | 'web' | 'phone_iphone' | 'cloud' | 'local_movies' | 'shopping_cart' | 'brush' | 'image' | 'camera_alt' | 'movie_creation' | 'public' | 'whatshot' | 'extension' | 'explore' | 'lock' | 'settings' | 'stars' | 'store' | 'school' | 'local_bar' | 'question_answer' | 'favorite' | 'work' | 'flight_takeoff' | 'map' | 'local_dining');
/**
 * Colors supported by awork.
 */
type Color = ('red' | 'coral' | 'yellow' | 'green' | 'teal' | 'arctic' | 'blue' | 'azure' | 'purple' | 'violet');

/**
 * Awork Class
 * @category Util
 */
export class Awork {
    /**
     *
     * @param {({apiKey: String})} init
     */
    constructor({ apiKey }: ({
        apiKey: string;
    }));
    client: Client;
    /**
     * @returns {Companies}
     */
    get companies(): Companies;
    /**
     * @returns {Projects}
     */
    get projects(): Projects;
    /**
     * @returns {Teams}
     */
    get teams(): Teams;
}
import { Client } from "./client";
import { Companies } from "./endpoints/Companies";
import { Projects } from "./endpoints/Projects";
import { Teams } from "./endpoints/Teams";
