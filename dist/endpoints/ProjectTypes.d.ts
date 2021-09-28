/**
 * Class corresponding to Aworks ProjectTypes Endpoints
 * @category Endpoints
 * @see [ProjectTypes in Awork API Docs](https://openapi.awork.io/#/ProjectTypes)
 */
export class ProjectTypes {
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
     * Returns the project type with the specified id.
     * @param {String} projectTypeId The id of the project type.
     * @returns {Promise<ProjectType>}
     */
    get(projectTypeId: string): Promise<ProjectType>;
    /**
     * @typedef {Object} ShowArchived
     * @property {Boolean} showArchived Include archived project types in the results. Optional. False by default.
     */
    /**
     * Returns all existing project types.
     * @param {ListOptions & ShowArchived} [options] Pagination, filtering and showArchived options.
     * @returns {Promise<Array<ProjectType>>}
     */
    list(options?: ListOptions & {
        /**
         * Include archived project types in the results. Optional. False by default.
         */
        showArchived: boolean;
    }): Promise<Array<ProjectType>>;
    /**
     * @typedef {Object} ProjectTypeCreateModel The model to change the project type.
     * @property {String} [name] The names of the project type.
     * @property {String} [description] A short description of the project type.
     * @property {Icon} [icon] The identifier of the project type icon.
     */
    /**
     * Creates a new project type.
     * @param {ProjectTypeCreateModel} projectType The model to create a project type.
     * @returns {Promise<ProjectType>}
     */
    create(projectType: {
        /**
         * The names of the project type.
         */
        name?: string;
        /**
         * A short description of the project type.
         */
        description?: string;
        /**
         * The identifier of the project type icon.
         */
        icon?: Icon;
    }): Promise<ProjectType>;
    /**
     * @typedef {ProjectTypeCreateModel} ProjectTypeUpdateModel
     */
    /**
     * Updates the project type with the specified id.
     * @param {String} projectTypeId The id of the project type.
     * @param {ProjectTypeUpdateModel} projectType The model to update the project type.
     * @returns {Promise<ProjectType>}
     */
    update(projectTypeId: string, projectType: {
        /**
         * The names of the project type.
         */
        name?: string;
        /**
         * A short description of the project type.
         */
        description?: string;
        /**
         * The identifier of the project type icon.
         */
        icon?: Icon;
    }): Promise<ProjectType>;
    /**
     * Deletes the project type with the specified id. If an id of a new type is provided, projects will be updated to reference the new type If no id of type is provided, the type if removed from the projects.
     * @param {String} projectTypeId The id of the project type.
     */
    delete(projectTypeId: string): Promise<void>;
    /**
     * Archives or unarchives the project type with the specified id. Archived objects can not be used any longer but still exist for being referenced by other entities.
     * @param {String} projectTypeId The id of the project type.
     * @param {Boolean} [archived] Whether the project type should be archived.
     * @returns {Promise<ProjectType>}
     */
    setArchived(projectTypeId: string, archived?: boolean): Promise<ProjectType>;
    /**
     * Get all possible icons for project types.
     * @returns {Promise<Array<String>>}
     */
    icons(): Promise<Array<string>>;
}
import { ProjectType } from "../model/ProjectType";
