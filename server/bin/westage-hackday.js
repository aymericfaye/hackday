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
/******/ 	return __webpack_require__(__webpack_require__.s = 7);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("express");

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var express = __webpack_require__(0);
var path = __webpack_require__(6);
var app_1 = __webpack_require__(3);
console.log('WeStage Hackday with Zengularity!');
var app = express();
var port = process.env.PORT || 3000;
app.set('view engine', 'ejs');
app.set('views', path.join(path.resolve(), 'src/views'));
app.use('/public', express.static('public'));
app.use('/', app_1.AppController);
app.listen(port, function (err) {
    if (err) {
        console.log(err);
    }
    else {
        console.log("Listening at http://localhost:" + port + "/");
    }
});


/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
// Import only what we need from express
var express_1 = __webpack_require__(0);
var search_1 = __webpack_require__(4);
// Assign router to the express.Router() instance
var router = express_1.Router();
router.get('/', function (req, res) {
    res.render('index');
});
router.get('/search/:artistName', function (req, res) {
    search_1.search(req.params.artistName)
        .then(function (result) { return res.status(200).send(result); })
        .catch(function (err) { return res.status(500).send(err); });
});
router.get('/advancedSearch', function (req, res) {
    res.render('index');
});
exports.AppController = router;


/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(__webpack_require__(2));


/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var mongoose = __webpack_require__(5);
mongoose.Promise = global.Promise;
var WESTAGE_HOST = 'localhost:27017';
var WESTAGE_DB = 'westage';
var WESTAGE_USER = '';
var WESTAGE_PWD = '';
var ArtistSchema = new mongoose.Schema({
    common: {
        name: String
    }
});
var ArtistModel = mongoose.model('artist', ArtistSchema, 'matched');
function DBConnect() {
    mongoose.connect('mongodb://' + WESTAGE_USER + ':' + WESTAGE_PWD + '@' + WESTAGE_HOST + '/' + WESTAGE_DB, function (err) {
        if (err) {
            throw err;
        }
    });
}
exports.DBConnect = DBConnect;
function DBClose() {
    mongoose.connection.close();
}
exports.DBClose = DBClose;
DBConnect();
function search(artistName) {
    return ArtistModel.find({ 'common.name': artistName }, 'common lastfm discogs', function (err, artist) {
        return artist;
    });
}
exports.search = search;


/***/ }),
/* 5 */
/***/ (function(module, exports) {

module.exports = require("mongoose");

/***/ }),
/* 6 */
/***/ (function(module, exports) {

module.exports = require("path");

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(1);


/***/ })
/******/ ]);
//# sourceMappingURL=westage-hackday.js.map