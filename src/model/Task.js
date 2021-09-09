export class Task {
    constructor(data) {
      this._data = data || {};
    }
  
    get name() {
      return this._data.name;
    }
  
    get description() {
      return this._data.description;
    }
  
    get isPrio() {
      return this._data.isPrio;
    }
  
    get startOn() {
      return this._data.startOn;
    }
  
    get dueOn() {
      return this._data.dueOn;
    }
  
    get laneOrder() {
      return this._data.laneOrder;
    }
  
    get plannedDuration() {
      return this._data.plannedDuration;
    }
  
    get remainingDuration() {
      return this._data.remainingDuration;
    }
  
    get id() {
      return this._data.id;
    }
  
    get key() {
      return this._data.key;
    }
  
    get numberCount() {
      return this._data.numberCount;
    }
  
    get baseType() {
      return this._data.baseType;
    }
  
    get taskStatusId() {
      return this._data.taskStatusId;
    }
  
    get taskStatus() {
      return this._data.taskStatus;
    }
  
    get typeOfWorkId() {
      return this._data.typeOfWorkId;
    }
  
    get typeOfWork() {
      return this._data.typeOfWork;
    }
  
    get assigneeId() {
      return this._data.assigneeId;
    }
  
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
        subtasksCount: this._data.subtasksCount,
      };
    }
  
  }