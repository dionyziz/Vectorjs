var ol = document.getElementById( 'tests' );

function assert( condition, description ) {
    var li = document.createElement( 'li' );
    var span = document.createElement( 'span' );

    if ( !condition ) {
        li.className = 'fail';
        span.appendChild( document.createTextNode( 'FAIL: ' ) );
        li.appendChild( span );
        li.appendChild( document.createTextNode( description ) );
    }
    else {
        li.className = 'pass';
        li.appendChild( span );
        span.appendChild( document.createTextNode( 'PASS' ) );
    }
    ol.appendChild( li );
}

function assertEquals( expected, actual, description ) {
    assert(
        expected == actual,
        description + ': expected "' + expected + '", saw "' + actual + '"'
    );
}

function assertCloseEnough( expected, actual, description ) {
    assertEquals( Math.round( 10000 * expected ), Math.round( 10000 * actual ), description );
}
