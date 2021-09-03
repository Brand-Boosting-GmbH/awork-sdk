"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.OrderList = void 0;

var _Order = require("../model/Order");

class OrderList {
  constructor(snap) {
    this._update(snap);

    snap.query.onSnapshot(snap => this._update(snap));
  }

  _update(snap) {
    this._snap = snap;
    this._query = snap.query;
    this._orders = snap.docs.map(doc => doc.data());

    if (this.onUpdate && typeof this.onUpdate === 'function') {
      this.onUpdate(this);
    }
  }

  get orders() {
    return this._orders.map(o => new _Order.Order(o));
  }

  set orders(val) {
    this._orders = val;
  }

}

exports.OrderList = OrderList;