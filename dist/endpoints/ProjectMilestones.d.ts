/**
 * Class corresponding to Aworks ProjectMilestones Endpoints.
 * @category Endpoints
 * @see [ProjectMilestones in Awork API Docs](https://openapi.awork.io/#/ProjectMilestones)
 */
export class ProjectMilestones {
    /**
     * Endpoint constructor
     * @param {import('../client/index').Client} client
     */
    constructor(client: import('../client/index').Client);
    /** @private*/
    private _client;
    /**
     * Returns all project milestones the user is allowed to see.
     * The user only gets returned all milestones of projects he has 'read' permissions of feature 'project-planning-data' for.
     * @param {import('../global').ListOptions} [options] Pagination and filtering options.
     * @returns {Promise<Array<ProjectMilestone>>}
     */
    list(options?: import('../global').ListOptions): Promise<Array<ProjectMilestone>>;
    /**
     * @typedef {Object} ProjectMilestoneCreateModel
     * @property {String} name The name of the milestone.
     * @property {String} color The color of the milestone.
     * @property {String} dueDate The date the milestone is due.
     * @property {String} projectId The id of the project the milestone is related to.
     */
    /**
     * Creates a new project milestone.
     * The user needs 'write' permissions of feature 'project-planning-data' to get the data.
     * @param {ProjectMilestoneCreateModel} milestone The model to create a project milstone.
     * @returns {Promise<ProjectMilestone>}>
     */
    create(milestone: {
        /**
         * The name of the milestone.
         */
        name: string;
        /**
         * The color of the milestone.
         */
        color: string;
        /**
         * The date the milestone is due.
         */
        dueDate: string;
        /**
         * The id of the project the milestone is related to.
         */
        projectId: string;
    }): Promise<ProjectMilestone>;
    /**
     * @typedef {Object} ProjectMilestoneUpdateModel
     * @property {String} name The name of the milestone.
     * @property {String} color The color of the milestone.
     * @property {String} dueDate The date the milestone is due.
     */
    /**
     * Updates the specified project milestone. The user needs 'write' permissions of feature 'project-planning-data' to get the data.
     * @param {String} milestoneId The id of the project milestone.
     * @param {ProjectMilestoneUpdateModel} milestone The model to update a project milestone.
     * @returns {Promise<ProjectMilestone>}
     */
    update(milestoneId: string, milestone: {
        /**
         * The name of the milestone.
         */
        name: string;
        /**
         * The color of the milestone.
         */
        color: string;
        /**
         * The date the milestone is due.
         */
        dueDate: string;
    }): Promise<ProjectMilestone>;
    /**
     * Deletes the project milestone with the specified id.
     * The user needs 'write' permissions of feature 'project-planning-data' to get the data.
     * @param {String} milestoneId The id of the project milestone.
     * @returns {Promise<void>}
     */
    delete(milestoneId: string): Promise<void>;
}
import { ProjectMilestone } from "../model/ProjectMilestone";
