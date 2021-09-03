"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.LineItem = void 0;

var _uuid = require("../util/uuid");

class LineItem {
  constructor(data) {
    this._data = data || {};
    this._data.upgrades = this._data.upgrades || [];
    this._data.selections = this._data.selections || {};
    this._data.quantity = this._data.quantity || 1;

    if (!this._data.uuid) {
      this._data.uuid = (0, _uuid.v4)();
    }
  }

  get uuid() {
    return this._data.uuid;
  }

  set uuid(val) {
    this._data.uuid = val;
  }

  get quantity() {
    return this._data.quantity;
  }

  set quantity(val) {
    this._data.quantity = val;
  }

  get product() {
    return this._data.product;
  }

  set product(val) {
    this._data.product = val;
  }

  get size() {
    return this._data.size;
  }

  set size(val) {
    this._data.size = val;
  }

  get selections() {
    return this._data.selections;
  }

  set selections(val) {
    this._data.selections = val;
  }

  get upgrades() {
    return this._data.upgrades;
  }

  set upgrades(val) {
    this._data.upgrades = val;
  }

  addUpgrade(val) {
    if (!this._data.upgrades.find(u => u == val)) {
      this._data.upgrades.push(val);
    }

    return this._data.upgrades[this._data.upgrades.length - 1];
  }

  removeUpgrade(uuid) {
    var removeIndex = this._data.upgrades.findIndex(ind => ind == uuid);

    if (removeIndex != -1) {
      this._data.upgrades.splice(removeIndex, 1);
    }
  }
  /**
   * 
   * @param {LineItem} otherLineItem 
   */


  equals(otherLineItem) {
    var otherKeys = Object.keys(otherLineItem.selections).length;
    var keys = Object.keys(this.selections).length;

    if (!(otherLineItem.product === this.product && otherLineItem.size === this.size)) {
      return false;
    }

    if (!(this.upgrades.every(u => otherLineItem.upgrades.includes(u)) && otherLineItem.upgrades.every(u => this.upgrades.includes(u)))) {
      return false;
    }

    if (keys === otherKeys) {
      for (let key in otherLineItem.selections) {
        if (!(otherLineItem.selections[key] === this.selections[key])) {
          return false;
        }
      }
    } else {
      return false;
    }

    return true;
  }

  toPlainObject() {
    return {
      uuid: this._data.uuid,
      quantity: this._data.quantity,
      product: this._data.product,
      size: this._data.size,
      selections: this._data.selections,
      upgrades: this._data.upgrades
    };
  }

}

exports.LineItem = LineItem;