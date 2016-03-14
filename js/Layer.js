(function(){

/**
 * 构造函数.
 * @name Stage
 * @augments DisplayObjectContainer
 * @class 舞台是显示对象的根，所有显示对象都会被添加到舞台上，必须传入一个context使得舞台能被渲染。舞台是一种特殊显示对象容器，可以容纳子显示对象。
 * @property stageX 舞台在页面中的X偏移量，即offsetLeft。只读属性。可通过调用updatePosition()方法更新。
 * @property stageY 舞台在页面中的Y偏移量，即offsetTop。只读属性。可通过调用updatePosition()方法更新。
 * @property paused 指示舞台更新和渲染是否暂停。默认为false。
 * @argument props 参数JSON格式为：{context:context} context上下文必须指定。
 */
var Layer = Quark.Layer = function(props)
{
/*	this.stageX = 0;
	this.stageY = 0;
	this.paused = false;
	  
	this._eventTarget = null;*/
	
	props = props || {};
	Stage.superClass.constructor.call(this, props);
	this.id = props.id || Quark.UIDUtil.createUID("Layer");
	this.container = props.container;
	//if(this.context == null) throw "Quark.Stage Error: context is required.";
	
};

/**
 * 更新舞台Stage上的所有显示对象。可被Quark.Timer对象注册调用。
 */
Layer.prototype.init = function()
{
	var canvas = Q.getDOM(id);
	
	if (canvas == null)
	{
		canvas = document.createElement("canvas");
		canvas.id = this.id;
		container.appendChild(canvas);
		
		canvas.style.position = "absolute";
		canvas.width = container.clientWidth;
		canvas.height = container.clientHeight;
		canvas.style.top = "0px";
		canvas.style.left = "0px";
	}
};


})();
