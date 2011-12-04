Array.prototype.add = function ( vector ) {
    if ( this.length != vector.length ) {
        throw 'add() = Inequal lengths';
        return null;
    }

    var newVector = [];
    this.forEach( function ( value, index ) {
        newVector.push( value + vector[ index ] );
    } );
    return newVector;
};
Array.prototype.angle = function ( x, y ) {
    return Math.atan( this[ y ] / this[ x ] ) * 180 / Math.PI;
};
Array.prototype.distance = function ( vector ) {
    return this.subtract( vector ).norm();
};
Array.prototype.dot = function ( vector ) {
    if ( this.length != vector.length ) {
        throw 'dot() = Inequal lengths';
        return false;
    }

    var sum = 0;
    this.forEach( function ( value, index ) {
        sum += value * vector[ index ];
    } );
    return sum;
};
Array.prototype.equal = function ( vector ) {
    if ( this.length != vector.length ) {
        return false;
    }

    res = true;
    this.forEach( function ( value, index ) {
        if ( value != vector[ index ] ) {
            res = false;
        }
    } );
    return res;
};
Array.prototype.norm = function () {
    return Math.sqrt( this.dot( this ) );
};
Array.prototype.scalarMultiply = function ( r ) {
    var newVector = [];
    this.forEach( function ( value ) {
        newVector.push( r * value );
    } );
    return newVector;
};
Array.prototype.parallel = function ( vector ) {
    var expectedRatio = this[ 0 ] / vector[ 0 ];

    return this.equal( vector.scalarMultiply( expectedRatio ) );
};
Array.prototype.perpendicular = function ( vector ) {
    return !this.dot( vector );
};
Array.prototype.subtract = function ( vector ) {
    return this.add( vector.scalarMultiply( -1 ) );
};
