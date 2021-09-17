"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MeUserPrivateSubtasks = void 0;

require("../globalTypedef");

var _UserOtherPrivateTasksSubtasks = require("./UserOtherPrivateTasksSubtasks");

/**
 * Class corresponding to Aworks UserOtherPrivateTasksSubtasks Endpoints
 * @category Endpoints
 * @see [UserOtherPrivateTasksSubtasks in Awork API Docs](https://openapi.awork.io/#/UserOtherPrivateTasksSubtasks)
 */
class MeUserPrivateSubtasks extends _UserOtherPrivateTasksSubtasks.UserOtherPrivateTasksSubtasks {
  /**
  * Endpoint constructor
  * @param {import('../client/index').Client} client
  * @param {String} taskId The id of the task.
  * @param {String} subtaskId The id of the subtask.
  */
  constructor(client, taskId, subtaskId) {
    /** @private */
    this._client = client;
    /** @private */

    this._taskId = taskId;
    /** @private */

    this._subtaskId = subtaskId;
    /** @private */

    this._userPrefix = `/me`;
  }

}

exports.MeUserPrivateSubtasks = MeUserPrivateSubtasks;