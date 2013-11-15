kld-affine
==========

A collection of classes used for affine geometry. This currently consists of the following:

* Point2D
* Vector2D
* Matrix2D

These have been extracted from kld-intersections so they can stand alone. As such, there are some parts of the API that I want to remove, but I will need to update kld-intersections before being able to do that. Specifically, I would like to remove all self-mutable methods in preference of a more functional approach that creates a new instance with each modification.

Install
-------
    npm install kld-affine

Point2D
-------

A class used to represent two-dimensional points on a plane. This currently supports the following methods:

* clone
* add
* addEquals - deprecated
* rmoveTo - deprecated
* scalarAdd - deprecated
* scalarAddEquals - deprecated
* subtract
* subtractEquals - deprecated
* scalarSubtract - deprecated
* scalarSubtractEquals - deprecated
* multiply
* multiplyEquals - deprecated
* divide
* divideEquals - deprecated
* compare - deprecated
* equals
* lerp
* distanceFrom
* min
* max
* transform
* toString
* setXY - deprecated
* setFromPoint - deprecated
* swap - deprecated

Vector2D
--------
A class used to represent a two-dimensional vector. This currently supports the following methods:

* Vector2D.fromPoints
* length
* magnitude
* dot
* cross
* determinant
* unit
* unitEquals - deprecated
* add
* addEquals - deprecated
* subtract
* subtractEquals - deprecated
* multiply
* multiplyEquals - deprecated
* divide
* divideEquals - deprecated
* angleBetween
* perp
* perpendicular
* project
* transform
* equals
* toString

Matrix2D
--------
A class used to represent affine transformations. This current supports the following methods:

* Matrix2D.IDENTITY
* multiply
* inverse
* translate
* scale
* scaleAt
* scaleNonUniform
* scaleNonUniformAt
* rotate
* rotateAt
* rotateFromVector
* flipX
* flipY
* skewX
* skewY
* isIdentity
* isInvertible
* getScale
* equals
* toString
