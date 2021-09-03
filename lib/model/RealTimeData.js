"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.RealTimeData = void 0;

class RealTimeData {
  constructor(snap) {
    this._update(snap);

    snap.ref.onSnapshot(snap => this._update(snap));
  }

  _update(snap) {
    this._snap = snap;
    this._ref = snap.ref;
    this._data = snap.exists ? snap.data() || {} : {};
  }

  get waitingTime() {
    return this._data.waitingTime;
  }

  set waitingTime(val) {
    this._data.waitingTime = val;
    this.commit();
  }

  get orderPossible() {
    return this._data.orderPossible;
  }

  set orderPossible(val) {
    this._data.orderPossible = val;
    this.commit();
  }

  get open() {
    return this._data.open;
  }

  set open(val) {
    this._data.open = val;
    this.commit();
  }

  async commit() {
    await this._ref.set(this.toPlainObject());
  }

  toPlainObject() {
    return {
      waitingTime: this._data.waitingTime,
      orderPossible: this._data.orderPossible,
      open: this._data.open
    };
  }

}

exports.RealTimeData = RealTimeData;