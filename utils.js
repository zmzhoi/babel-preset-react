const { existsSync } = require('fs');
const path = require('path');

function _resolve(relativePath) {
  const rootPath = process.cwd();
  return path.resolve(rootPath, relativePath);
}

function hasTypescriptConfigFile() {
  return existsSync(_resolve('tsconfig.json'));
}

module.exports = {
  hasTypescriptConfigFile,
};
