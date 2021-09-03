"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DiscountList = void 0;

var _Discount = require("../model/Discount");

class DiscountList {
  constructor(ref) {
    this._ref = ref;
    this._discounts = [];

    this._init();
  }

  async _init() {
    this._snap = await this._ref.get();

    this._update(this._snap);

    this._snap.query.onSnapshot(snap => this._update(snap));
  }

  _update(snap) {
    this._snap = snap;
    this._query = snap.query;
    this._discounts = snap.docs.map(doc => doc.data());
  }

  get discounts() {
    return this._discounts.map(o => new _Discount.Discount(o));
  }

  set orders(val) {
    this._discounts = val;
  }
  /**
   * Adds a new Discount Object to the referenced Collection
   * @param {Discount} dsc 
   */


  async addDiscount(dsc) {
    await this._ref.doc(dsc.toPlainObject().uuid).set(dsc.toPlainObject());
  }
  /**
   * Updates the existing Discount doc with the given uuid to the new data of the dsc Object
   * @param {String} uuid 
   * @param {Object} dsc 
   */


  async updateDiscount(uuid, dsc) {
    await this._ref.doc(uuid).update(dsc);
  }
  /**
   * Removes the Discount doc with the specified uuid
   * @param {String} uuid 
   */


  async removeDiscount(uuid) {
    await this._ref.doc(uuid).delete();
  }

}

exports.DiscountList = DiscountList;