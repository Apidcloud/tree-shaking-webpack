# tree-shaking-webpack
A minimum repro for webpack's tree shaking (**not working for now**)

## Goal
Bundle every file from each package (`/src` and `/another-package/src`) in their own bundle (`core` and `consumer` respectively).

`another-package` only uses one of the functions (`cube`), so its bundle (`consumer`) **should not** have the other functions exported by `core` (i.e., the bundle from the files from `/src`).

## Issue
Despite `another-package` not consuming any other function (other than `cube`), its bundle `consumer` is still showing `someUnusedFn` that is exported by `core`.

Similar issues:
- https://stackoverflow.com/questions/47663486/webpack-3-babel-and-tree-shaking-not-working?rq=1
- https://stackoverflow.com/questions/48599352/webpack-including-unused-exports-in-final-bundle-not-tree-shaking

