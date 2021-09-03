"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Awork = void 0;

var _client = require("./client");

var _Companies = require("./endpoints/Companies");

class Awork {
  constructor({
    apiKey
  }) {
    this.client = new _client.Client(apiKey);
  }

  get companies() {
    return new _Companies.Companies(this.client);
  }

}

exports.Awork = Awork;