var Vector2D = require('../lib/Vector2D');

exports.newVector = function(beforeExit, assert) {
    var v = new Vector2D(10, 20);

    assert.equal(v.x, 10);
    assert.equal(v.y, 20);
};
