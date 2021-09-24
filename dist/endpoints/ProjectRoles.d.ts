/**
 * Class corresponding to Aworks ProjectRoles Endpoints
 * @category Endpoints
 * @see [ProjectRoles in Awork API Docs](https://openapi.awork.io/#/ProjectRoles)
 */
export class ProjectRoles {
    /**
     * Endpoint constructor
     * @param {import('../client/index').Client} client
     */
    constructor(client: import('../client/index').Client);
    /**
     * @private
     */
    private _client;
    /**
     * Returns the project role with the specified id.
     * @param {String} projectRoleId The id of the project role.
     * @returns {Promise<ProjectRole>}
     */
    get(projectRoleId: string): Promise<ProjectRole>;
    /**
     * Returns all project roles.
     * @param {import('../global').ListOptions} [options] Pagination and filtering options
     * @returns {Promise<Array<ProjectRole>>}
     */
    list(options?: import('../global').ListOptions): Promise<Array<ProjectRole>>;
    /**
     * @typedef {Object} ProjectRoleCreateModel The model used to create a project role.
     * @property {String} name The name of the project role. Required.
     * @property {Boolean} [isDefault] Whether to use this role as default when adding new project members.
     * @property {String} [defaultProjectRoleId] The id of the new default project role. Required if the updated project role is the current default role.
     */
    /**
     * Creates a new project role.
     * @param {ProjectRoleCreateModel} projectRole The model to create a project role.
     * @return {Promise<ProjectRole>}
     */
    create(projectRole: {
        /**
         * The name of the project role. Required.
         */
        name: string;
        /**
         * Whether to use this role as default when adding new project members.
         */
        isDefault?: boolean;
        /**
         * The id of the new default project role. Required if the updated project role is the current default role.
         */
        defaultProjectRoleId?: string;
    }): Promise<ProjectRole>;
    /**
     * @typedef {ProjectRoleCreateModel} ProjectRoleUpdateModel
     */
    /**
     * Updates the project role with the specified id.
     * @param {String} projectRoleId The id of the project role.
     * @param {ProjectRoleUpdateModel} projectRole The model to update a project.
     */
    update(projectRoleId: string, projectRole: {
        /**
         * The name of the project role. Required.
         */
        name: string;
        /**
         * Whether to use this role as default when adding new project members.
         */
        isDefault?: boolean;
        /**
         * The id of the new default project role. Required if the updated project role is the current default role.
         */
        defaultProjectRoleId?: string;
    }): Promise<ProjectRole>;
    /**
     * Deletes the project role with the specified id. When you want to delete a project role which is still in use, you are required to specify which role the currently assigned members should be assigned to instead. If the default role gets deleted, the migration role becomes the new default project role.
     * @param {String} projectRoleId The id of the project role.
     * @param {String} newProjectRoleId The project role id to replace the old project role with.
     * @return {Promise<void>}
     */
    delete(projectRoleId: string, newProjectRoleId: string): Promise<void>;
    /**
     * Returns all project roles of a specific user.
     * @param {String} userId The id of the user.
     * @returns {Promise<Array<ProjectRole>>}
     */
    byUserId(userId: string): Promise<Array<ProjectRole>>;
}
import { ProjectRole } from "../model/ProjectRole";
