"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.RenderedOrderList = void 0;

var _Order = require("../model/Order");

var _Restaurant = require("../model/Restaurant");

var _OrderList = require("./OrderList");

var _RenderedOrder = require("./RenderedOrder");

class RenderedOrderList {
  /**
   * 
   * @param {OrderList} orderList 
   * @param {Restaurant} restaurant 
   */
  constructor(orderList, restaurant) {
    this._catalogs = {};
    this._orderList = orderList;
    this._restaurant = restaurant;
    /**
     * @type {Array<Order>}
     */

    this._orders = [];

    this._init();
  }

  _init() {
    this._orderList.onUpdate = async orderList => {
      this._orders = await Promise.all(orderList.orders.map(async o => {
        const catalog = this._catalogs[o.catalog] || (await this._restaurant.getCatalog(o.catalog));
        this._catalogs[o.catalog] = catalog;
        return new _RenderedOrder.RenderedOrder(o, catalog);
      }));
    };
  }

  get orders() {
    return this._orders;
  }

}

exports.RenderedOrderList = RenderedOrderList;