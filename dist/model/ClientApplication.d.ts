/**
 * ClientApplication Model
 * @category Models
 * @class
 */
export class ClientApplication {
    /**
    * @typedef {ClientApplication & {_plain?: true}} ClientApplicationLike
    */
    /**
     * Model constructor
     * @param {ClientApplicationLike} data
     */
    constructor(data: ClientApplication & {
        _plain?: true;
    });
    /**
     * @private
     */
    private _data;
    /**
     * The client application's identifier.
     * @type {String}
     */
    get clientId(): string;
    /**
     * The client application's display name.
     * @type {String}
     */
    get displayName(): string;
    /**
     * The redirect URIs.
     * @type {Array<String>}
     */
    get redirectUris(): string[];
    /**
     * The date this entity was created.
     * @type {String}
     */
    get createdOn(): string;
    /**
     * The date this entity was last modified.
     * @type {String}
     */
    get updatedOn(): string;
    toPlainObject(): {
        clientId: any;
        displayName: any;
        redirectUris: any;
        createdOn: any;
        updatedOn: any;
    };
}
