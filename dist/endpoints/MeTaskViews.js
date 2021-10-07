"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MeTaskViews = void 0;

require("../globalTypedef");

var _TaskViews = require("./TaskViews");

var _TaskView = require("../model/TaskView");

var _Task = require("../model/Task");

/**
 * Class corresponding to Aworks TaskViews Endpoints
 * @category Endpoints
 * @see [TaskViews in Awork API Docs](https://openapi.awork.io/#/TaskViews)
 */
class MeTaskViews extends _TaskViews.TaskViews {
  /**
  * Endpoint constructor
  * @param {import('../client/index').Client} client
  * @param {String} taskViewId The id of the task view.
  */
  constructor(client) {
    super(client);
    /** @private */

    this._userPrefix = `/me`;
  }
  /**
   * @typedef {Object} TaskViewCreateModel
   * @property {String} filter The filter query that is applied to the tasks results. The syntax follows the normal filter conventions that can be used on GET routes
   * @property {String} filterSettings The filter settings to display.
   * @property {String} name The name of the task view.
   * @property {Boolean} isShared If the task view is shared or not. 
   */

  /**
   * Creates a new task view. The user will automatically subscribe to it in the process. If the provided filter string is invalid the request will fail with status 400.
   * @param {TaskViewCreateModel} taskViewCreateModel 
   * @returns {Promise<TaskView>}
   */


  async create(taskViewCreateModel) {
    const response = await this._client.post('/me/taskviews', taskViewCreateModel);
    const data = response.data();
    return new _TaskView.TaskView(data);
  }
  /**
   * @typedef {TaskViewCreateModel} TaskViewUpdateModel
   */

  /**
   * Updates an existing task view. If the provided filter string is invalid the request will fail with status 400. Only the original author can update non-shared task view. Shared tasks lists can only be updated by the original author or someone with project planning permissions.
   * @param {TaskViewUpdateModel} taskViewUpdateModel The model to update the task view.
   * @returns {Promise<Array<TaskView>>}
   */


  async update(taskViewUpdateModel) {
    const response = await this._client.put(`/me/taskviews/${this._taskViewId}`, taskViewUpdateModel);
    const data = response.data();
    return new _TaskView.TaskView(data);
  }
  /**
   * Deletes a task view. This also removes all subscriptions of the task view. Shared task views can be deleted by the original author or users with admin permissions. Private task views can only be deleted by the original author.
   * @returns {Promise<void>}
   */


  async delete() {
    await this._client.delete(`/me/taskviews/${this._taskViewId}`);
  }
  /**
   * Subscribes the user to a shared task view. Afterwards the user can retrieve the matching tasks from /me/taskViews/id/tasks.
   * @param {String} taskViewId The id of the task view the user subscribes to.
   * @returns {Promise<void>}
   */


  async subscribe(taskViewId) {
    const response = await this._client.post(`me/taskviews/subscribe`, {
      taskViewId: taskViewId
    });
    return response.data();
  }
  /**
   * Removes the subscription from a user to a task view. Unsunscribing only works for shared task views.
   * @param {String} taskViewId The id of the task view the user unsubscribes to.
   * @returns {Promise<void>}
   */


  async unsubscribe(taskViewId) {
    const response = await this._client.post(`me/taskviews/unsubscribe`, {
      taskViewId: taskViewId
    });
    return response.data();
  }
  /**
   * Applies the filter of a task view the current user subscribed to and returns all matching tasks.
   * @param {import('../global').ListOptions} [options] Pagination and filtering options
   * @returns {Promise<Array<Task>>}
   */


  async tasks(options) {
    const response = await this._client.get(`/me/taskviews/${this._taskViewId}/tasks`, options);
    const data = response.data();
    return data.map(d => new _Task.Task(d));
  }

}

exports.MeTaskViews = MeTaskViews;