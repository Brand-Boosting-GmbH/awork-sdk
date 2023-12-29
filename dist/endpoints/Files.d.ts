/**
 * Class corresponding to Aworks project related part of the Files Endpoints
 * @category Endpoints
 * @see [Files in Awork API Docs](https://openapi.awork.com/#/Files)
 */
export class Files {
    /**
    * Endpoint constructor
    * @param {import('../client/index').Client} client
    */
    constructor(client: import('../client/index').Client);
    /** @private */
    private _client;
    /**
      * @typedef {Object} FileDownloadOptions
      * @property {Number} [width] Set width to resize.
      * @property {Number} [height] Set height to resize.
      * @property {Boolean} [crop] Whether to crop the image when resizing it.
      * @property {Boolean} [inline] If inline is false, content-disposition header is attachment.
      */
    /**
     * Returns the content of the latest file version. If the file is an image and the width and height are set, the image will resized before it is returned. The get the content it is necessary to have the 'read' permissions on the entity the file is related to.
     * @param {String} fileId The id of the file.
     * @param {FileDownloadOptions} [options] The download options.
     * @returns {String} binary
     */
    download(fileId: string, options?: {
        /**
         * Set width to resize.
         */
        width?: number;
        /**
         * Set height to resize.
         */
        height?: number;
        /**
         * Whether to crop the image when resizing it.
         */
        crop?: boolean;
        /**
         * If inline is false, content-disposition header is attachment.
         */
        inline?: boolean;
    }): string;
    /**
     * Returns the content of the latest file version as pdf. The get the content it is necessary to have the 'read' permissions on the entity the file is related to.
     * @param {String} fileId The id of the file.
     * @param {Boolean} [inline] Default: false. If inline is false, content-disposition header is attachment.
     * @returns {String} binary
     */
    pdf(fileId: string, inline?: boolean): string;
}
