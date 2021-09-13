"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Client = void 0;

var _axios = _interopRequireDefault(require("axios"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class AworkResponse {
  constructor(status, headers, data) {
    this._status = status;
    this._headers = headers, this._data = data;
  }

  get status() {
    return this._status;
  }

  get headers() {
    return this._headers;
  }

  data() {
    return this._data;
  }

}
/**
 * Client class used to perform the http requests
 * @category Util
 * @class
 */


class Client {
  constructor(apiKey = '', basePath = 'https://api.awork.io/api/v1') {
    this.basePath = basePath;
    this.http = _axios.default.create({
      baseURL: basePath,
      headers: {
        Authorization: `Bearer ${apiKey}`
      }
    });
  }

  static getPlainObject(obj) {
    if (typeof obj === 'object' && typeof obj.toPlainObject === 'function') {
      return obj.toPlainObject();
    }

    return obj;
  }
  /**
   * 
   * @param {String} path 
   * @param {Object} params 
   * @returns {AworkResponse}
   */


  async get(path, params = {}, headers = {}) {
    const response = await this.http.get(path, {
      params,
      headers
    });
    return new AworkResponse(response.status, response.headers, response.data);
  }

  async post(path, payload, params = {}, headers = {}) {
    let data = Client.getPlainObject(payload);
    const response = await this.http.post(path, data, {
      params,
      headers
    });
    return new AworkResponse(response.status, response.headers, response.data);
  }

  async put(path, payload, params = {}, headers = {}) {
    let data = Client.getPlainObject(payload);
    const response = await this.http.put(path, data, {
      params,
      headers
    });
    return new AworkResponse(response.status, response.headers, response.data);
  }

  async delete(path, params = {}, headers = {}) {
    const response = await this.http.delete(path, {
      params,
      headers
    });
    return new AworkResponse(response.status, response.headers, response.data);
  }

}

exports.Client = Client;