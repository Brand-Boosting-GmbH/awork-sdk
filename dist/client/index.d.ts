/**
 * Client class used to perform the http requests
 * @category Util
 * @class
 */
export class Client {
    static getPlainObject(obj: any): any;
    constructor(apiKey?: string, basePath?: string);
    basePath: string;
    http: import("axios").AxiosInstance;
    /**
     *
     * @param {String} path
     * @param {Object} params
     * @returns {AworkResponse}
     */
    get(path: string, params?: any, headers?: {}): AworkResponse;
    /**
     *
     * @param {String} path
     * @param {Object} params
     * @returns {AworkResponse}
     */
    getBinary(path: string, params?: any, headers?: {}): AworkResponse;
    post(path: any, payload: any, params?: {}, headers?: {}): Promise<AworkResponse>;
    put(path: any, payload: any, params?: {}, headers?: {}): Promise<AworkResponse>;
    delete(path: any, params?: {}, headers?: {}): Promise<AworkResponse>;
}
declare class AworkResponse {
    constructor(status: any, headers: any, data: any);
    _status: any;
    _headers: any;
    _data: any;
    get status(): any;
    get headers(): any;
    data(): any;
}
export {};
