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
class Vector2D {
    /**
     *  Vector2D
     *
     *  @param {number} x
     *  @param {number} y
     *  @returns {module:kld-affine.Vector2D}
     */
    constructor(x = 0, y = 0) {
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
    static fromPoints(p1, p2) {
        return new Vector2D(
            p2.x - p1.x,
            p2.y - p1.y
        );
    }

    /**
     *  length
     *
     *  @returns {number}
     */
    length() {
        return Math.sqrt(this.x * this.x + this.y * this.y);
    }

    /**
     *  magnitude
     *
     *  @returns {number}
     */
    magnitude() {
        return this.x * this.x + this.y * this.y;
    }

    /**
     *  dot
     *
     *  @param {module:kld-affine.Vector2D} that
     *  @returns {number}
     */
    dot(that) {
        return this.x * that.x + this.y * that.y;
    }

    /**
     *  cross
     *
     *  @param {module:kld-affine.Vector2D} that
     *  @returns {number}
     */
    cross(that) {
        return this.x * that.y - this.y * that.x;
    }

    /**
     *  determinant
     *
     *  @param {module:kld-affine.Vector2D} that
     *  @returns {number}
     */
    determinant(that) {
        return this.x * that.y - this.y * that.x;
    }

    /**
     *  unit
     *
     *  @returns {module:kld-affine.Vector2D}
     */
    unit() {
        return this.divide(this.length());
    }

    /**
     *  add
     *
     *  @param {module:kld-affine.Vector2D} that
     *  @returns {module:kld-affine.Vector2D}
     */
    add(that) {
        return new this.constructor(this.x + that.x, this.y + that.y);
    }

    /**
     *  subtract
     *
     *  @param {module:kld-affine.Vector2D} that
     *  @returns {module:kld-affine.Vector2D}
     */
    subtract(that) {
        return new this.constructor(this.x - that.x, this.y - that.y);
    }

    /**
     *  multiply
     *
     *  @param {number} scalar
     *  @returns {module:kld-affine.Vector2D}
     */
    multiply(scalar) {
        return new this.constructor(this.x * scalar, this.y * scalar);
    }

    /**
     *  divide
     *
     *  @param {number} scalar
     *  @returns {module:kld-affine.Vector2D}
     */
    divide(scalar) {
        return new this.constructor(this.x / scalar, this.y / scalar);
    }

    /**
     *  angleBetween
     *
     *  @param {module:kld-affine.Vector2D} that
     *  @returns {number}
     */
    angleBetween(that) {
        let cos = this.dot(that) / (this.length() * that.length());
        cos = Math.max(-1, Math.min(cos, 1));
        const radians = Math.acos(cos);

        return (this.cross(that) < 0.0) ? -radians : radians;
    }

    /**
     *  Find a vector is that is perpendicular to this vector
     *
     *  @returns {module:kld-affine.Vector2D}
     */
    perp() {
        return new this.constructor(-this.y, this.x);
    }

    /**
     *  Find the component of the specified vector that is perpendicular to
     *  this vector
     *
     *  @param {module:kld-affine.Vector2D} that
     *  @returns {module:kld-affine.Vector2D}
     */
    perpendicular(that) {
        return this.subtract(this.project(that));
    }

    /**
     *  project
     *
     *  @param {module:kld-affine.Vector2D} that
     *  @returns {module:kld-affine.Vector2D}
     */
    project(that) {
        const percent = this.dot(that) / that.dot(that);

        return that.multiply(percent);
    }

    /**
     *  transform
     *
     *  @param {module:kld-affine.Matrix2D} matrix
     *  @returns {module:kld-affine.Vector2D}
     */
    transform(matrix) {
        return new this.constructor(
            matrix.a * this.x + matrix.c * this.y,
            matrix.b * this.x + matrix.d * this.y
        );
    }

    /**
     *  equals
     *
     *  @param {module:kld-affine.Vector2D} that
     *  @returns {boolean}
     */
    equals(that) {
        return (
            this.x === that.x &&
            this.y === that.y
        );
    }

    /**
     *  precisionEquals
     *
     *  @param {module:kld-affine.Vector2D} that
     *  @param {number} precision
     *  @returns {boolean}
     */
    precisionEquals(that, precision) {
        return (
            Math.abs(this.x - that.x) < precision &&
            Math.abs(this.y - that.y) < precision
        );
    }

    /**
     *  toString
     *
     *  @returns {string}
     */
    toString() {
        return `vector(${this.x},${this.y})`;
    }
}

export default Vector2D;
