"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Recurrency = void 0;

/**
 * Recurrency Model
 * @category Models
 * @class
 */
class Recurrency {
  /**
   * @typedef {Recurrency & {_plain?: true}} RecurrencyLike
   */

  /**
   * Model constructor
   * @param {RecurrencyLike} data 
   */
  constructor(data) {
    /**@private */
    this._data = data;
  }
  /**
   * The recurrence rule as cron expression. We support all expressions which cronos supports (https://github.com/HangfireIO/Cronos). The number of occurrences is limited to 24 a day.
   * @type {String} minLength: 5
   */


  get recurrencyRule() {
    return this._data.recurrencyRule;
  }
  /**
   * The interval of the executed expression. If the value is 3, only the third time of the expression the recurrence is actually executed.
   * @type {Number} nullable
   */


  get recurrencyInterval() {
    return this._data.recurrencyInterval;
  }
  /**
   * The relative due date and time of the task created from this recurrence rule, in seconds, from the moment of creating the task by a recurrence rule.
   * @type {Number} minimum: 0, nullable
   */


  get relativeDueOn() {
    return this._data.relativeDueOn;
  }
  /**
   * DateTime when recurring task creation will start, considering the set Recurrency Rule and Recurrency Interval.
   * @type {String} date-time
   */


  get recurrencyStartOn() {
    return this._data.recurrencyStartOn;
  }

  toPlainObject() {
    return {
      recurrencyRule: this._data.recurrencyRule,
      recurrencyInterval: this._data.recurrencyInterval,
      relativeDueOn: this._data.relativeDueOn,
      recurrencyStartOn: this._data.recurrencyStartOn
    };
  }

}

exports.Recurrency = Recurrency;