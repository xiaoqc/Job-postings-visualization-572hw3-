dataProcess = function(){

	function run(queryParameter, queryIndex){
		console.log("run");
		var url = generateQuery(queryParameter, queryIndex);
		//url = "dataset/test1.json";
		d3.json(url, function(d){
			//console.log(d);
			return modelData(d, queryIndex);
		})
	}

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
			//query5: Visualize job postings geospatial information of Manpower Company in Winter
			case 8:
				console.log("query8");
				url = "http://localhost:8983/solr/collection1/select?q=*%3A*&fq=company%3AManpower&fq=season%3Awinter&wt=json&indent=true&group=true&group.field=Area&group.ngroups=true&rows=460";
				break;
			default:
				console.log("not a compatible queryIndex");
		}
		return url;
	}

	function modelData(rawData, queryIndex){
		console.log("start processing query result");
		//process data here, the idea return data is array, 
		//contains elements with lat, lon and other needed properties based on query index
		var res = [];
		switch(queryIndex) {
			//query1:  Visualize job postings geospatial information of Company Adecco
			case 1:
				console.log("query1");
				for (var i = 0; i < rawData.grouped.Area.groups.length; i++) {
					if (rawData.grouped.Area.groups[i].doclist.docs[0].Area == "n/a") {
						continue;
					}
					var record = {
						name : rawData.grouped.Area.groups[i].doclist.docs[0].Area,
						lat : rawData.grouped.Area.groups[i].doclist.docs[0].latitude,
						lon : rawData.grouped.Area.groups[i].doclist.docs[0].longitude
					};
					res.push(record);
					//console.log(rawData.grouped.Area.groups[i].doclist.docs[0]);
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
						lon : rawData.grouped.Area.groups[i].doclist.docs[0].longitude
					};
					res.push(record);
				}
				break;
			//query3: Visualize job postings geospatial information of salary = 4000
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
						lon : rawData.grouped.Area.groups[i].doclist.docs[0].longitude
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
						lon : rawData.grouped.Area.groups[i].doclist.docs[0].longitude
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
						lon : rawData.grouped.Area.groups[i].doclist.docs[0].longitude
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
						lon : rawData.grouped.Area.groups[i].doclist.docs[0].longitude
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
						lon : rawData.grouped.Area.groups[i].doclist.docs[0].longitude
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
						lon : rawData.grouped.Area.groups[i].doclist.docs[0].longitude
					};
					res.push(record);
				}
				break;
			default:
				console.log("not a compatible queryIndex");
		}
		
		
		console.log(res);
		console.log(res.length);
		return res;
	}





//***************************************public method************************************************

	this.getData = function(queryParameter, queryIndex){
		return run(queryParameter, queryIndex);
	}
}