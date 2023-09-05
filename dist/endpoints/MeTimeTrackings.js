"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MeTimeTrackings = void 0;

require("../globalTypedef");

var _TimeTrackings = require("./TimeTrackings");

/**
 * Class corresponding to Aworks UserPrivateTasksSubtasks Endpoints
 * @category Endpoints
 * @see [UserPrivateTasksSubtasks in Awork API Docs](https://openapi.awork.com/#/UserPrivateTasksSubtasks)
 */
class MeTimeTrackings extends _TimeTrackings.TimeTrackings {
  /**
  * Endpoint constructor
  * @param {import('../client/index').Client} client
  */
  constructor(client) {
    super(client);
    /** @private */

    this._userPrefix = `/me`;
  }

}

exports.MeTimeTrackings = MeTimeTrackings;