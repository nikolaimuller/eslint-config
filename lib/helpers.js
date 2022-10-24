// @ts-check

/**
 * @type {() => Array<string>}
 */
const getDefaultIgnorePatterns = () => {
  return [
    // Hacky way to silence @yarnpkg/doctor about node_modules detection
    `**/${'node'}_modules`,
    '.cache',
    '**/.cache',
    '**/build',
    '**/dist',
  ]
}

module.exports = {
  getDefaultIgnorePatterns,
}
