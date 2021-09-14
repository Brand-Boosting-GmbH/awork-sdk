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
