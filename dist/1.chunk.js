webpackJsonp([1],[
/* 0 */,
/* 1 */,
/* 2 */,
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_Home_vue__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_19b7a970_hasScoped_false_node_modules_vue_loader_lib_selector_type_template_index_0_Home_vue__ = __webpack_require__(39);
var disposed = false
var normalizeComponent = __webpack_require__(6)
/* script */

/* template */

/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_Home_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_19b7a970_hasScoped_false_node_modules_vue_loader_lib_selector_type_template_index_0_Home_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "vue-components\\Home.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] Home.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-19b7a970", Component.options)
  } else {
    hotAPI.reload("data-v-19b7a970", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var bind = __webpack_require__(7);
var isBuffer = __webpack_require__(16);

/*global toString:true*/

// utils is a library of generic helper functions non-specific to axios

var toString = Object.prototype.toString;

/**
 * Determine if a value is an Array
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is an Array, otherwise false
 */
function isArray(val) {
  return toString.call(val) === '[object Array]';
}

/**
 * Determine if a value is an ArrayBuffer
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is an ArrayBuffer, otherwise false
 */
function isArrayBuffer(val) {
  return toString.call(val) === '[object ArrayBuffer]';
}

/**
 * Determine if a value is a FormData
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is an FormData, otherwise false
 */
function isFormData(val) {
  return (typeof FormData !== 'undefined') && (val instanceof FormData);
}

/**
 * Determine if a value is a view on an ArrayBuffer
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a view on an ArrayBuffer, otherwise false
 */
function isArrayBufferView(val) {
  var result;
  if ((typeof ArrayBuffer !== 'undefined') && (ArrayBuffer.isView)) {
    result = ArrayBuffer.isView(val);
  } else {
    result = (val) && (val.buffer) && (val.buffer instanceof ArrayBuffer);
  }
  return result;
}

/**
 * Determine if a value is a String
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a String, otherwise false
 */
function isString(val) {
  return typeof val === 'string';
}

/**
 * Determine if a value is a Number
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Number, otherwise false
 */
function isNumber(val) {
  return typeof val === 'number';
}

/**
 * Determine if a value is undefined
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if the value is undefined, otherwise false
 */
function isUndefined(val) {
  return typeof val === 'undefined';
}

/**
 * Determine if a value is an Object
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is an Object, otherwise false
 */
function isObject(val) {
  return val !== null && typeof val === 'object';
}

/**
 * Determine if a value is a Date
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Date, otherwise false
 */
function isDate(val) {
  return toString.call(val) === '[object Date]';
}

/**
 * Determine if a value is a File
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a File, otherwise false
 */
function isFile(val) {
  return toString.call(val) === '[object File]';
}

/**
 * Determine if a value is a Blob
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Blob, otherwise false
 */
function isBlob(val) {
  return toString.call(val) === '[object Blob]';
}

/**
 * Determine if a value is a Function
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Function, otherwise false
 */
function isFunction(val) {
  return toString.call(val) === '[object Function]';
}

/**
 * Determine if a value is a Stream
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Stream, otherwise false
 */
function isStream(val) {
  return isObject(val) && isFunction(val.pipe);
}

/**
 * Determine if a value is a URLSearchParams object
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a URLSearchParams object, otherwise false
 */
function isURLSearchParams(val) {
  return typeof URLSearchParams !== 'undefined' && val instanceof URLSearchParams;
}

/**
 * Trim excess whitespace off the beginning and end of a string
 *
 * @param {String} str The String to trim
 * @returns {String} The String freed of excess whitespace
 */
function trim(str) {
  return str.replace(/^\s*/, '').replace(/\s*$/, '');
}

/**
 * Determine if we're running in a standard browser environment
 *
 * This allows axios to run in a web worker, and react-native.
 * Both environments support XMLHttpRequest, but not fully standard globals.
 *
 * web workers:
 *  typeof window -> undefined
 *  typeof document -> undefined
 *
 * react-native:
 *  navigator.product -> 'ReactNative'
 */
function isStandardBrowserEnv() {
  if (typeof navigator !== 'undefined' && navigator.product === 'ReactNative') {
    return false;
  }
  return (
    typeof window !== 'undefined' &&
    typeof document !== 'undefined'
  );
}

/**
 * Iterate over an Array or an Object invoking a function for each item.
 *
 * If `obj` is an Array callback will be called passing
 * the value, index, and complete array for each item.
 *
 * If 'obj' is an Object callback will be called passing
 * the value, key, and complete object for each property.
 *
 * @param {Object|Array} obj The object to iterate
 * @param {Function} fn The callback to invoke for each item
 */
function forEach(obj, fn) {
  // Don't bother if no value provided
  if (obj === null || typeof obj === 'undefined') {
    return;
  }

  // Force an array if not already something iterable
  if (typeof obj !== 'object' && !isArray(obj)) {
    /*eslint no-param-reassign:0*/
    obj = [obj];
  }

  if (isArray(obj)) {
    // Iterate over array values
    for (var i = 0, l = obj.length; i < l; i++) {
      fn.call(null, obj[i], i, obj);
    }
  } else {
    // Iterate over object keys
    for (var key in obj) {
      if (Object.prototype.hasOwnProperty.call(obj, key)) {
        fn.call(null, obj[key], key, obj);
      }
    }
  }
}

/**
 * Accepts varargs expecting each argument to be an object, then
 * immutably merges the properties of each object and returns result.
 *
 * When multiple objects contain the same key the later object in
 * the arguments list will take precedence.
 *
 * Example:
 *
 * ```js
 * var result = merge({foo: 123}, {foo: 456});
 * console.log(result.foo); // outputs 456
 * ```
 *
 * @param {Object} obj1 Object to merge
 * @returns {Object} Result of all merge properties
 */
function merge(/* obj1, obj2, obj3, ... */) {
  var result = {};
  function assignValue(val, key) {
    if (typeof result[key] === 'object' && typeof val === 'object') {
      result[key] = merge(result[key], val);
    } else {
      result[key] = val;
    }
  }

  for (var i = 0, l = arguments.length; i < l; i++) {
    forEach(arguments[i], assignValue);
  }
  return result;
}

/**
 * Extends object a by mutably adding to it the properties of object b.
 *
 * @param {Object} a The object to be extended
 * @param {Object} b The object to copy properties from
 * @param {Object} thisArg The object to bind function to
 * @return {Object} The resulting value of object a
 */
function extend(a, b, thisArg) {
  forEach(b, function assignValue(val, key) {
    if (thisArg && typeof val === 'function') {
      a[key] = bind(val, thisArg);
    } else {
      a[key] = val;
    }
  });
  return a;
}

module.exports = {
  isArray: isArray,
  isArrayBuffer: isArrayBuffer,
  isBuffer: isBuffer,
  isFormData: isFormData,
  isArrayBufferView: isArrayBufferView,
  isString: isString,
  isNumber: isNumber,
  isObject: isObject,
  isUndefined: isUndefined,
  isDate: isDate,
  isFile: isFile,
  isBlob: isBlob,
  isFunction: isFunction,
  isStream: isStream,
  isURLSearchParams: isURLSearchParams,
  isStandardBrowserEnv: isStandardBrowserEnv,
  forEach: forEach,
  merge: merge,
  extend: extend,
  trim: trim
};


/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {

var utils = __webpack_require__(4);
var normalizeHeaderName = __webpack_require__(18);

var DEFAULT_CONTENT_TYPE = {
  'Content-Type': 'application/x-www-form-urlencoded'
};

function setContentTypeIfUnset(headers, value) {
  if (!utils.isUndefined(headers) && utils.isUndefined(headers['Content-Type'])) {
    headers['Content-Type'] = value;
  }
}

function getDefaultAdapter() {
  var adapter;
  if (typeof XMLHttpRequest !== 'undefined') {
    // For browsers use XHR adapter
    adapter = __webpack_require__(9);
  } else if (typeof process !== 'undefined') {
    // For node use HTTP adapter
    adapter = __webpack_require__(9);
  }
  return adapter;
}

var defaults = {
  adapter: getDefaultAdapter(),

  transformRequest: [function transformRequest(data, headers) {
    normalizeHeaderName(headers, 'Content-Type');
    if (utils.isFormData(data) ||
      utils.isArrayBuffer(data) ||
      utils.isBuffer(data) ||
      utils.isStream(data) ||
      utils.isFile(data) ||
      utils.isBlob(data)
    ) {
      return data;
    }
    if (utils.isArrayBufferView(data)) {
      return data.buffer;
    }
    if (utils.isURLSearchParams(data)) {
      setContentTypeIfUnset(headers, 'application/x-www-form-urlencoded;charset=utf-8');
      return data.toString();
    }
    if (utils.isObject(data)) {
      setContentTypeIfUnset(headers, 'application/json;charset=utf-8');
      return JSON.stringify(data);
    }
    return data;
  }],

  transformResponse: [function transformResponse(data) {
    /*eslint no-param-reassign:0*/
    if (typeof data === 'string') {
      try {
        data = JSON.parse(data);
      } catch (e) { /* Ignore */ }
    }
    return data;
  }],

  timeout: 0,

  xsrfCookieName: 'XSRF-TOKEN',
  xsrfHeaderName: 'X-XSRF-TOKEN',

  maxContentLength: -1,

  validateStatus: function validateStatus(status) {
    return status >= 200 && status < 300;
  }
};

defaults.headers = {
  common: {
    'Accept': 'application/json, text/plain, */*'
  }
};

utils.forEach(['delete', 'get', 'head'], function forEachMethodNoData(method) {
  defaults.headers[method] = {};
});

utils.forEach(['post', 'put', 'patch'], function forEachMethodWithData(method) {
  defaults.headers[method] = utils.merge(DEFAULT_CONTENT_TYPE);
});

module.exports = defaults;

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(8)))

/***/ }),
/* 6 */
/***/ (function(module, exports) {

/* globals __VUE_SSR_CONTEXT__ */

// this module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle

module.exports = function normalizeComponent (
  rawScriptExports,
  compiledTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier /* server only */
) {
  var esModule
  var scriptExports = rawScriptExports = rawScriptExports || {}

  // ES6 modules interop
  var type = typeof rawScriptExports.default
  if (type === 'object' || type === 'function') {
    esModule = rawScriptExports
    scriptExports = rawScriptExports.default
  }

  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // render functions
  if (compiledTemplate) {
    options.render = compiledTemplate.render
    options.staticRenderFns = compiledTemplate.staticRenderFns
  }

  // scopedId
  if (scopeId) {
    options._scopeId = scopeId
  }

  var hook
  if (moduleIdentifier) { // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = injectStyles
  }

  if (hook) {
    var functional = options.functional
    var existing = functional
      ? options.render
      : options.beforeCreate
    if (!functional) {
      // inject component registration as beforeCreate hook
      options.beforeCreate = existing
        ? [].concat(existing, hook)
        : [hook]
    } else {
      // register for functioal component in vue file
      options.render = function renderWithStyleInjection (h, context) {
        hook.call(context)
        return existing(h, context)
      }
    }
  }

  return {
    esModule: esModule,
    exports: scriptExports,
    options: options
  }
}


/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function bind(fn, thisArg) {
  return function wrap() {
    var args = new Array(arguments.length);
    for (var i = 0; i < args.length; i++) {
      args[i] = arguments[i];
    }
    return fn.apply(thisArg, args);
  };
};


/***/ }),
/* 8 */
/***/ (function(module, exports) {

// shim for using process in browser
var process = module.exports = {};

// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

function defaultSetTimout() {
    throw new Error('setTimeout has not been defined');
}
function defaultClearTimeout () {
    throw new Error('clearTimeout has not been defined');
}
(function () {
    try {
        if (typeof setTimeout === 'function') {
            cachedSetTimeout = setTimeout;
        } else {
            cachedSetTimeout = defaultSetTimout;
        }
    } catch (e) {
        cachedSetTimeout = defaultSetTimout;
    }
    try {
        if (typeof clearTimeout === 'function') {
            cachedClearTimeout = clearTimeout;
        } else {
            cachedClearTimeout = defaultClearTimeout;
        }
    } catch (e) {
        cachedClearTimeout = defaultClearTimeout;
    }
} ())
function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout) {
        //normal enviroments in sane situations
        return setTimeout(fun, 0);
    }
    // if setTimeout wasn't available but was latter defined
    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
        cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedSetTimeout(fun, 0);
    } catch(e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
        } catch(e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return cachedSetTimeout.call(this, fun, 0);
        }
    }


}
function runClearTimeout(marker) {
    if (cachedClearTimeout === clearTimeout) {
        //normal enviroments in sane situations
        return clearTimeout(marker);
    }
    // if clearTimeout wasn't available but was latter defined
    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
        cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedClearTimeout(marker);
    } catch (e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
        } catch (e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
            return cachedClearTimeout.call(this, marker);
        }
    }



}
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
    if (!draining || !currentQueue) {
        return;
    }
    draining = false;
    if (currentQueue.length) {
        queue = currentQueue.concat(queue);
    } else {
        queueIndex = -1;
    }
    if (queue.length) {
        drainQueue();
    }
}

function drainQueue() {
    if (draining) {
        return;
    }
    var timeout = runTimeout(cleanUpNextTick);
    draining = true;

    var len = queue.length;
    while(len) {
        currentQueue = queue;
        queue = [];
        while (++queueIndex < len) {
            if (currentQueue) {
                currentQueue[queueIndex].run();
            }
        }
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    runClearTimeout(timeout);
}

process.nextTick = function (fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) {
        for (var i = 1; i < arguments.length; i++) {
            args[i - 1] = arguments[i];
        }
    }
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) {
        runTimeout(drainQueue);
    }
};

// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function () {
    this.fun.apply(null, this.array);
};
process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues
process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;
process.prependListener = noop;
process.prependOnceListener = noop;

process.listeners = function (name) { return [] }

process.binding = function (name) {
    throw new Error('process.binding is not supported');
};

process.cwd = function () { return '/' };
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function() { return 0; };


/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {

var utils = __webpack_require__(4);
var settle = __webpack_require__(19);
var buildURL = __webpack_require__(21);
var parseHeaders = __webpack_require__(22);
var isURLSameOrigin = __webpack_require__(23);
var createError = __webpack_require__(10);
var btoa = (typeof window !== 'undefined' && window.btoa && window.btoa.bind(window)) || __webpack_require__(24);

module.exports = function xhrAdapter(config) {
  return new Promise(function dispatchXhrRequest(resolve, reject) {
    var requestData = config.data;
    var requestHeaders = config.headers;

    if (utils.isFormData(requestData)) {
      delete requestHeaders['Content-Type']; // Let the browser set it
    }

    var request = new XMLHttpRequest();
    var loadEvent = 'onreadystatechange';
    var xDomain = false;

    // For IE 8/9 CORS support
    // Only supports POST and GET calls and doesn't returns the response headers.
    // DON'T do this for testing b/c XMLHttpRequest is mocked, not XDomainRequest.
    if (process.env.NODE_ENV !== 'test' &&
        typeof window !== 'undefined' &&
        window.XDomainRequest && !('withCredentials' in request) &&
        !isURLSameOrigin(config.url)) {
      request = new window.XDomainRequest();
      loadEvent = 'onload';
      xDomain = true;
      request.onprogress = function handleProgress() {};
      request.ontimeout = function handleTimeout() {};
    }

    // HTTP basic authentication
    if (config.auth) {
      var username = config.auth.username || '';
      var password = config.auth.password || '';
      requestHeaders.Authorization = 'Basic ' + btoa(username + ':' + password);
    }

    request.open(config.method.toUpperCase(), buildURL(config.url, config.params, config.paramsSerializer), true);

    // Set the request timeout in MS
    request.timeout = config.timeout;

    // Listen for ready state
    request[loadEvent] = function handleLoad() {
      if (!request || (request.readyState !== 4 && !xDomain)) {
        return;
      }

      // The request errored out and we didn't get a response, this will be
      // handled by onerror instead
      // With one exception: request that using file: protocol, most browsers
      // will return status as 0 even though it's a successful request
      if (request.status === 0 && !(request.responseURL && request.responseURL.indexOf('file:') === 0)) {
        return;
      }

      // Prepare the response
      var responseHeaders = 'getAllResponseHeaders' in request ? parseHeaders(request.getAllResponseHeaders()) : null;
      var responseData = !config.responseType || config.responseType === 'text' ? request.responseText : request.response;
      var response = {
        data: responseData,
        // IE sends 1223 instead of 204 (https://github.com/mzabriskie/axios/issues/201)
        status: request.status === 1223 ? 204 : request.status,
        statusText: request.status === 1223 ? 'No Content' : request.statusText,
        headers: responseHeaders,
        config: config,
        request: request
      };

      settle(resolve, reject, response);

      // Clean up request
      request = null;
    };

    // Handle low level network errors
    request.onerror = function handleError() {
      // Real errors are hidden from us by the browser
      // onerror should only fire if it's a network error
      reject(createError('Network Error', config, null, request));

      // Clean up request
      request = null;
    };

    // Handle timeout
    request.ontimeout = function handleTimeout() {
      reject(createError('timeout of ' + config.timeout + 'ms exceeded', config, 'ECONNABORTED',
        request));

      // Clean up request
      request = null;
    };

    // Add xsrf header
    // This is only done if running in a standard browser environment.
    // Specifically not if we're in a web worker, or react-native.
    if (utils.isStandardBrowserEnv()) {
      var cookies = __webpack_require__(25);

      // Add xsrf header
      var xsrfValue = (config.withCredentials || isURLSameOrigin(config.url)) && config.xsrfCookieName ?
          cookies.read(config.xsrfCookieName) :
          undefined;

      if (xsrfValue) {
        requestHeaders[config.xsrfHeaderName] = xsrfValue;
      }
    }

    // Add headers to the request
    if ('setRequestHeader' in request) {
      utils.forEach(requestHeaders, function setRequestHeader(val, key) {
        if (typeof requestData === 'undefined' && key.toLowerCase() === 'content-type') {
          // Remove Content-Type if data is undefined
          delete requestHeaders[key];
        } else {
          // Otherwise add header to the request
          request.setRequestHeader(key, val);
        }
      });
    }

    // Add withCredentials to request if needed
    if (config.withCredentials) {
      request.withCredentials = true;
    }

    // Add responseType to request if needed
    if (config.responseType) {
      try {
        request.responseType = config.responseType;
      } catch (e) {
        // Expected DOMException thrown by browsers not compatible XMLHttpRequest Level 2.
        // But, this can be suppressed for 'json' type as it can be parsed by default 'transformResponse' function.
        if (config.responseType !== 'json') {
          throw e;
        }
      }
    }

    // Handle progress if needed
    if (typeof config.onDownloadProgress === 'function') {
      request.addEventListener('progress', config.onDownloadProgress);
    }

    // Not all browsers support upload events
    if (typeof config.onUploadProgress === 'function' && request.upload) {
      request.upload.addEventListener('progress', config.onUploadProgress);
    }

    if (config.cancelToken) {
      // Handle cancellation
      config.cancelToken.promise.then(function onCanceled(cancel) {
        if (!request) {
          return;
        }

        request.abort();
        reject(cancel);
        // Clean up request
        request = null;
      });
    }

    if (requestData === undefined) {
      requestData = null;
    }

    // Send the request
    request.send(requestData);
  });
};

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(8)))

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var enhanceError = __webpack_require__(20);

/**
 * Create an Error with the specified message, config, error code, request and response.
 *
 * @param {string} message The error message.
 * @param {Object} config The config.
 * @param {string} [code] The error code (for example, 'ECONNABORTED').
 * @param {Object} [request] The request.
 * @param {Object} [response] The response.
 * @returns {Error} The created error.
 */
module.exports = function createError(message, config, code, request, response) {
  var error = new Error(message);
  return enhanceError(error, config, code, request, response);
};


/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function isCancel(value) {
  return !!(value && value.__CANCEL__);
};


/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * A `Cancel` is an object that is thrown when an operation is canceled.
 *
 * @class
 * @param {string=} message The message.
 */
function Cancel(message) {
  this.message = message;
}

Cancel.prototype.toString = function toString() {
  return 'Cancel' + (this.message ? ': ' + this.message : '');
};

Cancel.prototype.__CANCEL__ = true;

module.exports = Cancel;


/***/ }),
/* 13 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_axios__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_axios___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_axios__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__js_vendor_Paginate_js__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__js_vendor_Paginate_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__js_vendor_Paginate_js__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__js_vendor_fuse_min_js__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__js_vendor_fuse_min_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__js_vendor_fuse_min_js__);
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





var vcApiList = function vcApiList() {
  return __webpack_require__.e/* import() */(2).then(__webpack_require__.bind(null, 36));
};
/* harmony default export */ __webpack_exports__["a"] = ({
  data: function data() {
    return {
      API_URL: "https://raw.githubusercontent.com/toddmotto/public-apis/master/json/entries.json",
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
        api: false
      },

      inputSearchTimeOut: null
    };
  },

  components: {
    vcApiList: vcApiList
  },
  mounted: function mounted() {
    // this.getApiData(this.API_URL);
    this.getApiData(this.BACKUP_URL);
  },
  methods: {
    getApiData: function getApiData(url) {
      var _this = this;

      __WEBPACK_IMPORTED_MODULE_0_axios___default.a.get(url).then(function (response) {
        _this.apiTotalCount = response.data.count;
        _this.apiListCache = response.data.entries;
        _this.apiListFiltered = _this.apiListCache;
        _this.activatePager(_this.apiListCache);
      }).then(function () {
        _this.addFiltersList(_this.apiListCache);
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
      this.pager = new __WEBPACK_IMPORTED_MODULE_1__js_vendor_Paginate_js___default.a(data, this.perPage);
      this.apiList = this.pager.page(0);
      this.currentPage = this.pager.currentPage;
      this.totalPages = this.pager.totalPages;
      this.pagerButtons = true;
    },
    showPage: function showPage(num) {
      this.apiList = this.pager.page(num);
    },
    nextPage: function nextPage() {
      if (!this.pager.hasNext()) {
        this.apiList = this.pager.page(0);
      } else {
        this.apiList = this.pager.page(this.pager.currentPage + 1);
      }
      this.currentPage = this.pager.currentPage;
    },
    prevPage: function prevPage() {
      if (this.pager.currentPage === 1) {
        this.apiList = this.pager.page(this.pager.totalPages);
      } else {
        this.apiList = this.pager.page(this.pager.currentPage - 1);
      }
      this.currentPage = this.pager.currentPage;
    },
    filter: function filter(arr, prop, item) {
      // ret array
      var filtered = arr.filter(function (el) {
        return el[prop] === item;
      });
      return filtered;
    },
    extractUnique: function extractUnique(arr, cat) {
      var o = {};
      var temp = [];
      for (var i = 0, l = arr.length; i < l; i++) {
        if (!o[arr[i][cat]]) {
          o[arr[i][cat]] = true;
          temp.push(arr[i][cat]);
          // temp.push(arr[i].Category);
        }
      }
      return temp;
    },
    addFiltersList: function addFiltersList(arr) {
      var _this2 = this;

      // for authTypes
      this.authTypes = this.extractUnique(arr, "Auth");
      this.toggleAuthTypeCheckbox(true);

      // for categoryTypes
      var temp = this.extractUnique(arr, "Category");
      // filter to get length of each item then push
      temp.map(function (i) {
        var l = _this2.filter(_this2.apiListCache, "Category", i);
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
    filterAuthType: function filterAuthType() {
      var _this3 = this;

      var categoryTemp = void 0;

      if (this.currentCategory !== "All") {
        categoryTemp = this.filter(this.apiListCache, "Category", this.currentCategory);
      } else {
        // to filter authTypes from default items
        categoryTemp = this.apiListCache;
      }

      // authType checkbox
      var authTemp = [];
      this.authTypeSelected.map(function (i) {
        // get items of each authTypeSelected
        var t2 = _this3.filter(categoryTemp, "Auth", i);
        authTemp = authTemp.concat(t2);
        t2 = null;
      });

      // HTTPS checkbox
      if (this.https) {
        var hTemp = this.filter(authTemp, "HTTPS", this.https);
        this.apiListFiltered = hTemp;
        hTemp = null;
      } else {
        this.apiListFiltered = authTemp;
      }

      if (authTemp.length === 0) {
        console.log("no results");
      }

      authTemp = null;
      categoryTemp = null;
      this.activatePager(this.apiListFiltered);
    },
    search: function search(value) {
      var fuseOptions = {
        shouldSort: true,
        threshold: 0.6,
        location: 0,
        distance: 100,
        maxPatternLength: 32,
        minMatchCharLength: 1,
        keys: ["API", "Link"]
      };

      var fuse = new __WEBPACK_IMPORTED_MODULE_2__js_vendor_fuse_min_js___default.a(this.apiListFiltered, fuseOptions);
      var temp = fuse.search(value);

      if (temp.length === 0) {
        console.log("no search results");
      } else {
        this.activatePager(temp);
        temp = null;
      }
    },
    sortItem: function sortItem(item, data) {
      var _this4 = this;

      // ret array
      this.item = item;

      data.sort(function (a, b) {
        var itemToSort = _this4.item;
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
      return data;
    },
    sortAPI: function sortAPI() {
      this.sortAsc = !this.sortAsc;
      var sorted = this.sortItem("API", this.apiListFiltered);

      if (!this.sortAsc) {
        // sort asc
        this.apiListFiltered = sorted;
      } else {
        this.apiListFiltered = sorted.reverse();
      }
      this.sorted = null;
      this.activatePager(this.apiListFiltered);
    }
  }
});

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(15);

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(4);
var bind = __webpack_require__(7);
var Axios = __webpack_require__(17);
var defaults = __webpack_require__(5);

/**
 * Create an instance of Axios
 *
 * @param {Object} defaultConfig The default config for the instance
 * @return {Axios} A new instance of Axios
 */
function createInstance(defaultConfig) {
  var context = new Axios(defaultConfig);
  var instance = bind(Axios.prototype.request, context);

  // Copy axios.prototype to instance
  utils.extend(instance, Axios.prototype, context);

  // Copy context to instance
  utils.extend(instance, context);

  return instance;
}

// Create the default instance to be exported
var axios = createInstance(defaults);

// Expose Axios class to allow class inheritance
axios.Axios = Axios;

// Factory for creating new instances
axios.create = function create(instanceConfig) {
  return createInstance(utils.merge(defaults, instanceConfig));
};

// Expose Cancel & CancelToken
axios.Cancel = __webpack_require__(12);
axios.CancelToken = __webpack_require__(31);
axios.isCancel = __webpack_require__(11);

// Expose all/spread
axios.all = function all(promises) {
  return Promise.all(promises);
};
axios.spread = __webpack_require__(32);

module.exports = axios;

// Allow use of default import syntax in TypeScript
module.exports.default = axios;


/***/ }),
/* 16 */
/***/ (function(module, exports) {

/*!
 * Determine if an object is a Buffer
 *
 * @author   Feross Aboukhadijeh <feross@feross.org> <http://feross.org>
 * @license  MIT
 */

// The _isBuffer check is for Safari 5-7 support, because it's missing
// Object.prototype.constructor. Remove this eventually
module.exports = function (obj) {
  return obj != null && (isBuffer(obj) || isSlowBuffer(obj) || !!obj._isBuffer)
}

function isBuffer (obj) {
  return !!obj.constructor && typeof obj.constructor.isBuffer === 'function' && obj.constructor.isBuffer(obj)
}

// For Node v0.10 support. Remove this eventually.
function isSlowBuffer (obj) {
  return typeof obj.readFloatLE === 'function' && typeof obj.slice === 'function' && isBuffer(obj.slice(0, 0))
}


/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var defaults = __webpack_require__(5);
var utils = __webpack_require__(4);
var InterceptorManager = __webpack_require__(26);
var dispatchRequest = __webpack_require__(27);
var isAbsoluteURL = __webpack_require__(29);
var combineURLs = __webpack_require__(30);

/**
 * Create a new instance of Axios
 *
 * @param {Object} instanceConfig The default config for the instance
 */
function Axios(instanceConfig) {
  this.defaults = instanceConfig;
  this.interceptors = {
    request: new InterceptorManager(),
    response: new InterceptorManager()
  };
}

/**
 * Dispatch a request
 *
 * @param {Object} config The config specific for this request (merged with this.defaults)
 */
Axios.prototype.request = function request(config) {
  /*eslint no-param-reassign:0*/
  // Allow for axios('example/url'[, config]) a la fetch API
  if (typeof config === 'string') {
    config = utils.merge({
      url: arguments[0]
    }, arguments[1]);
  }

  config = utils.merge(defaults, this.defaults, { method: 'get' }, config);
  config.method = config.method.toLowerCase();

  // Support baseURL config
  if (config.baseURL && !isAbsoluteURL(config.url)) {
    config.url = combineURLs(config.baseURL, config.url);
  }

  // Hook up interceptors middleware
  var chain = [dispatchRequest, undefined];
  var promise = Promise.resolve(config);

  this.interceptors.request.forEach(function unshiftRequestInterceptors(interceptor) {
    chain.unshift(interceptor.fulfilled, interceptor.rejected);
  });

  this.interceptors.response.forEach(function pushResponseInterceptors(interceptor) {
    chain.push(interceptor.fulfilled, interceptor.rejected);
  });

  while (chain.length) {
    promise = promise.then(chain.shift(), chain.shift());
  }

  return promise;
};

// Provide aliases for supported request methods
utils.forEach(['delete', 'get', 'head', 'options'], function forEachMethodNoData(method) {
  /*eslint func-names:0*/
  Axios.prototype[method] = function(url, config) {
    return this.request(utils.merge(config || {}, {
      method: method,
      url: url
    }));
  };
});

utils.forEach(['post', 'put', 'patch'], function forEachMethodWithData(method) {
  /*eslint func-names:0*/
  Axios.prototype[method] = function(url, data, config) {
    return this.request(utils.merge(config || {}, {
      method: method,
      url: url,
      data: data
    }));
  };
});

module.exports = Axios;


/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(4);

module.exports = function normalizeHeaderName(headers, normalizedName) {
  utils.forEach(headers, function processHeader(value, name) {
    if (name !== normalizedName && name.toUpperCase() === normalizedName.toUpperCase()) {
      headers[normalizedName] = value;
      delete headers[name];
    }
  });
};


/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var createError = __webpack_require__(10);

/**
 * Resolve or reject a Promise based on response status.
 *
 * @param {Function} resolve A function that resolves the promise.
 * @param {Function} reject A function that rejects the promise.
 * @param {object} response The response.
 */
module.exports = function settle(resolve, reject, response) {
  var validateStatus = response.config.validateStatus;
  // Note: status is not exposed by XDomainRequest
  if (!response.status || !validateStatus || validateStatus(response.status)) {
    resolve(response);
  } else {
    reject(createError(
      'Request failed with status code ' + response.status,
      response.config,
      null,
      response.request,
      response
    ));
  }
};


/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Update an Error with the specified config, error code, and response.
 *
 * @param {Error} error The error to update.
 * @param {Object} config The config.
 * @param {string} [code] The error code (for example, 'ECONNABORTED').
 * @param {Object} [request] The request.
 * @param {Object} [response] The response.
 * @returns {Error} The error.
 */
module.exports = function enhanceError(error, config, code, request, response) {
  error.config = config;
  if (code) {
    error.code = code;
  }
  error.request = request;
  error.response = response;
  return error;
};


/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(4);

function encode(val) {
  return encodeURIComponent(val).
    replace(/%40/gi, '@').
    replace(/%3A/gi, ':').
    replace(/%24/g, '$').
    replace(/%2C/gi, ',').
    replace(/%20/g, '+').
    replace(/%5B/gi, '[').
    replace(/%5D/gi, ']');
}

/**
 * Build a URL by appending params to the end
 *
 * @param {string} url The base of the url (e.g., http://www.google.com)
 * @param {object} [params] The params to be appended
 * @returns {string} The formatted url
 */
module.exports = function buildURL(url, params, paramsSerializer) {
  /*eslint no-param-reassign:0*/
  if (!params) {
    return url;
  }

  var serializedParams;
  if (paramsSerializer) {
    serializedParams = paramsSerializer(params);
  } else if (utils.isURLSearchParams(params)) {
    serializedParams = params.toString();
  } else {
    var parts = [];

    utils.forEach(params, function serialize(val, key) {
      if (val === null || typeof val === 'undefined') {
        return;
      }

      if (utils.isArray(val)) {
        key = key + '[]';
      }

      if (!utils.isArray(val)) {
        val = [val];
      }

      utils.forEach(val, function parseValue(v) {
        if (utils.isDate(v)) {
          v = v.toISOString();
        } else if (utils.isObject(v)) {
          v = JSON.stringify(v);
        }
        parts.push(encode(key) + '=' + encode(v));
      });
    });

    serializedParams = parts.join('&');
  }

  if (serializedParams) {
    url += (url.indexOf('?') === -1 ? '?' : '&') + serializedParams;
  }

  return url;
};


/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(4);

/**
 * Parse headers into an object
 *
 * ```
 * Date: Wed, 27 Aug 2014 08:58:49 GMT
 * Content-Type: application/json
 * Connection: keep-alive
 * Transfer-Encoding: chunked
 * ```
 *
 * @param {String} headers Headers needing to be parsed
 * @returns {Object} Headers parsed into an object
 */
module.exports = function parseHeaders(headers) {
  var parsed = {};
  var key;
  var val;
  var i;

  if (!headers) { return parsed; }

  utils.forEach(headers.split('\n'), function parser(line) {
    i = line.indexOf(':');
    key = utils.trim(line.substr(0, i)).toLowerCase();
    val = utils.trim(line.substr(i + 1));

    if (key) {
      parsed[key] = parsed[key] ? parsed[key] + ', ' + val : val;
    }
  });

  return parsed;
};


/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(4);

module.exports = (
  utils.isStandardBrowserEnv() ?

  // Standard browser envs have full support of the APIs needed to test
  // whether the request URL is of the same origin as current location.
  (function standardBrowserEnv() {
    var msie = /(msie|trident)/i.test(navigator.userAgent);
    var urlParsingNode = document.createElement('a');
    var originURL;

    /**
    * Parse a URL to discover it's components
    *
    * @param {String} url The URL to be parsed
    * @returns {Object}
    */
    function resolveURL(url) {
      var href = url;

      if (msie) {
        // IE needs attribute set twice to normalize properties
        urlParsingNode.setAttribute('href', href);
        href = urlParsingNode.href;
      }

      urlParsingNode.setAttribute('href', href);

      // urlParsingNode provides the UrlUtils interface - http://url.spec.whatwg.org/#urlutils
      return {
        href: urlParsingNode.href,
        protocol: urlParsingNode.protocol ? urlParsingNode.protocol.replace(/:$/, '') : '',
        host: urlParsingNode.host,
        search: urlParsingNode.search ? urlParsingNode.search.replace(/^\?/, '') : '',
        hash: urlParsingNode.hash ? urlParsingNode.hash.replace(/^#/, '') : '',
        hostname: urlParsingNode.hostname,
        port: urlParsingNode.port,
        pathname: (urlParsingNode.pathname.charAt(0) === '/') ?
                  urlParsingNode.pathname :
                  '/' + urlParsingNode.pathname
      };
    }

    originURL = resolveURL(window.location.href);

    /**
    * Determine if a URL shares the same origin as the current location
    *
    * @param {String} requestURL The URL to test
    * @returns {boolean} True if URL shares the same origin, otherwise false
    */
    return function isURLSameOrigin(requestURL) {
      var parsed = (utils.isString(requestURL)) ? resolveURL(requestURL) : requestURL;
      return (parsed.protocol === originURL.protocol &&
            parsed.host === originURL.host);
    };
  })() :

  // Non standard browser envs (web workers, react-native) lack needed support.
  (function nonStandardBrowserEnv() {
    return function isURLSameOrigin() {
      return true;
    };
  })()
);


/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// btoa polyfill for IE<10 courtesy https://github.com/davidchambers/Base64.js

var chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';

function E() {
  this.message = 'String contains an invalid character';
}
E.prototype = new Error;
E.prototype.code = 5;
E.prototype.name = 'InvalidCharacterError';

function btoa(input) {
  var str = String(input);
  var output = '';
  for (
    // initialize result and counter
    var block, charCode, idx = 0, map = chars;
    // if the next str index does not exist:
    //   change the mapping table to "="
    //   check if d has no fractional digits
    str.charAt(idx | 0) || (map = '=', idx % 1);
    // "8 - idx % 1 * 8" generates the sequence 2, 4, 6, 8
    output += map.charAt(63 & block >> 8 - idx % 1 * 8)
  ) {
    charCode = str.charCodeAt(idx += 3 / 4);
    if (charCode > 0xFF) {
      throw new E();
    }
    block = block << 8 | charCode;
  }
  return output;
}

module.exports = btoa;


/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(4);

module.exports = (
  utils.isStandardBrowserEnv() ?

  // Standard browser envs support document.cookie
  (function standardBrowserEnv() {
    return {
      write: function write(name, value, expires, path, domain, secure) {
        var cookie = [];
        cookie.push(name + '=' + encodeURIComponent(value));

        if (utils.isNumber(expires)) {
          cookie.push('expires=' + new Date(expires).toGMTString());
        }

        if (utils.isString(path)) {
          cookie.push('path=' + path);
        }

        if (utils.isString(domain)) {
          cookie.push('domain=' + domain);
        }

        if (secure === true) {
          cookie.push('secure');
        }

        document.cookie = cookie.join('; ');
      },

      read: function read(name) {
        var match = document.cookie.match(new RegExp('(^|;\\s*)(' + name + ')=([^;]*)'));
        return (match ? decodeURIComponent(match[3]) : null);
      },

      remove: function remove(name) {
        this.write(name, '', Date.now() - 86400000);
      }
    };
  })() :

  // Non standard browser env (web workers, react-native) lack needed support.
  (function nonStandardBrowserEnv() {
    return {
      write: function write() {},
      read: function read() { return null; },
      remove: function remove() {}
    };
  })()
);


/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(4);

function InterceptorManager() {
  this.handlers = [];
}

/**
 * Add a new interceptor to the stack
 *
 * @param {Function} fulfilled The function to handle `then` for a `Promise`
 * @param {Function} rejected The function to handle `reject` for a `Promise`
 *
 * @return {Number} An ID used to remove interceptor later
 */
InterceptorManager.prototype.use = function use(fulfilled, rejected) {
  this.handlers.push({
    fulfilled: fulfilled,
    rejected: rejected
  });
  return this.handlers.length - 1;
};

/**
 * Remove an interceptor from the stack
 *
 * @param {Number} id The ID that was returned by `use`
 */
InterceptorManager.prototype.eject = function eject(id) {
  if (this.handlers[id]) {
    this.handlers[id] = null;
  }
};

/**
 * Iterate over all the registered interceptors
 *
 * This method is particularly useful for skipping over any
 * interceptors that may have become `null` calling `eject`.
 *
 * @param {Function} fn The function to call for each interceptor
 */
InterceptorManager.prototype.forEach = function forEach(fn) {
  utils.forEach(this.handlers, function forEachHandler(h) {
    if (h !== null) {
      fn(h);
    }
  });
};

module.exports = InterceptorManager;


/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(4);
var transformData = __webpack_require__(28);
var isCancel = __webpack_require__(11);
var defaults = __webpack_require__(5);

/**
 * Throws a `Cancel` if cancellation has been requested.
 */
function throwIfCancellationRequested(config) {
  if (config.cancelToken) {
    config.cancelToken.throwIfRequested();
  }
}

/**
 * Dispatch a request to the server using the configured adapter.
 *
 * @param {object} config The config that is to be used for the request
 * @returns {Promise} The Promise to be fulfilled
 */
module.exports = function dispatchRequest(config) {
  throwIfCancellationRequested(config);

  // Ensure headers exist
  config.headers = config.headers || {};

  // Transform request data
  config.data = transformData(
    config.data,
    config.headers,
    config.transformRequest
  );

  // Flatten headers
  config.headers = utils.merge(
    config.headers.common || {},
    config.headers[config.method] || {},
    config.headers || {}
  );

  utils.forEach(
    ['delete', 'get', 'head', 'post', 'put', 'patch', 'common'],
    function cleanHeaderConfig(method) {
      delete config.headers[method];
    }
  );

  var adapter = config.adapter || defaults.adapter;

  return adapter(config).then(function onAdapterResolution(response) {
    throwIfCancellationRequested(config);

    // Transform response data
    response.data = transformData(
      response.data,
      response.headers,
      config.transformResponse
    );

    return response;
  }, function onAdapterRejection(reason) {
    if (!isCancel(reason)) {
      throwIfCancellationRequested(config);

      // Transform response data
      if (reason && reason.response) {
        reason.response.data = transformData(
          reason.response.data,
          reason.response.headers,
          config.transformResponse
        );
      }
    }

    return Promise.reject(reason);
  });
};


/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(4);

/**
 * Transform the data for a request or a response
 *
 * @param {Object|String} data The data to be transformed
 * @param {Array} headers The headers for the request or response
 * @param {Array|Function} fns A single function or Array of functions
 * @returns {*} The resulting transformed data
 */
module.exports = function transformData(data, headers, fns) {
  /*eslint no-param-reassign:0*/
  utils.forEach(fns, function transform(fn) {
    data = fn(data, headers);
  });

  return data;
};


/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Determines whether the specified URL is absolute
 *
 * @param {string} url The URL to test
 * @returns {boolean} True if the specified URL is absolute, otherwise false
 */
module.exports = function isAbsoluteURL(url) {
  // A URL is considered absolute if it begins with "<scheme>://" or "//" (protocol-relative URL).
  // RFC 3986 defines scheme name as a sequence of characters beginning with a letter and followed
  // by any combination of letters, digits, plus, period, or hyphen.
  return /^([a-z][a-z\d\+\-\.]*:)?\/\//i.test(url);
};


/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Creates a new URL by combining the specified URLs
 *
 * @param {string} baseURL The base URL
 * @param {string} relativeURL The relative URL
 * @returns {string} The combined URL
 */
module.exports = function combineURLs(baseURL, relativeURL) {
  return relativeURL
    ? baseURL.replace(/\/+$/, '') + '/' + relativeURL.replace(/^\/+/, '')
    : baseURL;
};


/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var Cancel = __webpack_require__(12);

/**
 * A `CancelToken` is an object that can be used to request cancellation of an operation.
 *
 * @class
 * @param {Function} executor The executor function.
 */
function CancelToken(executor) {
  if (typeof executor !== 'function') {
    throw new TypeError('executor must be a function.');
  }

  var resolvePromise;
  this.promise = new Promise(function promiseExecutor(resolve) {
    resolvePromise = resolve;
  });

  var token = this;
  executor(function cancel(message) {
    if (token.reason) {
      // Cancellation has already been requested
      return;
    }

    token.reason = new Cancel(message);
    resolvePromise(token.reason);
  });
}

/**
 * Throws a `Cancel` if cancellation has been requested.
 */
CancelToken.prototype.throwIfRequested = function throwIfRequested() {
  if (this.reason) {
    throw this.reason;
  }
};

/**
 * Returns an object that contains a new `CancelToken` and a function that, when called,
 * cancels the `CancelToken`.
 */
CancelToken.source = function source() {
  var cancel;
  var token = new CancelToken(function executor(c) {
    cancel = c;
  });
  return {
    token: token,
    cancel: cancel
  };
};

module.exports = CancelToken;


/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Syntactic sugar for invoking a function and expanding an array for arguments.
 *
 * Common use case would be to use `Function.prototype.apply`.
 *
 *  ```js
 *  function f(x, y, z) {}
 *  var args = [1, 2, 3];
 *  f.apply(null, args);
 *  ```
 *
 * With `spread` this example can be re-written.
 *
 *  ```js
 *  spread(function(x, y, z) {})([1, 2, 3]);
 *  ```
 *
 * @param {Function} callback
 * @returns {Function}
 */
module.exports = function spread(callback) {
  return function wrap(arr) {
    return callback.apply(null, arr);
  };
};


/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

/**
 * Creates a new `Paginate` form a givin `Array`,
 * optionally with a specific `Number` of items per page.
 *
 * @param {Array} data
 * @param {Number} [perPage=10]
 * @constructor
 * @api public
 */

function Paginate(data, perPage) {

  if (!data) throw new Error('Required Argument Missing');
  if (!(data instanceof Array)) throw new Error('Invalid Argument Type');

  this.data = data;
  this.perPage = perPage || 10;
  this.currentPage = 0;
  this.totalPages = Math.ceil(this.data.length / this.perPage);
}

/**
 * Calculates the offset.
 *
 * @return {Number}
 * @api private
 */

Paginate.prototype.offset = function () {

  return (this.currentPage - 1) * this.perPage;
};

/**
 * Returns the specified `page`.
 *
 * @param {Number} pageNum
 * @return {Array}
 * @api public
 */

Paginate.prototype.page = function (pageNum) {

  if (pageNum < 1) pageNum = 1;
  if (pageNum > this.totalPages) pageNum = this.totalPages;

  this.currentPage = pageNum;

  var start = this.offset(),
      end = start + this.perPage;

  return this.data.slice(start, end);
};

/**
 * Returns the next `page`.
 *
 * @return {Array}
 * @api public
 */

Paginate.prototype.next = function () {

  return this.page(this.currentPage + 1);
};

/**
 * Returns the previous `page`.
 *
 * @return {Array}
 * @api public
 */

Paginate.prototype.prev = function () {

  return this.page(this.currentPage - 1);
};

/**
 * Checks if there is a next `page`.
 *
 * @return {Boolean}
 * @api public
 */

Paginate.prototype.hasNext = function () {

  return this.currentPage < this.totalPages;
};

/**
 * Expose `Paginate`
 */

if (true) module.exports = Paginate;

/***/ }),
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

/*!
 * Fuse.js v3.2.0 - Lightweight fuzzy-search (http://fusejs.io)
 * 
 * Copyright (c) 2012-2017 Kirollos Risk (http://kiro.me)
 * All Rights Reserved. Apache Software License 2.0
 * 
 * http://www.apache.org/licenses/LICENSE-2.0
 */
!function (e, t) {
  "object" == ( false ? "undefined" : _typeof(exports)) && "object" == ( false ? "undefined" : _typeof(module)) ? module.exports = t() :  true ? !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_FACTORY__ = (t),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)) : "object" == (typeof exports === "undefined" ? "undefined" : _typeof(exports)) ? exports.Fuse = t() : e.Fuse = t();
}(this, function () {
  return function (e) {
    function t(n) {
      if (r[n]) return r[n].exports;var o = r[n] = { i: n, l: !1, exports: {} };return e[n].call(o.exports, o, o.exports, t), o.l = !0, o.exports;
    }var r = {};return t.m = e, t.c = r, t.i = function (e) {
      return e;
    }, t.d = function (e, r, n) {
      t.o(e, r) || Object.defineProperty(e, r, { configurable: !1, enumerable: !0, get: n });
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
          var n = t[r];n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n);
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
          var n = t[r];n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n);
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
          var t = [];this._log("\n\nOutput:\n\n", JSON.stringify(e));var r = [];this.options.includeMatches && r.push(function (e, t) {
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
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(35)(module)))

/***/ }),
/* 35 */
/***/ (function(module, exports) {

module.exports = function(module) {
	if(!module.webpackPolyfill) {
		module.deprecate = function() {};
		module.paths = [];
		// module.parent = undefined by default
		if(!module.children) module.children = [];
		Object.defineProperty(module, "loaded", {
			enumerable: true,
			get: function() {
				return module.l;
			}
		});
		Object.defineProperty(module, "id", {
			enumerable: true,
			get: function() {
				return module.i;
			}
		});
		module.webpackPolyfill = 1;
	}
	return module;
};


/***/ }),
/* 36 */,
/* 37 */,
/* 38 */,
/* 39 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [(_vm.status.api) ? _c('span', [_vm._v("\r\n    Status:\r\n    "), _vm._m(0)]) : _vm._e(), _vm._v(" "), _c('div', {
    staticClass: "row"
  }, [_c('div', {
    staticClass: "col-sm-3"
  }, [_vm._v("\r\n      ---------\r\n    ")]), _vm._v(" "), _c('div', {
    staticClass: "col-sm-9"
  }, [_c('ul', [_c('li', [_vm._v("\r\n          Auth:\r\n        ")]), _vm._v(" "), _vm._l((_vm.authTypes), function(i) {
    return _c('li', [_c('input', {
      directives: [{
        name: "model",
        rawName: "v-model",
        value: (_vm.authTypeSelected),
        expression: "authTypeSelected"
      }],
      attrs: {
        "type": "checkbox",
        "id": i
      },
      domProps: {
        "value": i,
        "checked": Array.isArray(_vm.authTypeSelected) ? _vm._i(_vm.authTypeSelected, i) > -1 : (_vm.authTypeSelected)
      },
      on: {
        "change": function($event) {
          _vm.filterAuthType()
        },
        "__c": function($event) {
          var $$a = _vm.authTypeSelected,
            $$el = $event.target,
            $$c = $$el.checked ? (true) : (false);
          if (Array.isArray($$a)) {
            var $$v = i,
              $$i = _vm._i($$a, $$v);
            if ($$c) {
              $$i < 0 && (_vm.authTypeSelected = $$a.concat($$v))
            } else {
              $$i > -1 && (_vm.authTypeSelected = $$a.slice(0, $$i).concat($$a.slice($$i + 1)))
            }
          } else {
            _vm.authTypeSelected = $$c
          }
        }
      }
    }), _vm._v(" "), (i === null) ? _c('label', {
      attrs: {
        "for": i
      }
    }, [_vm._v("None")]) : _c('label', {
      attrs: {
        "for": i
      }
    }, [_vm._v(_vm._s(i))])])
  }), _vm._v(" "), _c('li', {
    attrs: {
      "role": "separator",
      "aria-expanded": "true",
      "aria-orientation": "vertical"
    }
  }, [_vm._v("\r\n        -----------\r\n        ")]), _vm._v(" "), _c('li', [_c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.https),
      expression: "https"
    }],
    attrs: {
      "type": "checkbox",
      "id": "checkbox"
    },
    domProps: {
      "checked": Array.isArray(_vm.https) ? _vm._i(_vm.https, null) > -1 : (_vm.https)
    },
    on: {
      "change": function($event) {
        _vm.filterAuthType()
      },
      "__c": function($event) {
        var $$a = _vm.https,
          $$el = $event.target,
          $$c = $$el.checked ? (true) : (false);
        if (Array.isArray($$a)) {
          var $$v = null,
            $$i = _vm._i($$a, $$v);
          if ($$c) {
            $$i < 0 && (_vm.https = $$a.concat($$v))
          } else {
            $$i > -1 && (_vm.https = $$a.slice(0, $$i).concat($$a.slice($$i + 1)))
          }
        } else {
          _vm.https = $$c
        }
      }
    }
  }), _vm._v(" "), _c('label', {
    attrs: {
      "for": "checkbox"
    }
  }, [_vm._v("HTTPS")])])], 2)])]), _vm._v(" "), _c('div', {
    staticClass: "row"
  }, [_c('div', {
    staticClass: "col-sm-3"
  }, [_c('ul', [_c('li', [_c('p', {
    on: {
      "click": function($event) {
        _vm.toggleAuthTypeCheckbox(true);
        _vm.filterCategory('All')
      }
    }
  }, [_vm._v("\r\n            All Items: " + _vm._s(_vm.apiTotalCount) + "\r\n          ")])]), _vm._v(" "), _vm._l((_vm.categoryTypes), function(i) {
    return _c('li', [_c('p', {
      on: {
        "click": function($event) {
          _vm.filterCategory(i.catName)
        }
      }
    }, [_vm._v(_vm._s(i.catName) + " " + _vm._s(i.catLength))])])
  })], 2), _vm._v(" "), _c('br'), _vm._v(" "), _c('br')]), _vm._v(" "), _c('div', {
    staticClass: "col-sm-9"
  }, [_c('label', {
    attrs: {
      "for": "api_search"
    }
  }, [_vm._v("Search " + _vm._s(_vm.currentCategory) + ":")]), _vm._v(" "), _c('input', {
    attrs: {
      "type": "text",
      "name": "api_search",
      "id": "api_search",
      "placeholder": "Enter keyword/s..."
    },
    on: {
      "keyup": function($event) {
        if (!('button' in $event) && _vm._k($event.keyCode, "enter", 13)) { return null; }
        _vm.search($event.target.value)
      }
    }
  }), _vm._v(" "), _c('div', [(_vm.pagerButtons) ? _c('span', [_c('button', {
    on: {
      "click": function($event) {
        _vm.prevPage()
      }
    }
  }, [_vm._v("<prevpage")]), _vm._v(" "), _c('div', {
    staticClass: "custom-select pg_totalpages"
  }, [_vm._v("\r\n            Page \r\n            "), _vm._v(" "), _c('select', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.currentPage),
      expression: "currentPage"
    }],
    on: {
      "change": function($event) {
        var $$selectedVal = Array.prototype.filter.call($event.target.options, function(o) {
          return o.selected
        }).map(function(o) {
          var val = "_value" in o ? o._value : o.value;
          return val
        });
        _vm.currentPage = $event.target.multiple ? $$selectedVal : $$selectedVal[0]
      }
    }
  }, _vm._l((_vm.totalPages), function(i) {
    return _c('option', {
      domProps: {
        "value": i
      },
      on: {
        "click": function($event) {
          _vm.showPage(i)
        }
      }
    }, [_vm._v(_vm._s(i))])
  })), _vm._v(" "), _vm._v("\r\n            Items per page:\r\n            "), _c('select', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.perPage),
      expression: "perPage"
    }],
    on: {
      "change": function($event) {
        var $$selectedVal = Array.prototype.filter.call($event.target.options, function(o) {
          return o.selected
        }).map(function(o) {
          var val = "_value" in o ? o._value : o.value;
          return val
        });
        _vm.perPage = $event.target.multiple ? $$selectedVal : $$selectedVal[0]
      }
    }
  }, _vm._l((_vm.perPageItems), function(i) {
    return _c('option', {
      domProps: {
        "value": i
      },
      on: {
        "click": function($event) {
          _vm.activatePager(_vm.apiListFiltered)
        }
      }
    }, [_vm._v(_vm._s(i))])
  }))]), _vm._v("\r\n          of " + _vm._s(_vm.totalPages) + "\r\n          "), _c('button', {
    on: {
      "click": function($event) {
        _vm.nextPage()
      }
    }
  }, [_vm._v("nextPage>")])]) : _vm._e(), _vm._v(" "), _c('button', {
    staticClass: "btn btn1-01",
    on: {
      "click": function($event) {
        _vm.toggleAuthTypeCheckbox(true);
        _vm.filterCategory('All')
      }
    }
  }, [_vm._v("Show All")])]), _vm._v(" "), _c('br'), _vm._v(" "), (_vm.currentCategory === 'All') ? _c('p', [_vm._v("Showing All Items")]) : _c('p', [_vm._v("currentCategory: " + _vm._s(_vm.currentCategory))]), _vm._v(" "), _c('div', {
    staticClass: "row"
  }, [_c('div', {
    staticClass: "col-xs-12 col-sm-7"
  }, [_vm._v("\r\n          API\r\n          "), _c('button', {
    on: {
      "click": function($event) {
        _vm.sortAPI()
      }
    }
  }, [_vm._v(_vm._s(_vm.sortAsc ? 'sortAsc' : 'sortDesc') + " ")])]), _vm._v(" "), _c('div', {
    staticClass: "col-xs-12 col-sm-2"
  }, [_vm._v("\r\n          Category\r\n        ")]), _vm._v(" "), _c('div', {
    staticClass: "col-xs-12 col-sm-2"
  }, [_vm._v("\r\n          Auth\r\n        ")]), _vm._v(" "), _c('div', {
    staticClass: "col-xs-12 col-sm-1"
  }, [_vm._v("\r\n          HTTPS\r\n        ")])]), _vm._v(" "), _c('vcApiList', {
    attrs: {
      "pr-api-list": _vm.apiList
    }
  })], 1)])])
}
var staticRenderFns = [function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('a', {
    attrs: {
      "href": "https://travis-ci.org/toddmotto/public-apis"
    }
  }, [_c('img', {
    attrs: {
      "src": "https://travis-ci.org/toddmotto/public-apis.svg?branch=master"
    }
  })])
}]
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-19b7a970", esExports)
  }
}

/***/ })
]);