export class Task {
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
    
    /**
     * The id of the project this task is assigned to. 
     * Only set if this is a project task.
     * In this case, it is equal to the EntityId.
     * 
     * @type {String} uuid
     * @readonly
     * @memberof Task
     */
    get projectId() {
      return this._data.projectId;
    }
    
    /**
     * @typedef {Project}
     * @property {String} id uuid
     * @property {String} name nullable
     * @property {String} key nullable
     * @property {Object} projectStatus
     * @property {Object} company
     * @property {Object} projectType
     * @property {Array} tags
     * @property {Array} teams
     * @property {Boolean} hasImage
     * 
     * The project of the task.
     * @type {Project}
     * @readonly
     * @memberof Task
     */
    get project() {
      return this._data.project;
    }
    
    /**
     * Whether this task has an attachment.
     * 
     * @type {Boolean}
     * @readonly
     * @memberof Task
     */
    get hasAttachment() {
      return this._data.hasAttachment;
    }
    
    /**
     * @typedef {List}
     * @property {String} name nullable
     * @property {Number} order double
     * @property {String} id uuid
     * @property {Boolean} isArchived
     * @property {String} createdOn date-time
     * @property {String} createdBy uuid
     * @property {String} updatedOn date-time
     * @property {String} updatedBy uuid
     * @property {Number} orderOfTask double
     * 
     * The lists to which the task is assigned to.
     * @type {Array<List>}
     * @readonly
     * @memberof Task
     */
    get lists() {
      return this._data.lists;
    }
    
    /**
     * The id of the entity this task is assigned to. 
     * This is the id of the project if this is a project task, 
     * or the id of a user if this is a private task.
     * 
     * @type {String} uuid
     * @readonly
     * @memberof Task
     */
    get entityId() {
      return this._data.entityId;
    }
    
    /**
     * @typedef {Tag}
     * @property {String} id uuid
     * @property {String} name nullable
     * @property {String} color nullable
     * @property {String} entityId uuid
     * @property {String} createdOn date-time
     * @property {String} createdBy uuid
     * @property {String} updatedOn date-time
     * @property {String} updatedBy uuid
     * 
     * The lists to which the task is assigned to.
     * @type {Array<Tag>}
     * @readonly
     * @memberof Task
     */
    get tags() {
      return this._data.tags;
    }
    
    /**
     * The date this task was created.
     * 
     * @type {String} date-time
     * @readonly
     * @memberof Task
     */
    get createdOn() {
      return this._data.createdOn;
    }
    
     /**
     * The id of the user who created this task.
     * 
     * @type {String} uuid
     * @readonly
     * @memberof Task
     */
    get createdBy() {
      return this._data.createdBy;
    }
    
    /**
     * The date this task was last modified.
     * 
     * @type {String} date-time
     * @readonly
     * @memberof Task
     */
    get updatedOn() {
      return this._data.updatedOn;
    }
    
    /**
     * The id of the user who last modified this task.
     * 
     * @type {String} uuid
     * @readonly
     * @memberof Task
     */
    get updatedBy() {
      return this._data.updatedBy;
    }
    
    /**
     * The date the task was set to closed.
     * 
     * @type {String} date-time
     * @readonly
     * @memberof Task
     */
    get closedOn() {
      return this._data.closedOn;
    }
    
    /**
     * The user who closed the task.
     * 
     * @type {String} uuid
     * @readonly
     * @memberof Task
     */
    get closedBy() {
      return this._data.closedBy;
    }
    
    /**
     * The order of the task in a task status column.
     * 
     * @type {Number} double
     * @readonly
     * @memberof Task
     */
    get order() {
      return this._data.order;
    }
    
    /**
     * When the task was created by a recurrency rule, 
     * the id is the link to the template of which the task was created.
     * 
     * @type {String} uuid
     * @readonly
     * @memberof Task
     */
    get createdFromTaskId() {
      return this._data.createdFromTaskId;
    }
    
    /**
     * If the task is a recurrency template 
     * (used to create new tasks by a recurrency rule), the flag is true.
     * 
     * @type {Boolean}
     * @readonly
     * @memberof Task
     */
    get isRecurring() {
      return this._data.isRecurring;
    }
    
    /**
     * The summed up duration of all time trackings for this task.
     * 
     * @type {Number} int32
     * @readonly
     * @memberof Task
     */
    get trackedDuration() {
      return this._data.trackedDuration;
    }
    
    /**
     * @typedef {EntityInformation}
     * @property {String} description
     * 
     * The entity to which the task is linked.
     * 
     * @type {EntityInformation} nullable
     * @readonly
     * @memberof Task
     */
    get entityInformation() {
      return this._data.entityInformation;
    }
    
    /**
     * The version of the entity continuously 
     * incremented by 1 on every update of the entity.
     * 
     * @type {Number} int64
     * @readonly
     * @memberof Task
     */
    get resourceVersion() {
      return this._data.resourceVersion;
    }
    
    /**
     * The number of subtasks which are already done.
     * 
     * @type {Number} int32
     * @readonly
     * @memberof Task
     */
    get subtasksDoneCount() {
      return this._data.subtasksDoneCount;
    }
    
    /**
     * The total number of subtasks.
     * 
     * @type {Number} int32
     * @readonly
     * @memberof Task
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
        subtasksCount: this._data.subtasksCount,
      };
    }
  
  }