const Stats = {
	impression: function(){
		var xhttp = new XMLHttpRequest();
		xhttp.open("POST", "impressions.php", true);
		xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
		
		const bs = Stats.getBrowserString();
		xhttp.send("sw=" + screen.availWidth + "&sh=" + screen.availHeight + "&isFirefox=" + bs.isFirefox + "&isSafari=" + bs.isSafari + "&isOpera=" + bs.isOpera + "&isIE=" + bs.isIE + "&isEdge=" + bs.isEdge + "&isBlink=" + bs.isBlink + "&isChrome=" + bs.isChrome);
	},
	getBrowserString: function(){
		// Opera 8.0+
		var isOpera = (!!window.opr && !!opr.addons) || !!window.opera || navigator.userAgent.indexOf(' OPR/') >= 0;

		// Firefox 1.0+
		var isFirefox = typeof InstallTrigger !== 'undefined';

		// Safari 3.0+ "[object HTMLElementConstructor]" 
		var isSafari = /constructor/i.test(window.HTMLElement) || (function (p) { return p.toString() === "[object SafariRemoteNotification]"; })(!window['safari'] || (typeof safari !== 'undefined' && safari.pushNotification));

		// Internet Explorer 6-11
		var isIE = /*@cc_on!@*/false || !!document.documentMode;

		// Edge 20+
		var isEdge = !isIE && !!window.StyleMedia;

		// Chrome 1 - 71
		var isChrome = !!window.chrome && (!!window.chrome.webstore || !!window.chrome.runtime);

		// Blink engine detection
		var isBlink = (isChrome || isOpera) && !!window.CSS;

		
		var output = {
			isFirefox: isFirefox ? 1 : 0,
			isChrome: isChrome ? 1 : 0,
			isSafari: isSafari ? 1 : 0,
			isOpera: isOpera ? 1 : 0,
			isIE: isIE ? 1 : 0,
			isEdge: isEdge ? 1 : 0,
			isBlink: isBlink ? 1 : 0
		};
		
		return output;
	}
};

// Trigger impression on script load
Stats.impression();