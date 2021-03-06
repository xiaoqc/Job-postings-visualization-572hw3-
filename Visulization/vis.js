Visulization = function(){
	windowWidth = null; 
	windowHeight = null;
	cScale = null;
	rScale = null;
	svg = null;
	gradNode = null;
	colorData = null;
	nodeData = [];
	node = null;
	pos = null;
	force = null;
	dataProcessInstance = null;
	var Map = function(){
		var data = [];
		this.entry = data;
		this.set = function(key, value){
			data[key] = value;
		}
		this.get = function(key){
			return data[key];
		}
		this.has = function(key){
			return (key in data);
		}
		this.delete = function(key){
			data.splice(data.indexOf(key), 1);
		}
		this.clear = function(){
			data = [];
		}
	}
	prePosition = null;
	worldMapInstance = null;
	mapEventFlag = null;
	mapCenter = null;
	date = null;
	info = null;
	

	//initialize variables
	function initialize(){
		windowWidth = window.innerWidth;
		windowHeight = window.innerHeight - 80;

		//decide color of node
		cScale = d3.scale.category20();

		//decide the radius of node
		rScale = d3.scale.linear()
			.range([2,8]);

		//return color of edge
		linkColorScale = d3.scale.linear()         
    		.range([0, 1]);

		//create svg
		svg = d3.select("#mainContainer")                          							
		    .append("svg")
		    .attr("width",windowWidth)
		    .attr("height",windowHeight)
		    .attr("preserveAspectRatio", "xMidYMid")      //for map
		    //.on("mousemove", mousemove);

		//place to show mouse coordinate
		pos = svg.append("text")
			.attr("fill", "gold")
			.attr("font-size", 10);

		//the RGB of colors will be used to paint
		colorData = d3.range(20).map(function(d, i){  
			    return d3.rgb(cScale(i));
			});

		//set the gradient parameter for svg node
		gradNode = svg.append("defs")
		    .selectAll("radialGradient")
		    .data(colorData)
		    .enter()
		    .append("radialGradient")
		    .attr("id", function(d, i){
		        return "grad" + i;
		    })
		    .attr("cx", "50%")
		    .attr("cy", "50%")
		    .attr("r", "70%");
		//Radial gradients use to fill nodes, give a feeling of comet              
		gradNode.append("stop")
		    .attr("offset", "0%")
		    .style("stop-color", function(d){
		        //var color = d3.rgb(cScale(d.color));
		        return "rgb(" + d.r + "," + d.g + "," + d.b + ")";
		    })
		    .attr("stop-opacity", 1);
		gradNode.append("stop")
		    .attr("offset", "20%")
		    .style("stop-color", function(d){
		        return "rgb(" + Math.floor(d.r / 2) + "," + Math.floor(d.g / 2) + "," + Math.floor(d.b / 2) + ")";
		    })
		    .attr("stop-opacity", 0.7);
		gradNode.append("stop")
		    .attr("offset", "100%")
		    .style("stop-color", function(d){
		        return "rgb(0, 0, 0)";
		    })
		    .attr("stop-opacity", 0);
			
		force = d3.layout.force()                 			//create force layout
		    .charge(0)                                        		//charge>0 nodes attract, charge<0 nodes repel, value is the threshold of apply the force
		    .linkDistance(function(d){                		//generally the distance between two nodes who are linked by edge
		        //return (d.source.group==d.target.group)?10:20;
		        return 50;                            		//no group option, the link distance is same 
		    })
		    .friction(0.8)                            		//[0,1] default 0.9, velocity decay after tick
		    .linkStrength(0)                          		//[0,1]  default 1
		    .gravity(0)                            			//the force to drag nodes to the enter
		    .size([windowWidth, windowHeight])
		    //.theta(0)
		    .on("tick",tick);

		node = svg.selectAll(".node");                		//set of all nodes 

		mapEventFlag = false;
		mapCenter = [windowHeight / 2 + 100, windowHeight / 2];

		nodeData = [];
		prePosition = new Map();
		dataProcessInstance = new dataProcess();
		date = svg.append("text")
			.attr("x", windowWidth - 400)
			.attr("y", 100)
			.attr("font-size", 30)
			.attr("fill", "black")
		info = svg.append("text")
			.attr("x", windowWidth - 400)
			.attr("y", 200)
			.attr("font-size", 30)
			.attr("fill", "black")
	}

	//tick function for nodes
	function tick(e) {
	    var k = .1 * e.alpha;                      			// Push nodes toward their designated focus. 
	    if (mapEventFlag)
	    	k = 0.1;
	    node.each(function(d, i) {  
	    	var coord = worldMapInstance.getClusterCoordinates({
		    		"lat" : d.lat,
		    		"lon" : d.lon
		    	});
		    d.coordX = coord[0];
		    d.coordY = coord[1];

	    	var diffx = d.coordX - d.x;
	    	var diffy = d.coordY - d.y;    
	        var distance = Math.sqrt(diffx * diffx + diffy * diffy);
	        
	        d.x += diffx * k;
	        d.y += diffy * k;	       
	    });

	    node.attr("cx", function(d) { 
	    		d.x = Math.max(d.radius, Math.min(windowWidth - d.radius, d.x)); 
	    		return d.x;
	    	})
	        .attr("cy", function(d) { 
	        	d.y = Math.max(d.radius, Math.min(windowHeight - d.radius, d.y)); 
	        	return d.y;
	        });
	    //mapEventFlag = false;
	}  

	//format data to required style
	function initializeData(data){
		var maxNum = 0;
		data.forEach(function(item, i){
			nodeData.push([]);
			item.forEach(function(d){
				var tmplat = parseFloat(d.lat);
				var tmplon = parseFloat(d.lon);
				if (tmplon != NaN && tmplat != NaN){
					var coord = worldMapInstance.getClusterCoordinates({
			    		"lat" : d.lat,
			    		"lon" : d.lon
			    	});
			    	var flag = true;
			    	d.coordX = coord[0];
			    	d.coordY = coord[1];
			    	var dX = d.coordX - 640;
			    	var dY = d.coordY - (window.innerHeight - 80) / 2;
			    	var dist = Math.sqrt(dX * dX + dY * dY)
			    	if (dist > 430)
			    		flag = false;
			    	if (tmplon > 0){
			    		flag = false;
			    	}
			    	if (flag && !(isNaN(d.coordX) || isNaN(d.coordY))){
			    		d.rad = Math.sqrt(d.radius);
			    		nodeData[i].push(d);
						maxNum = Math.max(maxNum, d.radius);					
			    	}				
				}
			})
			//console.log(nodeData[i])
		})
		rScale.domain([0, Math.sqrt(maxNum)]);		
	}

	//draw component and deal with trasition process
	//index indicate which day's data is used to execute transition
	function transit1(){
		node = node.data(nodeData[0], function(d, i){
				return d.lon + " " + d.lat;
			});
		node.enter()
			.append("circle")
			.attr("fill", function(d, i){
	        	//return cScale(i);
	            return "url(#grad" + 0 + ")";
	        })


		/*node.filter(function(d, i){
			if (i % 20 == 0){
				d3.select(this)
					.attr("class", "comet");
			}
		})*/


		node.transition()
			.duration(500)
			.attr("cx", function(d){
				return d.coordX;
			})
			.attr("cy", function(d){
				return d.coordY;
			})
			.attr("r", function(d){
				return Math.ceil(rScale(d.rad));
			})
		node.exit()
			.transition()
			.duration(500)
			.attr("r", 0)
			.remove();
		force.nodes(nodeData[0])
			.start();
	}

	function transit2(index){
		node = node.data(nodeData[index], function(d,i){				
				return d.name//i//d.coordx + " " + d.coordy;
			});
		node.enter()
			.append("circle")
			.attr("r", 0)
			.attr("fill", function(d, i){
	        	//return cScale(i);
	            return "url(#grad" + 6 + ")";
	        })
		node.moveToFront();
		if (index == 0)
			date.text("2012 Winter")
		else if (index == 1)
			date.text("2013 Spring")
		else if (index == 2)
			date.text("2013 Summer")
		else if (index == 3)
			date.text("2013 Winter")
		


		node.each(function(d){
	    	if (prePosition.has(d.name)){
	    		d.x = prePosition.get(d.name).x;
	    		d.y = prePosition.get(d.name).y;
	    	}
	    	/*d3.select(this)
	    		.attr("cx",windowWidth / 2)
	    		.attr("cy", windowHeight / 2);*/
	    });



		node.transition()
			.duration(500)
			/*.attr("cx", function(d){
				return d.coordX;
			})
			.attr("cy", function(d){
				return d.coordY;
			})*/
			.attr("r", function(d){
				return Math.ceil(rScale(d.rad));
			})
		node.exit()
			.transition()
			.duration(500)
			.attr("r", 0)
			.remove();
		force.nodes(nodeData[index])
			.start();

		console.log("transition " + (index + 1) + " finishes")
		if (++index < nodeData.length){
			setTimeout(function(){
				resetData();
				transit2(index);
			}, 5000);
		}
	}

	function transit3(){
		node = node.data(nodeData[0], function(d, i){
				return d.lon + " " + d.lat;
			});
		node.enter()
			.append("circle")
			.attr("fill", function(d, i){
	        	//return cScale(i);
	            return "url(#grad" + 18 + ")";
	        })


		/*node.filter(function(d, i){
			if (i % 20 == 0){
				d3.select(this)
					.attr("class", "comet");
			}
		})*/


		node.transition()
			.duration(500)
			.attr("cx", function(d){
				return d.coordX;
			})
			.attr("cy", function(d){
				return d.coordY;
			})
			.attr("r", function(d){
				return Math.ceil(rScale(d.rad));
			})
		node.exit()
			.transition()
			.duration(500)
			.attr("r", 0)
			.remove();
		force.nodes(nodeData[0])
			.start();
	}

	function transit4(index){
		//node.remove();
		node = node.data(nodeData[index], function(d,i){				
				return d.name//i//d.coordx + " " + d.coordy;
			});
		node.enter()
			.append("circle")
			.attr("r", 0)
			.attr("fill", function(d, i){
	        	//return cScale(i);
	            return "url(#grad" + 4 + ")";
	        })
		node.moveToFront();
		if (index == 0)
			date.text("2012 Winter")
		else if (index == 1)
			date.text("2013 Spring")
		else if (index == 2)
			date.text("2013 Summer")
		else if (index == 3)
			date.text("2013 Winter")


		node.each(function(d){
	    	if (prePosition.has(d.name)){
	    		d.x = prePosition.get(d.name).x;
	    		d.y = prePosition.get(d.name).y;
	    	}
	    });


		node.transition()
			.duration(500)
			/*.attr("cx", function(d){
				return d.coordX;
			})
			.attr("cy", function(d){
				return d.coordY;
			})*/
			.attr("r", function(d){
				return Math.ceil(rScale(d.rad));
			})
		node.exit()
			.transition()
			.duration(500)
			.attr("r", 0)
			.remove();
		force.nodes(nodeData[index])
			.start();


			



		console.log("transition " + (index + 1) + " finishes")
		if (++index < nodeData.length){
			setTimeout(function(){
				resetData();
				transit4(index);
			}, 5000);
		}
	}


	//reset data for next iteration
	function resetData(){
		prePosition.clear();
		node.each(function(d){
			prePosition.set(d.name, {
				x : d.x,
				y : d.y,
			})
		})
	}

	//remove node
	function removeNode(){
		node = svg.selectAll(".node");                		//set of all nodes 

		mapEventFlag = false;
		mapCenter = [windowHeight / 2 + 100, windowHeight / 2];

		nodeData = [];
		prePosition = new Map();
		dataProcessInstance = new dataProcess();

		d3.selectAll("circle")
			.remove();
	}


	//move element to the back of its parent's children
	d3.selection.prototype.moveToBack = function() { 
	    return this.each(function() { 
	        var firstChild = this.parentNode.firstChild; 
	        if (firstChild) { 
	            this.parentNode.insertBefore(this, firstChild); 
	        } 
	    });    //move component to the down of svg
	};

	//move element to the top of its parent's children
	d3.selection.prototype.moveToFront = function() {
	  	return this.each(function(){
	    	this.parentNode.appendChild(this);
	  	});   //move component to the up of svg
	};

	//map change event
	function updateNode(){
		mapEventFlag = true;
		/*var coord = worldMapInstance.getClusterGeoLocation(mapCenter);
		console.log(coord);
		node.each(function(d){
			var tmplat = parseFloat(d.lat);
			var tmplon = parseFloat(d.lon);
			if (Math.abs(tmplon - coord[0]) >= 85 || Math.abs(tmplat - coord[1]) >= 85){
				d3.select(this)
					.attr("r", 0);
			} else {
				console.log("hehe")
				d3.select(this)
					.attr("r", 3)
			}
		})*/
		force.start();
	}

	//add tail when node moves, the less the second parameter of timer, the smoother the tail
	d3.timer(function(){
	    d3.selectAll(".comet")
	        .each(function(d, i){
	            if (!d.preX){
	                d.preX = d.x;
	                d.preY = d.y;
	            }
	            svg.append("line")
	                .attr("stroke-width", 2)
	                .attr("stroke", cScale(i/*d.color*/))
	                .attr("stroke-opacity", 1)
	                .attr("x1", d.preX)
	                .attr("y1", d.preY)
	                .attr("x2", d.x)
	                .attr("y2", function(){
	                    d.preX = d.x;
	                    d.preY = d.y;
	                    return d.y;
	                })
	                .transition()
	                .duration(700)
	                .attr("stroke-width", 0)
	                .remove();
	        })
	}, 300);


	//create wolrdMap class and draw map
	function createMap(){
		worldMapInstance = new WorldMap(svg);
	}

	//when move over show the coordinate
	function mousemove(){
		var ary = d3.mouse(this);
		pos.attr("x", 10)//ary[0] + 10)
			.attr("y", 10)//ary[1] + 2)
			//.attr("x", 100)
			//.attr("y", 100)
			.text(Math.round(ary[0]) + ", " + Math.round(ary[1]))
	}


	function generateLayout(data, queryIndex){
		removeNode();
		date.text("");

		//console.log(data);
		//console.log(data.length)
		initializeData(data);
		/*nodeData.forEach(function(d){
			console.log(d)
		})	
		console.log(nodeData)	*/
		mapEventFlag = false;
		pos.moveToFront();
		if (queryIndex == 1){
			transit1();
		} else if (queryIndex == 2){
			transit2(0);
		} else if (queryIndex == 3){
			transit3();
		} else if (queryIndex == 4){
			transit4(0);
		}
	}

	function retrieveData(parameter, index){
		var tmp = "Query " + index + ", " + parameter[0] + ": " + parameter[1];
		console.log(tmp)
		info.text(tmp);
		dataProcessInstance.getData(parameter, index);
	}










//*******************************************************public method*******************************************************

	this.query = function(parameter, index){
		console.log("start retrieve data")
		retrieveData(parameter, index);		
	}

	this.createWorldMap = function(){
		initialize();
		createMap();
		worldMapInstance.generateMap();
	}

	this.visualize = function(data, index){
		console.log("start Visulization");
		generateLayout(data, index);
	}

	this.mapChangeEvent = function(){
		updateNode();
	}

	this.test = function(){
		console.log("you test the Visulization instance");
	}

}