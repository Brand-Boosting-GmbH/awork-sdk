/**
 * SubTaskTemplate Model
 * @category Models
 * @class
 */
export class SubTaskTemplate {
    /**
     * @typedef {SubTaskTemplate & {_plain?: true}} SubTaskTemplateLike
     */
    /**
     * Model constructor
     * @param {SubTaskTemplateLike} data
     */
    constructor(data: SubTaskTemplate & {
        _plain?: true;
    });
    /**@private */
    private _data;
    /**
     * Whether the check list Item is done.
     * @type {Boolean}
     */
    get isDone(): boolean;
    /**
     * The name of the check list Item.
     * @type {String} nullable
     */
    get name(): string;
    /**
     * The order of the check list item.
     * @type {Number} nullable
     */
    get order(): number;
    /**
     * The id of the check list.
     * @type {String} uuid
     */
    get id(): string;
    /**
     * The date this check list was created.
     * @type {String} uuid
     */
    get createdOn(): string;
    /**
     * The id of the user who created this check list.
     * @type {String} uuid
     */
    get createdBy(): string;
    /**
     * The date this check list was last modified.
     * @type {String} date-name
     */
    get updatedOn(): string;
    /**
     * The id of the user who last modified this check list.
     * @type {String} uuid
     */
    get updatedBy(): string;
    /**
     * The id of the task template this subtask template item belongs to.
     * @type {String} uuid
     */
    get taskTemplateId(): string;
    toPlainObject(): {
        isDone: boolean;
        name: string;
        order: number;
        id: string;
        createdOn: string;
        createdBy: string;
        updatedBy: string;
        updatedOn: string;
        taskTemplateId: string;
    };
}
