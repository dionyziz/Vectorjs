var ol = document.getElementById( 'tests' );

var assert = function( condition, description ) {
    var li = document.createElement( 'li' );
    var span = document.createElement( 'span' );

    if ( condition ) {
        li.className = 'pass';
        li.appendChild( span );
        span.appendChild( document.createTextNode( 'PASS' ) );
    }
    else {
        li.className = 'fail';
        li.appendChild( span );
        span.appendChild( document.createTextNode( 'FAIL: ' ) );
        li.appendChild( document.createTextNode( description ) );
    }
    ol.appendChild( li );
};

var assertEquals = function( expected, actual, description ) {
    assert(
        expected == actual,
        description + ': expected "' + expected + '", saw "' + actual + '"'
    );
};

var assertCloseEnough = function( expected, actual, description ) {
    assertEquals( Math.round( 10000 * expected ), Math.round( 10000 * actual ), description );
};
