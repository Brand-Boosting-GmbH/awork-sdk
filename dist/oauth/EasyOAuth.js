"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.EasyOAuth = void 0;

var _nanoid = require("nanoid");

var _axios = _interopRequireDefault(require("axios"));

var _OAuthClient = require("./OAuthClient");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class EasyOAuth {
  constructor(clientId, url = 'https://awork-redirect-server.web.app/redirect') {
    this._clientId = clientId;
    this._url = url;
  }

  async _poll(loginId) {
    let finished = false;
    let response;

    do {
      await new Promise(res => setTimeout(() => res(), 1000));
      response = await _axios.default.get(url, {
        params: {
          polling: loginId
        }
      });
      finished = response.data.finished;
    } while (!finished);

    return response.data;
  }

  async login() {
    const loginId = (0, _nanoid.nanoid)();
    const oauth = new _OAuthClient.OAuthClient(this._clientId, this._url);
    const signInLink = oauth.getSignInLink(loginId);
    const win = window.open(signInLink);
    const data = await this._poll(loginId);
    console.log(data);
    win.close();
  }

}

exports.EasyOAuth = EasyOAuth;