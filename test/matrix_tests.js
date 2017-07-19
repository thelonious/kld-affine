let assert   = require('assert'),
    Matrix2D = require('./../lib/Matrix2D');

describe('Matrix2D', () => {
    it("new matrix", () => {
        let m = new Matrix2D();

        assert.equal(m.a, 1);
        assert.equal(m.b, 0);
        assert.equal(m.c, 0);
        assert.equal(m.d, 1);
        assert.equal(m.e, 0);
        assert.equal(m.f, 0);
    });

    it("IDENTITY", () => {
        let m = Matrix2D.IDENTITY;

        assert.equal(m.a, 1);
        assert.equal(m.b, 0);
        assert.equal(m.c, 0);
        assert.equal(m.d, 1);
        assert.equal(m.e, 0);
        assert.equal(m.f, 0);
    });

    it("to string", () => {
        let m = new Matrix2D();

        assert.equal(m.toString(), "matrix(1,0,0,1,0,0)");
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
