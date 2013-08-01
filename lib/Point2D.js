/**
 *
 *   Point2D.js
 *
 *   copyright 2001-2002, 2013 Kevin Lindsey
 *
 */

/**
 *  Point2D
 *
 *  @param {Number} x
 *  @param {Number} y
 *  @returns {Point2D}
 */
function Point2D(x, y) {
    this.x = x;
    this.y = y;
}


/**
 *  clone
 *
 *  @returns {Point2D}
 */
Point2D.prototype.clone = function() {
    return new Point2D(this.x, this.y);
};


/**
 *  add
 *
 *  @param {Point2D} that
 *  @returns {Point2D}
 */
Point2D.prototype.add = function(that) {
    return new Point2D(this.x+that.x, this.y+that.y);
};


/**
 *  addEquals
 *
 *  @param {Point2D} that
 *  @returns {Point2D}
 */
Point2D.prototype.addEquals = function(that) {
    this.x += that.x;
    this.y += that.y;

    return this;
};

/**
 *  rmoveto
 *
 *  @param {Number} dx
 *  @param {Number} dy
 */
Point2D.prototype.rmoveto = function(dx, dy) {
    this.x += dx;
    this.y += dy;
};


/**
 *  scalarAdd
 *
 *  @param {Number} scalar
 *  @returns {Point2D}
 */
Point2D.prototype.scalarAdd = function(scalar) {
    return new Point2D(this.x+scalar, this.y+scalar);
};


/**
 *  scalarAddEquals
 *
 *  @param {Number} scalar
 *  @returns {Point2D}
 */
Point2D.prototype.scalarAddEquals = function(scalar) {
    this.x += scalar;
    this.y += scalar;

    return this;
};


/**
 *  subtract
 *
 *  @param {Point2D} that
 */
Point2D.prototype.subtract = function(that) {
    return new Point2D(this.x-that.x, this.y-that.y);
};


/**
 *  subtractEquals
 *
 *  @param {Point2D} that
 *  @returns {Point2D}
 */
Point2D.prototype.subtractEquals = function(that) {
    this.x -= that.x;
    this.y -= that.y;

    return this;
};


/**
 *  scalarSubtract
 *
 *  @param {Number} scalar
 *  @rertuns {Point2D}
 */
Point2D.prototype.scalarSubtract = function(scalar) {
    return new Point2D(this.x-scalar, this.y-scalar);
};


/**
 *  scalarSubtractEquals
 *
 *  @param {Number}
 *  @returns {Point2D}
 */
Point2D.prototype.scalarSubtractEquals = function(scalar) {
    this.x -= scalar;
    this.y -= scalar;

    return this;
};


/**
 *  multiply
 *
 *  @param {Number} scalar
 *  @returns {Point2D}
 */
Point2D.prototype.multiply = function(scalar) {
    return new Point2D(this.x*scalar, this.y*scalar);
};


/**
 *  multiplyEquals
 *
 *  @param {Number} scalar
 *  @returns {Point2D}
 */
Point2D.prototype.multiplyEquals = function(scalar) {
    this.x *= scalar;
    this.y *= scalar;

    return this;
};


/**
 *  divide
 *
 *  @param {Number} scalar
 *  @returns {Point2D}
 */
Point2D.prototype.divide = function(scalar) {
    return new Point2D(this.x/scalar, this.y/scalar);
};


/**
 *  divideEquals
 *
 *  @param {Number} scalar
 *  @returns {Point2D}
 */
Point2D.prototype.divideEquals = function(scalar) {
    this.x /= scalar;
    this.y /= scalar;

    return this;
};

/**
 *  compare
 *
 *  @param {Point2D} that
 *  @returns {Integer}
 */
Point2D.prototype.compare = function(that) {
    return (this.x - that.x || this.y - that.y);
};


/**
 *  equals
 *
 *  @param {Point2D} that
 *  @returns {Boolean}
 */
Point2D.prototype.equals = function(that) {
    return ( this.x == that.x && this.y == that.y );
};

// utility methods

/**
 *  lerp
 *
 *  @param {Point2D} that
 *  @param {Number} t
 @  @returns {Point2D}
 */
Point2D.prototype.lerp = function(that, t) {
    return new Point2D(
        this.x + (that.x - this.x) * t,
        this.y + (that.y - this.y) * t
    );
};


/**
 *  distanceFrom
 *
 *  @param {Point2D} that
 *  @returns {Number}
 */
Point2D.prototype.distanceFrom = function(that) {
    var dx = this.x - that.x;
    var dy = this.y - that.y;

    return Math.sqrt(dx*dx + dy*dy);
};


/**
 *  min
 *
 *  @param {Point2D} that
 *  @returns {Number}
 */
Point2D.prototype.min = function(that) {
    return new Point2D(
        Math.min( this.x, that.x ),
        Math.min( this.y, that.y )
    );
};


/**
 *  max
 *
 *  @param {Point2D} that
 *  @returns {Number}
 */
Point2D.prototype.max = function(that) {
    return new Point2D(
        Math.max( this.x, that.x ),
        Math.max( this.y, that.y )
    );
};


/**
 *  toString
 *
 *  @returns {String}
 */
Point2D.prototype.toString = function() {
    return this.x + "," + this.y;
};


// getters and setters

/**
 *  setXY
 *
 *  @param {Number} x
 *  @param {Number} y
 */
Point2D.prototype.setXY = function(x, y) {
    this.x = x;
    this.y = y;
};


/**
 *  setFromPoint
 *
 *  @param {Point2D} that
 */
Point2D.prototype.setFromPoint = function(that) {
    this.x = that.x;
    this.y = that.y;
};


/**
 *  swap
 *
 *  @param {Point2D}
 */
Point2D.prototype.swap = function(that) {
    var x = this.x;
    var y = this.y;

    this.x = that.x;
    this.y = that.y;

    that.x = x;
    that.y = y;
};

if (typeof module !== "undefined") {
    module.exports = Point2D;
}
