/**
 * EntityTimeEntry Model
 * @category Models
 * @class
 */
 export class EntityTimeEntry {
    /**
     * @typedef {EntityTimeEntry & {_plain?: true}} EntityTimeEntryLike
     */

    /**
     * Model constructor
     * @param {EntityTimeEntryLike} data 
     */
    constructor(data) {
        /** @private */
        this._data = data || {}
    }

    /**
     * The total duration of time trackings on this entity.
     * @type {Integer} int32
     */
    get durationSum () {
        return this._data.durationSum
    }

    /**
     * The id of the project this duration aggregation is for.
     * @type {String} uuid
     */
    get projectId () {
        return this._data.projectId
    }

    /**
     * The id of the task this duration aggregation is for.
     * @type {String} uuid
     */
    get taskId () {
        return this._data.taskId
    }

    toPlainObject () {
        return {
            durationSum: this._data.durationSum,
            projectId: this._data.projectId,
            taskId: this._data.taskId
        }
    }
}