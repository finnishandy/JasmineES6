import AbstractComponentViewController from '../es6/abstract-component-view-controller';

describe('jasmine-node', function(){



  it('should pass', function(){

    var x =  new AbstractComponentViewController("foo")
    expect(x.getConfig()).toEqual("foo");
  });

  it('shows asynchronous test', function(){
    expect('first').toEqual('first');
  });

  it('shows asynchronous test node-style', function(done){
    setTimeout(function(){
      expect('second').toEqual('second');
      // If you call done() with an argument, it will fail the spec 
      // so you can use it as a handler for many async node calls
      done();
    }, 1);
    expect('first').toEqual('first');
  });
});
