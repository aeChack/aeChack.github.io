var assert = require('assert');
var openstudio = require('OpenStudio.js').openstudio;

var polyline = require('/home/ubuntu/dev/aeChack.github.io/openstudio/polyline.json');

model = new openstudio.model.Model();

// set building story height
var floorHeight = 3.5;

// set the number of stories
var stories = 10;

// create each building story
for (var i=0; i<stories; i++)
{
	// create a thermal zone
	//this['thermalZone' + i] = new openstudio.model.ThermalZone(model);
	
	// create story
	var zCoord = i * floorHeight;
	this['story' + i] = new openstudio.model.BuildingStory(model);
	this['story' + i].setNominalZCoordinate(zCoord);
	this['story' + i].setNominalFloortoFloorHeight(floorHeight);
	
	// create floor print
	var floorPrint = new openstudio.Point3dVector();
	
	for (var i = 0; i < polyline.vertices.length; i++)
	{
		floorPrint.add(new openstudio.Point3d(polyline.vertices[i][0],polyline.vertices[i][1],polyline.vertices[i][2]));
	}

	// make spaces
	var thermalZone = new openstudio.model.ThermalZone(model);
	this['space' + i] = openstudio.model.Space.fromFloorPrint(floorPrint, floorHeight, model);
	this['space' + i].get().setThermalZone(thermalZone);
	//this['space' + i].get().setBuildingStory(story);
}

// set file path location and save out model
var osmpath = new openstudio.path("aeChack.osm");
console.log("Saving OSM to " + openstudio.toString(osmpath));

model.save(osmpath, true);
