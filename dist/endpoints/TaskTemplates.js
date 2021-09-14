"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TaskTemplates = void 0;

var _Recurrency = require("../model/Recurrency");

var _TaskTemplateSubTaskTemplates = require("./TaskTemplateSubTaskTemplates");

/**
 * Class corresponding to Aworks tasktemplates related part of the TaskBundles Endpoints
 * @category Endpoints
 * @see [TaskBundles in Awork API Docs](https://openapi.awork.io/#/TaskBundles)
 */
class TaskTemplates {
  /**
   * Endpoint constructor
   * @param {import('../client/index').Client} client 
   */
  constructor(client) {
    /**@private */
    this._client = client;
  }
  /**
   * @typedef {Object} Recurrency
   * @property {String} recurrencyRule 
   * @property {Number} [recurrencyInterval] 
   * @property {Number} [relativeDueOn] The relative due date and time of the task created from this recurrence rule, in seconds, from the moment of creating the task by a recurrence rule.
   * @property {String} recurrencyStartOn DateTime when recurring task creation will start, considering the set Recurrency Rule and Recurrency Interval.
   */

  /**
   * Returns the existing recurrency rule for one task template.
   * @param {String} taskTemplateId The id of the task template.
   * @returns {Promise<Recurrency>}
   */


  async recurrency(taskTemplateId) {
    const response = await this._client.get(`tasktemplates/${taskTemplateId}/recurrency`);
    return new _Recurrency.Recurrency(response.data());
  }

  subTaskTemplates(taskTemplateId) {
    return new _TaskTemplateSubTaskTemplates.TaskTemplateSubTaskTemplates(this._client, taskTemplateId);
  }

}

exports.TaskTemplates = TaskTemplates;