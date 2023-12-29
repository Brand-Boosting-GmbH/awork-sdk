"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MeAssignedTasks = void 0;

require("../globalTypedef");

var _UsersAssignedTasks = require("./UsersAssignedTasks");

/**
 * Class corresponding to Aworks UsersAssignedTasks Endpoints
 * @category Endpoints
 * @see [UsersAssignedTasks in Awork API Docs](https://openapi.awork.com/#/UsersAssignedTasks)
 */
class MeAssignedTasks extends _UsersAssignedTasks.UsersAssignedTasks {
  /**
  * Endpoint constructor
  * @param {import('../client/index').Client} client
  * @param {String} taskId The id of the task.
  */
  constructor(client) {
    super(client);
    /** @private */

    this._userPrefix = `/me`;
  }

}

exports.MeAssignedTasks = MeAssignedTasks;