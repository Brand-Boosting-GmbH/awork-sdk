"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Product = void 0;

var _uuid = require("../util/uuid");

var _Availability = require("./Availability");

var _Media = require("./Media");

var _ProductSelection = require("./ProductSelection");

var _Size = require("./Size");

class Product {
  constructor(data) {
    this._data = data || {};
    this._data.custom = this._data.custom || false;
    this._data.media = this._data.media || [];
    this._data.sizes = this._data.sizes || [];
    this._data.properties = this._data.properties || {};
    this._data.metafields = this._data.metafields || {};
    this._data.selections = this._data.selections || [];
    this._data.upgrades = this._data.upgrades || [];
    this._data.additives = this._data.additives || [];
    this._data.availability = this._data.availability || {};

    if (!this._data.uuid) {
      this._data.uuid = (0, _uuid.v4)();
    }
  }

  get uuid() {
    return this._data.uuid;
  }

  get no() {
    return this._data.no;
  }

  get custom() {
    return this._data.custom;
  }

  set custom(val) {
    this._data.custom = val;
  }

  set no(val) {
    this._data.no = val;
  }

  get articleNumber() {
    return this._data.articleNumber;
  }

  set articleNumber(val) {
    this._data.articleNumber = val;
  }

  get title() {
    return this._data.title;
  }

  set title(val) {
    this._data.title = val;
  }

  get media() {
    return this._data.media.map(p => new _Media.Media(p));
  }

  set media(val) {
    this._data.media = val;
  }
  /**
   * Remove a Location 
   * @param {Object} val
   */


  addMedia(val) {
    this._data.media.push(new _Media.Media(val).toPlainObject());

    return this._data.media[this._data.media.length - 1];
  }
  /**
   * Remove a Media 
   * @param {String} uuid
   */


  removeMedia(uuid) {
    var removeIndex = this._data.media.findIndex(x => x.uuid === uuid);

    if (removeIndex != -1) {
      this._data.media.splice(removeIndex, 1);
    }
  }

  get properties() {
    return this._data.properties;
  }

  set properties(val) {
    this._data.properties = val;
  }

  get metafields() {
    return this._data.metafields;
  }

  set metafields(val) {
    this._data.metafields = val;
  }

  get description() {
    return this._data.description;
  }

  set description(val) {
    this._data.description = val;
  }

  get sizes() {
    return this._data.sizes.map(p => new _Size.Size(p));
  }

  set sizes(val) {
    this._data.sizes = val;
  }

  get defaultPrice() {
    if (this._data.sizes[0]) {
      return this._data.sizes[0].price[0].amount;
    }
  }
  /**
   * Add a Size
   * @param {Object} val
   */


  addSize(val) {
    this._data.sizes.push(new _Size.Size(val).toPlainObject());

    return this._data.sizes[this._data.sizes.length - 1];
  }
  /**
   * Remove a Size 
   * @param {String} uuid
   */


  removeSize(uuid) {
    var removeIndex = this._data.sizes.findIndex(x => x.uuid === uuid);

    if (removeIndex != -1) {
      this._data.sizes.splice(removeIndex, 1);
    }
  }
  /**
   * Get a SIze 
   * @param {String} uuid
   */


  getSizeByUuid(uuid) {
    return new _Size.Size(this._data.sizes.find(x => x.uuid === uuid));
  }

  get selections() {
    return this._data.selections.map(p => new _ProductSelection.ProductSelection(p));
  }

  set selections(val) {
    this._data.selections = val;
  }
  /**
   * Add a ProductSelection
   * @param {Object} val
   */


  addSelection(val) {
    this._data.selections.push(new _ProductSelection.ProductSelection(val).toPlainObject());

    return this._data.selections[this._data.selections.length - 1];
  }
  /**
   * Remove a ProductSelection 
   * @param {String} uuid
   */


  removeSelection(uuid) {
    var removeIndex = this._data.selections.findIndex(ind => ind.uuid === uuid);

    if (removeIndex != -1) {
      this._data.selections.splice(removeIndex, 1);
    }
  }
  /**
   * Get a ProductSelection
   * @param {String} uuid
   */


  getSelectionByUuid(uuid) {
    return new _ProductSelection.ProductSelection(this._data.selections.find(ind => ind.uuid === uuid));
  }

  get additives() {
    return this._data.additives;
  }

  set additives(val) {
    this._data.additives = val;
  }

  get upgrades() {
    return this._data.upgrades;
  }

  set upgrades(val) {
    this._data.upgrades = val;
  }

  get availability() {
    return new _Availability.Availability(this._data.availability);
  }

  set availability(val) {
    this._data.availability = val;
  }

  toPlainObject() {
    return {
      uuid: this._data.uuid,
      custom: this._data.custom,
      no: this._data.no,
      articleNumber: this._data.articleNumber,
      title: this._data.title,
      media: this._data.media,
      properties: this._data.properties,
      metafields: this._data.metafields,
      description: this._data.description,
      sizes: this._data.sizes,
      selections: this._data.selections,
      upgrades: this._data.upgrades,
      additives: this._data.additives,
      availability: this._data.availability
    };
  }

}

exports.Product = Product;