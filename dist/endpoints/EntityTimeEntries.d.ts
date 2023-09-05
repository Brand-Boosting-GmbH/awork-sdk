/**
 * Class corresponding to Aworks EntityTimeEntries Endpoints
 * @category Endpoints
 * @see [EntityTimeEntries in Awork API Docs](https://openapi.awork.com/#/EntityTimeEntries)
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
    /**
     * Gets the summed up tracked time duration for all projects and tasks.
     * @returns {Promise<Array<EntityTimeEntry>>}
     */
    list(): Promise<Array<EntityTimeEntry>>;
    /**
     * The entityName parameter defines the main entity of which to fetch the time entries.
     * @returns {Promise<Array<TimeEntry>>}
     */
    timeEntries(): Promise<Array<TimeEntry>>;
}
import { EntityTimeEntry } from "../model/EntityTimeEntry";
import { TimeEntry } from "../model/TimeEntry";
