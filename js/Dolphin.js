// JavaScript Document
(function(){
	
	var Dolphin = function(props)
	{
		this.avater = null;
		
		Dolphin.superClass.constructor.call(this, props);
		
		this.init();
	}
	Q.inherit(Dolphin, Q.DisplayObjectContainer);
	
	Dolphin.prototype.init = function()
	{
		var avater = new Q.MovieClip({
			id:"dolphin",
			image:getImage("dolphin"),
			interval:120});
		
			avatar.addFrame([
			{rect:[0,0,223,337], label:"idle"},
			{rect:[223,0,223,337]},
			{rect:[0,337,223,337]},	
			{rect:[223,0,223,337], jump:"idle"},
			{rect:[223,337,189,329], label:"jump"},
			]);
			
			this.width = 223;
			this.height = 337;
			this.avater = avater;
			this.addChild(avater);
	}
})();