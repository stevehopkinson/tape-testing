var test = require('tape');
var { asyncDouble } = require('../src/my_functions.js');

test('Check tape is working with a simple passing test', function (t) {
  t.pass('a message to print out on success');
  t.end();
});

test('Comparing simple values (numbers, strings and booleans)', function (t) {
  t.plan(3); // Assert number of assertions in test
  t.equal(1, 1, 'Compare simple values');
  t.equal('abc', 'abc'); // Messages are optional
  t.equal(true, true);
  t.end();
})

test('Comparing arrays and objects', function (t) {
  t.deepEqual([1, 2, 3], [1, 2, 3]);
  t.deepEqual({a: 1, b: 2}, {b: 2, a: 1});
  t.end();
})

test('Comparing the same array or object should be done with equal', function (t) {
  var arr = [1, 2, 3];
  var obj = {a: 1, b: 2};
  var identity = function (x) { return x; };

  t.equal(arr, identity(arr));
  t.equal(obj, identity(obj));
  t.end();
})

test('Check whether values are truthy', function (t) {
  t.ok(true);
  t.ok(1);
  t.ok('string');
  t.ok({});
  t.ok([]);
  t.end();
})

test('Check whether values are falsy', function (t) {
  t.notOk(false);
  t.notOk(0);
  t.notOk('');
  t.end();
})

test('Test asyncronous functions', function (t) {
  asyncDouble (2, function (err, result) {
    t.equal(err, null);
    t.equal(result, 4);
    t.end();
  })
})
