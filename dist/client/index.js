"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Client = void 0;

var _axios = _interopRequireDefault(require("axios"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class AworkError {
  constructor(error) {
    this.data = error.response.data ? error.response.data : null;
    this.status = error.response.status;
    this.statusText = error.response.statusText;
  }

  get code() {
    return this.data.code;
  }

  get description() {
    return this.data.description;
  }

  get link() {
    return this.data.link;
  }

  get space() {
    return this.data.space;
  }

  get validationErrors() {
    return this.data.validationErrors;
  }

}

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
    }).catch(e => {
      console.log(e.response);
    });
    return new AworkResponse(response.status, response.headers, response.data);
  }

  async post(path, payload, params = {}, headers = {}) {
    let data = Client.getPlainObject(payload);
    const response = await this.http.post(path, data, {
      params,
      headers
    }).catch(e => {
      throw new AworkError(e).data.validationErrors;
    });
    return new AworkResponse(response.status, response.headers, response.data);
  }

  async put(path, payload, params = {}, headers = {}) {
    let data = Client.getPlainObject(payload);
    const response = await this.http.put(path, data, {
      params,
      headers
    }).catch(e => {
      throw new AworkError(e);
    });
    return new AworkResponse(response.status, response.headers, response.data);
  }

  async delete(path, params = {}, headers = {}) {
    const response = await this.http.delete(path, {
      params,
      headers
    }).catch(e => {
      throw new AworkError(e);
    });
    return new AworkResponse(response.status, response.headers, response.data);
  }

}

exports.Client = Client;