"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.RealTimeDate = void 0;

class RealTimeDate {
  constructor(data) {
    this._data = data || {};
  }

  get waitingTime() {
    return this._data.waitingTime;
  }

  set waitingTime(val) {
    this._data.waitingTime = val;
  }

  get orderPossible() {
    return this._data.orderPossible;
  }

  set orderPossible(val) {
    this._data.orderPossible = val;
  }

  get opened() {
    return this._data.opened;
  }

  set opened(val) {
    this._data.opened = val;
  }

  toPlainObject() {
    return {
      waitingTime: this._data.waitingTime,
      orderPossible: this._data.orderPossible,
      opened: this._data.opened
    };
  }

}

exports.RealTimeDate = RealTimeDate;