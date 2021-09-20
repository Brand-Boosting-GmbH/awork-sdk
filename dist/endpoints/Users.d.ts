/**
 * Class corresponding to Aworks Users Endpoints
 * @category Endpoints
 * @see [Users in Awork API Docs](https://openapi.awork.io/#/Users)
 */
export class Users {
    /**
     * Endpoint constructor
     * @param {import('../client/index').Client} client
     */
    constructor(client: import('../client/index').Client);
    /** @private */
    private _client;
    /** @private */
    private _userPrefix;
    /**
     * Returns the user with the specified id.
     * @returns {Promise<User>}
     */
    get(): Promise<User>;
    /**
     * Returns all users with their details like status, contact info and more. Returns all users if the user has read permissions on the feature user-master-data, otherwise returns only his own user. Archived users are excluded by default. You can include them by setting the 'showArchived' query parameter. If the permissions have UserTeamsData Feature, the filter for teams is applied. Beware that this will also include API users in the response.
     * @param {ListOptions} [options] Pagination and filtering options
     * @param {Boolean} [showArchived] Include archived users in the results. Not required. False by default.
     * @returns {Promise<Array<User>>}
     */
    list(options?: ListOptions, showArchived?: boolean): Promise<Array<User>>;
    /**
     * @typedef {Object} UserCreateModel
     * @property {String} [firstName] The firstname of the user.
     * @property {String} [lastName] The lastname of the user.
     * @property {String} [birthDate] The birthdate of the user.
     * @property {String} [gender] The gender of the user.
     * @property {String} [title] The title of the user.
     * @property {String} [position] The position of the user.
     * @property {String} [language] The language preference of the user in ISO 639-1 format.
     * @property {Integer} [capacityPerWeek] The capacity of the user per week in seconds.
     * @property {String} [accountId] The account id of the user.
     */
    /**
     * Creates a new user. The user's key is assigned automatically and can be changed later.
     * @param {UserCreateModel} userCreateModel The model to create a user.
     * @returns {Promise<User>}
     */
    create(userCreateModel: {
        /**
         * The firstname of the user.
         */
        firstName?: string;
        /**
         * The lastname of the user.
         */
        lastName?: string;
        /**
         * The birthdate of the user.
         */
        birthDate?: string;
        /**
         * The gender of the user.
         */
        gender?: string;
        /**
         * The title of the user.
         */
        title?: string;
        /**
         * The position of the user.
         */
        position?: string;
        /**
         * The language preference of the user in ISO 639-1 format.
         */
        language?: string;
        /**
         * The capacity of the user per week in seconds.
         */
        capacityPerWeek?: any;
        /**
         * The account id of the user.
         */
        accountId?: string;
    }): Promise<User>;
    /**
     * @typedef {Object} UserUpdateModel
     * @property {String} [firstName] The firstname of the user.
     * @property {String} [lastName] The lastname of the user.
     * @property {String} [birthDate] The birthdate of the user.
     * @property {String} [gender] The gender of the user.
     * @property {String} [title] The title of the user.
     * @property {String} [position] The position of the user.
     * @property {String} [language] The language preference of the user in ISO 639-1 format.
     * @property {Integer} [capacityPerWeek] The capacity of the user per week in seconds.
     */
    /**
     * Updates the user with the specified id.
     * @param {String} userId The id of the user.
     * @param {UserUpdateModel} userUpdateModel The model to update a user.
     * @returns {Promise<User>}
     */
    update(userId: string, userUpdateModel: {
        /**
         * The firstname of the user.
         */
        firstName?: string;
        /**
         * The lastname of the user.
         */
        lastName?: string;
        /**
         * The birthdate of the user.
         */
        birthDate?: string;
        /**
         * The gender of the user.
         */
        gender?: string;
        /**
         * The title of the user.
         */
        title?: string;
        /**
         * The position of the user.
         */
        position?: string;
        /**
         * The language preference of the user in ISO 639-1 format.
         */
        language?: string;
        /**
         * The capacity of the user per week in seconds.
         */
        capacityPerWeek?: any;
    }): Promise<User>;
    /**
     * Deletes the user with the specified id.
     * @param {String} userId The id of the user.
     * @returns {Promise<void>}
     */
    delete(userId: string): Promise<void>;
    /**
     * Deactivates the user with the specified id. A deactivated user can no longer sign in. It is only possible if the user is not the last admin user.
     * @param {String} userId The id of the user.
     * @returns {Promise<void>}
     */
    deactivate(userId: string): Promise<void>;
    /**
     * Activates the user with the specified id. The user is then allowed to sign in again and will be notified via email.
     * @param {String} userId The id of the user.
     * @returns {Promise<void>}
     */
    activate(userId: string): Promise<void>;
    /**
     * Archives or unarchives the user with the specified id. Archived objects can not be used any longer but still exist for being referenced by other entities.
     * @param {String} userId The id of the user which will be changed.
     * @param {Boolean} isArchived Flags the entity as archived.
     * @returns
     */
    setArchived(userId: string, isArchived: boolean): Promise<ExtendedUser>;
    /**
     * Checks whether the specified user key is valid and unique.
     * @returns {Promise<String>}
     */
    isKeyValid(): Promise<string>;
    /**
     * Sets the user key of the user with the specified id.
     * @param {String} userId The id of the user.
     * @returns {Promise<String>}
     */
    setkey(userId: string): Promise<string>;
    /**
     * Returns the {@link UserContactInfos} Endpoint with the specified project Id.
     * @param {String} userId The id of the user.
     * @returns {UserContactInfos}
     */
    contactInfo(userId: string): UserContactInfos;
    /**
     * The last time entry is always the last one that was started. Time entries which are started in the future are ignored. If a time entry does not have a start time, 12.00 am is automatically assumed as the start time for comparison with other time entries from the same day.
     * @returns {Promise<TimeEntry>}
     */
    lastTimeEntries(): Promise<TimeEntry>;
    /**
     * Returns the {@link EntityImages} Endpoint with the specified user Id.
     * @param {String} usersId The id of the user.
     * @returns {EntityImages}
     */
    images(usersId: string): EntityImages;
    /**
     * Returns the {@link UserPrivateTasksSubtasks} Endpoint with the specified user Id.
     * @param {String} userId The id of the user.
     * @returns {UserPrivateTasksSubtasks}
     */
    userPrivateTasksSubtasks(userId: string): UserPrivateTasksSubtasks;
    /**
     * Returns the {@link UserOtherPrivateTasksSubtasks} Endpoint with the specified user Id.
     * @param {String} userId The id of the user.
     * @returns {UserOtherPrivateTasksSubtasks}
     */
    userOtherPrivateTasksSubtasks(userId: string): UserOtherPrivateTasksSubtasks;
    /**
     * Returns the {@link TimeTrackings} Endpoint with the specified user Id.
     * @param {String} userId The id of the user.
     * @returns {TimeTrackings}
     */
    timeTrackings(userId: string): TimeTrackings;
}
import { User } from "../model/User";
import { ExtendedUser } from "../model/ExtendedUser";
import { UserContactInfos } from "./UserContactInfos";
import { TimeEntry } from "../model/TimeEntry";
import { EntityImages } from "./EntityImages";
import { UserPrivateTasksSubtasks } from "./UserPrivateTasksSubtasks";
import { UserOtherPrivateTasksSubtasks } from "./UserOtherPrivateTasksSubtasks";
import { TimeTrackings } from "./TimeTrackings";
