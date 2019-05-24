var should = require( 'should' );
var sum = require( '../sum' );

describe( 'sum.js', function() {
  it( 'sum of 2 + 3 should return 5', function() {
    sum( 2, 3 ).should.be.equal( 5 );
  });
});
