/**
 * Setting Model
 * @category Models
 * @class
 */
export class Setting {
    /**
     * @typedef {Setting & {_plain?: true}} SettingLike
     */
    /**
     * Model constructor
     * @param {SettingLike} data
     */
    constructor(data: Setting & {
        _plain?: true;
    });
    /** @private*/
    private _data;
    /**
     * Type of the setting.
     * @type {String}
     */
    get type(): string;
    /**
     * Wheter the setting is enabled.
     * @type {boolean}
     */
    get enabled(): boolean;
    /**
     * The id of the workspace.
     * @type {string} uuid
     */
    get workspaceId(): string;
    toPlainObject(): {
        type: string;
        enabled: boolean;
        workspaceId: string;
    };
}
