"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Awork = void 0;

var _client = require("./client");

var _Companies = require("./endpoints/Companies");

var _Projects = require("./endpoints/Projects");

var _Teams = require("./endpoints/Teams");

/**
 * Awork Class
 * @category Util
 */
class Awork {
  /**
   * 
   * @param {({apiKey: String})} init 
   */
  constructor({
    apiKey
  }) {
    this.client = new _client.Client(apiKey);
  }
  /**
   * @returns {Companies}
   */


  get companies() {
    return new _Companies.Companies(this.client);
  }
  /**
   * @returns {Projects}
   */


  get projects() {
    return new _Projects.Projects(this.client);
  }
  /**
   * @returns {Teams}
   */


  get teams() {
    return new _Teams.Teams(this.client);
  }

}

exports.Awork = Awork;