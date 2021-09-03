"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.RenderedLineItem = void 0;

var _jsInterpreter = _interopRequireDefault(require("js-interpreter"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class RenderedLineItem {
  constructor(lineItems, product, method, catalog) {
    this._lineItem = lineItems;
    this._product = product;
    this._method = method;
    this._catalog = catalog;
  }

  get uuid() {
    return this._lineItem.uuid;
  }

  get quantity() {
    return this._lineItem.quantity;
  }

  get catalog() {
    return this._catalog;
  }

  get method() {
    return this._method;
  }

  get product() {
    return this._product;
  }

  get size() {
    return this._product.getSizeByUuid(this._lineItem.size);
  }

  get selections() {
    const selections = this._lineItem.selections;
    const finalSelections = [];

    for (const key in selections) {
      finalSelections.push({
        selection: this._product.getSelectionByUuid(key),
        option: this._product.getSelectionByUuid(key).getOptionByUuid(selections[key])
      });
    }

    return finalSelections;
  }

  get upgrades() {
    return this._lineItem.upgrades.map(uuid => this._catalog.getUpgradeByUuid(uuid));
  }

  get price() {
    // Custom Pricing Prototype
    if (this.product.custom && this.product.properties.priceCalculation) {
      let response = 0;

      const initFunc = (interpreter, globalObject) => {
        interpreter.setProperty(globalObject, 'PRODUCT', interpreter.nativeToPseudo(this.product.toPlainObject()));
        interpreter.setProperty(globalObject, 'CATALOG', interpreter.nativeToPseudo(this.catalog.toPlainObject()));
        interpreter.setProperty(globalObject, 'LINE_ITEM', interpreter.nativeToPseudo(this._lineItem.toPlainObject()));
        interpreter.setProperty(globalObject, 'UPGRADES', interpreter.nativeToPseudo(this.upgrades.map(u => u.toPlainObject())));

        const wrapper = d => response = d;

        interpreter.setProperty(globalObject, 'ret', interpreter.createNativeFunction(wrapper));
      };

      console.log(this.product.properties.priceCalculation);
      const jsSandbox = new _jsInterpreter.default(this.product.properties.priceCalculation, initFunc);
      jsSandbox.run();
      return response;
    }

    var sum = 0;
    var sizePrice = this._product.getSizeByUuid(this._lineItem.size).getPriceByMethod(this._method.method).amount || 0;
    sum += sizePrice;
    const selections = this._lineItem.selections;
    var selectionPrice = 0;

    for (const s in selections) {
      selectionPrice += this._product.getSelectionByUuid(s).getOptionByUuid(selections[s]).getPriceByMethod(this._method.method).amount || 0;
    }

    sum += selectionPrice;
    const upgrades = this._lineItem.upgrades;
    var upgradesPrice = 0;

    for (const u of upgrades) {
      upgradesPrice += this._catalog.getUpgradeByUuid(u).getPriceByMethod(this._method.method).amount || 0;
    }

    sum += upgradesPrice;
    return sum * this.quantity;
  }

  toPlainObject() {
    return {
      product: this._lineItem.product,
      size: this._product.getSizeByUuid(this._lineItem.size),
      selections: this.selections,
      upgrades: this.upgrades
    };
  }

}

exports.RenderedLineItem = RenderedLineItem;