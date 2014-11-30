dataProcess = function(){

	function run(queryParameter, queryIndex){
		var url = generateQuery(queryParameter, queryIndex);
		//url = "dataset/test1.json";
		d3.json(url, function(d){
			//console.log(d);
			return modelData(d, queryIndex);
		})
	}

	function generateQuery(queryParameter, queryIndex){
		var url;
		//generate query here

		return url;
	}

	function modelData(rawData, queryIndex){
		//odel data here, the idea return data is array, 
		//contains elements with lat, lon and other needed properties based on query index
		var res = [];


		return res;
	}





//***************************************public method************************************************

	this.getData = function(queryParameter, queryIndex){
		return run(queryParameter, queryIndex);
	}
}