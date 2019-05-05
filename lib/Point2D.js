/**
 *   Point2D
 *
 *   @copyright 2001-2002, 2013, 2017 Kevin Lindsey
 */
"use strict";

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
Point2D.prototype.clone = function() {
    return new this.constructor(this.x, this.y);
};

/**
 *  add
 *
 *  @param {Point2D|Vector2D} that
 *  @returns {Point2D}
 */
Point2D.prototype.add = function(that) {
    return new this.constructor(this.x+that.x, this.y+that.y);
};

/**
 *  subtract
 *
 *  @param { Vector2D | Point2D } that
 *  @returns {Point2D}
 */
Point2D.prototype.subtract = function(that) {
    return new this.constructor(this.x-that.x, this.y-that.y);
};

/**
 *  multiply
 *
 *  @param {number} scalar
 *  @returns {Point2D}
 */
Point2D.prototype.multiply = function(scalar) {
    return new this.constructor(this.x*scalar, this.y*scalar);
};

/**
 *  divide
 *
 *  @param {number} scalar
 *  @returns {Point2D}
 */
Point2D.prototype.divide = function(scalar) {
    return new this.constructor(this.x/scalar, this.y/scalar);
};

/**
 *  equals
 *
 *  @param {Point2D} that
 *  @returns {boolean}
 */
Point2D.prototype.equals = function(that) {
    return ( this.x === that.x && this.y === that.y );
};

/**
 *  precisionEquals
 *
 *  @param {Point2D} that
 *  @param {number} precision
 *  @returns {boolean}
 */
Point2D.prototype.precisionEquals = function(that, precision) {
    return (
        Math.abs(this.x - that.x) < precision &&
        Math.abs(this.y - that.y) < precision
    );
};

// utility methods

/**
 *  lerp
 *
 *  @param { Vector2D | Point2D } that
 *  @param {number} t
 @  @returns {Point2D}
 */
Point2D.prototype.lerp = function(that, t) {
    const omt = 1.0 - t;

    return new this.constructor(
        this.x * omt + that.x * t,
        this.y * omt + that.y * t
    );
};

/**
 *  distanceFrom
 *
 *  @param {Point2D} that
 *  @returns {number}
 */
Point2D.prototype.distanceFrom = function(that) {
    const dx = this.x - that.x;
    const dy = this.y - that.y;

    return Math.sqrt(dx*dx + dy*dy);
};

/**
 *  min
 *
 *  @param {Point2D} that
 *  @returns {number}
 */
Point2D.prototype.min = function(that) {
    return new this.constructor(
        Math.min( this.x, that.x ),
        Math.min( this.y, that.y )
    );
};

/**
 *  max
 *
 *  @param {Point2D} that
 *  @returns {number}
 */
Point2D.prototype.max = function(that) {
    return new this.constructor(
        Math.max( this.x, that.x ),
        Math.max( this.y, that.y )
    );
};

/**
 *  transform
 *
 *  @param {Matrix2D} matrix
 *  @returns {Point2D}
 */
Point2D.prototype.transform = function(matrix) {
    return new this.constructor(
        matrix.a * this.x + matrix.c * this.y + matrix.e,
        matrix.b * this.x + matrix.d * this.y + matrix.f
    );
};

/**
 *  toString
 *
 *  @returns {string}
 */
Point2D.prototype.toString = function() {
    return "point(" + this.x + "," + this.y + ")";
};

if (typeof module !== "undefined") {
    module.exports = Point2D;
}
