"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Tasks = void 0;

var _Task = require("../model/Task");

var _TaskRecurrency = require("../model/TaskRecurrency");

var _TaskDependency = require("../model/TaskDependency");

var _EntityFiles = require("./EntityFiles");

class Tasks {
  constructor(client) {
    this._client = client;
  }
  /**
   * The required permissions depend on the base type of the task. If the task is a project task, 'read' permissions on the 'project-planning-data' feature are required. For a user's private task, no special permissions are required.
   * @param {String} taskId The id of the task.
   * @returns {Promise<Task>}
   */


  async get(taskId) {
    const response = await this._client.get(`/tasks/${taskId}`);
    const data = response.data();
    return new _Task.Task(data);
  }
  /**
   * To create a task, the user needs to be the assignee of the task or 'ProjectPlanning' permissions in general or in the project the task is related to.
   * @param {Task} task
   * @return {Task} 
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
    return response.data();
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
    return response.data();
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
    return response.data();
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
    return response.data();
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
    return response.data();
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
    return response.data();
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
    return response.data();
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
    return response.data();
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
    return response.data();
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
  /**
   * Returns all task dependencies for a specific task. To get all dependencies of a task, the user needs project planning permissions on that project or be assigned to that task.
   * @param {String} taskId The id of the task.
   * @returns {Promise<Array<TaskDependency>>}
   */


  async taskDependencyList(taskId) {
    const response = await this._client.get(`/tasks/${taskId}/taskdependencies`);
    const data = response.data();
    return data.map(d => new _TaskDependency.TaskDependency(d));
  }
  /**
   * Returns the {@link EntityFiles} Endpoint with the specified task Id and entityType 'tasks'.
   * @param {String} taskId The id of the project.
   * @returns {EntityFiles}
   */


  files(taskId) {
    return new _EntityFiles.EntityFiles(this._client, 'tasks', taskId);
  }

}

exports.Tasks = Tasks;