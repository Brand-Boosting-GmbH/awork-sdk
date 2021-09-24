/**
 * Class corresponding to Aworks ProjectStatuses Endpoints
 * @category Endpoints
 * @see [ProjectStatuses in Awork API Docs](https://openapi.awork.io/#/ProjectStatuses)
 */
export class ProjectStatuses {
    /**
    * Endpoint constructor
    * @param {import('../client/index').Client} client
    */
    constructor(client: import('../client/index').Client);
    /** @private */
    private _client;
    /**
     * Returns the project status with the specified id.
     * @param {String} projectStatusId The id of the project status.
     * @returns {Array<Promise<ProjectStatus>>}
     */
    get(projectStatusId: string): Array<Promise<ProjectStatus>>;
    /**
     * Returns all project statuses.
     * @param {import('../global').ListOptions} [options] Pagination and filtering options.
     * @returns {Array<Promise<ProjectStatus>>}
     */
    list(options?: import('../global').ListOptions): Array<Promise<ProjectStatus>>;
    /**
     * Creates a new project status. For this operation, a projectTemplateId is required.
     * @param {String} projectTemplateId The id of the project template.
     * @param {ProjectStatus} projectStatus
     * @returns {Promise<ProjectStatus>}
     */
    create(projectTemplateId: string, projectStatus: ProjectStatus): Promise<ProjectStatus>;
    /**
     * Updates the project status with the specified id.
     * @param {String} projectStatusId
     * @param {ProjectStatus} projectStatus
     * @returns {Promise<ProjectStatus>}
     */
    update(projectStatusId: string, projectStatus: ProjectStatus): Promise<ProjectStatus>;
    /**
     * Deletes the project status with the specified id.
     * @param {String} projectStatusId
     */
    delete(projectStatusId: string): Promise<void>;
    /**
     * Archives or unarchives the project status with the specified id.
     * @param {String} projectStatusId
     * @param {Boolean} archivedStatus
     */
    archive(projectStatusId: string, archivedStatus?: boolean): Promise<void>;
}
import { ProjectStatus } from "../model/ProjectStatus";
