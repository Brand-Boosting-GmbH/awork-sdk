"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Availability = void 0;

/**
 * Typedefintion
 * @typedef {Object} StateTimeFrame
 * @property {Date} to
 * @property {Date} from
 */
class Availability {
  constructor(data) {
    this._data = data || {};
    this._data.stateTimeFrame = this._data.stateTimeFrame || {};
    this._data.availabilityTimeRules = this._data.availabilityTimeRules || {};
    this._data.stateTimeFrame.from = this._data.stateTimeFrame.from || '';
    this._data.stateTimeFrame.to = this._data.stateTimeFrame.to || '';
    this._data.locations = this._data.locations || [];
    this._data.availabilityTimeRules.availableOn = this._data.availabilityTimeRules.availableOn || [];
    this._data.availabilityTimeRules.timeFrames = this._data.availabilityTimeRules.timeFrames || [];
  }
  /**
   * defines the actual display state of the object,
   * if 'TIMED' the time period is defined by stateTimeFrame
   * @type {('ONLINE'| 'OFFLINE' | 'TIMED')}
   */


  get state() {
    return this._data.state;
  }

  set state(val) {
    if (['ONLINE', 'OFFLINE', 'TIMED'].includes(val)) {
      this._data.state = val;
    } else {
      throw new Error('ILLEGAL_ARGUMENT');
    }
  }
  /**
   * defines a timeframe if the state is 'TIMED' with 'from' and 'to' date objects
   * @type {StateTimeFrame}
   */


  get stateTimeFrame() {
    return this._data.stateTimeFrame;
  }

  set stateTimeFrame(val) {
    this._data.stateTimeFrame = val;
  }
  /**
   * first Parameter of the StateTimeFrame Object that defines the timeframe for 'TIMED' state
   * @type {String}
   */


  get stateTimeFrameFrom() {
    return this._data.stateTimeFrame.from;
  }

  set stateTimeFrameFrom(val) {
    this._data.stateTimeFrame.from = val;
  }
  /**
   * second Parameter of the StateTimeFrame Object that defines the timeframe for 'TIMED' state
   * @type {String}
   */


  get stateTimeFrameTo() {
    return this._data.stateTimeFrame.to;
  }

  set stateTimeFrameTo(val) {
    this._data.stateTimeFrame.to = val;
  }
  /**
   * array of unique identifiers (uuid) that references the Location objects, 
   * every Product or Category has at least one Location to be displayed in the clientside menu
   * @type {Array}
   */


  get locations() {
    return this._data.locations;
  }

  set locations(val) {
    this._data.locations = val;
  }
  /**
   * function for adding Location reference with a unique identifier to an object
   * @param {String} uuid 
   * @returns {String} returns the unique identifier of the added Location reference
   */


  addLocation(uuid) {
    if (!this._data.locations.includes(uuid)) {
      this._data.locations.push(uuid);

      return this._data.locations[this._data.locations.length - 1];
    }
  }
  /**
   * function for removing Location references with a unique identifier from an object
   * @param {String} uuid 
   */


  removeLocation(uuid) {
    this._data.locations = this._data.locations.filter(l => l != uuid);
  }
  /**
   * doesnt affect the display state but defines the state where the object is available for ordering
   * if 'TIMED' the time period is defined by AvailabilityTimeRules
   * @type {('ALWAYS'| 'NEVER' | 'TIMED')}
   */


  get available() {
    return this._data.available;
  }

  set available(val) {
    this._data.available = val;
  }
  /**
   * defines the timeframes the object is available for ordering if Available is set on 'TIMED'
   * @type {Object}
   */


  get availabilityTimeRules() {
    return this._data.availabilityTimeRules;
  }

  set availabilityTimeRules(val) {
    this._data.availabilityTimeRules = val;
  }
  /**
   * defines if TimeRulesAvailableOn displays a 'WEEKLY' or 'MONTHLY' cycle,
   * (only 'WEEKLY' implemented so far!)
   * @type {('WEEKLY', 'MONTHLY')}
   */


  get timeRulesCycle() {
    return this._data.availabilityTimeRules.cycle;
  }

  set timeRulesCycle(val) {
    this._data.availabilityTimeRules.cycle = val;
  }
  /**
   * array with numbers for days the object is available, 
   * depending on TimeRulesCycle 'WEEKLY' or 'MONTHLY'
   * @type {Array}
   */


  get timeRulesAvailableOn() {
    return this._data.availabilityTimeRules.availableOn;
  }

  set timeRulesAvailableOn(val) {
    this._data.availabilityTimeRules.availableOn = val;
  }
  /**
   * function for adding TimeRulesAvailableOn array to an object 
   * @param {Array} val 
   * @returns the array that was added
   */


  addAvailableOn(val) {
    this._data.availabilityTimeRules.availableOn.push(val);

    return this._data.availabilityTimeRules.availableOn[this._data.availabilityTimeRules.availableOn.length - 1];
  }
  /**
   * function for removing TimeRulesAvailableOn array from an object
   * @param {Array} val 
   */


  removeAvailableOn(val) {
    this._data.availabilityTimeRules.availableOn = this._data.availabilityTimeRules.availableOn.filter(v => v != val);
  }
  /**
   * array with two values 'from' and 'to' that define the daily times the object is available
   * 'from' and 'to' are also arrays with two String values for hours and minutes
   * @type {Array}
   */


  get timeRulesTimeFrames() {
    return this._data.availabilityTimeRules.timeFrames;
  }

  set timeRulesTimeFrames(val) {
    this._data.availabilityTimeRules.timeFrames = val;

    this._data.availabilityTimeRules.timeFrames.sort(({
      from: [a, b]
    }, {
      from: [c, d]
    }) => a * 60 + b - (c * 60 + d));
  }
  /**
   * function for adding TimeRulesTimeFrames with 'from' and 'to' times to an object,
   * sorts the times ascending
   * @param {String} startHour 
   * @param {String} startMinute 
   * @param {String} endHour 
   * @param {String} endMinute 
   */


  addTimeFrame(startHour, startMinute, endHour, endMinute) {
    this._data.availabilityTimeRules.timeFrames.push({
      from: [startHour, startMinute],
      to: [endHour, endMinute]
    });

    this._data.availabilityTimeRules.timeFrames.sort(({
      from: [a, b]
    }, {
      from: [c, d]
    }) => a * 60 + b - (c * 60 + d));
  }
  /**
   * function for removing TimeRulesTimeFrames based on the array to be removed
   * @param {Array} val 
   */


  removeTimeFrame(val) {
    if (val != -1) {
      this._data.availabilityTimeRules.timeFrames.splice(val, 1);
    }
  }
  /**
   * Method used to convert the Object into a plain Object representation
   * of the data used for storing and transfering
   * @returns {Object} 
   */


  toPlainObject() {
    return {
      state: this._data.state,
      stateTimeFrame: {
        from: this._data.stateTimeFrame.from,
        to: this._data.stateTimeFrame.to
      },
      locations: this._data.locations,
      available: this._data.available,
      availabilityTimeRules: {
        cycle: this._data.availabilityTimeRules.cycle,
        availableOn: this._data.availabilityTimeRules.availableOn,
        timeFrames: this._data.availabilityTimeRules.timeFrames
      }
    };
  }

}

exports.Availability = Availability;