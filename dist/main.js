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
/******/ 	return __webpack_require__(__webpack_require__.s = 9);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
var global = module.exports = typeof window != 'undefined' && window.Math == Math
  ? window : typeof self != 'undefined' && self.Math == Math ? self
  // eslint-disable-next-line no-new-func
  : Function('return this')();
if (typeof __g == 'number') __g = global; // eslint-disable-line no-undef


/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = function (it) {
  return typeof it === 'object' ? it !== null : typeof it === 'function';
};


/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

// Thank's IE8 for his funny defineProperty
module.exports = !__webpack_require__(3)(function () {
  return Object.defineProperty({}, 'a', { get: function () { return 7; } }).a != 7;
});


/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = function (exec) {
  try {
    return !!exec();
  } catch (e) {
    return true;
  }
};


/***/ }),
/* 4 */
/***/ (function(module, exports) {

var core = module.exports = { version: '2.5.1' };
if (typeof __e == 'number') __e = core; // eslint-disable-line no-undef


/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

// to indexed object, toObject with fallback for non-array-like ES3 strings
var IObject = __webpack_require__(6);
var defined = __webpack_require__(7);
module.exports = function (it) {
  return IObject(defined(it));
};


/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

// fallback for non-array-like ES3 and non-enumerable old V8 strings
var cof = __webpack_require__(28);
// eslint-disable-next-line no-prototype-builtins
module.exports = Object('z').propertyIsEnumerable(0) ? Object : function (it) {
  return cof(it) == 'String' ? it.split('') : Object(it);
};


/***/ }),
/* 7 */
/***/ (function(module, exports) {

// 7.2.1 RequireObjectCoercible(argument)
module.exports = function (it) {
  if (it == undefined) throw TypeError("Can't call method on  " + it);
  return it;
};


/***/ }),
/* 8 */
/***/ (function(module, exports) {

// 7.1.4 ToInteger
var ceil = Math.ceil;
var floor = Math.floor;
module.exports = function (it) {
  return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
};


/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _transform = __webpack_require__(10);

var _transform2 = _interopRequireDefault(_transform);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var image = __webpack_require__(40);
var mask = __webpack_require__(41);

window.transform = (0, _transform2.default)({
    imageSrc: image,
    maskSrc: mask,
    points: null, // 默认位置
    extend: 2, // 扩展三角形，处理缝隙问题
    hasDrag: true, // 开启拖拽
    hasDot: true, // 显示点
    hasRect: true, // 显示方格
    hasPic: true, // 显示图片
    count: 10 // 等分割数量
});

document.body.appendChild(transform.canvas);

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _assign = __webpack_require__(11);

var _assign2 = _interopRequireDefault(_assign);

var _matrix = __webpack_require__(39);

var _matrix2 = _interopRequireDefault(_matrix);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function transformImage(options) {
    var opts = {
        width: 1000,
        height: 1000,
        imageSrc: '',
        maskSrc: '',
        points: null, // 默认位置
        extend: 2, // 扩展三角形，处理缝隙问题
        hasDrag: true, // 开启拖拽
        hasDot: true, // 显示点
        hasRect: false, // 显示方格
        hasPic: true, // 显示图片
        count: 10 // 等分割数量
    };

    (0, _assign2.default)(opts, options);

    var canvas = document.createElement("canvas");
    var ctx = canvas.getContext("2d");

    canvas.width = opts.width;
    canvas.height = opts.height;

    var dots = opts.points,
        dotscopy,
        idots;

    if (!opts.imageSrc) {
        return canvas;
    }

    // mask
    var mask = new Image();

    // image
    var img = new Image();
    img.src = opts.imageSrc;

    img.onload = function () {
        var img_w = img.width;
        var img_h = img.height;
        var left = canvas.width - img_w;
        var top = canvas.height - img_h;

        img.width = img_w;
        img.height = img_h;

        if (!opts.points || !opts.points.length) {
            dots = opts.points = [{ x: left, y: top }, { x: left + img_w, y: top }, { x: left + img_w, y: top + img_h }, { x: left, y: top + img_h }];
        }

        //保存一份不变的拷贝
        dotscopy = [{ x: left, y: top }, { x: left + img_w, y: top }, { x: left + img_w, y: top + img_h }, { x: left, y: top + img_h }];

        //获得所有初始点坐标
        idots = rectsplit(opts.count, dotscopy[0], dotscopy[1], dotscopy[2], dotscopy[3]);

        if (opts.maskSrc) {

            mask.onload = function () {
                render(opts.points);
            };
            mask.src = opts.maskSrc;
        } else {
            render(opts.points);
        }
    };

    // 绑定拖拽功能
    var unbindEvent = false;
    if (opts.hasDrag) {
        unbindEvent = bindDrag();
    }

    /**
     * 鼠标拖动事件绑定
     * @param e
     */
    function bindDrag() {
        var area;
        var dot, i;
        var qy = 80; //鼠标事件触发区域

        var actions = {
            mousedown: function mousedown(e) {
                if (!dots.length) return;
                area = getArea(e);
                for (i = 0; i < dots.length; i++) {
                    dot = dots[i];
                    if (area.t >= dot.y - qy && area.t <= dot.y + qy && area.l >= dot.x - qy && area.l <= dot.x + qy) {
                        break;
                    } else {
                        dot = null;
                    }
                }

                if (!dot) return;

                window.addEventListener('mousemove', actions.mousemove);
                window.addEventListener('mouseup', actions.mouseup);
            },

            mousemove: function mousemove(e) {
                var narea = getArea(e);
                var nx = narea.l - area.l;
                var ny = narea.t - area.t;

                dot.x += nx;
                dot.y += ny;

                area = narea;

                render();
            },

            mouseup: function mouseup() {
                window.removeEventListener('mousemove', actions.mousemove);
                window.removeEventListener('mouseup', actions.mouseup);
            }
        };
        window.addEventListener('mousedown', actions.mousedown);

        return function () {
            window.removeEventListener('mousedown', actions.mousedown);
        };
    }

    /**
     * 获取鼠标点击/移过的位置
     * @param e
     * @returns {{t: number, l: number}}
     */
    function getArea(e) {
        e = e || window.event;
        return {
            t: e.clientY - canvas.offsetTop + document.body.scrollTop + document.documentElement.scrollTop,
            l: e.clientX - canvas.offsetLeft + document.body.scrollLeft + document.documentElement.scrollLeft
        };
    }

    /**
     * 画布渲染
     */
    function render() {
        var count = opts.count;
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        ctx.drawImage(mask, 0, 0);

        var ndots = rectsplit(count, dots[0], dots[1], dots[2], dots[3]);

        ndots.forEach(function (d, i) {
            //获取平行四边形的四个点
            var dot1 = ndots[i];
            var dot2 = ndots[i + 1];
            var dot3 = ndots[i + count + 2];
            var dot4 = ndots[i + count + 1];

            //获取初始平行四边形的四个点
            var idot1 = idots[i];
            var idot2 = idots[i + 1];
            var idot3 = idots[i + count + 2];
            var idot4 = idots[i + count + 1];

            ctx.globalAlpha = 0.8;
            // ctx.globalCompositeOperation = 'source-atop';
            if (dot2 && dot3 && i % (count + 1) < count) {
                //绘制三角形的下半部分
                renderImage(idot3, dot3, idot2, dot2, idot4, dot4);

                //绘制三角形的上半部分
                renderImage(idot1, dot1, idot2, dot2, idot4, dot4, true);
            }
            // ctx.globalCompositeOperation = 'source-over';
            ctx.globalAlpha = 1;

            // 显示圆点
            if (opts.hasDot) {
                ctx.save();
                ctx.fillStyle = "red";
                ctx.fillRect(d.x - 1, d.y - 1, 2, 2);
                ctx.save();
            }
        });
        ctx.restore();
    }

    /**
     * 计算矩阵，同时渲染图片
     * @param arg_1
     * @param _arg_1
     * @param arg_2
     * @param _arg_2
     * @param arg_3
     * @param _arg_3
     */
    function renderImage(arg_1, _arg_1, arg_2, _arg_2, arg_3, _arg_3, isUp) {
        var extend = opts.extend;
        ctx.save();
        //根据变换后的坐标创建剪切区域
        ctx.beginPath();
        if (isUp) {
            // 上半部分三角形
            ctx.moveTo(_arg_1.x - extend, _arg_1.y - extend);
            ctx.lineTo(_arg_2.x + extend, _arg_2.y - extend);
            ctx.lineTo(_arg_3.x + extend, _arg_3.y + extend);
        } else {
            // 下半部分三角形
            ctx.moveTo(_arg_1.x + extend, _arg_1.y + extend);
            ctx.lineTo(_arg_2.x + extend, _arg_2.y - extend);
            ctx.lineTo(_arg_3.x - extend, _arg_3.y - extend);
        }
        ctx.closePath();

        // 显示边线
        if (opts.hasRect) {
            ctx.lineWidth = 2;
            ctx.strokeStyle = "red";
            ctx.stroke();
        }
        ctx.clip();

        if (opts.hasPic) {
            //传入变换前后的点坐标，计算变换矩阵
            var result = _matrix2.default.getMatrix.apply(this, arguments);

            //变形
            ctx.transform(result.a, result.b, result.c, result.d, result.e, result.f);

            //绘制图片
            ctx.drawImage(img, idots[0].x, idots[0].y, img.width, img.height);
        }

        ctx.restore();
    }

    /**
     * 将abcd四边形分割成n的n次方份，获取n等分后的所有点坐标
     * @param n     多少等分
     * @param a     a点坐标
     * @param b     b点坐标
     * @param c     c点坐标
     * @param d     d点坐标
     * @returns {Array}
     */
    function rectsplit(n, a, b, c, d) {
        //ad向量方向n等分
        var ad_x = (d.x - a.x) / n;
        var ad_y = (d.y - a.y) / n;
        //bc向量方向n等分
        var bc_x = (c.x - b.x) / n;
        var bc_y = (c.y - b.y) / n;

        var ndots = [];
        var x1, y1, x2, y2, ab_x, ab_y;

        //左边点递增，右边点递增，获取每一次递增后的新的向量，继续n等分，从而获取所有点坐标
        for (var i = 0; i <= n; i++) {
            //获得ad向量n等分后的坐标
            x1 = a.x + ad_x * i;
            y1 = a.y + ad_y * i;
            //获得bc向量n等分后的坐标
            x2 = b.x + bc_x * i;
            y2 = b.y + bc_y * i;

            for (var j = 0; j <= n; j++) {
                //ab向量为：[x2 - x1 , y2 - y1]，所以n等分后的增量为除于n
                ab_x = (x2 - x1) / n;
                ab_y = (y2 - y1) / n;

                ndots.push({
                    x: x1 + ab_x * j,
                    y: y1 + ab_y * j
                });
            }
        }

        return ndots;
    }

    /**
     * 销毁
     */
    function destroy() {
        unbindEvent && unbindEvent(); // unbindEvent for drag.
        canvas = null;
        ctx = null;
    }

    /**
     * getPoints
     */
    function getPoints() {
        return dots;
    }

    return {
        canvas: canvas,
        destroy: destroy,
        getPoints: getPoints,
        reRender: render,
        options: opts
    };
} // https://github.com/NodeSite/canvas-test/tree/master/src/Funny-demo/transform
;

exports.default = transformImage;

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(12), __esModule: true };

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(13);
module.exports = __webpack_require__(4).Object.assign;


/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.3.1 Object.assign(target, source)
var $export = __webpack_require__(14);

$export($export.S + $export.F, 'Object', { assign: __webpack_require__(24) });


/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(0);
var core = __webpack_require__(4);
var ctx = __webpack_require__(15);
var hide = __webpack_require__(17);
var PROTOTYPE = 'prototype';

var $export = function (type, name, source) {
  var IS_FORCED = type & $export.F;
  var IS_GLOBAL = type & $export.G;
  var IS_STATIC = type & $export.S;
  var IS_PROTO = type & $export.P;
  var IS_BIND = type & $export.B;
  var IS_WRAP = type & $export.W;
  var exports = IS_GLOBAL ? core : core[name] || (core[name] = {});
  var expProto = exports[PROTOTYPE];
  var target = IS_GLOBAL ? global : IS_STATIC ? global[name] : (global[name] || {})[PROTOTYPE];
  var key, own, out;
  if (IS_GLOBAL) source = name;
  for (key in source) {
    // contains in native
    own = !IS_FORCED && target && target[key] !== undefined;
    if (own && key in exports) continue;
    // export native or passed
    out = own ? target[key] : source[key];
    // prevent global pollution for namespaces
    exports[key] = IS_GLOBAL && typeof target[key] != 'function' ? source[key]
    // bind timers to global for call from export context
    : IS_BIND && own ? ctx(out, global)
    // wrap global constructors for prevent change them in library
    : IS_WRAP && target[key] == out ? (function (C) {
      var F = function (a, b, c) {
        if (this instanceof C) {
          switch (arguments.length) {
            case 0: return new C();
            case 1: return new C(a);
            case 2: return new C(a, b);
          } return new C(a, b, c);
        } return C.apply(this, arguments);
      };
      F[PROTOTYPE] = C[PROTOTYPE];
      return F;
    // make static versions for prototype methods
    })(out) : IS_PROTO && typeof out == 'function' ? ctx(Function.call, out) : out;
    // export proto methods to core.%CONSTRUCTOR%.methods.%NAME%
    if (IS_PROTO) {
      (exports.virtual || (exports.virtual = {}))[key] = out;
      // export proto methods to core.%CONSTRUCTOR%.prototype.%NAME%
      if (type & $export.R && expProto && !expProto[key]) hide(expProto, key, out);
    }
  }
};
// type bitmap
$export.F = 1;   // forced
$export.G = 2;   // global
$export.S = 4;   // static
$export.P = 8;   // proto
$export.B = 16;  // bind
$export.W = 32;  // wrap
$export.U = 64;  // safe
$export.R = 128; // real proto method for `library`
module.exports = $export;


/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

// optional / simple context binding
var aFunction = __webpack_require__(16);
module.exports = function (fn, that, length) {
  aFunction(fn);
  if (that === undefined) return fn;
  switch (length) {
    case 1: return function (a) {
      return fn.call(that, a);
    };
    case 2: return function (a, b) {
      return fn.call(that, a, b);
    };
    case 3: return function (a, b, c) {
      return fn.call(that, a, b, c);
    };
  }
  return function (/* ...args */) {
    return fn.apply(that, arguments);
  };
};


/***/ }),
/* 16 */
/***/ (function(module, exports) {

module.exports = function (it) {
  if (typeof it != 'function') throw TypeError(it + ' is not a function!');
  return it;
};


/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

var dP = __webpack_require__(18);
var createDesc = __webpack_require__(23);
module.exports = __webpack_require__(2) ? function (object, key, value) {
  return dP.f(object, key, createDesc(1, value));
} : function (object, key, value) {
  object[key] = value;
  return object;
};


/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__(19);
var IE8_DOM_DEFINE = __webpack_require__(20);
var toPrimitive = __webpack_require__(22);
var dP = Object.defineProperty;

exports.f = __webpack_require__(2) ? Object.defineProperty : function defineProperty(O, P, Attributes) {
  anObject(O);
  P = toPrimitive(P, true);
  anObject(Attributes);
  if (IE8_DOM_DEFINE) try {
    return dP(O, P, Attributes);
  } catch (e) { /* empty */ }
  if ('get' in Attributes || 'set' in Attributes) throw TypeError('Accessors not supported!');
  if ('value' in Attributes) O[P] = Attributes.value;
  return O;
};


/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(1);
module.exports = function (it) {
  if (!isObject(it)) throw TypeError(it + ' is not an object!');
  return it;
};


/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = !__webpack_require__(2) && !__webpack_require__(3)(function () {
  return Object.defineProperty(__webpack_require__(21)('div'), 'a', { get: function () { return 7; } }).a != 7;
});


/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(1);
var document = __webpack_require__(0).document;
// typeof document.createElement is 'object' in old IE
var is = isObject(document) && isObject(document.createElement);
module.exports = function (it) {
  return is ? document.createElement(it) : {};
};


/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.1 ToPrimitive(input [, PreferredType])
var isObject = __webpack_require__(1);
// instead of the ES6 spec version, we didn't implement @@toPrimitive case
// and the second argument - flag - preferred type is a string
module.exports = function (it, S) {
  if (!isObject(it)) return it;
  var fn, val;
  if (S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
  if (typeof (fn = it.valueOf) == 'function' && !isObject(val = fn.call(it))) return val;
  if (!S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
  throw TypeError("Can't convert object to primitive value");
};


/***/ }),
/* 23 */
/***/ (function(module, exports) {

module.exports = function (bitmap, value) {
  return {
    enumerable: !(bitmap & 1),
    configurable: !(bitmap & 2),
    writable: !(bitmap & 4),
    value: value
  };
};


/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// 19.1.2.1 Object.assign(target, source, ...)
var getKeys = __webpack_require__(25);
var gOPS = __webpack_require__(36);
var pIE = __webpack_require__(37);
var toObject = __webpack_require__(38);
var IObject = __webpack_require__(6);
var $assign = Object.assign;

// should work with symbols and should have deterministic property order (V8 bug)
module.exports = !$assign || __webpack_require__(3)(function () {
  var A = {};
  var B = {};
  // eslint-disable-next-line no-undef
  var S = Symbol();
  var K = 'abcdefghijklmnopqrst';
  A[S] = 7;
  K.split('').forEach(function (k) { B[k] = k; });
  return $assign({}, A)[S] != 7 || Object.keys($assign({}, B)).join('') != K;
}) ? function assign(target, source) { // eslint-disable-line no-unused-vars
  var T = toObject(target);
  var aLen = arguments.length;
  var index = 1;
  var getSymbols = gOPS.f;
  var isEnum = pIE.f;
  while (aLen > index) {
    var S = IObject(arguments[index++]);
    var keys = getSymbols ? getKeys(S).concat(getSymbols(S)) : getKeys(S);
    var length = keys.length;
    var j = 0;
    var key;
    while (length > j) if (isEnum.call(S, key = keys[j++])) T[key] = S[key];
  } return T;
} : $assign;


/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.14 / 15.2.3.14 Object.keys(O)
var $keys = __webpack_require__(26);
var enumBugKeys = __webpack_require__(35);

module.exports = Object.keys || function keys(O) {
  return $keys(O, enumBugKeys);
};


/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

var has = __webpack_require__(27);
var toIObject = __webpack_require__(5);
var arrayIndexOf = __webpack_require__(29)(false);
var IE_PROTO = __webpack_require__(32)('IE_PROTO');

module.exports = function (object, names) {
  var O = toIObject(object);
  var i = 0;
  var result = [];
  var key;
  for (key in O) if (key != IE_PROTO) has(O, key) && result.push(key);
  // Don't enum bug & hidden keys
  while (names.length > i) if (has(O, key = names[i++])) {
    ~arrayIndexOf(result, key) || result.push(key);
  }
  return result;
};


/***/ }),
/* 27 */
/***/ (function(module, exports) {

var hasOwnProperty = {}.hasOwnProperty;
module.exports = function (it, key) {
  return hasOwnProperty.call(it, key);
};


/***/ }),
/* 28 */
/***/ (function(module, exports) {

var toString = {}.toString;

module.exports = function (it) {
  return toString.call(it).slice(8, -1);
};


/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

// false -> Array#indexOf
// true  -> Array#includes
var toIObject = __webpack_require__(5);
var toLength = __webpack_require__(30);
var toAbsoluteIndex = __webpack_require__(31);
module.exports = function (IS_INCLUDES) {
  return function ($this, el, fromIndex) {
    var O = toIObject($this);
    var length = toLength(O.length);
    var index = toAbsoluteIndex(fromIndex, length);
    var value;
    // Array#includes uses SameValueZero equality algorithm
    // eslint-disable-next-line no-self-compare
    if (IS_INCLUDES && el != el) while (length > index) {
      value = O[index++];
      // eslint-disable-next-line no-self-compare
      if (value != value) return true;
    // Array#indexOf ignores holes, Array#includes - not
    } else for (;length > index; index++) if (IS_INCLUDES || index in O) {
      if (O[index] === el) return IS_INCLUDES || index || 0;
    } return !IS_INCLUDES && -1;
  };
};


/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.15 ToLength
var toInteger = __webpack_require__(8);
var min = Math.min;
module.exports = function (it) {
  return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
};


/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__(8);
var max = Math.max;
var min = Math.min;
module.exports = function (index, length) {
  index = toInteger(index);
  return index < 0 ? max(index + length, 0) : min(index, length);
};


/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

var shared = __webpack_require__(33)('keys');
var uid = __webpack_require__(34);
module.exports = function (key) {
  return shared[key] || (shared[key] = uid(key));
};


/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(0);
var SHARED = '__core-js_shared__';
var store = global[SHARED] || (global[SHARED] = {});
module.exports = function (key) {
  return store[key] || (store[key] = {});
};


/***/ }),
/* 34 */
/***/ (function(module, exports) {

var id = 0;
var px = Math.random();
module.exports = function (key) {
  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
};


/***/ }),
/* 35 */
/***/ (function(module, exports) {

// IE 8- don't enum bug keys
module.exports = (
  'constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf'
).split(',');


/***/ }),
/* 36 */
/***/ (function(module, exports) {

exports.f = Object.getOwnPropertySymbols;


/***/ }),
/* 37 */
/***/ (function(module, exports) {

exports.f = {}.propertyIsEnumerable;


/***/ }),
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.13 ToObject(argument)
var defined = __webpack_require__(7);
module.exports = function (it) {
  return Object(defined(it));
};


/***/ }),
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
/**
 * Created by wanghx on 2015/7/12.
 * 矩阵计算组件
 */

/**
 * 根据变化前后的点坐标，计算矩阵
 * @param arg_1     变化前坐标1
 * @param _arg_1    变化后坐标1
 * @param arg_2     变化前坐标2
 * @param _arg_2    变化后坐标2
 * @param arg_3     变化前坐标3
 * @param _arg_3    变化后坐标3
 * @returns {{a: number, b: number, c: number, d: number, e: number, f: number}}
 */
function getMatrix(arg_1, _arg_1, arg_2, _arg_2, arg_3, _arg_3) {
    //传入x值解第一个方程 即  X = ax + cy + e 求ace
    //传入的四个参数，对应三元一次方程：ax+by+cz=d的四个参数：a、b、c、d，跟矩阵方程对比c为1
    var arr1 = [arg_1.x, arg_1.y, 1, _arg_1.x];
    var arr2 = [arg_2.x, arg_2.y, 1, _arg_2.x];
    var arr3 = [arg_3.x, arg_3.y, 1, _arg_3.x];

    var result = equation(arr1, arr2, arr3);

    //传入y值解第二个方程 即  Y = bx + dy + f 求 bdf
    arr1[3] = _arg_1.y;
    arr2[3] = _arg_2.y;
    arr3[3] = _arg_3.y;

    var result2 = equation(arr1, arr2, arr3);

    //获得a、c、e
    var a = result.x;
    var c = result.y;
    var e = result.z;

    //获得b、d、f
    var b = result2.x;
    var d = result2.y;
    var f = result2.z;

    return {
        a: a,
        b: b,
        c: c,
        d: d,
        e: e,
        f: f
    };
}

/**
 * 解三元一次方程，需要传入三组方程参数
 * @param arr1        第一组参数
 * @param arr2        第二组参数
 * @param arr3        第三组参数
 * @returns {{x: number, y: number, z: number}}
 */
function equation(arr1, arr2, arr3) {
    var a1 = +arr1[0];
    var b1 = +arr1[1];
    var c1 = +arr1[2];
    var d1 = +arr1[3];

    var a2 = +arr2[0];
    var b2 = +arr2[1];
    var c2 = +arr2[2];
    var d2 = +arr2[3];

    var a3 = +arr3[0];
    var b3 = +arr3[1];
    var c3 = +arr3[2];
    var d3 = +arr3[3];

    //分离计算单元
    var m1 = c1 - b1 * c2 / b2;
    var m2 = c2 - b2 * c3 / b3;
    var m3 = d2 - b2 * d3 / b3;
    var m4 = a2 - b2 * a3 / b3;
    var m5 = d1 - b1 * d2 / b2;
    var m6 = a1 - b1 * a2 / b2;

    //计算xyz
    var x = (m1 / m2 * m3 - m5) / (m1 / m2 * m4 - m6);
    var z = (m3 - m4 * x) / m2;
    var y = (d1 - a1 * x - c1 * z) / b1;

    return {
        x: x,
        y: y,
        z: z
    };
}

exports.default = {
    getMatrix: getMatrix,
    equation: equation
};

/***/ }),
/* 40 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "./assets/82d6651dbb8fa4b7aa4ec21230ed2acb.png";

/***/ }),
/* 41 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "./assets/d6becf21401fcc3cf79feaf1a20b5bc6.png";

/***/ })
/******/ ]);
//# sourceMappingURL=main.js.map