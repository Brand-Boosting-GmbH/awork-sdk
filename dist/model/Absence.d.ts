/**
 * Absence Model
 * @category Models
 * @class
 */
export class Absence {
    /**
     * @typedef {Absence & {_plain?: true}} AbsenceLike
     */
    /**
     * Model constructor
     * @param {AbsenceLike} data
     */
    constructor(data: Absence & {
        _plain?: true;
    });
    /**
    * @private
    */
    private _data;
    /**
     * The id of the user that created the absence.
     * @type {String} uuid
     */
    get userId(): string;
    /**
     * The start time of the absence.
     * @type {String} date-time
     */
    get startOn(): string;
    /**
     * The end time of the absence.
     * @type {String} date-time
     */
    get endOn(): string;
    /**
     * The id of the absence.
     * @type {String} uuid
     */
    get id(): string;
    /**
     * The date the absence was created.
     * @type {String} date-time
     */
    get createdOn(): string;
    /**
     * The id of the user that created the absence.
     * @type {String} uuid
     */
    get createdBy(): string;
    /**
     * The date the absence was updated.
     * @type {String} date-time
     */
    get updatedOn(): string;
    /**
     * The id of the user that updated the absence.
     * @type {String} uuid
     */
    get updatedBy(): string;
    /**
     * The date the absence was deleted.
     * @type {String} date-time
     */
    get deletedOn(): string;
    /**
     * The id of the user that deleted the absence.
     * @type {String} uuid
     */
    get deletedBy(): string;
    toPlainObject(): {
        userId: any;
        startOn: any;
        endOn: any;
        id: any;
        createdOn: any;
        createdBy: any;
        updatedOn: any;
        updatedBy: any;
        deletedOn: any;
        deletedBy: any;
    };
}
