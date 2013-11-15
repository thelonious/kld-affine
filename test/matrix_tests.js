var Matrix2D = require('./../lib/Matrix2D');

exports.newMatrix = function(beforeExit, assert) {
    var m = new Matrix2D();

    assert.equal(m.toString(), "matrix(1,0,0,1,0,0)");
};
