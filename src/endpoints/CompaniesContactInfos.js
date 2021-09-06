import { CompanyContactInfo } from "../model/CompanyContactInfo"

export class CompaniesContactInfos {

    constructor(client, companyId) {
        this._client = client
        this._companyId = companyId
    }

    async get(contactInfoId) {
        const response = await this._client.get(`/companies/${this._companyId}/contactinfo/${contactInfoId}`)
        const data = response.data()
        return new CompanyContactInfo(data)
    }

    /**
     * 
     * @returns {Promise<Array<Company>>}
     */
    async list() {
        const response = await this._client.get(`/companies/${this._companyId}/contactinfo`)
        const data = response.data()
        return data.map(d => new CompanyContactInfo(d))
    }

    /**
     * 
     * @param {CompanyContactInfo} companyContactInfo 
     */
    async create(companyContactInfo) {
        const response = await this._client.post(`/companies/${this._companyId}/contactinfo`, companyContactInfo)
        const data = response.data()
        return new CompanyContactInfo(data)
    }

    /**
     * 
     * @param {CompanyContactInfo} companyContactInfo 
     */
    async update(contactInfoId, companyContactInfo) {
        const response = await this._client.put(`/companies/${this._companyId}/contactinfo/${contactInfoId}`, companyContactInfo)
        const data = response.data()
        return new CompanyContactInfo(data)
    }

    /**
     * 
     * @param {String} contactInfoId 
     * @returns 
     */
    async delete(contactInfoId) {
        await this._client.delete(`/companies/${this._companyId}/contactinfo/${contactInfoId}`)
    }



}