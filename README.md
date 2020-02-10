# react-native-template-thejoaov-redux

`react-native init "myApp" --template=thejoaov-redux`

or

`npx react-native-cli init "myApp" --template=thejoaov-redux`

---

Template created to save time configuring a new react-native project.
It comes with:

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
- prettier
- eslint-plugin-prettier
- eslint-config-prettier
- @react-native-community/eslint-config
- husky
- lint-staged

### Structure

```bash
thejoaov-redux
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
