"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MeUsers = void 0;

require("../globalTypedef");

var _Users = require("./Users");

var _User = require("../model/User");

/**
 * Class corresponding to Aworks Users Endpoints
 * @category Endpoints
 * @see [Users in Awork API Docs](https://openapi.awork.io/#/Users)
 */
class MeUsers extends _Users.Users {
  /**
  * Endpoint constructor
  * @param {import('../client/index').Client} client
  */
  constructor(client) {
    /** @private */
    this._client = client;
    /** @private */

    this._userPrefix = `/me`;
  }
  /**
   * Returns the currently logged-in user and workspace.
   * @returns {Promise<User>}
   */


  async get() {
    const response = await this._client.get(`${this._userPrefix}`);
    const data = response.data();
    return new _User.User(data);
  }

}

exports.MeUsers = MeUsers;