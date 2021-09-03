"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Companies = void 0;

var _Company = require("../model/Company");

class Companies {
  constructor(client) {
    this._client = client;
  }

  async get(companyId) {
    const response = await this._client.get(`/companies/${companyId}`);
    const data = response.data();
    return new _Company.Company(data);
  }
  /**
   * 
   * @returns {Promise<Array<Company>>}
   */


  async list() {
    const response = await this._client.get(`/companies`);
    const data = response.data();
    return data.map(d => new _Company.Company(d));
  }
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


  async update(company) {
    const response = await this._client.put(`/companies`, company);
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

}

exports.Companies = Companies;