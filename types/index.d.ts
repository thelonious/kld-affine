declare module 'kld-affine' {
  class Point2D {
    x: number
    y: number

    constructor (x: number = 0, y: number = 0)

    clone (): Point2D

    add (that: Point2D): Point2D

    subtract (that: Point2D): Point2D

    multiply (scalar: number): Point2D

    divide (scalar: number): Point2D

    equals (that: Point2D): boolean

    precisionEquals (that: Point2D, precision: number): boolean

    lerp (that: Point2D, t: number): Point2D

    distanceFrom (that: Point2D): number

    min (that: Point2D): Point2D

    max (that: Point2D): Point2D

    transform (matrix: Matrix2D): Point2D

    toString (): string
  }

  class Vector2D {
    x: number
    y: number

    constructor (x: number = 0, y: number = 0)

    static fromPoints(p1: Point2D, p2: Point2D): Vector2D

    length (): number

    magnitude (): number

    dot (that: Vector2D): number

    cross (that: Vector2D): number

    determinant (that: Vector2D): number

    unit (): Vector2D

    add (that: Vector2D): Vector2D

    subtract (that: Vector2D): Vector2D

    multiply (scalar: number): Vector2D

    divide (scalar: number): Vector2D

    angleBetween (that: Vector2D): number

    perp (): Vector2D

    perpendicular (that: Vector2D): Vector2D

    project (that: Vector2D): Vector2D

    transform (matrix: Matrix2D): Vector2D

    equals (that: Vector2D): boolean

    precisionEquals(that: Vector2D, precision: number): boolean

    toString (): string
  }

  class Matrix2D {
    a: number
    b: number
    c: number
    d: number
    e: number
    f: number

    constructor (
      a: number = 1,
      b: number = 0,
      c: number = 0,
      d: number = 1,
      e: number = 0,
      f: number = 0
    )

    static IDENTITY: Matrix2D

    static translation (tx: number, ty: number): Matrix2D

    static scaling (scale: number): Matrix2D

    static scalingAt (scale: number, center: Point2D): Matrix2D

    static nonUniformScaling (scaleX: number, scaleY: number): Matrix2D

    static nonUniformScalingAt (scaleX: number, scalyY: number, center: Point2D): Matrix2D

    static rotation (radians: number): Matrix2D

    static rotationAt (radians: number, center: Point2D): Matrix2D

    static rotationFromVector (vector: Vector2D): Matrix2D

    static xFlip (): Matrix2D

    static yFlip (): Matrix2D

    static xSkew (radians: number): Matrix2D

    static ySkew (radians: number): Matrix2D

    multiply (that: Matrix2D): Matrix2D

    inverse (): Matrix2D

    translate (tx: number, ty: number): Matrix2D

    scale (scale: number): Matrix2D

    scaleAt (scale: number, center: Point2D): Matrix2D

    scaleNonUniform (scaleX: number, scaleY: number): Matrix2D

    scaleNonUniformAt (scaleX: number, scaleY: number, center: Point2D): Matrix2D

    rotate (radians: number): Matrix2D

    rotateAt (radians: number, center: Point2D): Matrix2D

    rotateFromVector (vector: number): Matrix2D

    flipX (): Matrix2D

    flipY (): Matrix2D

    skewX (radians: number): Matrix2D

    skewY (radians: number): Matrix2D

    isIndentity (): boolean

    isInvertible (): boolean

    getScale (): { scaleX: number, scaleY: number }

    getDecomposition (): { translation: Matrix2D, rotation: Matrix2D, scale: Matrix2D, rotation0: Matrix2D }

    equals (that: Matrix2D): boolean

    precisionEquals (that: Matrix2D, precision: number): boolean

    toString (): string
  }


}