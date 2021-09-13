/**
 * TaskRecurrency Model
 * @category Models
 * @class
 */
export class TaskRecurrency {
    /**
     * @typedef {TaskRecurrency & {_plain?: true}} TaskRecurrencyLike
     */
    /**
     * Model constructor
     * @param {TaskRecurrencyLike} data
     */
    constructor(data: TaskRecurrency & {
        _plain?: true;
    });
    /** @private */
    private _data;
    get recurrencyRule(): any;
    get relativeDueOn(): any;
    get recurrencyStartOn(): any;
    toPlainObject(): {
        recurrencyRule: any;
        recurrencyInterval: any;
        relativeDueOn: any;
        recurrencyStartOn: any;
    };
}
