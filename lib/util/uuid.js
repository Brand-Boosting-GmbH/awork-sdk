"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.v4 = v4;

var _nanoid = require("nanoid");

function v4() {
  const alphabet = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
  const nanoid = (0, _nanoid.customAlphabet)(alphabet, 14);
  return nanoid();
}