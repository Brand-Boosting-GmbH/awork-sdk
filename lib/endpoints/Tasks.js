"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Tasks = void 0;

var _Task = require("../model/Task");

var _TaskRecurrency = require("../model/TaskRecurrency");

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
   * @param {[Object]} payload is an array of user and task id e.g([{"taskId": "77d921ef-a325-4044-856b-4208a668abe9","userId": "0ad96132-b4d6-4ae0-a6a5-64fabfb8c058"}])
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
   * @param {[Object]} payload is an array of user and task id e.g([{"taskId": "77d921ef-a325-4044-856b-4208a668abe9","userId": "0ad96132-b4d6-4ae0-a6a5-64fabfb8c058"}])
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
    * {
        "taskId": "d9462d1a-a83a-4396-9e5f-a1da6cfeb0f4",
        "email": "max.mustermann@hqlabs.com",
        "firstName": "Max",
        "lastName": "Mustermann",
        "gender": null,
        "roleId": "c74ae9f0-4473-447e-b5a5-1751e66e7650"
      }
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
   * {
      "taskIds": [
        "6f7a72fd-8dd7-4d8a-980f-5b3de1a3a017",
        "cd6be1df-095e-4942-a8d4-8cb25f178957"
      ],
      "deleteTimeTrackings": false
    }
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
   * [
      {
        "taskId": "d157a46a-13f1-4e49-bbb6-ce713eab2be1",
        "statusId": "97f51a04-c74c-4c1b-aa0c-ff6e155b48f1",
        "order": null
      },
      {
        "taskId": "7b5729b4-13eb-484f-a906-1976d117305e",
        "statusId": "da421920-90dc-494b-ab99-c696ece19242",
        "order": null
      }
    ]
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
   * {
      "order": 3
    }
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
   * {
      "typeOfWorkId": "8ee72ad0-92b4-40fa-b82e-ae377779f3fb",
      "changeTimeEntries": false,
      "taskIds": [
        "8a05fca4-a753-4d6a-bb2f-19f63cdab337",
        "30ba6a19-ff48-4d9e-a55a-056e65053bd7"
      ]
    }
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
   * {
      "baseType": "private",
      "entityId": "36b5be0d-549d-495b-9600-4175fb0a6782",
      "taskIds": [
        "427a387e-ea6f-4334-8484-877d2b5d88f6",
        "e3259b48-7588-4c73-97b8-96ad123b9e98"
      ]
    }
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
   * {
      "taskId": "9d8166d6-5bed-4728-ad67-88446f900174",
      "isPrio": true
    }
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

exports.tasks = tasks;