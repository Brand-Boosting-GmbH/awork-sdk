/**
 * Webhook Model
 * @category Models
 * @class
 */
export class Webhook {
    /**
     * @typedef {Webhook & {_plain?: true}} WebhookLike
     */

    /**
     * Model constructor
     * @param {WebhookLike} data 
     */
    constructor(data) {
        /** @private*/
        this._data = data
    }

    /**
     * The name of this webhook event. Required.
     * @type {String} nullable
     */
    get name () {
        return this._data.name
    }

    /**
     * The URI to call. Required.
     * @type {String} nullable
     */
    get uri () {
        return this._data.uri
    }

    /**
     * The language of the web hook message that will be sent to the receiver. Not required for custom web hooks.
     * @type {String} nullable
     */
    get language () {
        return this._data.language
    }

    /**
     * The event(s) that trigger the web hook. A comma-seperated list of events, for example 'user_added, user_deleted'. Required.
     */
    get events () {
        return this._data.events
    }

    /**
     * Whether the web hook is currently active. Required.
     * @type {Boolean} nullable
     */
    get isActive () {
        return this._data.isActive
    }

    /**
     * The authentication type to use when calling the URI. Can be 'none', 'header'. Required.
     * @type {String} nullable
     */
    get authenticationType () {
        return this._data.authenticationType
    }

    /**
     * The authentication value to use when calling the URI. Should be 'key=value'. In case of header, this should be 'headername=headervalue'. Only required when the AuthenticationType is anything other than 'none'.
     * @type {String} nullable
     */
    get authentication () {
        return this._data.authentication
    }

    /**
     * The id of the webhook config.
     * @type {String} uuid
     */
    get id () {
        return this._data.id
    }

    /**
     * The type of the web hook. Can be 'custom', 'slack'.
     * @type {String} nullable
     */
    get receiverType () {
        return this._data.receiverType
    }

    /**
     * The most recent failure reason.
     * @type {String} nullable
     */
    get lastFailureReason () {
        return this._data.lastFailureReason
    }

    /**
     * The date this webhook config was created.
     * @type {String} date-time 
     */
    get createdOn () {
        return this._data.createdOn
    }

    /**
     * The id of the user who created this webhook config.
     * @type {String} uuid
     */
    get createdBy () {
        return this._data.createdBy
    }

    /**
     * The date this webhook was last modified.
     * @type {String} date-time
     */
    get updatedOn () {
        return this._data.updatedOn
    }

    /**
     * The id of the user who last modified this webhook config.
     * @type {String} uuid
     */
    get updatedBy () {
        return this._data.updatedBy
    }

    toPlainObject() {
        return {
            name: this._data.name,
            uri: this._data.uri,
            language: this._data.language,
            events: this._data.events,
            isActive: this._data.isActive,
            authentication: this._data.authentication,
            authenticationType: this._data.authenticationType,
            id: this._data.id,
            receiverType: this._data.receiverType,
            lastFailureReason: this._data.lastFailureReason,
            createdOn: this._data.createdOn,
            createdBy: this._data.createdBy,
            updatedOn: this._data.updatedOn,
            updatedBy: this._data.updatedBy
        }
    }
}