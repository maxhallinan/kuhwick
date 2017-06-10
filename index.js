'use strict';
const isArr = x => Object.prototype.toString.call(x) === '[object Array]';
const isFn = x => Object.prototype.toString.call(x) === '[object Function]';
const difference = (a, b) => a - b;

module.exports = function kuhwick(arr, compare = difference) {
  if (!isArr(arr)) {
    throw new TypeError(`Expected an array, got ${typeof arr}`);
  }

  if (arr.length < 2) {
    return arr;
  }

  if (!isFn(compare)) {
    throw new TypeError(`Expected a function, got ${typeof compare}`);
  }

  const pivot = arr[Math.round(arr.length / 2) - 1];

  const less = [];
  const more = [];
  const same = [];

  for (let i = 0, cmp; i < arr.length; i++) {
    cmp = compare(pivot, arr[i]);

    if (cmp > 0) {
      less.push(arr[i]);
    }

    if (cmp < 0) {
      more.push(arr[i]);
    }

    if (cmp === 0) {
      same.push(arr[i]);
    }
  }

  // is this tail call optimized?
  return kuhwick(less, compare).concat(same).concat(kuhwick(more, compare));
};
