<div align="center">
  <h1>react-native-template-thejoaov-redux</h1>
<a href="https://www.npmjs.com/package/react-native-template-thejoaov-redux">
  <img alt="npm" src="https://img.shields.io/npm/dw/react-native-template-thejoaov-redux?style=for-the-badge">
</a>
<a href="https://www.npmjs.com/package/react-native-template-thejoaov-redux">
  <img alt="NPM" src="https://img.shields.io/npm/l/react-native-template-thejoaov-redux?style=for-the-badge">
</a>
<a href="https://github.com/thejoaov/react-native-template-thejoaov-redux/search?l=javascript">
  <img alt="GitHub top language" src="https://img.shields.io/github/languages/top/thejoaov/react-native-template-thejoaov-redux?style=for-the-badge">
</a>
<a href="https://www.npmjs.com/package/react-native-template-thejoaov-redux">
  <img alt="npm" src="https://img.shields.io/npm/v/react-native-template-thejoaov-redux?style=for-the-badge">
</a>
<a href="https://github.com/thejoaov/react-native-template-thejoaov-redux/actions">
  <img alt="GitHub Workflow Status" src="https://img.shields.io/github/workflow/status/thejoaov/react-native-template-thejoaov-redux/Publish to NPM?style=for-the-badge">
</a>
</div>

---

`react-native init "myApp" --template=thejoaov-redux`

---

Template created to save time configuring a new react-native project.
It comes with:

### VsCode Extensions:

- Eslint
- Prettier
- EditorConfig
- Rocketseat React Native Snippets
- VsCode Styled Components
- GitLens
- Material Icon Theme

### Dependencies:

- axios
- immer
- prop-types
- react-native-gesture-handler
- react-navigation
- react-redux
- reactotron-react-native
- reactotron-redux
- reactotron-redux-saga
- redux
- redux-persist
- reduxsauce
- redux-saga
- seamless-immutable
- styled-components

### DevDependencies:
- @commitlint/cli
- @commitlint/config-angular
- @react-native-community/eslint-config
- babel-eslint
- babel-plugin-root-import
- babel-plugin-transform-remove-console
- eslint
- eslint-config-airbnb
- eslint-import-resolver-babel-plugin-root-import
- eslint-plugin-import
- eslint-plugin-jsx-a11y
- eslint-plugin-react
- eslint-plugin-react-native
- eslint-plugin-prettier
- eslint-config-prettier
- husky
- lint-staged
- prettier

### Structure

```bash
thejoaov-redux
├── .vscode
│   └── extensions.json
├── src
│   ├── config
│   │   └── ReactotronConfig.js
│   ├── pages
│   │   └── Main
│   │       ├── index.js
│   │       └── styles.js
│   ├── services
│   │   └── api.js
│   ├── store
│   │   ├── modules
│   │   │   ├── auth
│   │   │   │   ├── actions.js
│   │   │   │   ├── reducer.js
│   │   │   │   └── sagas.js
│   │   │   ├── rootReducer.js
│   │   │   └── rootSaga.js
│   │   ├── createStore.js
│   │   ├── index.js
│   │   └── persistReducers.js
│   ├── index.js
│   └── routes.js
├── .editorconfig
├── .eslintrc.js
├── .gitignore
├── .huskyrc.js
├── .lintstagedrc.js
├── .prettierrc.js
├── LICENSE
├── README.md
├── babel.config.js
├── dependencies.json
├── devDependencies.json
├── index.js
├── jsconfig.json
└── package.json
```

### About husky and lint-staged

After the project was created with `react-native-cli`, probably the git will not be initialized, thus, during the husky package installation, there will be no `.git` folder to install husky's hooks. The workaround if you want to use these two pre-configured packages is:

1 - After the project created, do `rm -rf node_modules` (or delete `node_modules` folder manually);

2 - Initialize git repository with `git init` (this will create the `.git` folder);

3 - Do the initial commit, with `git add . && git commit -m "Initial Commit"`;

4 - Reinstall the modules with `yarn install` or `npm install`;

Then these two will be normally working :sweat_smile:
