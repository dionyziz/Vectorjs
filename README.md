# Vectorjs - JS Library for Vectors #

Expanding the prototype of Arrays.

Example: <http://mariosal.com/files/vectorjs>

## Functions ##

### Addition ###

```javascript
var v = [ 1, 2, 1 ];
var u = [ 1, 0, 0 ];

v.add( u ); // return [ 2, 2, 1 ]
```

### Angle ###

```javascript
var v = [ 1, 1 ];
var u = [ 3, 0, 4 ];

// 0-indexed axis

v.angle( 0, 1 ); // Angle on x & y axis. Return 45
u.angle( 0, 2 ); // Angle on x & z axis. Return 53.13010235415598
```

### Distance from v to u ###

```javascript
var v = [ 1, 2, 1 ];
var u = [ 1, 0, 0 ];

v.distance( u ); // return √5
```

### Dot Product ###

```javascript
var v = [ 1, 2 ];
var u = [ 1, 5 ];

v.dot( u ); // return 11
```

### Equality ###

```javascript
var v = [ 1, 2 ];
var u = [ 1, 2 ];
var w = [ -5, -10, 5 ];

v.equal( u ); // return true
v.equal( w ); // return false
```

### Norm ###

```javascript
var v = [ 1, 1 ];
var u = [ 2, 2 ];

v.norm(); // return √2
u.norm(); // return √8
```

### Parallel ###

```javascript
var v = [ 1, 1 ];
var u = [ 2, 2 ];
var w = [ -2, -2 ];

v.parallel( u ); // return true
v.parallel( w ); // return true
```

### Perpendicular ###

```javascript
var v = [ 1, 1 ];
var u = [ -1, 1 ];

v.perpendicular( u ); // return true
```

### Scalar Multiplication ###

```javascript
var v = [ 1, 1 ];

v.scalarMultiply( 2 ); // return [ 2, 2 ]
```

### Subtraction ###

```javascript
var v = [ 1, 2, 1 ];
var u = [ 1, 0, 0 ];

v.subtract( u ); // return [ 0, 2, 1 ]
```

## License ##

Copyright (c) 2011 Mario Saldinger

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
