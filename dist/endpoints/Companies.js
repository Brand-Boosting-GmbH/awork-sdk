"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Companies = void 0;

var _Company = require("../model/Company");

var _CompaniesContactInfos = require("./CompaniesContactInfos");

/**
 * Class corresponding to Aworks Companies Endpoints
 * @category Endpoints
 * @see [Companies in Awork API Docs](https://openapi.awork.io/#/Companies)
 */
class Companies {
  /**
  * Endpoint constructor
  * @param {import('../client/index').Client} client 
  */
  constructor(client) {
    /**
    * @private
    */
    this._client = client;
  }
  /**
   * Returns the company with the specified id.
   * @param {String} companyId The id of the company.
   * @returns {Promise<Company>}
   */


  async get(companyId) {
    const response = await this._client.get(`/companies/${companyId}`);
    const data = response.data();
    return new _Company.Company(data);
  }
  /**
   * Returns all companies.
   * @param {ListOptions} [options] Pagination and filtering options 
   * @returns {Promise<Array<Company>>}
   */


  async list(options) {
    const response = await this._client.get(`/companies`, options);
    const data = response.data();
    return data.map(d => new _Company.Company(d));
  }
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


  async create(company) {
    const response = await this._client.post(`/companies`, company);
    const data = response.data();
    return new _Company.Company(data);
  }
  /**
   * 
   * @param {Company} company 
   */


  async update(companyId, company) {
    const response = await this._client.put(`/companies/${companyId}`, company);
    const data = response.data();
    return new _Company.Company(data);
  }
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


  async delete(companyId, options) {
    await this._client.post(`/companies/${companyId}/`, options);
  }
  /**
   * 
   * @param {String} companyId 
   * @returns {CompaniesContactInfos}
   */


  contactInfo(companyId) {
    return new _CompaniesContactInfos.CompaniesContactInfos(this._client, companyId);
  }

}

exports.Companies = Companies;