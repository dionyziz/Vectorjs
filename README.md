# Vectorjs - JS Library for Euclidean Vectors #

Example: <http://mariosal.com/files/vectorjs>

## Functions ##

### Constructor ###

```javascript
var v = new Vector( [ 1, 2, 1 ] );    // 3d Vector v = ( 1, 2, 1 )
var u = new Vector( [ 1, 0, 0, 1 ] ); // 4d Vector u = ( 1, 0, 0, 1 )
```

### Addition ###

```javascript
var v = new Vector( [ 1, 2, 1 ] ); // 3d Vector v = ( 1, 2, 1 )
var u = new Vector( [ 1, 0, 0 ] ); // 3d Vector u = ( 1, 0, 0 )

v.add( u );     // return Vector object ( 2, 2, 1 )
u = u.add( v ); // u = ( 2, 2, 1 )
```

### Angle ###

```javascript
var v = new Vector( [ 1, 1 ] );    // 2d Vector v = ( 1, 1 )
var u = new Vector( [ 3, 0, 4 ] ); // 3d Vector u = ( 3, 0, 4 )

// 0-indexed axis

v.angle( 0, 1 ); // Angle on x & y axis. Return 45
u.angle( 0, 2 ); // Angle on x & z axis. Return 53.13010235415598
```

### Distance from v to u ###

```javascript
var v = new Vector( [ 1, 2, 1 ] ); // 3d Vector v = ( 1, 2, 1 )
var u = new Vector( [ 1, 0, 0 ] ); // 3d Vector u = ( 1, 0, 0 )

v.distance( u ); // return √5
```

### Dot Product ###

```javascript
var v = new Vector( [ 1, 2 ] ); // 2d Vector v = ( 1, 2 )
var u = new Vector( [ 1, 5 ] ); // 2d Vector u = ( 1, 5 )

v.dot( u ); // return 11
```

### Equality ###

```javascript
var v = new Vector( [ 1, 2 ] );    // 2d Vector v = ( 1, 2 )
var u = new Vector( [ 1, 2 ] );    // 2d Vector u = ( 1, 2 )
var w = new Vector( [ -5, -10 ] ); // 2d Vector w = ( -5, -10 )

v.equal( u ); // return true
v.equal( w ); // return false
```

### Length ###

```javascript
var v = new Vector( [ 1, 1 ] ); // 2d Vector v = ( 1, 1 )
var u = new Vector( [ 2, 2 ] ); // 2d Vector u = ( 2, 2 )

v.length(); // return √2
u.length(); // return √8
```

### Scalar Multiplication ###

```javascript
var v = new Vector( [ 1, 1 ] ); // 2d Vector v = ( 1, 1 )

v.multiply( 2 );     // return Vector object ( 2, 2 )
v = v.multiply( 2 ); // v = ( 2, 2 )
```

### Parallel ###

```javascript
var v = new Vector( [ 1, 1 ] );   // 2d Vector v = ( 1, 1 )
var u = new Vector( [ 2, 2 ] );   // 2d Vector u = ( 2, 2 )
var w = new Vector( [ -2, -2 ] ); // 2d Vector w = ( -2, -2 )

v.parallel( u ); // return true
v.parallel( w ); // return true;
```

### Perpendicular ###

```javascript
var v = new Vector( [ 1, 1 ] );  // 2d Vector v = ( 1, 1 )
var u = new Vector( [ -1, 1 ] ); // 2d Vector u = ( -1, 1 )

v.perpendicular( u ); // return true
```

### Subtraction ###

```javascript
var v = new Vector( [ 1, 2, 1 ] ); // 3d Vector v = ( 1, 2, 1 )
var u = new Vector( [ 1, 0, 0 ] ); // 3d Vector u = ( 1, 0, 0 )

v.subtract( u );     // return Vector object ( 0, 2, 1 )
u = u.subtract( v ); // u = ( 0, -2, -1 )
```

## License ##

Copyright (c) 2011 Mario Saldinger

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
