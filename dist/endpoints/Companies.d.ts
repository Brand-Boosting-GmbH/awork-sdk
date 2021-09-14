/**
 * Class corresponding to Aworks Companies Endpoints
 * @category Endpoints
 * @see [Companies in Awork API Docs](https://openapi.awork.io/#/Companies)
 */
export class Companies {
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
     * Returns the company with the specified id.
     * @param {String} companyId The id of the company.
     * @returns {Promise<Company>}
     */
    get(companyId: string): Promise<Company>;
    /**
     * Returns all companies.
     * @param {ListOptions} [options] Pagination and filtering options
     * @returns {Promise<Array<Company>>}
     */
    list(options?: ListOptions): Promise<Array<Company>>;
    /**
     * @typedef {('central'|'other')} PhoneSubType
     */
    /**
     * @typedef {('central'|'invoice'|'other')} EmailSubType
     */
    /**
     * @typedef {('central'|'invoice'|'other')} AddressSubType
     */
    /**
     * @typedef {('primary'|'other')} UrlSubType
     */
    /**
     * @typedef {Object} CompanyCreateModel
     * @property {String} [label] The label of the contact info.
     * @property {String} [value] The value of the contact info.
     * @property {('phone'|'email'|'adress'|'custom')} type The type of the contact info.
     * @property {(PhoneSubType|EmailSubType|AddressSubType|UrlSubType)} The subtype of the contact info.
     * @property
     */
    /**
     *
     * @param {Company} company
     */
    create(company: Company): Promise<Company>;
    /**
     *
     * @param {Company} company
     */
    update(companyId: any, company: Company): Promise<Company>;
    /**
     * @typedef {Object} DeleteCompanyOptions
     * @property {String} moveToCompany Moves all related objects to this company. Related projects and tasks (including their time entries) will be connected to this company. Have to set if 'DeleteOperation' contains 'move'.
     * @property {('move'|'delete-all-without-timeentries')} deleteOperation Defines the operation to delete a company. Possible operations are 'move': Move related objects to another company. 'delete-only-company': Delete only the company. Related objects loose the company information. 'delete-all-without-timeentries': Delete all related objects apart from time entries. 'delete-all': Delete all.
     */
    /**
     *
     * @param {String} companyId
     * @param {DeleteCompanyOptions} options
     * @returns
     */
    delete(companyId: string, options: {
        /**
         * Moves all related objects to this company. Related projects and tasks (including their time entries) will be connected to this company. Have to set if 'DeleteOperation' contains 'move'.
         */
        moveToCompany: string;
        /**
         * Defines the operation to delete a company. Possible operations are 'move': Move related objects to another company. 'delete-only-company': Delete only the company. Related objects loose the company information. 'delete-all-without-timeentries': Delete all related objects apart from time entries. 'delete-all': Delete all.
         */
        deleteOperation: ('move' | 'delete-all-without-timeentries');
    }): Promise<void>;
    /**
     *
     * @param {String} companyId
     * @returns {CompaniesContactInfos}
     */
    contactInfo(companyId: string): CompaniesContactInfos;
}
import { Company } from "../model/Company";
import { CompaniesContactInfos } from "./CompaniesContactInfos";
