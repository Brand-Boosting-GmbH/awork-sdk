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
    constructor(client: import('../client/index').Client);
    /**
     * @private
     */
    private _client;
    /**
     * @typedef {Object} TeamOptions
     * @property {Boolean} includeUserIds If the user ids should be included.
     * @property {Boolean} includeProjectIds If the project ids should be included.
     */
    /**
     * Returns the team with the specified id. Returns NotFound if the team doesn't exist.
     * @param {String} teamId The id of the team.
     * @param {TeamOptions} [options] Options on how to display the team.
     * @returns {Promise<Team>}
     */
    get(teamId: string, options?: {
        /**
         * If the user ids should be included.
         */
        includeUserIds: boolean;
        /**
         * If the project ids should be included.
         */
        includeProjectIds: boolean;
    }): Promise<Team>;
    /**
     * Returns all teams for an admin. For everyone else just returns teams they are in. If the include query params aren't set or false, the specified collection property is null in the response. If the include param is true, but there are no entities in the collection, an empty collection is returned.
     * @param {import('../global').ListOptions} [options] Pagination and filtering options
     * @returns {Promise<Array<Team>>}
     */
    list(options?: import('../global').ListOptions): Promise<Array<Team>>;
    /**
     * @typedef {Object} TeamCreateModel
     * @property {String} name The team name.
     * @property {import('../global').Icon} [icon] The team icon. Optional.
     * @property {import('../global').Color} [color] The team color. Optional.
     */
    /**
     * Creates a new team. No validations are done for color and icon property, can be any string. Throws IllegalOperationException if team with the same name already exists.
     * @param {TeamCreateModel} team The model to create a team.
     * @returns {Promise<Team>}
     */
    create(team: {
        /**
         * The team name.
         */
        name: string;
        /**
         * The team icon. Optional.
         */
        icon?: import('../global').Icon;
        /**
         * The team color. Optional.
         */
        color?: import('../global').Color;
    }): Promise<Team>;
    /**
     * @typedef {TeamCreateModel} TeamUpdateModel
     */
    /**
     * Updates the team with the specified id. Only updates properties which are not null or whitespace.
     * @param {String} teamId The id of the team.
     * @param {TeamUpdateModel} team The model to update the team.
     * @returns {Promise<Team>}
     */
    update(teamId: string, team: {
        /**
         * The team name.
         */
        name: string;
        /**
         * The team icon. Optional.
         */
        icon?: import('../global').Icon;
        /**
         * The team color. Optional.
         */
        color?: import('../global').Color;
    }): Promise<Team>;
    /**
     * Deletes the team with the specified id. Deletes all related UserInTeamEntities and ProjectInTeamEntities as well.
     * @param {String} teamId The id of the team.
     * @returns {Promise<void>}
     */
    delete(teamId: string): Promise<void>;
    /**
     * @typedef {Object} UserTeamPair
     * @property {String} userId The id of the user.
     * @property {String} teamId The id of the team.
     */
    /**
     * Add users to a team. Returns the created user in team entities. Throws BadRequestException if user ids are null or empty. Throws IllegalOperationException if users fetched from ids failed, returned no users or misses a user from the userIds.
     * @param {String} teamId The team id.
     * @param {Array<String>} userIds the ids of the users to add.
     * @returns {Promise<Array<UserTeamPair>>}
     */
    addUsers(teamId: string, userIds: Array<string>): Promise<{
        /**
         * The id of the user.
         */
        userId: string;
        /**
         * The id of the team.
         */
        teamId: string;
    }[]>;
    /**
     * Removes users from a team.
     * @param {String} teamId The team id.
     * @param {Array<String>} userIds the ids of the users to remove.
     * @returns {Promise<void>}
     */
    removeUsers(teamId: string, userIds: Array<string>): Promise<void>;
    /**
     * @typedef {Object} ProjectTeamPair
     * @property {String} projectId The id of the project.
     * @property {String} teamId The id of the team.
     */
    /**
     * Add projects to a team. Returns the created project in team entities. Throws BadRequestException if project ids are null or empty. Throws IllegalOperationException if projects fetched from ids failed or returned no projects. Thrwos IllegalOperationException if projects are already connected to the team. Only creates the project in team entities for projects the user has 'write' permissions of feature 'project-master-data' for or is the owner.
     * @param {String} teamId The team id.
     * @param {Array<String>} projectIds The project Ids to add.
     * @returns {Promise<Array<ProjectTeamPair>>}
     */
    addProjects(teamId: string, projectIds: Array<string>): Promise<{
        /**
         * The id of the project.
         */
        projectId: string;
        /**
         * The id of the team.
         */
        teamId: string;
    }[]>;
    /**
     * Removes projects from a team. Throws BadRequestException if project ids are null or empty. Throws BadRequestException if no project in teams could be found for supplied project ids. Validates the project ids by checking if entries exists for that project in the database.
     * @param {String} teamId The team id.
     * @param {Array<String>} projectIds The project Ids to remove.
     * @returns {Promise<void>}
     */
    removeProjects(teamId: string, projectIds: Array<string>): Promise<void>;
}
import { Team } from "../model/Team";
