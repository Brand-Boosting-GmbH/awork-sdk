export class Companies {
    constructor(client: any);
    _client: any;
    get(companyId: any): Promise<Company>;
    /**
     *
     * @returns {Promise<Array<Company>>}
     */
    list(): Promise<Array<Company>>;
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
