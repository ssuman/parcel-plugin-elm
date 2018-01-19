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
  
  async getDependencies() {
    await super.getDependencies()
    let deps = await findAllDependencies(this.name);
    deps.forEach(dep => {
      this.addDependency(dep, { includedInParent: true });
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
