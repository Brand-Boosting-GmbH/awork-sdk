"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Client = void 0;

class Client {
  constructor(basePath = 'https://api.awork.io/api/v1') {
    this.basePath = basePath;
  }

  static getPlainObject(obj) {
    if (typeof obj === 'object' && typeof obj.toPlainObject === 'function') {
      return obj.toPlainObject();
    }

    return obj;
  }

  post(path, payload) {
    let data = Client.getPlainObject(payload);
  }

}

exports.Client = Client;