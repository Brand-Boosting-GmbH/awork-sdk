"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.LiquidEngine = void 0;

var _liquidjs = require("liquidjs");

const engine = new _liquidjs.Liquid();
engine.registerFilter('money', number => new Intl.NumberFormat('de-DE', {
  style: 'currency',
  currency: 'EUR'
}).format(number / 100));
/**
 * Delivery Boostings Liquid Flavour Engine with added Filter support
 * Based on LiquidJS
 * @type {Liquid}
 */

const LiquidEngine = engine;
exports.LiquidEngine = LiquidEngine;