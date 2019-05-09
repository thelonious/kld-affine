(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
  typeof define === 'function' && define.amd ? define(['exports'], factory) :
  (global = global || self, factory(global.KldAffine = {}));
}(this, function (exports) { 'use strict';

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  function _defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor;
  }

  /**
   *  Point2D.js
   *  @module Point2D
   *  @copyright 2001-2019 Kevin Lindsey
   */

  /**
   *  Point2D
   *
   *  @memberof module:kld-affine
   */
  var Point2D =
  /*#__PURE__*/
  function () {
    /**
     *  Point2D
     *
     *  @param {number} x
     *  @param {number} y
     *  @returns {module:kld-affine.Point2D}
     */
    function Point2D() {
      var x = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
      var y = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;

      _classCallCheck(this, Point2D);

      this.x = x;
      this.y = y;
    }
    /**
     *  clone
     *
     *  @returns {module:kld-affine.Point2D}
     */


    _createClass(Point2D, [{
      key: "clone",
      value: function clone() {
        return new this.constructor(this.x, this.y);
      }
      /**
       *  add
       *
       *  @param {module:kld-affine.Point2D} that
       *  @returns {module:kld-affine.Point2D}
       */

    }, {
      key: "add",
      value: function add(that) {
        return new this.constructor(this.x + that.x, this.y + that.y);
      }
      /**
       *  subtract
       *
       *  @param {module:kld-affine.Point2D} that
       *  @returns {module:kld-affine.Point2D}
       */

    }, {
      key: "subtract",
      value: function subtract(that) {
        return new this.constructor(this.x - that.x, this.y - that.y);
      }
      /**
       *  multiply
       *
       *  @param {number} scalar
       *  @returns {module:kld-affine.Point2D}
       */

    }, {
      key: "multiply",
      value: function multiply(scalar) {
        return new this.constructor(this.x * scalar, this.y * scalar);
      }
      /**
       *  divide
       *
       *  @param {number} scalar
       *  @returns {module:kld-affine.Point2D}
       */

    }, {
      key: "divide",
      value: function divide(scalar) {
        return new this.constructor(this.x / scalar, this.y / scalar);
      }
      /**
       *  equals
       *
       *  @param {module:kld-affine.Point2D} that
       *  @returns {boolean}
       */

    }, {
      key: "equals",
      value: function equals(that) {
        return this.x === that.x && this.y === that.y;
      }
      /**
       *  precisionEquals
       *
       *  @param {module:kld-affine.Point2D} that
       *  @param {number} precision
       *  @returns {boolean}
       */

    }, {
      key: "precisionEquals",
      value: function precisionEquals(that, precision) {
        return Math.abs(this.x - that.x) < precision && Math.abs(this.y - that.y) < precision;
      } // utility methods

      /**
       *  lerp
       *
       *  @param {module:kld-affine.Point2D} that
       *  @param {number} t
       *  @returns {module:kld-affine.Point2D}
       */

    }, {
      key: "lerp",
      value: function lerp(that, t) {
        var omt = 1.0 - t;
        return new this.constructor(this.x * omt + that.x * t, this.y * omt + that.y * t);
      }
      /**
       *  distanceFrom
       *
       *  @param {module:kld-affine.Point2D} that
       *  @returns {number}
       */

    }, {
      key: "distanceFrom",
      value: function distanceFrom(that) {
        var dx = this.x - that.x;
        var dy = this.y - that.y;
        return Math.sqrt(dx * dx + dy * dy);
      }
      /**
       *  min
       *
       *  @param {module:kld-affine.Point2D} that
       *  @returns {number}
       */

    }, {
      key: "min",
      value: function min(that) {
        return new this.constructor(Math.min(this.x, that.x), Math.min(this.y, that.y));
      }
      /**
       *  max
       *
       *  @param {module:kld-affine.Point2D} that
       *  @returns {number}
       */

    }, {
      key: "max",
      value: function max(that) {
        return new this.constructor(Math.max(this.x, that.x), Math.max(this.y, that.y));
      }
      /**
       *  transform
       *
       *  @param {module:kld-affine.Matrix2D} matrix
       *  @returns {module:kld-affine.Point2D}
       */

    }, {
      key: "transform",
      value: function transform(matrix) {
        return new this.constructor(matrix.a * this.x + matrix.c * this.y + matrix.e, matrix.b * this.x + matrix.d * this.y + matrix.f);
      }
      /**
       *  toString
       *
       *  @returns {string}
       */

    }, {
      key: "toString",
      value: function toString() {
        return "point(".concat(this.x, ",").concat(this.y, ")");
      }
    }]);

    return Point2D;
  }();

  /**
   *  Vector2D.js
   *  @module Vector2D
   *  @copyright 2001-2019 Kevin Lindsey
   */

  /**
   *  Vector2D
   *
   *  @memberof module:kld-affine
   */
  var Vector2D =
  /*#__PURE__*/
  function () {
    /**
     *  Vector2D
     *
     *  @param {number} x
     *  @param {number} y
     *  @returns {module:kld-affine.Vector2D}
     */
    function Vector2D() {
      var x = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
      var y = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;

      _classCallCheck(this, Vector2D);

      this.x = x;
      this.y = y;
    }
    /**
     *  fromPoints
     *
     *  @param {module:kld-affine.Point2D} p1
     *  @param {module:kld-affine.Point2D} p2
     *  @returns {module:kld-affine.Vector2D}
     */


    _createClass(Vector2D, [{
      key: "length",

      /**
       *  length
       *
       *  @returns {number}
       */
      value: function length() {
        return Math.sqrt(this.x * this.x + this.y * this.y);
      }
      /**
       *  magnitude
       *
       *  @returns {number}
       */

    }, {
      key: "magnitude",
      value: function magnitude() {
        return this.x * this.x + this.y * this.y;
      }
      /**
       *  dot
       *
       *  @param {module:kld-affine.Vector2D} that
       *  @returns {number}
       */

    }, {
      key: "dot",
      value: function dot(that) {
        return this.x * that.x + this.y * that.y;
      }
      /**
       *  cross
       *
       *  @param {module:kld-affine.Vector2D} that
       *  @returns {number}
       */

    }, {
      key: "cross",
      value: function cross(that) {
        return this.x * that.y - this.y * that.x;
      }
      /**
       *  determinant
       *
       *  @param {module:kld-affine.Vector2D} that
       *  @returns {number}
       */

    }, {
      key: "determinant",
      value: function determinant(that) {
        return this.x * that.y - this.y * that.x;
      }
      /**
       *  unit
       *
       *  @returns {module:kld-affine.Vector2D}
       */

    }, {
      key: "unit",
      value: function unit() {
        return this.divide(this.length());
      }
      /**
       *  add
       *
       *  @param {module:kld-affine.Vector2D} that
       *  @returns {module:kld-affine.Vector2D}
       */

    }, {
      key: "add",
      value: function add(that) {
        return new this.constructor(this.x + that.x, this.y + that.y);
      }
      /**
       *  subtract
       *
       *  @param {module:kld-affine.Vector2D} that
       *  @returns {module:kld-affine.Vector2D}
       */

    }, {
      key: "subtract",
      value: function subtract(that) {
        return new this.constructor(this.x - that.x, this.y - that.y);
      }
      /**
       *  multiply
       *
       *  @param {number} scalar
       *  @returns {module:kld-affine.Vector2D}
       */

    }, {
      key: "multiply",
      value: function multiply(scalar) {
        return new this.constructor(this.x * scalar, this.y * scalar);
      }
      /**
       *  divide
       *
       *  @param {number} scalar
       *  @returns {module:kld-affine.Vector2D}
       */

    }, {
      key: "divide",
      value: function divide(scalar) {
        return new this.constructor(this.x / scalar, this.y / scalar);
      }
      /**
       *  angleBetween
       *
       *  @param {module:kld-affine.Vector2D} that
       *  @returns {number}
       */

    }, {
      key: "angleBetween",
      value: function angleBetween(that) {
        var cos = this.dot(that) / (this.length() * that.length());
        cos = Math.max(-1, Math.min(cos, 1));
        var radians = Math.acos(cos);
        return this.cross(that) < 0.0 ? -radians : radians;
      }
      /**
       *  Find a vector is that is perpendicular to this vector
       *
       *  @returns {module:kld-affine.Vector2D}
       */

    }, {
      key: "perp",
      value: function perp() {
        return new this.constructor(-this.y, this.x);
      }
      /**
       *  Find the component of the specified vector that is perpendicular to
       *  this vector
       *
       *  @param {module:kld-affine.Vector2D} that
       *  @returns {module:kld-affine.Vector2D}
       */

    }, {
      key: "perpendicular",
      value: function perpendicular(that) {
        return this.subtract(this.project(that));
      }
      /**
       *  project
       *
       *  @param {module:kld-affine.Vector2D} that
       *  @returns {module:kld-affine.Vector2D}
       */

    }, {
      key: "project",
      value: function project(that) {
        var percent = this.dot(that) / that.dot(that);
        return that.multiply(percent);
      }
      /**
       *  transform
       *
       *  @param {module:kld-affine.Matrix2D} matrix
       *  @returns {module:kld-affine.Vector2D}
       */

    }, {
      key: "transform",
      value: function transform(matrix) {
        return new this.constructor(matrix.a * this.x + matrix.c * this.y, matrix.b * this.x + matrix.d * this.y);
      }
      /**
       *  equals
       *
       *  @param {module:kld-affine.Vector2D} that
       *  @returns {boolean}
       */

    }, {
      key: "equals",
      value: function equals(that) {
        return this.x === that.x && this.y === that.y;
      }
      /**
       *  precisionEquals
       *
       *  @param {module:kld-affine.Vector2D} that
       *  @param {number} precision
       *  @returns {boolean}
       */

    }, {
      key: "precisionEquals",
      value: function precisionEquals(that, precision) {
        return Math.abs(this.x - that.x) < precision && Math.abs(this.y - that.y) < precision;
      }
      /**
       *  toString
       *
       *  @returns {string}
       */

    }, {
      key: "toString",
      value: function toString() {
        return "vector(".concat(this.x, ",").concat(this.y, ")");
      }
    }], [{
      key: "fromPoints",
      value: function fromPoints(p1, p2) {
        return new Vector2D(p2.x - p1.x, p2.y - p1.y);
      }
    }]);

    return Vector2D;
  }();

  /**
   *  Matrix2D.js
   *  @module Matrix2D
   *  @copyright 2001-2019 Kevin Lindsey
   */

  /**
   *  Matrix2D
   *
   *  @memberof module:kld-affine
   */
  var Matrix2D =
  /*#__PURE__*/
  function () {
    /**
     *  A 2D Matrix of the form:<br>
     *  [a c e]<br>
     *  [b d f]<br>
     *  [0 0 1]<br>
     *
     *  @param {number} a
     *  @param {number} b
     *  @param {number} c
     *  @param {number} d
     *  @param {number} e
     *  @param {number} f
     *  @returns {module:kld-affine.Matrix2D}
     */
    function Matrix2D() {
      var a = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;
      var b = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
      var c = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
      var d = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 1;
      var e = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : 0;
      var f = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : 0;

      _classCallCheck(this, Matrix2D);

      this.a = a;
      this.b = b;
      this.c = c;
      this.d = d;
      this.e = e;
      this.f = f;
    }
    /**
     *  translation
     *
     *  @param {number} tx
     *  @param {number} ty
     *  @returns {module:kld-affine.Matrix2D}
     */


    _createClass(Matrix2D, [{
      key: "multiply",

      /**
       *  multiply
       *
       *  @param {module:kld-affine.Matrix2D} that
       *  @returns {module:kld-affine.Matrix2D}
       */
      value: function multiply(that) {
        if (this.isIdentity()) {
          return that;
        }

        if (that.isIdentity()) {
          return this;
        }

        return new this.constructor(this.a * that.a + this.c * that.b, this.b * that.a + this.d * that.b, this.a * that.c + this.c * that.d, this.b * that.c + this.d * that.d, this.a * that.e + this.c * that.f + this.e, this.b * that.e + this.d * that.f + this.f);
      }
      /**
       *  inverse
       *
       *  @returns {module:kld-affine.Matrix2D}
       */

    }, {
      key: "inverse",
      value: function inverse() {
        if (this.isIdentity()) {
          return this;
        }

        var det1 = this.a * this.d - this.b * this.c;

        if (det1 === 0.0) {
          throw new Error("Matrix is not invertible");
        }

        var idet = 1.0 / det1;
        var det2 = this.f * this.c - this.e * this.d;
        var det3 = this.e * this.b - this.f * this.a;
        return new this.constructor(this.d * idet, -this.b * idet, -this.c * idet, this.a * idet, det2 * idet, det3 * idet);
      }
      /**
       *  translate
       *
       *  @param {number} tx
       *  @param {number} ty
       *  @returns {module:kld-affine.Matrix2D}
       */

    }, {
      key: "translate",
      value: function translate(tx, ty) {
        return new this.constructor(this.a, this.b, this.c, this.d, this.a * tx + this.c * ty + this.e, this.b * tx + this.d * ty + this.f);
      }
      /**
       *  scale
       *
       *  @param {number} scale
       *  @returns {module:kld-affine.Matrix2D}
       */

    }, {
      key: "scale",
      value: function scale(_scale) {
        return new this.constructor(this.a * _scale, this.b * _scale, this.c * _scale, this.d * _scale, this.e, this.f);
      }
      /**
       *  scaleAt
       *
       *  @param {number} scale
       *  @param {module:kld-affine.Point2D} center
       *  @returns {module:kld-affine.Matrix2D}
       */

    }, {
      key: "scaleAt",
      value: function scaleAt(scale, center) {
        var dx = center.x - scale * center.x;
        var dy = center.y - scale * center.y;
        return new this.constructor(this.a * scale, this.b * scale, this.c * scale, this.d * scale, this.a * dx + this.c * dy + this.e, this.b * dx + this.d * dy + this.f);
      }
      /**
       *  scaleNonUniform
       *
       *  @param {number} scaleX
       *  @param {number} scaleY
       *  @returns {module:kld-affine.Matrix2D}
       */

    }, {
      key: "scaleNonUniform",
      value: function scaleNonUniform(scaleX, scaleY) {
        return new this.constructor(this.a * scaleX, this.b * scaleX, this.c * scaleY, this.d * scaleY, this.e, this.f);
      }
      /**
       *  scaleNonUniformAt
       *
       *  @param {number} scaleX
       *  @param {number} scaleY
       *  @param {module:kld-affine.Point2D} center
       *  @returns {module:kld-affine.Matrix2D}
       */

    }, {
      key: "scaleNonUniformAt",
      value: function scaleNonUniformAt(scaleX, scaleY, center) {
        var dx = center.x - scaleX * center.x;
        var dy = center.y - scaleY * center.y;
        return new this.constructor(this.a * scaleX, this.b * scaleX, this.c * scaleY, this.d * scaleY, this.a * dx + this.c * dy + this.e, this.b * dx + this.d * dy + this.f);
      }
      /**
       *  rotate
       *
       *  @param {number} radians
       *  @returns {module:kld-affine.Matrix2D}
       */

    }, {
      key: "rotate",
      value: function rotate(radians) {
        var c = Math.cos(radians);
        var s = Math.sin(radians);
        return new this.constructor(this.a * c + this.c * s, this.b * c + this.d * s, this.a * -s + this.c * c, this.b * -s + this.d * c, this.e, this.f);
      }
      /**
       *  rotateAt
       *
       *  @param {number} radians
       *  @param {module:kld-affine.Point2D} center
       *  @returns {module:kld-affine.Matrix2D}
       */

    }, {
      key: "rotateAt",
      value: function rotateAt(radians, center) {
        var cos = Math.cos(radians);
        var sin = Math.sin(radians);
        var cx = center.x;
        var cy = center.y;
        var a = this.a * cos + this.c * sin;
        var b = this.b * cos + this.d * sin;
        var c = this.c * cos - this.a * sin;
        var d = this.d * cos - this.b * sin;
        return new this.constructor(a, b, c, d, (this.a - a) * cx + (this.c - c) * cy + this.e, (this.b - b) * cx + (this.d - d) * cy + this.f);
      }
      /**
       *  rotateFromVector
       *
       *  @param {module:kld-affine.Vector2D} vector
       *  @returns {module:kld-affine.Matrix2D}
       */

    }, {
      key: "rotateFromVector",
      value: function rotateFromVector(vector) {
        var unit = vector.unit();
        var c = unit.x; // cos

        var s = unit.y; // sin

        return new this.constructor(this.a * c + this.c * s, this.b * c + this.d * s, this.a * -s + this.c * c, this.b * -s + this.d * c, this.e, this.f);
      }
      /**
       *  flipX
       *
       *  @returns {module:kld-affine.Matrix2D}
       */

    }, {
      key: "flipX",
      value: function flipX() {
        return new this.constructor(-this.a, -this.b, this.c, this.d, this.e, this.f);
      }
      /**
       *  flipY
       *
       *  @returns {module:kld-affine.Matrix2D}
       */

    }, {
      key: "flipY",
      value: function flipY() {
        return new this.constructor(this.a, this.b, -this.c, -this.d, this.e, this.f);
      }
      /**
       *  skewX
       *
       *  @param {number} radians
       *  @returns {module:kld-affine.Matrix2D}
       */

    }, {
      key: "skewX",
      value: function skewX(radians) {
        var t = Math.tan(radians);
        return new this.constructor(this.a, this.b, this.c + this.a * t, this.d + this.b * t, this.e, this.f);
      } // TODO: skewXAt

      /**
       *  skewY
       *
       *  @param {number} radians
       *  @returns {module:kld-affine.Matrix2D}
       */

    }, {
      key: "skewY",
      value: function skewY(radians) {
        var t = Math.tan(radians);
        return new this.constructor(this.a + this.c * t, this.b + this.d * t, this.c, this.d, this.e, this.f);
      } // TODO: skewYAt

      /**
       *  isIdentity
       *
       *  @returns {boolean}
       */

    }, {
      key: "isIdentity",
      value: function isIdentity() {
        return this.a === 1.0 && this.b === 0.0 && this.c === 0.0 && this.d === 1.0 && this.e === 0.0 && this.f === 0.0;
      }
      /**
       *  isInvertible
       *
       *  @returns {boolean}
       */

    }, {
      key: "isInvertible",
      value: function isInvertible() {
        return this.a * this.d - this.b * this.c !== 0.0;
      }
      /**
       *  getScale
       *
       *  @returns {{ scaleX: number, scaleY: number }}
       */

    }, {
      key: "getScale",
      value: function getScale() {
        return {
          scaleX: Math.sqrt(this.a * this.a + this.c * this.c),
          scaleY: Math.sqrt(this.b * this.b + this.d * this.d)
        };
      }
      /**
       *  Calculates matrix Singular Value Decomposition
       *
       *  The resulting matrices — translation, rotation, scale, and rotation0 — return
       *  this matrix when they are multiplied together in the listed order
       *
       *  @see Jim Blinn's article {@link http://dx.doi.org/10.1109/38.486688}
       *  @see {@link http://math.stackexchange.com/questions/861674/decompose-a-2d-arbitrary-transform-into-only-scaling-and-rotation}
       *
       *  @returns {{
       *    translation: module:kld-affine.Matrix2D,
       *    rotation: module:kld-affine.Matrix2D,
       *    scale: module:kld-affine.Matrix2D,
       *    rotation0: module:kld-affine.Matrix2D
       *  }}
       */

    }, {
      key: "getDecomposition",
      value: function getDecomposition() {
        var E = (this.a + this.d) * 0.5;
        var F = (this.a - this.d) * 0.5;
        var G = (this.b + this.c) * 0.5;
        var H = (this.b - this.c) * 0.5;
        var Q = Math.sqrt(E * E + H * H);
        var R = Math.sqrt(F * F + G * G);
        var scaleX = Q + R;
        var scaleY = Q - R;
        var a1 = Math.atan2(G, F);
        var a2 = Math.atan2(H, E);
        var theta = (a2 - a1) * 0.5;
        var phi = (a2 + a1) * 0.5;
        return {
          translation: this.constructor.translation(this.e, this.f),
          rotation: this.constructor.rotation(phi),
          scale: this.constructor.nonUniformScaling(scaleX, scaleY),
          rotation0: this.constructor.rotation(theta)
        };
      }
      /**
       *  equals
       *
       *  @param {module:kld-affine.Matrix2D} that
       *  @returns {boolean}
       */

    }, {
      key: "equals",
      value: function equals(that) {
        return this.a === that.a && this.b === that.b && this.c === that.c && this.d === that.d && this.e === that.e && this.f === that.f;
      }
      /**
       *  precisionEquals
       *
       *  @param {module:kld-affine.Matrix2D} that
       *  @param {number} precision
       *  @returns {boolean}
       */

    }, {
      key: "precisionEquals",
      value: function precisionEquals(that, precision) {
        return Math.abs(this.a - that.a) < precision && Math.abs(this.b - that.b) < precision && Math.abs(this.c - that.c) < precision && Math.abs(this.d - that.d) < precision && Math.abs(this.e - that.e) < precision && Math.abs(this.f - that.f) < precision;
      }
      /**
       *  toString
       *
       *  @returns {string}
       */

    }, {
      key: "toString",
      value: function toString() {
        return "matrix(".concat(this.a, ",").concat(this.b, ",").concat(this.c, ",").concat(this.d, ",").concat(this.e, ",").concat(this.f, ")");
      }
    }], [{
      key: "translation",
      value: function translation(tx, ty) {
        return new Matrix2D(1, 0, 0, 1, tx, ty);
      }
      /**
       *  scaling
       *
       *  @param {number} scale
       *  @returns {module:kld-affine.Matrix2D}
       */

    }, {
      key: "scaling",
      value: function scaling(scale) {
        return new Matrix2D(scale, 0, 0, scale, 0, 0);
      }
      /**
       *  scalingAt
       *
       *  @param {number} scale
       *  @param {module:kld-affine.Point2D} center
       *  @returns {module:kld-affine.Matrix2D}
       */

    }, {
      key: "scalingAt",
      value: function scalingAt(scale, center) {
        return new Matrix2D(scale, 0, 0, scale, center.x - center.x * scale, center.y - center.y * scale);
      }
      /**
       *  nonUniformScaling
       *
       *  @param {number} scaleX
       *  @param {number} scaleY
       *  @returns {module:kld-affine.Matrix2D}
       */

    }, {
      key: "nonUniformScaling",
      value: function nonUniformScaling(scaleX, scaleY) {
        return new Matrix2D(scaleX, 0, 0, scaleY, 0, 0);
      }
      /**
       *  nonUniformScalingAt
       *
       *  @param {number} scaleX
       *  @param {number} scaleY
       *  @param {module:kld-affine.Point2D} center
       *  @returns {module:kld-affine.Matrix2D}
       */

    }, {
      key: "nonUniformScalingAt",
      value: function nonUniformScalingAt(scaleX, scaleY, center) {
        return new Matrix2D(scaleX, 0, 0, scaleY, center.x - center.x * scaleX, center.y - center.y * scaleY);
      }
      /**
       *  rotation
       *
       *  @param {number} radians
       *  @returns {module:kld-affine.Matrix2D}
       */

    }, {
      key: "rotation",
      value: function rotation(radians) {
        var c = Math.cos(radians);
        var s = Math.sin(radians);
        return new Matrix2D(c, s, -s, c, 0, 0);
      }
      /**
       *  rotationAt
       *
       *  @param {number} radians
       *  @param {module:kld-affine.Point2D} center
       *  @returns {module:kld-affine.Matrix2D}
       */

    }, {
      key: "rotationAt",
      value: function rotationAt(radians, center) {
        var c = Math.cos(radians);
        var s = Math.sin(radians);
        return new Matrix2D(c, s, -s, c, center.x - center.x * c + center.y * s, center.y - center.y * c - center.x * s);
      }
      /**
       *  rotationFromVector
       *
       *  @param {module:kld-affine.Vector2D} vector
       *  @returns {module:kld-affine.Matrix2D}
       */

    }, {
      key: "rotationFromVector",
      value: function rotationFromVector(vector) {
        var unit = vector.unit();
        var c = unit.x; // cos

        var s = unit.y; // sin

        return new Matrix2D(c, s, -s, c, 0, 0);
      }
      /**
       *  xFlip
       *
       *  @returns {module:kld-affine.Matrix2D}
       */

    }, {
      key: "xFlip",
      value: function xFlip() {
        return new Matrix2D(-1, 0, 0, 1, 0, 0);
      }
      /**
       *  yFlip
       *
       *  @returns {module:kld-affine.Matrix2D}
       */

    }, {
      key: "yFlip",
      value: function yFlip() {
        return new Matrix2D(1, 0, 0, -1, 0, 0);
      }
      /**
       *  xSkew
       *
       *  @param {number} radians
       *  @returns {module:kld-affine.Matrix2D}
       */

    }, {
      key: "xSkew",
      value: function xSkew(radians) {
        var t = Math.tan(radians);
        return new Matrix2D(1, 0, t, 1, 0, 0);
      }
      /**
       *  ySkew
       *
       *  @param {number} radians
       *  @returns {module:kld-affine.Matrix2D}
       */

    }, {
      key: "ySkew",
      value: function ySkew(radians) {
        var t = Math.tan(radians);
        return new Matrix2D(1, t, 0, 1, 0, 0);
      }
    }]);

    return Matrix2D;
  }();
  /**
   *  Identity matrix
   *
   *  @returns {module:kld-affine.Matrix2D}
   */


  Matrix2D.IDENTITY = new Matrix2D();

  Matrix2D.IDENTITY.isIdentity = function () {
    return true;
  };

  /**
   *  @module kld-affine
   */

  exports.Matrix2D = Matrix2D;
  exports.Point2D = Point2D;
  exports.Vector2D = Vector2D;

  Object.defineProperty(exports, '__esModule', { value: true });

}));
