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
Vector2D.fromPoints = function(p1, p2) {
    return new Vector2D(
        p2.x - p1.x,
        p2.y - p1.y
    );
};

/**
 *  length
 *
 *  @returns {number}
 */
Vector2D.prototype.length = function() {
    return Math.sqrt(this.x * this.x + this.y * this.y);
};

/**
 *  magnitude
 *
 *  @returns {number}
 */
Vector2D.prototype.magnitude = function() {
    return this.x * this.x + this.y * this.y;
};

/**
 *  dot
 *
 *  @param {Vector2D} that
 *  @returns {number}
 */
Vector2D.prototype.dot = function(that) {
    return this.x * that.x + this.y * that.y;
};

/**
 *  cross
 *
 *  @param {Vector2D} that
 *  @returns {number}
 */
Vector2D.prototype.cross = function(that) {
    return this.x * that.y - this.y * that.x;
};

/**
 *  determinant
 *
 *  @param {Vector2D} that
 *  @returns {number}
 */
Vector2D.prototype.determinant = function(that) {
    return this.x * that.y - this.y * that.x;
};

/**
 *  unit
 *
 *  @returns {Vector2D}
 */
Vector2D.prototype.unit = function() {
    return this.divide(this.length());
};

/**
 *  add
 *
 *  @param {Vector2D} that
 *  @returns {Vector2D}
 */
Vector2D.prototype.add = function(that) {
    return new this.constructor(this.x + that.x, this.y + that.y);
};

/**
 *  subtract
 *
 *  @param {Vector2D} that
 *  @returns {Vector2D}
 */
Vector2D.prototype.subtract = function(that) {
    return new this.constructor(this.x - that.x, this.y - that.y);
};

/**
 *  multiply
 *
 *  @param {number} scalar
 *  @returns {Vector2D}
 */
Vector2D.prototype.multiply = function(scalar) {
    return new this.constructor(this.x * scalar, this.y * scalar);
};

/**
 *  divide
 *
 *  @param {number} scalar
 *  @returns {Vector2D}
 */
Vector2D.prototype.divide = function(scalar) {
    return new this.constructor(this.x / scalar, this.y / scalar);
};

/**
 *  angleBetween
 *
 *  @param {Vector2D} that
 *  @returns {number}
 */
Vector2D.prototype.angleBetween = function(that) {
    let cos = this.dot(that) / (this.length() * that.length());
    cos = Math.max(-1, Math.min(cos, 1));
    const radians = Math.acos(cos);

    return (this.cross(that) < 0.0) ? -radians : radians;
};

/**
 *  Find a vector is that is perpendicular to this vector
 *
 *  @returns {Vector2D}
 */
Vector2D.prototype.perp = function() {
    return new this.constructor(-this.y, this.x);
};

/**
 *  Find the component of the specified vector that is perpendicular to
 *  this vector
 *
 *  @param {Vector2D} that
 *  @returns {Vector2D}
 */
Vector2D.prototype.perpendicular = function(that) {
    return this.subtract(this.project(that));
};

/**
 *  project
 *
 *  @param {Vector2D} that
 *  @returns {Vector2D}
 */
Vector2D.prototype.project = function(that) {
    const percent = this.dot(that) / that.dot(that);

    return that.multiply(percent);
};

/**
 *  transform
 *
 *  @param {Matrix2D} matrix
 *  @returns {Vector2D}
 */
Vector2D.prototype.transform = function(matrix) {
    return new this.constructor(
        matrix.a * this.x + matrix.c * this.y,
        matrix.b * this.x + matrix.d * this.y
    );
};

/**
 *  equals
 *
 *  @param {Vector2D} that
 *  @returns {boolean}
 */
Vector2D.prototype.equals = function(that) {
    return (
        this.x === that.x &&
        this.y === that.y
    );
};

/**
 *  precisionEquals
 *
 *  @param {Vector2D} that
 *  @param {number} precision
 *  @returns {boolean}
 */
Vector2D.prototype.precisionEquals = function(that, precision) {
    return (
        Math.abs(this.x - that.x) < precision &&
        Math.abs(this.y - that.y) < precision
    );
};

/**
 *  toString
 *
 *  @returns {string}
 */
Vector2D.prototype.toString = function() {
    return "vector(" + this.x + "," + this.y + ")";
};

export default Vector2D;
