import '../globalTypedef'
import { EntityTimeEntry } from "../model/EntityTimeEntry"
import { TimeEntry } from "../model/TimeEntry"

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
    constructor(client) {
        /** @private */
        this._client = client
        /** @private */
        this._entityName = entityName
        /** @private */
        this._entityId = entityId
    }

    /**
     * Gets the summed up tracked time duration for specified projects and tasks.
     * @returns {Promise<EntityTimeEntry>}
     */
    async get() {
        const response = await this._client.get(`/${this._entityName}/${this._entityId}/trackedtime`)
        const data = response.data()
        return new EntityTimeEntry(data)
    }

    /**
     * Gets the summed up tracked time duration for all projects and tasks.
     * @returns {Promise<Array<EntityTimeEntry>>}
     */
    async list() {
        const response = await this._client.get(`${this._userPrefix}/otherprivatetasks/${this._taskId}/subtasks`, options)
        const data = response.data()
        return data.map(d => new EntityTimeEntry(d))
    }

    /**
     * The entityName parameter defines the main entity of which to fetch the time entries.
     * @returns {Promise<Array<TimeEntry>>}
     */
    async timeEntries() {
        const response = await this._client.get(`${this._userPrefix}/otherprivatetasks/${this._taskId}/subtasks`, options)
        const data = response.data()
        return data.map(d => new TimeEntry(d))
    }
}