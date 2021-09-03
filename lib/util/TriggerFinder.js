"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TriggerFinder = void 0;

var _MailTemplate = require("../model/MailTemplate");

/**
 * Util Helping to Find Data related to triggers.
 * @class 
 */
class TriggerFinder {
  constructor(restaurant) {
    this._restaurantRef = restaurant._ref;
  }

  async getMailTemplatesByTrigger(trigger) {
    const mailTemplates = await this._restaurantRef.collection('mailtemplates').where('trigger', '==', trigger).where('active', '==', true).get();
    return mailtemplates.docs.map(mailTemplate => new _MailTemplate.MailTemplate(mailTemplate));
  }

}

exports.TriggerFinder = TriggerFinder;