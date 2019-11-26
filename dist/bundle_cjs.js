'use strict';

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

var classCallCheck = _classCallCheck;

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

var createClass = _createClass;

var Test =
/*#__PURE__*/
function () {
  function Test() {
    classCallCheck(this, Test);
  }

  createClass(Test, [{
    key: "ccccc",
    value: function ccccc() {
      console.log('cccddcdddc');
    }
  }]);

  return Test;
}();

var Test1 =
/*#__PURE__*/
function () {
  function Test1() {
    classCallCheck(this, Test1);
  }

  createClass(Test1, [{
    key: "ccccc",
    value: function ccccc() {
      console.log('cccdrrd2asdasd22cdddc');
    }
  }]);

  return Test1;
}();

var c = new Test();
console.log(c);
var d = new Test1();
console.log(d);
var a = [1, 2, 3, 4, 5, 6, 7, 8, 9];
a.map(function (item) {
  console.log(item);
});
