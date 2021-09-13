import '../globalTypedef'
import { Absence } from "../model/Absence"

/**
 * Class corresponding to Aworks Absences Endpoints
 * @category Endpoints
 * @see [Absences in Awork API Docs](https://openapi.awork.io/#/Absences)
 */
export class Absences {

    /**
     * Endpoint constructor
     * @param {import('../client/index').Client} client 
     */
     constructor(client) {
        /**
         * @private
         */
        this._client = client
    }

    /**
     * Returns the absence with the specified id.
     * @param {String} absenceId The id of the absence to get.
     * @returns {Promise<Absence>}
     */
    async get(absenceId) {
        const response = await this._client.get(`/absences/${absenceId}`)
        const data = response.data()
        return new Absence(data)
    }

    /**
     * Returns all absences of all users.
     * @param {ListOptions} [options] Pagination and filtering options
     * @returns {Promise<Array<Absence>>}
     */
    async list(options) {
        const response = await this._client.get('/absences', options)
        const data = response.data()
        return data.map(d => new Absence(d))
    }

    /**
     * @typedef {Object} AbsenceCreateModel
     * @property {String} userId The id of the user that created the absence.
     * @property {String} startOn The start time of the absence.
     * @property {String} endOn The end time of the absence.
     */

    /**
     * Creates a new absence. The startOn of the model always gets set to 00:00:00 and the endOn gets set to 23:59:59 both in UTC. The end date needs to be the same or after the start date.
     * @param {AbsenceCreateModel} absence 
     * @returns {Promise<Absence>}
     */
    async create(absence) {
        const response = await this._client.post('/absences', absence)
        const data = response.data()
        return new Absence(data)
    }

    /**
     * @typedef {AbsenceCreateModel} AbsenceUpdateModel
     */

    /**
     * Updates the absence with the specified id. The startOn of the model always gets set to 00:00:00 and the endOn gets set to 23:59:59 both in UTC. The end date needs to be the same or after the start date.
     * @param {String} absenceId The id of the absence to update.
     * @param {AbsenceUpdateModel} absence 
     * @returns {Promise<Absence>}
     */
    async update(absenceId, absence) {
        const response = await this._client.put(`/absences/${absenceId}`, absence)
        const data = response.data()
        return new Absence(data)
    }

    /**
     * Deletes the absence with the specified id.
     * @param {String} absenceId The id of the absence to delete.
     * @returns {Promise<void>}
     */
    async delete(absenceId) {
        await this._client.delete(`/absences/${absenceId}`)
    }
}