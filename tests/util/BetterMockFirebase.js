require("regenerator-runtime/runtime")
const MockFirebase = require('mock-cloud-firestore')
const Firestore = require('mock-cloud-firestore/src/firebase/firestore');

class BetterMockFirestore extends Firestore {

    settings() {

    }

}

const BetterMockFirebase = class BetterMockFirebase extends MockFirebase {

    firestore() {
        return new BetterMockFirestore(this._data);
    }

}

module.exports = BetterMockFirebase