"use strict";

const {
  Product
} = require("./Product");

const v4 = () => Math.floor(Math.random() * 100000);

let data = {
  uuid: v4(),
  title: 'Pizza Salami',
  media: [{
    alt: 'Alt-Text',
    type: 'image/jpeg',
    url: 'test.jpg'
  }],
  description: 'Leckere Pizza mit kunsprigem Rand. *Markdown* **Support**',
  sizes: [{
    uuid: v4(),
    title: 'kleine Pizza',
    price: [{
      method: 'pick-up',
      amount: 790,
      currency: 'EUR'
    }, {
      method: 'delivery',
      amount: 820,
      currency: 'EUR'
    }]
  }, {
    uuid: v4(),
    title: 'große Pizza',
    price: [{
      method: 'pick-up',
      amount: 890,
      currency: 'EUR'
    }, {
      method: 'delivery',
      amount: 920,
      currency: 'EUR'
    }]
  }],
  selections: [{
    uuid: v4(),
    title: 'Randfüllung',
    options: [{
      uuid: v4(),
      title: 'Normal',
      price: [{
        method: 'pick-up',
        amount: 0,
        currency: 'EUR'
      }, {
        method: 'delivery',
        amount: 0,
        currency: 'EUR'
      }]
    }, {
      uuid: v4(),
      title: 'Käse',
      price: [{
        method: 'pick-up',
        amount: 200,
        currency: 'EUR'
      }, {
        method: 'delivery',
        amount: 210,
        currency: 'EUR'
      }]
    }]
  }],
  upgrades: [{
    uuid: v4(),
    title: 'extra Knoblauch',
    price: [{
      method: 'pick-up',
      amount: 100,
      currency: 'EUR'
    }, {
      method: 'delivery',
      amount: 100,
      currency: 'EUR'
    }]
  }, {
    uuid: v4(),
    title: 'ohne Käse',
    price: [{
      method: 'pick-up',
      amount: -200,
      currency: 'EUR'
    }, {
      method: 'delivery',
      amount: -200,
      currency: 'EUR'
    }]
  }],
  addidtives: ['uuid1', 'uuid2']
};
new Product();