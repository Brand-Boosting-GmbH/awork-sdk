"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Tasks = void 0;

var _Task = require("../model/Task");

var _TaskRecurrency = require("../model/TaskRecurrency");

var _TaskDependency = require("../model/TaskDependency");

var _EntityFiles = require("./EntityFiles");

var _SubTasks = require("./SubTasks");

var _ProjectSubtasks = require("./ProjectSubtasks");

var _UserPrivateTasksSubtasks = require("./UserPrivateTasksSubtasks");

var _UserOtherPrivateTasksSubtasks = require("./UserOtherPrivateTasksSubtasks");

var _EntityTags = require("./EntityTags");

var _Setting = require("../model/Setting");

class Tasks {
  constructor(client) {
    this._client = client;
  }
  /**
   * Returns the task with the specified id. The required permissions depend on the base type of the task. If the task is a project task, 'read' permissions on the 'project-planning-data' feature are required. For a user's private task, no special permissions are required.
   * @param {String} taskId The id of the task.
   * @returns {Promise<Task>}
   */


  async get(taskId) {
    const response = await this._client.get(`/tasks/${taskId}`);
    const data = response.data();
    return new _Task.Task(data);
  }
  /**
   * @typedef {Object} TaskListsObject
   * @property {String} id The id of the list, the task should be assigned to.
   * @property {Number} order The order of the task in the list.
   */

  /**
   * @typedef {Object} TaskCreateModel
   * @property {String} name The name of the task.
   * @property {String} [description] The description of the task.
   * @property {Boolean} [isPrio] Whether this task is marked as priority.
   * @property {String} [startOn] The expected start date and time of the task.
   * @property {String} [dueOn] The expected due date and time of the task.
   * @property {Integer} [laneOrder] The lane order defines the vertical position in the gant planner.
   * @property {Integer} [plannedDuration] The expected planned workload of the task, in seconds.
   * @property {Integer} [remainingDuration] The expected remaining duration from the original planned effort of the task, in seconds.
   * @property {String} typeOfWorkId The id of the type of work for this task.
   * @property {String} taskStatusId The id of the status for this task.
   * @property {Number} [order] The order of the task in a task status column.
   * @property {String} [entityId] The id of the entity the task is related to.
   * @property {('private'|'projecttask')} [baseType] The base type of the task.
   * @property {Array<TaskListsObject>} [lists] The list where the new task should be added to.
   */

  /**
   * Creates a new task. To create a task, the user needs to be the assignee of the task or 'ProjectPlanning' permissions in general or in the project the task is related to.
   * @param {TaskCreateModel} task The model used to create a task.
   * @returns {Promise<Task>} 
   */


  async create(task) {
    const response = await this._client.post(`/tasks`, task);
    const data = response.data();
    return new _Task.Task(data);
  }
  /**
   * @typedef {Object} TaskUpdateModel
   * @property {String} name The name of the task.
   * @property {String} [description] The description of the task.
   * @property {Boolean} [isPrio] Whether this task is marked as priority.
   * @property {String} [startOn] The expected start date and time of the task.
   * @property {String} [dueOn] The expected due date and time of the task.
   * @property {Integer} [laneOrder] The lane order defines the vertical position in the gant planner.
   * @property {Integer} [plannedDuration] The expected planned workload of the task, in seconds.
   * @property {Integer} [remainingDuration] The expected remaining duration from the original planned effort of the task, in seconds.
   */

  /**
   * Update the task with the specified id. To update the task, the user needs to be the assignee of the task or 'ProjectPlanning' permissions in general or in the project the task is related to.
   * @param {String} taskId The id of the task.
   * @param {TaskUpdateModel} task The model used to update a task.
   * @returns {Promise<Task>}  
   */


  async update(taskId, task) {
    const response = await this._client.put(`/tasks/${taskId}`, task);
    const data = response.data();
    return new _Task.Task(data);
  }
  /**
   * This method is used to assign users to a task. You always need to pass all users you want to assign. If an already assigned user is not in the passed user id list, he/she gets unassigned.
   * @param {string} taskId The id of the task.
   * @param {Array<String>} userIds An array with user ids.
   * @returns {Promise<void>}
   */


  async setAssignees(taskId, userIds) {
    const response = await this._client.post(`/tasks/${taskId}/setAssignees`, userIds);
    return response.data();
  }
  /**
   * @typedef {AssignUsersModel} UnassignUsersModel
   */

  /**
   * @typedef {Object} AssignUserByEmailModel
   * @property {String} taskId The id of the task.
   * @property {String} email The emial of the new user.
   * @property {String} firstName The first name of the user to be invited.
   * @property {String} lastName The last name of the user to be invited.
   * @property {String} gender The gender of the user to be invited.
   * @property {String} roleId The id of the role to which the new user should be added.
   */

  /**
   * Assigns a new user to a tasks by email invitation. For the invitation, the role of the user has to be specified. The user is then invited to the workspace and assigned to the task. The user will receive an email with the invitation link, as well as a redirect to the task.
   * @param {AssignUserByEmailModel} payload The model to assign the user by email. 
   * @returns {Promise<void>} 
   */


  async assignUserByEmail(payload) {
    const response = await this._client.post(`/tasks/assignuserbyemail`, payload);
    return response.data();
  }
  /**
   * @typedef {Object} TasksDeleteModel
   * @property {Array<String>} taskIds List of tasks to be deleted.
   * @property {Boolean} deleteTimeTrackings Set to true to delete also the related time trackings. If it is set to false the related time trackings are still there, but the project and task reference will be cleared. That will also happen if no request body is present.
   */

  /**
   * Deletes the specified tasks. Returns 204 NoContent if all tasks have been changed successfully. Returns 207 MultiStatus if at least one task could not be changed, including the reasons. The required permissions depend on the base type of the task. If the task is a project task, 'write' permissions on the 'project-planning-data' feature are required. For a user's private task, no special permissions are required. By default, the related time trackings of these tasks loose the relation to the deleted tasks. In order to delete the time trackings as well, you need to set the 'DeleteTimeTrackings' property to true.
   * @param {TasksDeleteModel} payload The model to delete tasks.
   * @returns {Promise<void>}
   */


  async delete(payload) {
    const response = await this._client.post(`/tasks/delete`, payload);
    return response.data();
  }
  /**
   * @typedef {Object} StatusChangeModel
   * @property {String} taskId The id of the task.
   * @property {String} statusId The id of the task status.
   * @property {Number} [order] The order of the status int the new task status. The task is appended to the end if the Order is not set
   */

  /**
   * Changes statuses of tasks. Returns 204 NoContent if all tasks have been changed successfully. Returns 207 MultiStatus if at least one task could not be changed, including the reasons. The required permissions depend on the base type of the task. If the task is a project task, 'write' permissions on the 'project-planning-data' feature are required. For a user's private task, no special permissions are required.
   * @param {Array<StatusChangeModel>} payload The model to change statuses.
   * @returns {Promise<void>} 
   */


  async changeStatuses(payload) {
    const response = await this._client.post(`/tasks/changestatuses`, payload);
    return response.data();
  }
  /**
   * Updates the order of the task of a specific task status for project tasks. If it is a private task it updates the order of the private tasks of the user. This can have an impact of other tasks as well. If the task is not appended to the end, the other tasks of the project within the same task status will get a new order.
   * @param {String} taskId The id of the task.
   * @param {Number} order The order of the list.
   * @returns {Promise<Array<TaskListsObject>>}
   */


  async updateOrder(taskId, order) {
    const response = await this._client.post(`/tasks/${taskId}/updateorder`, {
      order: order
    });
    return response.data();
  }
  /**
   * @typedef {Object} ChangeWorkTypesModel
   * @property {String} typeOfWorkId The id of the task type.
   * @property {Boolean} [changeTimeEntries] Whether the related time entries should be moved to the same type of work.
   * @property {Array<String>} The list of task ids.
   */

  /**
   * Changes the type of work for a batch of tasks. Changes the type of work for a batch of tasks and their related time trackings. Returns 204 NoContent if all tasks have been changed successfully. Returns 207 MultiStatus if at least one task could not be changed, including the reasons. The required permissions depend on the base type of the task. If the task is a project task, 'write' permissions on the 'project-planning-data' feature are required. For a user's private task, no special permissions are required.
   * @param {ChangeTypesModel} payload The model to change the type of work.
   * @returns {Promise<void>}
   */


  async changeTypeOfWork(payload) {
    const response = await this._client.post(`/tasks/changetypeofwork`, payload);
    return response.data();
  }
  /**
   * @typedef {Object} ChangeBaseTypesModel
   * @property {('private'|'projecttask')} baseType The type the tasks should be migrated to.
   * @property {('projecttask'|'private')} entityId The id of the entity.
   * @property {Array<String>} taskIds The list of task ids.
   */

  /**
   * Changes the base type for a batch of tasks. Changes the base type for a batch of tasks. This operation will remove the task from the lists it is on. The task will also receive a new key based on the new entity it is related to. Returns 204 NoContent if all tasks have been changed successfully. Returns 207 MultiStatus if at least one task could not be changed, including the reasons. The required permissions depend on the base type of the task. If the task is a project task, 'write' permissions on the 'project-planning-data' feature are required. For a user's private task, no special permissions are required.
   * @param {ChangeBaseTypesModel} payload The model to change base types.
   * @returns {Promise<void>}
   */


  async changeBaseTypes(payload) {
    const response = await this._client.post(`/tasks/changebasetypes`, payload);
    return response.data();
  }
  /**
   * @typedef {Object} ChangeTaskPriorityModel
   * @property {String} taskId The id of the task.
   * @property {Boolean} isPrio Priority flag of the task.
   */

  /**
   * Set the priority of the task with the specified id.
   * @param {ChangeTaskPriorityModel} payload The model to change the priority.
   * @returns {Promise<void>}
   */


  async setTaskPriority(payload) {
    const response = await this._client.post(`/tasks/settaskpriority`, payload);
    return response.data();
  }
  /**
   * Creates a new task with the information of the specified task. Copies all information of the specified task to a new one and adjust the 'StartOn', 'DueOn' and 'Closed' on if they are set. Not copied are comments and files of the task. To copy a task, the user needs to be the assignee of the task or 'ProjectPlanning' permissions in general or in the project the task is related to.
   * @param {String} taskId The id of the task.
   * @returns {Promise<Task>} 
   */


  async copy(taskId) {
    const response = await this._client.post(`/tasks/${taskId}/copy`);
    const data = response.data();
    return new _Task.Task(data);
  }
  /**
   * Returns the existing recurrency rule for one task. Read permissions for this task are required. Returns 404 if no rule exists.
   * @param {String} taskId The id of the task.
   * @return {Promise<TaskRecurrency>} 
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
   * Returns the setting of a task.
   * @param {Boolean} enabled Whether the setting is active or not.
   * @param {String} type The setting type. For multi-user assignment: allow-multi-user-assignment
   * @return {Promise<Setting>} 
   */


  async settings(enabled, type) {
    const response = await this._client.post(`/tasks/settings`, {}, {
      enabled: enabled,
      type: type
    });
    const data = response.data();
    return new _Setting.Setting(data);
  }
  /**
   * @typedef {Object} BatchAssignUsersModel
   * @property {Boolean} removeOldAssignments Whether to keep existing assignment or replace them. Default = true
   * @property {Array} userIds List of user ids to assign to the tasks.
   * @property {Array} taskIds List of task ids to assign the users to.
   */

  /**
   * Batch endpoint to assign users to multiple tasks. Used to be assignuser.  Set removeOldAssignments to false if you want to keep existing task assignments.
   * @param {BatchAssignUsersModel} assignUserModel The model to assign users to multiple tasks.
   * @param {String} operation assignusers
   * @returns {Promise<void>}
   */


  async batchAssignUsers(operation, assignUserModel) {
    const response = await this._client.post(`/tasks/batch/${operation}`, assignUserModel);
    return response.data();
  }
  /**
   * Returns the {@link EntityFiles} Endpoint with the specified task Id and entityType 'tasks'.
   * @param {String} taskId The id of the task.
   * @returns {EntityFiles}
   */


  files(taskId) {
    return new _EntityFiles.EntityFiles(this._client, 'tasks', taskId);
  }
  /**
   * Returns the {@link SubTasks} Endpoint with the specified task Id.
   * @param {String} taskId The id of the task.
   * @returns {SubTasks}
   */


  subtasks(taskId) {
    return new _SubTasks.SubTasks(this._client, taskId);
  }
  /**
   * Returns the {@link ProjectsSubtasks} Endpoint with the specified task Id.
   * @param {String} taskId The id of the task.
   * @returns {ProjectSubtasks}
   */


  projectSubtasks(taskId) {
    return new _ProjectSubtasks.ProjectSubtasks(this._client, taskId);
  }
  /**
   * Returns the {@link UserPrivateTasksSubtasks} Endpoint with the specified task Id.
   * @param {String} taskId The id of the task.
   * @returns {UserPrivateTasksSubtasks}
   */


  userPrivateTasksSubtasks(taskId) {
    return new _UserPrivateTasksSubtasks.UserPrivateTasksSubtasks(this._client, taskId);
  }
  /**
   * Returns the {@link UserOtherPrivateTasksSubtasks} Endpoint with the specified task Id.
   * @param {String} taskId The id of the task.
   * @returns {UserOtherPrivateTasksSubtasks}
   */


  userOtherPrivateTasksSubtasks(taskId) {
    return new _UserOtherPrivateTasksSubtasks.UserOtherPrivateTasksSubtasks(this._client, taskId);
  }
  /**
   * Returns the {@link EntityTags} Endpoint with the specified task Id and name.
   * @param {String} taskId The id of the task.
   * @returns 
   */


  entityTags(taskId) {
    return new _EntityTags.EntityTags(this._client, 'tasks', taskId);
  }

}

exports.Tasks = Tasks;