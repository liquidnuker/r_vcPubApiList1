(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[1],{

/***/ 115:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Pager;
// pagination helper
// ======================================================/

function Pager(opts) {
  this.data = opts.data;
  this.perPage = opts.perPage;
  this.currentPage = 1;
}

Pager.prototype = {
  getTotalPages: function getTotalPages() {
    // ret num
    return Math.ceil(this.data.length / this.perPage);
  },
  getCurrentOffset: function getCurrentOffset() {
    // ret num
    return (this.currentPage - 1) * this.perPage;
  },
  page: function page(num) {
    if (this.isValidPage(num)) {
      this.currentPage = num;

      var start = this.getCurrentOffset();
      // let end = start + this.perPage;
      var end = start + Number(this.perPage);

      return this.data.slice(start, end);
    } else {
      // default page
      this.currentPage = 1;
      return this.data.slice(0, this.perPage);
    }
  },
  hasNext: function hasNext() {
    // ret boolean
    return this.currentPage < this.getTotalPages();
  },
  hasPrev: function hasPrev() {
    // ret boolean
    return this.currentPage !== 1;
  },
  prev: function prev() {
    // ret num
    if (this.hasPrev()) {
      this.currentPage = this.currentPage - 1;
    } else {
      this.currentPage = this.getTotalPages();
    }
    return this.currentPage;
  },
  next: function next() {
    // ret num
    if (this.hasNext()) {
      this.currentPage++;
    } else {
      this.currentPage = 1;
    }
    // console.log(this.currentPage);
    return this.currentPage;
  },
  isValidPage: function isValidPage(num) {
    // ret boolean
    return num > 0 && num <= this.getTotalPages();
  }
};

/***/ }),

/***/ 116:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var store = {

  // from child components
  fc: {
    // vcSearch.vue
    searchKeyword: ""
  }
};

exports.store = store;

/***/ }),

/***/ 36:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
// ret array with val/s found
// "arr": [
// {
//   "key": "val",
//   ...
// }...
var arr_filter = function arr_filter(arr, key, val) {
  var af = arr.filter(function (el) {
    return el[key] === val;
  });
  return af;
};

exports.arr_filter = arr_filter;

/***/ }),

/***/ 37:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
// ret array of unique key: val
// "arr": [
// { 
//   "cat": "cat2"
// },
// { 
//   "cat": "cat2" 
// ...
var arr_extractUnique = function arr_extractUnique(arr, cat) {
  var o = {};
  var temp = [];
  for (var i = 0, l = arr.length; i < l; i++) {
    if (!o[arr[i][cat]]) {
      o[arr[i][cat]] = true;
      temp.push(arr[i][cat]);
      // temp.push(arr[i].Cat);
    }
  }
  return temp;
};

exports.arr_extractUnique = arr_extractUnique;

/***/ }),

/***/ 38:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
// ret array asc order
// "arr": [
// {
//   "item": "Name",
//   ...
// },...

var arr_sortValue = function arr_sortValue(item, arr) {
  arr.sort(function (a, b) {
    var itemToSort = item;
    var tempA = a[itemToSort].toUpperCase();
    var tempB = b[itemToSort].toUpperCase();
    if (tempA < tempB) {
      return -1;
    }
    if (tempA > tempB) {
      return 1;
    }

    // names must be equal
    return 0;
  });
  return arr;
};

exports.arr_sortValue = arr_sortValue;

/***/ }),

/***/ 39:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.search_fuse = undefined;

var _fuseMin = __webpack_require__(40);

var _fuseMin2 = _interopRequireDefault(_fuseMin);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// ret array
// data: array
// value: item to search
// searchKeys: array of keys

// "data": [
// {
//   "searchKeys1": "ValueA",
//   "searchKeys2": "ValueB",
//   ...
var search_fuse = function search_fuse(opts) {
  var fuseOptions = {
    shouldSort: true,
    threshold: 0.6,
    location: 0,
    distance: 100,
    maxPatternLength: 32,
    minMatchCharLength: 1,
    keys: opts.searchKeys
  };

  var fuse = new _fuseMin2.default(opts.data, fuseOptions);
  return fuse.search(opts.value);
};

exports.search_fuse = search_fuse;

/***/ }),

/***/ 4:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Home_vue_vue_type_template_id_75305373___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5);
/* harmony import */ var _Home_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _Home_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _Home_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(117);





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Home_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Home_vue_vue_type_template_id_75305373___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Home_vue_vue_type_template_id_75305373___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "vue-components\\Home.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 40:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;

var _stringify = __webpack_require__(42);

var _stringify2 = _interopRequireDefault(_stringify);

var _defineProperty = __webpack_require__(45);

var _defineProperty2 = _interopRequireDefault(_defineProperty);

var _typeof2 = __webpack_require__(62);

var _typeof3 = _interopRequireDefault(_typeof2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/*!
 * Fuse.js v3.2.0 - Lightweight fuzzy-search (http://fusejs.io)
 * 
 * Copyright (c) 2012-2017 Kirollos Risk (http://kiro.me)
 * All Rights Reserved. Apache Software License 2.0
 * 
 * http://www.apache.org/licenses/LICENSE-2.0
 */
!function (e, t) {
  "object" == ( false ? undefined : (0, _typeof3.default)(exports)) && "object" == ( false ? undefined : (0, _typeof3.default)(module)) ? module.exports = t() :  true ? !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_FACTORY__ = (t),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)) : undefined;
}(undefined, function () {
  return function (e) {
    function t(n) {
      if (r[n]) return r[n].exports;var o = r[n] = { i: n, l: !1, exports: {} };return e[n].call(o.exports, o, o.exports, t), o.l = !0, o.exports;
    }var r = {};return t.m = e, t.c = r, t.i = function (e) {
      return e;
    }, t.d = function (e, r, n) {
      t.o(e, r) || (0, _defineProperty2.default)(e, r, { configurable: !1, enumerable: !0, get: n });
    }, t.n = function (e) {
      var r = e && e.__esModule ? function () {
        return e.default;
      } : function () {
        return e;
      };return t.d(r, "a", r), r;
    }, t.o = function (e, t) {
      return Object.prototype.hasOwnProperty.call(e, t);
    }, t.p = "", t(t.s = 8);
  }([function (e, t, r) {
    "use strict";
    e.exports = function (e) {
      return "[object Array]" === Object.prototype.toString.call(e);
    };
  }, function (e, t, r) {
    "use strict";
    function n(e, t) {
      if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
    }var o = function () {
      function e(e, t) {
        for (var r = 0; r < t.length; r++) {
          var n = t[r];n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), (0, _defineProperty2.default)(e, n.key, n);
        }
      }return function (t, r, n) {
        return r && e(t.prototype, r), n && e(t, n), t;
      };
    }(),
        i = r(5),
        a = r(7),
        s = r(4),
        c = function () {
      function e(t, r) {
        var o = r.location,
            i = void 0 === o ? 0 : o,
            a = r.distance,
            c = void 0 === a ? 100 : a,
            h = r.threshold,
            l = void 0 === h ? .6 : h,
            u = r.maxPatternLength,
            f = void 0 === u ? 32 : u,
            d = r.isCaseSensitive,
            v = void 0 !== d && d,
            p = r.tokenSeparator,
            g = void 0 === p ? / +/g : p,
            y = r.findAllMatches,
            m = void 0 !== y && y,
            k = r.minMatchCharLength,
            x = void 0 === k ? 1 : k;n(this, e), this.options = { location: i, distance: c, threshold: l, maxPatternLength: f, isCaseSensitive: v, tokenSeparator: g, findAllMatches: m, minMatchCharLength: x }, this.pattern = this.options.isCaseSensitive ? t : t.toLowerCase(), this.pattern.length <= f && (this.patternAlphabet = s(this.pattern));
      }return o(e, [{ key: "search", value: function value(e) {
          if (this.options.isCaseSensitive || (e = e.toLowerCase()), this.pattern === e) return { isMatch: !0, score: 0, matchedIndices: [[0, e.length - 1]] };var t = this.options,
              r = t.maxPatternLength,
              n = t.tokenSeparator;if (this.pattern.length > r) return i(e, this.pattern, n);var o = this.options,
              s = o.location,
              c = o.distance,
              h = o.threshold,
              l = o.findAllMatches,
              u = o.minMatchCharLength;return a(e, this.pattern, this.patternAlphabet, { location: s, distance: c, threshold: h, findAllMatches: l, minMatchCharLength: u });
        } }]), e;
    }();e.exports = c;
  }, function (e, t, r) {
    "use strict";
    var n = r(0),
        o = function e(t, r, o) {
      if (r) {
        var i = r.indexOf("."),
            a = r,
            s = null;-1 !== i && (a = r.slice(0, i), s = r.slice(i + 1));var c = t[a];if (null !== c && void 0 !== c) if (s || "string" != typeof c && "number" != typeof c) {
          if (n(c)) for (var h = 0, l = c.length; h < l; h += 1) {
            e(c[h], s, o);
          } else s && e(c, s, o);
        } else o.push(c.toString());
      } else o.push(t);return o;
    };e.exports = function (e, t) {
      return o(e, t, []);
    };
  }, function (e, t, r) {
    "use strict";
    e.exports = function () {
      for (var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [], t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1, r = [], n = -1, o = -1, i = 0, a = e.length; i < a; i += 1) {
        var s = e[i];s && -1 === n ? n = i : s || -1 === n || (o = i - 1, o - n + 1 >= t && r.push([n, o]), n = -1);
      }return e[i - 1] && i - n >= t && r.push([n, i - 1]), r;
    };
  }, function (e, t, r) {
    "use strict";
    e.exports = function (e) {
      for (var t = {}, r = e.length, n = 0; n < r; n += 1) {
        t[e.charAt(n)] = 0;
      }for (var o = 0; o < r; o += 1) {
        t[e.charAt(o)] |= 1 << r - o - 1;
      }return t;
    };
  }, function (e, t, r) {
    "use strict";
    e.exports = function (e, t) {
      var r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : / +/g,
          n = new RegExp(t.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, "\\$&").replace(r, "|")),
          o = e.match(n),
          i = !!o,
          a = [];if (i) for (var s = 0, c = o.length; s < c; s += 1) {
        var h = o[s];a.push([e.indexOf(h), h.length - 1]);
      }return { score: i ? .5 : 1, isMatch: i, matchedIndices: a };
    };
  }, function (e, t, r) {
    "use strict";
    e.exports = function (e, t) {
      var r = t.errors,
          n = void 0 === r ? 0 : r,
          o = t.currentLocation,
          i = void 0 === o ? 0 : o,
          a = t.expectedLocation,
          s = void 0 === a ? 0 : a,
          c = t.distance,
          h = void 0 === c ? 100 : c,
          l = n / e.length,
          u = Math.abs(s - i);return h ? l + u / h : u ? 1 : l;
    };
  }, function (e, t, r) {
    "use strict";
    var n = r(6),
        o = r(3);e.exports = function (e, t, r, i) {
      for (var a = i.location, s = void 0 === a ? 0 : a, c = i.distance, h = void 0 === c ? 100 : c, l = i.threshold, u = void 0 === l ? .6 : l, f = i.findAllMatches, d = void 0 !== f && f, v = i.minMatchCharLength, p = void 0 === v ? 1 : v, g = s, y = e.length, m = u, k = e.indexOf(t, g), x = t.length, S = [], M = 0; M < y; M += 1) {
        S[M] = 0;
      }if (-1 !== k) {
        var b = n(t, { errors: 0, currentLocation: k, expectedLocation: g, distance: h });if (m = Math.min(b, m), -1 !== (k = e.lastIndexOf(t, g + x))) {
          var _ = n(t, { errors: 0, currentLocation: k, expectedLocation: g, distance: h });m = Math.min(_, m);
        }
      }k = -1;for (var L = [], w = 1, C = x + y, A = 1 << x - 1, I = 0; I < x; I += 1) {
        for (var O = 0, F = C; O < F;) {
          n(t, { errors: I, currentLocation: g + F, expectedLocation: g, distance: h }) <= m ? O = F : C = F, F = Math.floor((C - O) / 2 + O);
        }C = F;var P = Math.max(1, g - F + 1),
            j = d ? y : Math.min(g + F, y) + x,
            z = Array(j + 2);z[j + 1] = (1 << I) - 1;for (var T = j; T >= P; T -= 1) {
          var E = T - 1,
              K = r[e.charAt(E)];if (K && (S[E] = 1), z[T] = (z[T + 1] << 1 | 1) & K, 0 !== I && (z[T] |= (L[T + 1] | L[T]) << 1 | 1 | L[T + 1]), z[T] & A && (w = n(t, { errors: I, currentLocation: E, expectedLocation: g, distance: h })) <= m) {
            if (m = w, (k = E) <= g) break;P = Math.max(1, 2 * g - k);
          }
        }if (n(t, { errors: I + 1, currentLocation: g, expectedLocation: g, distance: h }) > m) break;L = z;
      }return { isMatch: k >= 0, score: 0 === w ? .001 : w, matchedIndices: o(S, p) };
    };
  }, function (e, t, r) {
    "use strict";
    function n(e, t) {
      if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
    }var o = function () {
      function e(e, t) {
        for (var r = 0; r < t.length; r++) {
          var n = t[r];n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), (0, _defineProperty2.default)(e, n.key, n);
        }
      }return function (t, r, n) {
        return r && e(t.prototype, r), n && e(t, n), t;
      };
    }(),
        i = r(1),
        a = r(2),
        s = r(0),
        c = function () {
      function e(t, r) {
        var o = r.location,
            i = void 0 === o ? 0 : o,
            s = r.distance,
            c = void 0 === s ? 100 : s,
            h = r.threshold,
            l = void 0 === h ? .6 : h,
            u = r.maxPatternLength,
            f = void 0 === u ? 32 : u,
            d = r.caseSensitive,
            v = void 0 !== d && d,
            p = r.tokenSeparator,
            g = void 0 === p ? / +/g : p,
            y = r.findAllMatches,
            m = void 0 !== y && y,
            k = r.minMatchCharLength,
            x = void 0 === k ? 1 : k,
            S = r.id,
            M = void 0 === S ? null : S,
            b = r.keys,
            _ = void 0 === b ? [] : b,
            L = r.shouldSort,
            w = void 0 === L || L,
            C = r.getFn,
            A = void 0 === C ? a : C,
            I = r.sortFn,
            O = void 0 === I ? function (e, t) {
          return e.score - t.score;
        } : I,
            F = r.tokenize,
            P = void 0 !== F && F,
            j = r.matchAllTokens,
            z = void 0 !== j && j,
            T = r.includeMatches,
            E = void 0 !== T && T,
            K = r.includeScore,
            $ = void 0 !== K && K,
            J = r.verbose,
            N = void 0 !== J && J;n(this, e), this.options = { location: i, distance: c, threshold: l, maxPatternLength: f, isCaseSensitive: v, tokenSeparator: g, findAllMatches: m, minMatchCharLength: x, id: M, keys: _, includeMatches: E, includeScore: $, shouldSort: w, getFn: A, sortFn: O, verbose: N, tokenize: P, matchAllTokens: z }, this.setCollection(t);
      }return o(e, [{ key: "setCollection", value: function value(e) {
          return this.list = e, e;
        } }, { key: "search", value: function value(e) {
          this._log('---------\nSearch pattern: "' + e + '"');var t = this._prepareSearchers(e),
              r = t.tokenSearchers,
              n = t.fullSearcher,
              o = this._search(r, n),
              i = o.weights,
              a = o.results;return this._computeScore(i, a), this.options.shouldSort && this._sort(a), this._format(a);
        } }, { key: "_prepareSearchers", value: function value() {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "",
              t = [];if (this.options.tokenize) for (var r = e.split(this.options.tokenSeparator), n = 0, o = r.length; n < o; n += 1) {
            t.push(new i(r[n], this.options));
          }return { tokenSearchers: t, fullSearcher: new i(e, this.options) };
        } }, { key: "_search", value: function value() {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [],
              t = arguments[1],
              r = this.list,
              n = {},
              o = [];if ("string" == typeof r[0]) {
            for (var i = 0, a = r.length; i < a; i += 1) {
              this._analyze({ key: "", value: r[i], record: i, index: i }, { resultMap: n, results: o, tokenSearchers: e, fullSearcher: t });
            }return { weights: null, results: o };
          }for (var s = {}, c = 0, h = r.length; c < h; c += 1) {
            for (var l = r[c], u = 0, f = this.options.keys.length; u < f; u += 1) {
              var d = this.options.keys[u];if ("string" != typeof d) {
                if (s[d.name] = { weight: 1 - d.weight || 1 }, d.weight <= 0 || d.weight > 1) throw new Error("Key weight has to be > 0 and <= 1");d = d.name;
              } else s[d] = { weight: 1 };this._analyze({ key: d, value: this.options.getFn(l, d), record: l, index: c }, { resultMap: n, results: o, tokenSearchers: e, fullSearcher: t });
            }
          }return { weights: s, results: o };
        } }, { key: "_analyze", value: function value(e, t) {
          var r = e.key,
              n = e.arrayIndex,
              o = void 0 === n ? -1 : n,
              i = e.value,
              a = e.record,
              c = e.index,
              h = t.tokenSearchers,
              l = void 0 === h ? [] : h,
              u = t.fullSearcher,
              f = void 0 === u ? [] : u,
              d = t.resultMap,
              v = void 0 === d ? {} : d,
              p = t.results,
              g = void 0 === p ? [] : p;if (void 0 !== i && null !== i) {
            var y = !1,
                m = -1,
                k = 0;if ("string" == typeof i) {
              this._log("\nKey: " + ("" === r ? "-" : r));var x = f.search(i);if (this._log('Full text: "' + i + '", score: ' + x.score), this.options.tokenize) {
                for (var S = i.split(this.options.tokenSeparator), M = [], b = 0; b < l.length; b += 1) {
                  var _ = l[b];this._log('\nPattern: "' + _.pattern + '"');for (var L = !1, w = 0; w < S.length; w += 1) {
                    var C = S[w],
                        A = _.search(C),
                        I = {};A.isMatch ? (I[C] = A.score, y = !0, L = !0, M.push(A.score)) : (I[C] = 1, this.options.matchAllTokens || M.push(1)), this._log('Token: "' + C + '", score: ' + I[C]);
                  }L && (k += 1);
                }m = M[0];for (var O = M.length, F = 1; F < O; F += 1) {
                  m += M[F];
                }m /= O, this._log("Token score average:", m);
              }var P = x.score;m > -1 && (P = (P + m) / 2), this._log("Score average:", P);var j = !this.options.tokenize || !this.options.matchAllTokens || k >= l.length;if (this._log("\nCheck Matches: " + j), (y || x.isMatch) && j) {
                var z = v[c];z ? z.output.push({ key: r, arrayIndex: o, value: i, score: P, matchedIndices: x.matchedIndices }) : (v[c] = { item: a, output: [{ key: r, arrayIndex: o, value: i, score: P, matchedIndices: x.matchedIndices }] }, g.push(v[c]));
              }
            } else if (s(i)) for (var T = 0, E = i.length; T < E; T += 1) {
              this._analyze({ key: r, arrayIndex: T, value: i[T], record: a, index: c }, { resultMap: v, results: g, tokenSearchers: l, fullSearcher: f });
            }
          }
        } }, { key: "_computeScore", value: function value(e, t) {
          this._log("\n\nComputing score:\n");for (var r = 0, n = t.length; r < n; r += 1) {
            for (var o = t[r].output, i = o.length, a = 0, s = 1, c = 0; c < i; c += 1) {
              var h = e ? e[o[c].key].weight : 1,
                  l = 1 === h ? o[c].score : o[c].score || .001,
                  u = l * h;1 !== h ? s = Math.min(s, u) : (o[c].nScore = u, a += u);
            }t[r].score = 1 === s ? a / i : s, this._log(t[r]);
          }
        } }, { key: "_sort", value: function value(e) {
          this._log("\n\nSorting...."), e.sort(this.options.sortFn);
        } }, { key: "_format", value: function value(e) {
          var t = [];this._log("\n\nOutput:\n\n", (0, _stringify2.default)(e));var r = [];this.options.includeMatches && r.push(function (e, t) {
            var r = e.output;t.matches = [];for (var n = 0, o = r.length; n < o; n += 1) {
              var i = r[n];if (0 !== i.matchedIndices.length) {
                var a = { indices: i.matchedIndices, value: i.value };i.key && (a.key = i.key), i.hasOwnProperty("arrayIndex") && i.arrayIndex > -1 && (a.arrayIndex = i.arrayIndex), t.matches.push(a);
              }
            }
          }), this.options.includeScore && r.push(function (e, t) {
            t.score = e.score;
          });for (var n = 0, o = e.length; n < o; n += 1) {
            var i = e[n];if (this.options.id && (i.item = this.options.getFn(i.item, this.options.id)[0]), r.length) {
              for (var a = { item: i.item }, s = 0, c = r.length; s < c; s += 1) {
                r[s](i, a);
              }t.push(a);
            } else t.push(i.item);
          }return t;
        } }, { key: "_log", value: function value() {
          if (this.options.verbose) {
            var e;(e = console).log.apply(e, arguments);
          }
        } }]), e;
    }();e.exports = c;
  }]);
});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(41)(module)))

/***/ }),

/***/ 5:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Home_vue_vue_type_template_id_75305373___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Home_vue_vue_type_template_id_75305373___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Home_vue_vue_type_template_id_75305373___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ 6:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    [
      _c("vue-progress-bar"),
      _vm._v(" "),
      _c("div", { staticClass: "row container-fluid main_apilist_holder" }, [
        _c("div", { staticClass: "row container apilist" }, [
          _c(
            "section",
            { staticClass: "col-sm-3", attrs: { role: "directory" } },
            [
              _c("h2", [_vm._v("Categories")]),
              _vm._v(" "),
              _c(
                "nav",
                {
                  staticClass: "apilist_categories",
                  attrs: { role: "navigation" }
                },
                [
                  _c(
                    "ul",
                    [
                      _c(
                        "li",
                        {
                          attrs: { tabindex: "0" },
                          on: {
                            click: function($event) {
                              _vm.toggleAuthTypeCheckbox(true)
                              _vm.filterCategory("All")
                            }
                          }
                        },
                        [
                          _c("a", [
                            _vm._v(
                              "\r\n                All Items:\r\n              "
                            )
                          ]),
                          _vm._v(" "),
                          _c(
                            "span",
                            { staticClass: "apilist_categories_count" },
                            [_vm._v(_vm._s(_vm.apiTotalCount))]
                          )
                        ]
                      ),
                      _vm._v(" "),
                      _vm._l(_vm.categoryTypes, function(i, index) {
                        return _c(
                          "li",
                          {
                            attrs: {
                              tabindex: "0",
                              "aria-setsize": _vm.categoryTypes.length,
                              "aria-posinset": index + 1
                            },
                            on: {
                              click: function($event) {
                                _vm.filterCategory(i.catName)
                              },
                              keyup: function($event) {
                                if (
                                  !("button" in $event) &&
                                  _vm._k(
                                    $event.keyCode,
                                    "enter",
                                    13,
                                    $event.key
                                  )
                                ) {
                                  return null
                                }
                                _vm.filterCategory(i.catName)
                              }
                            }
                          },
                          [
                            _c("a", [
                              _vm._v(_vm._s(i.catName) + "\r\n              ")
                            ]),
                            _vm._v(" "),
                            _c(
                              "span",
                              { staticClass: "apilist_categories_count" },
                              [_vm._v(_vm._s(i.catLength))]
                            )
                          ]
                        )
                      })
                    ],
                    2
                  )
                ]
              )
            ]
          ),
          _vm._v(" "),
          _c("div", { staticClass: "col-sm-9 apilist_display" }, [
            _c("div", { staticClass: "row authsearch" }, [
              _c("div", { staticClass: "col-sm-3" }, [
                _c("section", { staticClass: "authtype_filter" }, [
                  _c("h2", [_vm._v("Auth:")]),
                  _vm._v(" "),
                  _c(
                    "ul",
                    [
                      _vm._l(_vm.authTypes, function(i) {
                        return _c("li", [
                          _c("input", {
                            directives: [
                              {
                                name: "model",
                                rawName: "v-model",
                                value: _vm.authTypeSelected,
                                expression: "authTypeSelected"
                              }
                            ],
                            attrs: { type: "checkbox", id: i },
                            domProps: {
                              value: i,
                              checked: Array.isArray(_vm.authTypeSelected)
                                ? _vm._i(_vm.authTypeSelected, i) > -1
                                : _vm.authTypeSelected
                            },
                            on: {
                              change: [
                                function($event) {
                                  var $$a = _vm.authTypeSelected,
                                    $$el = $event.target,
                                    $$c = $$el.checked ? true : false
                                  if (Array.isArray($$a)) {
                                    var $$v = i,
                                      $$i = _vm._i($$a, $$v)
                                    if ($$el.checked) {
                                      $$i < 0 &&
                                        (_vm.authTypeSelected = $$a.concat([
                                          $$v
                                        ]))
                                    } else {
                                      $$i > -1 &&
                                        (_vm.authTypeSelected = $$a
                                          .slice(0, $$i)
                                          .concat($$a.slice($$i + 1)))
                                    }
                                  } else {
                                    _vm.authTypeSelected = $$c
                                  }
                                },
                                function($event) {
                                  _vm.filterAuthType()
                                }
                              ]
                            }
                          }),
                          _vm._v(" "),
                          i === null
                            ? _c(
                                "label",
                                { attrs: { tabindex: "0", for: i } },
                                [_vm._v("None")]
                              )
                            : _c(
                                "label",
                                { attrs: { tabindex: "0", for: i } },
                                [_vm._v(_vm._s(i))]
                              )
                        ])
                      }),
                      _vm._v(" "),
                      _c("hr", {
                        attrs: {
                          role: "separator",
                          "aria-expanded": "true",
                          "aria-orientation": "vertical"
                        }
                      }),
                      _vm._v(" "),
                      _c("li", [
                        _c("input", {
                          directives: [
                            {
                              name: "model",
                              rawName: "v-model",
                              value: _vm.https,
                              expression: "https"
                            }
                          ],
                          attrs: { type: "checkbox", id: "checkbox" },
                          domProps: {
                            checked: Array.isArray(_vm.https)
                              ? _vm._i(_vm.https, null) > -1
                              : _vm.https
                          },
                          on: {
                            change: [
                              function($event) {
                                var $$a = _vm.https,
                                  $$el = $event.target,
                                  $$c = $$el.checked ? true : false
                                if (Array.isArray($$a)) {
                                  var $$v = null,
                                    $$i = _vm._i($$a, $$v)
                                  if ($$el.checked) {
                                    $$i < 0 && (_vm.https = $$a.concat([$$v]))
                                  } else {
                                    $$i > -1 &&
                                      (_vm.https = $$a
                                        .slice(0, $$i)
                                        .concat($$a.slice($$i + 1)))
                                  }
                                } else {
                                  _vm.https = $$c
                                }
                              },
                              function($event) {
                                _vm.filterAuthType()
                              }
                            ]
                          }
                        }),
                        _vm._v(" "),
                        _c(
                          "label",
                          { attrs: { tabindex: "0", for: "checkbox" } },
                          [_vm._v("HTTPS only")]
                        )
                      ])
                    ],
                    2
                  )
                ])
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "col-sm-9" }, [
                _c(
                  "div",
                  { staticClass: "apilist_search_holder" },
                  [
                    _c("vcSearch", {
                      attrs: { "pr-current-category": _vm.currentCategory },
                      on: {
                        search: function($event) {
                          _vm.search()
                        }
                      }
                    }),
                    _vm._v(" "),
                    _c("br"),
                    _vm._v(" "),
                    _c(
                      "button",
                      {
                        staticClass: "btn btn1-01",
                        attrs: { "data-message": "Show All Items" },
                        on: {
                          click: function($event) {
                            _vm.toggleAuthTypeCheckbox(true)
                            _vm.filterCategory("All")
                          }
                        }
                      },
                      [_vm._v("Show All")]
                    )
                  ],
                  1
                )
              ])
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "row api_status_holder" }, [
              _c(
                "div",
                {
                  staticClass: "col-sm-3 api_status",
                  attrs: {
                    id: "api_status",
                    "aria-atomic": "true",
                    "aria-relevant": "additions text",
                    "aria-live": "assertive"
                  }
                },
                [
                  _vm.currentCategory === "All"
                    ? _c("p", [_vm._v("Showing All Items")])
                    : _c("p", [
                        _vm._v(
                          "currentCategory: " + _vm._s(_vm.currentCategory)
                        )
                      ]),
                  _vm._v(" "),
                  _c("p", { attrs: { role: "alert" } }, [
                    _vm._v(_vm._s(_vm.status.search))
                  ])
                ]
              ),
              _vm._v(" "),
              _c("div", { staticClass: "col-sm-9 pg_container" }, [
                _vm.pagerButtons
                  ? _c("span", { staticClass: "pg_holder" }, [
                      _c(
                        "button",
                        {
                          staticClass: "btn btn1-01 btn_prev",
                          on: {
                            click: function($event) {
                              _vm.prevPage()
                            }
                          }
                        },
                        [
                          _c(
                            "svg",
                            {
                              attrs: {
                                xmlns: "http://www.w3.org/2000/svg",
                                viewBox: "0 0 24 24"
                              }
                            },
                            [
                              _c("path", {
                                attrs: {
                                  d:
                                    "M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"
                                }
                              })
                            ]
                          ),
                          _vm._v("\r\n              Prev\r\n              ")
                        ]
                      ),
                      _vm._v(" "),
                      _c("p", [_vm._v("Page")]),
                      _vm._v(" "),
                      _c(
                        "select",
                        {
                          directives: [
                            {
                              name: "model",
                              rawName: "v-model",
                              value: _vm.currentPage,
                              expression: "currentPage"
                            }
                          ],
                          staticClass: "pg_select",
                          on: {
                            change: [
                              function($event) {
                                var $$selectedVal = Array.prototype.filter
                                  .call($event.target.options, function(o) {
                                    return o.selected
                                  })
                                  .map(function(o) {
                                    var val = "_value" in o ? o._value : o.value
                                    return val
                                  })
                                _vm.currentPage = $event.target.multiple
                                  ? $$selectedVal
                                  : $$selectedVal[0]
                              },
                              function($event) {
                                _vm.showPage($event.target.value)
                              }
                            ]
                          }
                        },
                        _vm._l(_vm.totalPages, function(i) {
                          return _c(
                            "option",
                            {
                              domProps: { value: i },
                              on: {
                                click: function($event) {
                                  _vm.showPage(i)
                                }
                              }
                            },
                            [_vm._v(_vm._s(i))]
                          )
                        })
                      ),
                      _vm._v(" "),
                      _c("p", [_vm._v("of " + _vm._s(_vm.totalPages))]),
                      _vm._v(" "),
                      _c(
                        "button",
                        {
                          staticClass: "btn btn1-01 btn_next",
                          on: {
                            click: function($event) {
                              _vm.nextPage()
                            }
                          }
                        },
                        [
                          _vm._v("\r\n              Next\r\n              "),
                          _c(
                            "svg",
                            {
                              attrs: {
                                xmlns: "http://www.w3.org/2000/svg",
                                viewBox: "0 0 24 24"
                              }
                            },
                            [
                              _c("path", {
                                attrs: {
                                  d:
                                    "M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"
                                }
                              })
                            ]
                          )
                        ]
                      ),
                      _vm._v(" "),
                      _c("p", [_vm._v("Items per page:")]),
                      _vm._v(" "),
                      _c(
                        "select",
                        {
                          directives: [
                            {
                              name: "model",
                              rawName: "v-model",
                              value: _vm.perPage,
                              expression: "perPage"
                            }
                          ],
                          staticClass: "pg_perpage",
                          on: {
                            change: [
                              function($event) {
                                var $$selectedVal = Array.prototype.filter
                                  .call($event.target.options, function(o) {
                                    return o.selected
                                  })
                                  .map(function(o) {
                                    var val = "_value" in o ? o._value : o.value
                                    return val
                                  })
                                _vm.perPage = $event.target.multiple
                                  ? $$selectedVal
                                  : $$selectedVal[0]
                              },
                              function($event) {
                                _vm.activatePager(_vm.apiListFiltered)
                              }
                            ]
                          }
                        },
                        _vm._l(_vm.perPageItems, function(i) {
                          return _c(
                            "option",
                            {
                              domProps: { value: i },
                              on: {
                                click: function($event) {
                                  _vm.activatePager(_vm.apiListFiltered)
                                }
                              }
                            },
                            [_vm._v(_vm._s(i))]
                          )
                        })
                      )
                    ])
                  : _vm._e()
              ])
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "row apilist_sorter" }, [
              _c("div", { staticClass: "col-xs-12 col-sm-7" }, [
                _c(
                  "button",
                  {
                    staticClass: "btn btn1-01 btn_sort",
                    attrs: { "data-message": "Sort Ascending or Descending" },
                    on: {
                      click: function($event) {
                        _vm.sort_table("API")
                      }
                    }
                  },
                  [
                    _vm._v("\r\n            API\r\n            "),
                    _vm._v(" "),
                    _vm.sortAsc
                      ? _c("span", [
                          _c(
                            "svg",
                            {
                              attrs: {
                                xmlns: "http://www.w3.org/2000/svg",
                                viewBox: "0 0 24 24"
                              }
                            },
                            [
                              _c("path", {
                                attrs: {
                                  d:
                                    "M7.41 15.41L12 10.83l4.59 4.58L18 14l-6-6-6 6z"
                                }
                              })
                            ]
                          )
                        ])
                      : _c("span", [
                          _c(
                            "svg",
                            {
                              attrs: {
                                xmlns: "http://www.w3.org/2000/svg",
                                viewBox: "0 0 24 24"
                              }
                            },
                            [
                              _c("path", {
                                attrs: {
                                  d:
                                    "M7.41 7.84L12 12.42l4.59-4.58L18 9.25l-6 6-6-6z"
                                }
                              })
                            ]
                          )
                        ])
                  ]
                )
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "col-xs-12 col-sm-2" }, [
                _c(
                  "button",
                  {
                    staticClass: "btn btn1-01 btn_sort",
                    attrs: { "data-message": "Sort Ascending or Descending" },
                    on: {
                      click: function($event) {
                        _vm.sort_table("Category")
                      }
                    }
                  },
                  [
                    _vm._v("\r\n            Category\r\n            "),
                    _vm._v(" "),
                    _vm.sortAsc
                      ? _c("span", [
                          _c(
                            "svg",
                            {
                              attrs: {
                                xmlns: "http://www.w3.org/2000/svg",
                                viewBox: "0 0 24 24"
                              }
                            },
                            [
                              _c("path", {
                                attrs: {
                                  d:
                                    "M7.41 15.41L12 10.83l4.59 4.58L18 14l-6-6-6 6z"
                                }
                              })
                            ]
                          )
                        ])
                      : _c("span", [
                          _c(
                            "svg",
                            {
                              attrs: {
                                xmlns: "http://www.w3.org/2000/svg",
                                viewBox: "0 0 24 24"
                              }
                            },
                            [
                              _c("path", {
                                attrs: {
                                  d:
                                    "M7.41 7.84L12 12.42l4.59-4.58L18 9.25l-6 6-6-6z"
                                }
                              })
                            ]
                          )
                        ])
                  ]
                )
              ]),
              _vm._v(" "),
              _vm._m(0),
              _vm._v(" "),
              _vm._m(1)
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "row apilist_holder" }, [
              _c(
                "div",
                { staticClass: "col-sm-12" },
                [_c("vcApiList", { attrs: { "pr-api-list": _vm.apiList } })],
                1
              )
            ])
          ])
        ])
      ])
    ],
    1
  )
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "col-xs-12 col-sm-2" }, [
      _c("p", [_vm._v("Auth")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "col-xs-12 col-sm-1" }, [
      _c("p", [_vm._v("HTTPS")])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ 7:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Home_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Home_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Home_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Home_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Home_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Home_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 8:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _axios = __webpack_require__(9);

var _axios2 = _interopRequireDefault(_axios);

var _arr_filter = __webpack_require__(36);

var _arr_extractUnique = __webpack_require__(37);

var _arr_sortValue = __webpack_require__(38);

var _search_fuse = __webpack_require__(39);

var _pager = __webpack_require__(115);

var _pager2 = _interopRequireDefault(_pager);

var _store = __webpack_require__(116);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var vcApiList = function vcApiList() {
  return __webpack_require__.e(/* import() */ 3).then(__webpack_require__.bind(null, 118));
}; //
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

var vcSearch = function vcSearch() {
  return __webpack_require__.e(/* import() */ 4).then(__webpack_require__.bind(null, 123));
};
exports.default = {
  data: function data() {
    return {
      API_URL: "https://raw.githubusercontent.com/liquidnuker/public-apis/json/json/entries.json",
      BACKUP_URL: "./entries_offline.json",

      apiListCache: "", // default unfiltered items
      apiTotalCount: "",
      apiListFiltered: "", // filtered items
      apiList: "", // displayed/paginated items

      categoryTypes: [],
      currentCategory: "All",
      authTypes: "",
      authTypeSelected: [], // checkbox
      https: "",

      // paginator 
      pager: null,
      currentPage: "",
      totalPages: "",
      pagerButtons: true,
      perPage: 20,
      perPageItems: [10, 20, 40, 60, 100],

      sortAsc: true,

      // messages
      status: {
        search: "status.search"
      }
    };
  },

  components: {
    vcApiList: vcApiList,
    vcSearch: vcSearch
  },
  mounted: function mounted() {
    // this.getApiData(this.API_URL);
    this.getApiData(this.BACKUP_URL);
  },
  methods: {
    getApiData: function getApiData(url) {
      var _this = this;

      this.$Progress.start();

      _axios2.default.get(url).then(function (response) {
        _this.apiTotalCount = response.data.count;
        _this.apiListCache = response.data.entries;
        _this.apiListFiltered = _this.apiListCache;
        _this.activatePager(_this.apiListCache);
      }).then(function () {
        _this.addFiltersList(_this.apiListCache);
        _this.$Progress.finish();
      }).catch(function (error) {
        if (error.response) {
          // The request was made and the server responded with a status code
          // that falls out of the range of 2xx
          console.log(error.response.data);
          console.log(error.response.status);
          console.log(error.response.headers);

          // todo: add retry counter
          _this.getApiData(_this.BACKUP_URL);
        } else if (error.request) {
          // The request was made but no response was received
          // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
          // http.ClientRequest in node.js

          // todo: add retry counter
          _this.getApiData(_this.BACKUP_URL);
        } else {
          // Something happened in setting up the request that triggered an Error
          console.log("Error", error.message);
        }
        console.log(error.config);
      });
    },
    activatePager: function activatePager(data) {
      this.pager = null;
      this.pager = new _pager2.default({
        data: data,
        perPage: this.perPage
      });

      this.apiList = this.pager.page(1);
      this.currentPage = this.pager.currentPage;
      this.totalPages = this.pager.getTotalPages();
      this.pagerButtons = true;
    },
    showPage: function showPage(num) {
      this.apiList = this.pager.page(num);
    },
    prevPage: function prevPage() {
      this.currentPage = this.pager.prev();
      this.apiList = this.pager.page(this.currentPage);
    },
    nextPage: function nextPage() {
      this.currentPage = this.pager.next();
      this.apiList = this.pager.page(this.currentPage);
    },
    addFiltersList: function addFiltersList(arr) {
      var _this2 = this;

      // for authTypes
      this.authTypes = (0, _arr_extractUnique.arr_extractUnique)(arr, "Auth");
      this.toggleAuthTypeCheckbox(true);

      // for categoryTypes
      var temp = (0, _arr_extractUnique.arr_extractUnique)(arr, "Category");
      // filter to get length of each item then push
      temp.map(function (i) {
        var l = (0, _arr_filter.arr_filter)(_this2.apiListCache, "Category", i);
        _this2.categoryTypes.push({
          catName: i,
          catLength: l.length
        });
      });
      temp = null;
    },
    toggleAuthTypeCheckbox: function toggleAuthTypeCheckbox(checked) {
      if (checked) {
        this.authTypeSelected = [];
        for (var i in this.authTypes) {
          this.authTypeSelected.push(this.authTypes[i]);
        }
      } else {
        this.authTypeSelected = [];
      }
      // uncheck https checkbox when showing all items
      this.https = false;
    },
    filterCategory: function filterCategory(categoryType) {
      this.currentCategory = categoryType;
      this.filterAuthType();
    },
    setCategoryTemp: function setCategoryTemp() {
      console.log("setCategoryTemp");
      var categoryTemp = void 0;

      if (this.currentCategory !== "All") {
        return (0, _arr_filter.arr_filter)(this.apiListCache, "Category", this.currentCategory);
      } else {
        // to filter authTypes from default items
        return this.apiListCache;
      }
      // return categoryTemp;
    },
    setAuthTemp: function setAuthTemp(categoryTemp) {
      // authType checkbox
      var authTemp = [];
      this.authTypeSelected.map(function (i) {
        // get items of each authTypeSelected
        var t2 = (0, _arr_filter.arr_filter)(categoryTemp, "Auth", i);
        authTemp = authTemp.concat(t2);
        t2 = null;
      });
      return authTemp;
    },
    setHttpsCheckbox: function setHttpsCheckbox(authTemp) {
      // HTTPS checkbox
      if (this.https) {
        var hTemp = (0, _arr_filter.arr_filter)(authTemp, "HTTPS", this.https);
        this.apiListFiltered = hTemp;
        hTemp = null;
      } else {
        this.apiListFiltered = authTemp;
      }
      return this.apiListFiltered;
    },
    filterAuthType: function filterAuthType() {
      this.status.search = "";

      var categoryTemp = this.setCategoryTemp();
      var authTemp = this.setAuthTemp(categoryTemp);
      this.setHttpsCheckbox(authTemp);

      if (authTemp.length === 0) {
        console.log("no results");
      }

      authTemp = null;
      categoryTemp = null;
      this.activatePager(this.apiListFiltered);
    },
    search: function search() {
      // let t0 = performance.now();
      var res = (0, _search_fuse.search_fuse)({
        data: this.apiListFiltered,
        value: _store.store.fc.searchKeyword,
        searchKeys: ["API", "Link"]
      });

      if (res.length === 0) {
        this.status.search = "No results found";
      } else {
        // let t1 = performance.now();
        // this.status.search = `Found ${res.length} items ${t1 - t0}`;
        this.status.search = "Found " + res.length + " items";
        this.activatePager(res);
        res = null;
        _store.store.fc.searchKeyword = null;
      }
    },
    sort_table: function sort_table(sortBy) {
      this.sortAsc = !this.sortAsc;
      var sorted = (0, _arr_sortValue.arr_sortValue)(sortBy, this.apiListFiltered);

      if (!this.sortAsc) {
        this.apiListFiltered = sorted;
      } else {
        this.apiListFiltered = sorted.reverse();
      }
      this.sorted = null;
      this.activatePager(this.apiListFiltered);
    }
  }
};

/***/ })

}]);