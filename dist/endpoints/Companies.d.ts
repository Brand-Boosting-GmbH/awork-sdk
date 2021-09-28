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
     * @param {import('../global').ListOptions} [options] Pagination and filtering options
     * @returns {Promise<Array<Company>>}
     */
    list(options?: import('../global').ListOptions): Promise<Array<Company>>;
    /**
     * @typedef {Object} CompaniesCreateModel
     * @property {String} name The company name.
     * @property {String} [description] The company description.
     * @property {String} [industry] The company´s industry.
     */
    /**
     * Creates a new company.
     * @param {CompaniesCreateModel} company The model to create a new company.
     * @returns {Promise<Company>}
     */
    create(company: {
        /**
         * The company name.
         */
        name: string;
        /**
         * The company description.
         */
        description?: string;
        /**
         * The company´s industry.
         */
        industry?: string;
    }): Promise<Company>;
    /**
     * @typedef {CompaniesCreateModel} CompaniesUpdateModel
     */
    /**
     * Updates the company with the specified id.
     * @param {String} companyId The id of the company.
     * @param {CompaniesUpdateModel} company The model to update a company.
     * @returns {Promise<Company>}
     */
    update(companyId: string, company: {
        /**
         * The company name.
         */
        name: string;
        /**
         * The company description.
         */
        description?: string;
        /**
         * The company´s industry.
         */
        industry?: string;
    }): Promise<Company>;
    /**
     * @typedef {Object} DeleteCompanyOptions
     * @property {String} moveToCompany Moves all related objects to this company. Related projects and tasks (including their time entries) will be connected to this company. Have to set if 'DeleteOperation' contains 'move'.
     * @property {('move'|'delete-all-without-timeentries')} deleteOperation Defines the operation to delete a company. Possible operations are 'move': Move related objects to another company. 'delete-only-company': Delete only the company. Related objects loose the company information. 'delete-all-without-timeentries': Delete all related objects apart from time entries. 'delete-all': Delete all.
     */
    /**
     * There are several ways to delete a company. Look into the property description of the post model to get detailed information. If the post is executed without a model, the default process 'delete-only-company' will be executed.
     * @param {String} companyId The id of the company.
     * @param {DeleteCompanyOptions} [options] The model to delete a company.
     * @returns {Promise<void>}
     */
    delete(companyId: string, options?: {
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
     * Returns all company industries that are currently in use.
     * @returns {Promise<Array>String>>}
     */
    industries(): Promise<any[]>;
    /**
     * Returns company contact informations.
     * @param {String} companyId The id of the company.
     * @returns {CompaniesContactInfos}
     */
    contactInfo(companyId: string): CompaniesContactInfos;
    /**
     * Returns the {@link EntityFiles} Endpoint with the specified company Id and entityType 'companies'.
     * @param {String} companyId The id of the company.
     * @returns {EntityFiles}
     */
    files(companyId: string): EntityFiles;
    /**
     * Returns the {@link EntityImages} Endpoint with the specified company Id.
     * @param {String} projectId The id of the company.
     * @returns {EntityImages}
     */
    images(companyId: any): EntityImages;
    /**
     * Returns the {@link EntityTags} Endpoint with the specified company Id and name.
     * @param {String} companyId The id of the company.
     * @returns
     */
    entityTags(companyId: string): EntityTags;
}
import { Company } from "../model/Company";
import { CompaniesContactInfos } from "./CompaniesContactInfos";
import { EntityFiles } from "./EntityFiles";
import { EntityImages } from "./EntityImages";
import { EntityTags } from "./EntityTags";
