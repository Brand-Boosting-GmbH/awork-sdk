"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.RenderedAvailability = void 0;

class RenderedAvailability {
  //static checkAvailability(...)
  static checkAvailability(availability, date) {
    var state_now = false;
    var available_now = false;

    if (availability.state === 'ONLINE') {
      state_now = true;
    } else if (availability.state === 'OFFLINE') {
      state_now = false;
    } else if (availability.state === 'TIMED') {
      if (new Date(availability.stateTimeFrame.from) < new Date(date) && new Date(date) < new Date(availability.stateTimeFrame.to)) {
        state_now = true;
      }
    }

    if (availability.available === 'ALWAYS') {
      available_now = true;
    } else if (availability.available === 'NEVER') {
      available_now = false;
    } else if (availability.available === 'TIMED') {
      //TODO WEEKLY/MONTHLY
      if (availability.availabilityTimeRules.availableOn.includes(new Date(date).getDay())) {
        for (const timeFrame of availability.availabilityTimeRules.timeFrames) {
          let timefrom = parseInt(timeFrame.from[0]) * 60 + parseInt(timeFrame.from[1]);
          let timeto = parseInt(timeFrame.to[0]) * 60 + parseInt(timeFrame.to[1]);
          let timenow = new Date(date).getHours() * 60 + new Date(date).getMinutes();

          if (timefrom < timenow && timenow < timeto) {
            available_now = true;
            break;
          }
        }
      }
    }

    return {
      state: state_now,
      available: available_now
    };
  }

}

exports.RenderedAvailability = RenderedAvailability;