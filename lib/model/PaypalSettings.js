"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.PaypalSettings = void 0;

class PaypalSettings {
  constructor(snap) {
    this._snap = snap;
    this._ref = snap.ref;
    this._data = snap.data() || {};
  }

  get clientId() {
    return this._data.clientId;
  }

  set clientId(val) {
    this._data.clientId = val;
  }

  get clientSecret() {
    return this._data.clientSecret;
  }

  set clientSecret(val) {
    this._data.clientSecret = val;
  }

  get live() {
    return this._data.live;
  }

  set live(val) {
    this._data.live = val;
  }

  async commit() {
    await this._ref.set(this.toPlainObject());
  }

  toPlainObject() {
    return {
      clientId: this._data.clientId,
      clientSecret: this._data.clientSecret,
      live: this._data.live
    };
  }

}

exports.PaypalSettings = PaypalSettings;