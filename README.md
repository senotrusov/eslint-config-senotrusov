## A configuration for ESLint, based on a personal preference of Stanislav Senotrusov

This configuration is not fixed and final. In case if a reasonable and beautiful
code fall outside this configuration boundaries, the rules can be changed.

Rules are written for ESLint version 4.0.0

ESLint is a trademark of [jQuery Foundation, Inc.](https://jquery.org/)

## Setup and usage

Install the `eslint` and `eslint-config-senotrusov`

```shell
npm install eslint@"^4.0.0" --save-dev
npm install eslint-config-senotrusov --save-dev
```

Create the `.eslintrc.json`, for example:

```javascript
{
  "extends": "eslint-config-senotrusov",
  "root": true,

  "env": {
    "browser": true,
    "node": true,
    "worker": true,
    "serviceworker": true
  }
}
```

Create the `.eslintignore`, for example:

```
node_modules
```

Add scripts to `package.json`:

```javascript
"scripts": {
  "lint": "eslint .",
  "lint-fix": "eslint . --fix"
}
```

To test your code please run:

```shell
npm run lint
```

To update your code according to the rules, please run the following. Please make sure you will be able to rollback changes by using Version Control, or by using a backup of your code before you rin the `lint-fix` script.

```shell
npm run lint-fix
```


## Copyright and License

```
Copyright 2015-2017 Stanislav Senotrusov

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
```


## Contributing

Please see our [Contributing Guidelines](CONTRIBUTING.md) for details.
