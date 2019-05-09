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
class Matrix2D {
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
    constructor(a = 1, b = 0, c = 0, d = 1, e = 0, f = 0) {
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
    static translation(tx, ty) {
        return new Matrix2D(1, 0, 0, 1, tx, ty);
    }

    /**
     *  scaling
     *
     *  @param {number} scale
     *  @returns {module:kld-affine.Matrix2D}
     */
    static scaling(scale) {
        return new Matrix2D(scale, 0, 0, scale, 0, 0);
    }

    /**
     *  scalingAt
     *
     *  @param {number} scale
     *  @param {module:kld-affine.Point2D} center
     *  @returns {module:kld-affine.Matrix2D}
     */
    static scalingAt(scale, center) {
        return new Matrix2D(
            scale,
            0,
            0,
            scale,
            center.x - center.x * scale,
            center.y - center.y * scale
        );
    }

    /**
     *  nonUniformScaling
     *
     *  @param {number} scaleX
     *  @param {number} scaleY
     *  @returns {module:kld-affine.Matrix2D}
     */
    static nonUniformScaling(scaleX, scaleY) {
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
    static nonUniformScalingAt(scaleX, scaleY, center) {
        return new Matrix2D(
            scaleX,
            0,
            0,
            scaleY,
            center.x - center.x * scaleX,
            center.y - center.y * scaleY
        );
    }

    /**
     *  rotation
     *
     *  @param {number} radians
     *  @returns {module:kld-affine.Matrix2D}
     */
    static rotation(radians) {
        const c = Math.cos(radians);
        const s = Math.sin(radians);

        return new Matrix2D(c, s, -s, c, 0, 0);
    }

    /**
     *  rotationAt
     *
     *  @param {number} radians
     *  @param {module:kld-affine.Point2D} center
     *  @returns {module:kld-affine.Matrix2D}
     */
    static rotationAt(radians, center) {
        const c = Math.cos(radians);
        const s = Math.sin(radians);

        return new Matrix2D(
            c,
            s,
            -s,
            c,
            center.x - center.x * c + center.y * s,
            center.y - center.y * c - center.x * s
        );
    }

    /**
     *  rotationFromVector
     *
     *  @param {module:kld-affine.Vector2D} vector
     *  @returns {module:kld-affine.Matrix2D}
     */
    static rotationFromVector(vector) {
        const unit = vector.unit();
        const c = unit.x; // cos
        const s = unit.y; // sin

        return new Matrix2D(c, s, -s, c, 0, 0);
    }

    /**
     *  xFlip
     *
     *  @returns {module:kld-affine.Matrix2D}
     */
    static xFlip() {
        return new Matrix2D(-1, 0, 0, 1, 0, 0);
    }

    /**
     *  yFlip
     *
     *  @returns {module:kld-affine.Matrix2D}
     */
    static yFlip() {
        return new Matrix2D(1, 0, 0, -1, 0, 0);
    }

    /**
     *  xSkew
     *
     *  @param {number} radians
     *  @returns {module:kld-affine.Matrix2D}
     */
    static xSkew(radians) {
        const t = Math.tan(radians);

        return new Matrix2D(1, 0, t, 1, 0, 0);
    }

    /**
     *  ySkew
     *
     *  @param {number} radians
     *  @returns {module:kld-affine.Matrix2D}
     */
    static ySkew(radians) {
        const t = Math.tan(radians);

        return new Matrix2D(1, t, 0, 1, 0, 0);
    }

    /**
     *  multiply
     *
     *  @param {module:kld-affine.Matrix2D} that
     *  @returns {module:kld-affine.Matrix2D}
     */
    multiply(that) {
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
    }

    /**
     *  inverse
     *
     *  @returns {module:kld-affine.Matrix2D}
     */
    inverse() {
        if (this.isIdentity()) {
            return this;
        }

        const det1 = this.a * this.d - this.b * this.c;

        if (det1 === 0.0) {
            throw new Error("Matrix is not invertible");
        }

        const idet = 1.0 / det1;
        const det2 = this.f * this.c - this.e * this.d;
        const det3 = this.e * this.b - this.f * this.a;

        return new this.constructor(
            this.d * idet,
            -this.b * idet,
            -this.c * idet,
            this.a * idet,
            det2 * idet,
            det3 * idet
        );
    }

    /**
     *  translate
     *
     *  @param {number} tx
     *  @param {number} ty
     *  @returns {module:kld-affine.Matrix2D}
     */
    translate(tx, ty) {
        return new this.constructor(
            this.a,
            this.b,
            this.c,
            this.d,
            this.a * tx + this.c * ty + this.e,
            this.b * tx + this.d * ty + this.f
        );
    }

    /**
     *  scale
     *
     *  @param {number} scale
     *  @returns {module:kld-affine.Matrix2D}
     */
    scale(scale) {
        return new this.constructor(
            this.a * scale,
            this.b * scale,
            this.c * scale,
            this.d * scale,
            this.e,
            this.f
        );
    }

    /**
     *  scaleAt
     *
     *  @param {number} scale
     *  @param {module:kld-affine.Point2D} center
     *  @returns {module:kld-affine.Matrix2D}
     */
    scaleAt(scale, center) {
        const dx = center.x - scale * center.x;
        const dy = center.y - scale * center.y;

        return new this.constructor(
            this.a * scale,
            this.b * scale,
            this.c * scale,
            this.d * scale,
            this.a * dx + this.c * dy + this.e,
            this.b * dx + this.d * dy + this.f
        );
    }

    /**
     *  scaleNonUniform
     *
     *  @param {number} scaleX
     *  @param {number} scaleY
     *  @returns {module:kld-affine.Matrix2D}
     */
    scaleNonUniform(scaleX, scaleY) {
        return new this.constructor(
            this.a * scaleX,
            this.b * scaleX,
            this.c * scaleY,
            this.d * scaleY,
            this.e,
            this.f
        );
    }

    /**
     *  scaleNonUniformAt
     *
     *  @param {number} scaleX
     *  @param {number} scaleY
     *  @param {module:kld-affine.Point2D} center
     *  @returns {module:kld-affine.Matrix2D}
     */
    scaleNonUniformAt(scaleX, scaleY, center) {
        const dx = center.x - scaleX * center.x;
        const dy = center.y - scaleY * center.y;

        return new this.constructor(
            this.a * scaleX,
            this.b * scaleX,
            this.c * scaleY,
            this.d * scaleY,
            this.a * dx + this.c * dy + this.e,
            this.b * dx + this.d * dy + this.f
        );
    }

    /**
     *  rotate
     *
     *  @param {number} radians
     *  @returns {module:kld-affine.Matrix2D}
     */
    rotate(radians) {
        const c = Math.cos(radians);
        const s = Math.sin(radians);

        return new this.constructor(
            this.a * c + this.c * s,
            this.b * c + this.d * s,
            this.a * -s + this.c * c,
            this.b * -s + this.d * c,
            this.e,
            this.f
        );
    }

    /**
     *  rotateAt
     *
     *  @param {number} radians
     *  @param {module:kld-affine.Point2D} center
     *  @returns {module:kld-affine.Matrix2D}
     */
    rotateAt(radians, center) {
        const cos = Math.cos(radians);
        const sin = Math.sin(radians);
        const cx = center.x;
        const cy = center.y;

        const a = this.a * cos + this.c * sin;
        const b = this.b * cos + this.d * sin;
        const c = this.c * cos - this.a * sin;
        const d = this.d * cos - this.b * sin;

        return new this.constructor(
            a,
            b,
            c,
            d,
            (this.a - a) * cx + (this.c - c) * cy + this.e,
            (this.b - b) * cx + (this.d - d) * cy + this.f
        );
    }

    /**
     *  rotateFromVector
     *
     *  @param {module:kld-affine.Vector2D} vector
     *  @returns {module:kld-affine.Matrix2D}
     */
    rotateFromVector(vector) {
        const unit = vector.unit();
        const c = unit.x; // cos
        const s = unit.y; // sin

        return new this.constructor(
            this.a * c + this.c * s,
            this.b * c + this.d * s,
            this.a * -s + this.c * c,
            this.b * -s + this.d * c,
            this.e,
            this.f
        );
    }

    /**
     *  flipX
     *
     *  @returns {module:kld-affine.Matrix2D}
     */
    flipX() {
        return new this.constructor(
            -this.a,
            -this.b,
            this.c,
            this.d,
            this.e,
            this.f
        );
    }

    /**
     *  flipY
     *
     *  @returns {module:kld-affine.Matrix2D}
     */
    flipY() {
        return new this.constructor(
            this.a,
            this.b,
            -this.c,
            -this.d,
            this.e,
            this.f
        );
    }

    /**
     *  skewX
     *
     *  @param {number} radians
     *  @returns {module:kld-affine.Matrix2D}
     */
    skewX(radians) {
        const t = Math.tan(radians);

        return new this.constructor(
            this.a,
            this.b,
            this.c + this.a * t,
            this.d + this.b * t,
            this.e,
            this.f
        );
    }

    // TODO: skewXAt

    /**
     *  skewY
     *
     *  @param {number} radians
     *  @returns {module:kld-affine.Matrix2D}
     */
    skewY(radians) {
        const t = Math.tan(radians);

        return new this.constructor(
            this.a + this.c * t,
            this.b + this.d * t,
            this.c,
            this.d,
            this.e,
            this.f
        );
    }

    // TODO: skewYAt

    /**
     *  isIdentity
     *
     *  @returns {boolean}
     */
    isIdentity() {
        return (
            this.a === 1.0 &&
            this.b === 0.0 &&
            this.c === 0.0 &&
            this.d === 1.0 &&
            this.e === 0.0 &&
            this.f === 0.0
        );
    }

    /**
     *  isInvertible
     *
     *  @returns {boolean}
     */
    isInvertible() {
        return this.a * this.d - this.b * this.c !== 0.0;
    }

    /**
     *  getScale
     *
     *  @returns {{ scaleX: number, scaleY: number }}
     */
    getScale() {
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
    getDecomposition() {
        const E = (this.a + this.d) * 0.5;
        const F = (this.a - this.d) * 0.5;
        const G = (this.b + this.c) * 0.5;
        const H = (this.b - this.c) * 0.5;

        const Q = Math.sqrt(E * E + H * H);
        const R = Math.sqrt(F * F + G * G);
        const scaleX = Q + R;
        const scaleY = Q - R;

        const a1 = Math.atan2(G, F);
        const a2 = Math.atan2(H, E);
        const theta = (a2 - a1) * 0.5;
        const phi = (a2 + a1) * 0.5;

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
    equals(that) {
        return (
            this.a === that.a &&
            this.b === that.b &&
            this.c === that.c &&
            this.d === that.d &&
            this.e === that.e &&
            this.f === that.f
        );
    }

    /**
     *  precisionEquals
     *
     *  @param {module:kld-affine.Matrix2D} that
     *  @param {number} precision
     *  @returns {boolean}
     */
    precisionEquals(that, precision) {
        return (
            Math.abs(this.a - that.a) < precision &&
            Math.abs(this.b - that.b) < precision &&
            Math.abs(this.c - that.c) < precision &&
            Math.abs(this.d - that.d) < precision &&
            Math.abs(this.e - that.e) < precision &&
            Math.abs(this.f - that.f) < precision
        );
    }

    /**
     *  toString
     *
     *  @returns {string}
     */
    toString() {
        return `matrix(${this.a},${this.b},${this.c},${this.d},${this.e},${this.f})`;
    }
}

/**
 *  Identity matrix
 *
 *  @returns {module:kld-affine.Matrix2D}
 */
Matrix2D.IDENTITY = new Matrix2D();
Matrix2D.IDENTITY.isIdentity = () => true;


export default Matrix2D;
