var Point2D = require('../lib/Point2D');

exports.newPoint = function(beforeExit, assert) {
    var p = new Point2D(10, 20);

    assert.equal(p.x, 10);
    assert.equal(p.y, 20);
};
