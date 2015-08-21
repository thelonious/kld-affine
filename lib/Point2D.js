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
 *  @param {Number} y ignored if x is a Point2D
 *  @returns {Point2D}
 */
function Point2D(x, y) {
    if(!(this instanceof Point2D)){
        return;
    }
    if(x instanceof Point2D){
        y = x.y;
        x = x.x;
    } else {
        x = Number(x) || 0;
        y = Number(y) || 0;
    }
    Object.defineProperties(this, {
        "x": {
            value: x,
            writable: false,
            enumerable: true,
            configurable: false
        },
        "y": {
            value: y,
            writable: false,
            enumerable: true,
            configurable: false
        }
    });
    // this.x = x;
    // this.y = y;
}

/**
 *  Point2D clone()
 *
 *  @returns {Point2D}
 */
Point2D.prototype.clone = function() {
    return new Point2D(this);
};

/**
 *  Point2D add(Point2D that)
 *
 *  @param {Point2D|Vector2D} that
 *  @returns {Point2D}
 */
Point2D.prototype.add = function(that) {
    if(!(that instanceof Point2D)){
        var errMsg = 'that must be a Point2D object';
        errMsg += ' but ' + typeof(that) + ' is given';
        thow new TypeError(errMessage);
    }
    return new Point2D(this.x+that.x, this.y+that.y);
};

/**
 *  Point2D subtract(Point2D that)
 *
 *  @param { Vector2D | Point2D } that
 *  @returns {Point2D}
 */
Point2D.prototype.subtract = function(that) {
    if(!(that instanceof Point2D)){
        var errMsg = 'that must be a Point2D object';
        errMsg += ' but ' + typeof(that) + ' is given';
        thow new TypeError(errMessage);
    }
    return new Point2D(this.x-that.x, this.y-that.y);
};

/**
 *  Point2D multiply(number scalar)
 *
 *  @param {Number} scalar
 *  @returns {Point2D}
 */
Point2D.prototype.multiply = function(scalar) {
    scalar = Number(scalar);
    if(scalar !== scalar){ // scalar is NaN
        var errMsg = 'scalar must be a number value';
        thow new TypeError(errMessage);
    }
    return new Point2D(this.x*scalar, this.y*scalar);
};

/**
 *  Point2D divide(number scalar)
 *
 *  @param {Number} scalar
 *  @returns {Point2D}
 */
Point2D.prototype.divide = function(scalar) {
    scalar = Number(scalar);
    if(scalar !== scalar){ // scalar is NaN
        var errMsg = 'scalar must be a number value';
        thow new TypeError(errMessage);
    }
    return new Point2D(this.x/scalar, this.y/scalar);
};

/**
 *  boolean equals(Point2D that)
 *
 *  @param {Point2D} that
 *  @returns {Boolean}
 */
Point2D.prototype.equals = function(that) {
    if(!(that instanceof Point2D)){
        var errMsg = 'that must be a Point2D object';
        errMsg += ' but ' + typeof(that) + ' is given';
        thow new TypeError(errMessage);
    }
    return ( this.x === that.x && this.y === that.y );
};

// utility methods

/**
 *  Point2D lerp(Point2D that, number t)
 *
 *  @param { Vector2D | Point2D } that
 *  @param {Number} t
 @  @returns {Point2D}
 */
Point2D.prototype.lerp = function(that, t) {
    var omt;
    if(!(that instanceof Point2D)){
        var errMsg = 'that must be a Point2D object';
        errMsg += ' but ' + typeof(that) + ' is given';
        thow new TypeError(errMessage);
    }
    t = Number(t);
    if(t !== t){ // if t = NaN
        var errMsg = 't must be a number value';
        throw TypeError(errMsg);
    }
    omt = 1.0 - t;

    return new Point2D(
        this.x * omt + that.x * t,
        this.y * omt + that.y * t
    );
};

/**
 *  number distanceFrom(Point2D that)
 *
 *  @param {Point2D} that
 *  @returns {Number}
 */
Point2D.prototype.distanceFrom = function(that) {
    if(!(that instanceof Point2D)){
        var errMsg = 'that must be a Point2D object';
        errMsg += ' but ' + typeof(that) + ' is given';
        thow new TypeError(errMessage);
    }
    var dx = this.x - that.x;
    var dy = this.y - that.y;

    return Math.sqrt(dx*dx + dy*dy);
};

/**
 *  Point2D min(Point2D that)
 *
 *  @param {Point2D} that
 *  @returns {Number}
 */
Point2D.prototype.min = function(that) {
    if(!(that instanceof Point2D)){
        var errMsg = 'that must be a Point2D object';
        errMsg += ' but ' + typeof(that) + ' is given';
        thow new TypeError(errMessage);
    }
    return new Point2D(
        Math.min( this.x, that.x ),
        Math.min( this.y, that.y )
    );
};

/**
 *  Point2D max(Point2D that)
 *
 *  @param {Point2D} that
 *  @returns {Number}
 */
Point2D.prototype.max = function(that) {
    if(!(that instanceof Point2D)){
        var errMsg = 'that must be a Point2D object';
        errMsg += ' but ' + typeof(that) + ' is given';
        thow new TypeError(errMessage);
    }
    return new Point2D(
        Math.max( this.x, that.x ),
        Math.max( this.y, that.y )
    );
};

/**
 *  Point2D transform(Matrix2D matrix)
 *
 *  @param {Matrix2D}
 *  @result {Point2D}
 */
Point2D.prototype.transform = function(matrix) {
    if(!(matrix instanceof Matrix2D)){
        var errMsg = 'matrix must be a Matrix2D object';
        errMsg += ' but ' + typeof(that) + ' is given';
        thow new TypeError(errMessage);
    }
    return new Point2D(
        matrix.a * this.x + matrix.c * this.y + matrix.e,
        matrix.b * this.x + matrix.d * this.y + matrix.f
    );
};

/**
 *  string toString()
 *
 *  @returns {String}
 */
Point2D.prototype.toString = function() {
    return "point(" + this.x + "," + this.y + ")";
};

if (typeof module !== "undefined") {
    module.exports = Point2D;
}
