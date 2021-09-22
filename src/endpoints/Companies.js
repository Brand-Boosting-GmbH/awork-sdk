import { Company } from "../model/Company"
import { CompaniesContactInfos } from "./CompaniesContactInfos"
import { EntityFiles } from "./EntityFiles"
import { EntityImages } from "./EntityImages"

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
    constructor(client) {
        /**
        * @private
        */
        this._client = client
    }

    /**
     * Returns the company with the specified id.
     * @param {String} companyId The id of the company.
     * @returns {Promise<Company>}
     */
    async get(companyId) {
        const response = await this._client.get(`/companies/${companyId}`)
        const data = response.data()
        return new Company(data)
    }

    /**
     * Returns all companies.
     * @param {ListOptions} [options] Pagination and filtering options 
     * @returns {Promise<Array<Company>>}
     */
    async list(options) {
        const response = await this._client.get(`/companies`, options)
        const data = response.data()
        return data.map(d => new Company(d))
    }

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
    async create(company) {
        const response = await this._client.post(`/companies`, company)
        const data = response.data()
        return new Company(data)
    }

    /**
     * @typedef {CompaniesCreateModel} CompaniesUpdateModel
     */

    /**
     * Updates the company with the specified id.
     * @param {String} companyId The id of the company.
     * @param {CompaniesUpdateModel} company The model to update a company.
     * @returns {Promise<Company>}
     */
    async update(companyId, company) {
        const response = await this._client.put(`/companies/${companyId}`, company)
        const data = response.data()
        return new Company(data)
    }

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
    async delete(companyId, options) {
        await this._client.post(`/companies/${companyId}/`, options)
    }

    /**
     * Returns all company industries that are currently in use.
     * @returns {Promise<Array>String>>}
     */
    async industries () {
        const response = await this._client.get(`/companies/industries`)
        return response.data()
    }

    /**
     * Returns company contact informations.
     * @param {String} companyId The id of the company.
     * @returns {CompaniesContactInfos}
     */
    contactInfo (companyId) {
        return new CompaniesContactInfos(this._client, companyId)
    }

    /**
     * Returns the {@link EntityFiles} Endpoint with the specified company Id and entityType 'companies'.
     * @param {String} companyId The id of the company.
     * @returns {EntityFiles}
     */
     files (companyId) {
        return new EntityFiles(this._client, 'companies', companyId)
    }

    /**
     * Returns the {@link EntityImages} Endpoint with the specified company Id.
     * @param {String} projectId The id of the company.
     * @returns {EntityImages}
     */
     images (companyId) {
        return new EntityImages(this._client, 'companies', companyId)
    }
}