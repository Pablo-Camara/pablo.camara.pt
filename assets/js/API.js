const API = {
	request: function(type,endpoint,contentType,postStr,callback){
		if(!contentType){
			// default content type
			contentType = "application/x-www-form-urlencoded";
		}
		
		var xhttp = new XMLHttpRequest();
		
		if(typeof callback === 'function')
			xhttp.onreadystatechange = callback;
			
		xhttp.open(type, endpoint, true);
		xhttp.setRequestHeader("Content-type", contentType);
		xhttp.send(postStr);
	}
};