"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Task = void 0;

require("../globalTypedef");

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
   * The name of the task. Required.
   * @type {String} nullable
   */


  get name() {
    return this._data.name;
  }
  /**
   * The description of the task.
   * @type {String} nullable
   */


  get description() {
    return this._data.description;
  }
  /**
   * Whether this task is marked as priority.
   * @type {Boolean} nullable
   */


  get isPrio() {
    return this._data.isPrio;
  }
  /**
   * The expected start date and time of the task.
   * @type {String} nullable date-time
   */


  get startOn() {
    return this._data.startOn;
  }
  /**
   * The expected due date and time of the task.
   * @type {String} nullable date-time
   */


  get dueOn() {
    return this._data.dueOn;
  }
  /**
   * The lane order defines the vertical position in the gant planner.
   * @type {Integer} nullable
   */


  get laneOrder() {
    return this._data.laneOrder;
  }
  /**
   * The expected planned workload of the task, in seconds.
   * @type {Integer} nullable
   */


  get plannedDuration() {
    return this._data.plannedDuration;
  }
  /**
   * The expected remaining duration from the original planned effort of the task, in seconds.
   * @type {Integer} nullable
   */


  get remainingDuration() {
    return this._data.remainingDuration;
  }
  /**
  * The Id of the task.
  * @type {String} uuid
  */


  get id() {
    return this._data.id;
  }
  /**
   * The unique task key, which needs to be unique within the entire workspace.
   * @type {String} nullable
   */


  get key() {
    return this._data.key;
  }
  /**
   * The numerical part of the key.
   * @type {Integer} 
   */


  get numberCount() {
    return this._data.numberCount;
  }
  /**
   * The base type of the task. Can be 'private' for a private task or 'projecttask' for a project task.
   * @type {String} nullable 
   */


  get baseType() {
    return this._data.baseType;
  }
  /**
   * The id of the status for this task.
   * @type {String} uuid
   */


  get taskStatusId() {
    return this._data.taskStatusId;
  }
  /**
   * @typedef {Object} TaskStatus
   * @property {String} id uuid
   * @property {String} name nullable
   * @property {String} type uuid
   * @property {Number} order nullable
   * @property {Boolean} isPrivate
   * @property {Icon} icon nullable
   * @property {String} projectId uuid
   * @property {String} projectTypeId uuid
   * @property {String} createdOn date-time
   * @property {String} createdBy uuid
   * @property {String} updatedOn date-time
   * @property {String} updatedBy uuid
   */

  /**
   * The status of the task.
   * @type {TaskStatus} uuid
   */


  get taskStatus() {
    return this._data.taskStatus;
  }
  /**
   * The id of the type of work of this task.
   * @type {String} uuid
   */


  get typeOfWorkId() {
    return this._data.typeOfWorkId;
  }
  /**
   * @typedef {Object} TypeofWork
   * @property {String} id uuid
   * @property {String} name nullable
   * @property {Icon} icon nullable
   * @property {Boolean} isArchived
   */

  /**
   * The type of work of the task.
   * @type {TypeofWork}
   */


  get typeOfWork() {
    return this._data.typeOfWork;
  }
  /**
   * @typedef {Object} AssigneeTagsObject
   * @property {String} id
   * @property {String} name nullable
   * @property {Color} color nullable
   * @property {String} entityId
   */

  /**
   * @typedef {Object} Assignee
   * @property {String} id uuid
   * @property {String} firstName nullable
   * @property {String} lastName nullable
   * @property {Boolean} hasImage
   * @property {String} key nullable
   * @property {Array<AssigneeTagsObject>} tags The Tags of the user.
   * @property {Array<{id: String}>} teams The ids of the team the user is associated to.
   * /
   
  /**
   * The list assigned users of this task, or empty if not user was assigned.
   * @type {Array<Assignee>} 
   */


  get assignees() {
    return this._data.assignees;
  }
  /**
   * The id of the project this task is assigned to. Only set if this is a project task. In this case, it is equal to the EntityId.
   * @type {String} uuid
   */


  get projectId() {
    return this._data.projectId;
  }
  /**
   * @typedef {Object} ProjectObject
   * @property {String} id uuid
   * @property {String} name nullable
   * @property {String} key The unique key of the project
   * @property {{id: String, name: String, description: String, type: String, isArchived: Boolean}} projectStatus
   * @property {{id: String, name: String, hasImage: Boolean, description: String, tags: Array<Object>}} company The Tags of the company.
   * @property {{id: String, name: String, icon: Icon, isArchived: Boolean}} hasImage Whether the project has an image.
   */

  /**
   * @type {ProjectObject}
   */


  get project() {
    return this._data.project;
  }
  /**
   * Whether this task has an attachment.
   * @type {Boolean}
   */


  get hasAttachment() {
    return this._data.hasAttachment;
  }
  /**
   * @typedef {Object} ListsObject
   * @property {String} name The name of the list.
   * @property {Number} order The order of the list.
   * @property {String} id The id of the task list.
   * @property {Boolean} isArchived Whether the task list has been archived.
   * @property {String} createdOn The date this task list was created.
   * @property {String} createdBy The id of the user who created this task list.
   * @property {String} updatedOn The date this task list was last modified.
   * @property {String} updatedBy The id of the user who last modified this task list.
   * @property {Number} orderOfTask The order of the task in the list.
   */

  /**
   * The lists to which the task is assigned to.
   * @type {Array<ListsObject>}
   */


  get lists() {
    return this._data.lists;
  }
  /**
   * The id of the entity this task is assigned to. This is the id of the project if this is a project task, or the id of a user if this is a private task.
   * @type {String} 
   */


  get entityId() {
    return this._data.entityId;
  }
  /**
   * @typedef {Object} TagsListObject
   * @property {String} id uuid
   * @property {String} name nullable
   * @property {Color} color nullable
   * @property {String} entityId uuid
   * @property {String} createdOn date-time
   * @property {String} createdBy uuid
   * @property {String} updatedOn date-time
   * @property {String} updatedBy uuid
   */

  /**
   * The list of tags.
   * @type {Array<TagsListObject>}
   */


  get tags() {
    return this._data.tags;
  }
  /**
   * The date this was created.
   * @type {String} date-time
   */


  get createdOn() {
    return this._data.createdOn;
  }
  /**
   * The id of the user who created this task.
   * @type {String} uuid
   */


  get createdBy() {
    return this._data.createdBy;
  }
  /**
   * The date this task was last modified.
   * @type {String} date-time
   */


  get updatedOn() {
    return this._data.updatedOn;
  }
  /**
   * The id of the user who last modified this task.
   * @type {String} uuid
   */


  get updatedBy() {
    return this._data.updatedBy;
  }
  /**
   * The date the task was set to closed.
   * @type {String} date-time
   */


  get closedOn() {
    return this._data.closedOn;
  }
  /**
   * The user who closed the task.
   * @type {String}
   */


  get closedBy() {
    return this._data.closedBy;
  }
  /**
   * The order of the task in a task status column.
   * @type {Number} double
   */


  get order() {
    return this._data.order;
  }
  /**
   * When the task was created by a recurrency rule, the id is the link to the template of which the task was created.
   * @type {String} uuid
   */


  get createdFromTaskId() {
    return this._data.createdFromTaskId;
  }
  /**
   * If the task is a recurrency template (used to create new tasks by a recurrency rule), the flag is true.
   * @type {Boolean} 
   */


  get isRecurring() {
    return this._data.isRecurring;
  }
  /**
   * The summed up duration of all time trackings for this task.
   * @type {Integer} nullable
   */


  get trackedDuration() {
    return this._data.trackedDuration;
  }
  /**
   * The entity to which the task is linked.
   * @type {Object}
   */


  get entityInformation() {
    return this._data.entityInformation;
  }
  /**
   * The version of the entity continuously incremented by 1 on every update of the entity.
   * @type {Integer} int64
   */


  get resourceVersion() {
    return this._data.resourceVersion;
  }
  /**
   * The number of subtasks which are already done.
   * @type {Integer} int32
   */


  get subtasksDoneCount() {
    return this._data.subtasksDoneCount;
  }
  /**
   * The total number of subtasks.
   * @type {Integer} int32
   */


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