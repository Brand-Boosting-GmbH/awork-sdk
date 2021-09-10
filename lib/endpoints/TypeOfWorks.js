"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TypeOfWorks = void 0;

require("../globalTypedef");

var _TypeOfWork = require("../model/TypeOfWork");

/**
 * Class corresponding to Aworks TypeOfWork Endpoints
 * @category Endpoints
 * @see [TypeOfWork in Awork API Docs](https://openapi.awork.io/#/TypeOfWork)
 */
class TypeOfWorks {
  /**
   * Endpoint constructor
   * @param {import('../client/index').Client} client 
   */
  constructor(client) {
    /**
     * @private
     */
    this._client = client;
  }
  /**
   * Gets a single type of work by its id.
   * @param {String} id The id of the type of work.
   * @returns {Promise<TypeOfWork>}
   */


  async get(id) {
    const response = await this._client.get(`/typeofwork/${id}`);
    const data = response.data();
    return new _TypeOfWork.TypeOfWork(data);
  }
  /**
   * Returns all type of work.
   * @param {ListOptions} [options] Pagination and filtering options
   * @returns {Promise<Array<TypeOfWork>>}
   */


  async list(options) {
    const response = await this._client.get(`/typeofwork`, options);
    const data = response.data();
    return data.map(d => new _TypeOfWork.TypeOfWork(d));
  }

}

exports.TypeOfWorks = TypeOfWorks;