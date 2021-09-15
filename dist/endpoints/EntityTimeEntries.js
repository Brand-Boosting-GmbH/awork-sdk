"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.EntityTimeEntries = void 0;

require("../globalTypedef");

var _EntityTimeEntry = require("../model/EntityTimeEntry");

var _TimeEntry = require("../model/TimeEntry");

/**
 * Class corresponding to Aworks EntityTimeEntries Endpoints
 * @category Endpoints
 * @see [EntityTimeEntries in Awork API Docs](https://openapi.awork.io/#/EntityTimeEntries)
 */
class EntityTimeEntries {
  /**
   * Endpoint constructor
   * @param {import('../client/index').Client} client 
   * @param {('projects'|'tasks')} entityName
   * @param {String} entityId
   */
  constructor(client) {
    /** @private */
    this._client = client;
    /** @private */

    this._entityName = entityName;
    /** @private */

    this._entityId = entityId;
  }
  /**
   * Gets the summed up tracked time duration for specified projects and tasks.
   * @returns {Promise<EntityTimeEntry>}
   */


  async get() {
    const response = await this._client.get(`/${entityName}/${entityId}/trackedtime`);
    const data = response.data();
    return new _EntityTimeEntry.EntityTimeEntry(data);
  }
  /**
   * Gets the summed up tracked time duration for all projects and tasks.
   * @returns {Promise<EntityTimeEntry>}
   */


  async get() {
    const response = await this._client.get(`/${entityName}/trackedtime`);
    const data = response.data();
    return new _EntityTimeEntry.EntityTimeEntry(data);
  }
  /**
   * The entityName parameter defines the main entity of which to fetch the time entries.
   * @returns {Promise<TimeEntry>}
   */


  async get() {
    const response = await this._client.get(`/${entityName}/${entityId}/timeentries`);
    const data = response.data();
    return new _TimeEntry.TimeEntry(data);
  }

}

exports.EntityTimeEntries = EntityTimeEntries;