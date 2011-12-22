/*
 * Adds two vectors. They must be of the same dimension.
 *
 * @param (vector) vector The vector to add to the current vector
 * @return (vector) The resulting vector
 */
Array.prototype.add = function ( vector ) {
    if ( this.length != vector.length ) {
        throw 'add() = Inequal lengths';
    }
    return this.map( function ( value, index ) {
        return vector[ index ] + value;
    } );
};
/*
 * Calculates an Euler angle of the current vector on a plane
 * defined by the caller
 *
 * @param (number) x The index of the first dimension to use
 * @param (number) y The index of the second dimension to use
 * @return (number) The angle, in degrees
 */
Array.prototype.angle = function ( x, y ) {
    return Math.atan( this[ y ] / this[ x ] ) * 180 / Math.PI;
};
/*
 * Returns the distance between the current vector and a target vector
 *
 * @param (vector) vector The target vector
 * @return (number) The distance as a scalar
 */
Array.prototype.distance = function ( vector ) {
    return this.subtract( vector ).norm();
};
/*
 * Returns the square distance between the current vector and a target vector
 *
 * @param (vector) vector The target vector
 * @return (number) The square of the distance as a scalar
 */
Array.prototype.distance2 = function ( vector ) {
    return this.subtract( vector ).norm2();
};
/*
 * Evaluates the dot product between the current vector and a target vector
 *
 * @param (vector) vector The target vector
 * @return (number) The dot product
 */
Array.prototype.dot = function ( vector ) {
    if ( this.length != vector.length ) {
        throw 'dot() = Inequal lengths';
    }
    return this.reduce( function ( a, b, index ) {
        return a + b * vector[ index ];
    }, 0 );
};
/*
 * Checks whether two vectors are equal. The check is performed between
 * the current vector and a target vector.
 *
 * @param (vector) vector The target vector
 * @return (boolean) true if the two vectors are equal; false otherwise
 */
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
/*
 * Calculates the Euclidean norm of the current vector
 *
 * @return (number) The norm
 */
Array.prototype.norm = function () {
    return Math.sqrt( this.dot( this ) );
};
/*
 * Calculates the square of the Euclidean norm of the current vector
 *
 * @return (number) The norm
 */
Array.prototype.norm2 = function () {
    return this.dot( this );
};
/*
 * Scales the current vector by a factor
 *
 * @param (number) lambda The scaling factor
 * @return (vector) The resulting vector
 */
Array.prototype.scalarMultiply = function ( lambda ) {
    return this.map( function ( value ) {
        return lambda * value;
    } );
};
/*
 * Checks whether two vectors are parallel.
 *
 * @param (vector) vector The vector to check against
 * @return (boolean) true if the two vectors are parallel; false otherwise
 */
Array.prototype.parallel = function ( vector ) {
    var expectedRatio = this[ 0 ] / vector[ 0 ];

    return this.equal( vector.scalarMultiply( expectedRatio ) );
};
/*
 * Checks whether two vectors are perpendicular.
 *
 * @param (vector) vector The vector to check against
 * @return (boolean) true if the two vectors are perpendicular; false otherwise
 */
Array.prototype.perpendicular = function ( vector ) {
    return !this.dot( vector );
};
/*
 * Calculates the difference between two vectors.
 *
 * @param (vector) vector The vector to subtract from the current one
 * @return (vector) The difference
 */
Array.prototype.subtract = function ( vector ) {
    return this.add( vector.scalarMultiply( -1 ) );
};
