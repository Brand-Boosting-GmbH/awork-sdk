"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Location = void 0;

var _uuid = require("../util/uuid");

var _Media = require("./Media");

class Location {
  constructor(data) {
    this._data = data || {};
    this._data.general = this._data.general || {};
    this._data.openingHours = this._data.openingHours || [];
    this._data.media = this._data.media || [];

    if (!this._data.uuid) {
      this._data.uuid = (0, _uuid.v4)();
    }

    if (!this._data.openingHours.uuid) {
      this._data.openingHours.uuid = (0, _uuid.v4)();
    }
  }

  get uuid() {
    return this._data.uuid;
  }

  get general() {
    return this._data.general;
  }

  set general(val) {
    this._data.general = val;
  }

  get generalStatus() {
    return this._data.general.status;
  }

  set generalStatus(val) {
    this._data.general.status = val;
  }

  get generalTitle() {
    return this._data.general.title;
  }

  set generalTitle(val) {
    this._data.general.title = val;
  }

  get generalCity() {
    return this._data.general.city;
  }

  set generalCity(val) {
    this._data.general.city = val;
  }

  get generalZip() {
    return this._data.general.zip;
  }

  set generalZip(val) {
    this._data.general.zip = val;
  }

  get generalStreet() {
    return this.general.street;
  }

  set generalStreet(val) {
    this._data.general.street = val;
  }

  get generalStreetnum() {
    return this._data.general.streetnum;
  }

  set generalStreetnum(val) {
    this._data.general.streetnum = val;
  }

  get minOrderValue() {
    return this._data.general.minOrderValue;
  }

  set minOrderValue(val) {
    this._data.general.minOrderValue = val;
  }

  get openingHours() {
    //toTest ->
    return this._data.openingHours;
  }

  set openingHours(val) {
    this._data.openingHours = val;

    this._data.openingHours.sort(({
      day: x,
      from: [a, b]
    }, {
      day: y,
      from: [c, d]
    }) => x * 10000 + (a * 60 + b) - (y * 10000 + (c * 60 + d)));
  }

  get media() {
    return this._data.media.map(p => new _Media.Media(p));
  }

  set media(val) {
    this._data.media = val;
  }

  get active() {
    return this._data.active;
  }

  set active(val) {
    this._data.active = val;
  }

  addMedia(val) {
    this._data.media.push(new _Media.Media(val).toPlainObject());

    return this._data.media[this._data.media.lenght - 1];
  }

  removeMedia(uuid) {
    var removeIndex = this._data.media.findIndex(x => x.uuid === uuid);

    if (removeIndex != -1) {
      this._data.media.splice(removeIndex, 1);
    }
  }

  addOpeningHours(day, starthour, startminute, endhour, endminute) {
    this._data.openingHours.push({
      day,
      from: [starthour, startminute],
      to: [endhour, endminute]
    });

    this._data.openingHours.sort(({
      day: x,
      from: [a, b]
    }, {
      day: y,
      from: [c, d]
    }) => x * 10000 + (a * 60 + b) - (y * 10000 + (c * 60 + d)));
  }

  removeOpeningHours(val) {
    if (val != -1) {
      this._data.openingHours.splice(val, 1);
    }
  }

  toPlainObject() {
    return {
      uuid: this._data.uuid,
      general: {
        status: this._data.general.status,
        title: this._data.general.title,
        city: this._data.general.city,
        zip: this._data.general.zip,
        street: this._data.general.street,
        streetnum: this._data.general.streetnum,
        minOrderValue: this._data.general.minOrderValue
      },
      openingHours: this._data.openingHours,
      media: this._data.media,
      active: this._data.active
    };
  }

}

exports.Location = Location;