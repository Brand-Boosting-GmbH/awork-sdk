/**
 * Class corresponding to Aworks Absences Endpoints
 * @category Endpoints
 * @see [Absences in Awork API Docs](https://openapi.awork.com/#/Absences)
 */
export class Absences {
    /**
     * Endpoint constructor
     * @param {import('../client/index').Client} client
     */
    constructor(client: import('../client/index').Client);
    /**
     * @private
     */
    private _client;
    /**
     * Returns the absence with the specified id.
     * @param {String} absenceId The id of the absence to get.
     * @returns {Promise<Absence>}
     */
    get(absenceId: string): Promise<Absence>;
    /**
     * Returns all absences of all users.
     * @param {import('../global').ListOptions} [options] Pagination and filtering options
     * @returns {Promise<Array<Absence>>}
     */
    list(options?: import('../global').ListOptions): Promise<Array<Absence>>;
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
    create(absence: {
        /**
         * The id of the user that created the absence.
         */
        userId: string;
        /**
         * The start time of the absence.
         */
        startOn: string;
        /**
         * The end time of the absence.
         */
        endOn: string;
    }): Promise<Absence>;
    /**
     * @typedef {AbsenceCreateModel} AbsenceUpdateModel
     */
    /**
     * Updates the absence with the specified id. The startOn of the model always gets set to 00:00:00 and the endOn gets set to 23:59:59 both in UTC. The end date needs to be the same or after the start date.
     * @param {String} absenceId The id of the absence to update.
     * @param {AbsenceUpdateModel} absence
     * @returns {Promise<Absence>}
     */
    update(absenceId: string, absence: {
        /**
         * The id of the user that created the absence.
         */
        userId: string;
        /**
         * The start time of the absence.
         */
        startOn: string;
        /**
         * The end time of the absence.
         */
        endOn: string;
    }): Promise<Absence>;
    /**
     * Deletes the absence with the specified id.
     * @param {String} absenceId The id of the absence to delete.
     * @returns {Promise<void>}
     */
    delete(absenceId: string): Promise<void>;
}
import { Absence } from "../model/Absence";
