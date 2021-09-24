"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Users = void 0;

require("../globalTypedef");

var _User = require("../model/User");

var _ExtendedUser = require("../model/ExtendedUser");

var _TimeEntry = require("../model/TimeEntry");

var _UserContactInfos = require("./UserContactInfos");

var _EntityImages = require("./EntityImages");

var _UserPrivateTasksSubtasks = require("./UserPrivateTasksSubtasks");

var _UserOtherPrivateTasksSubtasks = require("./UserOtherPrivateTasksSubtasks");

var _TimeTrackings = require("./TimeTrackings");

var _EntityTags = require("./EntityTags");

/**
 * Class corresponding to Aworks Users Endpoints
 * @category Endpoints
 * @see [Users in Awork API Docs](https://openapi.awork.io/#/Users)
 */
class Users {
  /**
   * Endpoint constructor
   * @param {import('../client/index').Client} client 
   */
  constructor(client) {
    /** @private */
    this._client = client;
    /** @private */

    this._userPrefix = `/users`;
  }
  /**
   * Returns the user with the specified id.
   * @returns {Promise<User>}
   */


  async get() {
    const response = await this._client.get(`${this._userPrefix}`);
    const data = response.data();
    return new _User.User(data);
  }
  /**
   * Returns all users with their details like status, contact info and more. Returns all users if the user has read permissions on the feature user-master-data, otherwise returns only his own user. Archived users are excluded by default. You can include them by setting the 'showArchived' query parameter. If the permissions have UserTeamsData Feature, the filter for teams is applied. Beware that this will also include API users in the response.
   * @param {import('../global').ListOptions} [options] Pagination and filtering options
   * @param {Boolean} [showArchived] Include archived users in the results. Not required. False by default.
   * @returns {Promise<Array<User>>}
   */


  async list(options, showArchived = false) {
    const response = await this._client.get('/users', options, showArchived);
    const data = response.data();
    return data.map(d => new _User.User(d));
  }
  /**
   * @typedef {Object} UserCreateModel
   * @property {String} [firstName] The firstname of the user.
   * @property {String} [lastName] The lastname of the user.
   * @property {String} [birthDate] The birthdate of the user.
   * @property {String} [gender] The gender of the user.
   * @property {String} [title] The title of the user.
   * @property {String} [position] The position of the user.
   * @property {String} [language] The language preference of the user in ISO 639-1 format.
   * @property {Integer} [capacityPerWeek] The capacity of the user per week in seconds.
   * @property {String} [accountId] The account id of the user.
   */

  /**
   * Creates a new user. The user's key is assigned automatically and can be changed later.
   * @param {UserCreateModel} userCreateModel The model to create a user.
   * @returns {Promise<User>}
   */


  async create(userCreateModel) {
    const response = await this._client.post('/users', userCreateModel);
    const data = response.data();
    return new _User.User(data);
  }
  /**
   * @typedef {Object} UserUpdateModel
   * @property {String} [firstName] The firstname of the user.
   * @property {String} [lastName] The lastname of the user.
   * @property {String} [birthDate] The birthdate of the user.
   * @property {String} [gender] The gender of the user.
   * @property {String} [title] The title of the user.
   * @property {String} [position] The position of the user.
   * @property {String} [language] The language preference of the user in ISO 639-1 format.
   * @property {Integer} [capacityPerWeek] The capacity of the user per week in seconds.
   */

  /**
   * Updates the user with the specified id.
   * @param {String} userId The id of the user.
   * @param {UserUpdateModel} userUpdateModel The model to update a user.
   * @returns {Promise<User>}
   */


  async update(userId, userUpdateModel) {
    const response = await this._client.put(`/users/${userId}`, userUpdateModel);
    const data = response.data();
    return new _User.User(data);
  }
  /**
   * Deletes the user with the specified id.
   * @param {String} userId The id of the user.
   * @returns {Promise<void>}
   */


  async delete(userId) {
    await this._client.delete(`/users/${userId}`);
  } //  TODO/me !!!

  /**
   * Deactivates the user with the specified id. A deactivated user can no longer sign in. It is only possible if the user is not the last admin user.
   * @param {String} userId The id of the user.
   * @returns {Promise<void>}
   */


  async deactivate(userId) {
    await this._client.post(`/users/${userId}/deactivate`);
  }
  /**
   * Activates the user with the specified id. The user is then allowed to sign in again and will be notified via email.
   * @param {String} userId The id of the user.
   * @returns {Promise<void>}
   */


  async activate(userId) {
    await this._client.post(`/users/${userId}/activate`);
  }
  /**
   * Archives or unarchives the user with the specified id. Archived objects can not be used any longer but still exist for being referenced by other entities.
   * @param {String} userId The id of the user which will be changed.
   * @param {Boolean} isArchived Flags the entity as archived.
   * @returns 
   */


  async setArchived(userId, isArchived) {
    const response = await this._client.post(`/users/${userId}/setarchived`, {
      isArchived: isArchived
    });
    const data = response.data();
    return new _ExtendedUser.ExtendedUser(data);
  }
  /**
   * Checks whether the specified user key is valid and unique.
   * @returns {Promise<String>}
   */


  async isKeyValid() {
    const response = await this._client.post('/users/iskeyvalid');
    return response.data().key;
  }
  /**
   * Sets the user key of the user with the specified id.
   * @param {String} userId The id of the user.
   * @returns {Promise<String>} 
   */


  async setkey(userId) {
    const response = await this._client.post(`/users/${userId}/setkey`);
    return response.data().key;
  }
  /**
   * Returns the {@link UserContactInfos} Endpoint with the specified project Id.
   * @param {String} userId The id of the user.
   * @returns {UserContactInfos}
   */


  contactInfo(userId) {
    return new _UserContactInfos.UserContactInfos(this._client, userId);
  }
  /**
   * The last time entry is always the last one that was started. Time entries which are started in the future are ignored. If a time entry does not have a start time, 12.00 am is automatically assumed as the start time for comparison with other time entries from the same day.
   * @param {String} userId The id of the user. Only if /users, not /me.
   * @returns {Promise<TimeEntry>}
   */


  async lastTimeEntries(userId) {
    if (this._userPrefix === `/me`) {
      const response = await this._client.get(`${this._userPrefix}/timeentries/last`);
      const data = response.data();
      return new _TimeEntry.TimeEntry(data);
    } else {
      const response = await this._client.get(`${this._userPrefix}/${userId}/timeentries/last`);
      const data = response.data();
      return new _TimeEntry.TimeEntry(data);
    }
  }
  /**
   * Returns the {@link EntityImages} Endpoint with the specified user Id.
   * @param {String} usersId The id of the user.
   * @returns {EntityImages}
   */


  images(usersId) {
    return new _EntityImages.EntityImages(this._client, 'users', usersId);
  }
  /**
   * Returns the {@link UserPrivateTasksSubtasks} Endpoint with the specified user Id.
   * @param {String} userId The id of the user.
   * @returns {UserPrivateTasksSubtasks}
   */


  userPrivateTasksSubtasks(userId) {
    return new _UserPrivateTasksSubtasks.UserPrivateTasksSubtasks(this._client, userId);
  }
  /**
   * Returns the {@link UserOtherPrivateTasksSubtasks} Endpoint with the specified user Id.
   * @param {String} userId The id of the user.
   * @returns {UserOtherPrivateTasksSubtasks}
   */


  userOtherPrivateTasksSubtasks(userId) {
    return new _UserOtherPrivateTasksSubtasks.UserOtherPrivateTasksSubtasks(this._client, userId);
  }
  /**
   * Returns the {@link TimeTrackings} Endpoint with the specified user Id.
   * @param {String} userId The id of the user.
   * @returns {TimeTrackings}
   */


  timeTrackings(userId) {
    return new _TimeTrackings.TimeTrackings(this._client, userId);
  }
  /**
   * Returns the {@link EntityTags} Endpoint with the specified user Id and name.
   * @param {String} userId The id of the users.
   * @returns 
   */


  entityTags(userId) {
    return new _EntityTags.EntityTags(this._client, 'users', userId);
  }

}

exports.Users = Users;