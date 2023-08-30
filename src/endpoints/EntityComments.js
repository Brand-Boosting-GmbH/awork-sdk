import '../globalTypedef'
import { Comment } from "../model/Comment"
import { EntityFiles } from './EntityFiles'


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
     constructor(client, entityName, entityId) {
        /** @private */
        this._client = client
        /** @private */
        this._entityName = entityName
        /** @private */
        this._entityId = entityId
    }

    /**
     * Returns the comment with the specified id of the entity with the specified id.
     * @param {String} commentId The id of the comment.
     * @returns {Promise<Comment>}
     */
    async get(commentId) {
        const response = await this._client.get(`/${this.entityName}/${this.entityId}/comments/${commentId}`)
        const data = response.data()
        return new Comment(data)
    }

    /**
     * Returns all comments of the entity with the specified id.
     * @param {import('../global').ListOptions} [options] Pagination and filtering options
     * @returns {Promise<Comment>}
     */
    async list(options) {
        const response = await this._client.get(`/${this.entityName}/${this.entityId}/comments`, options)
        const data = response.data()
        return data.map(d => new Comment(d))
    }

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
    async create(comment) {
        const response = await this._client.post(`/${this.entityName}/${this.entityId}/comments`, comment)
        const data = response.data()
        return new Comment(data)
    }

    /**
     * Deletes all comments of the specified entity.
     * @returns {Promise<void>}
     */
    async delete() {
        await this._client.delete(`/${this.entityName}/${this.entityId}/comments`)
    }

    /**
     * @typedef {CommentCreateModel} CommentUpdateModel
     */

    /**
     * Updates the comment with the specified id on the entity with the specified id.
     * @param {String} commentId The id of the comment.
     * @param {CommentUpdateModel} comment The model to update a comment.
     * @returns {Promise<Comment>}
     */
    async update(commentId, comment) {
        const response = await this._client.put(`/${this.entityName}/${this.entityId}/comments/${commentId}`, comment)
        const data = response.data()
        return new Comment(data)
    }

    /**
     * Deletes the comment with the specified id on the entity with the specified id. The delete includes the attachments of the comment.
     * @param {String} commentId The id of the comment.
     * @returns {Promise<void>}
     */
    async delete(commentId) {
        await this._client.delete(`/${this.entityName}/${this.entityId}/comments/${commentId}`)   
    }

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
    async react(commentId, reaction) {
        await this._client.post(`/${this.entityName}/${this.entityId}/comments/${commentId}/react`, reaction)
    }

    /**
     * Returns the {@link EntityFiles} Endpoint with the specified comment Id and entityType 'comments'.
     * @param {String} commentId The id of the comment.
     * @returns {EntityFiles}
     */
     files (commentId) {
        return new EntityFiles(this._client, 'comments', commentId)
    }
}