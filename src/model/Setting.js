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
    constructor(data) {
        /** @private*/
        this._data = data
    }

    /**
     * Type of the setting. 
     * @type {String}
     */
    get type () {
        return this._data.type
    }

    /**
     * Wheter the setting is enabled.
     * @type {boolean}
     */
    get enabled () {
        return this._data.enabled
    }

    /**
     * The id of the workspace.
     * @type {string} uuid
     */
    get workspaceId () {
        return this._data.workspaceId
    }

    toPlainObject() {
        return {
            type: this._data.type,
            enabled: this._data.enabled,
            workspaceId: this._data.workspaceId
        }
    }
}