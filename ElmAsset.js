const elmCompiler = require('node-elm-compiler');
const findAllDependencies = require("find-elm-dependencies").findAllDependencies;
const fs = require('fs');
const path = require('path');
const process = require('process');
const JSAsset = require('parcel-bundler/src/assets/JSAsset');

class ElmAsset extends JSAsset {

  getParserOptions() {
    const defaultOptions = {
      yes: true,
      cwd: process.cwd(),
    };
    return defaultOptions;
  }
  
  getDependencies() {
    let that = this;
    return findAllDependencies(this.name).then(function(deps) {
      deps.forEach(function(dep) {
        that.addDependency(dep, { includedInParent: true });
      });
    });
  }

  async parse(code) {
    const options = this.getParserOptions();
    const data = elmCompiler.compileToStringSync(this.name, options);
    this.contents = data.toString();
    return await super.parse(this.contents);
  }
}

module.exports = ElmAsset;
