var Vector = function ( point ) {
    this.point = point;
};
Vector.prototype = {
    add: function ( vector ) {
        if ( this.point.length != vector.point.length ) {
            throw 'add(): Inequal lengths';
            return null;
        }

        var newPoint = [];
        this.each( function ( value, i ) {
            newPoint.push( value + vector.point[ i ] );
        } );
        return new Vector( newPoint );
    },
    angle: function ( x, y ) {
        return Math.atan( this.point[ y ] / this.point[ x ] ) * 180 / Math.PI;
    },
    distance: function ( vector ) {
        return this.subtract( vector ).length();
    },
    dot: function ( vector ) {
        if ( this.point.length != vector.point.length ) {
            throw 'dot(): Inequal lengths';
            return false;
        }

        var sum = 0;
        this.each( function ( value, i ) {
            sum += value * vector.point[ i ];
        } );
        return sum;
    },
    each: function ( f ) {
        for ( var i = 0; i < this.point.length; ++i ) {
            f( this.point[ i ], i );
        }
    },
    equal: function ( vector ) {
        if ( this.point.length != vector.point.length ) {
            throw 'equal(): Inequal lengths';
            return false;
        }

        res = true;
        this.each( function ( value, i ) {
            if ( value != vector.point[ i ] ) {
                res = false;
            }
        } );
        return res;
    },
    length: function () {
        return Math.sqrt( this.dot( this ) );
    },
    map: function ( f ) {
        var newPoint = [];
        this.each( function ( value, i ) {
            newPoint.push( f( value, i ) );
        } );
        return new Vector( newPoint );
    },
    multiply: function ( r ) {
        var newPoint = [];
        this.each( function ( value ) {
            newPoint.push( r * value );
        } );
        return new Vector( newPoint );
    },
    parallel: function ( vector ) {
        var expectedRatio = this.point[ 0 ] / vector.point[ 0 ];

        return this.equal( vector.multiply( expectedRatio ) );
    },
    perpendicular: function ( vector ) {
        return !this.dot( vector );
    },
    subtract: function ( vector ) {
        return this.add( vector.multiply( -1 ) );
    }
};
