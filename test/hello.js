let expect  = require('chai').expect
let styles = require('../src/styles.js').default
let templates = require('../src/templates.js').default
let App = require('../src/app.js').default

suite('app', function(){

  test('can be instantiated', function(done){
    expect((new App)).to.be.an('object')
    done()
  })

})

suite('styles', function(){

  test('styles should be exposed', function(done){
    expect((new App).styles).to.be.a('string')
    done()
  })

  test('styles should not be alterated', function(done){
    expect((new App).styles).to.be.equal(styles)
    done()
  })

})

suite('templates', function(){

  test('templates should be functions', function(done){
    for(let tpl in templates) {
      expect(templates[tpl]).to.be.a('function')
    }
    done()
  })

  test('templates should return strings', function(done){
    for(let tpl in templates) {
      expect(templates[tpl]()).to.be.a('string')
    }
    done()
  })

})
