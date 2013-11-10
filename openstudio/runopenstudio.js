var assert = require('assert')
var openstudio = require('OpenStudio.js').openstudio;

var polyline = require('/home/ubuntu/dev/aeChack.github.io/openstudio/polyline.json');

model = openstudio.model.Model();

var osmpath = new openstudio.path("~/aeChack.osm");
console.log("Saving OSM to " + openstudio.toString(osmpath));

model.save(osmpath, true);