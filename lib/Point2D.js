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
class Point2D {
    /**
     *  Point2D
     *
     *  @param {number} x
     *  @param {number} y
     *  @returns {module:kld-affine.Point2D}
     */
    constructor(x = 0, y = 0) {
        this.x = x;
        this.y = y;
    }

    /**
     *  clone
     *
     *  @returns {module:kld-affine.Point2D}
     */
    clone() {
        return new this.constructor(this.x, this.y);
    }

    /**
     *  add
     *
     *  @param {module:kld-affine.Point2D} that
     *  @returns {module:kld-affine.Point2D}
     */
    add(that) {
        return new this.constructor(this.x + that.x, this.y + that.y);
    }

    /**
     *  subtract
     *
     *  @param {module:kld-affine.Point2D} that
     *  @returns {module:kld-affine.Point2D}
     */
    subtract(that) {
        return new this.constructor(this.x - that.x, this.y - that.y);
    }

    /**
     *  multiply
     *
     *  @param {number} scalar
     *  @returns {module:kld-affine.Point2D}
     */
    multiply(scalar) {
        return new this.constructor(this.x * scalar, this.y * scalar);
    }

    /**
     *  divide
     *
     *  @param {number} scalar
     *  @returns {module:kld-affine.Point2D}
     */
    divide(scalar) {
        return new this.constructor(this.x / scalar, this.y / scalar);
    }

    /**
     *  equals
     *
     *  @param {module:kld-affine.Point2D} that
     *  @returns {boolean}
     */
    equals(that) {
        return (this.x === that.x && this.y === that.y);
    }

    /**
     *  precisionEquals
     *
     *  @param {module:kld-affine.Point2D} that
     *  @param {number} precision
     *  @returns {boolean}
     */
    precisionEquals(that, precision) {
        return (
            Math.abs(this.x - that.x) < precision &&
            Math.abs(this.y - that.y) < precision
        );
    }

    // utility methods

    /**
     *  lerp
     *
     *  @param {module:kld-affine.Point2D} that
     *  @param {number} t
     *  @returns {module:kld-affine.Point2D}
     */
    lerp(that, t) {
        const omt = 1.0 - t;

        return new this.constructor(
            this.x * omt + that.x * t,
            this.y * omt + that.y * t
        );
    }

    /**
     *  distanceFrom
     *
     *  @param {module:kld-affine.Point2D} that
     *  @returns {number}
     */
    distanceFrom(that) {
        const dx = this.x - that.x;
        const dy = this.y - that.y;

        return Math.sqrt(dx * dx + dy * dy);
    }

    /**
     *  min
     *
     *  @param {module:kld-affine.Point2D} that
     *  @returns {number}
     */
    min(that) {
        return new this.constructor(
            Math.min(this.x, that.x),
            Math.min(this.y, that.y)
        );
    }

    /**
     *  max
     *
     *  @param {module:kld-affine.Point2D} that
     *  @returns {number}
     */
    max(that) {
        return new this.constructor(
            Math.max(this.x, that.x),
            Math.max(this.y, that.y)
        );
    }

    /**
     *  transform
     *
     *  @param {module:kld-affine.Matrix2D} matrix
     *  @returns {module:kld-affine.Point2D}
     */
    transform(matrix) {
        return new this.constructor(
            matrix.a * this.x + matrix.c * this.y + matrix.e,
            matrix.b * this.x + matrix.d * this.y + matrix.f
        );
    }

    /**
     *  toString
     *
     *  @returns {string}
     */
    toString() {
        return `point(${this.x},${this.y})`;
    }
}

export default Point2D;
