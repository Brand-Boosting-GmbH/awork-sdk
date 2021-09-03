"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MessageList = void 0;

var _Message = require("../model/Message");

class MessageList {
  constructor(ref) {
    this._ref = ref;
    this._messages = [];

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
    this._messages = snap.docs.map(doc => doc.data());
  }

  get messages() {
    return this._messages.map(o => new _Message.Message(o));
  }

  set messages(val) {
    this._messages = val;
  }
  /**
   * 
   * @param {Message} msg 
   */


  async addMessage(msg) {
    await this._ref.add(msg.toPlainObject());
  }

}

exports.MessageList = MessageList;