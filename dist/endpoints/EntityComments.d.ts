/**
 * Class corresponding to Aworks Comments Endpoints
 * @category Endpoints
 * @see [Comments in Awork API Docs](https://openapi.awork.io/#/Comments)
 */
export class EntityComments {
    /**
     * Endpoint constructor
     * @param {import('../client/index').Client} client
     * @param {('companies'|'files'|'projects'|'tasks')} entityName
     * @param {String} entityId
     */
    constructor(client: import('../client/index').Client, entityName: ('companies' | 'files' | 'projects' | 'tasks'), entityId: string);
    /** @private */
    private _client;
    /** @private */
    private _entityName;
    /** @private */
    private _entityId;
    /**
     * Returns the comment with the specified id of the entity with the specified id.
     * @param {String} commentId The id of the comment.
     * @returns {Promise<Comment>}
     */
    get(commentId: string): Promise<Comment>;
    /**
     * Returns all comments of the entity with the specified id.
     * @param {import('../global').ListOptions} [options] Pagination and filtering options
     * @returns {Promise<Comment>}
     */
    list(options?: import('../global').ListOptions): Promise<Comment>;
    /**
     * @typedef {Object} CommentCreateModel
     * @property {String} message The message of the comment.
     * @property {String} [userId] The id of the user who created the comment.
     * @property {Array<String>} previews The preview URLs to show a preview for.
     */
    /**
     * Creates a new comment on the entity with the specified id.
     * @param {CommentCreateModel} comment The model to create a comment.
     * @returns {Promise<Comment>}
     */
    create(comment: {
        /**
         * The message of the comment.
         */
        message: string;
        /**
         * The id of the user who created the comment.
         */
        userId?: string;
        /**
         * The preview URLs to show a preview for.
         */
        previews: Array<string>;
    }): Promise<Comment>;
    /**
     * Deletes all comments of the specified entity.
     * @returns {Promise<void>}
     */
    delete(): Promise<void>;
    /**
     * Deletes the comment with the specified id on the entity with the specified id. The delete includes the attachments of the comment.
     * @param {String} commentId The id of the comment.
     * @returns {Promise<void>}
     */
    delete(commentId: string): Promise<void>;
    /**
     * @typedef {CommentCreateModel} CommentUpdateModel
     */
    /**
     * Updates the comment with the specified id on the entity with the specified id.
     * @param {String} commentId The id of the comment.
     * @param {CommentUpdateModel} comment The model to update a comment.
     * @returns {Promise<Comment>}
     */
    update(commentId: string, comment: {
        /**
         * The message of the comment.
         */
        message: string;
        /**
         * The id of the user who created the comment.
         */
        userId?: string;
        /**
         * The preview URLs to show a preview for.
         */
        previews: Array<string>;
    }): Promise<Comment>;
    /**
     * @typedef {Object} ReactionsUpdateModel
     * @property {String} emoji The reaction as emoji.
     * @property {String} operation The operation as add or remove.
     */
    /**
     * Updates the reactions of the comment with the specified id on the entity with the specified id.
     * @param {String} commentId The id of the comment.
     * @param {ReactionsUpdateModel} reaction The model to update the reactions from a comment.
     * @returns {Promise<void>}
     */
    react(commentId: string, reaction: {
        /**
         * The reaction as emoji.
         */
        emoji: string;
        /**
         * The operation as add or remove.
         */
        operation: string;
    }): Promise<void>;
    /**
     * Returns the {@link EntityFiles} Endpoint with the specified comment Id and entityType 'comments'.
     * @param {String} commentId The id of the comment.
     * @returns {EntityFiles}
     */
    files(commentId: string): EntityFiles;
}
import { Comment } from "../model/Comment";
import { EntityFiles } from "./EntityFiles";
