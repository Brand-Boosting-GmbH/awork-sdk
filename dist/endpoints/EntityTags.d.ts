/**
 * Class corresponding to Aworks EntityTimeEntries Endpoints
 * @category Endpoints
 * @see [EntityTimeEntries in Awork API Docs](https://openapi.awork.io/#/EntityTimeEntries)
 */
export class EntityTimeEntries {
    /**
     * Endpoint constructor
     * @param {import('../client/index').Client} client
     * @param {('companies'|'tasks'|'users')} entityName The name of the entity
     * @param {String} entityId The id of the entity
     */
    constructor(client: import('../client/index').Client);
    /** @private */
    private _client;
    /** @private */
    private _entityName;
    /** @private */
    private _entityId;
    /**
     * Returns the tags of the entity with the specified id ordered by name. To read the tags the user needs 'read' permissions on the specified entity.
     * @returns {Promise<Tag>}
     */
    get(): Promise<Tag>;
    /**
     * Returns all tags that are currently in use for the given entity type ordered by name.
     * @returns {Promise<Array<Tag>>}
     */
    list(): Promise<Array<Tag>>;
    /**
     * @typedef {Object} TagsModel
     * @property {String} name maxLength: 40
     * @property {String} [color] nullable
     */
    /**
     * Adds a batch of new tags to the entity with the specified id. The request fails if one of the tags is invalid (e.g. empty or duplicate). To create the tags the user needs 'write' permissions on the specified entity.
     * @param {TagsModel} addTags The model to add tags.
     * @returns {Promise<Array<Tag>>}
     */
    addTags(addTags: {
        /**
         * maxLength: 40
         */
        name: string;
        /**
         * nullable
         */
        color?: string;
    }): Promise<Array<Tag>>;
    /**
     * @typedef {Object} UpdateTagsModel
     * @property {String} oldTagName The old name of the tag.
     * @property {TagsModel} newTag The new name of the tag.
     */
    /**
     * Updates a tag to the entity with the specified id.
     * @param {UpdateTagsModel} updateTags The model to update tags.
     * @returns {Promise<Tag>}
     */
    updateTags(updateTags: {
        /**
         * The old name of the tag.
         */
        oldTagName: string;
        /**
         * The new name of the tag.
         */
        newTag: {
            /**
             * maxLength: 40
             */
            name: string;
            /**
             * nullable
             */
            color?: string;
        };
    }): Promise<Tag>;
    /**
     * Removes tags from the entity with the specified id. To delete the tags the user needs 'write' permissions on the specified entity. Returns 204 NoContent if all tags have been removed successfully. Returns 207 MultiStatus if at least one tag could not be removed, including the reasons.
     * @param {TagsModel} deleteTags The model to delete tags.
     * @returns {Promise<void>}
     */
    deleteTags(deleteTags: {
        /**
         * maxLength: 40
         */
        name: string;
        /**
         * nullable
         */
        color?: string;
    }): Promise<void>;
    /**
     * Removes tag from the entity with the specified id. To delete the tags the user needs 'write' permissions on the specified entity. Returns 204 NoContent if tag has been removed successfully.
     * @param {TagsModel} deleteTag The model to delete tags.
     * @returns {Promise<void>}
     */
    deleteTag(deleteTag: {
        /**
         * maxLength: 40
         */
        name: string;
        /**
         * nullable
         */
        color?: string;
    }): Promise<void>;
}
import { Tag } from "../model/Tag";
