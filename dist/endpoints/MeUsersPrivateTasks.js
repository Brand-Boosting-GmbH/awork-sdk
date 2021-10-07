"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MeUsersPrivateTasks = void 0;

require("../globalTypedef");

var _PrivateTasksTaskStatus = require("../model/PrivateTasksTaskStatus");

var _Task = require("../model/Task");

var _UsersPrivateTasks = require("./UsersPrivateTasks");

/**
 * Class corresponding to Aworks UsersPrivateTasks Endpoints
 * @category Endpoints
 * @see [UsersPrivateTasks in Awork API Docs](https://openapi.awork.io/#/UsersPrivateTasks)
 */
class MeUsersPrivateTasks extends _UsersPrivateTasks.UsersPrivateTasks {
  /**
  * Endpoint constructor
  * @param {import('../client/index').Client} client
  * @param {String} taskId The id of the task.
  */
  constructor(client) {
    super(client);
    /** @private */

    this._userPrefix = `me`;
  }
  /**
   * Returns all tags of the private tasks.
   * @returns {Promise<Array<String>>}
   */


  async tags() {
    const response = await this._client.get(`/me/privatetasks/tags`);
    return response.data();
  }

}

exports.MeUsersPrivateTasks = MeUsersPrivateTasks;