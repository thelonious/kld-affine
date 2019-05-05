"use strict";

const assert = require("assert");
const {Vector2D, Point2D, Matrix2D} = require("../index.js");

const
    p1 = new Point2D(3, 4),
    p2 = new Point2D(6, 8),
    v1 = new Vector2D(3, 4),
    v2 = new Vector2D(2, 2);


describe("Vector2D", () => {
    it("new vector", () => {
        const v = new Vector2D(10, 20);

        assert.strictEqual(v.x, 10);
        assert.strictEqual(v.y, 20);
    });

    it("vector from two points", () => {
        const v = Vector2D.fromPoints(p1, p2);

        assert.strictEqual(v.x, 3);
        assert.strictEqual(v.y, 4);
    });

    it("length", () => {
        const v = new Vector2D(3, 4),
            len = v.length();

        assert.strictEqual(len, 5);
    });

    it("magnitude", () => {
        const magnitude = v1.magnitude();

        assert.strictEqual(magnitude, 25);
    });

    it("dot", () => {
        const dot = v1.dot(v2);

        assert.strictEqual(dot, 14);
    });

    it("cross", () => {
        const cross = v1.cross(v2);

        assert.strictEqual(cross, -2);
    });

    it("determinant", () => {
        const determinant = v1.determinant(v2);

        assert.strictEqual(determinant, -2);
    });

    it("unit", () => {
        const unit = v1.unit();

        assert.strictEqual(unit.x, 0.6);
        assert.strictEqual(unit.y, 0.8);
    });

    it("add", () => {
        const newv = v1.add(v2);

        assert.strictEqual(newv.x, 5);
        assert.strictEqual(newv.y, 6);
    });

    it("subtract", () => {
        const newv = v1.subtract(v2);

        assert.strictEqual(newv.x, 1);
        assert.strictEqual(newv.y, 2);
    });

    it("multiply", () => {
        const newv = v1.multiply(2);

        assert.strictEqual(newv.x, 6);
        assert.strictEqual(newv.y, 8);
    });

    it("divide", () => {
        const newv = v2.divide(2);

        assert.strictEqual(newv.x, 1);
        assert.strictEqual(newv.y, 1);
    });

    it("angleBetween", () => {
        const vect1 = new Vector2D(1, 0),
            vect2 = new Vector2D(0, 1),
            perp1 = vect1.angleBetween(vect2),
            perp2 = vect2.angleBetween(vect1);

        assert.strictEqual(perp1, -perp2);
        assert.strictEqual(perp1, Math.PI / 2);
    });

    it("perp", () => {
        const perp = v1.perp(),
            phi = v1.angleBetween(perp);

        assert.strictEqual(perp.x, -v1.y);
        assert.strictEqual(perp.y, v1.x);
        assert.strictEqual(phi, Math.PI / 2);
    });

    it("perpendicular", () => {
        const perpendicular = v1.perpendicular(v2);

        assert.strictEqual(perpendicular.x, -0.5);
        assert.strictEqual(perpendicular.y, 0.5);
    });

    it("project", () => {
        const project = v1.project(v2);

        assert.strictEqual(project.x, 3.5);
        assert.strictEqual(project.y, 3.5);
    });

    it("transform", () => {
        const m = new Matrix2D(1, 1, 1, 1, 1, 1),
            a = v1.transform(Matrix2D.IDENTITY),
            b = v1.transform(m);

        assert.strictEqual(a.x, v1.x);
        assert.strictEqual(a.y, v1.y);

        assert.strictEqual(b.x, b.y);
        assert.strictEqual(b.x, 7);
    });

    it("equals", () => {
        const t = v1.equals(v1),
            f = v1.equals(v2);

        assert.strictEqual(t, true);
        assert.strictEqual(f, false);
    });

    it("to string", () => {
        const str = v1.toString();

        assert.strictEqual(str, "vector(3,4)");
    });
});
