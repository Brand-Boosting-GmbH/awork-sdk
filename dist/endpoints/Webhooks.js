"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Webhooks = void 0;

require("../globalTypedef");

var _Webhook = require("../model/Webhook");

/**
 * Class corresponding to Aworks Webhooks Endpoints
 * @category Endpoints
 * @see [Webhooks in Awork API Docs](https://openapi.awork.com/#/Webhooks)
 */
class Webhooks {
  /**
   * Endpoint constructor
   * @param {import('../client/index').Client} client 
   */
  constructor(client) {
    /** @private*/
    this._client = client;
  }
  /**
   * Returns the webhook with the specified id.
   * @param {String} webhookId The id of the webhook.
   * @returns {Promise<WebHook>}
   */


  async get(webhookId) {
    const response = await this._client.get(`/webhooks/${webhookId}`);
    const data = response.data();
    return new _Webhook.Webhook(data);
  }
  /**
   * Returns all configured webhooks of the workspace.
   * @param {import('../global').ListOptions} [options] Pagination and filtering options.
   * @returns {Promise<Array<Webhook>>}
   */


  async list(options) {
    const response = await this._client.get(`/webhooks`, options);
    const data = response.data();
    return data.map(d => new _Webhook.Webhook(d));
  }
  /**
   * @typedef {Object} WebhookCreateModel
   * @property {String} name The name of this webhook event. Required.
   * @property {String} uri The URI to call. Required.
   * @property {String} [language] The language of the web hook message that will be sent to the receiver. Not required for custom web hooks.
   * @property {String} events The event(s) that trigger the web hook. A comma-separated list of events, for example 'user_added,user_deleted'. Required.
   * @property {Boolean} isArchived Whether the web hook is currently active. Required.
   * @property {String} authenticationType The authentication type to use when calling the URI. Can be 'none', 'header'. Required.
   * @property {String} [authentication] The authentication value to use when calling the URI. Should be 'key=value'. In case of header, this should be 'headername=headervalue'. Only required when the AuthenticationType is anything other than 'none'.
   */

  /**
   * Creates a new webhook. The receiver type is inferred from the URI. All unknown receivers are treated as 'custom'.
   * @param {WebhookCreateModel} webhook The model to create a webhook.
   * @returns {Promise<Webhook>}
   */


  async create(webhook) {
    const response = await this._client.post('/webhooks', webhook);
    const data = response.data();
    return new _Webhook.Webhook(data);
  }
  /**
   * Updates the webhook with the specified id.
   * @param {String} webhookId The id of the webhook.
   * @param {WebhookUpdateModel} webhook The model to update a webhook.
   * @returns {Promise<Webhook>}
   */


  async update(webhookId, webhook) {
    const response = await this._client.post(`/webhooks/${webhookId}`, webhook);
    const data = response.data();
    return new _Webhook.Webhook(data);
  }
  /**
   * Deletes the webhook with the specified id.
   * @param {String} webhookId The id of the webhook. 
   * @returns {Promise<void>}
   */


  async delete(webhookId) {
    await this._client.delete(`/webhooks/${webhookId}`);
  }
  /**
   * Returns all available event types for generic webhooks in Awork.
   * @returns {Promise<Array<String>>}
   */


  async eventTypes() {
    const response = await this._client.get('/webhooks/eventtypes');
    return response.data();
  }
  /**
   * Returns all available event types for Slack webhooks in Awork.
   * @returns {Promise<Array<String>>}
   */


  async slackEventTypes() {
    const response = await this._client.get('/webhooks/eventtypes/slack');
    return response.data();
  }
  /**
   * Returns all logs of the webhook with the specified id.
   * @param {String} webhookId The id of the webhook.
   * @returns {Promise<Array<String>>}
   */


  async logs(webhookId) {
    const response = await this._client.get(`/webhooks/${webhookId}/logs`);
    return response.data();
  }

}

exports.Webhooks = Webhooks;