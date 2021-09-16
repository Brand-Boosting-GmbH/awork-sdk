/**
 * Class corresponding to Aworks Webhooks Endpoints
 * @category Endpoints
 * @see [Webhooks in Awork API Docs](https://openapi.awork.io/#/Webhooks)
 */
export class Webhooks {
    /**
     * Endpoint constructor
     * @param {import('../client/index').Client} client
     */
    constructor(client: import('../client/index').Client);
    /** @private*/
    private _client;
    /**
     * Returns the webhook with the specified id.
     * @param {String} webhookId The id of the webhook.
     * @returns {Promise<WebHook>}
     */
    get(webhookId: string): Promise<any>;
    /**
     * Returns all configured webhooks of the workspace.
     * @param {ListOptions} [options] Pagination and filtering options.
     * @returns {Promise<Array<Webhook>>}
     */
    list(options?: ListOptions): Promise<Array<Webhook>>;
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
    create(webhook: {
        /**
         * The name of this webhook event. Required.
         */
        name: string;
        /**
         * The URI to call. Required.
         */
        uri: string;
        /**
         * The language of the web hook message that will be sent to the receiver. Not required for custom web hooks.
         */
        language?: string;
        /**
         * The event(s) that trigger the web hook. A comma-separated list of events, for example 'user_added,user_deleted'. Required.
         */
        events: string;
        /**
         * Whether the web hook is currently active. Required.
         */
        isArchived: boolean;
        /**
         * The authentication type to use when calling the URI. Can be 'none', 'header'. Required.
         */
        authenticationType: string;
        /**
         * The authentication value to use when calling the URI. Should be 'key=value'. In case of header, this should be 'headername=headervalue'. Only required when the AuthenticationType is anything other than 'none'.
         */
        authentication?: string;
    }): Promise<Webhook>;
    /**
     * Updates the webhook with the specified id.
     * @param {String} webhookId The id of the webhook.
     * @param {WebhookUpdateModel} webhook The model to update a webhook.
     * @returns {Promise<Webhook>}
     */
    update(webhookId: string, webhook: any): Promise<Webhook>;
    /**
     * Deletes the webhook with the specified id.
     * @param {String} webhookId The id of the webhook.
     * @returns {Promise<void>}
     */
    delete(webhookId: string): Promise<void>;
    /**
     * Returns all available event types for generic webhooks in Awork.
     * @returns {Promise<Array<String>>}
     */
    eventTypes(): Promise<Array<string>>;
    /**
     * Returns all available event types for Slack webhooks in Awork.
     * @returns {Promise<Array<String>>}
     */
    slackEventTypes(): Promise<Array<string>>;
    /**
     * Returns all logs of the webhook with the specified id.
     * @param {String} webhookId The id of the webhook.
     * @returns {Promise<Array<String>>}
     */
    logs(webhookId: string): Promise<Array<string>>;
}
import { Webhook } from "../model/Webhook";
