/**
 * Checks whether the condition is true
 *
 * @param {boolean} condition The condition to be checked
 * @param {string} description The thrown string if condition is false
 * @throws {FalseCondition} Throws the description if condition is false
 */
var assert = function ( condition, description ) {
    if ( !condition ) {
        throw description;
    }
};

/**
 * Adds two vectors
 *
 * @param {array} vector The target vector to add to the current vector
 * @throws {InequalLengths} If they have different dimensions
 * @return {array} The resulting vector
 */
Array.prototype.add = function ( vector ) {
    assert( this.length == vector.length, 'add(): Inequal Lengths' );

    return this.map( function ( value, index ) {
        return vector[ index ] + value;
    } );
};

/**
 * Calculates the angle between the current vector and a target vector
 *
 * @param {array} vector The target vector
 * @return {number} Radians
 */
Array.prototype.angle = function ( vector ) {
    return Math.acos( this.dot( vector ) / ( this.norm() * vector.norm() ) );
};

/**
 * Calculates the distance between the current vector and a target vector
 *
 * @param {array} vector The target vector
 * @return {number} The distance
 */
Array.prototype.distance = function ( vector ) {
    return this.subtract( vector ).norm();
};

/**
 * Calculates the squared distance between the current vector and a target vector
 *
 * @param {array} vector The target vector
 * @return {number} The square of the distance
 */
Array.prototype.distance2 = function ( vector ) {
    return this.subtract( vector ).dot();
};

/**
 * Calculates the dot product between the current vector and a target vector
 *
 * @param {array} vector The target vector. If omitted, the current is assumed
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
 * Checks whether two vectors are equal. The check is performed between
 * the current vector and a target vector.
 *
 * @param {array} vector The target vector
 * @return {boolean} true if the two vectors are equal; false otherwise
 */
Array.prototype.equals = function ( vector ) {
    return this.toString() == vector.toString();
};

/**
 * Calculates the norm of the current vector
 *
 * @return {number} The norm
 */
Array.prototype.norm = function () {
    return Math.sqrt( this.dot() );
};

/**
 * Scales the current vector by a factor
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
 * @param {array} vector The vector to check against
 * @return {boolean} true if the two vectors are parallel; false otherwise
 */
Array.prototype.parallel = function ( vector ) {
    var expectedRatio = this[ 0 ] / vector[ 0 ];

    return this.equals( vector.scalarMultiply( expectedRatio ) );
};

/**
 * Checks whether two vectors are perpendicular.
 *
 * @param {array} vector The vector to check against
 * @return {boolean} true if the two vectors are perpendicular; false otherwise
 */
Array.prototype.perpendicular = function ( vector ) {
    return !this.dot( vector );
};

/**
 * Subtracts two vectors.
 *
 * @param {array} vector The target vector to subtract from the current vector
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
