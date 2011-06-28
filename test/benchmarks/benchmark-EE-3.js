var testCase = require('nodeunit').testCase;

module.exports = testCase({

 '100K events test with 300K emits on EE without namespacing': function (test) {
   
    var EventEmitter2 = require('events').EventEmitter;
    var emitter = new EventEmitter2;

    var iterations = 100000;
    var len = 10;
    var event = '';

    console.time('EE_3');
    for (var i = 0; i < len*10; i++) {
      for (var j = 0; j < len; j++){
        for (var k = 0; k < len; k++){
          for (var l = 0; l < len; l++){
            event = [i,j,k,l,i,j,k,l].join('');
            emitter.on(event, function () { test.ok(true,'emit') });
          }
        }
      }
    }

    while (iterations--) {
      emitter.emit('1163911639');
      emitter.emit('5121251212');
      emitter.emit('9137291372');
    }

    console.timeEnd('EE_3');
    test.expect(300000);
    test.done();
  }
});
