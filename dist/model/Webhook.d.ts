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
    constructor(data: Webhook & {
        _plain?: true;
    });
    /** @private*/
    private _data;
    /**
     * The name of this webhook event. Required.
     * @type {String} nullable
     */
    get name(): string;
    /**
     * The URI to call. Required.
     * @type {String} nullable
     */
    get uri(): string;
    /**
     * The language of the web hook message that will be sent to the receiver. Not required for custom web hooks.
     * @type {String} nullable
     */
    get language(): string;
    /**
     * The event(s) that trigger the web hook. A comma-seperated list of events, for example 'user_added, user_deleted'. Required.
     */
    get events(): any;
    /**
     * Whether the web hook is currently active. Required.
     * @type {Boolean} nullable
     */
    get isActive(): boolean;
    /**
     * The authentication type to use when calling the URI. Can be 'none', 'header'. Required.
     * @type {String} nullable
     */
    get authenticationType(): string;
    /**
     * The authentication value to use when calling the URI. Should be 'key=value'. In case of header, this should be 'headername=headervalue'. Only required when the AuthenticationType is anything other than 'none'.
     * @type {String} nullable
     */
    get authentication(): string;
    /**
     * The id of the webhook config.
     * @type {String} uuid
     */
    get id(): string;
    /**
     * The type of the web hook. Can be 'custom', 'slack'.
     * @type {String} nullable
     */
    get receiverType(): string;
    /**
     * The most recent failure reason.
     * @type {String} nullable
     */
    get lastFailureReason(): string;
    /**
     * The date this webhook config was created.
     * @type {String} date-time
     */
    get createdOn(): string;
    /**
     * The id of the user who created this webhook config.
     * @type {String} uuid
     */
    get createdBy(): string;
    /**
     * The date this webhook was last modified.
     * @type {String} date-time
     */
    get updatedOn(): string;
    /**
     * The id of the user who last modified this webhook config.
     * @type {String} uuid
     */
    get updatedBy(): string;
    toPlainObject(): {
        name: string;
        uri: string;
        language: string;
        events: any;
        isActive: boolean;
        authentication: string;
        authenticationType: string;
        id: string;
        receiverType: string;
        lastFailureReason: string;
        createdOn: string;
        createdBy: string;
        updatedOn: string;
        updatedBy: string;
    };
}
