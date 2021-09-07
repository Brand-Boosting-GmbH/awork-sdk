"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Awork = void 0;

var _client = require("./client");

var _Companies = require("./endpoints/Companies");

var _Projects = require("./endpoints/Projects");

class Awork {
  constructor({
    apiKey
  }) {
    this.client = new _client.Client(apiKey);
  }

  get companies() {
    return new _Companies.Companies(this.client);
  }

  get projects() {
    return new _Projects.Projects(this.client);
  }

}

exports.Awork = Awork;