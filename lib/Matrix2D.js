/**
 *   Matrix2D
 *
 *   @copyright 2001-2002, 2013, 2017 Kevin Lindsey
 */
"use strict";

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
setReadonlyProperty(Matrix2D.IDENTITY, "isIdentity", () => true);


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
    setReadonlyProperty(this, "a", (a !== undefined) ? a : 1);
    setReadonlyProperty(this, "b", (b !== undefined) ? b : 0);
    setReadonlyProperty(this, "c", (c !== undefined) ? c : 0);
    setReadonlyProperty(this, "d", (d !== undefined) ? d : 1);
    setReadonlyProperty(this, "e", (e !== undefined) ? e : 0);
    setReadonlyProperty(this, "f", (f !== undefined) ? f : 0);
}


// *** STATIC METHODS

/**
 *  translation
 *
 *  @param {number} tx
 *  @param {number} ty
 *  @returns {Matrix2D}
 */
Matrix2D.translation = function(tx, ty) {
    return new Matrix2D(1, 0, 0, 1, tx, ty);
};

/**
 *  scaling
 *
 *  @param {number} scale
 *  @returns {Matrix2D}
 */
Matrix2D.scaling = function(scale) {
    return new Matrix2D(scale, 0, 0, scale, 0, 0);
};

/**
 *  scalingAt
 *
 *  @param {number} scale
 *  @param {Point2D} center
 *  @returns {Matrix2D}
 */
Matrix2D.scalingAt = function(scale, center) {
    return new Matrix2D(
        scale,
        0,
        0,
        scale,
        center.x - center.x * scale,
        center.y - center.y * scale
    );
};


/**
 *  nonUniformScaling
 *
 *  @param {number} scaleX
 *  @param {number} scaleY
 *  @returns {Matrix2D}
 */
Matrix2D.nonUniformScaling = function(scaleX, scaleY) {
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
Matrix2D.nonUniformScalingAt = function(scaleX, scaleY, center) {
    return new Matrix2D(
        scaleX,
        0,
        0,
        scaleY,
        center.x - center.x * scaleX,
        center.y - center.y * scaleY
    );
};

/**
 *  rotation
 *
 *  @param {number} radians
 *  @returns {Matrix2D}
 */
Matrix2D.rotation = function(radians) {
    let c = Math.cos(radians);
    let s = Math.sin(radians);

    return new Matrix2D(c, s, -s, c, 0, 0);
};

/**
 *  rotationAt
 *
 *  @param {number} radians
 *  @param {Point2D} center
 *  @returns {Matrix2D}
 */
Matrix2D.rotationAt = function(radians, center) {
    let c = Math.cos(radians);
    let s = Math.sin(radians);

    return new Matrix2D(
        c,
        s,
        -s,
        c,
        center.x - center.x * c + center.y * s,
        center.y - center.y * c - center.x * s
    );
};

/**
 *  rotationFromVector
 *
 *  @param {Vector2D} vector
 *  @returns {Matrix2D}
 */
Matrix2D.rotationFromVector = function(vector) {
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
Matrix2D.xFlip = function() {
    return new Matrix2D(-1, 0, 0, 1, 0, 0);
};

/**
 *  yFlip
 *
 *  @returns {Matrix2D}
 */
Matrix2D.yFlip = function() {
    return new Matrix2D(1, 0, 0, -1, 0, 0);
};

/**
 *  xSkew
 *
 *  @param {number} radians
 *  @returns {Matrix2D}
 */
Matrix2D.xSkew = function(radians) {
    var t = Math.tan(radians);

    return new Matrix2D(1, 0, t, 1, 0, 0);
};

/**
 *  ySkew
 *
 *  @param {number} radians
 *  @returns {Matrix2D}
 */
Matrix2D.ySkew = function(radians) {
    var t = Math.tan(radians);

    return new Matrix2D(1, t, 0, 1, 0, 0);
};


// *** METHODS

/**
 *  multiply
 *
 *  @param {Matrix2D} that
 *  @returns {Matrix2D}
 */
Matrix2D.prototype.multiply = function(that) {
    if (this.isIdentity()) {
        return that;
    }

    if (that.isIdentity()) {
        return this;
    }

    return new this.constructor(
        this.a * that.a + this.c * that.b,
        this.b * that.a + this.d * that.b,
        this.a * that.c + this.c * that.d,
        this.b * that.c + this.d * that.d,
        this.a * that.e + this.c * that.f + this.e,
        this.b * that.e + this.d * that.f + this.f
    );
};

/**
 *  inverse
 *
 *  @returns {Matrix2D}
 */
Matrix2D.prototype.inverse = function() {
    if (this.isIdentity()) {
        return this;
    }

    var det1 = this.a * this.d - this.b * this.c;

    if ( det1 === 0.0 ) {
        throw("Matrix is not invertible");
    }

    var idet = 1.0 / det1;
    var det2 = this.f * this.c - this.e * this.d;
    var det3 = this.e * this.b - this.f * this.a;

    return new this.constructor(
        this.d * idet,
        -this.b * idet,
        -this.c * idet,
        this.a * idet,
        det2 * idet,
        det3 * idet
    );
};

/**
 *  translate
 *
 *  @param {number} tx
 *  @param {number} ty
 *  @returns {Matrix2D}
 */
Matrix2D.prototype.translate = function(tx, ty) {
    return new this.constructor(
        this.a,
        this.b,
        this.c,
        this.d,
        this.a * tx + this.c * ty + this.e,
        this.b * tx + this.d * ty + this.f
    );
};

/**
 *  scale
 *
 *  @param {number} scale
 *  @returns {Matrix2D}
 */
Matrix2D.prototype.scale = function(scale) {
    return new this.constructor(
        this.a * scale,
        this.b * scale,
        this.c * scale,
        this.d * scale,
        this.e,
        this.f
    );
};

/**
 *  scaleAt
 *
 *  @param {number} scale
 *  @param {Point2D} center
 *  @returns {Matrix2D}
 */
Matrix2D.prototype.scaleAt = function(scale, center) {
    var dx = center.x - scale * center.x;
    var dy = center.y - scale * center.y;

    return new this.constructor(
        this.a * scale,
        this.b * scale,
        this.c * scale,
        this.d * scale,
        this.a * dx + this.c * dy + this.e,
        this.b * dx + this.d * dy + this.f
    );
};

/**
 *  scaleNonUniform
 *
 *  @param {number} scaleX
 *  @param {number} scaleY
 *  @returns {Matrix2D}
 */
Matrix2D.prototype.scaleNonUniform = function(scaleX, scaleY) {
    return new this.constructor(
        this.a * scaleX,
        this.b * scaleX,
        this.c * scaleY,
        this.d * scaleY,
        this.e,
        this.f
    );
};

/**
 *  scaleNonUniformAt
 *
 *  @param {number} scaleX
 *  @param {number} scaleY
 *  @param {Point2D} center
 *  @returns {Matrix2D}
 */
Matrix2D.prototype.scaleNonUniformAt = function(scaleX, scaleY, center) {
    var dx = center.x - scaleX * center.x;
    var dy = center.y - scaleY * center.y;

    return new this.constructor(
        this.a * scaleX,
        this.b * scaleX,
        this.c * scaleY,
        this.d * scaleY,
        this.a * dx + this.c * dy + this.e,
        this.b * dx + this.d * dy + this.f
    );
};

/**
 *  rotate
 *
 *  @param {number} radians
 *  @returns {Matrix2D}
 */
Matrix2D.prototype.rotate = function(radians) {
    var c = Math.cos(radians);
    var s = Math.sin(radians);

    return new this.constructor(
        this.a *  c + this.c * s,
        this.b *  c + this.d * s,
        this.a * -s + this.c * c,
        this.b * -s + this.d * c,
        this.e,
        this.f
    );
};

/**
 *  rotateAt
 *
 *  @param {number} radians
 *  @param {Point2D} center
 *  @returns {Matrix2D}
 */
Matrix2D.prototype.rotateAt = function(radians, center) {
    var cos = Math.cos(radians);
    var sin = Math.sin(radians);
    var cx = center.x;
    var cy = center.y;

    var a = this.a * cos + this.c * sin;
    var b = this.b * cos + this.d * sin;
    var c = this.c * cos - this.a * sin;
    var d = this.d * cos - this.b * sin;

    return new this.constructor(
        a,
        b,
        c,
        d,
        (this.a - a) * cx + (this.c - c) * cy + this.e,
        (this.b - b) * cx + (this.d - d) * cy + this.f
    );
};

/**
 *  rotateFromVector
 *
 *  @param {Vector2D} vector
 *  @returns {Matrix2D}
 */
Matrix2D.prototype.rotateFromVector = function(vector) {
    var unit = vector.unit();
    var c = unit.x; // cos
    var s = unit.y; // sin

    return new this.constructor(
        this.a *  c + this.c * s,
        this.b *  c + this.d * s,
        this.a * -s + this.c * c,
        this.b * -s + this.d * c,
        this.e,
        this.f
    );
};

/**
 *  flipX
 *
 *  @returns {Matrix2D}
 */
Matrix2D.prototype.flipX = function() {
    return new this.constructor(
        -this.a,
        -this.b,
        this.c,
        this.d,
        this.e,
        this.f
    );
};

/**
 *  flipY
 *
 *  @returns {Matrix2D}
 */
Matrix2D.prototype.flipY = function() {
    return new this.constructor(
        this.a,
        this.b,
        -this.c,
        -this.d,
        this.e,
        this.f
    );
};

/**
 *  skewX
 *
 *  @param {number} radians
 *  @returns {Matrix2D}
 */
Matrix2D.prototype.skewX = function(radians) {
    var t = Math.tan(radians);

    return new this.constructor(
        this.a,
        this.b,
        this.c + this.a * t,
        this.d + this.b * t,
        this.e,
        this.f
    );
};

// TODO: skewXAt

/**
 *  skewY
 *
 *  @param {number} radians
 *  @returns {Matrix2D}
 */
Matrix2D.prototype.skewY = function(radians) {
    var t = Math.tan(radians);

    return new this.constructor(
        this.a + this.c * t,
        this.b + this.d * t,
        this.c,
        this.d,
        this.e,
        this.f
    );
};

// TODO: skewYAt

/**
 *  isIdentity
 *
 *  @returns {boolean}
 */
Matrix2D.prototype.isIdentity = function() {
    return (
        this.a === 1.0 &&
        this.b === 0.0 &&
        this.c === 0.0 &&
        this.d === 1.0 &&
        this.e === 0.0 &&
        this.f === 0.0
    );
};

/**
 *  isInvertible
 *
 *  @returns {boolean}
 */
Matrix2D.prototype.isInvertible = function() {
    return this.a * this.d - this.b * this.c !== 0.0;
};

/**
 *  getScale
 *
 *  @returns {{ scaleX: number, scaleY: number }}
 */
Matrix2D.prototype.getScale = function() {
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
Matrix2D.prototype.getDecomposition = function() {
    var E      = (this.a + this.d) * 0.5;
    var F      = (this.a - this.d) * 0.5;
    var G      = (this.b + this.c) * 0.5;
    var H      = (this.b - this.c) * 0.5;

    var Q      = Math.sqrt(E * E + H * H);
    var R      = Math.sqrt(F * F + G * G);
    var scaleX = Q + R;
    var scaleY = Q - R;

    var a1     = Math.atan2(G, F);
    var a2     = Math.atan2(H, E);
    var theta  = (a2 - a1) * 0.5;
    var phi    = (a2 + a1) * 0.5;

    // TODO: Add static methods to generate translation, rotation, etc.
    // matrices directly

    return {
        translation: new this.constructor(1, 0, 0, 1, this.e, this.f),
        rotation:    this.constructor.IDENTITY.rotate(phi),
        scale:       new this.constructor(scaleX, 0, 0, scaleY, 0, 0),
        rotation0:   this.constructor.IDENTITY.rotate(theta)
    };
};

/**
 *  equals
 *
 *  @param {Matrix2D} that
 *  @returns {boolean}
 */
Matrix2D.prototype.equals = function(that) {
    return (
        this.a === that.a &&
        this.b === that.b &&
        this.c === that.c &&
        this.d === that.d &&
        this.e === that.e &&
        this.f === that.f
    );
};

/**
 *  precisionEquals
 *
 *  @param {Matrix2D} that
 *  @param {number} precision
 *  @returns {boolean}
 */
Matrix2D.prototype.precisionEquals = function(that, precision) {
    return (
        Math.abs(this.a - that.a) < precision &&
        Math.abs(this.b - that.b) < precision &&
        Math.abs(this.c - that.c) < precision &&
        Math.abs(this.d - that.d) < precision &&
        Math.abs(this.e - that.e) < precision &&
        Math.abs(this.f - that.f) < precision
    );
};

/**
 *  toString
 *
 *  @returns {string}
 */
Matrix2D.prototype.toString = function() {
    return "matrix(" + [this.a, this.b, this.c, this.d, this.e, this.f].join(",") + ")";
};

if (typeof module !== "undefined") {
    module.exports = Matrix2D;
}
