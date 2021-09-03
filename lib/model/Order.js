"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Order = void 0;

var _uuid = require("../util/uuid");

var _convertTimestamp = require("../util/convertTimestamp");

var _Discount = require("./Discount");

var _LineItem = require("./LineItem");

var _Shipping = require("./Shipping");

class Order {
  constructor(data) {
    this._data = data || {};
    this._data.location = this._data.location || '';
    this._data.finishedTime = this._data.finishedTime || 0;
    this._data.shipping = this._data.shipping || {};
    this._data.method = this._data.method || {};
    this._data.lineItems = this._data.lineItems || [];
    this._data.discounts = this._data.discounts || [];
    this._data.timeType = this._data.timeType || {};
    this._data.extraWish = this._data.extraWish || '';

    if (!this._data.uuid) {
      this._data.uuid = (0, _uuid.v4)();
    }
  }

  get extraWish() {
    return this._data.extraWish;
  }

  set extraWish(val) {
    this._data.extraWish = val;
  }

  get timeType() {
    return this._data.timeType;
  }

  set timeType(val) {
    this._data.timeType = val;
  }

  get timeTypeNow() {
    return this._data.timeType;
  }

  set timeTypeNow(val) {
    this._data.timeType.now = val;
  }

  get timeTypeTimed() {
    return this._data.timeType.timed;
  }

  set timeTypeTimed(val) {
    this._data.timeType.timed = val;
  }

  get timeWish() {
    return (0, _convertTimestamp.timestampToDate)(this._data.timeWish);
  }

  set timeWish(val) {
    this._data.timeWish = val;
  }

  get postedAt() {
    return (0, _convertTimestamp.timestampToDate)(this._data.postedAt);
  }

  set postedAt(val) {
    this._data.postedAt = val;
  }

  get deliveryTime() {
    return (0, _convertTimestamp.timestampToDate)(this._data.deliveryTime);
  }

  set deliveryTime(val) {
    this._data.deliveryTime = val;
  }

  get uuid() {
    return this._data.uuid;
  }
  /**
   * Human-Radable Name for reference
   * @type {String}
   */


  get name() {
    return this._data.name || '';
  }

  set name(val) {
    this._data.name = val;
  }

  get time() {
    return (0, _convertTimestamp.timestampToDate)(this._data.time);
  }

  set time(val) {
    this._data.time = val;
  }

  addTime(val) {
    this._data.time = val;
  }

  get shop() {
    return this._data.shop;
  }

  set shop(uuid) {
    this._data.shop = uuid;
  }

  get catalog() {
    return this._data.catalog;
  }

  set catalog(uuid) {
    this._data.catalog = uuid;
  }

  get createdAt() {
    return (0, _convertTimestamp.timestampToDate)(this._data.createdAt);
  }

  set createdAt(val) {
    this._data.createdAt = val;
  }

  get finishedTime() {
    return (0, _convertTimestamp.timestampToDate)(this._data.finishedTime);
  }

  set finishedTime(val) {
    this._data.finishedTime = val;
  }

  get paymentMethod() {
    return this._data.paymentMethod;
  }

  set paymentMethod(val) {
    this._data.paymentMethod = val;
  }

  get method() {
    return this._data.method;
  }

  set method(val) {
    this._data.method = val;
  }

  get methodUuid() {
    return this._data.method.method;
  }

  set methodUuid(uuid) {
    this._data.method.method = uuid;
  }

  get methodSelections() {
    return this._data.method.selections;
  }

  set methodSelections(val) {
    this._data.method.selections = val;
  }

  get lineItems() {
    return this._data.lineItems.map(l => new _LineItem.LineItem(l));
  }

  set lineItems(val) {
    this._data.lineItems = val;
  }

  get shipping() {
    return new _Shipping.Shipping(this._data.shipping);
  }

  set shipping(val = {}) {
    this._data.shipping = val;
  }

  get location() {
    return this._data.location;
  }

  set location(val) {
    this._data.location = val;
  }

  get discounts() {
    return this._data.discounts.map(d => new _Discount.Discount(d));
  }

  set discounts(val) {
    this._data.discounts = val;
  }

  addDiscount(val) {
    this._data.discounts.push(new _Discount.Discount(val).toPlainObject());
  }

  removeDiscount(uuid) {
    var removeIndex = this._data.discounts.findIndex(ind => ind.uuid === uuid);

    if (removeIndex != -1) {
      this._data.discounts.splice(removeIndex, 1);
    }
  }

  get state() {
    return this._data.state;
  }

  set state(val) {
    this._data.state = val;
  }

  addLineItem(val) {
    const copy = this.lineItems.find(lineItem => lineItem.equals(new _LineItem.LineItem(val)));

    if (copy) {
      copy.quantity += val.quantity;
      return copy;
    } else {
      this._data.lineItems.push(new _LineItem.LineItem(val).toPlainObject());

      return this._data.lineItems[this._data.lineItems.length - 1];
    }
  }

  removeLineItem(uuid) {
    const removeIndex = this._data.lineItems.findIndex(ind => ind.uuid === uuid);

    if (removeIndex != -1) {
      this._data.lineItems.splice(removeIndex, 1);
    }
  }

  toPlainObject() {
    return {
      uuid: this._data.uuid,
      name: this._data.name,
      shop: this._data.shop,
      catalog: this._data.catalog,
      finishedTime: this._data.finishedTime,
      paymentMethod: this._data.paymentMethod,
      method: {
        method: this._data.method.method,
        selections: this._data.method.selections
      },
      location: this._data.location,
      lineItems: this._data.lineItems,
      shipping: this._data.shipping,
      discounts: this._data.discounts,
      timeType: {
        now: this._data.timeType.now,
        timed: this._data.timeType.timed
      },
      //timed or now
      timeWish: this._data.timeWish,
      //Liefertermin vom Kunde ausgewählt
      postedAt: this._data.postedAt,
      deliveryTime: this._data.deliveryTime,
      //tatsächlicher Liefertermin 
      state: this._data.state,
      // 'POSTED', 'RECEIVED', 'APPROVED', 'INDELIVERY', 'FINISHED', 'ARCHIVED'
      extraWish: this._data.extraWish
    };
  }

}

exports.Order = Order;