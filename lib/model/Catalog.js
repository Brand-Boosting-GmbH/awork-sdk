"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Catalog = void 0;

var _Category = require("./Category");

var _Method = require("./Method");

var _Product = require("./Product");

var _Additive = require("./Additive");

var _uuid = require("../util/uuid");

var _DataBaseConnection = require("../controller/DataBaseConnection");

var _Upgrade = require("./Upgrade");

var _MetafieldDefinition = require("./MetafieldDefinition");

class Catalog {
  constructor(snap) {
    this._snap = snap;
    this._ref = snap.ref;
    this._data = snap.exists ? snap.data() || {} : {};
    this._data.uuid = snap.id;
    this._data.products = this._data.products || [];
    this._data.categories = this._data.categories || [];
    this._data.methods = this._data.methods || [];
    this._data.additives = this._data.additives || [];
    this._data.upgrades = this._data.upgrades || [];
    this._data.paymentMethods = this._data.paymentMethods || [];
    this._data.metafieldDefinitions = this._data.metafieldDefinitions || [];
  }
  /**
   * unique identifier 
   * @type {String}
   */


  get uuid() {
    return this._data.uuid;
  }
  /**
   * timestamp for the commit of the object
   * @type {Date}
   */


  get publishedAt() {
    return this._data.publishedAt;
  }

  set publishedAt(val) {
    this._data.publishedAt = val;
  }
  /**
   * idk bcs not used yet
   */


  get paymentMethods() {
    return this._data.paymentMethods;
  }

  set paymentMethods(val) {
    this._data.paymentMethods = val;
  }
  /**
   * defines a 'pickup' or 'delivery' Method object with an upcharge 
   * and other price values for the object
   * @type {Object}
   */


  get methods() {
    return this._data.methods.map(p => new _Method.Method(p));
  }

  set methods(val) {
    this._data.methods = val;
  }
  /**
   * function for adding a Method object to the object
   * @param {Object} val 
   * @returns the added Method
   */


  addMethod(val) {
    this._data.methods.push(new _Method.Method(val).toPlainObject());

    return this._data.methods[this._data.methods.length - 1];
  }
  /**
   * function for removing a Method array with the identifier 'pick-up' or 'delivery'
   * @param {String} uuid 
   */


  removeMethod(uuid) {
    var removeIndex = this._data.methods.findIndex(ind => ind.uuid === uuid);

    if (removeIndex != -1) {
      this._data.methods.splice(removeIndex, 1);
    }
  }
  /**
   * function for retrieving the Method object with the identifier 'pick-up' or 'delivery'
   * @param {String} uuid 
   * @returns the requested Method object
   */


  getMethodByUuid(uuid) {
    return new _Method.Method(this._data.methods.find(ind => ind.uuid === uuid));
  }
  /** 
   * function to check if the identifier 'pick-up' or 'delivery' 
   * has an existing Method object for this catalog
   * @param {String} uuid 
   * @returns the requested Method object
   */


  checkMethodByUuid(uuid) {
    return this._data.methods.find(ind => ind.uuid === uuid);
  }
  /**
   * defines a list of upgrades for this catalog
   * @type {Object}
   */


  get upgrades() {
    return this._data.upgrades.map(a => new _Upgrade.Upgrade(a));
  }

  set upgrades(val) {
    this._data.upgrades = val;
  }
  /**
   * function for adding Upgrade objects to the list of Upgrades
   * @param {Object} val 
   */


  addUpgrade(val) {
    this._data.upgrades.push(new _Upgrade.Upgrade(val).toPlainObject());
  }
  /**
   * function for removing an Upgrade object from the list of Upgrades
   * with a unique identifier
   * @param {String} uuid 
   */


  removeUpgrade(uuid) {
    var removeIndex = this._data.upgrades.findIndex(ind => ind.uuid === uuid);

    if (removeIndex != -1) {
      this._data.upgrades.splice(removeIndex, 1);
    }
  }
  /**
   * function to check if the unique identifier
   * has an existing Upgrade object for this catalog
   * @param {String} uuid 
   * @returns the requested Upgrade object
   */


  getUpgradeByUuid(uuid) {
    return this.upgrades.find(a => a.uuid === uuid);
  }
  /**
   * creates a new array of multiple Upgrade objects from the list of Upgrades
   * filtered by multiple unique identifiers
   * @param {Array} uuids 
   * @returns a mapped array of the requested Upgrade objects 
   */


  getUpgrades(uuids = []) {
    return uuids.map(uuid => this.upgrades.find(p => p.uuid === uuid)).filter(p => typeof p !== 'undefined');
  }

  get additives() {
    return this._data.additives.map(a => new _Additive.Additive(a));
  }

  set additives(val) {
    this._data.additives = val;
  }

  addAdditive(val) {
    this._data.additives.push(new _Additive.Additive(val).toPlainObject());
  }

  removeAdditive(uuid) {
    var removeIndex = this._data.additives.findIndex(ind => ind.uuid === uuid);

    if (removeIndex != -1) {
      this._data.additives.splice(removeIndex, 1);
    }
  }

  getAdditiveByUuid(uuid) {
    return this.additives.find(a => a.uuid === uuid);
  }

  get products() {
    return this._data.products.map(data => new _Product.Product(data));
  }

  set products(val) {
    this._data.products = val;
  }

  getAllProductsTitle() {
    return this._data.products.map(data => new _Product.Product(data)).title;
  }

  getProducts(uuids = []) {
    return uuids.map(uuid => this.products.find(p => p.uuid === uuid)).filter(p => typeof p !== 'undefined');
  }

  addProduct(val) {
    this._data.products.push(new _Product.Product(val).toPlainObject());

    return this._data.products[this._data.products.length - 1];
  }

  removeProduct(uuid) {
    const removeIndex = this._data.products.findIndex(ind => ind.uuid === uuid);

    this.categories.forEach(category => category.products = category.products.filter(p => p.uuid !== uuid));

    if (removeIndex != -1) {
      this._data.products.splice(removeIndex, 1);
    }
  }

  getProductByUuid(uuid) {
    return this.products.find(ind => ind.uuid === uuid);
  }

  get metafieldDefinitions() {
    return this._data.metafieldDefinitions.map(data => new _MetafieldDefinition.MetafieldDefinition(data));
  }

  set metafieldDefinitions(val) {
    this._data.metafieldDefinitions = val;
  }

  addMetafieldDefinition(val) {
    this._data.metafieldDefinitions.push(new _MetafieldDefinition.MetafieldDefinition(val).toPlainObject());

    return this._data.metafieldDefinitions[this._data.metafieldDefinitions.length - 1];
  }

  removeMetafieldDefinition(uuid) {
    const removeIndex = this._data.metafieldDefinitions.findIndex(ind => ind.uuid === uuid);

    if (removeIndex != -1) {
      this._data.metafieldDefinitions.splice(removeIndex, 1);
    }
  }

  getMetafieldDefinitionsByUuid(uuid) {
    return this.metafieldDefinitions.find(ind => ind.uuid === uuid);
  }

  get categories() {
    return this._data.categories.map(p => new _Category.Category(p));
  }

  set categories(val) {
    this._data.categories = val;
  }

  getCategoryByUuid(uuid) {
    return this.categories.filter(c => c.uuid === uuid)[0] || undefined;
  }

  addCategory(val) {
    this._data.categories.push(new _Category.Category(val).toPlainObject());

    return this._data.categories[this._data.categories.length - 1];
  }

  removeCategory(uuid) {
    const removeIndex = this._data.categories.findIndex(ind => ind.uuid === uuid);

    if (removeIndex != -1) {
      this._data.categories.splice(removeIndex, 1);
    }
  }
  /**
   * Commits the changes to the databse, will give Catalog new uuid and timestamp
   */


  async commit() {
    this._data.uuid = (0, _uuid.v4)();
    this._ref = this._ref.parent.doc(this.uuid);
    this._data.publishedAt = _DataBaseConnection.DataBaseConnection.FieldValue.serverTimestamp();
    await this._ref.set(this.toPlainObject());
    this._snap = await this._ref.get();
    this._data = this._snap.data();
  }

  toPlainObject() {
    return {
      uuid: this._data.uuid,
      publishedAt: this._data.publishedAt,
      paymentMethods: this._data.paymentMethods,
      methods: this._data.methods,
      products: this._data.products,
      categories: this._data.categories,
      upgrades: this._data.upgrades,
      additives: this._data.additives,
      metafieldDefinitions: this._data.metafieldDefinitions
    };
  }

}

exports.Catalog = Catalog;