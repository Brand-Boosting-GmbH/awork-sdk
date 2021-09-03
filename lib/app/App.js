"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.App = void 0;

var _AppSection = require("./AppSection");

var _AppLambda = require("./AppLambda");

var _AppPriceScript = require("./AppPriceScript");

var _AppSetting = require("./AppSetting");

/**
 * Class represents an 3rd party app
 * @class
 * @param {Object} data plain object representation of the data
 */
const App = class App {
  constructor(data) {
    this._data = data || {};
    this._data.sections = this._data.sections || [];
    this._data.sections = this._data.sections || [];
    this._data.sections = this._data.sections || [];
    this._data.sections = this._data.sections || [];
  }
  /**
   * unique identifier 
   * @type {String}
   */


  get package() {
    return this._data.package;
  }
  /**
   * human readable title of app
   * @type {String}
   */


  get label() {
    return this._data.label;
  }

  set label(val) {
    this._data.label = val;
  }
  /**
   * human readable description of the app
   * @type {String}
   */


  get description() {
    return this._data.description;
  }

  set description(val) {
    this._data.description = val;
  }

  get author() {
    return this._data.author;
  }

  set author(val) {
    this._data.author = val;
  }

  get version() {
    return this._data.version;
  }

  set version(val) {
    this._data.version = val;
  }

  get sections() {
    return this._data.sections.map(obj => new _AppSection.AppSection(obj));
  }

  set sections(val) {
    this._data.sections = val;
  }

  get lambdas() {
    return this._data.lambdas.map(obj => new _AppLambda.AppLambda(obj));
  }

  set lambdas(val) {
    this._data.lambdas = val;
  }

  get priceScripts() {
    return this._data.priceScripts.map(obj => new _AppPriceScript.AppPriceScript(obj));
  }

  set priceScripts(val) {
    this._data.priceScripts = val;
  }

  get settings() {
    return this._data.settings.map(obj => new _AppSetting.AppSetting(obj));
  }

  set settings(val) {
    this._data.settings = val;
  }
  /**
   * Method used to convert the Object into a plain Object representation
   * of the data used for storing and transfering
   * @returns {Object} 
   */


  toPlainObject() {
    return {
      package: this.package,
      label: this.label,
      description: this.description,
      author: this.author,
      version: this.version,
      sections: this.sections,
      lambdas: this.lambdas,
      priceScripts: this.priceScripts,
      settings: this.settings
    };
  }

};
exports.App = App;