/**
 * Husky hooks
 * Read more on
 * https://www.npmjs.com/package/husky
 * or
 * https://github.com/typicode/husky
 */

module.exports = {
  hooks: {
    'pre-commit': 'lint-staged',
    'commit-msg': 'commitlint -E HUSKY_GIT_PARAMS',
  },
};
