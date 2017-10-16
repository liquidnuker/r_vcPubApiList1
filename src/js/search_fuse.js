import Fuse from "../js/vendor/fuse.min.js";

// ret array
// data: array
// value: item to search
// fk: array of prop 

// "data": [
// {
//   "fk1": "ValueA",
//   "fk2": "ValueB",
//   ...

const search_fuse = function (data, value, fk) {
  let fuseOptions = {
    shouldSort: true,
    threshold: 0.6,
    location: 0,
    distance: 100,
    maxPatternLength: 32,
    minMatchCharLength: 1,
    keys: fk
  };

  let fuse = new Fuse(data, fuseOptions);
  return fuse.search(value);
};

export {search_fuse};