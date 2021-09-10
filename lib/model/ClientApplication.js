"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ClientApplication = void 0;

class ClientApplication {
  constructor(data) {
    this._data = data || {};
  }
  /**
   * The client application's identifier.
   * @type {String}
   */


  get clientId() {
    return this._data.clientId;
  }
  /**
   * The client application's display name.
   * @type {String}
   */


  get displayName() {
    return this._data.displayName;
  }
  /**
   * The redirect URIs.
   * @type {Array<String>}
   */


  get redirectUris() {
    return this._data.redirectUris;
  }
  /**
   * The date this entity was created.
   * @type {String}
   */


  get createdOn() {
    return this._data.createdOn;
  }
  /**
   * The date this entity was last modified.
   * @type {String}
   */


  get updatedOn() {
    return this._data.updatedOn;
  }

  toPlainObject() {
    return {
      clientId: this._data.clientId,
      displayName: this._data.displayName,
      redirectUris: this._data.redirectUris,
      createdOn: this._data.createdOn,
      updatedOn: this._data.updatedOn
    };
  }

}

exports.ClientApplication = ClientApplication;