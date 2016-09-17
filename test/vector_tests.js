var Vector2D = require('../lib/Vector2D'),
    /* Point2D and Matrix 2D are considered good checked code */
    Point2D = require('../lib/Point2D'),
    Matrix2D = require('../lib/Matrix2D'),
    origin = new Point2D(0, 0),
    p1 = new Point2D(3, 4),
    p2 = new Point2D(6, 8),
    v1 = new Vector2D(3, 4),
    v2 = new Vector2D(2, 2);


exports.newVector = function(beforeExit, assert) {
    "use strict";
    var v = new Vector2D(10, 20);

    assert.equal(v.x, 10);
    assert.equal(v.y, 20);
};

exports.vectorFromPoints = function(beforeExit, assert) {
    var v = Vector2D.fromPoints({ x : 0, y : 0 }, { x : 10, y : 20 });

    assert.equal(v.x, 10);
    assert.equal(v.y, 20);
};

exports.fromPoints = function(beforeExit, assert) {
    "use strict";
    var v = Vector2D.fromPoints(p1, p2);
    
    assert.equal(v.x, 3);
    assert.equal(v.y, 4);
};

exports.length = function(beforeExit, assert) {
    "use strict";
    var v = new Vector2D(3, 4),
        length = v.length();
    
    assert.equal(length, 5);
};

exports.magnitude = function(beforeExit, assert) {
    "use strict";
    var magnitude = v1.magnitude();
    
    assert.equal(magnitude, 25);
};

exports.dot = function(beforeExit, assert) {
    "use strict";
    var dot = v1.dot(v2);
    
    assert.equal(dot, 14);
};

exports.cross = function(beforeExit, assert) {
    "use strict";
    var cross = v1.cross(v2);
    
    assert.equal(cross, -2);
};

exports.determinant = function(beforeExit, assert) {
    "use strict";
    var determinant = v1.determinant(v2);
    
    assert.equal(determinant, -2);
};

exports.unit = function(beforeExit, assert) {
    "use strict";
    var unit = v1.unit();
    
    assert.equal(unit.x, 0.6);
    assert.equal(unit.y, 0.8);
};

exports.add = function(beforeExit, assert) {
    "use strict";
    var newv = v1.add(v2);
    
    assert.equal(newv.x, 5);
    assert.equal(newv.y, 6);
};

exports.subtract = function(beforeExit, assert) {
    "use strict";
    var newv = v1.subtract(v2);
    
    assert.equal(newv.x, 1);
    assert.equal(newv.y, 2);
};

exports.multiply = function(beforeExit, assert) {
    "use strict";
    var newv = v1.multiply(2);
    
    assert.equal(newv.x, 6);
    assert.equal(newv.y, 8);
};

exports.divide = function(beforeExit, assert) {
    "use strict";
    var newv = v2.divide(2);
    
    assert.equal(newv.x, 1);
    assert.equal(newv.y, 1);
};

exports.angleBetween = function(beforeExit, assert) {
    "use strict";
    var v1 = new Vector2D(1, 0),
        v2 = new Vector2D(0, 1),
        perp1 = v1.angleBetween(v2),
        perp2 = v2.angleBetween(v1);
        
        assert.equal(perp1, -perp2);
        assert.equal(perp1, Math.PI/2);
        
};

exports.perp = function(beforeExit, assert) {
    "use strict";
    var perp = v1.perp(),
        phi = v1.angleBetween(perp);
    
    assert.equal(perp.x, -v1.y);
    assert.equal(perp.y, v1.x);
    assert.equal(phi, Math.PI/2);
};

exports.perpendicular = function(beforeExit, assert) {
    "use strict";
    var perpendicular = v1.perpendicular(v2);
    
    assert.equal(perpendicular.x, -0.5);
    assert.equal(perpendicular.y, 0.5);
};

exports.project = function(beforeExit, assert) {
    "use strict";
    var project = v1.project(v2);
    
    assert.equal(project.x, 3.5);
    assert.equal(project.y, 3.5);
};

exports.transform = function(beforeExit, assert) {
    "use strict";
    var m = new Matrix2D(1, 1, 1, 1, 1, 1),
        a = v1.transform(Matrix2D.IDENTITY),
        b = v1.transform(m);
    
    assert.equal(a.x, v1.x);
    assert.equal(a.y, v1.y);
    
    assert.equal(b.x, b.y);
    assert.equal(b.x, 7);
};

exports.equals = function(beforeExit, assert) {
    "use strict";
    var t = v1.equals(v1),
        f = v1.equals(v2);
        
    assert.equal(t, true);
    assert.equal(f, false);
};

exports.toString = function(beforeExit, assert) {
    "use strict";
    var str = v1.toString();
    
    assert.equal(str, 'vector(3,4)');
};

// exports.setX = function(beforeExit, assert) {
//     var v = new Vector2D(10, 20);

//     v.x = 20;

//     console.log(v.toString());
// };
