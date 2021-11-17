export class CompaniesContactInfos {
    constructor(client: any, companyId: any);
    _client: any;
    _companyId: any;
    get(contactInfoId: any): Promise<CompanyContactInfo>;
    /**
     *
     * @returns {Promise<Array<Company>>}
     */
    list(): Promise<Array<Company>>;
    /**
     *
     * @param {CompanyContactInfo} companyContactInfo
     */
    create(companyContactInfo: CompanyContactInfo): Promise<CompanyContactInfo>;
    /**
     *
     * @param {CompanyContactInfo} companyContactInfo
     */
    update(contactInfoId: any, companyContactInfo: CompanyContactInfo): Promise<CompanyContactInfo>;
    /**
     *
     * @param {String} contactInfoId
     * @returns
     */
    delete(contactInfoId: string): Promise<void>;
}
import { CompanyContactInfo } from "../model/CompanyContactInfo";
