"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Tasks = void 0;

var _Task2 = require("../model/Task");

var _TaskRecurrency2 = require("../model/TaskRecurrency");

class Tasks {
  constructor(client) {
    this._client = client;
  }

  async get(taskId) {
    const response = await this._client.get(`/tasks/${taskId}`);
    const data = response.data();
    return new _Task.Task(data);
  }
  /**
   * Create a task
   *
   * @param {Task} task
   * @return {Task} 
   * @memberof Tasks
   */


  async create(task) {
    const response = await this._client.post(`/tasks`, task);
    const data = response.data();
    return new _Task.Task(data);
  }
  /**
   * Update a task
   *
   * @param {string} taskId
   * @param {Task} task
   * @return {Task} task 
   * @memberof Tasks
   */


  async update(taskId, task) {
    const response = await this._client.put(`/tasks/${taskId}`, task);
    const data = response.data();
    return new _Task.Task(data);
  }
  /**
   * Assigns users to tasks
   *
   * @param {[Object]} payload is an array of user and task id e.g
   * @return {number} status 
   * @memberof Tasks
   */


  async assignUsers(payload) {
    const response = await this._client.post(`/tasks/assignusers`, payload);
    return response.status;
  }
  /**
   * Unassigns users from tasks
   *
   * @param {[Object]} payload is an array of user and task id e.g
   * @return {number} status 
   * @memberof Tasks
   */


  async unassignUsers(payload) {
    const response = await this._client.post(`/tasks/unassignusers`, payload);
    return response.status;
  }
  /**
   * Assigns a new user to a tasks by email invitation.
   *
   * @param {Object} payload sample payload is 
   * @return {number} status
   * @memberof Tasks
   */


  async assignUserByEmail(payload) {
    const response = await this._client.post(`/tasks/assignuserbyemail`, payload);
    return response.status;
  }
  /**
   * Deletes the specified tasks.
   *
   * @param {Object} payload sample payload is
   * @return {number} status 
   * @memberof Tasks
   */


  async delete(payload) {
    const response = await this._client.post(`/tasks/delete`, payload);
    return response.status;
  }
  /**
   * Changes statuses of tasks.
   *
   * @param {[Object]} payload sample payload is 
   * @return {*} 
   * @memberof Tasks
   */


  async changeStatuses(payload) {
    const response = await this._client.post(`/tasks/changestatuses`, payload);
    return response.status;
  }
  /**
   * Updates the order of the task with the specified id.
   *
   * @param {String} taskId id of the task
   * @param {Object} payload sample payload is 
   * @return {Number} status
   * @memberof Tasks
   */


  async updateOrder(taskId, payload) {
    const response = await this._client.post(`/tasks/${taskId}/updateorder`, payload);
    return response.status;
  }
  /**
   * Changes the type of work for a batch of tasks.
   *
   * @param {Object} payload sample payload is
   * @return {Number} status 
   * @memberof Tasks
   */


  async changeTypeOfWork(payload) {
    const response = await this._client.post(`/tasks/changetypeofwork`, payload);
    return response.status;
  }
  /**
   * Changes the base type for a batch of tasks.
   *
   * @param {Object} payload sample payle is 
   * @return {Number} status 
   * @memberof Tasks
   */


  async changeBaseTypes(payload) {
    const response = await this._client.post(`/tasks/changebasetypes`, payload);
    return response.status;
  }
  /**
   * Set the priority of the task with the specified id.
   *
   * @param {Object} payload sample payload is 
   * @return {Number} status 
   * @memberof Tasks
   */


  async setTaskPriority(payload) {
    const response = await this._client.post(`/tasks/settaskpriority`, payload);
    return response.status;
  }
  /**
   * Creates a new task with the information of the specified task.
   *
   * @param {String} taskId
   * @return {Task} 
   * @memberof Tasks
   */


  async copy(taskId) {
    const response = await this._client.post(`/tasks/${taskId}/copy`);
    const data = response.data();
    return new _Task.Task(data);
  }
  /**
   * Returns the existing recurrency rule for one task.
   *
   * @param {String} taskId
   * @return {_TaskRecurrency.TaskRecurrency} 
   * @memberof Tasks
   */


  async getRecurrency(taskId) {
    const response = await this._client.post(`/tasks/${taskId}/recurrency`);
    const data = response.data();
    return new _TaskRecurrency.TaskRecurrency(data);
  }

}

exports.Tasks = Tasks;