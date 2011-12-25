/**
 * Checks whether the condition is true
 *
 * @param {boolean} condition The condition to be checked
 * @param {string} description The thrown string if condition is false
 * @throws {FalseCondition} Throws the description if condition is false
 */
var assert = function ( condition, description ) {
    if ( !condition ) {
        throw 'Assertion failed: ' + description;
    }
};

/**
 * Adds two vectors
 *
 * @param {array} vector The target vector
 * @throws {InequalLengths} If they have different dimensions
 * @return {array} The resulting vector
 */
Array.prototype.add = function ( vector ) {
    assert( this.length == vector.length, 'add(): Inequal Lengths' );

    return this.map( function ( value, index ) {
        return value + vector[ index ];
    } );
};

/**
 * Calculates the angle of two vectors
 *
 * @param {array} vector The target vector
 * @return {number} Radians
 */
Array.prototype.angle = function ( vector ) {
    return Math.acos( this.dot( vector ) / ( this.norm() * vector.norm() ) );
};

/**
 * Calculates the cross product of two vectors
 *
 * @param {array} vector The target vector
 * @return {number} The resulting vector
 */
Array.prototype.cross = function ( vector ) {
    assert( this.length == vector.length, 'cross(): Inequal Lengths' );
    assert( this.length <= 3, 'cross(): Vector length greater than 3' );

    for ( var i = 0; i < 3; ++i ) {
        if ( this[ i ] == undefined ) {
            this[ i ] = 0;
        }
        if ( vector[ i ] == undefined ) {
            vector[ i ] = 0;
        }
    }

    return [
        this[ 1 ] * vector[ 2 ] - this[ 2 ] * vector[ 1 ],
        this[ 2 ] * vector[ 0 ] - this[ 0 ] * vector[ 2 ],
        this[ 0 ] * vector[ 1 ] - this[ 0 ] * vector[ 1 ],
    ];
};

/**
 * Calculates the distance of two vectors
 *
 * @param {array} vector The target vector
 * @return {number} The distance
 */
Array.prototype.distance = function ( vector ) {
    return this.subtract( vector ).norm();
};

/**
 * Calculates the square distance of two vectors
 *
 * @param {array} vector The target vector
 * @return {number} The square distance
 */
Array.prototype.distance2 = function ( vector ) {
    return this.subtract( vector ).dot();
};

/**
 * Calculates the dot product of two vectors
 *
 * @param {array} vector The target vector
 * @return {number} The dot product
 */
Array.prototype.dot = function ( vector ) {
    vector = vector || this;

    assert( this.length == vector.length, 'dot(): Inequal Lengths' );

    return this.reduce( function ( a, b, index ) {
        return a + b * vector[ index ];
    }, 0 );
};

/**
 * Checks whether two vectors are equal
 *
 * @param {array} vector The target vector
 * @return {boolean} true if the two vectors are equal; false otherwise
 */
Array.prototype.equals = function ( vector ) {
    return this.toString() == vector.toString();
};

/**
 * Calculates the norm of a vector
 *
 * @return {number} The norm
 */
Array.prototype.norm = function () {
    return Math.sqrt( this.dot() );
};

/**
 * Scales a vector by a factor
 *
 * @param {number} lambda The scaling factor
 * @return {array} The resulting vector
 */
Array.prototype.scalarMultiply = function ( lambda ) {
    return this.map( function ( value ) {
        return lambda * value;
    } );
};

/**
 * Checks whether two vectors are parallel.
 *
 * @param {array} vector The target vector
 * @return {boolean} true if the two vectors are parallel; false otherwise
 */
Array.prototype.parallel = function ( vector ) {
    var rounded = Math.round( 1000 * v.angle( u ) );
    return !rounded || rounded == Math.round( 1000 * Math.PI );
};

/**
 * Checks whether two vectors are perpendicular.
 *
 * @param {array} vector The target vector
 * @return {boolean} true if the two vectors are perpendicular; false otherwise
 */
Array.prototype.perpendicular = function ( vector ) {
    return !this.dot( vector );
};

/**
 * Subtracts two vectors.
 *
 * @param {array} vector The target vector
 * @return {array} The resulting vector
 */
Array.prototype.subtract = function ( vector ) {
    return this.add( vector.scalarMultiply( -1 ) );
};

/**
 * Converts radians to degrees
 *
 * @return {number} Degrees
 */
Number.prototype.toDegrees = function () {
    return this * 180 / Math.PI;
};

/**
 * Converts degrees to radians
 *
 * @return {number} Radians
 */
Number.prototype.toRadians = function () {
    return this * Math.PI / 180;
};
