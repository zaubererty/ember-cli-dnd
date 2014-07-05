'use strict';

var path = require('path');
var fs   = require('fs');

function EmberCLIDnD(project) {
  this.project = project;
  this.name    = 'Ember CLI DnD';
}

function unwatchedTree(dir) {
  return {
    read:    function() { return dir; },
    cleanup: function() { }
  };
}

EmberCLIDnD.prototype.treeFor = function treeFor(name) {
  var treePath =  path.join('node_modules', 'ember-cli-dnd', name);

  if (fs.existsSync(treePath)) {
    return unwatchedTree(treePath);
  }
};

EmberCLIDnD.prototype.included = function included(app) {
  this.app = app;
};

module.exports = EmberCLIDnD;
