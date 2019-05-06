(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
    typeof define === 'function' && define.amd ? define(['exports'], factory) :
    (global = global || self, factory(global.KldAffine = {}));
}(this, function (exports) { 'use strict';

    /**
     *   Point2D
     *
     *   @copyright 2001-2002, 2013, 2017 Kevin Lindsey
     */

    /**
     *  Point2D
     *
     *  @param {number} x
     *  @param {number} y
     *  @returns {Point2D}
     */
    function Point2D(x, y) {
      Object.defineProperties(this, {
        x: {
          value: x !== undefined ? x : 0.0,
          writable: false,
          enumerable: true,
          configurable: false
        },
        y: {
          value: y !== undefined ? y : 0.0,
          writable: false,
          enumerable: true,
          configurable: false
        }
      });
    }
    /**
     *  clone
     *
     *  @returns {Point2D}
     */


    Point2D.prototype.clone = function () {
      return new this.constructor(this.x, this.y);
    };
    /**
     *  add
     *
     *  @param {Point2D|Vector2D} that
     *  @returns {Point2D}
     */


    Point2D.prototype.add = function (that) {
      return new this.constructor(this.x + that.x, this.y + that.y);
    };
    /**
     *  subtract
     *
     *  @param { Vector2D | Point2D } that
     *  @returns {Point2D}
     */


    Point2D.prototype.subtract = function (that) {
      return new this.constructor(this.x - that.x, this.y - that.y);
    };
    /**
     *  multiply
     *
     *  @param {number} scalar
     *  @returns {Point2D}
     */


    Point2D.prototype.multiply = function (scalar) {
      return new this.constructor(this.x * scalar, this.y * scalar);
    };
    /**
     *  divide
     *
     *  @param {number} scalar
     *  @returns {Point2D}
     */


    Point2D.prototype.divide = function (scalar) {
      return new this.constructor(this.x / scalar, this.y / scalar);
    };
    /**
     *  equals
     *
     *  @param {Point2D} that
     *  @returns {boolean}
     */


    Point2D.prototype.equals = function (that) {
      return this.x === that.x && this.y === that.y;
    };
    /**
     *  precisionEquals
     *
     *  @param {Point2D} that
     *  @param {number} precision
     *  @returns {boolean}
     */


    Point2D.prototype.precisionEquals = function (that, precision) {
      return Math.abs(this.x - that.x) < precision && Math.abs(this.y - that.y) < precision;
    }; // utility methods

    /**
     *  lerp
     *
     *  @param { Vector2D | Point2D } that
     *  @param {number} t
     *  @returns {Point2D}
     */


    Point2D.prototype.lerp = function (that, t) {
      var omt = 1.0 - t;
      return new this.constructor(this.x * omt + that.x * t, this.y * omt + that.y * t);
    };
    /**
     *  distanceFrom
     *
     *  @param {Point2D} that
     *  @returns {number}
     */


    Point2D.prototype.distanceFrom = function (that) {
      var dx = this.x - that.x;
      var dy = this.y - that.y;
      return Math.sqrt(dx * dx + dy * dy);
    };
    /**
     *  min
     *
     *  @param {Point2D} that
     *  @returns {number}
     */


    Point2D.prototype.min = function (that) {
      return new this.constructor(Math.min(this.x, that.x), Math.min(this.y, that.y));
    };
    /**
     *  max
     *
     *  @param {Point2D} that
     *  @returns {number}
     */


    Point2D.prototype.max = function (that) {
      return new this.constructor(Math.max(this.x, that.x), Math.max(this.y, that.y));
    };
    /**
     *  transform
     *
     *  @param {Matrix2D} matrix
     *  @returns {Point2D}
     */


    Point2D.prototype.transform = function (matrix) {
      return new this.constructor(matrix.a * this.x + matrix.c * this.y + matrix.e, matrix.b * this.x + matrix.d * this.y + matrix.f);
    };
    /**
     *  toString
     *
     *  @returns {string}
     */


    Point2D.prototype.toString = function () {
      return "point(" + this.x + "," + this.y + ")";
    };

    /**
     *   Vector2D
     *
     *   @copyright 2001-2002, 2013, 2017 Kevin Lindsey
     */

    /**
     *  Vector2D
     *
     *  @param {number} x
     *  @param {number} y
     *  @returns {Vector2D}
     */
    function Vector2D(x, y) {
      Object.defineProperties(this, {
        x: {
          value: x !== undefined ? x : 0.0,
          writable: false,
          enumerable: true,
          configurable: false
        },
        y: {
          value: y !== undefined ? y : 0.0,
          writable: false,
          enumerable: true,
          configurable: false
        }
      });
    }
    /**
     *  fromPoints
     *
     *  @param {Point2D} p1
     *  @param {Point2D} p2
     *  @returns {Vector2D}
     */


    Vector2D.fromPoints = function (p1, p2) {
      return new Vector2D(p2.x - p1.x, p2.y - p1.y);
    };
    /**
     *  length
     *
     *  @returns {number}
     */


    Vector2D.prototype.length = function () {
      return Math.sqrt(this.x * this.x + this.y * this.y);
    };
    /**
     *  magnitude
     *
     *  @returns {number}
     */


    Vector2D.prototype.magnitude = function () {
      return this.x * this.x + this.y * this.y;
    };
    /**
     *  dot
     *
     *  @param {Vector2D} that
     *  @returns {number}
     */


    Vector2D.prototype.dot = function (that) {
      return this.x * that.x + this.y * that.y;
    };
    /**
     *  cross
     *
     *  @param {Vector2D} that
     *  @returns {number}
     */


    Vector2D.prototype.cross = function (that) {
      return this.x * that.y - this.y * that.x;
    };
    /**
     *  determinant
     *
     *  @param {Vector2D} that
     *  @returns {number}
     */


    Vector2D.prototype.determinant = function (that) {
      return this.x * that.y - this.y * that.x;
    };
    /**
     *  unit
     *
     *  @returns {Vector2D}
     */


    Vector2D.prototype.unit = function () {
      return this.divide(this.length());
    };
    /**
     *  add
     *
     *  @param {Vector2D} that
     *  @returns {Vector2D}
     */


    Vector2D.prototype.add = function (that) {
      return new this.constructor(this.x + that.x, this.y + that.y);
    };
    /**
     *  subtract
     *
     *  @param {Vector2D} that
     *  @returns {Vector2D}
     */


    Vector2D.prototype.subtract = function (that) {
      return new this.constructor(this.x - that.x, this.y - that.y);
    };
    /**
     *  multiply
     *
     *  @param {number} scalar
     *  @returns {Vector2D}
     */


    Vector2D.prototype.multiply = function (scalar) {
      return new this.constructor(this.x * scalar, this.y * scalar);
    };
    /**
     *  divide
     *
     *  @param {number} scalar
     *  @returns {Vector2D}
     */


    Vector2D.prototype.divide = function (scalar) {
      return new this.constructor(this.x / scalar, this.y / scalar);
    };
    /**
     *  angleBetween
     *
     *  @param {Vector2D} that
     *  @returns {number}
     */


    Vector2D.prototype.angleBetween = function (that) {
      var cos = this.dot(that) / (this.length() * that.length());
      cos = Math.max(-1, Math.min(cos, 1));
      var radians = Math.acos(cos);
      return this.cross(that) < 0.0 ? -radians : radians;
    };
    /**
     *  Find a vector is that is perpendicular to this vector
     *
     *  @returns {Vector2D}
     */


    Vector2D.prototype.perp = function () {
      return new this.constructor(-this.y, this.x);
    };
    /**
     *  Find the component of the specified vector that is perpendicular to
     *  this vector
     *
     *  @param {Vector2D} that
     *  @returns {Vector2D}
     */


    Vector2D.prototype.perpendicular = function (that) {
      return this.subtract(this.project(that));
    };
    /**
     *  project
     *
     *  @param {Vector2D} that
     *  @returns {Vector2D}
     */


    Vector2D.prototype.project = function (that) {
      var percent = this.dot(that) / that.dot(that);
      return that.multiply(percent);
    };
    /**
     *  transform
     *
     *  @param {Matrix2D} matrix
     *  @returns {Vector2D}
     */


    Vector2D.prototype.transform = function (matrix) {
      return new this.constructor(matrix.a * this.x + matrix.c * this.y, matrix.b * this.x + matrix.d * this.y);
    };
    /**
     *  equals
     *
     *  @param {Vector2D} that
     *  @returns {boolean}
     */


    Vector2D.prototype.equals = function (that) {
      return this.x === that.x && this.y === that.y;
    };
    /**
     *  precisionEquals
     *
     *  @param {Vector2D} that
     *  @param {number} precision
     *  @returns {boolean}
     */


    Vector2D.prototype.precisionEquals = function (that, precision) {
      return Math.abs(this.x - that.x) < precision && Math.abs(this.y - that.y) < precision;
    };
    /**
     *  toString
     *
     *  @returns {string}
     */


    Vector2D.prototype.toString = function () {
      return "vector(" + this.x + "," + this.y + ")";
    };

    /**
     *   Matrix2D
     *
     *   @copyright 2001-2002, 2013, 2017 Kevin Lindsey
     */

    /**
     *  setReadonlyProperty
     *
     *  @param {Object} object
     *  @param {string} property
     *  @param {Object} value
     */
    function setReadonlyProperty(object, property, value) {
      Object.defineProperty(object, property, {
        value: value,
        writable: false,
        enumerable: true,
        configurable: false
      });
    }
    /**
     *  Identity matrix
     *
     *  @returns {Matrix2D}
     */


    setReadonlyProperty(Matrix2D, "IDENTITY", new Matrix2D(1, 0, 0, 1, 0, 0));
    setReadonlyProperty(Matrix2D.IDENTITY, "isIdentity", function () {
      return true;
    });
    /**
     *  Matrix2D
     *
     *  [a c e]
     *  [b d f]
     *  [0 0 1]
     *
     *  @param {number} a
     *  @param {number} b
     *  @param {number} c
     *  @param {number} d
     *  @param {number} e
     *  @param {number} f
     *  @returns {Matrix2D}
     */

    function Matrix2D(a, b, c, d, e, f) {
      setReadonlyProperty(this, "a", a !== undefined ? a : 1);
      setReadonlyProperty(this, "b", b !== undefined ? b : 0);
      setReadonlyProperty(this, "c", c !== undefined ? c : 0);
      setReadonlyProperty(this, "d", d !== undefined ? d : 1);
      setReadonlyProperty(this, "e", e !== undefined ? e : 0);
      setReadonlyProperty(this, "f", f !== undefined ? f : 0);
    } // *** STATIC METHODS

    /**
     *  translation
     *
     *  @param {number} tx
     *  @param {number} ty
     *  @returns {Matrix2D}
     */


    Matrix2D.translation = function (tx, ty) {
      return new Matrix2D(1, 0, 0, 1, tx, ty);
    };
    /**
     *  scaling
     *
     *  @param {number} scale
     *  @returns {Matrix2D}
     */


    Matrix2D.scaling = function (scale) {
      return new Matrix2D(scale, 0, 0, scale, 0, 0);
    };
    /**
     *  scalingAt
     *
     *  @param {number} scale
     *  @param {Point2D} center
     *  @returns {Matrix2D}
     */


    Matrix2D.scalingAt = function (scale, center) {
      return new Matrix2D(scale, 0, 0, scale, center.x - center.x * scale, center.y - center.y * scale);
    };
    /**
     *  nonUniformScaling
     *
     *  @param {number} scaleX
     *  @param {number} scaleY
     *  @returns {Matrix2D}
     */


    Matrix2D.nonUniformScaling = function (scaleX, scaleY) {
      return new Matrix2D(scaleX, 0, 0, scaleY, 0, 0);
    };
    /**
     *  nonUniformScalingAt
     *
     *  @param {number} scaleX
     *  @param {number} scaleY
     *  @param {Point2D} center
     *  @returns {Matrix2D}
     */


    Matrix2D.nonUniformScalingAt = function (scaleX, scaleY, center) {
      return new Matrix2D(scaleX, 0, 0, scaleY, center.x - center.x * scaleX, center.y - center.y * scaleY);
    };
    /**
     *  rotation
     *
     *  @param {number} radians
     *  @returns {Matrix2D}
     */


    Matrix2D.rotation = function (radians) {
      var c = Math.cos(radians);
      var s = Math.sin(radians);
      return new Matrix2D(c, s, -s, c, 0, 0);
    };
    /**
     *  rotationAt
     *
     *  @param {number} radians
     *  @param {Point2D} center
     *  @returns {Matrix2D}
     */


    Matrix2D.rotationAt = function (radians, center) {
      var c = Math.cos(radians);
      var s = Math.sin(radians);
      return new Matrix2D(c, s, -s, c, center.x - center.x * c + center.y * s, center.y - center.y * c - center.x * s);
    };
    /**
     *  rotationFromVector
     *
     *  @param {Vector2D} vector
     *  @returns {Matrix2D}
     */


    Matrix2D.rotationFromVector = function (vector) {
      var unit = vector.unit();
      var c = unit.x; // cos

      var s = unit.y; // sin

      return new Matrix2D(c, s, -s, c, 0, 0);
    };
    /**
     *  xFlip
     *
     *  @returns {Matrix2D}
     */


    Matrix2D.xFlip = function () {
      return new Matrix2D(-1, 0, 0, 1, 0, 0);
    };
    /**
     *  yFlip
     *
     *  @returns {Matrix2D}
     */


    Matrix2D.yFlip = function () {
      return new Matrix2D(1, 0, 0, -1, 0, 0);
    };
    /**
     *  xSkew
     *
     *  @param {number} radians
     *  @returns {Matrix2D}
     */


    Matrix2D.xSkew = function (radians) {
      var t = Math.tan(radians);
      return new Matrix2D(1, 0, t, 1, 0, 0);
    };
    /**
     *  ySkew
     *
     *  @param {number} radians
     *  @returns {Matrix2D}
     */


    Matrix2D.ySkew = function (radians) {
      var t = Math.tan(radians);
      return new Matrix2D(1, t, 0, 1, 0, 0);
    }; // *** METHODS

    /**
     *  multiply
     *
     *  @param {Matrix2D} that
     *  @returns {Matrix2D}
     */


    Matrix2D.prototype.multiply = function (that) {
      if (this.isIdentity()) {
        return that;
      }

      if (that.isIdentity()) {
        return this;
      }

      return new this.constructor(this.a * that.a + this.c * that.b, this.b * that.a + this.d * that.b, this.a * that.c + this.c * that.d, this.b * that.c + this.d * that.d, this.a * that.e + this.c * that.f + this.e, this.b * that.e + this.d * that.f + this.f);
    };
    /**
     *  inverse
     *
     *  @returns {Matrix2D}
     */


    Matrix2D.prototype.inverse = function () {
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
    };
    /**
     *  translate
     *
     *  @param {number} tx
     *  @param {number} ty
     *  @returns {Matrix2D}
     */


    Matrix2D.prototype.translate = function (tx, ty) {
      return new this.constructor(this.a, this.b, this.c, this.d, this.a * tx + this.c * ty + this.e, this.b * tx + this.d * ty + this.f);
    };
    /**
     *  scale
     *
     *  @param {number} scale
     *  @returns {Matrix2D}
     */


    Matrix2D.prototype.scale = function (scale) {
      return new this.constructor(this.a * scale, this.b * scale, this.c * scale, this.d * scale, this.e, this.f);
    };
    /**
     *  scaleAt
     *
     *  @param {number} scale
     *  @param {Point2D} center
     *  @returns {Matrix2D}
     */


    Matrix2D.prototype.scaleAt = function (scale, center) {
      var dx = center.x - scale * center.x;
      var dy = center.y - scale * center.y;
      return new this.constructor(this.a * scale, this.b * scale, this.c * scale, this.d * scale, this.a * dx + this.c * dy + this.e, this.b * dx + this.d * dy + this.f);
    };
    /**
     *  scaleNonUniform
     *
     *  @param {number} scaleX
     *  @param {number} scaleY
     *  @returns {Matrix2D}
     */


    Matrix2D.prototype.scaleNonUniform = function (scaleX, scaleY) {
      return new this.constructor(this.a * scaleX, this.b * scaleX, this.c * scaleY, this.d * scaleY, this.e, this.f);
    };
    /**
     *  scaleNonUniformAt
     *
     *  @param {number} scaleX
     *  @param {number} scaleY
     *  @param {Point2D} center
     *  @returns {Matrix2D}
     */


    Matrix2D.prototype.scaleNonUniformAt = function (scaleX, scaleY, center) {
      var dx = center.x - scaleX * center.x;
      var dy = center.y - scaleY * center.y;
      return new this.constructor(this.a * scaleX, this.b * scaleX, this.c * scaleY, this.d * scaleY, this.a * dx + this.c * dy + this.e, this.b * dx + this.d * dy + this.f);
    };
    /**
     *  rotate
     *
     *  @param {number} radians
     *  @returns {Matrix2D}
     */


    Matrix2D.prototype.rotate = function (radians) {
      var c = Math.cos(radians);
      var s = Math.sin(radians);
      return new this.constructor(this.a * c + this.c * s, this.b * c + this.d * s, this.a * -s + this.c * c, this.b * -s + this.d * c, this.e, this.f);
    };
    /**
     *  rotateAt
     *
     *  @param {number} radians
     *  @param {Point2D} center
     *  @returns {Matrix2D}
     */


    Matrix2D.prototype.rotateAt = function (radians, center) {
      var cos = Math.cos(radians);
      var sin = Math.sin(radians);
      var cx = center.x;
      var cy = center.y;
      var a = this.a * cos + this.c * sin;
      var b = this.b * cos + this.d * sin;
      var c = this.c * cos - this.a * sin;
      var d = this.d * cos - this.b * sin;
      return new this.constructor(a, b, c, d, (this.a - a) * cx + (this.c - c) * cy + this.e, (this.b - b) * cx + (this.d - d) * cy + this.f);
    };
    /**
     *  rotateFromVector
     *
     *  @param {Vector2D} vector
     *  @returns {Matrix2D}
     */


    Matrix2D.prototype.rotateFromVector = function (vector) {
      var unit = vector.unit();
      var c = unit.x; // cos

      var s = unit.y; // sin

      return new this.constructor(this.a * c + this.c * s, this.b * c + this.d * s, this.a * -s + this.c * c, this.b * -s + this.d * c, this.e, this.f);
    };
    /**
     *  flipX
     *
     *  @returns {Matrix2D}
     */


    Matrix2D.prototype.flipX = function () {
      return new this.constructor(-this.a, -this.b, this.c, this.d, this.e, this.f);
    };
    /**
     *  flipY
     *
     *  @returns {Matrix2D}
     */


    Matrix2D.prototype.flipY = function () {
      return new this.constructor(this.a, this.b, -this.c, -this.d, this.e, this.f);
    };
    /**
     *  skewX
     *
     *  @param {number} radians
     *  @returns {Matrix2D}
     */


    Matrix2D.prototype.skewX = function (radians) {
      var t = Math.tan(radians);
      return new this.constructor(this.a, this.b, this.c + this.a * t, this.d + this.b * t, this.e, this.f);
    }; // TODO: skewXAt

    /**
     *  skewY
     *
     *  @param {number} radians
     *  @returns {Matrix2D}
     */


    Matrix2D.prototype.skewY = function (radians) {
      var t = Math.tan(radians);
      return new this.constructor(this.a + this.c * t, this.b + this.d * t, this.c, this.d, this.e, this.f);
    }; // TODO: skewYAt

    /**
     *  isIdentity
     *
     *  @returns {boolean}
     */


    Matrix2D.prototype.isIdentity = function () {
      return this.a === 1.0 && this.b === 0.0 && this.c === 0.0 && this.d === 1.0 && this.e === 0.0 && this.f === 0.0;
    };
    /**
     *  isInvertible
     *
     *  @returns {boolean}
     */


    Matrix2D.prototype.isInvertible = function () {
      return this.a * this.d - this.b * this.c !== 0.0;
    };
    /**
     *  getScale
     *
     *  @returns {{ scaleX: number, scaleY: number }}
     */


    Matrix2D.prototype.getScale = function () {
      return {
        scaleX: Math.sqrt(this.a * this.a + this.c * this.c),
        scaleY: Math.sqrt(this.b * this.b + this.d * this.d)
      };
    };
    /**
     *  getDecomposition
     *
     *  Calculates matrix Singular Value Decomposition
     *
     *  The resulting matrices, translation, rotation, scale, and rotation0, return
     *  this matrix when they are muliplied together in the listed order
     *
     *  @see Jim Blinn's article {@link http://dx.doi.org/10.1109/38.486688}
     *  @see {@link http://math.stackexchange.com/questions/861674/decompose-a-2d-arbitrary-transform-into-only-scaling-and-rotation}
     *
     *  @returns {{ translation: Matrix2D, rotation: Matrix2D, scale: Matrix2D, rotation0: Matrix2D }}
     */


    Matrix2D.prototype.getDecomposition = function () {
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
      var phi = (a2 + a1) * 0.5; // TODO: Add static methods to generate translation, rotation, etc.
      // matrices directly

      return {
        translation: new this.constructor(1, 0, 0, 1, this.e, this.f),
        rotation: this.constructor.IDENTITY.rotate(phi),
        scale: new this.constructor(scaleX, 0, 0, scaleY, 0, 0),
        rotation0: this.constructor.IDENTITY.rotate(theta)
      };
    };
    /**
     *  equals
     *
     *  @param {Matrix2D} that
     *  @returns {boolean}
     */


    Matrix2D.prototype.equals = function (that) {
      return this.a === that.a && this.b === that.b && this.c === that.c && this.d === that.d && this.e === that.e && this.f === that.f;
    };
    /**
     *  precisionEquals
     *
     *  @param {Matrix2D} that
     *  @param {number} precision
     *  @returns {boolean}
     */


    Matrix2D.prototype.precisionEquals = function (that, precision) {
      return Math.abs(this.a - that.a) < precision && Math.abs(this.b - that.b) < precision && Math.abs(this.c - that.c) < precision && Math.abs(this.d - that.d) < precision && Math.abs(this.e - that.e) < precision && Math.abs(this.f - that.f) < precision;
    };
    /**
     *  toString
     *
     *  @returns {string}
     */


    Matrix2D.prototype.toString = function () {
      return "matrix(" + [this.a, this.b, this.c, this.d, this.e, this.f].join(",") + ")";
    };

    // expose classes

    exports.Matrix2D = Matrix2D;
    exports.Point2D = Point2D;
    exports.Vector2D = Vector2D;

    Object.defineProperty(exports, '__esModule', { value: true });

}));
