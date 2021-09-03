"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ReactiveOrder = void 0;

var _Order = require("./Order");

class ReactiveOrder extends _Order.Order {
  constructor(snap) {
    super(snap.data() || {});

    this._update(snap);

    snap.ref.onSnapshot(snap => this._update(snap));
  }

  _update(snap) {
    this._snap = snap;
    this._ref = snap.ref;
    this._data = snap.exists ? snap.data() || {} : {};
  }

}

exports.ReactiveOrder = ReactiveOrder;