Array.prototype.add = function ( vector ) {
    if ( this.length != vector.length ) {
        throw 'add() = Inequal lengths';
    }
    return this.map( function ( value, index ) {
        return vector[ index ] + value;
    } );
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
    }
    return this.reduce( function ( a, b, index ) {
        return a + b * vector[ index ];
    }, 0 );
};
Array.prototype.equal = function ( vector ) {
    if ( this.length != vector.length ) {
        return false;
    }

    try {
        this.forEach( function ( value, index ) {
            if ( value != vector[ index ] ) {
                throw false;
            }
        } );
    }
    catch ( e ) {
        return false;
    }
    return true;
};
Array.prototype.norm = function () {
    return Math.sqrt( this.dot( this ) );
};
Array.prototype.scalarMultiply = function ( r ) {
    return this.map( function ( value ) {
        return r * value;
    } );
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
