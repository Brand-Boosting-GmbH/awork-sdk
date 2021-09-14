/**
 * Recurrency Model
 * @category Models
 * @class
 */
export class Recurrency {
    /**
     * @typedef {Recurrency & {_plain?: true}} RecurrencyLike
     */
    /**
     * Model constructor
     * @param {RecurrencyLike} data
     */
    constructor(data: Recurrency & {
        _plain?: true;
    });
    /**@private */
    private _data;
    /**
     * The recurrence rule as cron expression. We support all expressions which cronos supports (https://github.com/HangfireIO/Cronos). The number of occurrences is limited to 24 a day.
     * @type {String} minLength: 5
     */
    get recurrencyRule(): string;
    /**
     * The interval of the executed expression. If the value is 3, only the third time of the expression the recurrence is actually executed.
     * @type {Number} nullable
     */
    get recurrencyInterval(): number;
    /**
     * The relative due date and time of the task created from this recurrence rule, in seconds, from the moment of creating the task by a recurrence rule.
     * @type {Number} minimum: 0, nullable
     */
    get relativeDueOn(): number;
    /**
     * DateTime when recurring task creation will start, considering the set Recurrency Rule and Recurrency Interval.
     * @type {String} date-time
     */
    get recurrencyStartOn(): string;
    toPlainObject(): {
        recurrencyRule: string;
        recurrencyInterval: number;
        relativeDueOn: number;
        recurrencyStartOn: string;
    };
}
