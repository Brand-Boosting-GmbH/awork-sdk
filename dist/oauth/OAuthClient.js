"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.OAuthClient = void 0;

class OAuthClient {
  constructor(clientId, redirectUri) {
    /** @private */
    this._clientId = clientId;
    /** @private */

    this._redirectUri = redirectUri;
  }
  /**
   * @returns {String}
   */


  getSignInLink(state = '') {
    return `https://api.awork.com/api/v1/accounts/authorize?client_id=${encodeURIComponent(this._clientId)}&response_type=code&grant_type=authorization_code&redirect_uri=${encodeURIComponent(this._redirectUri)}&state=${state}&scope=offline_access`;
  }

}

exports.OAuthClient = OAuthClient;