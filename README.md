# eslint-config-wslfx
Weasel &amp; Fox ESlint config

## Usage

1. Install this package:
```
yarn add -D eslint-config-wslfx
```
2. Install the correct versions of each package, which are listed by the command:

```sh
npm info "eslint-config-wslfx@latest" peerDependencies
```

If using **npm 5+**, use this shortcut

```sh
npx install-peerdeps --dev eslint-config-wslfx
```
3. Create `.eslintrc.js` configuration file:
```js
module.exports = {
  extends: ['wslfx']
}
```
4. Add lint scripts to `package.json`:
```json
"scripts": {
  "lint": "yarn eslint .",
  "lint:fix": "yarn lint --fix"
}
```
5. Run `yarn lint` to lint your code.
6. Run `yarn lint:fix` to lint, format and fix your code.
