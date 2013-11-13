aeChack Read Me
===============
Team entry for the [AEC Hackathon]( http://www.aechackathon.com/ ) 2013 held at Facebook HQ, Menlo Park CA 2013-11-08/10

## Concept
aeChack is a free, online and open source platform for running and visualizing environmental analysis using daylighting and energy analysis engines.

## GitHub Presence
Hosted code: [aechack.github.io]( http://aechack.github.io/ )

Source code: [github.com/aechack]( https://github.com/aechack )

***
## Ongoing Work

[Run Radiation Analysis #2]( http://aeChack.github.io/radiance-02/radianceAnalysisRun.html )

* 2013-11-13 ~ Limited version. Only loads two external files: New York sun data and user-selected building JSON data. To be used as the basis for further development.

[Hot Spot #2 ~ Export polyline data for any selected Manhattan building ]( http://aeChack.github.io/hot-spot-02/display-manhattan.html )

* 2013-11-13 ~ Load NYC data, type in address, get building data and then save it to building-polylines folder.

***
## Live demos used in aeChack Team Presentation

[Run Radiation Analysis]( http://aeChack.github.io/radiance/radianceAnalysisRun.html )

* Using radiance [gendaymtx]( http://www.radiance-online.org/learning/documentation/manual-pages/pdfs/gendaymtx.pdf ), the sky for NYC is generated. aeChack calculates the amount of radiation on each building surface.
Currently the analysis does not return visible geometry back to the preview. This shold be be possible very soon.

[Hot Spot #1 ~ 43,961 NYC buildings in 3D ]( http://aeChack.github.io/hot-spot-01/display-manhattan.html )

* Using data obtained from [NYC OpenData]( https://nycopendata.socrata.com/ ), 
aeChack prepared a 3D visualization that can zoom, pan and rotate in real-time all 43,961 buildings in Manhattan, NY. 
The visualization runs in any browser that supports WebGL. No plugins are required. The app is entirely FOSS. 
The team believes this was the first time such a visualization has been accomplished.

***
## Demos built while hacking 2013-11-09

[Warm-Up #9 ~ Read typical JSON file and display in Three.js ]( http://aeChack.github.io/warm-up-07/load-json.html )


[Warm-Up #8 ~ Read NYC data and create Three.js ]( http://aeChack.github.io/warm-up-07/load-nyc-csv.html )

* Read NYC data from file and display with Three.js. Very slow. Many errors

[Warm-Up #7 ~ Read NYC data and save to JSON]( http://aeChack.github.io/warm-up-07/load-nyc-csv.html )

* Read NYC data from file, parse the text and display as text. Save parsed text to file

[Warm-Up #6 ~ Export Three.js data to JSON]( http://aeChack.github.io/warm-up-06/threejs-export.html )

[Warm-Up #5 ~ Save text to file in JavaScript]( http://aeChack.github.io/warm-up-05/fileSaver.html )

[Warm-Up #4 ~ Find Object to object intersection]( http://aeChack.github.io/warm-up-04/object-to-object.html )


[Warm-Up #3 ~ Extruded Polyline with vertex shading]( http://aeChack.github.io/warm-up-03/index.html )

* Each vertex has a color

[Warm-Up #2 ~ Extruded Polyline with sub-divisions]( http://aeChack.github.io/warm-up-02/index.html )

* In wireframe mode to show sub-divisions
* There appears to be no built-in method for dividing straight lines into multiple segments. This could be an issue.

[Warm-Up #1 ~ Cube with sub-divisions]( http://aeChack.github.io/warm-up-01/index.html )

* In wireframe mode to show sub-divisions
* Best app to get-going
* Shadows being cast
* Sliders move object
* Zoom, pan and orbit using your pointing device.

## Data Sources

[NYC Buildings]( http://www.nyc.gov/html/dob/html/home/home.shtml ) ~ BIN and address data

## Copyright and License
Copyright &copy; 2013 aeChack authors ~ All work herein is under the [MIT License](http://jaanga.github.io/libs/jaanga-copyright-and-mit-license.md)


## Change Log

2013-11-13 ~ Theo

* photo gallery added
* 2 new app updates
* Added text to home page


2013-11-11 ~ Theo

* Cleaning up contents

2013-11-9/10 ~ All

* Many additions


2013-11-08 ~ Theo

* First commit of files
