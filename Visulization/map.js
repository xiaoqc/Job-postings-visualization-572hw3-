WorldMap = function(svgInstance){
	var svg = svgInstance;
  var m0 = null;
  var o0 = null;
  var feature = null;
  var projection = null;
  var circle = null;
  var scale = null;
  var path = null;
  var zoom = null;
  var mapG = null;

	console.log("load map");


  d3.select(window)
    .on("mousemove", mousemove)
    .on("mouseup", mouseup);


	function initialize(){

    projection = d3.geo.azimuthal()
        .scale(480)
        .origin([-71.03,42.37])
        .mode("orthographic")
        .translate([640, window.innerHeight / 2]);

    circle = d3.geo.greatCircle()
        .origin(projection.origin());

    // TODO fix d3.geo.azimuthal to be consistent with scale
    scale = {
      orthographic: 480,
      stereographic: 480,
      gnomonic: 480,
      equidistant: 480 / Math.PI * 2,
      equalarea: 480 / Math.SQRT2
    };

    path = d3.geo.path()
        .projection(projection);

    mapG = svg.append("g")
      .on("mousedown", mousedown);

    d3.json("map/world-countries.json", function(collection) {
      feature = mapG.selectAll("path")
          .data(collection.features)
          .enter().append("svg:path")
          .attr("d", clip);
      feature.append("svg:title")
          .text(function(d) { return d.properties.name; });
    });

    /*var zoom = d3.behavior.zoom()
    .on("zoom",function() {
        console.log("triggle zoom")
        mapG.attr("transform","translate("+ 
            d3.event.translate.join(",")+")scale("+d3.event.scale+")");
        mapG.selectAll("path")  
            .attr("d", path.projection(projection)); 
    });

    mapG.call(zoom)*/
  }

  function mousedown() {
    visInstance.mapChangeEvent();
    m0 = [d3.event.pageX, d3.event.pageY];
    o0 = projection.origin();
    d3.event.preventDefault();
  }

  function mousemove() {
    if (m0) {
      var m1 = [d3.event.pageX, d3.event.pageY],
          o1 = [o0[0] + (m0[0] - m1[0]) / 8, o0[1] + (m1[1] - m0[1]) / 8];
      projection.origin(o1);
      circle.origin(o1)
      refresh();
    }
  }

  function mouseup() {
    if (m0) {
      mousemove();
      m0 = null;
    }
  }

  function refresh(duration) {
    (duration ? feature.transition().duration(duration) : feature).attr("d", clip);
  }

  function clip(d) {
    return path(circle.clip(d));
  }

  function getCoordinates(geoCode) {
    var coord = projection([geoCode.long, geoCode.lat]);
    return coord;
  }




	//================================================================================================================
	//***********************************For public method************************************************************
	//================================================================================================================

	this.generateMap = function(){
		initialize();
	}

	this.getClusterCoordinates = function(geo){
		return getCoordinates(geo);
	}
}





