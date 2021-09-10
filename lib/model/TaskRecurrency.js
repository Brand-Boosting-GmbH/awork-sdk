"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TaskRecurrency = void 0;

/**
 * TaskRecurrency Model
 * @category Models
 * @class
 */
class TaskRecurrency {
  /**
   * @typedef {TaskRecurrency & {_plain?: true}} TaskRecurrencyLike
   */

  /**
   * Model constructor
   * @param {TaskRecurrencyLike} data 
   */
  constructor(data) {
    /** @private */
    this._data = data || {};
  }

  get recurrencyRule() {
    return this._data.recurrencyRule;
  }

  get relativeDueOn() {
    return this._data.relativeDueOn;
  }

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

exports.TaskRecurrency = TaskRecurrency;