/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 101);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

exports.__esModule = true;
var lift = function (obj) {
    if (obj instanceof Array)
        return new ArrayOps(obj);
    if (typeof obj === 'string')
        return new StringOps(obj);
    if (typeof obj === 'number')
        return new NumberOps(obj);
    if (obj === true || obj === false)
        return new BoolOps(obj);
    return new ObjectOps(obj);
};
exports["default"] = lift;
//--------------------------------------
//  Array
//--------------------------------------
var ArrayOps = (function () {
    function ArrayOps(array) {
        this._isLiftWrapper = true;
        this._value = array;
    }
    ArrayOps.prototype.value = function () { return this._value; };
    return ArrayOps;
}());
exports.ArrayOps = ArrayOps;
//--------------------------------------
//  Object
//--------------------------------------
var ObjectOps = (function () {
    function ObjectOps(object) {
        this._isLiftWrapper = true;
        this._value = object;
    }
    ObjectOps.prototype.value = function () { return this._value; };
    return ObjectOps;
}());
exports.ObjectOps = ObjectOps;
//--------------------------------------
//  Number
//--------------------------------------
var NumberOps = (function () {
    function NumberOps(num) {
        this._isLiftWrapper = true;
        this._value = num;
    }
    NumberOps.prototype.value = function () { return this._value; };
    return NumberOps;
}());
exports.NumberOps = NumberOps;
//--------------------------------------
//  String
//--------------------------------------
var StringOps = (function () {
    function StringOps(str) {
        this._isLiftWrapper = true;
        this._value = str;
    }
    StringOps.prototype.value = function () { return this._value; };
    return StringOps;
}());
exports.StringOps = StringOps;
//--------------------------------------
//  Boolean
//--------------------------------------
// Not that we expect to expand on the boolean capabilities... But for completeness sake.
var BoolOps = (function () {
    function BoolOps(value) {
        this._isLiftWrapper = true;
        this._value = value;
    }
    BoolOps.prototype.value = function () { return this._value; };
    return BoolOps;
}());
exports.BoolOps = BoolOps;
function getValue(input) {
    return input['_isLiftWrapper']
        ? input.value()
        : input;
}
exports.getValue = getValue;
//--------------------------------------
//  Re-exported
//--------------------------------------
var immupdate_1 = __webpack_require__(12);
exports.update = immupdate_1.update;
exports.DELETE = immupdate_1.DELETE;
var option_ts_1 = __webpack_require__(2);
exports.Option = option_ts_1.Option;
exports.None = option_ts_1.None;
exports.Some = option_ts_1.Some;


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.Observable = Observable;

var _debounce2 = __webpack_require__(28);

var _debounce3 = _interopRequireDefault(_debounce2);

var _delay2 = __webpack_require__(29);

var _delay3 = _interopRequireDefault(_delay2);

var _drop2 = __webpack_require__(30);

var _drop3 = _interopRequireDefault(_drop2);

var _filter2 = __webpack_require__(31);

var _filter3 = _interopRequireDefault(_filter2);

var _flatMapLatest2 = __webpack_require__(32);

var _flatMapLatest3 = _interopRequireDefault(_flatMapLatest2);

var _fromEvent2 = __webpack_require__(33);

var _fromEvent3 = _interopRequireDefault(_fromEvent2);

var _fromPromise2 = __webpack_require__(34);

var _fromPromise3 = _interopRequireDefault(_fromPromise2);

var _interval2 = __webpack_require__(35);

var _interval3 = _interopRequireDefault(_interval2);

var _map2 = __webpack_require__(36);

var _map3 = _interopRequireDefault(_map2);

var _merge2 = __webpack_require__(37);

var _merge3 = _interopRequireDefault(_merge2);

var _partition2 = __webpack_require__(38);

var _partition3 = _interopRequireDefault(_partition2);

var _pure2 = __webpack_require__(39);

var _pure3 = _interopRequireDefault(_pure2);

var _sliding2 = __webpack_require__(40);

var _sliding3 = _interopRequireDefault(_sliding2);

var _throttle2 = __webpack_require__(41);

var _throttle3 = _interopRequireDefault(_throttle2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function Observable(activate) {

  function obs(val) {
    return arguments.length === 0 ? obs._lastValue === UNSET ? undefined : obs._lastValue : obs._add(val);
  }

  obs._subscribers = [];
  obs._activate = activate;
  obs._lastValue = UNSET;

  // Pre-bind _add as it's called as a detached function
  obs._add = function (val, name) {
    obs._lastValue = val;
    obs._parentName = name;

    pushNewValue(val, obs._subscribers, obs._name || name);

    return obs;
  };

  var protoKeys = Object.keys(proto);
  for (var i = 0; i < protoKeys.length; i++) {
    obs[protoKeys[i]] = proto[protoKeys[i]];
  }

  return obs;
}

var proto = {

  subscribe: function subscribe(cb) {
    var self = this;
    var _subscribers = this._subscribers,
        _add = this._add,
        _activate = this._activate,
        _name = this._name;


    if (_subscribers.length === 0) if (_activate) this._unsubscribe = _activate(_add);

    _subscribers.push(cb);

    if (this._lastValue !== UNSET) cb(this._lastValue, _name || this._parentName);

    return function _unsubscribe() {
      var index = _subscribers.indexOf(cb);

      if (index > -1) {
        _subscribers.splice(index, 1);

        if (_subscribers.length === 0) self._unsubscribe && self._unsubscribe();
      }
    };
  },

  named: function named(name) {
    this._name = name;
    return this;
  }

};

function pushNewValue(value, subscribers, name) {
  for (var i = 0; i < subscribers.length; i++) {
    subscribers[i](value, name);
  }
}

// Internal marker
var UNSET = {};

// Enrich the Observable "prototype" till (maybe) we have the |> operator!
proto.debounce = function (time) {
  return (0, _debounce3.default)(time, this);
};
proto.delay = function (time) {
  return (0, _delay3.default)(time, this);
};
proto.drop = function (count) {
  return (0, _drop3.default)(count, this);
};
proto.filter = function (fn) {
  return (0, _filter3.default)(fn, this);
};
proto.flatMapLatest = function (fn) {
  return (0, _flatMapLatest3.default)(fn, this);
};
proto.map = function (fn) {
  return (0, _map3.default)(fn, this);
};
proto.partition = function (predicate) {
  return (0, _partition3.default)(predicate, this);
};
proto.sliding = function (num) {
  return (0, _sliding3.default)(num, this);
};
proto.sliding2 = function () {
  return (0, _sliding2.sliding2)(this);
};
proto.throttle = function (time) {
  return (0, _throttle3.default)(time, this);
};

// Enrich the Observable object
Observable.pure = _pure3.default;
Observable.fromEvent = _fromEvent3.default;
Observable.fromPromise = _fromPromise3.default;
Observable.interval = _interval3.default;
Observable.merge = _merge3.default;

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

exports.__esModule = true;
// The Option factory / static object
var OptionObject = function OptionObject(value) {
    return isDef(value) ? Some(value) : exports.None;
};
OptionObject.all = function () {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    var values = [];
    for (var i = 0; i < args.length; i++) {
        var value = args[i];
        if (exports.Option.isOption(value))
            value = value.get();
        if (!isDef(value))
            break;
        values.push(value);
    }
    return (values.length === args.length) ? Some(values) : exports.None;
};
OptionObject.isOption = function (value) {
    return !!value && (value._isSome === true || value._isNone === true);
};
function makeNone() {
    var self = {};
    function returnNone() { return exports.None; }
    self._isNone = true;
    self.get = function () { return undefined; };
    self.isDefined = function () { return false; };
    self.forEach = function () { };
    self.map = returnNone;
    self.flatMap = returnNone;
    self.filter = returnNone;
    self.orElse = function (alt) { return alt(); };
    self.getOrElse = function (alt) { return alt; };
    self.match = function (matcher) { return matcher.None(); };
    self.toString = function () { return 'None'; };
    self.toJSON = function () { return null; };
    return self;
}
function _Some(value) {
    this.value = value;
}
_Some.prototype = {
    _isSome: true,
    get: function () {
        return this.value;
    },
    isDefined: function () {
        return true;
    },
    forEach: function (fn) {
        fn(this.value);
    },
    map: function (fn) {
        var result = fn(this.value);
        if (result && result['_isLiftWrapper'])
            result = result.value();
        return exports.Option(result);
    },
    flatMap: function (fn) {
        return fn(this.value);
    },
    filter: function (fn) {
        return fn(this.value) ? this : exports.None;
    },
    orElse: function () {
        return this;
    },
    getOrElse: function () {
        return this.value;
    },
    match: function (matcher) {
        return matcher.Some(this.value);
    },
    toString: function () {
        return "Some(" + this.value + ")";
    },
    toJSON: function () {
        return this.value;
    }
};
function isDef(value) {
    return value !== null && value !== undefined;
}
exports.Option = OptionObject;
/** Creates a new Some instance using a non nullable value */
function Some(value) {
    return new _Some(value);
}
exports.Some = Some;
exports.None = makeNone();


/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.h = exports.Render = exports.log = exports.startApp = exports.Message = exports.Component = undefined;

var _snabbdom = __webpack_require__(47);

var _snabbdom2 = _interopRequireDefault(_snabbdom);

var _h = __webpack_require__(4);

var _h2 = _interopRequireDefault(_h);

var _tovnode = __webpack_require__(49);

var _tovnode2 = _interopRequireDefault(_tovnode);

var _render = __webpack_require__(15);

var _component = __webpack_require__(26);

var _component2 = _interopRequireDefault(_component);

var _message = __webpack_require__(13);

var _message2 = _interopRequireDefault(_message);

var _events = __webpack_require__(27);

var _log = __webpack_require__(5);

var _log2 = _interopRequireDefault(_log);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function startApp(_ref) {
  var app = _ref.app,
      elm = _ref.elm,
      replaceElm = _ref.replaceElm,
      snabbdomModules = _ref.snabbdomModules;

  var modules = snabbdomModules.concat(_events.eventsModule);
  (0, _render.setPatchFunction)(_snabbdom2.default.init(modules));
  (0, _render.renderSync)(replaceElm ? (0, _tovnode2.default)(elm) : elm, app, replaceElm);
}

exports.Component = _component2.default;
exports.Message = _message2.default;
exports.startApp = startApp;
exports.log = _log2.default;
exports.Render = _render.Render;
exports.h = _h2.default;

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var vnode_1 = __webpack_require__(6);
var is = __webpack_require__(17);
function addNS(data, children, sel) {
    data.ns = 'http://www.w3.org/2000/svg';
    if (sel !== 'foreignObject' && children !== undefined) {
        for (var i = 0; i < children.length; ++i) {
            var childData = children[i].data;
            if (childData !== undefined) {
                addNS(childData, children[i].children, children[i].sel);
            }
        }
    }
}
function h(sel, b, c) {
    var data = {}, children, text, i;
    if (c !== undefined) {
        data = b;
        if (is.array(c)) {
            children = c;
        }
        else if (is.primitive(c)) {
            text = c;
        }
        else if (c && c.sel) {
            children = [c];
        }
    }
    else if (b !== undefined) {
        if (is.array(b)) {
            children = b;
        }
        else if (is.primitive(b)) {
            text = b;
        }
        else if (b && b.sel) {
            children = [b];
        }
        else {
            data = b;
        }
    }
    if (is.array(children)) {
        for (i = 0; i < children.length; ++i) {
            if (is.primitive(children[i]))
                children[i] = vnode_1.vnode(undefined, undefined, undefined, children[i]);
        }
    }
    if (sel[0] === 's' && sel[1] === 'v' && sel[2] === 'g' &&
        (sel.length === 3 || sel[3] === '.' || sel[3] === '#')) {
        addNS(data, children, sel);
    }
    return vnode_1.vnode(sel, data, children, text, undefined);
}
exports.h = h;
;
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = h;
//# sourceMappingURL=h.js.map

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.shouldLog = shouldLog;
exports.default = {
  render: false,
  message: false
};
function shouldLog(log, key) {
  return log === true || log === key;
}

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function vnode(sel, data, children, text, elm) {
    var key = data === undefined ? undefined : data.key;
    return { sel: sel, data: data, children: children,
        text: text, elm: elm, key: key };
}
exports.vnode = vnode;
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = vnode;
//# sourceMappingURL=vnode.js.map

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.noop = noop;
exports.arrayToObject = arrayToObject;
exports.objectToArray = objectToArray;
exports.copyObject = copyObject;
exports.mergeObjects = mergeObjects;
exports.mapValues = mapValues;
exports.objectDiff = objectDiff;
exports.makeMessage = makeMessage;
exports.parsePaths = parsePaths;
exports.parseQueryParams = parseQueryParams;
exports.normalizePathQuery = normalizePathQuery;
exports.stateShorthand = stateShorthand;
function noop() {}

function arrayToObject(array) {
  return array.reduce(function (obj, item) {
    obj[item] = 1;
    return obj;
  }, {});
}

function objectToArray(obj) {
  var array = [];
  for (var key in obj) {
    array.push(obj[key]);
  }return array;
}

function copyObject(obj) {
  var copy = {};
  for (var key in obj) {
    copy[key] = obj[key];
  }return copy;
}

function mergeObjects(to, from) {
  for (var key in from) {
    to[key] = from[key];
  }return to;
}

function mapValues(obj, fn) {
  var result = {};
  for (var key in obj) {
    result[key] = fn(obj[key]);
  }return result;
}

/*
* Return the set of all the keys that changed (either added, removed or modified).
*/
function objectDiff(obj1, obj2) {
  var update = {};
  var enter = {};
  var exit = {};
  var all = {};

  obj1 = obj1 || {};

  for (var name in obj1) {
    if (!(name in obj2)) exit[name] = all[name] = true;else if (obj1[name] != obj2[name]) update[name] = all[name] = true;
  }

  for (var _name in obj2) {
    if (!(_name in obj1)) enter[_name] = all[_name] = true;
  }

  return { all: all, update: update, enter: enter, exit: exit };
}

function makeMessage() {
  var message = arguments[0];
  var tokens = Array.prototype.slice.call(arguments, 1);

  for (var i = 0, l = tokens.length; i < l; i++) {
    message = message.replace('{' + i + '}', tokens[i]);
  }return message;
}

function parsePaths(path) {
  return path.split('/').filter(function (str) {
    return str.length;
  }).map(function (str) {
    return decodeURIComponent(str);
  });
}

function parseQueryParams(query) {
  return query ? query.split('&').reduce(function (res, paramValue) {
    var _paramValue$split = paramValue.split('='),
        param = _paramValue$split[0],
        value = _paramValue$split[1];

    res[param] = decodeURIComponent(value);
    return res;
  }, {}) : {};
}

var LEADING_SLASHES = /^\/+/;
var TRAILING_SLASHES = /^([^?]*?)\/+$/;
var TRAILING_SLASHES_BEFORE_QUERY = /\/+\?/;
function normalizePathQuery(pathQuery) {
  return '/' + pathQuery.replace(LEADING_SLASHES, '').replace(TRAILING_SLASHES, '$1').replace(TRAILING_SLASHES_BEFORE_QUERY, '?');
}

function stateShorthand(uri, options, children) {
  return mergeObjects({ uri: uri, children: children || {} }, options);
}

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.Set = Set;
exports.shallowEqual = shallowEqual;
function Set() {
  var set = {};
  for (var i = 0; i < arguments.length; i++) {
    set[arguments[i]] = 1;
  }
  return set;
}

/* Efficient shallow comparison of two objects */

function shallowEqual(objA, objB) {
  if (objA === objB) return true;

  var keysA = Object.keys(objA);
  var keysB = Object.keys(objB);

  if (keysA.length !== keysB.length) return;

  // Test for A's keys different from B's.
  for (var i = 0; i < keysA.length; i++) {
    var valA = objA[keysA[i]];
    var valB = objB[keysA[i]];

    if (valA !== valB) {
      if (valA && valA.type === 'partiallyAppliedMessage') {
        // A partially applied message will always have a new reference,
        // so compare the references of the payloads instead.
        // It is assumed Messages are stable for a given key.
        if (valA.payload !== valB.payload) return false;
      } else return false;
    }
  }

  return true;
}

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var router_1 = __webpack_require__(94);
exports.Router = router_1.Router;
exports.RouteDef = router_1.RouteDef;
var app_1 = __webpack_require__(98);
var snabbdomModules = [
    __webpack_require__(44).default,
    __webpack_require__(45).default,
    __webpack_require__(46).default,
    __webpack_require__(43).default
];
var app = app_1.default();
var router = router_1.Router({
    routes: { app: app },
    elm: document.querySelector('#main'),
    snabbdomModules: snabbdomModules
});
exports.routes = router.routes.app;
exports.transitionTo = router.transitionTo;
exports.replaceParams = router.replaceParams;
exports.previous = router.previous;
exports.link = router.link;
router.init();


/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

/* Represents the public API of the last instanciated router; Useful to break circular dependencies between router and its states */
var api = {};
exports.default = api;

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.util = exports.State = exports.api = exports.Router = undefined;

var _util = __webpack_require__(7);

var util = _interopRequireWildcard(_util);

var _Router = __webpack_require__(19);

var _Router2 = _interopRequireDefault(_Router);

var _api = __webpack_require__(10);

var _api2 = _interopRequireDefault(_api);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

var State = util.stateShorthand;

exports.Router = _Router2.default;
exports.api = _api2.default;
exports.State = State;
exports.util = util;

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

exports.__esModule = true;
/** Performs a shallow update of an object using a partial object of the same shape. A new object is returned. */
function update(host, spec) {
    var result = {};
    Object.keys(host).forEach(function (key) { result[key] = host[key]; });
    for (var key in spec) {
        var specValue = spec[key];
        if (specValue === exports.DELETE) {
            delete result[key];
        }
        else {
            result[key] = specValue;
        }
    }
    return result;
}
exports.update = update;
// We lie about the public type so that only a property that is optional or that can be assigned to undefined can be DELETE'd
/** Marker used to delete a key */
exports.DELETE = {};


/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = Message;

var messageId = 1;

/** User-defined component message factory */
function Message(name) {
  var _id = messageId++;

  function message(payload) {
    var result = { _id: _id, _name: name, payload: payload };
    result.is = messageIs;
    return result;
  }

  message._id = _id;
  message._name = name;
  message._isMessage = true;
  message.with = withPayload;

  return message;
}

function withPayload(payload) {
  return PartiallyAppliedMessage(this, payload);
}

function messageIs(ofType) {
  return this._id === ofType._id;
}

/** Creates a new Message type that is partially applied with a payload */
function PartiallyAppliedMessage(message, payload) {

  function result(maybeOtherPayload) {
    return message(maybeOtherPayload ? [payload, maybeOtherPayload] : payload);
  }

  result.type = 'partiallyAppliedMessage';
  result.payload = payload;

  return result;
}

Message.unhandled = Message('unhandled');

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = Messages;
exports._sendToElement = _sendToElement;

var _observable = __webpack_require__(1);

/* Message sending between components, through the DOM */

function Messages(el) {
  this.el = el;
}

Messages.prototype.listen = function (messageType) {
  return this.storeMsg.listen(messageType);
};

Messages.prototype.send = function (msg) {
  this.storeMsg.send(msg);
};

Messages.prototype.sendToParent = function (msg) {
  _sendToElement(this.el.parentElement, msg);
};

Messages.prototype.listenAt = function (selectorOrEl) {
  var el = selectorOrEl instanceof Element ? selectorOrEl : document.querySelector(selectorOrEl);

  if (!el) return;

  var debugName = el.tagName.toLowerCase() + (el.id ? '#' + el.id : '') + (el.className ? '.' + el.className : '');

  return (0, _observable.Observable)(function (add) {
    el.__subs__ = el.__subs__ || [];
    var subs = el.__subs__;
    subs.push(add);

    return function () {
      subs.splice(subs.indexOf(add), 1);
      if (subs.length === 0) el.__subs__ = undefined;
    };
  }).named('listenAt(' + debugName + ')');
};

/** Sends a Message to a DOM Element that will be received by the nearest component */
function _sendToElement(el, msg) {
  var handled = false;

  while (el && !handled) {

    // Classic component's listen
    if (el.__comp__) {
      handled = true;
      el.__comp__.messages.send(msg);
    }

    // listenAt
    if (el.__subs__) {
      handled = true;
      el.__subs__.forEach(function (add) {
        return add(msg);
      });
    }

    el = el.parentElement;
  }
}

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.Render = undefined;
exports.setPatchFunction = setPatchFunction;
exports.isFirstRender = isFirstRender;
exports.renderInto = renderInto;
exports.renderSync = renderSync;
exports.renderComponentNow = renderComponentNow;
exports.renderNewComponentNow = renderNewComponentNow;
exports.renderComponentNextFrame = renderComponentNextFrame;

var _h = __webpack_require__(4);

var _h2 = _interopRequireDefault(_h);

var _vnode = __webpack_require__(6);

var _log = __webpack_require__(5);

var _log2 = _interopRequireDefault(_log);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var componentsToRender = [];
var nodesToRender = [];
var scheduledDOMReads = [];
var scheduledDOMWrites = [];
var rendering = false;
var nextRender = undefined;
var renderBeginTime = undefined;
var _isFirstRender = true;
var patch = void 0;

function setPatchFunction(value) {
  patch = value;
}

var Render = exports.Render = {
  into: renderInto,
  isFirst: isFirstRender,
  scheduleDOMRead: scheduleDOMRead,
  scheduleDOMWrite: scheduleDOMWrite
};

function isFirstRender() {
  return _isFirstRender;
}

/**
 * Generic render function for arbitrary VDOM rendering
 */
function renderInto(target, vdom, onComplete) {
  var task = {
    target: target,
    vdom: vdom,
    onComplete: onComplete,
    cancelled: false
  };

  nodesToRender.push(task);

  renderNextFrame();

  return function cancel() {
    task.cancelled = true;
  };
}

// Used by startApp
function renderSync(target, vdom, replace) {
  var task = {
    target: target,
    vdom: vdom,
    replace: replace
  };

  nodesToRender.push(task);

  renderNow();
}

/* Render a component immediately. This is used internally and it is assumed a render phase is already ongoing */
function renderComponentNow(component) {
  if (componentsToRender.indexOf(component) === -1) componentsToRender.push(component);
}

/* Optimization of the above function: A new component cannot be possibly found in the render queue */
function renderNewComponentNow(component) {
  componentsToRender.push(component);
}

function renderComponentNextFrame(component) {
  if (rendering) {
    // This is pretty bad but not breaking: It means the developer
    // synchronously send a message inside a render() function.
    // Probably just a mistake.
    console.warn('A component tried to re-render while a rendering was already ongoing', component.elm);
    return;
  }

  // This component is already scheduled for the next redraw.
  // For instance, this can happen while the app's tab is inactive,
  // or when synchronously sending a few messages.
  // Avoids doing more work than necessary when re-activating it.
  if (componentsToRender.indexOf(component) !== -1) return;

  componentsToRender.push(component);

  renderNextFrame();
}

function renderNextFrame() {
  if (!nextRender && !rendering) nextRender = requestAnimationFrame(renderNow);
}

function renderComponent(component) {
  var props = component.props,
      store = component.store,
      messages = component.messages,
      elm = component.elm,
      render = component.render,
      vnode = component.vnode,
      destroyed = component.destroyed;

  // Bail if the component is already destroyed.
  // This can happen if the parent renders first and decide a child component should be removed.

  if (destroyed) return;

  var isNew = vnode === undefined;

  var beforeRender = void 0;

  if (_log2.default.render) beforeRender = performance.now();

  var newVNode = render({ props: props, state: store.state(), msg: messages });
  patchInto(vnode || elm, newVNode);

  if ((0, _log.shouldLog)(_log2.default.render, component.key)) {
    var renderTime = Math.round((performance.now() - beforeRender) * 100) / 100;
    console.log('Render component %c' + component.key, 'font-weight: bold', renderTime + ' ms', '| props: ', props, '| state: ', store.state());
  }

  component.lifecycle.rendered(component, newVNode);
}

function renderNow() {
  rendering = true;
  nextRender = undefined;

  logBeginRender();

  // Render components in a top-down fashion.
  // This ensures the rendering order is predictive and props/states are consistent.
  // If we didn't do that, a component could first be rendered following a state change
  // but then miss out on a props change from its parent.
  componentsToRender.sort(function (compA, compB) {
    return compA.depth - compB.depth;
  });

  processRenderQueue();

  processDOMReadsWrites();

  rendering = false;
  _isFirstRender = false;

  logEndRender();
}

function processRenderQueue() {
  var completeCallbacks = [];

  while (nodesToRender.length || componentsToRender.length) {
    while (nodesToRender.length) {
      var _nodesToRender$shift = nodesToRender.shift(),
          target = _nodesToRender$shift.target,
          vdom = _nodesToRender$shift.vdom,
          replace = _nodesToRender$shift.replace,
          onComplete = _nodesToRender$shift.onComplete,
          cancelled = _nodesToRender$shift.cancelled;

      if (cancelled) continue;
      replace ? patch(target, vdom) : patchInto(target, vdom);
      if (onComplete) completeCallbacks.push(onComplete);
    }

    while (componentsToRender.length) {
      var component = componentsToRender.shift();
      renderComponent(component);
    }

    // Wait for the components indirectly introduced via renderInto to be rendered
    while (completeCallbacks.length) {
      completeCallbacks.shift()();
    }
  }
}

function processDOMReadsWrites() {
  while (scheduledDOMReads.length || scheduledDOMWrites.length) {

    while (scheduledDOMReads.length) {
      scheduledDOMReads.shift()();
    }

    while (scheduledDOMWrites.length) {
      scheduledDOMWrites.shift()();
    }
  }
}

function scheduleDOMRead(callback) {
  scheduledDOMReads.push(callback);
  renderNextFrame();
}

function scheduleDOMWrite(callback) {
  scheduledDOMWrites.push(callback);
  renderNextFrame();
}

function logBeginRender() {
  if (_log2.default.render) {
    renderBeginTime = performance.now();
    console.log('%cRender - begin', 'color: orange');
  }
}

function logEndRender() {
  if (_log2.default.render) {
    var time = Math.round((performance.now() - renderBeginTime) * 100) / 100;
    console.log('%cRender - end (' + time + 'ms)\n\n\n', 'color: orange');
  }
}

function patchInto(target, node) {
  var targetIsArray = Array.isArray(target);
  var nodeIsArray = Array.isArray(node);

  if (nodeIsArray) mapPrimitiveNodes(node);

  // First render inside an Element
  if (target.elm === undefined) {
    patch((0, _vnode.vnode)('dummy', {}, [], undefined, target), (0, _vnode.vnode)('dummy', {}, nodeIsArray ? node : [node]));

    if (nodeIsArray) node.elm = target;
  }
  // Update using a previous VNode or VNode[] to patch against
  else {
      if (targetIsArray) {
        patch((0, _vnode.vnode)('dummy', {}, target, undefined, target.elm), (0, _vnode.vnode)('dummy', {}, nodeIsArray ? node : [node]));
      } else {
        patch(target, node);
      }

      if (nodeIsArray) node.elm = target.elm;
    }
}

/*
  Similar to what h() does for its children. We have to do it here ourselves
  when we are passed an Array of Nodes as it didn't go through the h() transformation.
  The operation is mutative, so that the Array of Nodes can later be reused for patching.
  This is consistent with the snabbdom's way.
*/
function mapPrimitiveNodes(arr) {
  for (var i = 0; i < arr.length; ++i) {
    var node = arr[i];
    if (typeof node === 'string' || typeof node === 'number') arr[i] = (0, _vnode.vnode)(undefined, undefined, undefined, node);
  }
}

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function createElement(tagName) {
    return document.createElement(tagName);
}
function createElementNS(namespaceURI, qualifiedName) {
    return document.createElementNS(namespaceURI, qualifiedName);
}
function createTextNode(text) {
    return document.createTextNode(text);
}
function createComment(text) {
    return document.createComment(text);
}
function insertBefore(parentNode, newNode, referenceNode) {
    parentNode.insertBefore(newNode, referenceNode);
}
function removeChild(node, child) {
    node.removeChild(child);
}
function appendChild(node, child) {
    node.appendChild(child);
}
function parentNode(node) {
    return node.parentNode;
}
function nextSibling(node) {
    return node.nextSibling;
}
function tagName(elm) {
    return elm.tagName;
}
function setTextContent(node, text) {
    node.textContent = text;
}
function getTextContent(node) {
    return node.textContent;
}
function isElement(node) {
    return node.nodeType === 1;
}
function isText(node) {
    return node.nodeType === 3;
}
function isComment(node) {
    return node.nodeType === 8;
}
exports.htmlDomApi = {
    createElement: createElement,
    createElementNS: createElementNS,
    createTextNode: createTextNode,
    createComment: createComment,
    insertBefore: insertBefore,
    removeChild: removeChild,
    appendChild: appendChild,
    parentNode: parentNode,
    nextSibling: nextSibling,
    tagName: tagName,
    setTextContent: setTextContent,
    getTextContent: getTextContent,
    isElement: isElement,
    isText: isText,
    isComment: isComment,
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = exports.htmlDomApi;
//# sourceMappingURL=htmldomapi.js.map

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

exports.array = Array.isArray;
function primitive(s) {
    return typeof s === 'string' || typeof s === 'number';
}
exports.primitive = primitive;
//# sourceMappingURL=is.js.map

/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
__webpack_require__(50);
__webpack_require__(92);
__webpack_require__(9);


/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _anchors = __webpack_require__(23);

var _anchors2 = _interopRequireDefault(_anchors);

var _StateWithParams = __webpack_require__(21);

var _StateWithParams2 = _interopRequireDefault(_StateWithParams);

var _Transition = __webpack_require__(22);

var _Transition2 = _interopRequireDefault(_Transition);

var _util = __webpack_require__(7);

var util = _interopRequireWildcard(_util);

var _State = __webpack_require__(20);

var _State2 = _interopRequireDefault(_State);

var _api = __webpack_require__(10);

var _api2 = _interopRequireDefault(_api);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var defaultOptions = {
  enableLogs: false,
  interceptAnchors: true,
  notFound: null,
  urlSync: 'history',
  hashPrefix: ''
};

/*
* Create a new Router instance, passing any state defined declaratively.
* More states can be added using addState().
*
* Because a router manages global state (the URL), only one instance of Router
* should be used inside an application.
*/
function Router(declarativeStates) {
  var router = {};
  var states = stateTrees(declarativeStates);
  var eventCallbacks = {};

  var options = util.copyObject(defaultOptions);
  var firstTransition = true;
  var ignoreNextURLChange = false;
  var currentPathQuery = void 0;
  var currentParamsDiff = {};
  var currentState = void 0;
  var previousState = void 0;
  var transition = void 0;
  var leafStates = void 0;
  var urlChanged = void 0;
  var initialized = void 0;
  var hashSlashString = void 0;

  /*
  * Setting a new state will start a transition from the current state to the target state.
  * A successful transition will result in the URL being changed.
  * A failed transition will leave the router in its current state.
  */
  function setState(state, params, acc) {
    var fromState = transition ? (0, _StateWithParams2.default)(transition.currentState, transition.toParams) : currentState;

    var diff = util.objectDiff(fromState && fromState.params, params);

    var toState = (0, _StateWithParams2.default)(state, params, currentPathQuery, diff);

    if (preventTransition(fromState, toState, diff)) {
      if (transition && transition.exiting) cancelTransition();
      return;
    }

    if (transition) cancelTransition();

    // While the transition is running, any code asking the router about the previous/current state should
    // get the end result state.
    previousState = currentState;
    currentState = toState;
    currentParamsDiff = diff;

    transition = (0, _Transition2.default)(fromState, toState, diff, acc, router, logger);

    startingTransition(fromState, toState);

    // In case of a redirect() called from 'startingTransition', the transition already ended.
    if (transition) transition.run();

    // In case of a redirect() called from the transition itself, the transition already ended
    if (transition) {
      if (transition.cancelled) currentState = fromState;else endingTransition(fromState, toState);
    }

    transition = null;
  }

  function cancelTransition() {
    logger.log('Cancelling existing transition from {0} to {1}', transition.from, transition.to);

    transition.cancel();

    firstTransition = false;
  }

  function startingTransition(fromState, toState) {
    logger.log('Starting transition from {0} to {1}', fromState, toState);

    var from = fromState ? fromState.asPublic : null;
    var to = toState.asPublic;

    eventCallbacks.started && eventCallbacks.started(to, from);
  }

  function endingTransition(fromState, toState) {
    if (!urlChanged && !firstTransition) {
      logger.log('Updating URL: {0}', currentPathQuery);
      updateURLFromState(currentPathQuery, document.title, currentPathQuery);
    }

    firstTransition = false;

    logger.log('Transition from {0} to {1} ended', fromState, toState);

    toState.state.lastParams = toState.params;

    var from = fromState ? fromState.asPublic : null;
    var to = toState.asPublic;
    eventCallbacks.ended && eventCallbacks.ended(to, from);
  }

  function updateURLFromState(state, title, url) {
    if (isHashMode()) {
      ignoreNextURLChange = true;
      location.hash = options.hashPrefix + url;
    } else history.pushState(state, title, url);
  }

  /*
  * Return whether the passed state is the same as the current one
  * in which case the router can ignore the change.
  */
  function preventTransition(current, newState, diff) {
    if (!current) return false;

    return newState.state == current.state && Object.keys(diff.all).length == 0;
  }

  /*
  * The state wasn't found
  * Transition to the 'notFound' state if the developer specified it or else throw an error.
  */
  function notFound(state) {
    logger.log('State not found: {0}', state);

    if (options.notFound) return setState(leafStates[options.notFound], {});else throw new Error('State "' + state + '" could not be found');
  }

  /*
  * Configure the router before its initialization.
  * The available options are:
  *   enableLogs: Whether (debug and error) console logs should be enabled. Defaults to false.
  *   interceptAnchors: Whether anchor mousedown/clicks should be intercepted and trigger a state change. Defaults to true.
  *   notFound: The State to enter when no state matching the current path query or name could be found. Defaults to null.
  *   urlSync: How should the router maintain the current state and the url in sync. Defaults to true (history API).
  *   hashPrefix: Customize the hash separator. Set to '!' in order to have a hashbang like '/#!/'. Defaults to empty string.
  */
  function configure(withOptions) {
    util.mergeObjects(options, withOptions);
    return router;
  }

  /*
  * Initialize the router.
  * The router will immediately initiate a transition to, in order of priority:
  * 1) The init state passed as an argument
  * 2) The state captured by the current URL
  */
  function init(initState, initParams) {
    if (options.enableLogs || Router.log) Router.enableLogs();

    if (options.interceptAnchors) (0, _anchors2.default)(router);

    hashSlashString = '#' + options.hashPrefix + '/';

    logger.log('Router init');

    initStates();
    logStateTree();

    initState = initState !== undefined ? initState : urlPathQuery();

    logger.log('Initializing to state {0}', initState || '""');
    transitionTo(initState, initParams);

    listenToURLChanges();

    initialized = true;
    return router;
  }

  /*
  * Remove any possibility of side effect this router instance might cause.
  * Used for testing purposes where we keep reusing the same router instance.
  */
  function terminate() {
    window.onhashchange = null;
    window.onpopstate = null;
    options = util.copyObject(defaultOptions);
    logger.enabled = false;
    logger.log = logger.error = util.noop;
  }

  function listenToURLChanges() {

    function onURLChange(evt) {
      if (ignoreNextURLChange) {
        ignoreNextURLChange = false;
        return;
      }

      var newState = evt.state || urlPathQuery();

      logger.log('URL changed: {0}', newState);
      urlChanged = true;
      setStateForPathQuery(newState);
    }

    window[isHashMode() ? 'onhashchange' : 'onpopstate'] = onURLChange;
  }

  function initStates() {
    var stateArray = util.objectToArray(states);

    addDefaultStates(stateArray);

    eachRootState(function (name, state) {
      state.init(router, name);
    });

    assertPathUniqueness(stateArray);

    leafStates = registerLeafStates(stateArray, {});

    assertNoAmbiguousPaths();
  }

  function assertPathUniqueness(states) {
    var paths = {};

    states.forEach(function (state) {
      if (paths[state.path]) {
        var fullPaths = states.map(function (s) {
          return s.fullPath() || 'empty';
        });
        throw new Error('Two sibling states have the same path (' + fullPaths + ')');
      }

      paths[state.path] = 1;
      assertPathUniqueness(state.children);
    });
  }

  function assertNoAmbiguousPaths() {
    var paths = {};

    for (var name in leafStates) {
      var path = util.normalizePathQuery(leafStates[name].fullPath());
      if (paths[path]) throw new Error('Ambiguous state paths: ' + path);
      paths[path] = 1;
    }
  }

  function addDefaultStates(states) {
    states.forEach(function (state) {
      var children = util.objectToArray(state.states);

      // This is a parent state: Add a default state to it if there isn't already one
      if (children.length) {
        addDefaultStates(children);

        var hasDefaultState = children.reduce(function (result, state) {
          return state.path == '' || result;
        }, false);

        if (hasDefaultState) return;

        var defaultState = (0, _State2.default)({ uri: '' });
        state.states._default_ = defaultState;
      }
    });
  }

  function eachRootState(callback) {
    for (var name in states) {
      callback(name, states[name]);
    }
  }

  function registerLeafStates(states, leafStates) {
    return states.reduce(function (leafStates, state) {
      if (state.children.length) return registerLeafStates(state.children, leafStates);else {
        leafStates[state.fullName] = state;
        state.paths = util.parsePaths(state.fullPath());
        return leafStates;
      }
    }, leafStates);
  }

  /*
  * Request a programmatic state change.
  *
  * Two notations are supported:
  * transitionTo('my.target.state', {id: 33, filter: 'desc'})
  * transitionTo('target/33?filter=desc')
  */
  function transitionTo(pathQueryOrName) {
    var name = leafStates[pathQueryOrName];
    var params = (name ? arguments[1] : null) || {};
    var acc = name ? arguments[2] : arguments[1];

    logger.log('Changing state to {0}', pathQueryOrName || '""');

    urlChanged = false;

    if (name) setStateByName(name, params, acc);else setStateForPathQuery(pathQueryOrName, acc);
  }

  /*
   * Replaces the current state's params in the history with new params.
   * The state is NOT exited/re-entered.
   */
  function replaceParams(newParams) {
    if (!currentState) return;

    var newUri = router.link(currentState.state.fullName, newParams);

    currentState = (0, _StateWithParams2.default)(currentState.state, newParams, newUri);

    history.replaceState(newUri, document.title, newUri);
  }

  /*
  * Attempt to navigate to 'stateName' with its previous params or
  * fallback to the defaultParams parameter if the state was never entered.
  */
  function backTo(stateName, defaultParams, acc) {
    var params = leafStates[stateName].lastParams || defaultParams;
    transitionTo(stateName, params, acc);
  }

  function setStateForPathQuery(pathQuery, acc) {
    var state = void 0,
        params = void 0,
        _state = void 0,
        _params = void 0;

    currentPathQuery = util.normalizePathQuery(pathQuery);

    var pq = currentPathQuery.split('?');
    var path = pq[0];
    var query = pq[1];
    var paths = util.parsePaths(path);
    var queryParams = util.parseQueryParams(query);

    for (var name in leafStates) {
      _state = leafStates[name];
      _params = _state.matches(paths);

      if (_params) {
        state = _state;
        params = util.mergeObjects(_params, queryParams);
        break;
      }
    }

    if (state) setState(state, params, acc);else notFound(currentPathQuery);
  }

  function setStateByName(name, params, acc) {
    var state = leafStates[name];

    if (!state) return notFound(name);

    var pathQuery = interpolate(state, params);
    setStateForPathQuery(pathQuery, acc);
  }

  /*
  * Add a new root state to the router.
  * The name must be unique among root states.
  */
  function addState(name, state) {
    if (states[name]) throw new Error('A state already exist in the router with the name ' + name);

    state = stateTree(state);

    states[name] = state;

    // The router is already initialized: Hot patch this state in.
    if (initialized) {
      state.init(router, name);
      registerLeafStates([state], leafStates);
    }

    return router;
  }

  /*
  * Read the path/query from the URL.
  */
  function urlPathQuery() {
    var hashSlash = location.href.indexOf(hashSlashString);
    var pathQuery = void 0;

    if (hashSlash > -1) pathQuery = location.href.slice(hashSlash + hashSlashString.length);else if (isHashMode()) pathQuery = '/';else pathQuery = (location.pathname + location.search).slice(1);

    return util.normalizePathQuery(pathQuery);
  }

  function isHashMode() {
    return options.urlSync == 'hash';
  }

  /*
  * Compute a link that can be used in anchors' href attributes
  * from a state name and a list of params, a.k.a reverse routing.
  */
  function link(stateName, params) {
    var state = leafStates[stateName];
    if (!state) throw new Error('Cannot find state ' + stateName);

    var interpolated = interpolate(state, params);
    var uri = util.normalizePathQuery(interpolated);

    return isHashMode() ? '#' + options.hashPrefix + uri : uri;
  }

  function interpolate(state, params) {
    var encodedParams = {};

    for (var key in params) {
      if (params[key] !== undefined) encodedParams[key] = encodeURIComponent(params[key]);
    }

    return state.interpolate(encodedParams);
  }

  /*
  * Returns an object representing the current state of the router.
  */
  function getCurrent() {
    return currentState && currentState.asPublic;
  }

  /*
  * Returns an object representing the previous state of the router
  * or null if the router is still in its initial state.
  */
  function getPrevious() {
    return previousState && previousState.asPublic;
  }

  /*
  * Returns the diff between the current params and the previous ones.
  */
  function getParamsDiff() {
    return currentParamsDiff;
  }

  function allStatesRec(states, acc) {
    acc.push.apply(acc, states);
    states.forEach(function (state) {
      return allStatesRec(state.children, acc);
    });
    return acc;
  }

  function allStates() {
    return allStatesRec(util.objectToArray(states), []);
  }

  /*
  * Returns the state object that was built with the given options object or that has the given fullName.
  * Returns undefined if the state doesn't exist.
  */
  function findState(by) {
    var filterFn = (typeof by === 'undefined' ? 'undefined' : _typeof(by)) === 'object' ? function (state) {
      return by === state.options;
    } : function (state) {
      return by === state.fullName;
    };

    var state = allStates().filter(filterFn)[0];
    return state && state.asPublic;
  }

  /*
  * Returns whether the router is executing its first transition.
  */
  function isFirstTransition() {
    return previousState == null;
  }

  function on(eventName, cb) {
    eventCallbacks[eventName] = cb;
    return router;
  }

  function stateTrees(states) {
    return util.mapValues(states, stateTree);
  }

  /*
  * Creates an internal State object from a specification POJO.
  */
  function stateTree(state) {
    if (state.children) state.children = stateTrees(state.children);
    return (0, _State2.default)(state);
  }

  function logStateTree() {
    if (!logger.enabled) return;

    function indent(level) {
      if (level == 0) return '';
      return new Array(2 + (level - 1) * 4).join(' ') + '── ';
    }

    var stateTree = function stateTree(state) {
      var path = util.normalizePathQuery(state.fullPath());
      var pathStr = state.children.length == 0 ? ' (@ path)'.replace('path', path) : '';
      var str = indent(state.parents.length) + state.name + pathStr + '\n';
      return str + state.children.map(stateTree).join('');
    };

    var msg = '\nState tree\n\n';
    msg += util.objectToArray(states).map(stateTree).join('');
    msg += '\n';

    logger.log(msg);
  }

  // Public methods

  router.configure = configure;
  router.init = init;
  router.transitionTo = transitionTo;
  router.replaceParams = replaceParams;
  router.backTo = backTo;
  router.addState = addState;
  router.link = link;
  router.current = getCurrent;
  router.previous = getPrevious;
  router.findState = findState;
  router.isFirstTransition = isFirstTransition;
  router.paramsDiff = getParamsDiff;
  router.options = options;
  router.on = on;

  // Used for testing purposes only
  router.urlPathQuery = urlPathQuery;
  router.terminate = terminate;

  util.mergeObjects(_api2.default, router);

  return router;
}

// Logging

var logger = {
  log: util.noop,
  error: util.noop,
  enabled: false
};

Router.enableLogs = function () {
  logger.enabled = true;

  logger.log = function () {
    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    var message = util.makeMessage.apply(null, args);
    console.log(message);
  };

  logger.error = function () {
    for (var _len2 = arguments.length, args = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
      args[_key2] = arguments[_key2];
    }

    var message = util.makeMessage.apply(null, args);
    console.error(message);
  };
};

exports.default = Router;

/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _util = __webpack_require__(7);

var util = _interopRequireWildcard(_util);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

var PARAMS = /:[^\\?\/]*/g;

/*
* Creates a new State instance from a {uri, enter, exit, update, children} object.
* This is the internal representation of a state used by the router.
*/
function State(options) {
  var state = { options: options };
  var states = options.children;

  state.path = pathFromURI(options.uri);
  state.params = paramsFromURI(options.uri);
  state.queryParams = queryParamsFromURI(options.uri);
  state.states = states;
  state.data = options.data;

  state.enter = options.enter || util.noop;
  state.update = options.update;
  state.exit = options.exit || util.noop;

  /*
  * Initialize and freeze this state.
  */
  function init(router, name, parent) {
    state.router = router;
    state.name = name;
    state.isDefault = name == '_default_';
    state.parent = parent;
    state.parents = getParents();
    state.root = state.parent ? state.parents[state.parents.length - 1] : state;
    state.children = util.objectToArray(states);
    state.fullName = getFullName();
    state.asPublic = makePublicAPI();

    eachChildState(function (name, childState) {
      childState.init(router, name, state);
    });
  }

  /*
  * The full path, composed of all the individual paths of this state and its parents.
  */
  function fullPath() {
    var result = state.path;
    var stateParent = state.parent;

    while (stateParent) {
      if (stateParent.path) result = stateParent.path + '/' + result;
      stateParent = stateParent.parent;
    }

    return result;
  }

  /*
  * The list of all parents, starting from the closest ones.
  */
  function getParents() {
    var parents = [];
    var parent = state.parent;

    while (parent) {
      parents.push(parent);
      parent = parent.parent;
    }

    return parents;
  }

  /*
  * The fully qualified name of this state.
  * e.g granparentName.parentName.name
  */
  function getFullName() {
    var result = state.parents.reduceRight(function (acc, parent) {
      return acc + parent.name + '.';
    }, '') + state.name;

    return state.isDefault ? result.replace('._default_', '') : result;
  }

  function allQueryParams() {
    return state.parents.reduce(function (acc, parent) {
      return util.mergeObjects(acc, parent.queryParams);
    }, util.copyObject(state.queryParams));
  }

  function makePublicAPI() {
    return {
      name: state.name,
      fullName: state.fullName,
      data: options.data || {},
      parent: state.parent && state.parent.asPublic
    };
  }

  function eachChildState(callback) {
    for (var name in states) {
      callback(name, states[name]);
    }
  }

  /*
  * Returns whether this state matches the passed path Array.
  * In case of a match, the actual param values are returned.
  */
  function matches(paths) {
    var params = {};
    var nonRestStatePaths = state.paths.filter(function (p) {
      return p[p.length - 1] !== '*';
    });

    /* This state has more paths than the passed paths, it cannot be a match */
    if (nonRestStatePaths.length > paths.length) return false;

    /* Checks if the paths match one by one */
    for (var i = 0; i < paths.length; i++) {
      var path = paths[i];
      var thatPath = state.paths[i];

      /* This state has less paths than the passed paths, it cannot be a match */
      if (!thatPath) return false;

      var isRest = thatPath[thatPath.length - 1] === '*';
      if (isRest) {
        var name = paramName(thatPath);
        params[name] = paths.slice(i).join('/');
        return params;
      }

      var isDynamic = thatPath[0] === ':';
      if (isDynamic) {
        var _name = paramName(thatPath);
        params[_name] = path;
      } else if (thatPath != path) return false;
    }

    return params;
  }

  /*
  * Returns a URI built from this state and the passed params.
  */
  function interpolate(params) {
    var path = state.fullPath().replace(PARAMS, function (p) {
      return params[paramName(p)] || '';
    });

    var queryParams = allQueryParams();
    var passedQueryParams = Object.keys(params).filter(function (p) {
      return queryParams[p];
    });

    var query = passedQueryParams.map(function (p) {
      return p + '=' + params[p];
    }).join('&');

    return path + (query.length ? '?' + query : '');
  }

  function toString() {
    return state.fullName;
  }

  state.init = init;
  state.fullPath = fullPath;
  state.allQueryParams = allQueryParams;
  state.matches = matches;
  state.interpolate = interpolate;
  state.toString = toString;

  return state;
}

function paramName(param) {
  return param[param.length - 1] === '*' ? param.substr(1).slice(0, -1) : param.substr(1);
}

function pathFromURI(uri) {
  return (uri || '').split('?')[0];
}

function paramsFromURI(uri) {
  var matches = PARAMS.exec(uri);
  return matches ? util.arrayToObject(matches.map(paramName)) : {};
}

function queryParamsFromURI(uri) {
  var query = (uri || '').split('?')[1];
  return query ? util.arrayToObject(query.split('&')) : {};
}

exports.default = State;

/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = StateWithParams;
/*
* Creates a new StateWithParams instance.
*
* StateWithParams is the merge between a State object (created and added to the router before init)
* and params (both path and query params, extracted from the URL after init)
*
* This is an internal model The public model is the asPublic property.
*/
function StateWithParams(state, params, pathQuery, diff) {
  return {
    state: state,
    params: params,
    toString: toString,
    asPublic: makePublicAPI(state, params, pathQuery, diff)
  };
}

function makePublicAPI(state, params, pathQuery, paramsDiff) {

  /*
  * Returns whether this state or any of its parents has the given fullName.
  */
  function isIn(fullStateName) {
    var current = state;
    while (current) {
      if (current.fullName == fullStateName) return true;
      current = current.parent;
    }
    return false;
  }

  return {
    uri: pathQuery,
    params: params,
    paramsDiff: paramsDiff,
    name: state ? state.name : '',
    fullName: state ? state.fullName : '',
    data: state ? state.data : {},
    isIn: isIn
  };
}

function toString() {
  var name = this.state && this.state.fullName;
  return name + ':' + JSON.stringify(this.params);
}

/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
/*
* Create a new Transition instance.
*/
function Transition(fromStateWithParams, toStateWithParams, paramsDiff, acc, router, logger) {
  var root = { root: null, inclusive: true };
  var enters = void 0;
  var exits = void 0;

  var fromState = fromStateWithParams && fromStateWithParams.state;
  var toState = toStateWithParams.state;
  var params = toStateWithParams.params;
  var isUpdate = fromState == toState;

  var transition = {
    from: fromState,
    to: toState,
    toParams: params,
    cancel: cancel,
    run: run,
    cancelled: false,
    currentState: fromState
  };

  // The first transition has no fromState.
  if (fromState) root = transitionRoot(fromState, toState, isUpdate, paramsDiff);

  exits = fromState ? transitionStates(fromState, root) : [];
  enters = transitionStates(toState, root).reverse();

  function run() {
    startTransition(enters, exits, params, transition, isUpdate, acc, router, logger);
  }

  function cancel() {
    transition.cancelled = true;
  }

  return transition;
}

function startTransition(enters, exits, params, transition, isUpdate, acc, router, logger) {
  acc = acc || {};

  transition.exiting = true;
  exits.forEach(function (state) {
    if (isUpdate && state.update) return;
    runStep(state, 'exit', params, transition, acc, router, logger);
  });
  transition.exiting = false;

  enters.forEach(function (state) {
    var fn = isUpdate && state.update ? 'update' : 'enter';
    runStep(state, fn, params, transition, acc, router, logger);
  });
}

function runStep(state, stepFn, params, transition, acc, router, logger) {
  if (transition.cancelled) return;

  if (logger.enabled) {
    var capitalizedStep = stepFn[0].toUpperCase() + stepFn.slice(1);
    logger.log(capitalizedStep + ' ' + state.fullName);
  }

  var result = state[stepFn](params, acc, router);

  if (transition.cancelled) return;

  transition.currentState = stepFn == 'exit' ? state.parent : state;

  return result;
}

/*
* The top-most fromState's parent that must be exited
* or undefined if the two states are in distinct branches of the tree.
*/
function transitionRoot(fromState, toState, isUpdate, paramsDiff) {
  var closestCommonParent = void 0;

  var parents = [fromState].concat(fromState.parents).reverse();

  // Find the closest common parent of the from/to states, if any.
  if (!isUpdate) {
    for (var i = 0; i < fromState.parents.length; i++) {
      var parent = fromState.parents[i];

      if (toState.parents.indexOf(parent) > -1) {
        closestCommonParent = parent;
        break;
      }
    }
  }

  // Find the top-most parent owning some updated param(s) or bail if we first reach the closestCommonParent
  for (var _i = 0; _i < parents.length; _i++) {
    var _parent = parents[_i];

    for (var param in paramsDiff.all) {
      if (_parent.params[param] || _parent.queryParams[param]) return { root: _parent, inclusive: true };
    }

    if (_parent === closestCommonParent) return { root: closestCommonParent, inclusive: false };
  }

  return closestCommonParent ? { root: closestCommonParent, inclusive: false } : { inclusive: true };
}

function transitionStates(state, _ref) {
  var root = _ref.root,
      inclusive = _ref.inclusive;

  root = root || state.root;

  var p = state.parents;
  var end = Math.min(p.length, p.indexOf(root) + (inclusive ? 1 : 0));

  return [state].concat(p.slice(0, end));
}

exports.default = Transition;

/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = interceptAnchors;

var router = void 0;

function onMouseDown(evt) {
  var href = hrefForEvent(evt);

  if (href !== undefined) router.transitionTo(href);
}

function onMouseClick(evt) {
  var href = hrefForEvent(evt);

  if (href !== undefined) {
    evt.preventDefault();
    router.transitionTo(href);
  }
}

function hrefForEvent(evt) {
  if (evt.defaultPrevented || evt.metaKey || evt.ctrlKey || !isLeftButton(evt)) return;

  var target = evt.target;
  var anchor = anchorTarget(target);
  if (!anchor) return;

  var dataNav = anchor.getAttribute('data-nav');

  if (dataNav == 'ignore') return;
  if (evt.type == 'mousedown' && dataNav != 'mousedown') return;

  var href = anchor.getAttribute('href');

  if (!href) return;
  if (href.charAt(0) == '#') {
    if (router.options.urlSync != 'hash') return;
    href = href.slice(1);
  }
  if (anchor.getAttribute('target') == '_blank') return;
  if (!isLocalLink(anchor)) return;

  // At this point, we have a valid href to follow.
  // Did the navigation already occur on mousedown though?
  if (evt.type == 'click' && dataNav == 'mousedown') {
    evt.preventDefault();
    return;
  }

  return href;
}

function isLeftButton(evt) {
  return evt.which == 1;
}

function anchorTarget(target) {
  while (target) {
    if (target.nodeName == 'A') return target;
    target = target.parentNode;
  }
}

function isLocalLink(anchor) {
  var hostname = anchor.hostname;
  var port = anchor.port;
  var protocol = anchor.protocol;

  // IE10 can lose the hostname/port property when setting a relative href from JS
  if (!hostname) {
    var tempAnchor = document.createElement("a");
    tempAnchor.href = anchor.href;
    hostname = tempAnchor.hostname;
    port = tempAnchor.port;
    protocol = tempAnchor.protocol;
  }

  var defaultPort = protocol.split(':')[0] === 'https' ? '443' : '80';

  var sameHostname = hostname == location.hostname;
  var samePort = (port || defaultPort) == (location.port || defaultPort);

  return sameHostname && samePort;
}

function interceptAnchors(forRouter) {
  router = forRouter;

  document.addEventListener('mousedown', onMouseDown);
  document.addEventListener('click', onMouseClick);
}

/***/ }),
/* 24 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 25 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"header":"header-29EXr","nav":"nav-Ajx9_","mainNav":"mainNav-3KI4m","buttons":"buttons-231y1","search":"search-2slN1","selection":"selection-24HAN","avatar":"avatar-27YcH"};

/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = Component;

var _h = __webpack_require__(4);

var _h2 = _interopRequireDefault(_h);

var _render = __webpack_require__(15);

var _util = __webpack_require__(8);

var _messages = __webpack_require__(14);

var _messages2 = _interopRequireDefault(_messages);

var _observable = __webpack_require__(1);

var _store = __webpack_require__(42);

var _store2 = _interopRequireDefault(_store);

var _log = __webpack_require__(5);

var _log2 = _interopRequireDefault(_log);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var empty = {};

function Component(options) {
  var name = options.name,
      _options$props = options.props,
      props = _options$props === undefined ? empty : _options$props,
      _options$sel = options.sel,
      sel = _options$sel === undefined ? 'component' : _options$sel,
      initState = options.initState,
      connect = options.connect,
      render = options.render;


  var key = props.key === undefined ? name : name + '_' + props.key;

  var data = {
    key: key,
    hook: { insert: insert, postpatch: postpatch, destroy: destroy },
    component: { props: props, initState: initState, connect: connect, render: render, key: name },
    attrs: { name: name }
  };

  // An empty placeholder is returned, and that's all our parent is going to see.
  // Each component handles its own internal rendering.
  var compVnode = (0, _h2.default)(sel, data);
  data.component.compVnode = compVnode;
  return compVnode;
}

function insert(vnode) {
  var component = vnode.data.component;
  var props = component.props,
      initState = component.initState,
      connect = component.connect;


  var connected = false;

  // Lookup from HTML Element to component, used in DOM-based messaging
  vnode.elm.__comp__ = component;

  // Store the component depth once it's attached to the DOM so we can render
  // component hierarchies in a predictive (top -> down) manner.
  component.depth = getDepth(vnode.elm);

  // Internal callbacks
  component.lifecycle = {
    rendered: rendered
  };

  var messages = new _messages2.default(vnode.elm);

  component.elm = vnode.elm;
  component.messages = messages;

  var propsObservable = (0, _observable.Observable)(function (add) {
    add(component.props);
    component.lifecycle.propsChanged = add;
  }).named('props');

  // Eagerly subscribe so that the observable get its first value and we honour
  // the ObservableWithInitialValue interface contract.
  propsObservable.subscribe(function (x) {
    return x;
  });

  component.store = (0, _store2.default)(initState(props), function (on, msg) {
    messages.storeMsg = msg;

    var connectParams = {
      on: on,
      props: propsObservable,
      msg: messages
    };

    connect(connectParams);
    connected = true;

    // First render.
    // Render right after our parent (which is in the middle of a patch)
    // so that we honour the snabbdom's insert hook,
    // e.g we get patched into our parent after our parent was added to the document.
    (0, _render.renderNewComponentNow)(component);
  }, {
    name: component.key,
    log: (0, _log.shouldLog)(_log2.default.message, component.key)
  });

  component.store.state.sliding2().subscribe(function (_ref) {
    var newState = _ref[0],
        oldState = _ref[1];


    var shouldRender =
    // Skip the first notification (hot observable)
    oldState &&
    // synchronous observables triggering before the first render should just be accumulated
    connected &&
    // the props observable triggered, a synchronous render is made right after so skip
    !component.lifecycle.propsChanging &&
    // null update
    !(0, _util.shallowEqual)(oldState, newState);

    if (shouldRender) (0, _render.renderComponentNextFrame)(component);
  });
}

// Called on every parent re-render, this is where the props passed by the component's parent may have changed.
function postpatch(oldVnode, vnode) {
  var oldData = oldVnode.data;
  var newData = vnode.data;

  // Server side rendering: Reconcilating with a server-rendered node will have skipped calling insert()
  if (!oldData.component) {
    insert(vnode);
  }

  // oldData wouldn't have a component reference set if it came from the server (it's first set in insert())
  var component = oldData.component || newData.component;
  var oldProps = component.props;
  var newProps = newData.component.props;

  // Update the original component with any property that may have changed during this render pass
  component.props = newProps;

  newData.component = component;

  // If the props changed, render immediately as we are already
  // in the render context of our parent
  if (!(0, _util.shallowEqual)(oldProps, newProps)) {

    component.lifecycle.propsChanging = true;
    component.lifecycle.propsChanged(newProps);
    component.lifecycle.propsChanging = false;

    (0, _render.renderComponentNow)(component);
  }
}

function rendered(component, newVnode) {
  // Store the new vnode inside the component so we can diff it next render
  component.vnode = newVnode;

  // For now, only lift the hook of non Array render outputs
  if (newVnode && !Array.isArray(newVnode)) {
    // Lift any 'remove' hook to our placeholder vnode for it to be called
    // as the placeholder is all our parent vnode knows about.
    // TODO: Call all the hooks of an Array VNode?
    var hook = newVnode.data.hook && newVnode.data.hook.remove;
    if (hook) component.compVnode.data.hook.remove = hook;
  }
}

function destroy(vnode) {
  var comp = vnode.data.component;
  comp.vnode.elm.__comp__ = null;

  destroyVnode(comp.vnode);
  comp.store.destroy();

  comp.destroyed = true;
}

// Destroy our vnode recursively
// Note: Can't invoke modules' destroy hook as they're hidden in snabbdom's closure.
// The default modules don't do anything in destroy() anyway.
function destroyVnode(vnode) {
  if (!vnode) return;

  var data = vnode.data;

  if (!data) return;

  if (data.hook && data.hook.destroy) data.hook.destroy(vnode);
  if (vnode.children) vnode.children.forEach(destroyVnode);
}

function getDepth(elm) {
  var depth = 0;
  var parent = elm.parentElement;
  while (parent) {
    depth++;
    parent = parent.parentElement;
  }
  return depth;
}

/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.eventsModule = undefined;

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _util = __webpack_require__(8);

var _messages = __webpack_require__(14);

/* snabbdom module extension used to register Messages as event listeners */

function updateEventListeners(oldVnode, vnode) {
  var oldEvents = oldVnode.data.events;
  var events = vnode.data.events;

  if (!events) return;

  var _loop = function _loop() {
    var current = events[name];
    var old = oldEvents && oldEvents[name];

    if (old !== current) {

      if (old && current && isSameMessageAndPayload(current, current.payload, old, old.payload)) return {
          v: void 0
        };

      vnode.elm['on' + name] = current ? function (evt) {
        return (0, _messages._sendToElement)(evt.currentTarget, current(evt));
      } : null;
    }
  };

  for (name in events) {
    var _ret = _loop();

    if ((typeof _ret === 'undefined' ? 'undefined' : _typeof(_ret)) === "object") return _ret.v;
  }

  if (!oldEvents) return;

  for (name in oldEvents) {
    if (events[name] == null) vnode.elm['on' + name] = null;
  }
}

function isSameMessageAndPayload(message, payload, oldMessage, oldPayload) {
  return message._id === oldMessage._id && payload === oldPayload;
}

var eventsModule = exports.eventsModule = {
  create: updateEventListeners,
  update: updateEventListeners
};

/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = debounce;
exports.debounceFunction = debounceFunction;

var _ = __webpack_require__(1);

function debounce(wait, source) {
  return (0, _.Observable)(function (add) {
    var debouncedAdd = debounceFunction(wait, add);
    var unsubscribe = source.subscribe(debouncedAdd);

    return function () {
      unsubscribe();
      debouncedAdd.cancel();
    };
  });
}

function debounceFunction(wait, func) {
  var timeout = void 0;

  var debounced = function debounced() {
    var args = arguments;

    var later = function later() {
      timeout = undefined;
      func.apply(null, args);
    };

    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };

  debounced.cancel = function () {
    return clearTimeout(timeout);
  };
  return debounced;
}

/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = delay;

var _ = __webpack_require__(1);

function delay(delayValue, source) {
  return (0, _.Observable)(function (add) {
    var currentTimeouts = [];

    var unsubSource = source.subscribe(function (val, name) {

      var timeout = setTimeout(function () {
        var index = currentTimeouts.indexOf(timeout);
        currentTimeouts.splice(index, 1);
        add(val, name);
      }, delayValue);

      currentTimeouts.push(timeout);
    });

    return function () {
      currentTimeouts.forEach(function (timeout) {
        return clearTimeout(timeout);
      });
      unsubSource();
    };
  });
}

/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = drop;

var _ = __webpack_require__(1);

function drop(count, source) {
  return (0, _.Observable)(function (add) {
    var dropped = 0;
    return source.subscribe(function (val, name) {
      if (dropped++ >= count) add(val, name);
    });
  });
}

/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = filter;

var _ = __webpack_require__(1);

function filter(predicate, source) {
  return (0, _.Observable)(function (add) {
    return source.subscribe(function (val, name) {
      if (predicate(val)) add(val, name);
    });
  });
}

/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = flatMapLatest;

var _ = __webpack_require__(1);

function flatMapLatest(mapper, source) {
  return (0, _.Observable)(function (add) {
    var currentUnsub = void 0;

    var unsubSource = source.subscribe(function (val) {
      currentUnsub && currentUnsub();
      var mappedObs = mapper(val);
      currentUnsub = mappedObs.subscribe(add);
    });

    return function () {
      currentUnsub && currentUnsub();
      unsubSource();
    };
  });
}

/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = fromEvent;

var _ = __webpack_require__(1);

var _util = __webpack_require__(8);

function fromEvent(name, el, childSelector) {
  return (0, _.Observable)(function (add) {

    var obsName = childSelector ? 'fromEvent[type=' + name + ', selector=' + childSelector + ']' : 'fromEvent[type=' + name + ']';

    var handler = childSelector ? function (evt) {
      if (targetMatches(evt.target, childSelector, el)) add(evt, obsName);
    } : function (evt) {
      return add(evt, obsName);
    };

    var useCapture = childSelector && name in nonBubblingEvents;

    el.addEventListener(name, handler, useCapture);
    return function () {
      return el.removeEventListener(name, handler, useCapture);
    };
  });
}

var nonBubblingEvents = (0, _util.Set)('blur', 'canplay', 'canplaythrough', 'change', 'durationchange', 'emptied', 'ended', 'focus', 'load', 'loadeddata', 'loadedmetadata', 'mouseenter', 'mouseleave', 'pause', 'play', 'playing', 'ratechange', 'reset', 'scroll', 'seeked', 'seeking', 'stalled', 'submit', 'suspend', 'timeupdate', 'unload', 'volumechange', 'waiting');

var proto = typeof window !== 'undefined' && Element ? Element.prototype : {};
var nativeMatches = proto.matches || proto.matchesSelector || proto.webkitMatchesSelector || proto.mozMatchesSelector || proto.msMatchesSelector || proto.oMatchesSelector;

function matches(el, selector) {
  return nativeMatches.call(el, selector);
}

function targetMatches(target, selector, root) {
  for (var el = target; el && el !== root; el = el.parentElement) {
    if (matches(el, selector)) return true;
  }
  return false;
}

/***/ }),
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = fromPromise;

var _ = __webpack_require__(1);

function fromPromise(promise) {
  return (0, _.Observable)(function (add) {
    var active = true;

    promise.then(function (value) {
      if (active) add({ type: 'success', value: value });
    }, function (error) {
      if (active) add({ type: 'failure', error: error });
    });

    return function () {
      active = false;
    };
  }).named('fromPromise');
}

/***/ }),
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = interval;

var _ = __webpack_require__(1);

function interval(time) {
  return (0, _.Observable)(function (add) {
    var intervalId = setInterval(add, time);
    return function () {
      return clearInterval(intervalId);
    };
  }).named('interval');
}

/***/ }),
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = map;

var _ = __webpack_require__(1);

function map(mapper, source) {
  return (0, _.Observable)(function (add) {
    return source.subscribe(function (val, name) {
      return add(mapper(val), name);
    });
  });
}

/***/ }),
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = merge;

var _ = __webpack_require__(1);

function merge() {
  for (var _len = arguments.length, sources = Array(_len), _key = 0; _key < _len; _key++) {
    sources[_key] = arguments[_key];
  }

  return (0, _.Observable)(function (add) {
    var unsubs = sources.map(function (obs) {
      return obs.subscribe(add);
    });
    return function () {
      return unsubs.forEach(function (unsub) {
        return unsub();
      });
    };
  });
}

/***/ }),
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = partition;

var _ = __webpack_require__(1);

function partition(predicate, source) {
  return [(0, _.Observable)(function (add) {
    return source.subscribe(function (value, name) {
      if (predicate(value)) add(value, name);
    });
  }), (0, _.Observable)(function (add) {
    return source.subscribe(function (value, name) {
      if (!predicate(value)) add(value, name);
    });
  })];
}

/***/ }),
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = pure;

var _ = __webpack_require__(1);

function pure(value) {
  return (0, _.Observable)(function (add) {
    return add(value);
  }).named('pure');
}

/***/ }),
/* 40 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.sliding2 = sliding2;
exports.default = sliding;

var _ = __webpack_require__(1);

function sliding2(source) {
  return sliding(2, source);
}

function sliding(size, source) {
  var window = [];

  return (0, _.Observable)(function (add) {
    return source.subscribe(function (val, name) {
      window = [val].concat(window);
      window = window.slice(0, size);
      add(window, name);
    });
  });
}

/***/ }),
/* 41 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = throttle;
exports.throttleFunction = throttleFunction;

var _ = __webpack_require__(1);

function throttle(wait, source) {
  return (0, _.Observable)(function (add) {
    var throttledAdd = throttleFunction(wait, add);
    var unsubscribe = source.subscribe(throttledAdd);

    return function () {
      unsubscribe();
      throttledAdd.cancel();
    };
  });
}

function throttleFunction(wait, func) {
  var lastCallTime = void 0;
  var timeout = void 0;
  var args = void 0;

  var throttled = function throttled() {
    // Always use the latest arguments, even in an already scheduled call
    args = arguments;

    // A throttled call is already scheduled, noop
    if (timeout !== undefined) return;

    var delta = lastCallTime ? wait - Date.now() + lastCallTime : 0;

    timeout = setTimeout(function () {
      timeout = undefined;
      lastCallTime = Date.now();
      func.apply(null, args);
    }, delta);
  };

  throttled.cancel = function () {
    return clearTimeout(timeout);
  };
  return throttled;
}

/***/ }),
/* 42 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = Store;

var _observable = __webpack_require__(1);

var _message = __webpack_require__(13);

var _message2 = _interopRequireDefault(_message);

var _log = __webpack_require__(5);

var _log2 = _interopRequireDefault(_log);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/*
 * A Store is an Observable that is guaranteed to have an initial value
 * and can be modified from the outside by type-safe messages.
 */
function Store(initialState, registerHandlers) {
  var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : empty;

  var store = {};

  // Message handlers for the on(message) syntax
  var handlers = {};
  // unsubscribe functions created by the on(observable) syntax
  var subscriptions = [];
  // List of the messages that are listened to in order to create observables
  var listened = {};
  // Dispatching queue, when a message handler sends additional messages
  var queue = [];
  // Stack size while receiving a message
  var stack = 0;

  var receiving = false;

  var name = options.name;
  var shouldLog = options.log !== undefined ? options.log : _log2.default.message === true;
  var storeName = name || (registerHandlers.name ? registerHandlers.name + ' store' : 'Store');

  var msg = {
    send: function send(m) {
      return store.send(m);
    }, // Late binding as store.send is not yet defined
    listen: function listen(message) {
      var observable = (0, _observable.Observable)().named(message._name);
      var obss = listened[message._id];
      if (!obss) obss = listened[message._id] = [];
      obss.push(observable);
      return observable;
    }
  };

  function on(src, fn) {
    if (src._isMessage) {
      handlers[src._id] = fn;
    } else {
      var unsubscribe = src.subscribe(function (val, name) {
        receive(name, fn, val);
      });

      subscriptions.push(unsubscribe);
    }
  }

  function receive(sourceName, handler, arg) {
    queue.push({ sourceName: sourceName, handler: handler, arg: arg });

    if (stack >= 10) throw new Error('Infinite loop while handling ' + sourceName);
    if (receiving) return;

    receiving = true;

    var state = store.state();

    try {
      while (queue.length) {
        var _queue$shift = queue.shift(),
            _sourceName = _queue$shift.sourceName,
            _handler = _queue$shift.handler,
            _arg = _queue$shift.arg;

        stack++;

        if (shouldLog) console.log('%c' + _sourceName + ' %creceived by %c' + storeName, 'color: #B31EA6', 'color: black', 'font-weight: bold', 'with', _arg);

        var result = _handler(state, _arg);
        if (result !== undefined) state = result;
      }
    } finally {
      receiving = false;
      queue.length = 0;
      stack = 0;
    }

    if (state !== store.state() && state !== undefined) store.state(state);
  }

  store.state = (0, _observable.Observable)()(initialState).named(storeName + '.state');
  // Eagerly activate (hot)
  store.state.subscribe(function (x) {
    return x;
  });

  registerHandlers(on, msg);

  store.send = function (message) {
    var _id = message._id,
        _name = message._name,
        payload = message.payload;

    var handler = handlers[_id];
    var handled = false;

    if (handler) {
      receive(_name, handler, payload);
      handled = true;
    }

    var obss = listened[_id];

    if (obss) {
      obss.forEach(function (obs) {
        return obs(payload);
      });
      handled = true;
    }

    if (handled) return;

    var unhandled = handlers[_message2.default.unhandled._id];

    if (unhandled) {
      receive(_message2.default.unhandled._name, unhandled, message);
      return;
    }

    console.warn('Unhandled message "' + _name + '" at %c' + storeName, 'font-weight: bold');
  };

  store.destroy = function () {
    store.state._subscribers.length = 0;
    store.state.subscribe = noop;
    store.send = noop;
    subscriptions.forEach(function (fn) {
      return fn();
    });
    subscriptions.length = 0;
  };

  return store;
}

var empty = {};
function noop() {}

/***/ }),
/* 43 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var NamespaceURIs = {
    "xlink": "http://www.w3.org/1999/xlink"
};
var booleanAttrs = ["allowfullscreen", "async", "autofocus", "autoplay", "checked", "compact", "controls", "declare",
    "default", "defaultchecked", "defaultmuted", "defaultselected", "defer", "disabled", "draggable",
    "enabled", "formnovalidate", "hidden", "indeterminate", "inert", "ismap", "itemscope", "loop", "multiple",
    "muted", "nohref", "noresize", "noshade", "novalidate", "nowrap", "open", "pauseonexit", "readonly",
    "required", "reversed", "scoped", "seamless", "selected", "sortable", "spellcheck", "translate",
    "truespeed", "typemustmatch", "visible"];
var booleanAttrsDict = Object.create(null);
for (var i = 0, len = booleanAttrs.length; i < len; i++) {
    booleanAttrsDict[booleanAttrs[i]] = true;
}
function updateAttrs(oldVnode, vnode) {
    var key, elm = vnode.elm, oldAttrs = oldVnode.data.attrs, attrs = vnode.data.attrs, namespaceSplit;
    if (!oldAttrs && !attrs)
        return;
    if (oldAttrs === attrs)
        return;
    oldAttrs = oldAttrs || {};
    attrs = attrs || {};
    // update modified attributes, add new attributes
    for (key in attrs) {
        var cur = attrs[key];
        var old = oldAttrs[key];
        if (old !== cur) {
            if (booleanAttrsDict[key]) {
                if (cur) {
                    elm.setAttribute(key, "");
                }
                else {
                    elm.removeAttribute(key);
                }
            }
            else {
                namespaceSplit = key.split(":");
                if (namespaceSplit.length > 1 && NamespaceURIs.hasOwnProperty(namespaceSplit[0])) {
                    elm.setAttributeNS(NamespaceURIs[namespaceSplit[0]], key, cur);
                }
                else {
                    elm.setAttribute(key, cur);
                }
            }
        }
    }
    // remove removed attributes
    // use `in` operator since the previous `for` iteration uses it (.i.e. add even attributes with undefined value)
    // the other option is to remove all attributes with value == undefined
    for (key in oldAttrs) {
        if (!(key in attrs)) {
            elm.removeAttribute(key);
        }
    }
}
exports.attributesModule = { create: updateAttrs, update: updateAttrs };
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = exports.attributesModule;
//# sourceMappingURL=attributes.js.map

/***/ }),
/* 44 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function updateClass(oldVnode, vnode) {
    var cur, name, elm = vnode.elm, oldClass = oldVnode.data.class, klass = vnode.data.class;
    if (!oldClass && !klass)
        return;
    if (oldClass === klass)
        return;
    oldClass = oldClass || {};
    klass = klass || {};
    for (name in oldClass) {
        if (!klass[name]) {
            elm.classList.remove(name);
        }
    }
    for (name in klass) {
        cur = klass[name];
        if (cur !== oldClass[name]) {
            elm.classList[cur ? 'add' : 'remove'](name);
        }
    }
}
exports.classModule = { create: updateClass, update: updateClass };
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = exports.classModule;
//# sourceMappingURL=class.js.map

/***/ }),
/* 45 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function updateProps(oldVnode, vnode) {
    var key, cur, old, elm = vnode.elm, oldProps = oldVnode.data.props, props = vnode.data.props;
    if (!oldProps && !props)
        return;
    if (oldProps === props)
        return;
    oldProps = oldProps || {};
    props = props || {};
    for (key in oldProps) {
        if (!props[key]) {
            delete elm[key];
        }
    }
    for (key in props) {
        cur = props[key];
        old = oldProps[key];
        if (old !== cur && (key !== 'value' || elm[key] !== cur)) {
            elm[key] = cur;
        }
    }
}
exports.propsModule = { create: updateProps, update: updateProps };
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = exports.propsModule;
//# sourceMappingURL=props.js.map

/***/ }),
/* 46 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var raf = (typeof window !== 'undefined' && window.requestAnimationFrame) || setTimeout;
var nextFrame = function (fn) { raf(function () { raf(fn); }); };
function setNextFrame(obj, prop, val) {
    nextFrame(function () { obj[prop] = val; });
}
function updateStyle(oldVnode, vnode) {
    var cur, name, elm = vnode.elm, oldStyle = oldVnode.data.style, style = vnode.data.style;
    if (!oldStyle && !style)
        return;
    if (oldStyle === style)
        return;
    oldStyle = oldStyle || {};
    style = style || {};
    var oldHasDel = 'delayed' in oldStyle;
    for (name in oldStyle) {
        if (!style[name]) {
            if (name[0] === '-' && name[1] === '-') {
                elm.style.removeProperty(name);
            }
            else {
                elm.style[name] = '';
            }
        }
    }
    for (name in style) {
        cur = style[name];
        if (name === 'delayed') {
            for (name in style.delayed) {
                cur = style.delayed[name];
                if (!oldHasDel || cur !== oldStyle.delayed[name]) {
                    setNextFrame(elm.style, name, cur);
                }
            }
        }
        else if (name !== 'remove' && cur !== oldStyle[name]) {
            if (name[0] === '-' && name[1] === '-') {
                elm.style.setProperty(name, cur);
            }
            else {
                elm.style[name] = cur;
            }
        }
    }
}
function applyDestroyStyle(vnode) {
    var style, name, elm = vnode.elm, s = vnode.data.style;
    if (!s || !(style = s.destroy))
        return;
    for (name in style) {
        elm.style[name] = style[name];
    }
}
function applyRemoveStyle(vnode, rm) {
    var s = vnode.data.style;
    if (!s || !s.remove) {
        rm();
        return;
    }
    var name, elm = vnode.elm, i = 0, compStyle, style = s.remove, amount = 0, applied = [];
    for (name in style) {
        applied.push(name);
        elm.style[name] = style[name];
    }
    compStyle = getComputedStyle(elm);
    var props = compStyle['transition-property'].split(', ');
    for (; i < props.length; ++i) {
        if (applied.indexOf(props[i]) !== -1)
            amount++;
    }
    elm.addEventListener('transitionend', function (ev) {
        if (ev.target === elm)
            --amount;
        if (amount === 0)
            rm();
    });
}
exports.styleModule = {
    create: updateStyle,
    update: updateStyle,
    destroy: applyDestroyStyle,
    remove: applyRemoveStyle
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = exports.styleModule;
//# sourceMappingURL=style.js.map

/***/ }),
/* 47 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var vnode_1 = __webpack_require__(6);
var is = __webpack_require__(17);
var htmldomapi_1 = __webpack_require__(16);
function isUndef(s) { return s === undefined; }
function isDef(s) { return s !== undefined; }
var emptyNode = vnode_1.default('', {}, [], undefined, undefined);
function sameVnode(vnode1, vnode2) {
    return vnode1.key === vnode2.key && vnode1.sel === vnode2.sel;
}
function isVnode(vnode) {
    return vnode.sel !== undefined;
}
function createKeyToOldIdx(children, beginIdx, endIdx) {
    var i, map = {}, key, ch;
    for (i = beginIdx; i <= endIdx; ++i) {
        ch = children[i];
        if (ch != null) {
            key = ch.key;
            if (key !== undefined)
                map[key] = i;
        }
    }
    return map;
}
var hooks = ['create', 'update', 'remove', 'destroy', 'pre', 'post'];
var h_1 = __webpack_require__(4);
exports.h = h_1.h;
var thunk_1 = __webpack_require__(48);
exports.thunk = thunk_1.thunk;
function init(modules, domApi) {
    var i, j, cbs = {};
    var api = domApi !== undefined ? domApi : htmldomapi_1.default;
    for (i = 0; i < hooks.length; ++i) {
        cbs[hooks[i]] = [];
        for (j = 0; j < modules.length; ++j) {
            var hook = modules[j][hooks[i]];
            if (hook !== undefined) {
                cbs[hooks[i]].push(hook);
            }
        }
    }
    function emptyNodeAt(elm) {
        var id = elm.id ? '#' + elm.id : '';
        var c = elm.className ? '.' + elm.className.split(' ').join('.') : '';
        return vnode_1.default(api.tagName(elm).toLowerCase() + id + c, {}, [], undefined, elm);
    }
    function createRmCb(childElm, listeners) {
        return function rmCb() {
            if (--listeners === 0) {
                var parent_1 = api.parentNode(childElm);
                api.removeChild(parent_1, childElm);
            }
        };
    }
    function createElm(vnode, insertedVnodeQueue) {
        var i, data = vnode.data;
        if (data !== undefined) {
            if (isDef(i = data.hook) && isDef(i = i.init)) {
                i(vnode);
                data = vnode.data;
            }
        }
        var children = vnode.children, sel = vnode.sel;
        if (sel === '!') {
            if (isUndef(vnode.text)) {
                vnode.text = '';
            }
            vnode.elm = api.createComment(vnode.text);
        }
        else if (sel !== undefined) {
            // Parse selector
            var hashIdx = sel.indexOf('#');
            var dotIdx = sel.indexOf('.', hashIdx);
            var hash = hashIdx > 0 ? hashIdx : sel.length;
            var dot = dotIdx > 0 ? dotIdx : sel.length;
            var tag = hashIdx !== -1 || dotIdx !== -1 ? sel.slice(0, Math.min(hash, dot)) : sel;
            var elm = vnode.elm = isDef(data) && isDef(i = data.ns) ? api.createElementNS(i, tag)
                : api.createElement(tag);
            if (hash < dot)
                elm.id = sel.slice(hash + 1, dot);
            if (dotIdx > 0)
                elm.className = sel.slice(dot + 1).replace(/\./g, ' ');
            for (i = 0; i < cbs.create.length; ++i)
                cbs.create[i](emptyNode, vnode);
            if (is.array(children)) {
                for (i = 0; i < children.length; ++i) {
                    var ch = children[i];
                    if (ch != null) {
                        api.appendChild(elm, createElm(ch, insertedVnodeQueue));
                    }
                }
            }
            else if (is.primitive(vnode.text)) {
                api.appendChild(elm, api.createTextNode(vnode.text));
            }
            i = vnode.data.hook; // Reuse variable
            if (isDef(i)) {
                if (i.create)
                    i.create(emptyNode, vnode);
                if (i.insert)
                    insertedVnodeQueue.push(vnode);
            }
        }
        else {
            vnode.elm = api.createTextNode(vnode.text);
        }
        return vnode.elm;
    }
    function addVnodes(parentElm, before, vnodes, startIdx, endIdx, insertedVnodeQueue) {
        for (; startIdx <= endIdx; ++startIdx) {
            var ch = vnodes[startIdx];
            if (ch != null) {
                api.insertBefore(parentElm, createElm(ch, insertedVnodeQueue), before);
            }
        }
    }
    function invokeDestroyHook(vnode) {
        var i, j, data = vnode.data;
        if (data !== undefined) {
            if (isDef(i = data.hook) && isDef(i = i.destroy))
                i(vnode);
            for (i = 0; i < cbs.destroy.length; ++i)
                cbs.destroy[i](vnode);
            if (vnode.children !== undefined) {
                for (j = 0; j < vnode.children.length; ++j) {
                    i = vnode.children[j];
                    if (i != null && typeof i !== "string") {
                        invokeDestroyHook(i);
                    }
                }
            }
        }
    }
    function removeVnodes(parentElm, vnodes, startIdx, endIdx) {
        for (; startIdx <= endIdx; ++startIdx) {
            var i_1 = void 0, listeners = void 0, rm = void 0, ch = vnodes[startIdx];
            if (ch != null) {
                if (isDef(ch.sel)) {
                    invokeDestroyHook(ch);
                    listeners = cbs.remove.length + 1;
                    rm = createRmCb(ch.elm, listeners);
                    for (i_1 = 0; i_1 < cbs.remove.length; ++i_1)
                        cbs.remove[i_1](ch, rm);
                    if (isDef(i_1 = ch.data) && isDef(i_1 = i_1.hook) && isDef(i_1 = i_1.remove)) {
                        i_1(ch, rm);
                    }
                    else {
                        rm();
                    }
                }
                else {
                    api.removeChild(parentElm, ch.elm);
                }
            }
        }
    }
    function updateChildren(parentElm, oldCh, newCh, insertedVnodeQueue) {
        var oldStartIdx = 0, newStartIdx = 0;
        var oldEndIdx = oldCh.length - 1;
        var oldStartVnode = oldCh[0];
        var oldEndVnode = oldCh[oldEndIdx];
        var newEndIdx = newCh.length - 1;
        var newStartVnode = newCh[0];
        var newEndVnode = newCh[newEndIdx];
        var oldKeyToIdx;
        var idxInOld;
        var elmToMove;
        var before;
        while (oldStartIdx <= oldEndIdx && newStartIdx <= newEndIdx) {
            if (oldStartVnode == null) {
                oldStartVnode = oldCh[++oldStartIdx]; // Vnode might have been moved left
            }
            else if (oldEndVnode == null) {
                oldEndVnode = oldCh[--oldEndIdx];
            }
            else if (newStartVnode == null) {
                newStartVnode = newCh[++newStartIdx];
            }
            else if (newEndVnode == null) {
                newEndVnode = newCh[--newEndIdx];
            }
            else if (sameVnode(oldStartVnode, newStartVnode)) {
                patchVnode(oldStartVnode, newStartVnode, insertedVnodeQueue);
                oldStartVnode = oldCh[++oldStartIdx];
                newStartVnode = newCh[++newStartIdx];
            }
            else if (sameVnode(oldEndVnode, newEndVnode)) {
                patchVnode(oldEndVnode, newEndVnode, insertedVnodeQueue);
                oldEndVnode = oldCh[--oldEndIdx];
                newEndVnode = newCh[--newEndIdx];
            }
            else if (sameVnode(oldStartVnode, newEndVnode)) {
                patchVnode(oldStartVnode, newEndVnode, insertedVnodeQueue);
                api.insertBefore(parentElm, oldStartVnode.elm, api.nextSibling(oldEndVnode.elm));
                oldStartVnode = oldCh[++oldStartIdx];
                newEndVnode = newCh[--newEndIdx];
            }
            else if (sameVnode(oldEndVnode, newStartVnode)) {
                patchVnode(oldEndVnode, newStartVnode, insertedVnodeQueue);
                api.insertBefore(parentElm, oldEndVnode.elm, oldStartVnode.elm);
                oldEndVnode = oldCh[--oldEndIdx];
                newStartVnode = newCh[++newStartIdx];
            }
            else {
                if (oldKeyToIdx === undefined) {
                    oldKeyToIdx = createKeyToOldIdx(oldCh, oldStartIdx, oldEndIdx);
                }
                idxInOld = oldKeyToIdx[newStartVnode.key];
                if (isUndef(idxInOld)) {
                    api.insertBefore(parentElm, createElm(newStartVnode, insertedVnodeQueue), oldStartVnode.elm);
                    newStartVnode = newCh[++newStartIdx];
                }
                else {
                    elmToMove = oldCh[idxInOld];
                    if (elmToMove.sel !== newStartVnode.sel) {
                        api.insertBefore(parentElm, createElm(newStartVnode, insertedVnodeQueue), oldStartVnode.elm);
                    }
                    else {
                        patchVnode(elmToMove, newStartVnode, insertedVnodeQueue);
                        oldCh[idxInOld] = undefined;
                        api.insertBefore(parentElm, elmToMove.elm, oldStartVnode.elm);
                    }
                    newStartVnode = newCh[++newStartIdx];
                }
            }
        }
        if (oldStartIdx > oldEndIdx) {
            before = newCh[newEndIdx + 1] == null ? null : newCh[newEndIdx + 1].elm;
            addVnodes(parentElm, before, newCh, newStartIdx, newEndIdx, insertedVnodeQueue);
        }
        else if (newStartIdx > newEndIdx) {
            removeVnodes(parentElm, oldCh, oldStartIdx, oldEndIdx);
        }
    }
    function patchVnode(oldVnode, vnode, insertedVnodeQueue) {
        var i, hook;
        if (isDef(i = vnode.data) && isDef(hook = i.hook) && isDef(i = hook.prepatch)) {
            i(oldVnode, vnode);
        }
        var elm = vnode.elm = oldVnode.elm;
        var oldCh = oldVnode.children;
        var ch = vnode.children;
        if (oldVnode === vnode)
            return;
        if (vnode.data !== undefined) {
            for (i = 0; i < cbs.update.length; ++i)
                cbs.update[i](oldVnode, vnode);
            i = vnode.data.hook;
            if (isDef(i) && isDef(i = i.update))
                i(oldVnode, vnode);
        }
        if (isUndef(vnode.text)) {
            if (isDef(oldCh) && isDef(ch)) {
                if (oldCh !== ch)
                    updateChildren(elm, oldCh, ch, insertedVnodeQueue);
            }
            else if (isDef(ch)) {
                if (isDef(oldVnode.text))
                    api.setTextContent(elm, '');
                addVnodes(elm, null, ch, 0, ch.length - 1, insertedVnodeQueue);
            }
            else if (isDef(oldCh)) {
                removeVnodes(elm, oldCh, 0, oldCh.length - 1);
            }
            else if (isDef(oldVnode.text)) {
                api.setTextContent(elm, '');
            }
        }
        else if (oldVnode.text !== vnode.text) {
            api.setTextContent(elm, vnode.text);
        }
        if (isDef(hook) && isDef(i = hook.postpatch)) {
            i(oldVnode, vnode);
        }
    }
    return function patch(oldVnode, vnode) {
        var i, elm, parent;
        var insertedVnodeQueue = [];
        for (i = 0; i < cbs.pre.length; ++i)
            cbs.pre[i]();
        if (!isVnode(oldVnode)) {
            oldVnode = emptyNodeAt(oldVnode);
        }
        if (sameVnode(oldVnode, vnode)) {
            patchVnode(oldVnode, vnode, insertedVnodeQueue);
        }
        else {
            elm = oldVnode.elm;
            parent = api.parentNode(elm);
            createElm(vnode, insertedVnodeQueue);
            if (parent !== null) {
                api.insertBefore(parent, vnode.elm, api.nextSibling(elm));
                removeVnodes(parent, [oldVnode], 0, 0);
            }
        }
        for (i = 0; i < insertedVnodeQueue.length; ++i) {
            insertedVnodeQueue[i].data.hook.insert(insertedVnodeQueue[i]);
        }
        for (i = 0; i < cbs.post.length; ++i)
            cbs.post[i]();
        return vnode;
    };
}
exports.init = init;
//# sourceMappingURL=snabbdom.js.map

/***/ }),
/* 48 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var h_1 = __webpack_require__(4);
function copyToThunk(vnode, thunk) {
    thunk.elm = vnode.elm;
    vnode.data.fn = thunk.data.fn;
    vnode.data.args = thunk.data.args;
    thunk.data = vnode.data;
    thunk.children = vnode.children;
    thunk.text = vnode.text;
    thunk.elm = vnode.elm;
}
function init(thunk) {
    var cur = thunk.data;
    var vnode = cur.fn.apply(undefined, cur.args);
    copyToThunk(vnode, thunk);
}
function prepatch(oldVnode, thunk) {
    var i, old = oldVnode.data, cur = thunk.data;
    var oldArgs = old.args, args = cur.args;
    if (old.fn !== cur.fn || oldArgs.length !== args.length) {
        copyToThunk(cur.fn.apply(undefined, args), thunk);
    }
    for (i = 0; i < args.length; ++i) {
        if (oldArgs[i] !== args[i]) {
            copyToThunk(cur.fn.apply(undefined, args), thunk);
            return;
        }
    }
    copyToThunk(oldVnode, thunk);
}
exports.thunk = function thunk(sel, key, fn, args) {
    if (args === undefined) {
        args = fn;
        fn = key;
        key = undefined;
    }
    return h_1.h(sel, {
        key: key,
        hook: { init: init, prepatch: prepatch },
        fn: fn,
        args: args
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = exports.thunk;
//# sourceMappingURL=thunk.js.map

/***/ }),
/* 49 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var vnode_1 = __webpack_require__(6);
var htmldomapi_1 = __webpack_require__(16);
function toVNode(node, domApi) {
    var api = domApi !== undefined ? domApi : htmldomapi_1.default;
    var text;
    if (api.isElement(node)) {
        var id = node.id ? '#' + node.id : '';
        var cn = node.getAttribute('class');
        var c = cn ? '.' + cn.split(' ').join('.') : '';
        var sel = api.tagName(node).toLowerCase() + id + c;
        var attrs = {};
        var children = [];
        var name_1;
        var i = void 0, n = void 0;
        var elmAttrs = node.attributes;
        var elmChildren = node.childNodes;
        for (i = 0, n = elmAttrs.length; i < n; i++) {
            name_1 = elmAttrs[i].nodeName;
            if (name_1 !== 'id' && name_1 !== 'class') {
                attrs[name_1] = elmAttrs[i].nodeValue;
            }
        }
        for (i = 0, n = elmChildren.length; i < n; i++) {
            children.push(toVNode(elmChildren[i]));
        }
        return vnode_1.default(sel, { attrs: attrs }, children, undefined, node);
    }
    else if (api.isText(node)) {
        text = api.getTextContent(node);
        return vnode_1.default(undefined, undefined, undefined, text, node);
    }
    else if (api.isComment(node)) {
        text = api.getTextContent(node);
        return vnode_1.default('!', undefined, undefined, text, undefined);
    }
    else {
        return vnode_1.default('', {}, [], undefined, undefined);
    }
}
exports.toVNode = toVNode;
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = toVNode;
//# sourceMappingURL=tovnode.js.map

/***/ }),
/* 50 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

exports.__esModule = true;
__webpack_require__(91);
//--------------------------------------
//  Array
//--------------------------------------
__webpack_require__(51);
__webpack_require__(52);
__webpack_require__(53);
__webpack_require__(54);
__webpack_require__(55);
__webpack_require__(56);
__webpack_require__(57);
__webpack_require__(58);
__webpack_require__(59);
__webpack_require__(60);
__webpack_require__(61);
__webpack_require__(62);
__webpack_require__(63);
__webpack_require__(64);
__webpack_require__(65);
__webpack_require__(66);
__webpack_require__(67);
__webpack_require__(68);
__webpack_require__(69);
__webpack_require__(70);
__webpack_require__(71);
__webpack_require__(72);
__webpack_require__(73);
__webpack_require__(74);
__webpack_require__(75);
__webpack_require__(76);
__webpack_require__(77);
__webpack_require__(78);
__webpack_require__(79);
__webpack_require__(80);
__webpack_require__(81);
//--------------------------------------
//  Object
//--------------------------------------
__webpack_require__(82);
__webpack_require__(83);
__webpack_require__(84);
__webpack_require__(85);
__webpack_require__(86);
__webpack_require__(87);
__webpack_require__(88);
__webpack_require__(89);
__webpack_require__(90);


/***/ }),
/* 51 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

exports.__esModule = true;
var _1 = __webpack_require__(0);
/**
 * Appends one item at the end of the Array.
 */
function append(item) {
    return new _1.ArrayOps(this.value().concat(item));
}
exports.append = append;
_1.ArrayOps.prototype.append = append;


/***/ }),
/* 52 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

exports.__esModule = true;
var _1 = __webpack_require__(0);
/**
 * Appends an Array of items at the end of the Array.
 */
function appendAll(items) {
    return new _1.ArrayOps(this.value().concat(items));
}
exports.appendAll = appendAll;
_1.ArrayOps.prototype.appendAll = appendAll;


/***/ }),
/* 53 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

exports.__esModule = true;
var _1 = __webpack_require__(0);
/**
 * Filters all the falsy elements out of this Array.
 * All occurences of false, null, undefined, 0, "" will be removed.
 */
function compact() {
    return this.filter(function (x) { return !!x; });
}
exports.compact = compact;
_1.ArrayOps.prototype.compact = compact;


/***/ }),
/* 54 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

exports.__esModule = true;
var _1 = __webpack_require__(0);
/**
 * Counts the items satisfying a predicate.
 */
function count(predicate) {
    var arr = this.value(), result = 0;
    for (var i = 0; i < arr.length; i++) {
        if (predicate(arr[i], i))
            result++;
    }
    return new _1.NumberOps(result);
}
exports.count = count;
_1.ArrayOps.prototype.count = count;


/***/ }),
/* 55 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

exports.__esModule = true;
var _1 = __webpack_require__(0);
/**
 * Creates an array without any duplicate item.
 * If a key function is passed, items will be compared based on the result of that function;
 * if not, they will be compared using strict equality.
 */
function distinct(getKey) {
    var arr = this.value(), result = [];
    var keySet;
    var refList;
    if (getKey)
        keySet = {};
    else
        refList = [];
    for (var i = 0; i < arr.length; i++) {
        var item = arr[i];
        if (getKey) {
            var key = getKey(item, i);
            if (!keySet[key]) {
                keySet[key] = 1;
                result.push(item);
            }
        }
        else {
            if (refList.indexOf(item) === -1) {
                refList.push(item);
                result.push(item);
            }
        }
    }
    return new _1.ArrayOps(result);
}
exports.distinct = distinct;
_1.ArrayOps.prototype.distinct = distinct;


/***/ }),
/* 56 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

exports.__esModule = true;
var _1 = __webpack_require__(0);
/**
 * Drops the first 'count' items from this Array.
 */
function drop(count) {
    return new _1.ArrayOps(this.value().slice(count));
}
exports.drop = drop;
_1.ArrayOps.prototype.drop = drop;


/***/ }),
/* 57 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

exports.__esModule = true;
var _1 = __webpack_require__(0);
/**
 * Drops the last 'count' items from this Array.
 */
function dropRight(count) {
    return new _1.ArrayOps(this.value().slice(0, -count));
}
exports.dropRight = dropRight;
_1.ArrayOps.prototype.dropRight = dropRight;


/***/ }),
/* 58 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

exports.__esModule = true;
var _1 = __webpack_require__(0);
/**
 * Returns whether all items satisfies the predicate.
 */
function every(predicate) {
    var arr = this.value();
    for (var i = 0; i < arr.length; i++) {
        if (!predicate(arr[i], i))
            return new _1.BoolOps(false);
    }
    return new _1.BoolOps(true);
}
exports.every = every;
_1.ArrayOps.prototype.every = every;


/***/ }),
/* 59 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

exports.__esModule = true;
var _1 = __webpack_require__(0);
/**
 * Filters this array by aplying a predicate to all items.
 */
function filter(predicate) {
    var arr = this.value(), result = [];
    for (var i = 0; i < arr.length; i++) {
        var item = arr[i];
        if (predicate(item, i))
            result.push(item);
    }
    return new _1.ArrayOps(result);
}
exports.filter = filter;
_1.ArrayOps.prototype.filter = filter;


/***/ }),
/* 60 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

exports.__esModule = true;
var option_ts_1 = __webpack_require__(2);
var _1 = __webpack_require__(0);
/**
 * Finds the first item in this Array satisfying a predicate.
 */
function find(predicate) {
    var arr = this.value();
    for (var i = 0; i < arr.length; i++) {
        var item = arr[i];
        if (predicate(item, i))
            return option_ts_1.Option(item);
    }
    return option_ts_1.None;
}
exports.find = find;
_1.ArrayOps.prototype.find = find;


/***/ }),
/* 61 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

exports.__esModule = true;
var option_ts_1 = __webpack_require__(2);
var _1 = __webpack_require__(0);
/**
 * Finds the first item index in this Array satisfying a predicate.
 */
function findIndex(predicate) {
    var arr = this.value();
    for (var i = 0; i < arr.length; i++) {
        if (predicate(arr[i], i))
            return option_ts_1.Option(i);
    }
    return option_ts_1.None;
}
exports.findIndex = findIndex;
_1.ArrayOps.prototype.findIndex = findIndex;


/***/ }),
/* 62 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

exports.__esModule = true;
var option_ts_1 = __webpack_require__(2);
var _1 = __webpack_require__(0);
/**
 * Returns the first item of this Array, as an Option.
 */
function first() {
    return option_ts_1.Option(this.value()[0]);
}
exports.first = first;
_1.ArrayOps.prototype.first = first;


/***/ }),
/* 63 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

exports.__esModule = true;
var option_ts_1 = __webpack_require__(2);
var _1 = __webpack_require__(0);
/**
 * Maps this Array to an Array of Array | Option | Wrapper using a mapper function then flattens it.
 */
function flatMap(fun) {
    var arr = this.value(), result = [];
    for (var i = 0; i < arr.length; i++) {
        var item = fun(arr[i], i);
        if (option_ts_1.Option.isOption(item))
            item.isDefined() && result.push(item.get());
        else
            result.push.apply(result, _1.getValue(item));
    }
    return new _1.ArrayOps(result);
}
exports.flatMap = flatMap;
_1.ArrayOps.prototype.flatMap = flatMap;


/***/ }),
/* 64 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

exports.__esModule = true;
var option_ts_1 = __webpack_require__(2);
var _1 = __webpack_require__(0);
/**
 * Flattens this Array of Arrays/Options.
 */
function flatten() {
    var arr = this.value(), result = [];
    for (var i = 0; i < arr.length; i++) {
        var item = arr[i];
        if (option_ts_1.Option.isOption(item))
            item.isDefined() && result.push(item.get());
        else
            result.push.apply(result, item);
    }
    return new _1.ArrayOps(result);
}
exports.flatten = flatten;
_1.ArrayOps.prototype.flatten = flatten;


/***/ }),
/* 65 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

exports.__esModule = true;
var _1 = __webpack_require__(0);
/**
 * Folds this Array into a single value, using a starting value.
 */
function fold(startValue, func) {
    var arr = this.value(), result = startValue;
    for (var i = 0; i < arr.length; i++) {
        result = func(result, arr[i], i);
    }
    return _1["default"](result);
}
exports.fold = fold;
_1.ArrayOps.prototype.fold = fold;


/***/ }),
/* 66 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

exports.__esModule = true;
var _1 = __webpack_require__(0);
/**
 * Folds this Array into a single value, using a starting value, from the right.
 */
function foldRight(startValue, func) {
    var arr = this.value(), result = startValue, i = arr.length;
    while (i--) {
        result = func(result, arr[i], i);
    }
    return _1["default"](result);
}
exports.foldRight = foldRight;
_1.ArrayOps.prototype.foldRight = foldRight;


/***/ }),
/* 67 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

exports.__esModule = true;
var option_ts_1 = __webpack_require__(2);
var _1 = __webpack_require__(0);
/**
 * Returns the item found at the provided index, as an Option.
 */
function get(index) {
    return option_ts_1.Option(this.value()[index]);
}
exports.get = get;
_1.ArrayOps.prototype.get = get;


/***/ }),
/* 68 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

exports.__esModule = true;
var _1 = __webpack_require__(0);
/**
* Creates an object composed of keys generated from the results of running each element through a discriminator function.
* The corresponding value of each key is an array of the elements responsible for generating the key.
*/
function groupBy(discriminator) {
    var arr = this.value(), groups = {};
    for (var i = 0; i < arr.length; i++) {
        var item = arr[i];
        var key = discriminator(item, i);
        if (!groups[key])
            groups[key] = [];
        groups[key].push(item);
    }
    return new _1.ObjectOps(groups);
}
exports.groupBy = groupBy;
_1.ArrayOps.prototype.groupBy = groupBy;


/***/ }),
/* 69 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

exports.__esModule = true;
var _1 = __webpack_require__(0);
/**
 * Insert an item at a specified index.
 */
function insert(index, item) {
    var result = this.value().slice();
    result.splice(index, 0, item);
    return new _1.ArrayOps(result);
}
exports.insert = insert;
_1.ArrayOps.prototype.insert = insert;


/***/ }),
/* 70 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

exports.__esModule = true;
var _1 = __webpack_require__(0);
/**
 * Insert an Array of items at a specified index.
 */
function insertAll(index, items) {
    var result = this.value().slice();
    result.splice.apply(result, [index, 0].concat(items));
    return new _1.ArrayOps(result);
}
exports.insertAll = insertAll;
_1.ArrayOps.prototype.insertAll = insertAll;


/***/ }),
/* 71 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

exports.__esModule = true;
var _1 = __webpack_require__(0);
/**
 * Joins the items into a string, using a separator.
 */
function join(separator) {
    if (separator === void 0) { separator = ','; }
    return new _1.StringOps(this.value().join(separator));
}
exports.join = join;
_1.ArrayOps.prototype.join = join;


/***/ }),
/* 72 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

exports.__esModule = true;
var option_ts_1 = __webpack_require__(2);
var _1 = __webpack_require__(0);
/**
 * Returns the last item of this Array, as an Option.
 */
function last() {
    var arr = this.value();
    return option_ts_1.Option(arr[arr.length - 1]);
}
exports.last = last;
_1.ArrayOps.prototype.last = last;


/***/ }),
/* 73 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

exports.__esModule = true;
var _1 = __webpack_require__(0);
/**
 * Maps this Array using a mapper function.
 */
function map(fun) {
    var arr = this.value(), result = [];
    for (var i = 0; i < arr.length; i++) {
        result[i] = _1.getValue(fun(arr[i], i));
    }
    return new _1.ArrayOps(result);
}
exports.map = map;
_1.ArrayOps.prototype.map = map;


/***/ }),
/* 74 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

exports.__esModule = true;
var _1 = __webpack_require__(0);
/**
 * Removes the item found at the specified index.
 */
function removeAt(index) {
    var result = this.value().slice();
    result.splice(index, 1);
    return new _1.ArrayOps(result);
}
exports.removeAt = removeAt;
_1.ArrayOps.prototype.removeAt = removeAt;


/***/ }),
/* 75 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

exports.__esModule = true;
var _1 = __webpack_require__(0);
/**
 * Reverses the Array.
 */
function reverse() {
    return new _1.ArrayOps(this.value().slice().reverse());
}
exports.reverse = reverse;
_1.ArrayOps.prototype.reverse = reverse;


/***/ }),
/* 76 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

exports.__esModule = true;
var _1 = __webpack_require__(0);
/**
 * Returns whether at least one item satisfies the predicate.
 */
function some(predicate) {
    var arr = this.value();
    for (var i = 0; i < arr.length; i++) {
        if (predicate(arr[i], i))
            return new _1.BoolOps(true);
    }
    return new _1.BoolOps(false);
}
exports.some = some;
_1.ArrayOps.prototype.some = some;


/***/ }),
/* 77 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

exports.__esModule = true;
var _1 = __webpack_require__(0);
/**
* Sorts the Array. The sort is stable.
* If you want to sort on field "a" then on field "b", just chain a sort on "b" then a sort on "a".
*
* An option Object can be passed to modify the sort behavior.
* The supported options are:
*
* ignoreCase: Assuming strings are going to be sorted, ignore their cases. Defaults to false.
*
* localCompare: Assuming strings are going to be sorted,
*   handle locale-specific characters correctly at the cost of reduced sort speed. Defaults to false.
*
* by: Assuming objects are being sorted, a function either pointing to or computing the value
*   that should be used for the sort. Defaults to undefined.
*
* reverse: Reverses the sort. Defaults to false.
*/
function sort(options) {
    var arr = this.value();
    var o = options || {};
    var mapped = [];
    var missingData = [];
    var result = [];
    var sortFunction;
    for (var i = 0, length = arr.length; i < length; i++) {
        var item = arr[i];
        var originalItem = item;
        if (o.by && item)
            item = o.by(item);
        if (item === null || item === undefined || item === '') {
            missingData.push(originalItem);
            continue;
        }
        mapped.push({
            index: i,
            value: o.ignoreCase ? item.toUpperCase() : item
        });
    }
    if (o.localeCompare) {
        sortFunction = function (a, b) {
            if (a.value !== b.value)
                return a.value.localeCompare(b.value);
            else
                return a.index < b.index ? -1 : 1;
        };
    }
    else {
        sortFunction = function (a, b) {
            if (a.value !== b.value)
                return a.value < b.value ? -1 : 1;
            else
                return a.index < b.index ? -1 : 1;
        };
    }
    mapped.sort(sortFunction);
    for (var i = 0, length = mapped.length; i < length; i++) {
        result.push(arr[mapped[i].index]);
    }
    if (missingData.length)
        result = result.concat(missingData);
    if (o.reverse)
        result.reverse();
    return new _1.ArrayOps(result);
}
exports.sort = sort;
_1.ArrayOps.prototype.sort = sort;


/***/ }),
/* 78 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

exports.__esModule = true;
var _1 = __webpack_require__(0);
/**
 * Takes the first 'count' items from this Array.
 */
function take(count) {
    return new _1.ArrayOps(this.value().slice(0, count));
}
exports.take = take;
_1.ArrayOps.prototype.take = take;


/***/ }),
/* 79 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

exports.__esModule = true;
var _1 = __webpack_require__(0);
/**
 * Takes the last 'count' items from this Array.
 */
function takeRight(count) {
    var arr = this.value();
    return new _1.ArrayOps((arr.length < count)
        ? arr.slice(0)
        : arr.slice(arr.length - count));
}
exports.takeRight = takeRight;
_1.ArrayOps.prototype.takeRight = takeRight;


/***/ }),
/* 80 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

exports.__esModule = true;
var _1 = __webpack_require__(0);
/**
 * Converts this Array of numbers or strings to a Set-like object where values are all truthy.
 */
function toSet() {
    var arr = this.value(), result = {};
    for (var i = 0; i < arr.length; i++) {
        result[arr[i]] = true;
    }
    return new _1.ObjectOps(result);
}
exports.toSet = toSet;
_1.ArrayOps.prototype.toSet = toSet;


/***/ }),
/* 81 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

exports.__esModule = true;
var _1 = __webpack_require__(0);
/**
 * Updates an item at the specified index.
 */
function updateAt(index, updater) {
    var result = this.value().slice();
    if (result.length > index)
        result[index] = _1.getValue(updater(result[index]));
    return new _1.ArrayOps(result);
}
exports.updateAt = updateAt;
_1.ArrayOps.prototype.updateAt = updateAt;


/***/ }),
/* 82 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

exports.__esModule = true;
var _1 = __webpack_require__(0);
/**
 * Adds a key/value to this "Map" object.
 * To update an object while preserving its type, use "update()" instead.
 */
function add(key, value) {
    var obj = this.value(), result = {};
    Object.keys(obj).forEach(function (key) { result[key] = obj[key]; });
    result[key] = value;
    return new _1.ObjectOps(result);
}
exports.add = add;
_1.ObjectOps.prototype.add = add;


/***/ }),
/* 83 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

exports.__esModule = true;
var _1 = __webpack_require__(0);
/**
 * Filter keys/values of a "Map" object
 */
function filter(predicate) {
    var obj = this.value(), result = {};
    Object.keys(obj).forEach(function (key) {
        var value = obj[key];
        if (predicate(key, value))
            result[key] = value;
    });
    return new _1.ObjectOps(result);
}
exports.filter = filter;
_1.ObjectOps.prototype.filter = filter;


/***/ }),
/* 84 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

exports.__esModule = true;
var option_ts_1 = __webpack_require__(2);
var _1 = __webpack_require__(0);
/**
 * Returns the value found at the provided key, as an Option.
 * Usage 1: read a value from a "Map" object
 * Usage 2: read an optional value from a domain object
 */
function get(key) {
    return option_ts_1.Option(this.value()[key]);
}
exports.get = get;
_1.ObjectOps.prototype.get = get;


/***/ }),
/* 85 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

exports.__esModule = true;
var _1 = __webpack_require__(0);
/**
 * Creates an Array of all this object's keys, in no particular order.
 */
function keys() {
    return new _1.ArrayOps(Object.keys(this.value()));
}
exports.keys = keys;
_1.ObjectOps.prototype.keys = keys;


/***/ }),
/* 86 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

exports.__esModule = true;
var _1 = __webpack_require__(0);
/**
 * Maps all the values of this object.
 */
function mapValues(mapper) {
    var obj = this.value(), result = {};
    Object.keys(obj).forEach(function (key) {
        var value = mapper(key, obj[key]);
        result[key] = value;
    });
    return new _1.ObjectOps(result);
}
exports.mapValues = mapValues;
_1.ObjectOps.prototype.mapValues = mapValues;


/***/ }),
/* 87 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

exports.__esModule = true;
var _1 = __webpack_require__(0);
/**
 * Returns an Object where the given keys are removed.
 * To delete a nullable key from an object while preserving its type, use "update()"
 */
function remove() {
    var keys = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        keys[_i] = arguments[_i];
    }
    var obj = this.value(), result = {};
    Object.keys(obj).forEach(function (key) { if (keys.indexOf(key) === -1)
        result[key] = obj[key]; });
    return new _1.ObjectOps(result);
}
exports.remove = remove;
_1.ObjectOps.prototype.remove = remove;


/***/ }),
/* 88 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

exports.__esModule = true;
var _1 = __webpack_require__(0);
/**
 * Converts this object to an Array of tuples.
 */
function toArray() {
    var obj = this.value(), result = [];
    Object.keys(obj).forEach(function (key) {
        result.push([key, obj[key]]);
    });
    return new _1.ArrayOps(result);
}
exports.toArray = toArray;
_1.ObjectOps.prototype.toArray = toArray;


/***/ }),
/* 89 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

exports.__esModule = true;
var immupdate_1 = __webpack_require__(12);
var _1 = __webpack_require__(0);
/**
 * Updates an object properties shallowly.
 * This delegates to "immupdate", see https://github.com/AlexGalays/immupdate
 */
function update(spec) {
    return new _1.ObjectOps(immupdate_1.update(this.value(), spec));
}
exports.update = update;
_1.ObjectOps.prototype.update = update;


/***/ }),
/* 90 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

exports.__esModule = true;
var _1 = __webpack_require__(0);
/**
 * Creates an Array of all this object's values.
 */
function values() {
    var obj = this.value(), result = [];
    Object.keys(obj).forEach(function (key) {
        result.push(obj[key]);
    });
    return new _1.ArrayOps(result);
}
exports.values = values;
_1.ObjectOps.prototype.values = values;


/***/ }),
/* 91 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

exports.__esModule = true;
var _1 = __webpack_require__(0);
/**
 * Runs an arbitrary transformation.
 */
function transform(func) {
    return _1["default"](func(this.value()));
}
exports.transform = transform;
_1.NumberOps.prototype.transform = transform;
_1.StringOps.prototype.transform = transform;
_1.BoolOps.prototype.transform = transform;
_1.ArrayOps.prototype.transform = transform;
_1.ObjectOps.prototype.transform = transform;


/***/ }),
/* 92 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var kaiju_1 = __webpack_require__(3);
var abyssa_1 = __webpack_require__(11);
var queryString_1 = __webpack_require__(93);
var q = queryString_1.default('log');
if (['all', 'router'].indexOf(q) !== -1)
    abyssa_1.Router.log = true;
if (['all', 'kaiju', 'render'].indexOf(q) !== -1)
    kaiju_1.log.render = true;
if (['all', 'kaiju', 'message'].indexOf(q) !== -1)
    kaiju_1.log.message = true;
function debugConvention() {
    return queryString_1.default('debug') === 'true';
}
exports.debugConvention = debugConvention;


/***/ }),
/* 93 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
function default_1(name) {
    name = name.replace(/[\[]/, '\\[').replace(/[\]]/, '\\]');
    var regex = new RegExp('[\\?&]' + name + '=([^&#]*)');
    var results = regex.exec(location.search);
    return results === null
        ? ''
        : decodeURIComponent(results[1].replace(/\+/g, ' '));
}
exports.default = default_1;


/***/ }),
/* 94 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* tslint:disable:no-any */

var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
var abyssa_1 = __webpack_require__(11);
var kaiju_1 = __webpack_require__(3);
var space_lift_1 = __webpack_require__(0);
/* Creates a new Route definition */
function RouteDef(uri, _params, options) {
    var children = options.children || {};
    return Object.assign({
        def: __assign({ uri: uri, fullName: undefined, parent: undefined }, options),
        params: undefined
    }, children);
}
exports.RouteDef = RouteDef;
/* Creates the router and starts the application */
function Router(options) {
    // The lookup of our custom route objects by full name
    var routeByName = {};
    // The components currently mounted, top-down
    var components = [];
    // The current route in the transition
    var currentRoute;
    // The current app VNode
    var currentVNode;
    var typedRouter;
    // Translate our RouteDefs into abyssa States
    function transformRouteTree(name, route, parent) {
        if (parent === void 0) { parent = undefined; }
        routeByName[name] = route;
        route.def.parent = parent;
        route.def.fullName = name;
        var children = route.def.children
            ? space_lift_1.default(route.def.children)
                .mapValues(function (childName, childRoute) { return transformRouteTree(name + "." + childName, childRoute, route); })
                .value()
            : {};
        return abyssa_1.State(route.def.uri, {
            enter: function () {
                components.push(route.def.enter(typedRouter, currentRoute));
            },
            update: function () {
                if (route.def.update)
                    route.def.update(currentRoute);
            },
            exit: function () {
                components.pop();
                if (route.def.exit)
                    route.def.exit();
            }
        }, children);
    }
    var rootStates = space_lift_1.default(options.routes).mapValues(transformRouteTree).value();
    var router = abyssa_1.Router(rootStates);
    var abyssaOptions = Object.assign({}, options, {
        notFound: options.notFound && options.notFound.def.fullName
    });
    router.configure(abyssaOptions);
    router.on('started', function (newState) {
        var routeDef = routeByName[newState.fullName];
        currentRoute = makeRoute(routeDef, newState.params, newState.paramsDiff);
    });
    router.on('ended', function () {
        var newAppNode = components.reduceRight(function (previous, current) {
            return current(currentRoute, previous);
        }, emptyVNode);
        if (currentVNode) {
            kaiju_1.Render.into(currentVNode, newAppNode);
        }
        else {
            kaiju_1.startApp({
                app: newAppNode,
                elm: options.elm,
                replaceElm: options.replaceElm,
                snabbdomModules: options.snabbdomModules
            });
        }
        currentVNode = newAppNode;
    });
    var routerApi = router;
    function transitionTo(route, params) {
        return routerApi.transitionTo(route.def.fullName, params);
    }
    function link(route, params) {
        return routerApi.link(route.def.fullName, params);
    }
    function replaceParams(params) {
        return routerApi.replaceParams(params);
    }
    function init() {
        router.init();
    }
    typedRouter = {
        routes: options.routes,
        transitionTo: transitionTo,
        replaceParams: replaceParams,
        link: link,
        previous: routerApi.previous,
        init: init
    };
    return typedRouter;
}
exports.Router = Router;
function makeRoute(route, params, paramsDiff) {
    return {
        route: route,
        params: params,
        paramsDiff: paramsDiff,
        is: function (otherRoute) { return route.def.fullName === otherRoute.def.fullName; },
        isIn: function (parentRoute) {
            var parent = route;
            while (parent) {
                if (parent === parentRoute)
                    return true;
                parent = parent.def.parent;
            }
            return false;
        }
    };
}
var emptyVNode = kaiju_1.h('div', { key: '_emptyVNode' });


/***/ }),
/* 95 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
__webpack_require__(24);
var styles = __webpack_require__(112);
var kaiju_1 = __webpack_require__(3);
var router_1 = __webpack_require__(9);
var search_1 = __webpack_require__(99);
var header_1 = __webpack_require__(97);
var svg_1 = __webpack_require__(115);
function route() {
    return router_1.RouteDef('/', {}, {
        enter: function (router) { return function (route, child) { return app({ child: child, router: router, route: route }); }; },
        children: {
            search: search_1.default()
        }
    });
}
exports.default = route;
function app(props) {
    return kaiju_1.Component({ name: 'app', props: props, initState: initState, connect: connect, render: render });
}
function initState() {
    return {};
}
var changeSearch = kaiju_1.Message('changeSearch');
function connect(_a) { }
function render(_a) {
    return [
        header_1.default(),
        kaiju_1.h("div." + styles.content, [
            kaiju_1.h("div." + styles.search, [
                kaiju_1.h("div." + styles.searchOption, 'kljs'),
                kaiju_1.h("input." + styles.customInput, {
                    attrs: { placeholder: 'artiste' },
                    events: { change: changeSearch }
                }),
                kaiju_1.h("div." + styles.validate, svg_1.Tick())
            ]),
            kaiju_1.h("div." + styles.result, [
                kaiju_1.h("p", '+10k'),
                kaiju_1.h("p", 'artistes')
            ])
        ]),
        kaiju_1.h("div." + styles.cards, 'klsdfn')
    ];
}


/***/ }),
/* 96 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var styles = __webpack_require__(25);
var kaiju_1 = __webpack_require__(3);
var svg_1 = __webpack_require__(115);
function render() {
    return kaiju_1.h("div." + styles.header, [
        kaiju_1.h("div." + styles.nav, [
            ,
            kaiju_1.h("div." + styles.mainNav, [
                kaiju_1.h("button." + styles.search, [
                    svg_1.Search(),
                    kaiju_1.h('span', 'Rechercher des artistes')
                ]),
                kaiju_1.h('div', 'Recherche simple'),
                kaiju_1.h('div', 'Recherche avancée'),
            ]),
            kaiju_1.h("div." + styles.buttons, [
                kaiju_1.h("button." + styles.selection, [
                    svg_1.Saving(),
                    kaiju_1.h('span', 'Mes Recherches')
                ]),
                kaiju_1.h("button." + styles.selection, [
                    svg_1.Heart(),
                    kaiju_1.h('span', 'Mes sélections')
                ])
            ]),
            kaiju_1.h("div." + styles.avatar)
        ])
    ]);
}
exports.default = render;


/***/ }),
/* 97 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var header_1 = __webpack_require__(96);
exports.default = header_1.default;


/***/ }),
/* 98 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var app_1 = __webpack_require__(95);
exports.default = app_1.default;


/***/ }),
/* 99 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var search_1 = __webpack_require__(100);
exports.default = search_1.default;


/***/ }),
/* 100 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var styles = __webpack_require__(112);
var kaiju_1 = __webpack_require__(3);
var router_1 = __webpack_require__(9);
function route() {
    return router_1.RouteDef('search', {}, {
        enter: function (router) {
            return function (route, child) { return Search({ router: router, route: route, child: child }); };
        },
        children: {}
    });
}
exports.default = route;
var changeSearch = kaiju_1.Message('changeSearch');
function initState() {
    return {};
}
function connect(_a) {
}
function render(_a) {
    return kaiju_1.h("div." + styles.search, [
        kaiju_1.h("div." + styles.searchOption),
        kaiju_1.h("input." + styles.customInput, { events: { change: changeSearch } })
    ]);
}
function Search(props) {
    return kaiju_1.Component({ name: 'search', props: props, initState: initState, connect: connect, render: render });
}


/***/ }),
/* 101 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(18);


/***/ }),
/* 102 */,
/* 103 */,
/* 104 */,
/* 105 */,
/* 106 */,
/* 107 */,
/* 108 */,
/* 109 */,
/* 110 */,
/* 111 */,
/* 112 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"search":"search-2uvUu","searchOption":"searchOption-3hEbd","customInput":"customInput-23gmZ","validate":"validate-VjDBq","result":"result-t-0q2","cards":"cards-1Qa7P","content":"content-2fLw3"};

/***/ }),
/* 113 */,
/* 114 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* tslint:disable:max-line-length */

Object.defineProperty(exports, "__esModule", { value: true });
var kaiju_1 = __webpack_require__(3);
exports.default = function (className) {
    return kaiju_1.h('svg', {
        attrs: {
            className: className,
            viewBox: '0 0 13 19',
            height: 12,
            width: 19,
        }
    }, [
        kaiju_1.h('g', {
            attrs: {
                'stroke': 'none',
                'stroke-width': 1,
                'fill': 'none',
                'fill-rule': 'evenodd'
            }
        }, [
            kaiju_1.h('g', {
                attrs: {
                    transform: 'translate(-10.000000, -4.000000)',
                    fill: 'currentColor'
                }
            }, [
                kaiju_1.h('g', {
                    attrs: {
                        transform: 'translate(10.000000, 4.000000)',
                        fill: 'currentColor'
                    }
                }, [
                    kaiju_1.h('polygon', {
                        attrs: {
                            points: '14 14.7060985 14.7060985 14 19 18.2941012 18.2941012 19'
                        }
                    }),
                    kaiju_1.h('path', {
                        attrs: {
                            d: 'M21.5889146,19.6036266 C22.1370285,20.1517404 22.1370285,21.0404008 21.5889146,21.5889146 C21.0408007,22.1370285 20.1517404,22.1370285 19.6036266,21.5889146 L15.4110854,17.3963734 C14.8629715,16.8482596 14.8629715,15.9591993 15.4110854,15.4110854 C15.9591993,14.8629715 16.8482596,14.8629715 17.3963734,15.4110854 L21.5889146,19.6036266 Z'
                        }
                    }),
                    kaiju_1.h('path', {
                        attrs: {
                            d: 'M8.54887927,2.25501395 C5.09994015,2.2256577 2.28016332,4.9975993 2.25080686,8.4462914 C2.221228,11.8952059 4.99318939,14.7149626 8.44212851,14.7443189 C11.8908452,14.7738975 14.7106221,12.0019559 14.7402009,8.5530414 C14.7404233,8.53458255 14.7404233,8.51612369 14.7404233,8.49766484 C14.7490968,5.06631961 11.980249,2.27458479 8.54887927,2.25501395 M8.54887927,16.9998573 C3.85451462,17.0267672 0.0270551044,13.2433694 0.000145017151,8.54903828 C-0.0269874675,3.85470714 3.75665976,0.0272749468 8.4510244,0.000142655817 C13.145389,-0.0267672393 16.9728486,3.75685298 16.9997587,8.45118411 C16.999981,8.46675182 16.999981,8.48209713 16.999981,8.49766484 C17.0097665,13.1773178 13.2285657,16.9813985 8.54887927,16.9998573'
                        }
                    })
                ])
            ])
        ])
    ]);
};


/***/ }),
/* 115 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var svg_1 = __webpack_require__(116);
exports.default = svg_1.default;
var search_1 = __webpack_require__(114);
exports.Search = search_1.default;
var heart_1 = __webpack_require__(117);
exports.Heart = heart_1.default;
var tick_1 = __webpack_require__(118);
exports.Tick = tick_1.default;
var saving_1 = __webpack_require__(119);
exports.Saving = saving_1.default;


/***/ }),
/* 116 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var kaiju_1 = __webpack_require__(3);
function default_1(props) {
    var className = props.className, viewBox = props.viewBox, width = props.width, height = props.height, color = props.color, path = props.path;
    var pathList = path.map(function (item) { return Path(item); });
    return (kaiju_1.h('svg', {
        attrs: {
            viewBox: viewBox,
            class: className,
            width: width,
            height: height,
            color: color
        }
    }, [
        kaiju_1.h('g', {
            attrs: {
                'stroke': 'none',
                'stroke-width': 1,
                'fill': 'none',
                'fill-rule': 'evenodd'
            }
        }, pathList)
    ]));
}
exports.default = default_1;
function Path(props) {
    var fill = props.fill, stroke = props.stroke, d = props.d;
    return (kaiju_1.h('path', {
        attrs: {
            fill: fill || 'currentColor',
            stroke: stroke,
            d: d
        }
    }));
}


/***/ }),
/* 117 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* tslint:disable:max-line-length */

Object.defineProperty(exports, "__esModule", { value: true });
var kaiju_1 = __webpack_require__(3);
exports.default = function (className) {
    return kaiju_1.h('svg', {
        attrs: {
            className: className,
            viewBox: '0 0 13 19',
            height: 13,
            width: 19,
        }
    }, [
        kaiju_1.h('g', {
            attrs: {
                'stroke': 'none',
                'stroke-width': 1,
                'fill': 'none',
                'fill-rule': 'evenodd'
            }
        }, [
            kaiju_1.h('g', {
                attrs: {
                    transform: 'translate(-9.000000, -5.000000)',
                    fill: 'currentColor',
                    'stroke-width': 0.8,
                    stroke: 'currentColor'
                }
            }, [
                kaiju_1.h('g', {
                    attrs: {
                        transform: 'translate(10.000000, 6.000000)',
                    }
                }, [
                    kaiju_1.h('path', {
                        attrs: {
                            d: 'M5.8544942,1.38392857 C3.48023825,1.38392857 1.69005968,3.17410714 1.69005968,5.5483631 C1.69005968,8.52864583 4.35002991,11.0267857 9.05129479,15.1837426 L9.08217277,15.2127976 C9.49415194,15.6260045 10.1632368,15.6265253 10.5758484,15.2139137 L10.5899853,15.1997768 L10.6059823,15.1856399 C15.30721,11.0267857 17.9671802,8.52864583 17.9671802,5.55022321 C17.9671802,3.17596726 16.1770388,1.38578869 13.8027829,1.38578869 C12.5174406,1.38578869 11.1986162,2.00260417 10.3574704,2.99516369 L10.2640552,3.10520833 C10.0360046,3.37380952 9.62134688,3.3734375 9.39377991,3.10438988 L9.2998067,2.99330357 C8.45977694,2.00074405 7.13946444,1.38392857 5.8544942,1.38392857 M8.61974718,16.7116815 L8.11714301,16.2090774 C5.68075908,14.0535714 3.85375015,12.4025298 2.53678587,10.8013393 C1.01409241,8.94791667 0.304643008,7.27864583 0.304643008,5.5483631 C0.304643008,4.03943452 0.874583485,2.63839286 1.90955372,1.60491071 C2.94452396,0.571428571 4.34556563,0 5.8530061,0 C7.15494063,0 8.44344509,0.45688244 9.47499271,1.25695685 C9.6826192,1.41800595 9.97134688,1.41804315 10.1789734,1.25699405 C11.2107442,0.45688244 12.4989882,0 13.8009228,0 C15.3098513,0 16.710893,0.569940476 17.7443752,1.60491071 C18.7778201,2.63988095 19.3522621,4.03943452 19.3522621,5.5483631 C19.3522621,7.27864583 18.6428127,8.94791667 17.1201192,10.8013393 C15.803899,12.4010417 13.97689,14.0535714 11.5397621,16.2090774 L11.0371207,16.7116815 C10.3695984,17.3792411 9.2873067,17.3792411 8.61974718,16.7116815'
                        }
                    })
                ])
            ])
        ])
    ]);
};


/***/ }),
/* 118 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* tslint:disable:max-line-length */

Object.defineProperty(exports, "__esModule", { value: true });
var svg_1 = __webpack_require__(115);
exports.default = function () {
    var d = 'M9 16.2L4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2z';
    return svg_1.default({
        viewBox: '0 0 25 24',
        width: 25,
        height: 24,
        path: [{
                d: d, fill: 'currentColor'
            }]
    });
};


/***/ }),
/* 119 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* tslint:disable:max-line-length */

Object.defineProperty(exports, "__esModule", { value: true });
var kaiju_1 = __webpack_require__(3);
exports.default = function (className) {
    return kaiju_1.h('svg', {
        attrs: {
            className: className,
            viewBox: '0 0 13 19',
            height: 13,
            width: 19
        }
    }, [
        kaiju_1.h('g', {
            attrs: {
                'stroke': 'none',
                'stroke-width': 1,
                'fill': 'none',
                'fill-rule': 'evenodd'
            }
        }, [
            kaiju_1.h('g', {
                attrs: {
                    transform: 'translate(-13.000000, -5.000000)',
                    fill: 'currentColor',
                    stroke: 'currentColor'
                }
            }, [
                kaiju_1.h('path', {
                    attrs: {
                        d: 'M15.4876847,21.4821267 L19.4798165,18.2693324 C19.6818067,18.1049993 19.9610505,18.1049993 20.1628522,18.2693324 L24.1551724,21.4821267 L24.1551724,7.82142667 C24.1551724,7.52514127 23.9083374,7.21428445 23.4014778,7.21428445 L16.2413793,7.21428445 C15.7345197,7.21428445 15.4876847,7.52514127 15.4876847,7.82142667 L15.4876847,21.4821267 Z M15.2992611,22.9999823 C15.1002857,22.9999823 14.8376232,22.9694228 14.6220665,22.7470063 C14.4065099,22.5245899 14.3571429,22.2212212 14.3571429,21.9880786 L14.3571429,7.82142667 C14.3571429,6.79292774 15.2255874,6 16.2413793,6 L23.4014778,6 C24.4172697,6 25.2857143,6.79292774 25.2857143,7.82142667 L25.2857143,21.9880786 C25.2857143,22.2212212 25.2363473,22.5245899 25.0207906,22.7470063 C24.8050456,22.9694228 24.5425714,22.9999823 24.3435961,22.9999823 C24.2207438,23.0009942 24.100718,22.9586966 24.0021724,22.8797681 L19.8214286,19.5089145 L15.6406847,22.8797681 C15.5421392,22.9586966 15.4223017,23.0009942 15.2992611,22.9999823 L15.2992611,22.9999823 Z',
                    }
                })
            ])
        ])
    ]);
};


/***/ })
/******/ ]);
//# sourceMappingURL=app.js.map