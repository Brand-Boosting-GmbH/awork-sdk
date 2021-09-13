/**
 * Class corresponding to Aworks project related part of the ProjectStatuses Endpoints
 * @category Endpoints
 * @see [ProjectStatuses in Awork API Docs](https://openapi.awork.io/#/ProjectStatuses)
 */
export class ProjectProjectStatuses {
    /**
    * Endpoint constructor
    * @param {import('../client/index').Client} client
    * @param {String} projectId The id of the project.
    */
    constructor(client: import('../client/index').Client, projectId: string);
    /** @private */
    private _client;
    /** @private */
    private _projectId;
    /**
     * @typedef {Object} ProjectStatusCreateModel
     * @property {String} name The name of the project status. Required.
     * @property {('progress'|'not-started'|'closed'|'stuck')} type Specifies the general type of this project status. Required.
     */
    /**
     * Creates a new project status for a project.
     * @param {ProjectStatusCreateModel} projectStatus
     * @returns {Promise<ProjectStatus>}
     */
    create(projectStatus: {
        /**
         * The name of the project status. Required.
         */
        name: string;
        /**
         * Specifies the general type of this project status. Required.
         */
        type: ('progress' | 'not-started' | 'closed' | 'stuck');
    }): Promise<ProjectStatus>;
}
import { ProjectStatus } from "../model/ProjectStatus";
