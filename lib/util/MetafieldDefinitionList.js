"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MetafieldDefinitionList = void 0;

var _MetafieldDefinition = require("../model/MetafieldDefinition");

class MetafieldDefinitionList {
  constructor(ref) {
    this._ref = ref;
    this._metafieldDefinitions = [];

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
    this._metafieldDefinitions = snap.docs.map(doc => doc.data());
  }

  get metafieldDefinitions() {
    return this._metafieldDefinitions.map(o => new _MetafieldDefinition.MetafieldDefinition(o));
  }

  set metafieldDefinitions(val) {
    this._metafieldDefinitions = val;
  }
  /**
   * adds another MetafieldDefinition object to the restaurant
   * @param {MetafieldDefinition} def 
   */


  async addMetafieldDefinition(def) {
    await this._ref.doc(def.toPlainObject().key).set(def.toPlainObject());
  }
  /**
   * updates an existing MetafieldDefinition object in the restaurant
   * @param {MetafieldDefinition} def 
   */


  async updateMetafieldDefinition(def) {
    await this._ref.doc(def.toPlainObject().key).set(def.toPlainObject(), {
      merge: true
    });
  }
  /**
   * Removes the MetafieldDefinition doc with the specified key
   * @param {String} key 
   */


  async removeMetafieldDefinition(key) {
    await this._ref.doc(key).delete();
  }

}

exports.MetafieldDefinitionList = MetafieldDefinitionList;