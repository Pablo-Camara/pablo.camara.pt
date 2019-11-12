const API = {
	simplePost: function(endpoint,contentType,postStr){
		if(!contentType){
			// default content type
			contentType = "application/x-www-form-urlencoded";
		}
		
		var xhttp = new XMLHttpRequest();
		xhttp.open("POST", endpoint, true);
		xhttp.setRequestHeader("Content-type", contentType);
		xhttp.send(postStr);
	}
};