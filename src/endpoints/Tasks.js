import { Task } from '../model/Task';
import { TaskRecurrency } from '../model/TaskRecurrency';

export class Tasks {
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
      return new Task(data);
    }
    
    /**
     * To create a task, the user needs to be the assignee of the task or 'ProjectPlanning' permissions in general or in the project the task is related to.
     * @param {Task} task
     * @return {Task} 
     */
    async create(task) {
      const response = await this._client.post(`/tasks`, task);
      const data = response.data();
      return new Task(data);
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
      return new Task(data);
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
      return new Task(data);
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
      return new TaskRecurrency(data);
    }
  }