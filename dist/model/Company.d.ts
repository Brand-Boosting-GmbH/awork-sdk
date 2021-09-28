/**
 * Company Model
 * @category Models
 * @class
 */
export class Company {
    /**
     * @typedef {Company & {_plain?: true}} CompanyLike
     */
    /**
     * Model constructor
     * @param {CompanyLike} data
     */
    constructor(data: Company & {
        _plain?: true;
    });
    /**
     * @private
     */
    private _data;
    /**
     * The id of the company.
     * @type {String}
     */
    get id(): string;
    /**
     * The company name. Required.
     * @type {String} nullable
     */
    get name(): string;
    /**
     * The company description. Optional.
     * @type {String} nullable
     */
    get description(): string;
    /**
     * The company's industry. Optional.
     * @type {String} nullable
     */
    get industry(): string;
    /**
     * The workspace id of the company.
     * @type {String}
     */
    get workspaceId(): string;
    /**
     * Whether the company has an image.
     * @type {Boolean}
     */
    get hasImage(): boolean;
    /**
     * The company infos assigned to this company.
     * @type {Array<import('./CompanyContactInfo').CompanyContactInfo>}
     */
    get companyContactInfos(): import("./CompanyContactInfo").CompanyContactInfo[];
    /**
     * The date this entity was created.
     * @type {String} date-time
     */
    get createdOn(): string;
    /**
     * The id of the user who created this entity.
     * @type {String} uuid
     */
    get createdBy(): string;
    /**
     * The date this entity was last modified.
     * @type {String} date-time
     */
    get updatedOn(): string;
    /**
     * The id of the user who last modified this entity.
     * @type {String} uuid
     */
    get updatedBy(): string;
    /**
     * The version of the entity continuously incremented by 1 on every update of the entity.
     * @type {Number}
     */
    get resourceVersion(): number;
    /**
     * @typedef {Object} CompanyTags
     * @property {String} id uuid
     * @property {String} name nullable
     * @property {Color} color nullable
     * @property {String} entityId uuid
     * @property {String} createdOn date-time
     * @property {String} createdBy uuid
     * @property {String} updatedOn date-time
     * @property {String} updatedBy uuid
     */
    /**
     * The tags for this company.
     * @type {Array<CompanyTags>} nullable
     */
    get tags(): {
        /**
         * uuid
         */
        id: string;
        /**
         * nullable
         */
        name: string;
        /**
         * nullable
         */
        color: Color;
        /**
         * uuid
         */
        entityId: string;
        /**
         * date-time
         */
        createdOn: string;
        /**
         * uuid
         */
        createdBy: string;
        /**
         * date-time
         */
        updatedOn: string;
        /**
         * uuid
         */
        updatedBy: string;
    }[];
    /**
     * The number of all projects related to the company.
     * @type {Number}
     */
    get projectsCount(): number;
    /**
     * The number of all projects in status 'progress' related to the company.
     * @type {Number}
     */
    get projectsInProgressCount(): number;
    toPlainObject(): {
        id: any;
        name: any;
        description: any;
        industry: any;
        workspaceId: any;
        hasImage: any;
        companyContactInfos: any;
        createdOn: any;
        createdBy: any;
        updatedOn: any;
        updatedBy: any;
        resourceVersion: any;
        tags: any;
        projectsCount: any;
        projectsInProgressCount: any;
    };
}
