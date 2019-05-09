# kld-affine

- [Installation](#installation)
- [Importing](#importing)
- [API](#api)

---

A collection of classes used for affine geometry. This currently consists of the following classes:

* Point2D
* Vector2D
* Matrix2D

# Installation

```
npm install kld-affine
```

# Importing

The following sections indicate how you can import the code for use in various environments.

## Node

```javascript
import {Point2D, Vector2D, Matrix2D} = require("kld-affine");
```

## ESM in Modern Browsers

```javascript
import {Point2D, Vector2D, Matrix2D} from './node_modules/kld-affine/dist/index-esm.js';
```

## Older Browsers

```html
<script src="./node_modules/kld-affine/dist/index-umd.js"></script>
<script>
  var Point2D = KldAffine.Point2D;
  var Vector2D = KldAffine.Vector2D;
  var Matrix2D = KldAffine.Matrix2D;
</script>
```

## Bundlers

```javascript
import {Point2D, Vector2D, Matrix2D} from "kld-affine";
```

# API

## Point2D

A class used to represent two-dimensional points on a plane. This currently supports the following methods:

* clone
* add
* subtract
* multiply
* divide
* equals
* precisionEquals
* lerp
* distanceFrom
* min
* max
* transform
* toString

## Vector2D

A class used to represent a two-dimensional vector. This currently supports the following methods:

* Vector2D.fromPoints
* length
* magnitude
* dot
* cross
* determinant
* unit
* add
* subtract
* multiply
* divide
* angleBetween
* perp
* perpendicular
* project
* transform
* equals
* precisionEquals
* toString

## Matrix2D

A class used to represent affine transformations. This current supports the following methods:

* Matrix2D.IDENTITY
* Matrix2D.translation
* Matrix2D.scaling
* Matrix2D.scalingAt
* Matrix2D.nonUniformScaling
* Matrix2D.nonUniformScalingAt
* Matrix2D.rotation
* Matrix2D.rotationAt
* Matrix2D.rotationFromVector
* Matrix2D.xFlip
* Matrix2D.yFlip
* Matrix2D.xSkew
* Matrix2D.ySkew
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
* getDecomposition
* equals
* precisionEquals
* toString
