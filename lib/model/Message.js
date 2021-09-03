"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Message = void 0;

var _convertTimestamp = require("../util/convertTimestamp");

class Message {
  constructor(data) {
    this._data = data || {};
  }

  get createdAt() {
    return (0, _convertTimestamp.timestampToDate)(this._data.createdAt);
  }

  set createdAt(val) {
    this._data.createdAt = val;
  }

  get text() {
    return this._data.text;
  }

  set text(val) {
    this._data.text = val;
  }

  get type() {
    return this._data.type;
  }

  set type(val) {
    this._data.type = val;
  }

  get automated() {
    return this._data.automated;
  }

  set automated(val) {
    this._data.automated = val;
  }

  toPlainObject() {
    return {
      createdAt: this._data.createdAt,
      text: this._data.text,
      type: this._data.type,
      automated: this._data.automated
    };
  }

}

exports.Message = Message;