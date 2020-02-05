var gulp = require('gulp');
var includeSettings = require('./tasks/general/settings.js');
var includeScss = require('./tasks/scss/scss.js');
var includeZipify = require('./tasks/javascripts/webpack.js');
var includeBrowserSync = require('./tasks/browser-sync/browser-sync.js');
var includeIcons = require('./tasks/icons/icons.js');
var includeDeploy = require('./tasks/deploy/deploy.js');
var includeDeployJS = require('./tasks/deploy/deployJS.js');
var includeDeployCSS = require('./tasks/deploy/deployCSS.js');
var includeDeployPHP = require('./tasks/deploy/deployPHP.js');
var includeDeployTPL = require('./tasks/deploy/deployTPL.js');
var includeDeployJSON = require('./tasks/deploy/deployJSON.js');
var includeDeployIMG = require('./tasks/deploy/deployIMG.js');
var includeMinify = require('./tasks/minify/minify.js');
var beautifyCss = require('./tasks/beautify/beautify.js');
pepe
