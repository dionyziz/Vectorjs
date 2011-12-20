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

JS Library for Vectors
Copyright (C) 2011  Mario Saldinger

This program is free software: you can redistribute it and/or modify
it under the terms of the GNU General Public License as published by
the Free Software Foundation, either version 3 of the License, or
(at your option) any later version.

This program is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
GNU General Public License for more details.

You should have received a copy of the GNU General Public License
along with this program.  If not, see <http://www.gnu.org/licenses/>.
