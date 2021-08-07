// ***********************************************************
// This example plugins/index.js can be used to load plugins
//
// You can change the location of this file or turn off loading
// the plugins file with the 'pluginsFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/plugins-guide
// ***********************************************************

// const addMAtchImageSnapshotPlugin = require('cypress-image-snapshot/plugin')

const cucumber = require('cypress-cucumber-preprocessor').default
// This function is called when a project is opened or re-opened (e.g. due to
// the project's config changing)

// promisified fs module
const fs = require('fs-extra')
const path = require('path')

function getConfigurationByFile(file) {
  const pathToConfigFile = path.resolve('cypress', 'config', `${file}.json`)

  return fs.readJson(pathToConfigFile)
}

module.exports = (on, config) => {
  // addMatchImageSnapshotPlugin(on, config);

  on('file:preprocessor', cucumber())

  const file = config.env.configFile || 'int'
  return getConfigurationByFile(file)
};
