'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

function cube(x) {
  return x * x * x;
}

function consumerFn(){
    console.log(cube(3));
}

exports.consumerFn = consumerFn;
