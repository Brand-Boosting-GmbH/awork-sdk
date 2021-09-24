/**
 * Class corresponding to the Member part of Aworks Projects Endpoint
 * @category Endpoints
 * @see [Projects in Awork API Docs](https://openapi.awork.io/#/Projects)
 */
export class ProjectMembers {
    constructor(client: any, projectId: any);
    /**
     * @private
     */
    private _client;
    /**
     * @private
     */
    private _projectId;
    /**
     * Returns specific project members from the project.
     *
     * The user needs 'read' permissions of feature 'project-master-data'.
     * @param {String} userId The id of the user
     * @returns {Promise<ProjectMember>}
     */
    get(userId: string): Promise<ProjectMember>;
    /**
     * Returns the project members from the project.
     *
     * The user needs 'read' permissions of feature 'project-master-data'.
     * @param {import('../global').ListOptions} [options] Pagination and filtering options
     * @returns {Promise<Array<ProjectMember>>}
     */
    list(options?: import('../global').ListOptions): Promise<Array<ProjectMember>>;
    /**
     * @typedef {Object} ProjectMemberCreateModel The model to add the project member.
     * @property {String} userId The id of the member. Required.
     * @property {String} projectRoleId The id of the project role for this member. Required.
     * @property {Boolean} isResponsible Whether the user should be marked as responsible. Required.
     */
    /**
     * Adds a project member to the project with the specified id. The new project member can also be set as a responsible project member,
     * but only if no other member of this project is responsible.
     *
     * It is necessary that the project role is available in this project otherwise the member cannot be added.
     * A project role is available when they are connected to the specified project type of the project.
     * A user can only be added to the project once.
     * The user needs 'manage' permissions of feature 'project-master-data'.
     * @param {ProjectMemberCreateModel} projectMember
     * @returns {Promise<ProjectMember>}
     */
    create(projectMember: {
        /**
         * The id of the member. Required.
         */
        userId: string;
        /**
         * The id of the project role for this member. Required.
         */
        projectRoleId: string;
        /**
         * Whether the user should be marked as responsible. Required.
         */
        isResponsible: boolean;
    }): Promise<ProjectMember>;
    /**
     * @typedef {Object} ProjectMemberUpdateModel The model to update the project member.
     * @property {String} projectRoleId The id of the project role for this member. Required.
     * @property {Boolean} isResponsible Whether the user should be marked as responsible. Required.
     */
    /**
     * Changes the role of a project member. The project member can also be set as a responsible project member,
     * but only if no other member of this project is responsible. It is necessary that the project role is available
     * in this project otherwise the member cannot be updated. A project role is available when they are connected to the
     * specified project type of the project.
     *
     * The user needs 'manage' permissions of feature 'project-master-data'.
     * @param {ProjectMemberUpdateModel} projectMember
     * @returns {Promise<ProjectMember>}
     */
    update(userId: any, projectMember: {
        /**
         * The id of the project role for this member. Required.
         */
        projectRoleId: string;
        /**
         * Whether the user should be marked as responsible. Required.
         */
        isResponsible: boolean;
    }): Promise<ProjectMember>;
    /**
     * Removes a project member from the project with the specified id.
     *
     * The user needs 'manage' permissions of feature 'project-master-data'.
     * @param {String} projectMemberId The id of the user to remove from the project.
     * @returns {Promise<void>}
     */
    delete(projectMemberId: string): Promise<void>;
}
import { ProjectMember } from "../model/ProjectMember";
