dataProcess = function(){
	function generateQuery(queryParameter, queryIndex){
		console.log("start generating query url");
		var url;
		//generate query url here
		switch(queryIndex) {
			//query1:  Visualize job postings geospatial information of Company Adecco
			case 1:
				console.log("query1");
				url = "http://localhost:8983/solr/collection1/select?q=company%3A%22Adecco%22&rows=420&wt=json&indent=true&group=true&group.field=Area&group.ngroups=true";
				break;
			//Visualize job postings geospatial information of full-time jobType
			case 2:
				console.log("query2"); 
				url = "http://localhost:8983/solr/collection1/select?q=jobType%3A%22full+time%22&rows=38310&wt=json&indent=true&group=true&group.field=Area&group.ngroups=true&fl=longitude,latitude,Area";
				break;
			//query3: Visualize job postings geospatial information of salary = 4000
			case 3:
				console.log("query3");
				url = "http://localhost:8983/solr/collection1/select?q=salary%3A4000&wt=json&indent=true&group=true&group.field=Area&group.ngroups=true&rows=1136";
				break;
			//query4: Visualize job postings geospatial information of salary = 8000
			case 4:
				console.log("query4");
				url = "http://localhost:8983/solr/collection1/select?q=salary%3A8000&wt=json&indent=true&group=true&group.field=Area&group.ngroups=true&rows=900";
				break;
			//query5: Visualize job postings geospatial information of Manpower Company in Spring
			case 5:
				console.log("query5");
				url = "http://localhost:8983/solr/collection1/select?q=*%3A*&fq=company%3AManpower&fq=season%3Aspring&wt=json&indent=true&group=true&group.field=Area&group.ngroups=true&rows=9";
				break;
			//query6: Visualize job postings geospatial information of Manpower Company in Summer	
			case 6:
				console.log("query6");
				url = "http://localhost:8983/solr/collection1/select?q=*%3A*&fq=company%3AManpower&fq=season%3Asummer&wt=json&indent=true&group=true&group.field=Area&group.ngroups=true&rows=182";
				break;
			//query7: Visualize job postings geospatial information of Manpower Company in Autumn
			case 7:
				console.log("query7");
				url = "http://localhost:8983/solr/collection1/select?q=*%3A*&fq=company%3AManpower&fq=season%3Aautumn&wt=json&indent=true&group=true&group.field=Area&group.ngroups=true&rows=621";
				break;
			//query8: Visualize job postings geospatial information of Manpower Company in Winter
			case 8:
				console.log("query8");
				url = "http://localhost:8983/solr/collection1/select?q=*%3A*&fq=company%3AManpower&fq=season%3Awinter&wt=json&indent=true&group=true&group.field=Area&group.ngroups=true&rows=460";
				break;
			//query9: Visualize job postings geospatial distribution information of Manpower company
			case 9:
				console.log("query9");
				url = "http://localhost:8983/solr/collection1/select?q=*%3A*&fq=company%3AManpower&wt=json&indent=true&group=true&group.field=Area&group.ngroups=true&rows=905"
				break;
			//query10: Visualize job postings geospatial distribution information of Activos company
			case 10:
				console.log("query10");
				url = "http://localhost:8983/solr/collection1/select?q=*%3A*&fq=company%3AActivos&wt=json&indent=true&group=true&group.field=Area&group.ngroups=true&rows=202";
				break;
			//query11: Visualize job postings geospatial distribution information of Sertempo company
			case 11:
				console.log("query11");
				url = "http://localhost:8983/solr/collection1/select?q=*%3A*&fq=company%3ASertempo&wt=json&indent=true&group=true&group.field=Area&group.ngroups=true&rows=113";
				break;
			//query12: Visualize job postings geospatial distribution information of Bancamia company
			case 12:
				console.log("query12");
				url = "http://localhost:8983/solr/collection1/select?q=*%3A*&fq=company%3ABancamia&wt=json&indent=true&group=true&group.field=Area&group.ngroups=true&rows=164";
				break;
			//query13 Visualize job postings geospatial distribution information of business category in spring
			case 13:
				console.log("query13");
				url = "http://localhost:8983/solr/collection1/select?q=*%3A*&fq=tag%3Abusiness&fq=season%3Aspring&wt=json&indent=true&group=true&group.field=Area&group.ngroups=true&rows=1126";
				break;
			//query14 Visualize job postings geospatial distribution information of business category in summer
			case 14:
				console.log("query14");
				url = "http://localhost:8983/solr/collection1/select?q=*%3A*&fq=tag%3Abusiness&fq=season%3Asummer&wt=json&indent=true&group=true&group.field=Area&group.ngroups=true&rows=4798";
				break;
			//query15 Visualize job postings geospatial distribution information of business category in autumn
			case 15:
				console.log("query15");
				url = "http://localhost:8983/solr/collection1/select?q=*%3A*&fq=tag%3Abusiness&fq=season%3Aautumn&wt=json&indent=true&group=true&group.field=Area&group.ngroups=true&rows=10250";
				break;
			//query16 Visualize job postings geospatial distribution information of business category in winter
			case 16:
				console.log("query16");
				url = "http://localhost:8983/solr/collection1/select?q=*%3A*&fq=tag%3Abusiness&fq=season%3Awinter&wt=json&indent=true&group=true&group.field=Area&group.ngroups=true&rows=7163";
				break;
			//query17 Visualize job postings geospatial distribution information of industry category in spring
			case 17:
				console.log("query17");
				url = "http://localhost:8983/solr/collection1/select?q=*%3A*&fq=tag%3Aindustrial&fq=season%3Aspring&wt=json&indent=true&group=true&group.field=Area&group.ngroups=true&rows=919";
				break;
			//query14 Visualize job postings geospatial distribution information of industry category in summer
			case 18:
				console.log("query18");
				url = "http://localhost:8983/solr/collection1/select?q=*%3A*&fq=tag%3Aindustrial&fq=season%3Asummer&wt=json&indent=true&group=true&group.field=Area&group.ngroups=true&rows=4096";
				break;
			//query15 Visualize job postings geospatial distribution information of industry category in autumn
			case 19:
				console.log("query19");
				url = "http://localhost:8983/solr/collection1/select?q=*%3A*&fq=tag%3Aindustrial&fq=season%3Aautumn&wt=json&indent=true&group=true&group.field=Area&group.ngroups=true&rows=8316";
				break;
			//query16 Visualize job postings geospatial distribution information of industry category in winter
			case 20:
				console.log("query20");
				url = "http://localhost:8983/solr/collection1/select?q=*%3A*&fq=tag%3Aindustrial&fq=season%3Awinter&wt=json&indent=true&group=true&group.field=Area&group.ngroups=true&rows=5566";
				break;
			default:
				console.log("not a compatible queryIndex");
		}
		console.log("query url is: " + url);
		return url;
	}

	function modelData(rawData, queryIndex){
		console.log("start processing query result");
		//process data here, the idea return data is array, 
		//contains elements with lat, lon and other needed properties based on query index
		var res = [];
		switch(queryIndex) {
			case 1:
				console.log("query1");
				for (var i = 0; i < rawData.grouped.Area.groups.length; i++) {
					if (rawData.grouped.Area.groups[i].doclist.docs[0].Area == "n/a") {
						continue;
					}
					var record = {
						name : rawData.grouped.Area.groups[i].doclist.docs[0].Area,
						lat : rawData.grouped.Area.groups[i].doclist.docs[0].latitude,
						lon : rawData.grouped.Area.groups[i].doclist.docs[0].longitude,
						radius : rawData.grouped.Area.groups[i].doclist.numFound
					};
					res.push(record);
				}
				break;
			case 2:
				console.log("query2");
				for (var i = 0; i < rawData.grouped.Area.groups.length; i++) {
					if (rawData.grouped.Area.groups[i].doclist.docs[0].Area == "n/a" ||
						rawData.grouped.Area.groups[i].doclist.numFound < 102) {
						continue;
					}
					var record = {
						name : rawData.grouped.Area.groups[i].doclist.docs[0].Area,
						lat : rawData.grouped.Area.groups[i].doclist.docs[0].latitude,
						lon : rawData.grouped.Area.groups[i].doclist.docs[0].longitude,
						radius : rawData.grouped.Area.groups[i].doclist.numFound
					};
					res.push(record);
				}
				break;
			case 3:
				console.log("query3");
				for (var i = 0; i < rawData.grouped.Area.groups.length; i++) {
					if (rawData.grouped.Area.groups[i].doclist.docs[0].Area == "n/a" ||
						rawData.grouped.Area.groups[i].doclist.numFound < 5) {
						continue;
					}
					var record = {
						name : rawData.grouped.Area.groups[i].doclist.docs[0].Area,
						lat : rawData.grouped.Area.groups[i].doclist.docs[0].latitude,
						lon : rawData.grouped.Area.groups[i].doclist.docs[0].longitude,
						radius : rawData.grouped.Area.groups[i].doclist.numFound
					};
					res.push(record);
				}
				break;
			case 4:
				console.log("query4");
				for (var i = 0; i < rawData.grouped.Area.groups.length; i++) {
					if (rawData.grouped.Area.groups[i].doclist.docs[0].Area == "n/a" ||
						rawData.grouped.Area.groups[i].doclist.numFound < 5) {
						continue;
					}
					var record = {
						name : rawData.grouped.Area.groups[i].doclist.docs[0].Area,
						lat : rawData.grouped.Area.groups[i].doclist.docs[0].latitude,
						lon : rawData.grouped.Area.groups[i].doclist.docs[0].longitude,
						radius : rawData.grouped.Area.groups[i].doclist.numFound
					};
					res.push(record);
				}
				break;
			case 5:
				console.log("query5");
				for (var i = 0; i < rawData.grouped.Area.groups.length; i++) {
					if (rawData.grouped.Area.groups[i].doclist.docs[0].Area == "n/a") {
						continue;
					}
					var record = {
						name : rawData.grouped.Area.groups[i].doclist.docs[0].Area,
						lat : rawData.grouped.Area.groups[i].doclist.docs[0].latitude,
						lon : rawData.grouped.Area.groups[i].doclist.docs[0].longitude,
						radius : rawData.grouped.Area.groups[i].doclist.numFound
					};
					res.push(record);
				}
				break;
			case 6:
				console.log("query6");
				for (var i = 0; i < rawData.grouped.Area.groups.length; i++) {
					if (rawData.grouped.Area.groups[i].doclist.docs[0].Area == "n/a") {
						continue;
					}
					var record = {
						name : rawData.grouped.Area.groups[i].doclist.docs[0].Area,
						lat : rawData.grouped.Area.groups[i].doclist.docs[0].latitude,
						lon : rawData.grouped.Area.groups[i].doclist.docs[0].longitude,
						radius : rawData.grouped.Area.groups[i].doclist.numFound
					};
					res.push(record);
				}
				break;
			case 7:
				console.log("query7");
				for (var i = 0; i < rawData.grouped.Area.groups.length; i++) {
					if (rawData.grouped.Area.groups[i].doclist.docs[0].Area == "n/a") {
						continue;
					}
					var record = {
						name : rawData.grouped.Area.groups[i].doclist.docs[0].Area,
						lat : rawData.grouped.Area.groups[i].doclist.docs[0].latitude,
						lon : rawData.grouped.Area.groups[i].doclist.docs[0].longitude,
						radius : rawData.grouped.Area.groups[i].doclist.numFound
					};
					res.push(record);
				}
				break;
			case 8:
				console.log("query8");
				for (var i = 0; i < rawData.grouped.Area.groups.length; i++) {
					if (rawData.grouped.Area.groups[i].doclist.docs[0].Area == "n/a") {
						continue;
					}
					var record = {
						name : rawData.grouped.Area.groups[i].doclist.docs[0].Area,
						lat : rawData.grouped.Area.groups[i].doclist.docs[0].latitude,
						lon : rawData.grouped.Area.groups[i].doclist.docs[0].longitude,
						radius : rawData.grouped.Area.groups[i].doclist.numFound
					};
					res.push(record);
				}
				break;
			case 9:
				console.log("query9");
				for (var i = 0; i < rawData.grouped.Area.groups.length; i++) {
					if (rawData.grouped.Area.groups[i].doclist.docs[0].Area == "n/a") {
						continue;
					}
					var record = {
						name : rawData.grouped.Area.groups[i].doclist.docs[0].Area,
						lat : rawData.grouped.Area.groups[i].doclist.docs[0].latitude,
						lon : rawData.grouped.Area.groups[i].doclist.docs[0].longitude,
						radius : rawData.grouped.Area.groups[i].doclist.numFound
					};
					res.push(record);
				}
				break;
			case 10:
				console.log("query10");
				for (var i = 0; i < rawData.grouped.Area.groups.length; i++) {
					if (rawData.grouped.Area.groups[i].doclist.docs[0].Area == "n/a") {
						continue;
					}
					var record = {
						name : rawData.grouped.Area.groups[i].doclist.docs[0].Area,
						lat : rawData.grouped.Area.groups[i].doclist.docs[0].latitude,
						lon : rawData.grouped.Area.groups[i].doclist.docs[0].longitude,
						radius : rawData.grouped.Area.groups[i].doclist.numFound
					};
					res.push(record);
				}
				break;
			case 11:
				console.log("query11");
				for (var i = 0; i < rawData.grouped.Area.groups.length; i++) {
					if (rawData.grouped.Area.groups[i].doclist.docs[0].Area == "n/a") {
						continue;
					}
					var record = {
						name : rawData.grouped.Area.groups[i].doclist.docs[0].Area,
						lat : rawData.grouped.Area.groups[i].doclist.docs[0].latitude,
						lon : rawData.grouped.Area.groups[i].doclist.docs[0].longitude,
						radius : rawData.grouped.Area.groups[i].doclist.numFound
					};
					res.push(record);
				}
				break;
			case 12:
				console.log("query12");
				for (var i = 0; i < rawData.grouped.Area.groups.length; i++) {
					if (rawData.grouped.Area.groups[i].doclist.docs[0].Area == "n/a") {
						continue;
					}
					var record = {
						name : rawData.grouped.Area.groups[i].doclist.docs[0].Area,
						lat : rawData.grouped.Area.groups[i].doclist.docs[0].latitude,
						lon : rawData.grouped.Area.groups[i].doclist.docs[0].longitude,
						radius : rawData.grouped.Area.groups[i].doclist.numFound
					};
					res.push(record);
				}
				break;
			case 13:
				console.log("query13");
				for (var i = 0; i < rawData.grouped.Area.groups.length; i++) {
					if (rawData.grouped.Area.groups[i].doclist.docs[0].Area == "n/a" ||
						rawData.grouped.Area.groups[i].doclist.numFound < 5) {
						continue;
					}
					var record = {
						name : rawData.grouped.Area.groups[i].doclist.docs[0].Area,
						lat : rawData.grouped.Area.groups[i].doclist.docs[0].latitude,
						lon : rawData.grouped.Area.groups[i].doclist.docs[0].longitude,
						radius : rawData.grouped.Area.groups[i].doclist.numFound
					};
					res.push(record);
				}
				break;
			case 14:
				console.log("query14");
				for (var i = 0; i < rawData.grouped.Area.groups.length; i++) {
					if (rawData.grouped.Area.groups[i].doclist.docs[0].Area == "n/a" ||
						rawData.grouped.Area.groups[i].doclist.numFound < 50) {
						continue;
					}
					var record = {
						name : rawData.grouped.Area.groups[i].doclist.docs[0].Area,
						lat : rawData.grouped.Area.groups[i].doclist.docs[0].latitude,
						lon : rawData.grouped.Area.groups[i].doclist.docs[0].longitude,
						radius : rawData.grouped.Area.groups[i].doclist.numFound
					};
					res.push(record);
				}
				break;
			case 15:
				console.log("query15");
				for (var i = 0; i < rawData.grouped.Area.groups.length; i++) {
					if (rawData.grouped.Area.groups[i].doclist.docs[0].Area == "n/a" ||
						rawData.grouped.Area.groups[i].doclist.numFound < 50) {
						continue;
					}
					var record = {
						name : rawData.grouped.Area.groups[i].doclist.docs[0].Area,
						lat : rawData.grouped.Area.groups[i].doclist.docs[0].latitude,
						lon : rawData.grouped.Area.groups[i].doclist.docs[0].longitude,
						radius : rawData.grouped.Area.groups[i].doclist.numFound
					};
					res.push(record);
				}
				break;
			case 16:
				console.log("query16");
				for (var i = 0; i < rawData.grouped.Area.groups.length; i++) {
					if (rawData.grouped.Area.groups[i].doclist.docs[0].Area == "n/a" ||
						rawData.grouped.Area.groups[i].doclist.numFound < 50) {
						continue;
					}
					var record = {
						name : rawData.grouped.Area.groups[i].doclist.docs[0].Area,
						lat : rawData.grouped.Area.groups[i].doclist.docs[0].latitude,
						lon : rawData.grouped.Area.groups[i].doclist.docs[0].longitude,
						radius : rawData.grouped.Area.groups[i].doclist.numFound
					};
					res.push(record);
				}
				break;
			case 17:
				console.log("query17");
				for (var i = 0; i < rawData.grouped.Area.groups.length; i++) {
					if (rawData.grouped.Area.groups[i].doclist.docs[0].Area == "n/a" ||
						rawData.grouped.Area.groups[i].doclist.numFound < 5) {
						continue;
					}
					var record = {
						name : rawData.grouped.Area.groups[i].doclist.docs[0].Area,
						lat : rawData.grouped.Area.groups[i].doclist.docs[0].latitude,
						lon : rawData.grouped.Area.groups[i].doclist.docs[0].longitude,
						radius : rawData.grouped.Area.groups[i].doclist.numFound
					};
					res.push(record);
				}
				break;
			case 18:
				console.log("query18");
				for (var i = 0; i < rawData.grouped.Area.groups.length; i++) {
					if (rawData.grouped.Area.groups[i].doclist.docs[0].Area == "n/a" ||
						rawData.grouped.Area.groups[i].doclist.numFound < 50) {
						continue;
					}
					var record = {
						name : rawData.grouped.Area.groups[i].doclist.docs[0].Area,
						lat : rawData.grouped.Area.groups[i].doclist.docs[0].latitude,
						lon : rawData.grouped.Area.groups[i].doclist.docs[0].longitude,
						radius : rawData.grouped.Area.groups[i].doclist.numFound
					};
					res.push(record);
				}
				break;
			case 19:
				console.log("query19");
				for (var i = 0; i < rawData.grouped.Area.groups.length; i++) {
					if (rawData.grouped.Area.groups[i].doclist.docs[0].Area == "n/a" ||
						rawData.grouped.Area.groups[i].doclist.numFound < 50) {
						continue;
					}
					var record = {
						name : rawData.grouped.Area.groups[i].doclist.docs[0].Area,
						lat : rawData.grouped.Area.groups[i].doclist.docs[0].latitude,
						lon : rawData.grouped.Area.groups[i].doclist.docs[0].longitude,
						radius : rawData.grouped.Area.groups[i].doclist.numFound
					};
					res.push(record);
				}
				break;
			case 20:
				console.log("query20");
				for (var i = 0; i < rawData.grouped.Area.groups.length; i++) {
					if (rawData.grouped.Area.groups[i].doclist.docs[0].Area == "n/a" ||
						rawData.grouped.Area.groups[i].doclist.numFound < 50) {
						continue;
					}
					var record = {
						name : rawData.grouped.Area.groups[i].doclist.docs[0].Area,
						lat : rawData.grouped.Area.groups[i].doclist.docs[0].latitude,
						lon : rawData.grouped.Area.groups[i].doclist.docs[0].longitude,
						radius : rawData.grouped.Area.groups[i].doclist.numFound
					};
					res.push(record);
				}
				break;

			default:
				console.log("not a compatible queryIndex");
		}
		
		
		//console.log(res);
		console.log("dataset size is " + res.length);
		console.log("finished processing");
		return res;
	}





//***************************************public method************************************************

	this.getData = function(queryParameter, queryIndex){
		var url = generateQuery(queryParameter, queryIndex);
		url = "data/query1.json";
		d3.json(url, function(d){
			var data = modelData(d, queryIndex);
			//console.log(data);
			//visInstance.test();
			visInstance.visualize(data, queryIndex);
		})
	}
}