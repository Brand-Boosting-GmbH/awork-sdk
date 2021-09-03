"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.RenderedApp = void 0;

var _AppSection = require("./AppSection");

var _AppLambda = require("./AppLambda");

var _AppPriceScript = require("./AppPriceScript");

var _AppSetting = require("./AppSetting");

var _axios = _interopRequireDefault(require("axios"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Class represents an 3rd party app
 * @class
 * @param {Object} data plain object representation of the data
 */
const RenderedApp = class RenderedApp {
  constructor(app, restaurant) {
    this._app = app || {};
    this._restaurant = restaurant || {};
  }
  /**
   * unique identifier 
   * @type {String}
   */


  get package() {
    return this._app.package;
  }
  /**
   * human readable title of app
   * @type {String}
   */


  get label() {
    return this._app.label;
  }
  /**
   * human readable description of the app
   * @type {String}
   */


  get description() {
    return this._app.description;
  }

  get author() {
    return this._app.author;
  }

  get version() {
    return this._app.version;
  }

  get sections() {
    return this._app.sections;
  }

  get lambdas() {
    return this._app.lambdas.reduce((acc, l) => ({
      [l.name]: async context => await this._callLambda(l.name, context),
      ...acc
    }), {});
  }

  get priceScripts() {
    return this._app.priceScripts;
  }

  get settings() {
    return this._app.settings;
  }

  async _callLambda(lambdaName, context) {
    const response = await _axios.default.post('https://delivery-boosting-2021-model.web.app/callLambda', {
      app: this._app.package,
      restaurant: this._restaurant.uuid,
      lambda: lambdaName,
      context: context
    }, {
      params: {}
    });
    return response.data.data;
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
exports.RenderedApp = RenderedApp;