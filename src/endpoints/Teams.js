import '../globalTypedef'
import { Team } from "../model/Team"

/**
 * Class corresponding to Aworks Teams Endpoints
 * @category Endpoints
 * @see [Teams in Awork API Docs](https://openapi.awork.io/#/Teams)
 */
export class Teams {

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
     * @typedef {Object} TeamOptions
     * @property {Boolean} includeUserIds If the user ids should be included.
     * @property {Boolean} includeProjectIds If the project ids should be included.
     */

    /**
     * Returns the team with the specified id. Returns NotFound if the team doesn't exist.
     * @param {String} teamId The id of the team.
     * @param {TeamOptions} options
     * @returns {Promise<Team>}
     */
    async get(teamId, options) {
        const response = await this._client.get(`/teams/${teamId}`, options)
        const data = response.data()
        return new Team(data)
    }

    /**
     * Returns all teams for an admin. For everyone else just returns teams they are in. If the include query params aren't set or false, the specified collection property is null in the response. If the include param is true, but there are no entities in the collection, an empty collection is returned.
     * @param {ListOptions} [options] Pagination and filtering options
     * @returns {Promise<Array<Team>>}
     */
    async list(options) {
        const response = await this._client.get('/teams', options)
        const data = response.data()
        return data.map(d => new Team(d))
    }

    /**
     * @typedef {Object} TeamProperties
     * @property {String} name The team name.
     * @property {String} [icon] The team description. Optional.
     * @property {String} [color] The team type. Optional.
     */

    /**
     * Creates a new team. No validations are done for color and icon property, can be any string. Throws IllegalOperationException if team with the same name already exists.
     * @param {TeamProperties} team 
     * @returns {Promise<Team>}
     */
    async create(team) {
        const response = await this._client.post('/teams', team)
        const data = response.data()
        return new Team(data)
    }

    /**
     * Updates the team with the specified id. Only updates properties which are not null or whitespace.
     * @param {String} teamId 
     * @param {TeamProperties} team 
     * @returns {Promise<Team>}
     */
    async update(teamId, team) {
        const response = await this._client.put(`/teams/${teamId}`, team)
        const data = response.data()
        return new Team(data)
    }

    /**
     * Deletes the team with the specified id. Deletes all related UserInTeamEntities and ProjectInTeamEntities as well.
     * @param {String} teamId 
     * @returns {Promise<void>}
     */
    async delete(teamId) {
        await this._client.delete(`/teams/${teamId}`)
    }

    /**
     * @typedef {Object} UserTeamPair
     * @property {String} userId The id of the user.
     * @property {String} teamId The id of the team.
     */

    /**
     * Add users to a team. Returns the created user in team entities. Throws BadRequestException if user ids are null or empty. Throws IllegalOperationException if users fetched from ids failed, returned no users or misses a user from the userIds.
     * @param {String} teamId The team id.
     * @param {Array<String>} users the ids of the users to add.
     * @returns {Promise<Array<UserTeamPair>>}
     */
    async addUsers(teamId, users) {
        const response = await this._client.post(`/teams/${teamId}/addusers`, users)
        return response.data()
        // ???
    }

    /**
     * Removes users from a team.
     * @param {String} teamId 
     * @param {Array<String>} users 
     * @returns 
     */
    async removeUsers(teamId, users) {
        const response = await this._client.post(`/teams/${teamId}/removeusers`, users)
        return response.data()
        // ???
    }

        /**
     * @typedef {Object} ProjectTeamPair
     * @property {String} projectId The id of the project.
     * @property {String} teamId The id of the team.
     */

    /**
     * Add projects to a team. Returns the created project in team entities. Throws BadRequestException if project ids are null or empty. Throws IllegalOperationException if projects fetched from ids failed or returned no projects. Thrwos IllegalOperationException if projects are already connected to the team. Only creates the project in team entities for projects the user has 'write' permissions of feature 'project-master-data' for or is the owner.
     * @param {String} teamId
     * @param {Array<String>} projects 
     * @returns {Promise<Array<ProjectTeamPair>>}
     */
    async addProjects(teamId, projects) {
        const response = await this._client.post(`/teams/${teamId}/addprojects`, projects)
        return response.data()
    }

    /**
     * Removes projects from a team. Throws BadRequestException if project ids are null or empty. Throws BadRequestException if no project in teams could be found for supplied project ids. Validates the project ids by checking if entries exists for that project in the database.
     * @param {String} teamId 
     * @param {Array<String>} projects 
     * @returns 
     */
    async removeProjects(teamId, projects) {
        const response = await this._client.post(`/teams/${teamId}/removeprojects`, projects)
        return response.data()
    }
}