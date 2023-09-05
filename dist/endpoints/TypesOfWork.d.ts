/**
 * Class corresponding to Aworks TypeOfWork Endpoints
 * @category Endpoints
 * @see [TypeOfWork in Awork API Docs](https://openapi.awork.com/#/TypeOfWork)
 */
export class TypesOfWorks {
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
     * Gets a single type of work by its id.
     * @param {String} typeOfWorkId The id of the type of work.
     * @returns {Promise<TypeOfWork>}
     */
    get(typeOfWorkId: string): Promise<TypeOfWork>;
    /**
     * Returns all type of work.
     * @param {import('../global').ListOptions} [options] Pagination and filtering options
     * @returns {Promise<Array<TypeOfWork>>}
     */
    list(options?: import('../global').ListOptions): Promise<Array<TypeOfWork>>;
    /**
     * @typedef {Object} TypeOfWorkCreateModel
     * @property {String} name The name of the type of work.
     * @property {String} description A short description of the type of work.
     * @property {import('../index').Icon} icon The icon ass with this type of work.
     */
    /**
     * Creates a new type of work.
     * @param {TypeOfWorkCreateModel} typeOfWork The model to create the type of work.
     * @returns {Promise<TypeOfWork>}
     */
    create(typeOfWork: {
        /**
         * The name of the type of work.
         */
        name: string;
        /**
         * A short description of the type of work.
         */
        description: string;
        /**
         * The icon ass with this type of work.
         */
        icon: import('../index').Icon;
    }): Promise<TypeOfWork>;
    /**
     * @typedef {TypeOfWorkCreateModel} TypeOfWorkUpdateModel
     */
    /**
     * Changes the properties of an existing type of work. A change will also effect all related tasks and time entries.
     * @param {String} typeOfWorkId The id of the type of work.
     * @param {TypeOfWorkUpdateModel} typeOfWork The model to update the type of work.
     * @returns {Promise<TypeOfWork>}
     */
    update(typeOfWorkId: string, typeOfWork: {
        /**
         * The name of the type of work.
         */
        name: string;
        /**
         * A short description of the type of work.
         */
        description: string;
        /**
         * The icon ass with this type of work.
         */
        icon: import('../index').Icon;
    }): Promise<TypeOfWork>;
    /**
     * Deletes the type of work with the specified id. If any tasks, task templates or time entries still use this type, the id of a new type needs to be provided.
     * @param {String} typeOfWorkId The id of the type of work.
     * @returns {Promise<void>}
     */
    delete(typeOfWorkId: string): Promise<void>;
    /**
     * Returns all possible icons for type of work.
     * @returns {Promise<Array<String>>}
     */
    icons(): Promise<Array<string>>;
    /**
     * Archives or unarchives the type of work with the specified id. An archived type of work still exists for all tasks and time entries currently using it, but can no longer be created with this type of work.
     * @param {String} typeOfWorkId The id of the type of work.
     * @param {Boolean} [archived] Flags the entity as archived.
     * @returns {Promise<Object>}
     */
    setArchived(typeOfWorkId: string, archived?: boolean): Promise<any>;
}
import { TypeOfWork } from "../model/TypeOfWork";
