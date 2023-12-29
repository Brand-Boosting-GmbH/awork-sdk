"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MeProjectTasks = void 0;

require("../globalTypedef");

var _ProjectTasks = require("./ProjectTasks");

/**
 * Class corresponding to Aworks ProjectTasks Endpoints
 * @category Endpoints
 * @see [ProjectTasks in Awork API Docs](https://openapi.awork.com/#/ProjectTasks)
 */
class MeProjectTasks extends _ProjectTasks.ProjectTasks {
  /**
  * Endpoint constructor
  * @param {import('../client/index').Client} client
  * @param {String} projectId The id of the project.
  */
  constructor(client, projectId) {
    super(client, projectId);
    /** @private */

    this._projectsPrefix = `/me`;
  }

}

exports.MeProjectTasks = MeProjectTasks;