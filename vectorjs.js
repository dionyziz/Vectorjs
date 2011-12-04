var Vector = function ( point ) {
    this.point = point;
};
Vector.prototype = {
    add: function ( vector ) {
        if ( this.point.length != vector.point.length ) {
            return null;
        }

        var newPoint = [];
        for ( var i = 0; i < this.point.length; ++i ) {
            newPoint[ i ] = this.point[ i ] + vector.point[ i ];
        }
        return new Vector( newPoint );
    },
    distance: function ( vector ) {
        return this.subtract( vector ).length();
    },
    dot: function ( vector ) {
        if ( this.point.length != vector.point.length ) {
            return false;
        }

        var sum = 0;
        for ( var i = 0; i < this.point.length; ++i ) {
            sum += this.point[ i ] * vector.point[ i ];
        }
        return sum;
    },
    equal: function ( vector ) {
        if ( this.point.length != vector.point.length ) {
            return false;
        }

        for ( var i = 0; i < this.point.length; ++i ) {
            if ( this.point[ i ] != vector.point[ i ] ) {
                return false;
            }
        }
        return true;
    },
    length: function () {
        return Math.sqrt( this.dot( this ) );
    },
    multiply: function ( r ) {
        var newPoint = [];
        for ( var i = 0; i < this.point.length; ++i ) {
            newPoint[ i ] = r * this.point[ i ];
        }
        return new Vector( newPoint );
    },
    subtract: function ( vector ) {
        return this.add( vector.multiply( -1 ) );
    }
};
