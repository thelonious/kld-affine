import assert from "assert";
import {Point2D, Vector2D, Matrix2D} from "../index.js";

describe("Point2D", () => {
    it("new point", () => {
        const p = new Point2D(10, 20);

        assert.strictEqual(p.x, 10);
        assert.strictEqual(p.y, 20);
    });

    it("clone", () => {
        const p = new Point2D(10, 20);
        const c = p.clone();

        assert.strictEqual(p.x, c.x);
        assert.strictEqual(p.y, c.y);
        assert.strictEqual(c.x, 10);
        assert.strictEqual(c.y, 20);
    });

    it("add", () => {
        const p1 = new Point2D(10, 20);
        const p2 = new Point2D(20, 30);
        const p3 = p1.add(p2);

        assert.strictEqual(p3.x, 30);
        assert.strictEqual(p3.y, 50);
    });

    it("subtract", () => {
        const p1 = new Point2D(10, 20);
        const p2 = new Point2D(20, 40);
        const p3 = p1.subtract(p2);

        assert.strictEqual(p3.x, -10);
        assert.strictEqual(p3.y, -20);
    });

    it("multiply", () => {
        const p1 = new Point2D(10, 20);
        const p2 = p1.multiply(0.5);

        assert.strictEqual(p2.x, 5);
        assert.strictEqual(p2.y, 10);
    });

    it("divide", () => {
        const p1 = new Point2D(10, 20);
        const p2 = p1.divide(2);

        assert.strictEqual(p2.x, 5);
        assert.strictEqual(p2.y, 10);
    });

    it("equal", () => {
        const p1 = new Point2D(10, 20);
        const p2 = new Point2D(10, 20);

        assert.strictEqual(p1.equals(p2), true);
    });

    it("not equal", () => {
        const p1 = new Point2D(10, 20);
        const p2 = new Point2D(10, 21);

        assert.strictEqual(p1.equals(p2), false);
    });

    it("interpolate between two points", () => {
        const p1 = new Point2D(10, 20);
        const p2 = new Point2D(30, 40);
        const p3 = p1.lerp(p2, 0.25);

        assert.strictEqual(p3.x, 15);
        assert.strictEqual(p3.y, 25);
    });

    it("distance between two points", () => {
        const p1 = new Point2D(10, 20);
        const p2 = new Point2D(13, 24);
        const dist = p1.distanceFrom(p2);

        assert.strictEqual(dist, 5);
    });

    it("min", () => {
        const p1 = new Point2D(30, 5);
        const p2 = new Point2D(10, 50);
        const p3 = p1.min(p2);

        assert.strictEqual(p3.x, 10);
        assert.strictEqual(p3.y, 5);
    });

    it("max", () => {
        const p1 = new Point2D(30, 5);
        const p2 = new Point2D(10, 50);
        const p3 = p1.max(p2);

        assert.strictEqual(p3.x, 30);
        assert.strictEqual(p3.y, 50);
    });

    it("translate", () => {
        const p1 = new Point2D(10, 20);
        const m = new Matrix2D().translate(20, 30);
        const p2 = p1.transform(m);

        assert.strictEqual(p2.x, 30);
        assert.strictEqual(p2.y, 50);
    });

    it("scale", () => {
        const p1 = new Point2D(10, 20);
        const m = new Matrix2D().scale(2);
        const p2 = p1.transform(m);

        assert.strictEqual(p2.x, 20);
        assert.strictEqual(p2.y, 40);
    });

    it("scale non-uniform", () => {
        const p1 = new Point2D(10, 20);
        const m = new Matrix2D().scaleNonUniform(2, 3);
        const p2 = p1.transform(m);

        assert.strictEqual(p2.x, 20);
        assert.strictEqual(p2.y, 60);
    });

    it("rotate", () => {
        const p1 = new Point2D(10, 0);
        const m = new Matrix2D().rotate(Math.PI / 4.0);
        const p2 = p1.transform(m);

        assert.strictEqual(p2.x, 7.0710678118654755);
        assert.strictEqual(p2.y, 7.071067811865475);
    });

    it("rotate from vector", () => {
        const p1 = new Point2D(10, 0);
        const v = new Vector2D(Math.PI / 4.0, Math.PI / 4.0);
        const m = new Matrix2D().rotateFromVector(v);
        const p2 = p1.transform(m);

        assert.strictEqual(p2.x, 7.0710678118654755);
        assert.strictEqual(p2.y, 7.0710678118654755);
    });

    it("flip x", () => {
        const p1 = new Point2D(10, 20);
        const m = new Matrix2D().flipX();
        const p2 = p1.transform(m);

        assert.strictEqual(p2.x, -10);
        assert.strictEqual(p2.y, 20);
    });

    it("flip y", () => {
        const p1 = new Point2D(10, 20);
        const m = new Matrix2D().flipY();
        const p2 = p1.transform(m);

        assert.strictEqual(p2.x, 10);
        assert.strictEqual(p2.y, -20);
    });

    it("inverse transform", () => {
        const p1 = new Point2D(10, 20);
        const m = new Matrix2D().translate(30, 50).inverse();
        const p2 = p1.transform(m);

        assert.strictEqual(p2.x, -20);
        assert.strictEqual(p2.y, -30);
    });

    it("to string", () => {
        const p = new Point2D(10, 20);

        assert.strictEqual("point(10,20)", p.toString());
    });
});
