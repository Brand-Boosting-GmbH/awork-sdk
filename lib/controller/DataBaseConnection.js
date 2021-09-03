"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DataBaseConnection = void 0;

var _Catalog = require("../model/Catalog");

var _Restaurant = require("../model/Restaurant");

class DataBaseConnection {
  constructor(firestore) {
    this._firestore = firestore;

    if (typeof DataBaseConnection.firestore === 'undefined') {
      DataBaseConnection.firestore = firestore;
      firestore().settings({
        ignoreUndefinedProperties: true
      });
    }

    this._db = firestore();
  }

  static get FieldValue() {
    return DataBaseConnection.firestore && DataBaseConnection.firestore.FieldValue ? DataBaseConnection.firestore.FieldValue : {
      serverTimestamp: () => new Date()
    };
  }

  static get FieldPath() {
    return DataBaseConnection.firestore.FieldPath;
  }

  async getRestaurant(uuid) {
    const restaurant = await this._db.collection('restaurants').doc(uuid).get();

    if (restaurant.exists) {
      return new _Restaurant.Restaurant(restaurant);
    } else {
      throw new Error('Restaurant does not exist');
    }
  }

  async createRestaurant(uuid) {
    const restaurant = await this._db.collection('restaurants').doc(uuid).get();

    if (restaurant.exists) {
      throw new Error('Restaurant already exists');
    } else {
      return new _Restaurant.Restaurant(restaurant);
    }
  }

}

exports.DataBaseConnection = DataBaseConnection;