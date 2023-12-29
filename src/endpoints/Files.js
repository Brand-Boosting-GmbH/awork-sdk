import '../globalTypedef'

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
    constructor(client) {
        /** @private */
        this._client = client
    }

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
    async download(fileId, options = {}) {
        const response = await this._client.get(`/files/${fileId}/download`, options)
        return response.data()
    }

    /**
     * Returns the content of the latest file version as pdf. The get the content it is necessary to have the 'read' permissions on the entity the file is related to.
     * @param {String} fileId The id of the file.
     * @param {Boolean} [inline] Default: false. If inline is false, content-disposition header is attachment.
     * @returns {String} binary
     */
    async pdf(fileId, inline = false) {
        const response = await this._client.get(`/files/${fileId}/pdf`, { inline: inline })
        return response.data()
    }
}