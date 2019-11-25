const Stats = {
	impression: function(){
		API.request('POST',"php/endpoints/tracking/impressions.php",null,"sw=" + screen.availWidth + "&sh=" + screen.availHeight);
	},
	action: function(component_id,action_id,value){
		API.request('POST',"php/endpoints/tracking/user_actions.php",null,"action_id=" + action_id + "&component_id=" + component_id + "&sw=" + screen.availWidth + "&sh=" + screen.availHeight + "&value=" + value);
	},
	click: function(component_id,value){
		const action_id = 1;
		Stats.action(component_id,action_id,value);
	},
	select: function(component_id,value){
		const action_id = 2;
		Stats.action(component_id,action_id,value);
	},
};

// Trigger impression on script load
Stats.impression();