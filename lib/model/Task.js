"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Task = void 0;

/**
 * Task Model
 * @category Models
 * @class
 */
class Task {
  /**
     * @typedef {Task & {_plain?: true}} TaskLike
     */

  /**
   * Model constructor
   * @param {TaskLike} data 
   */
  constructor(data) {
    this._data = data || {};
  }
  /**
   * The name of the Task. Required.
   * @type {String} nullable
   * @readonly
   * @memberof Task
   */


  get name() {
    return this._data.name;
  }
  /**
   * The description of the Task.
   * @type {String} nullable
   * @readonly
   * @memberof Task
   */


  get description() {
    return this._data.description;
  }
  /**
   * Whether this task is marked as priority.
   * @type {Boolean} nullable
   * @readonly
   * @memberof Task
   */


  get isPrio() {
    return this._data.isPrio;
  }
  /**
   * The expected start date and time of the task.
   * @type {String} nullable date-time
   * @readonly
   * @memberof Task
   */


  get startOn() {
    return this._data.startOn;
  }
  /**
   * The expected due date and time of the task.
   * @type {String} nullable date-time
   * @readonly
   * @memberof Task
   */


  get dueOn() {
    return this._data.dueOn;
  }
  /**
   * The lane order defines the vertical position in the gant planner.
   * @type {Number} nullable
   * @readonly
   * @memberof Task
   */


  get laneOrder() {
    return this._data.laneOrder;
  }
  /**
   * The expected planned workload of the task, in seconds.
   * @type {Number} nullable
   * @readonly
   * @memberof Task
   */


  get plannedDuration() {
    return this._data.plannedDuration;
  }
  /**
   * The expected remaining duration from the original planned effort of the task, in seconds.
   * @type {Number} nullable
   * @readonly
   * @memberof Task
   */


  get remainingDuration() {
    return this._data.remainingDuration;
  }
  /**
  * The Id of the task.
  * @type {String} uuid
  * @readonly
  * @memberof Task
  */


  get id() {
    return this._data.id;
  }
  /**
   * The unique task key, which needs to be unique within the entire workspace.
   * @type {String} nullable
   * @readonly
   * @memberof Task
   */


  get key() {
    return this._data.key;
  }
  /**
   * The numerical part of the key.
   * @type {Number} 
   * @readonly
   * @memberof Task
   */


  get numberCount() {
    return this._data.numberCount;
  }
  /**
   * The base type of the task. Can be 'private' for a private task or 'projecttask' for a project task.
   * @type {String} nullable 
   * @readonly
   * @memberof Task
   */


  get baseType() {
    return this._data.baseType;
  }
  /**
   * The id of the status for this task.
   * @type {String} uuid
   * @readonly
   * @memberof Task
   */


  get taskStatusId() {
    return this._data.taskStatusId;
  }
  /**
   * @typedef {TaskStatus}
   * @property {String} id uuid
   * @property {String} name nullable
   * @property {String} type uuid
   * @property {Number} order nullable
   * @property {Boolean} isPrivate
   * @property {String} icon nullable
   * @property {String} projectId uuid
   * @property {String} projectTypeId uuid
   * @property {String} createdOn date-time
   * @property {String} createdBy uuid
   * @property {String} updatedOn date-time
   * @property {String} updatedBy uuid
   * 
   * 
   * The status of the task.
   * @type {TaskStatus} uuid
   * @readonly
   * @memberof Task
   */


  get taskStatus() {
    return this._data.taskStatus;
  }
  /**
   * The id of the type of work of this task.
   * @type {String} uuid
   * @readonly
   * @memberof Task
   */


  get typeOfWorkId() {
    return this._data.typeOfWorkId;
  }
  /**
   * @typedef {TypeofWork}
   * @property {String} id uuid
   * @property {String} name nullable
   * @property {String} icon nullable
   * @property {Boolean} isArchived
   * 
   * The type of work of the task.
   * @type {TypeofWork}
   * @readonly
   * @memberof Task
   */


  get typeOfWork() {
    return this._data.typeOfWork;
  }
  /**
   * The id of the user assigned to this task, or null if none is assigned.
   * @type {String} uuid
   * @readonly
   * @memberof Task
   */


  get assigneeId() {
    return this._data.assigneeId;
  }
  /**
   * @typedef {Assignee}
   * @property {String} id uuid
   * @property {String} firstName nullable
   * @property {String} lastName nullable
   * @property {Boolean} hasImage
   * @property {Array} tags
   * @property {Array} teams
   * 
   * The assignee of the task.
   * @type {Assignee}
   * @readonly
   * @memberof Task
   */


  get assignee() {
    return this._data.assignee;
  }

  get projectId() {
    return this._data.projectId;
  }

  get project() {
    return this._data.project;
  }

  get hasAttachment() {
    return this._data.hasAttachment;
  }

  get lists() {
    return this._data.lists;
  }

  get entityId() {
    return this._data.entityId;
  }

  get tags() {
    return this._data.tags;
  }

  get createdOn() {
    return this._data.createdOn;
  }

  get createdBy() {
    return this._data.createdBy;
  }

  get updatedOn() {
    return this._data.updatedOn;
  }

  get updatedBy() {
    return this._data.updatedBy;
  }

  get closedOn() {
    return this._data.closedOn;
  }

  get closedBy() {
    return this._data.closedBy;
  }

  get order() {
    return this._data.order;
  }

  get createdFromTaskId() {
    return this._data.createdFromTaskId;
  }

  get isRecurring() {
    return this._data.isRecurring;
  }

  get trackedDuration() {
    return this._data.trackedDuration;
  }

  get entityInformation() {
    return this._data.entityInformation;
  }

  get resourceVersion() {
    return this._data.resourceVersion;
  }

  get subtasksDoneCount() {
    return this._data.subtasksDoneCount;
  }

  get subtasksCount() {
    return this._data.subtasksCount;
  }

  toPlainObject() {
    return {
      name: this._data.name,
      description: this._data.description,
      isPrio: this._data.isPrio,
      startOn: this._data.startOn,
      dueOn: this._data.dueOn,
      laneOrder: this._data.laneOrder,
      plannedDuration: this._data.plannedDuration,
      remainingDuration: this._data.remainingDuration,
      id: this._data.id,
      key: this._data.key,
      numberCount: this._data.numberCount,
      baseType: this._data.baseType,
      taskStatusId: this._data.taskStatusId,
      taskStatus: this._data.taskStatus,
      typeOfWorkId: this._data.typeOfWorkId,
      typeOfWork: this._data.typeOfWork,
      assigneeId: this._data.assigneeId,
      assignee: this._data.assignee,
      projectId: this._data.projectId,
      project: this._data.project,
      hasAttachment: this._data.hasAttachment,
      lists: this._data.lists,
      entityId: this._data.entityId,
      tags: this._data.tags,
      createdOn: this._data.createdOn,
      createdBy: this._data.createdBy,
      updatedOn: this._data.updatedOn,
      updatedBy: this._data.updatedBy,
      closedOn: this._data.closedOn,
      closedBy: this._data.closedBy,
      order: this._data.order,
      createdFromTaskId: this._data.createdFromTaskId,
      isRecurring: this._data.isRecurring,
      trackedDuration: this._data.trackedDuration,
      entityInformation: this._data.entityInformation,
      resourceVersion: this._data.resourceVersion,
      subtasksDoneCount: this._data.subtasksDoneCount,
      subtasksCount: this._data.subtasksCount
    };
  }

}

exports.Task = Task;