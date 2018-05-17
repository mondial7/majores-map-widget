let expect  = require('chai').expect
let KnopfyDope = require('../src/knopfy-dope.js').default

suite('Hello', function(){

  test('should return corret hello message', function(done){
    expect(KnopfyDope.hello).to.be.equal('Do I know you?')
    done()
  })

})
