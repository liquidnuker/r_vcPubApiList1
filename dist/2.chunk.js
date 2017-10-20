webpackJsonp([2],{

/***/ 40:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_vcApiList_vue__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_6a12d2f2_hasScoped_false_node_modules_vue_loader_lib_selector_type_template_index_0_vcApiList_vue__ = __webpack_require__(42);
var disposed = false
var normalizeComponent = __webpack_require__(4)
/* script */

/* template */

/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_vcApiList_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_6a12d2f2_hasScoped_false_node_modules_vue_loader_lib_selector_type_template_index_0_vcApiList_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "vue-components\\vcApiList.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] vcApiList.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-6a12d2f2", Component.options)
  } else {
    hotAPI.reload("data-v-6a12d2f2", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),

/***/ 41:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
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

/* harmony default export */ __webpack_exports__["a"] = ({
  data: function data() {
    return {};
  },

  props: ["prApiList"],
  components: {},
  mounted: function mounted() {},
  methods: {}
});

/***/ }),

/***/ 42:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [_c('table', {
    staticClass: "col-xs-12 apilist_table"
  }, [_c('tbody', {
    attrs: {
      "aria-live": "assertive",
      "aria-atomic": "true",
      "aria-describedby": "api_status"
    }
  }, _vm._l((_vm.prApiList), function(i) {
    return _c('tr', {
      staticClass: "row"
    }, [_c('td', {
      staticClass: "col-xs-12 col-sm-7"
    }, [_c('p', {
      staticClass: "apiname"
    }, [_vm._v(_vm._s(i.API))]), _vm._v(" "), _c('summary', [_c('p', {
      staticClass: "apidesc"
    }, [_vm._v(_vm._s(i.Description))])]), _vm._v(" "), _c('a', {
      staticClass: "apilink",
      attrs: {
        "href": i.Link
      }
    }, [_vm._v(_vm._s(i.Link))])]), _vm._v(" "), _c('td', {
      staticClass: "col-xs-12 col-sm-2"
    }, [_c('p', [_vm._v(_vm._s(i.Category))])]), _vm._v(" "), _c('td', {
      staticClass: "col-xs-12 col-sm-2"
    }, [(!i.Auth) ? _c('p', [_vm._v(" ")]) : _vm._e(), _vm._v(" "), _c('p', [_vm._v(_vm._s(i.Auth))])]), _vm._v(" "), _c('td', {
      staticClass: "col-xs-12 col-sm-1 https"
    }, [(i.HTTPS) ? _c('p', [_vm._v("✔")]) : _c('p', [_vm._v(" ")])])])
  }))])])
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-6a12d2f2", esExports)
  }
}

/***/ })

});