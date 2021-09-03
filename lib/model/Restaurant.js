"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Restaurant = void 0;

var _Media = require("./Media");

var _Location = require("./Location");

var _Catalog = require("./Catalog");

var _Order = require("./Order");

var _ReactiveOrder = require("./ReactiveOrder");

var _PaypalSettings = require("./PaypalSettings");

var _OrderList = require("../util/OrderList");

var _MailTemplate = require("./MailTemplate");

var _axios = _interopRequireDefault(require("axios"));

var _RenderedOrder = require("../util/RenderedOrder");

var _Discount = require("./Discount");

var _App = require("../app/App");

var _RenderedApp = require("../app/RenderedApp");

var _DiscountList = require("../util/DiscountList");

var _MessageList = require("../util/MessageList");

var _MetafieldDefinitionList = require("../util/MetafieldDefinitionList");

var _RenderedOrderList = require("../util/RenderedOrderList");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * @typedef {import('./Catalog').Catalog} Catalog
 */
class Restaurant {
  constructor(snap) {
    this._snap = snap;
    this._ref = snap.ref;
    this._data = snap.exists ? snap.data() || {} : {};
    this._data.uuid = this._ref.id;
    this._data.general = this._data.general || {};
    this._data.header = this._data.header || {};
    this._data.footer = this._data.footer || {};
    this._data.style = this._data.style || {};
    this._data.swatches = this._data.swatches || [];
    this._data.locations = this._data.locations || [];
    this._data.general.media = this._data.general.media || [];
    this._data.header.media = this._data.header.media || [];
    this._data.chat = this._data.chat || {};
    this._data.topMessage = this._data.topMessage || '';
    this._data.bottomMessage = this._data.bottomMessage || '';
    this._data.apps = this._data.apps || [];
  }

  get uuid() {
    return this._data.uuid;
  }

  get style() {
    return this._data.style;
  }

  set style(val) {
    this._data.style = val;
  }

  get swatches() {
    return this._data.swatches;
  }

  set swatches(val) {
    this._data.swatches = val;
  }

  get generalTitle() {
    return this._data.general.title;
  }

  set generalTitle(val) {
    this._data.general.title = val;
  }

  get generalDescription() {
    return this._data.general.description;
  }

  set generalDescription(val) {
    this._data.general.description = val;
  }

  get generalMedia() {
    return this._data.general.media.map(p => new _Media.Media(p));
  }

  set generalMedia(val) {
    this._data.general.media = val;
  }

  addGeneralMedia(val) {
    this._data.general.media.push(new _Media.Media(val).toPlainObject());

    return this._data.general.media[this._data.general.media.length - 1];
  }

  removeGeneralMedia(uuid) {
    var removeIndex = this._data.general.media.findIndex(x => x.uuid === uuid);

    if (removeIndex != -1) {
      this._data.general.media.splice(removeIndex, 1);
    }
  }

  get headerTitle() {
    return this._data.header.title;
  }

  set headerTitle(val) {
    this._data.header.title = val;
  }

  get headerDescription() {
    return this._data.header.description;
  }

  set headerDescription(val) {
    this._data.header.description = val;
  }

  get headerMedia() {
    return this._data.header.media.map(p => new _Media.Media(p));
  }

  set headerMedia(val) {
    this._data.header.media = val;
  }

  get footerImp() {
    return this._data.footer.imp;
  }

  set footerImp(val) {
    this._data.footer.imp = val;
  }

  get footerDatasec() {
    return this._data.footer.datasec;
  }

  set footerDatasec(val) {
    this._data.footer.datasec = val;
  }

  get footerAgb() {
    return this._data.footer.agb;
  }

  set footerAgb(val) {
    this._data.footer.agb = val;
  }

  get footerTel() {
    return this._data.footer.tel;
  }

  set footerTel(val) {
    this._data.footer.tel = val;
  }

  get footerMail() {
    return this._data.footer.mail;
  }

  set footerMail(val) {
    this._data.footer.mail = val;
  }

  addHeaderMedia(val) {
    this._data.header.media.push(new _Media.Media(val).toPlainObject());

    return this._data.header.media[this._data.header.media.length - 1];
  }
  /**
   * Remove Headermedia
   * @param {String} uuid
   */


  removeHeaderMedia(uuid) {
    var removeIndex = this._data.header.media.findIndex(x => x.uuid === uuid);

    if (removeIndex != -1) {
      this._data.header.media.splice(removeIndex, 1);
    }
  }

  get chatMessage1() {
    return this._data.chat.message1;
  }

  set chatMessage1(val) {
    this._data.chat.message1 = val;
  }

  get chatMessage2() {
    return this._data.chat.message2;
  }

  set chatMessage2(val) {
    this._data.chat.message2 = val;
  }

  get chatMessage3() {
    return this._data.chat.message3;
  }

  set chatMessage3(val) {
    this._data.chat.message3 = val;
  }

  get chatMessage4() {
    return this._data.chat.message4;
  }

  set chatMessage4(val) {
    this._data.chat.message4 = val;
  }

  get chatMessage5() {
    return this._data.chat.message5;
  }

  set chatMessage5(val) {
    this._data.chat.message5 = val;
  }

  get chatMessage6() {
    return this._data.chat.message6;
  }

  set chatMessage6(val) {
    this._data.chat.message6 = val;
  }

  get topMessage() {
    return this._data.topMessage;
  }

  set topMessage(val) {
    this._data.topMessage = val;
  }

  get bottomMessage() {
    return this._data.bottomMessage;
  }

  set bottomMessage(val) {
    this._data.bottomMessage = val;
  }

  get locations() {
    return this._data.locations.map(l => new _Location.Location(l));
  }

  set locations(val) {
    this._data.locations = val;
  }

  get apps() {
    return this._data.apps.map(app => new _App.App(app));
  }

  set apps(val) {
    this._data.apps = val;
  }

  get discountActive() {
    return this._data.discountActive;
  }

  set discountActive(val) {
    this._data.discountActive = val;
  }

  get deliveryActive() {
    return this._data.deliveryActive;
  }

  set deliveryActive(val) {
    this._data.deliveryActive = val;
  }

  getApp(pkg) {
    return this.apps.find(app => app.package === pkg);
  }

  getRenderedApp(pkg) {
    return new _RenderedApp.RenderedApp(this.getApp(pkg), this);
  }
  /**
   * Add a Location 
   * @param {Object} val
   * @return {Object} 
   */


  addLocation(val) {
    this._data.locations.push(new _Location.Location(val).toPlainObject());

    return this._data.locations[this._data.locations.lenght - 1];
  }
  /**
   * Remove a Location 
   * @param {String} uuid
   */


  removeLocation(uuid) {
    var removeIndex = this._data.locations.findIndex(x => x.uuid === uuid);

    if (removeIndex != -1) {
      this._data.locations.splice(removeIndex, 1);
    }
  }

  async getPaypalSettings() {
    return new _PaypalSettings.PaypalSettings(await this._snap.ref.collection('data').doc('paypal').get());
  }
  /**
   * Get MailTemplate from uuid
   * @param {String} uuid 
   * @returns {MailTemplate}
   */


  async getMailTemplate(uuid) {
    return new _MailTemplate.MailTemplate(await this._snap.ref.collection('mailtemplates').doc(uuid).get());
  }
  /**
   * ?
   * @returns {Promise<Order>}
   */


  async getOrder(uuid) {
    return new _Order.Order((await _axios.default.get('https://delivery-boosting-2021-model.web.app/getOrder', {
      params: {
        restaurant: this.uuid,
        order: uuid
      }
    })).data); // return new Order((await this._ref.collection('orders').doc(uuid).get()).data())
  }
  /**
   * call the getDiscount lambda function and awaits a new Discount Promise
   * @param {String} code of the Discount
   * @returns {Promise<Discount>}
   */


  async getDiscount(code) {
    return new _Discount.Discount((await _axios.default.get('https://delivery-boosting-2021-model.web.app/getDiscount', {
      params: {
        restaurant: this.uuid,
        code: code
      }
    })).data);
  }
  /**
   * Returns an ready-to-use rendered order by uuid, 
   * fetches the corresponding catalog
   * @param {String} uuid Order uuid 
   * @returns {Promise<RenderedOrder>}
   */


  async getRenderedOrder(uuid) {
    const order = await this.getOrder(uuid);
    const catalog = await this.getCatalog(order.catalog);
    return new _RenderedOrder.RenderedOrder(order, catalog);
  }

  async getReactiveRenderedOrder(uuid) {
    const reactiveOrder = new _ReactiveOrder.ReactiveOrder(await this._ref.collection('orders').doc(uuid).get());
    const catalog = await this.getCatalog(reactiveOrder.catalog);
    return new _RenderedOrder.RenderedOrder(reactiveOrder, catalog);
  }
  /**
   * ?
   */


  async createOrder(order) {
    await _axios.default.post('https://delivery-boosting-2021-model.web.app/createOrder', { ...order.toPlainObject()
    }, {
      params: {
        restaurant: this.uuid
      }
    }); //await this._ref.collection('orders').doc(order.uuid).set(order.toPlainObject())
  }
  /**
   * ?
   */


  async payOrder(orderUuid) {
    const response = await _axios.default.get('https://delivery-boosting-2021-model.web.app/payOrder', {
      params: {
        restaurant: this.uuid,
        order: orderUuid
      }
    });
    return response.data;
  }
  /*
  async getOrders() {
      await this._ref.collection('orders').get().docs.map(doc => doc.data());
  }*/

  /**
   * Set a custom state with a time to a specific order
   * @param {Object} order 
   * @param {Date} time
   * @param {String} state
   */


  async updateOrderTime(order, time, state) {
    await this._ref.collection('orders').doc(order.uuid).set({
      finishedTime: time,
      state: state
    }, {
      merge: true
    });
  }
  /**
   * Set a custom state to a specific order
   * @param {Object} order
   * @param {String} state
   */


  async updateOrderState(order, state) {
    await this._ref.collection('orders').doc(order.uuid).set({
      state: state
    }, {
      merge: true
    });
  }
  /**
   * Gets all available Discount objects in a DiscountList
   * @returns {Promise<DiscountList>}
   */


  async getDiscountList() {
    return new _DiscountList.DiscountList(await this._ref.collection('discount'));
  }
  /**
   * Gets all available MetafieldDefinition objects in a MetafieldDefinitionList
   * @returns {MetafieldDefinitionList}
   */


  async getMetafieldDefinitionList() {
    return new _MetafieldDefinitionList.MetafieldDefinitionList(await this._ref.collection('metafieldDefinitions'));
  }
  /**
   * Gets Catalog by Uuid, or if uuid is commited the latest catalog.
   * @param {String} uuid 
   * @return {Promise<Catalog>}
   */


  async getCatalog(uuid = '__latest__') {
    if (uuid == '__latest__') {
      return new _Catalog.Catalog((await this._ref.collection('catalogs').orderBy('publishedAt', 'desc').limit(1).get()).docs[0] || (await this._ref.collection('catalogs').doc('_first_').get()));
    }

    return new _Catalog.Catalog(await this._ref.collection('catalogs').doc(uuid).get());
  }
  /**
   * Gets OrderList of orders which are not in Draft- or Archived-State.
   * @return {Promise<OrderList>}
   */


  async getOrderList() {
    return new _OrderList.OrderList(await this._ref.collection('orders').where('state', 'not-in', ['DRAFT', 'ARCHIVED']).orderBy('state').get());
  }

  async getRenderedOrderList() {
    return new _RenderedOrderList.RenderedOrderList(await this.getOrderList(), this);
  }
  /**
   * Returns an Array of all existing orders based on a specific location.
   * @param {String} locationUuid
   * @return {Promise<OrderList>}
   */


  async getAllOrders(locationUuid) {
    return new _OrderList.OrderList(await this._ref.collection('orders').where('location', '==', locationUuid).orderBy('postedAt', 'desc').get());
  }

  async getCSV(startDate, endDate, locationUuid) {
    return await _axios.default.get(`https://delivery-boosting-2021-model.web.app/CSVOrders/?restaurantUuid=${this.uuid}&startDate=${startDate}&endDate=${endDate}&locationUuid=${locationUuid}`, {
      headers: {
        authorization: `Bearer ${await auth.currentUser.getIdToken()}`
      }
    });
  }

  async getMessageList(orderUuid) {
    return new _MessageList.MessageList(this._ref.collection('orders').doc(orderUuid).collection('messages'));
  }

  async commit() {
    await this._ref.set(this.toPlainObject());
  }

  toPlainObject() {
    return {
      uuid: this._data.uuid,
      style: this._data.style,
      swatches: this._data.swatches,
      apps: this._data.apps,
      general: {
        title: this._data.general.title,
        description: this._data.general.description,
        media: this._data.general.media
      },
      header: {
        title: this._data.header.title,
        description: this._data.header.description,
        media: this._data.header.media
      },
      footer: {
        imp: this._data.footer.imp,
        datasec: this._data.footer.datasec,
        agb: this._data.footer.agb,
        tel: this._data.footer.tel,
        mail: this._data.footer.mail
      },
      locations: this._data.locations,
      chat: {
        message1: this._data.chat.message1,
        message2: this._data.chat.message2,
        message3: this._data.chat.message3,
        message4: this._data.chat.message4,
        message5: this._data.chat.message5,
        message6: this._data.chat.message6
      },
      topMessage: this._data.topMessage,
      bottomMessage: this._data.bottomMessage,
      discountActive: this._data.discountActive,
      deliveryActive: this._data.deliveryActive
    };
  }

}

exports.Restaurant = Restaurant;