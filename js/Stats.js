const Stats = {
	impression: function(){
		var xhttp = new XMLHttpRequest();
		xhttp.open("POST", "impressions.php", true);
		xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
		xhttp.send("sw=" + screen.availWidth + "&sh=" + screen.availHeight);
	}
};

// Trigger impression on script load
Stats.impression();