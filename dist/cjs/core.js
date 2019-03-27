'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

function cube(x) {
  return x * x * x;
}

function unusedFn() {
    console.log("This Function shouldn't be in the consumer bundle!");
  }

exports.cube = cube;
exports.unusedFn = unusedFn;
//# sourceMappingURL=core.js.map
