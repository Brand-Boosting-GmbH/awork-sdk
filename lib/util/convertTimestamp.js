"use strict";

exports.timestampToDate = timestamp => {
  if (timestamp instanceof Date) {
    return new Date(timestamp);
  }

  if (typeof timestamp === 'undefined') {
    return new Date();
  }

  if (typeof timestamp === 'string') {
    return new Date(timestamp);
  }

  return new Date(((timestamp || {})._seconds || (timestamp || {}).seconds || 0) * 1000);
};