var assert = require('assert');
var openstudio = require('OpenStudio.js').openstudio;

function addExampleConstructions(model)
{

  var defaultConstructions = new openstudio.model.DefaultConstructionSet(model);
  defaultConstructions.setName("Default Constructions");
  var exteriorSurfaceConstructions = new openstudio.model.DefaultSurfaceConstructions(model);
  exteriorSurfaceConstructions.setName("Exterior Surface Constructions");
  defaultConstructions.setDefaultExteriorSurfaceConstructions(exteriorSurfaceConstructions);
  var interiorSurfaceConstructions = new openstudio.model.DefaultSurfaceConstructions(model);
  interiorSurfaceConstructions.setName("Interior Surface Constructions");
  defaultConstructions.setDefaultInteriorSurfaceConstructions(interiorSurfaceConstructions);
  var groundContactSurfaceConstructions = new openstudio.model.DefaultSurfaceConstructions(model);
  groundContactSurfaceConstructions.setName("Ground Contact Surface Constructions");
  defaultConstructions.setDefaultGroundContactSurfaceConstructions(groundContactSurfaceConstructions);
  var exteriorSubSurfaceConstructions = new openstudio.model.DefaultSubSurfaceConstructions(model);
  exteriorSubSurfaceConstructions.setName("Exterior SubSurface Constructions");
  defaultConstructions.setDefaultExteriorSubSurfaceConstructions(exteriorSubSurfaceConstructions);
  var interiorSubSurfaceConstructions = new openstudio.model.DefaultSubSurfaceConstructions(model);
  interiorSubSurfaceConstructions.setName("Interior SubSurface Constructions");
  defaultConstructions.setDefaultInteriorSubSurfaceConstructions(interiorSubSurfaceConstructions);

  var opaqueMaterials = new openstudio.model.OpaqueMaterialVector();

  // Exterior Wall

  var m01_100mm_brick = new openstudio.model.StandardOpaqueMaterial(model);
  m01_100mm_brick.setName("M01 100mm brick");
  m01_100mm_brick.setRoughness("MediumRough");
  m01_100mm_brick.setThickness(0.1016);
  m01_100mm_brick.setThermalConductivity(0.89);
  m01_100mm_brick.setDensity(1920.0);
  m01_100mm_brick.setSpecificHeat(790.0);

  opaqueMaterials.add(m01_100mm_brick);

  var m15_200mm_heavyweight_concrete = new openstudio.model.StandardOpaqueMaterial(model);
  m15_200mm_heavyweight_concrete.setName("M15 200mm heavyweight concrete");
  m15_200mm_heavyweight_concrete.setRoughness("MediumRough");
  m15_200mm_heavyweight_concrete.setThickness(0.2032);
  m15_200mm_heavyweight_concrete.setThermalConductivity(1.95);
  m15_200mm_heavyweight_concrete.setDensity(2240.0);
  m15_200mm_heavyweight_concrete.setSpecificHeat(900.0);

  opaqueMaterials.add(m15_200mm_heavyweight_concrete);

  var i02_50mm_insulation_board = new openstudio.model.StandardOpaqueMaterial(model);
  i02_50mm_insulation_board.setName("I02 50mm insulation board");
  i02_50mm_insulation_board.setRoughness("MediumRough");
  i02_50mm_insulation_board.setThickness(0.0508);
  i02_50mm_insulation_board.setThermalConductivity(0.03);
  i02_50mm_insulation_board.setDensity(43.0);
  i02_50mm_insulation_board.setSpecificHeat(1210.0);

  opaqueMaterials.add(i02_50mm_insulation_board);

  var f04_wall_air_space_resistance = new openstudio.model.AirGap(model);
  f04_wall_air_space_resistance.setName("F04 Wall air space resistance");
  f04_wall_air_space_resistance.setThermalResistance(0.15);

  opaqueMaterials.add(f04_wall_air_space_resistance);

  var g01a_19mm_gypsum_board = new openstudio.model.StandardOpaqueMaterial(model);
  g01a_19mm_gypsum_board.setName("G01a 19mm gypsum board");
  g01a_19mm_gypsum_board.setRoughness("MediumSmooth");
  g01a_19mm_gypsum_board.setThickness(0.019);
  g01a_19mm_gypsum_board.setThermalConductivity(0.16);
  g01a_19mm_gypsum_board.setDensity(800.0);
  g01a_19mm_gypsum_board.setSpecificHeat(1090.0);

  opaqueMaterials.add(g01a_19mm_gypsum_board);

  var exteriorWall = new openstudio.model.Construction(opaqueMaterials);
  exteriorWall.setName("Exterior Wall");
  exteriorWall.setInsulation(i02_50mm_insulation_board);
  exteriorSurfaceConstructions.setWallConstruction(exteriorWall);
  opaqueMaterials.clear();

  // Exterior Roof

  var m11_100mm_lightweight_concrete = new openstudio.model.StandardOpaqueMaterial(model);
  m11_100mm_lightweight_concrete.setName("M11 100mm lightweight concrete");
  m11_100mm_lightweight_concrete.setRoughness("MediumRough");
  m11_100mm_lightweight_concrete.setThickness(0.1016);
  m11_100mm_lightweight_concrete.setThermalConductivity(0.53);
  m11_100mm_lightweight_concrete.setDensity(1280.0);
  m11_100mm_lightweight_concrete.setSpecificHeat(840.0);

  opaqueMaterials.add(m11_100mm_lightweight_concrete);

  var f05_ceiling_air_space_resistance = new openstudio.model.AirGap(model);
  f05_ceiling_air_space_resistance.setName("F05 Ceiling air space resistance");
  f05_ceiling_air_space_resistance.setThermalResistance(0.18);

  opaqueMaterials.add(f05_ceiling_air_space_resistance);

  var f16_acoustic_tile = new openstudio.model.StandardOpaqueMaterial(model);
  f16_acoustic_tile.setName("F16 Acoustic tile");
  f16_acoustic_tile.setRoughness("MediumSmooth");
  f16_acoustic_tile.setThickness(0.0191);
  f16_acoustic_tile.setThermalConductivity(0.06);
  f16_acoustic_tile.setDensity(368.0);
  f16_acoustic_tile.setSpecificHeat(590.0);

  opaqueMaterials.add(f16_acoustic_tile);

  var exteriorRoof = new openstudio.model.Construction(opaqueMaterials);
  exteriorRoof.setName("Exterior Roof");
  exteriorSurfaceConstructions.setRoofCeilingConstruction(exteriorRoof);
  opaqueMaterials.clear();

  // Interior Floor

  opaqueMaterials.add(f16_acoustic_tile);
  opaqueMaterials.add(f05_ceiling_air_space_resistance);
  opaqueMaterials.add(m11_100mm_lightweight_concrete);

  var interiorFloor = new openstudio.model.Construction(opaqueMaterials);
  interiorFloor.setName("Interior Floor");
  interiorSurfaceConstructions.setFloorConstruction(interiorFloor);
  opaqueMaterials.clear();

  // Air Wall

  var airWallMaterial = new openstudio.model.AirWallMaterial(model);
  airWallMaterial.setName("Air Wall Material");

  var airWall = new openstudio.model.Construction(openstudio.model.toModelPartitionMaterial(airWallMaterial).get());
  airWall.setName("Air Wall");
  interiorSurfaceConstructions.setWallConstruction(airWall);

  // Interior Ceiling

  opaqueMaterials.add(m11_100mm_lightweight_concrete);
  opaqueMaterials.add(f05_ceiling_air_space_resistance);
  opaqueMaterials.add(f16_acoustic_tile);

  var interiorCeiling = new openstudio.model.Construction(opaqueMaterials);
  interiorCeiling.setName("Interior Ceiling");
  interiorSurfaceConstructions.setRoofCeilingConstruction(interiorCeiling);
  opaqueMaterials.clear();

  // Slab

  var mat_cc05_8_hw_concrete = new openstudio.model.StandardOpaqueMaterial(model);
  mat_cc05_8_hw_concrete.setName("MAT-CC05 8 HW CONCRETE");
  mat_cc05_8_hw_concrete.setRoughness("Rough");
  mat_cc05_8_hw_concrete.setThickness(0.2032);
  mat_cc05_8_hw_concrete.setThermalConductivity(1.3110);
  mat_cc05_8_hw_concrete.setDensity(2240.0);
  mat_cc05_8_hw_concrete.setSpecificHeat(836.8);
  mat_cc05_8_hw_concrete.setThermalAbsorptance(0.9);
  mat_cc05_8_hw_concrete.setSolarAbsorptance(0.7);
  mat_cc05_8_hw_concrete.setVisibleAbsorptance(0.7);

  opaqueMaterials.add(mat_cc05_8_hw_concrete);

  var cp02_carpet_pad = new openstudio.model.MasslessOpaqueMaterial(model);
  cp02_carpet_pad.setName("CP02 CARPET PAD");
  cp02_carpet_pad.setRoughness("VeryRough");
  cp02_carpet_pad.setThermalResistance(0.2165);
  cp02_carpet_pad.setThermalAbsorptance(0.9);
  cp02_carpet_pad.setSolarAbsorptance(0.7);
  cp02_carpet_pad.setVisibleAbsorptance(0.8);

  opaqueMaterials.add(cp02_carpet_pad);

  var slab = new openstudio.model.Construction(opaqueMaterials);
  slab.setName("Slab");
  groundContactSurfaceConstructions.setFloorConstruction(slab);
  opaqueMaterials.clear();

  var fenestrationMaterials = new openstudio.model.FenestrationMaterialVector();

  // Exterior Window

  var simple_glazing = new openstudio.model.SimpleGlazing(model);
  simple_glazing.setName("Simple Glazing");
  simple_glazing.setUFactor(3.23646);
  simple_glazing.setSolarHeatGainCoefficient(0.39);
  simple_glazing.setVisibleTransmittance(0.6);

  var clear_3mm = new openstudio.model.StandardGlazing(model);
  clear_3mm.setName("Clear 3mm");
  clear_3mm.setOpticalDataType("SpectralAverage");
  clear_3mm.setThickness(0.003);
  clear_3mm.setSolarTransmittance(0.837);
  clear_3mm.setFrontSideSolarReflectanceatNormalIncidence(0.075);
  clear_3mm.setBackSideSolarReflectanceatNormalIncidence(0.075);
  clear_3mm.setVisibleTransmittance(0.898);
  clear_3mm.setFrontSideVisibleReflectanceatNormalIncidence(0.081);
  clear_3mm.setBackSideVisibleReflectanceatNormalIncidence(0.081);
  clear_3mm.setInfraredTransmittance(0.0);
  clear_3mm.setFrontSideInfraredHemisphericalEmissivity(0.084);
  clear_3mm.setBackSideInfraredHemisphericalEmissivity(0.084);
  clear_3mm.setThermalConductivity(0.9);

  var air_13mm = new openstudio.model.Gas(model);
  air_13mm.setName("Air 13mm");
  air_13mm.setGasType("Air");
  air_13mm.setThickness(0.0127);

  //fenestrationMaterials.add(clear_3mm);
  //fenestrationMaterials.add(air_13mm);
  //fenestrationMaterials.add(clear_3mm);

  // DLM: use simple glazing so we can know window properties without requiring E+ run
  fenestrationMaterials.add(openstudio.model.toFenestrationMaterial(simple_glazing).get());

  var exteriorWindow = new openstudio.model.Construction(fenestrationMaterials);
  exteriorWindow.setName("Exterior Window");
  exteriorSubSurfaceConstructions.setFixedWindowConstruction(exteriorWindow);
  exteriorSubSurfaceConstructions.setOperableWindowConstruction(exteriorWindow);
  exteriorSubSurfaceConstructions.setGlassDoorConstruction(exteriorWindow);
  exteriorSubSurfaceConstructions.setSkylightConstruction(exteriorWindow);
  exteriorSubSurfaceConstructions.setTubularDaylightDomeConstruction(exteriorWindow);
  exteriorSubSurfaceConstructions.setTubularDaylightDiffuserConstruction(exteriorWindow);
  fenestrationMaterials.clear();

  // Interior Window

  //fenestrationMaterials.add(clear_3mm);

  // DLM: use simple glazing so we can know window properties without requiring E+ run
  fenestrationMaterials.add(openstudio.model.toFenestrationMaterial(simple_glazing).get());

  var interiorWindow = new openstudio.model.Construction(fenestrationMaterials);
  interiorWindow.setName("Interior Window");
  interiorSubSurfaceConstructions.setFixedWindowConstruction(interiorWindow);
  interiorSubSurfaceConstructions.setOperableWindowConstruction(interiorWindow);
  interiorSubSurfaceConstructions.setGlassDoorConstruction(interiorWindow);
  interiorSubSurfaceConstructions.setSkylightConstruction(interiorWindow);
  interiorSubSurfaceConstructions.setTubularDaylightDomeConstruction(interiorWindow);
  interiorSubSurfaceConstructions.setTubularDaylightDiffuserConstruction(interiorWindow);
  fenestrationMaterials.clear();

  // Interior Door

  var g05_25mm_wood = new openstudio.model.StandardOpaqueMaterial(model);
  g05_25mm_wood.setName("G05 25mm wood");
  g05_25mm_wood.setRoughness("MediumSmooth");
  g05_25mm_wood.setThickness(0.0254);
  g05_25mm_wood.setThermalConductivity(0.15);
  g05_25mm_wood.setDensity(608.0);
  g05_25mm_wood.setSpecificHeat(1630.0);

  opaqueMaterials.add(g05_25mm_wood);

  var interiorDoor = new openstudio.model.Construction(opaqueMaterials);
  interiorDoor.setName("Interior Door");
  interiorSubSurfaceConstructions.setDoorConstruction(interiorDoor);
  interiorSubSurfaceConstructions.setOverheadDoorConstruction(interiorDoor);
  opaqueMaterials.clear();

  // Interior Partition

  opaqueMaterials.add(g05_25mm_wood);

  var interiorPartition = new openstudio.model.Construction(opaqueMaterials);
  interiorPartition.setName("Interior Partition");
  defaultConstructions.setInteriorPartitionConstruction(interiorPartition);
  opaqueMaterials.clear();
}

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
	addExampleConstructions(model);
	createGeometry(model);
	saveModel(model);
	return model 
}

createModel();
