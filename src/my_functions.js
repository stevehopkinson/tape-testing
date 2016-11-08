module.exports = {
  asyncDouble,
}

function asyncDouble (n, cb) {
  setTimeout(function () {
    if (typeof n !== 'number') {
      cb(new TypeError('Expected number'));
    } else {
      cb(null, n * 2);
    }
  }, 10);
}
