/**
 * Class corresponding to Aworks EntityTimeEntries Endpoints
 * @category Endpoints
 * @see [EntityTimeEntries in Awork API Docs](https://openapi.awork.io/#/EntityTimeEntries)
 */
export class EntityTimeEntries {
    /**
     * Endpoint constructor
     * @param {import('../client/index').Client} client
     * @param {('projects'|'tasks')} entityName
     * @param {String} entityId
     */
    constructor(client: import('../client/index').Client);
    /** @private */
    private _client;
    /** @private */
    private _entityName;
    /** @private */
    private _entityId;
    /**
     * Gets the summed up tracked time duration for specified projects and tasks.
     * @returns {Promise<EntityTimeEntry>}
     */
    get(): Promise<EntityTimeEntry>;
}
import { EntityTimeEntry } from "../model/EntityTimeEntry";
