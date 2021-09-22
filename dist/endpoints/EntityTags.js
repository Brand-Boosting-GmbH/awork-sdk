"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.EntityTimeEntries = void 0;

require("../globalTypedef");

var _Tag = require("../model/Tag");

/**
 * Class corresponding to Aworks EntityTimeEntries Endpoints
 * @category Endpoints
 * @see [EntityTimeEntries in Awork API Docs](https://openapi.awork.io/#/EntityTimeEntries)
 */
class EntityTimeEntries {
  /**
   * Endpoint constructor
   * @param {import('../client/index').Client} client 
   * @param {('companies'|'tasks'|'users')} entityName The name of the entity
   * @param {String} entityId The id of the entity
   */
  constructor(client) {
    /** @private */
    this._client = client;
    /** @private */

    this._entityName = entityName;
    /** @private */

    this._entityId = entityId;
  }
  /**
   * Returns the tags of the entity with the specified id ordered by name. To read the tags the user needs 'read' permissions on the specified entity.
   * @returns {Promise<Tag>}
   */


  async get() {
    const response = await this._client.get(`/${this._entityName}/${this._entityId}/tags`);
    const data = response.data();
    return new _Tag.Tag(data);
  }
  /**
   * Returns all tags that are currently in use for the given entity type ordered by name.
   * @returns {Promise<Array<Tag>>}
   */


  async list() {
    const response = await this._client.get(`${this._userPrefix}/otherprivatetasks/${this._taskId}/subtasks`, options);
    const data = response.data();
    return data.map(d => new _Tag.Tag(d));
  }
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


  async addTags(addTags) {
    const response = await this._client.post(`${this._entityName}/${this._entityId}/addtags`, addTags);
    const data = response.data();
    return new _Tag.Tag(data);
  }
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


  async updateTags(updateTags) {
    const response = await this._client.post(`${this._entityName}/${this._entityId}/updatetags`, updateTags);
    const data = response.data();
    return new _Tag.Tag(data);
  }
  /**
   * Removes tags from the entity with the specified id. To delete the tags the user needs 'write' permissions on the specified entity. Returns 204 NoContent if all tags have been removed successfully. Returns 207 MultiStatus if at least one tag could not be removed, including the reasons.
   * @param {TagsModel} deleteTags The model to delete tags.
   * @returns {Promise<void>}
   */


  async deleteTags(deleteTags) {
    const response = await this._client.post(`${this._entityName}/${this._entityId}/deletetags`, deleteTags);
    return response.data();
  }
  /**
   * Removes tag from the entity with the specified id. To delete the tags the user needs 'write' permissions on the specified entity. Returns 204 NoContent if tag has been removed successfully.
   * @param {TagsModel} deleteTag The model to delete tags.
   * @returns {Promise<void>}
   */


  async deleteTag(deleteTag) {
    const response = await this._client.post(`${this._entityName}/deletetags`, deleteTag);
    return response.data();
  }

}

exports.EntityTimeEntries = EntityTimeEntries;