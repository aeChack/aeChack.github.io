var assert = require('assert');
var openstudio = require('OpenStudio.js').openstudio;

function createGeometry(model)
{
	var polyline = require('/home/ubuntu/dev/aeChack.github.io/openstudio/polyline.json');

	// set building story height
	var floorHeight = 3.5;

	// set the number of stories
	var stories = 10;

	// create each building story element
	for (var i=0; i<stories; i++)
	{
		// create story
		var zCoord = i * floorHeight;
		var story = new openstudio.model.BuildingStory(model);
		story.setNominalZCoordinate(zCoord);
		story.setNominalFloortoFloorHeight(floorHeight);
	        
		// create floor prints
		var floorPrint = new openstudio.Point3dVector();

        for (var j = 0; j < polyline.vertices.length; j++)
        {
        	floorPrint.add(new openstudio.Point3d(polyline.vertices[j][0],polyline.vertices[j][1],polyline.vertices[j][2]));
		}
	        
        // create spaces	
		var thermalZone = new openstudio.model.ThermalZone(model);
		var space = openstudio.model.Space.fromFloorPrint(floorPrint, floorHeight, model);
		space.get().setThermalZone(thermalZone);
	}
}

function saveModel(model)
{
	// set file path location and save out model
	var osmpath = new openstudio.path("aeChack.osm");
	console.log("Saving OSM to " + openstudio.toString(osmpath));

	model.save(osmpath, true);
}

function createModel()
{
	model = new openstudio.model.Model();
	createGeometry(model);
	saveModel(model);
	return model 
}

createModel();
