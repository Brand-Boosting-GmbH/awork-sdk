"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Media = void 0;

var _uuid = require("../util/uuid");

class Media {
  constructor(data) {
    this._data = data || {};

    if (!this._data.uuid) {
      this._data.uuid = (0, _uuid.v4)();
    }
  }

  get uuid() {
    return this._data.uuid;
  }

  get alt() {
    return this._data.alt;
  }

  set alt(val) {
    this._data.alt = val;
  }

  get author() {
    return this._data.author;
  }

  set author(val) {
    this._data.author = val;
  }

  get authorUrl() {
    return this._data.authorUrl;
  }

  set authorUrl(val) {
    this._data.authorUrl = val;
  }

  get origin() {
    return this._data.origin;
  }

  set origin(val) {
    this._data.origin = val;
  }

  get type() {
    return this._data.type;
  }

  set type(val) {
    this._data.type = val;
  }

  get url() {
    return this._data.url;
  }

  set url(val) {
    this._data.url = val;
  }

  toPlainObject() {
    return {
      uuid: this._data.uuid,
      alt: this._data.alt,
      author: this._data.author,
      authorUrl: this._data.authorUrl,
      origin: this._data.origin,
      type: this._data.type,
      url: this._data.url
    };
  }

}

exports.Media = Media;