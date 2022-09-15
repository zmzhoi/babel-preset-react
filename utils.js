const { existsSync } = require('fs');
const path = require('path');

function _resolve(relativePath) {
  const rootPath = process.cwd();
  return path.resolve(rootPath, relativePath);
}

module.exports = {
  hasTypescriptConfigFile() {
    return existsSync(_resolve('tsconfig.json'));
  },
  hasReactJsxRuntime() {
    try {
      // >= react 17
      require.resolve('react/jsx-runtime');
      return true;
    } catch (e) {
      // < react 17
      return false;
    }
  },
  getBabelRuntimePath() {
    try {
      // @babel/runtime 모듈에 entry 파일이 없어서 package.json 파일을 탐색.
      return path.dirname(require.resolve('@babel/runtime/package.json'));
    } catch (error) {
      throw new Error('@babel/runtime must be installed!');
    }
  },
};
