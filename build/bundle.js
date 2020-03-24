/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
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
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _class_game__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);

var game = new _class_game__WEBPACK_IMPORTED_MODULE_0__["default"]();
game.newGame();


/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var Game = /** @class */ (function () {
    function Game() {
        var _this = this;
        this.newCharacters = function () { return __awaiter(_this, void 0, void 0, function () {
            var character;
            var _this = this;
            return __generator(this, function (_a) {
                character = new Promise(function (resolve) { return __awaiter(_this, void 0, void 0, function () {
                    var _this = this;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0: return [4 /*yield*/, this.rl.question('Tapez le nom du personnage: ', function (answer) { return __awaiter(_this, void 0, void 0, function () {
                                    var _this = this;
                                    return __generator(this, function (_a) {
                                        switch (_a.label) {
                                            case 0:
                                                this.goods.push(answer);
                                                this.rl.setPrompt('Voulez vous créer un autre personnage ? (O)ui/(N)on \n');
                                                this.rl.prompt();
                                                return [4 /*yield*/, this.rl.on('line', function (answer) { return __awaiter(_this, void 0, void 0, function () {
                                                        var _this = this;
                                                        return __generator(this, function (_a) {
                                                            switch (_a.label) {
                                                                case 0:
                                                                    if (!(answer == 'O' || 'o')) return [3 /*break*/, 2];
                                                                    return [4 /*yield*/, this.rl.question('Tapez le nom du personnage: ', function (answer) { return __awaiter(_this, void 0, void 0, function () {
                                                                            return __generator(this, function (_a) {
                                                                                this.goods.push(answer);
                                                                                return [2 /*return*/];
                                                                            });
                                                                        }); })];
                                                                case 1:
                                                                    _a.sent();
                                                                    return [3 /*break*/, 5];
                                                                case 2:
                                                                    if (!(answer == 'N' || 'n')) return [3 /*break*/, 3];
                                                                    this.rl.close();
                                                                    return [3 /*break*/, 5];
                                                                case 3:
                                                                    this.rl.setPrompt('Voulez vous créer un autre personnage ? (O)ui/(N)on \n');
                                                                    this.rl.prompt();
                                                                    return [4 /*yield*/, this.rl.on('line', function (answer) { return __awaiter(_this, void 0, void 0, function () {
                                                                            var _this = this;
                                                                            return __generator(this, function (_a) {
                                                                                switch (_a.label) {
                                                                                    case 0:
                                                                                        if (!(answer == 'O' || 'o')) return [3 /*break*/, 2];
                                                                                        return [4 /*yield*/, this.rl.question('Tapez le nom du personnage: ', function (answer) { return __awaiter(_this, void 0, void 0, function () {
                                                                                                return __generator(this, function (_a) {
                                                                                                    this.goods.push(answer);
                                                                                                    return [2 /*return*/];
                                                                                                });
                                                                                            }); })];
                                                                                    case 1:
                                                                                        _a.sent();
                                                                                        return [3 /*break*/, 3];
                                                                                    case 2:
                                                                                        if (answer == 'N' || 'n') {
                                                                                            this.rl.close();
                                                                                        }
                                                                                        else {
                                                                                            this.rl.setPrompt('Voulez vous créer un autre personnage ? (O)ui/(N)on \n');
                                                                                            this.rl.prompt();
                                                                                        }
                                                                                        _a.label = 3;
                                                                                    case 3: return [2 /*return*/];
                                                                                }
                                                                            });
                                                                        }); })];
                                                                case 4:
                                                                    _a.sent();
                                                                    _a.label = 5;
                                                                case 5: return [2 /*return*/];
                                                            }
                                                        });
                                                    }); })];
                                            case 1:
                                                _a.sent();
                                                resolve();
                                                return [2 /*return*/];
                                        }
                                    });
                                }); })];
                            case 1:
                                _a.sent();
                                this.rl.close();
                                return [2 /*return*/];
                        }
                    });
                }); });
                return [2 /*return*/];
            });
        }); };
        this.newGame = function () { return __awaiter(_this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.start()];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        }); };
        this.start = function () { return __awaiter(_this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.rl.question('Voulez vous jouer ? (O)ui/(N)on \n', function (answer) { return __awaiter(_this, void 0, void 0, function () {
                            var _this = this;
                            return __generator(this, function (_a) {
                                switch (_a.label) {
                                    case 0:
                                        if (!(answer == 'O' || 'o')) return [3 /*break*/, 1];
                                        this.newCharacters();
                                        return [3 /*break*/, 4];
                                    case 1:
                                        if (!(answer == 'N' || 'n')) return [3 /*break*/, 2];
                                        this.rl.close();
                                        return [3 /*break*/, 4];
                                    case 2:
                                        this.rl.setPrompt('Voulez vous jouer ? (O)ui/(N)on \n');
                                        this.rl.prompt();
                                        return [4 /*yield*/, this.rl.on('line', function (answer) { return __awaiter(_this, void 0, void 0, function () {
                                                var _this = this;
                                                return __generator(this, function (_a) {
                                                    switch (_a.label) {
                                                        case 0:
                                                            if (!(answer == 'O' || 'o')) return [3 /*break*/, 1];
                                                            this.newCharacters();
                                                            return [3 /*break*/, 4];
                                                        case 1:
                                                            if (!(answer == 'N' || 'n')) return [3 /*break*/, 2];
                                                            this.rl.close();
                                                            return [3 /*break*/, 4];
                                                        case 2:
                                                            this.rl.setPrompt('Voulez vous jouer ? (O)ui/(N)on \n');
                                                            this.rl.prompt();
                                                            return [4 /*yield*/, this.rl.on('line', function (answer) { return __awaiter(_this, void 0, void 0, function () {
                                                                    return __generator(this, function (_a) {
                                                                        if (answer == 'O' || 'o') {
                                                                            this.newCharacters();
                                                                        }
                                                                        else if (answer == 'N' || 'n') {
                                                                            this.rl.close();
                                                                        }
                                                                        else {
                                                                            this.rl.setPrompt('Voulez vous jouer ? (O)ui/(N)on \n');
                                                                            this.rl.prompt();
                                                                        }
                                                                        return [2 /*return*/];
                                                                    });
                                                                }); })];
                                                        case 3:
                                                            _a.sent();
                                                            _a.label = 4;
                                                        case 4: return [2 /*return*/];
                                                    }
                                                });
                                            }); })];
                                    case 3:
                                        _a.sent();
                                        _a.label = 4;
                                    case 4: return [2 /*return*/];
                                }
                            });
                        }); })];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        }); };
        this.goods = [];
        this.bads = [];
        var readline = __webpack_require__(2);
        //let good = new Good()
        this.rl = readline.createInterface({
            input: process.stdin,
            output: process.stdout
        });
    }
    return Game;
}());
/* harmony default export */ __webpack_exports__["default"] = (Game);


/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = require("readline");

/***/ })
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LnRzIiwid2VicGFjazovLy8uL3NyYy9jbGFzcy9nYW1lLnRzIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWRsaW5lXCIiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFBMkIsMEJBQTBCLEVBQUU7UUFDdkQsaUNBQWlDLGVBQWU7UUFDaEQ7UUFDQTtRQUNBOztRQUVBO1FBQ0Esc0RBQXNELCtEQUErRDs7UUFFckg7UUFDQTs7O1FBR0E7UUFDQTs7Ozs7Ozs7QUNsRkE7QUFBQTtBQUFnQztBQUVoQyxJQUFJLElBQUksR0FBRyxJQUFJLG1EQUFJLEVBQUUsQ0FBQztBQUV0QixJQUFJLENBQUMsT0FBTyxFQUFFLENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0FmO0lBTUk7UUFBQSxpQkFTQztRQUVELGtCQUFhLEdBQUc7Ozs7Z0JBQ1IsU0FBUyxHQUFHLElBQUksT0FBTyxDQUFDLFVBQU8sT0FBTzs7OztvQ0FDdEMscUJBQU0sSUFBSSxDQUFD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QU8sQ0FBQyxNQUFNO1NBQ3pCLENBQUMsQ0FBQztJQUNQLENBQUM7SUErRUwsV0FBQztBQUFELENBQUM7Ozs7Ozs7O0FDbEdELHFDIiwiZmlsZSI6ImJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSAwKTtcbiIsImltcG9ydCBHYW1lIGZyb20gXCIuL2NsYXNzL2dhbWVcIjtcclxuXHJcbnZhciBnYW1lID0gbmV3IEdhbWUoKTtcclxuXHJcbmdhbWUubmV3R2FtZSgpOyIsImltcG9ydCBHb29kIGZyb20gJy4vR29vZCc7XHJcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcclxuaW1wb3J0IHsgYXN5bmMgfSBmcm9tICdyeGpzL2ludGVybmFsL3NjaGVkdWxlci9hc3luYyc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBHYW1lIHtcclxuXHJcbiAgICBwcml2YXRlIHJsOiBhbnk7XHJcbiAgICBwcml2YXRlIGdvb2RzOiBzdHJpbmdbXTtcclxuICAgIHByaXZhdGUgYmFkczogc3RyaW5nW107XHJcblxyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgdGhpcy5nb29kcyA9IFtdO1xyXG4gICAgICAgIHRoaXMuYmFkcyA9IFtdO1xyXG4gICAgICAgIGxldCByZWFkbGluZSA9IHJlcXVpcmUoJ3JlYWRsaW5lJyk7XHJcbiAgICAgICAgLy9sZXQgZ29vZCA9IG5ldyBHb29kKClcclxuICAgICAgICB0aGlzLnJsID0gcmVhZGxpbmUuY3JlYXRlSW50ZXJmYWNlKHtcclxuICAgICAgICAgICAgaW5wdXQ6IHByb2Nlc3Muc3RkaW4sXHJcbiAgICAgICAgICAgIG91dHB1dDogcHJvY2Vzcy5zdGRvdXRcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBuZXdDaGFyYWN0ZXJzID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgICAgIGxldCBjaGFyYWN0ZXIgPSBuZXcgUHJvbWlzZShhc3luYyAocmVzb2x2ZSkgPT4ge1xyXG4gICAgICAgICAgICBhd2FpdCB0aGlzLnJsLnF1ZXN0aW9uKCdUYXBleiBsZSBub20gZHUgcGVyc29ubmFnZTogJyxcclxuICAgICAgICAgICAgICAgIGFzeW5jIChhbnN3ZXI6IHN0cmluZykgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZ29vZHMucHVzaChhbnN3ZXIpO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMucmwuc2V0UHJvbXB0KCdWb3VsZXogdm91cyBjcsOpZXIgdW4gYXV0cmUgcGVyc29ubmFnZSA/IChPKXVpLyhOKW9uIFxcbicpXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5ybC5wcm9tcHQoKTtcclxuICAgICAgICAgICAgICAgICAgICBhd2FpdCB0aGlzLnJsLm9uKCdsaW5lJywgYXN5bmMgKGFuc3dlcjogc3RyaW5nKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChhbnN3ZXIgPT0gJ08nIHx8ICdvJykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYXdhaXQgdGhpcy5ybC5xdWVzdGlvbignVGFwZXogbGUgbm9tIGR1IHBlcnNvbm5hZ2U6ICcsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXN5bmMgKGFuc3dlcjogc3RyaW5nKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZ29vZHMucHVzaChhbnN3ZXIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKGFuc3dlciA9PSAnTicgfHwgJ24nKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnJsLmNsb3NlKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnJsLnNldFByb21wdCgnVm91bGV6IHZvdXMgY3LDqWVyIHVuIGF1dHJlIHBlcnNvbm5hZ2UgPyAoTyl1aS8oTilvbiBcXG4nKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucmwucHJvbXB0KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhd2FpdCB0aGlzLnJsLm9uKCdsaW5lJywgYXN5bmMgKGFuc3dlcjogc3RyaW5nKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGFuc3dlciA9PSAnTycgfHwgJ28nKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF3YWl0IHRoaXMucmwucXVlc3Rpb24oJ1RhcGV6IGxlIG5vbSBkdSBwZXJzb25uYWdlOiAnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXN5bmMgKGFuc3dlcjogc3RyaW5nKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5nb29kcy5wdXNoKGFuc3dlcik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKGFuc3dlciA9PSAnTicgfHwgJ24nKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucmwuY2xvc2UoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnJsLnNldFByb21wdCgnVm91bGV6IHZvdXMgY3LDqWVyIHVuIGF1dHJlIHBlcnNvbm5hZ2UgPyAoTyl1aS8oTilvbiBcXG4nKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5ybC5wcm9tcHQoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICAgICByZXNvbHZlKCk7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgdGhpcy5ybC5jbG9zZSgpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIG5ld0dhbWUgPSBhc3luYyAoKSA9PiB7XHJcbiAgICAgICAgYXdhaXQgdGhpcy5zdGFydCgpO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICBzdGFydCA9IGFzeW5jICgpID0+IHtcclxuICAgICAgICBhd2FpdCB0aGlzLnJsLnF1ZXN0aW9uKCdWb3VsZXogdm91cyBqb3VlciA/IChPKXVpLyhOKW9uIFxcbicsXHJcbiAgICAgICAgICAgIGFzeW5jIChhbnN3ZXI6IHN0cmluZykgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYgKGFuc3dlciA9PSAnTycgfHwgJ28nKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5uZXdDaGFyYWN0ZXJzKCk7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKGFuc3dlciA9PSAnTicgfHwgJ24nKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5ybC5jbG9zZSgpO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnJsLnNldFByb21wdCgnVm91bGV6IHZvdXMgam91ZXIgPyAoTyl1aS8oTilvbiBcXG4nKTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnJsLnByb21wdCgpO1xyXG4gICAgICAgICAgICAgICAgICAgIGF3YWl0IHRoaXMucmwub24oJ2xpbmUnLCBhc3luYyAoYW5zd2VyOiBzdHJpbmcpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGFuc3dlciA9PSAnTycgfHwgJ28nKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLm5ld0NoYXJhY3RlcnMoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmIChhbnN3ZXIgPT0gJ04nIHx8ICduJykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5ybC5jbG9zZSgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5ybC5zZXRQcm9tcHQoJ1ZvdWxleiB2b3VzIGpvdWVyID8gKE8pdWkvKE4pb24gXFxuJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnJsLnByb21wdCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYXdhaXQgdGhpcy5ybC5vbignbGluZScsIGFzeW5jIChhbnN3ZXI6IHN0cmluZykgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChhbnN3ZXIgPT0gJ08nIHx8ICdvJykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLm5ld0NoYXJhY3RlcnMoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKGFuc3dlciA9PSAnTicgfHwgJ24nKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucmwuY2xvc2UoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnJsLnNldFByb21wdCgnVm91bGV6IHZvdXMgam91ZXIgPyAoTyl1aS8oTilvbiBcXG4nKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5ybC5wcm9tcHQoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcbiAgICB9XHJcbn0iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFkbGluZVwiKTsiXSwic291cmNlUm9vdCI6IiJ9