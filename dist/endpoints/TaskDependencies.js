"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TaskDependencies = void 0;

var _TaskDependency = require("../model/TaskDependency");

/**
 * Class corresponding to Aworks TaskDependencies Endpoints.
 * @category Endpoints
 * @see [TaskDependencies in Awork API Docs](https://openapi.awork.io/#/TaskDependencies)
 */
class TaskDependencies {
  /**
   * Endpoint constructor
   * @param {import('../client/index').Client} client 
   */
  constructor(client) {
    /** @private*/
    this._client = client;
  }
  /**
   * @typedef {Object} TaskDependencyCreateModel
   * @property {String} predecessorId The Id of the predecessor. One task can have multiple predecessor.
   * @property {String} successorId The Id of the successor. One task can have one successor.
   */

  /**
   * Creates a new task dependency. To create a task dependency, the user needs to be the assignee of both tasks or 'ProjectPlanning' permissions in general or in the project the tasks are related to.
   * @param {TaskDependencyCreateModel} taskDependency Describes the dependency between two tasks. One Task is the predecessor and one task is the successor.
   * @returns {Promise<TaskDependency>}
   */


  async create(taskDependency) {
    const response = await this._client.post('/taskdependencies', taskDependency);
    const data = response.data();
    return new _TaskDependency.TaskDependency(data);
  }
  /**
   * Deletes a task dependency. To delete a task dependency, the user needs to be the assignee of both tasks or 'ProjectPlanning' permissions in general or in the project the task are related to.
   * @param {String} taskDependencyId The id of the task dependency.
   * @returns {Promise<void>}
   */


  async delete(taskDependencyId) {
    await this._client.delete(`/taskdependencies/${taskDependencyId}`);
  }

}

exports.TaskDependencies = TaskDependencies;