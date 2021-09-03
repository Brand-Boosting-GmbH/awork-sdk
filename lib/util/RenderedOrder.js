"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.RenderedOrder = void 0;

var _RenderedLineItem = require("./RenderedLineItem");

var _RenderedMethod = require("./RenderedMethod");

class RenderedOrder {
  constructor(order, catalog) {
    this._order = order;
    this._catalog = catalog;
  }

  get uuid() {
    return this._order.uuid;
  }
  /**
   * Human-Radable Name for reference
   * @type {String}
   */


  get name() {
    return this._order.name;
  }

  get shop() {//Todo
  }

  get catalog() {
    return this._catalog;
  }

  get createdAt() {
    return this._order.createdAt;
  }

  get location() {
    return this._order.location;
  }

  get finishedTime() {
    return this._order.finishedTime;
  }

  get paymentMethod() {
    return this._order.paymentMethod;
  }
  /**
   * Backwards Compatible implementation of a {@link RenderedMethod} Class.
   * {@link RenderedOrder.method.method} and {@link RenderedOrder.method.selections} return compatible values
   */


  get method() {
    return new _RenderedMethod.RenderedMethod(this.catalog.getMethodByUuid(this._order.methodUuid), this._order.methodSelections);
  }

  get timeType() {
    return this._order.timeType;
  }

  get timeWish() {
    return this._order.timeWish;
  }

  get postedAt() {
    return this._order.postedAt;
  }

  get deliveryTime() {
    return this._order.deliveryTime;
  }

  get lineItems() {
    return this._order.lineItems.map(x => new _RenderedLineItem.RenderedLineItem(x, this._catalog.products.find(prod => prod.uuid === x.product), this.method, this._catalog));
  }

  get discounts() {
    return this._order.discounts;
  }

  get state() {
    return this._order.state;
  }

  get shipping() {
    return this._order.shipping;
  }

  get extraWish() {
    return this._order.extraWish;
  }

  get subTotal() {
    var totalPrice = 0;

    for (const x of this.lineItems) {
      totalPrice += x.price;
    }

    return totalPrice;
  }

  get methodTotal() {
    if (this._catalog.getMethodByUuid(this.method.method).priceAmount) {
      if (this._catalog.getMethodByUuid(this.method.method).maxValue) {
        if (this.subTotal < this._catalog.getMethodByUuid(this.method.method).maxValue) {
          return this._catalog.getMethodByUuid(this.method.method).priceAmount;
        }
      } else {
        return this._catalog.getMethodByUuid(this.method.method).priceAmount;
      }
    }

    return 0;
  }

  get newDiscountTotal() {
    const applicableDiscounts = this.discounts.filter(d => typeof d.minValue === 'undefined' || this.subTotal >= d.minValue);
    const generalDiscounts = applicableDiscounts.filter(d => d.specificationType === 'GENERAL');
    const productDiscounts = applicableDiscounts.filter(d => d.specificationType === 'PRODUCT');
    const categoryDiscounts = applicableDiscounts.filter(d => d.specificationType === 'CATEGORY');
    let total = 0;

    for (const lineItem of this.lineItems) {
      let lineItemPrice = lineItem.price;
      const relevantDiscounts = [...productDiscounts.filter(d => d.specificationId === lineItem.product.uuid), ...categoryDiscounts.filter(d => this.catalog.getCategoryByUuid(d.specificationId).products.includes(lineItem.product.uuid))];
      const relevantPercentageDiscounts = relevantDiscounts.filter(d => d.type === 'PERCENTAGE');
      const relevantAmountDiscounts = relevantDiscounts.filter(d => d.type === 'AMOUNT');

      for (const discount of relevantPercentageDiscounts) {
        lineItemPrice *= 1 - discount.value / 100;
      }

      for (const discount of relevantAmountDiscounts) {
        lineItemPrice -= discount.value;
      }

      total += lineItemPrice > 0 ? lineItemPrice : 0;
    }

    const relevantPercentageDiscounts = generalDiscounts.filter(d => d.type === 'PERCENTAGE');
    const relevantAmountDiscounts = generalDiscounts.filter(d => d.type === 'AMOUNT');

    for (const discount of relevantPercentageDiscounts) {
      total *= 1 - discount.value / 100;
    }

    for (const discount of relevantAmountDiscounts) {
      total -= discount.value;
    }

    total = total > 0 ? total : 0;
    return total - this.subTotal;
  }

  get oldDiscountTotal() {
    var totalPrice = 0;

    if (typeof this.discounts === 'undefined' || (this.discounts.length = 0)) {
      var discount = this.discounts[0];

      if ((discount.specification || {}).type === 'GENERAL') {
        for (const x of this.lineItems) {
          totalPrice += x.price;
        }

        if (discount.type === 'PERCENTAGE') {
          totalPrice *= discount.value / 100;
        } else if (discount.type === 'AMOUNT') {
          totalPrice -= discount.value;
        }
      } else if ((discount.specification || {}).type === 'PRODUCT') {
        for (const x of this.lineItems) {
          if (x.uuid === discount.specification.id) {
            if (discount.type === 'PERCENTAGE') {
              totalPrice += discount.value / 100 * x.price;
            } else if (discount.type === 'AMOUNT') {
              totalPrice += x.price - discount.value;
            }
          } else {
            totalPrice += x.price;
          }
        }
      } else if ((discount.specification || {}).type === 'CATEGORY') {
        var allDiscountProducts = this.catalog.categories.find(c => c.uuid === discount.specification.id).products;

        for (const x of this.lineItems) {
          if (allDiscountProducts.includes(x.uuid)) {
            if (discount.type === 'PERCENTAGE') {
              totalPrice += discount.value / 100 * x.price;
            } else if (discount.type === 'AMOUNT') {
              totalPrice += x.price - discount.value;
            }
          } else {
            totalPrice += x.price;
          }
        }
      }

      return totalPrice;
    }
  }

  get total() {
    var totalPrice = 0;
    totalPrice += this.subTotal;
    totalPrice += this.newDiscountTotal;
    totalPrice += this.methodTotal;
    return totalPrice;
  }
  /**
   * @deprecated use {@link RenderedOrder.total} instead
   */


  get orderPrice() {
    return this.total;
  }

  toPlainObject() {
    return {
      uuid: this._order.uuid,
      shop: '',
      //Todo,
      catalog: this._catalog,
      createdAt: this._order.createdAt,
      location: this._order.location,
      finishedTime: this._order.finishedTime,
      paymentMethods: this._order.paymentMethods,
      method: this.method,
      lineItems: this.lineItems,
      discount: this.discount,
      timeType: this.timeType,
      //timed or now
      timeWish: this.timeWish,
      //Liefertermin vom Kunde ausgewählt
      postedAt: this.postedAt,
      deliveryTime: this.deliveryTime,
      //tatsächlicher Liefertermin 
      state: this.state,
      shipping: this.shipping,
      extraWish: this.extraWish
    };
  }

}

exports.RenderedOrder = RenderedOrder;