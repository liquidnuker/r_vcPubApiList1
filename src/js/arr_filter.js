// ret array with item/s found
// "arr": [
// {
//   "prop": "item",
//   ...
// }...
const arr_filter = function (arr, prop, item) {
  let af = arr.filter(function (el) {
    return el[prop] === item;
  });
  return af;
};

export {arr_filter};