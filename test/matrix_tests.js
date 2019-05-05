"use strict";

const assert = require("assert");
const {Matrix2D, Point2D, Vector2D} = require("../index");

describe("Matrix2D", () => {
    describe("Methods", () => {
        it("new matrix", () => {
            const m = new Matrix2D();

            assert.strictEqual(m.a, 1);
            assert.strictEqual(m.b, 0);
            assert.strictEqual(m.c, 0);
            assert.strictEqual(m.d, 1);
            assert.strictEqual(m.e, 0);
            assert.strictEqual(m.f, 0);
        });

        it("to string", () => {
            const m = new Matrix2D();

            assert.strictEqual(m.toString(), "matrix(1,0,0,1,0,0)");
        });
        /*
        it("multiply", () => {});
        it("inverse", () => {});
        it("translate", () => {});
        it("scale", () => {});
        it("scaleAt", () => {});
        it("scaleNonUniform", () => {});
        it("scaleNonUniformAt", () => {});
        it("rotate", () => {});
        it("rotateAt", () => {});
        it("rotateFromVector", () => {});
        it("flipX", () => {});
        it("flipY", () => {});
        it("skewX", () => {});
        it("skewY", () => {});
        it("isIdentity", () => {});
        it("isInvertible", () => {});
        it("getScale", () => {});
        it("equals", () => {});
        */
    });

    describe("Statics", () => {
        it("IDENTITY", () => {
            const m = Matrix2D.IDENTITY;

            assert.strictEqual(m.a, 1);
            assert.strictEqual(m.b, 0);
            assert.strictEqual(m.c, 0);
            assert.strictEqual(m.d, 1);
            assert.strictEqual(m.e, 0);
            assert.strictEqual(m.f, 0);
        });

        it("translation", () => {
            const tx = 10;
            const ty = 20;
            const m1 = Matrix2D.translation(tx, ty);
            const m2 = (new Matrix2D()).translate(tx, ty);

            assert(m1.equals(m2), `${m1.toString()} != ${m2.toString()}`);
        });

        it("scaling", () => {
            const s = 1.5;
            const m1 = Matrix2D.scaling(s);
            const m2 = (new Matrix2D()).scale(s);

            assert(m1.equals(m2), `${m1.toString()} != ${m2.toString()}`);
        });

        it("scalingAt", () => {
            const s = 1.5;
            const center = new Point2D(10, 20);
            const m1 = Matrix2D.scalingAt(s, center);
            const m2 = (new Matrix2D()).scaleAt(s, center);

            assert(m1.equals(m2), `${m1.toString()} != ${m2.toString()}`);
        });

        it("non-uniform scaling", () => {
            const sx = 1.5;
            const sy = 0.5;
            const m1 = Matrix2D.nonUniformScaling(sx, sy);
            const m2 = (new Matrix2D()).scaleNonUniform(sx, sy);

            assert(m1.equals(m2), `${m1.toString()} != ${m2.toString()}`);
        });

        it("non-uniform scalingAt", () => {
            const sx = 1.5;
            const sy = 0.5;
            const center = new Point2D(10, 20);
            const m1 = Matrix2D.nonUniformScalingAt(sx, sy, center);
            const m2 = (new Matrix2D()).scaleNonUniformAt(sx, sy, center);

            assert(m1.equals(m2), `${m1.toString()} != ${m2.toString()}`);
        });

        it("rotation", () => {
            const a = 45.0 * Math.PI / 180.0;
            const m1 = Matrix2D.rotation(a);
            const m2 = (new Matrix2D()).rotate(a);

            assert(m1.equals(m2), `${m1.toString()} != ${m2.toString()}`);
        });

        it("rotationAt", () => {
            const a = 45.0 * Math.PI / 180.0;
            const center = new Point2D(10, 20);
            const m1 = Matrix2D.rotationAt(a, center);
            const m2 = (new Matrix2D()).rotateAt(a, center);

            assert(m1.precisionEquals(m2, 1e-15), `${m1.toString()} != ${m2.toString()}`);
        });

        it("rotation from vector", () => {
            const v = new Vector2D(10, 20);
            const m1 = Matrix2D.rotationFromVector(v);
            const m2 = (new Matrix2D()).rotateFromVector(v);

            assert(m1.equals(m2), `${m1.toString()} != ${m2.toString()}`);
        });

        it("x flip", () => {
            const m1 = Matrix2D.xFlip();
            const m2 = (new Matrix2D()).flipX();

            assert(m1.equals(m2), `${m1.toString()} != ${m2.toString()}`);
        });

        it("y flip", () => {
            const m1 = Matrix2D.yFlip();
            const m2 = (new Matrix2D()).flipY();

            assert(m1.equals(m2), `${m1.toString()} != ${m2.toString()}`);
        });

        it("x skew", () => {
            const a = 30 * Math.PI / 180.0;
            const m1 = Matrix2D.xSkew(a);
            const m2 = (new Matrix2D()).skewX(a);

            assert(m1.equals(m2), `${m1.toString()} != ${m2.toString()}`);
        });

        it("y skew", () => {
            const a = 30 * Math.PI / 180.0;
            const m1 = Matrix2D.ySkew(a);
            const m2 = (new Matrix2D()).skewY(a);

            assert(m1.equals(m2), `${m1.toString()} != ${m2.toString()}`);
        });
    });
});
