function cube(x) {
  return x * x * x;
}

function unusedFn() {
    console.log("This Function shouldn't be in the consumer bundle!");
  }

export { cube, unusedFn };
//# sourceMappingURL=core.js.map
