"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Shipping = void 0;

class Shipping {
  constructor(data) {
    this._data = data || {};
  }

  get city() {
    return this._data.city;
  }

  set city(val) {
    this._data.city = val;
  }

  get postalCode() {
    return this._data.postalCode;
  }

  set postalCode(val) {
    this._data.postalCode = val;
  }

  get street() {
    return this._data.street;
  }

  set street(val) {
    this._data.street = val;
  }

  get streetNumber() {
    return this._data.streetNumber;
  }

  set streetNumber(val) {
    this._data.streetNumber = val;
  }

  get firstName() {
    return this._data.firstName;
  }

  set firstName(val) {
    this._data.firstName = val;
  }

  get name() {
    return this._data.name;
  }

  set name(val) {
    this._data.name = val;
  }

  get lastName() {
    return this._data.name;
  }

  set lastName(val) {
    this._data.name = val;
  }

  get mail() {
    return this._data.mail;
  }

  set mail(val) {
    this._data.mail = val;
  }

  get phoneNumber() {
    return this._data.phoneNumber;
  }

  set phoneNumber(val) {
    this._data.phoneNumber = val;
  }

  get deliveryDate() {
    return this._data.deliveryDate;
  }

  set deliveryDate(val) {
    this._data.deliveryDate = val;
  }

  toPlainObject() {
    return {
      city: this._data.city,
      postalCode: this._data.postalCode,
      street: this._data.street,
      streetNumber: this._data.streetNumber,
      firstName: this._data.firstName,
      lastName: this._data.lastName,
      name: this._data.name,
      mail: this._data.mail,
      phoneNumber: this._data.phoneNumber,
      deliveryDate: this._data.deliveryDate
    };
  }

}

exports.Shipping = Shipping;