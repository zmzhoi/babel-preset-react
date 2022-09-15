# ✔️ @zmzhoi/babel-preset-react ✔️

> React app 프로젝트에서 사용하는 Babel preset 입니다.

### ❗️ Notice ❗️

- **@babel/preset-env**

  - **No Targets** 옵션이 적용되어 있습니다. (Older browsers)
  - code size를 줄이기 위해, `targets` 옵션을 명시하는 것을 권장합니다. -> `browserslist`를 사용하세요.
  - `Polyfill` 삽입이 허용되어 있습니다.

    ```
      {
        useBuiltIns: 'entry',
        corejs: 3,
      }
    ```

    `Polyfill` 삽입을 원하시면 `core-js@3`을 설치하고 entry 파일 최상단에서 `core-js`를 import하세요.

    installation:

    ```
      npm install core-js@3
    ```

    then:

    ```
      import "core-js"; // top of entry file
    ```

    > ❗️ `process.env.BABEL_ENV` 혹은 `process.env.NODE_ENV` 가 'test'인 경우, 테스트 환경으로 간주하고 `targets` 이 **현재 노드 버전**으로 설정됩니다.

- **@babel/plugin-transform-runtime**
  - code size를 줄이기 위해 `@babel/plugin-transform-runtime` 플러그인을 사용하고 있습니다.
  - `Polyfill`은 `@babel/plugin-transform-runtime` 에서는 관여하지 않습니다.
- **@babel/preset-typescript**

  - `Typescript`를 지원합니다.
  - `Typescript` 빌드 시간을 줄이기 위해 `@babel/preset-typescript` 를 사용합니다.
  - `Webpack`으로 번들링을 하는 경우 [fork-ts-checker-webpack-plugin](https://github.com/TypeStrong/fork-ts-checker-webpack-plugin) 플러그인을 함께 사용하세요.

- **@babel/preset-react**
  - `react/jsx-runtime` 모듈 존재 여부를 체크합니다.
  - 존재한다면, runtime 옵션을 `automatic` 으로 설정합니다.
  - 존재하지 않는다면, runtime 옵션을 `classic` 으로 설정합니다.
