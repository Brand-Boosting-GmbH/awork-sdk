import axios from 'axios'

export class OAuthServer {

    /**
     * OAuthServer Constructor
     * @param {({apiKey: String}))} auth 
     */
    constructor(clientId, secret, redirectUri) {
        /** @private */
        this._clientId = clientId
        /** @private */
        this._secret = secret
        /** @private */
        this._redirectUri = redirectUri
    }

    /**
     * @typedef {Object} AworkAuth
     * @property {'oauth'|'api'} type the type of awork auth
     * @property {String} accessToken the access token
     * @property {String} refreshToken the refresh token
     */

    /**
     * 
     * @param {String} code The code that was received in the previous authorization response.
     * @returns {AworkAuth}
     */
    async requestToken(code) {
        let params = new URLSearchParams()
        params.append('redirect_uri', this._redirectUri)
        params.append('grant_type', 'authorization_code')
        params.append('code', code)
        const { data } = await axios.post('https://api.awork.com/api/v1/accounts/token', params, {
            auth: {
                username: this._clientId,
                password: this._secret
            }
        })
        return {
            type: 'oauth',
            accessToken: data.access_token,
            refreshToken: data.refresh_token
        }
    }



}