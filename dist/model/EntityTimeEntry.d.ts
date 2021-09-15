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
    constructor(data: EntityTimeEntry & {
        _plain?: true;
    });
    /** @private */
    private _data;
    /**
     * The total duration of time trackings on this entity.
     * @type {Integer} int32
     */
    get durationSum(): any;
    /**
     * The id of the project this duration aggregation is for.
     * @type {String} uuid
     */
    get projectId(): string;
    /**
     * The id of the task this duration aggregation is for.
     * @type {String} uuid
     */
    get taskId(): string;
    toPlainObject(): {
        durationSum: any;
        projectId: any;
        taskId: any;
    };
}
