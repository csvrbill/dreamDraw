
		//资源图片数组


(function(){
	var ImagesLoader = function(props)
	{	
		this.res = [
			{id:"splash", size:372, src:"images/splash.png"},
			{id:"ray", size:69, src:"images/ray.png"},
			{id:"btns", size:77, src:"images/btns.png"},
			{id:"dolphin", size:186, src:"images/dolphin.png"},
			{id:"ball", size:151, src:"images/ball.png"},
			{id:"wave1", size:42, src:"images/wave_1.png"},
			{id:"wave2", size:50, src:"images/wave_2.png"},
			{id:"wave3", size:49, src:"images/wave_3.png"},
			{id:"island", size:19, src:"images/island.png"},
			{id:"cloud", size:37, src:"images/cloud.png"},
			{id:"sun", size:14, src:"images/sun.png"},
			{id:"num1", size:15, src:"images/num1.png"},
			{id:"num2", size:29, src:"images/num2.png"},
			{id:"redfinger", size:709, src:"images/redfinger.png"}			
		];				
		//this.images;
		//图片加载div
		this.loader = null;
		
		this.init();
	}
	
	//创建图片加载div
	ImagesLoader.prototype.createLoader = function()
	{
		var div = document.createElement("div");
		div.style.position = "absolute";
		div.style.width = container.clientWidth + "px";
		div.style.left = "0px";
		div.style.top = (container.clientHeight >> 1)/2 + "px";
		div.style.textAlign = "center";
		div.style.color = "#000";
		div.style.font = Q.isMobile ?  'bold 16px 黑体' : 'bold 16px 宋体';
		div.style.textShadow = Q.isAndroid ? "0 2px 2px #111" : "0 2px 2px #ccc";
		
		return div;
	}	
	
	//图片加载类初始化
	ImagesLoader.prototype.init = function()
	{
		var loaderDiv = this.createLoader();
		//var container = Q.getDOM("container");
		container.appendChild(loaderDiv);
		this.loader = loaderDiv;
		
		//加载图片素材
		var loader = new Q.ImageLoader();
		loader.addEventListener("loaded", Q.delegate(this.onLoadLoaded, this));
		loader.addEventListener("complete", Q.delegate(this.onLoadComplete, this));
		loader.load(this.res);	
		//console.log(loader.getTotalSize());
		//console.log(this.images);
	}

	//加载进度条
	ImagesLoader.prototype.onLoadLoaded = function(e)
	{
		this.loader.innerHTML = "正在加载资源中，请稍候...<br>";
		this.loader.innerHTML +=e.target.getLoaded()+"/"+e.target.getTotal()+"<br>";
		this.loader.innerHTML += "(" + Math.round(e.target.getLoadedSize()/e.target.getTotalSize()*100) + "%)";			
	}
	
	//完成加载
	ImagesLoader.prototype.onLoadComplete = function(e)
	{
		this.images = e.images;
		//console.log(images.redfinger.image);
		e.target.removeAllEventListeners();
		Q.getDOM("container").removeChild(this.loader);
		this.loader = null;	
		//alert(e.images["ray"].image);	
		//console.log(e.images);
		//images = e.images;
		//alert(this.images["ray"].image);
		//console.log(this.images);
	}
	
	//获取图片资源
	ImagesLoader.prototype.getImage = function(id)
	{
		return this.images[id].image;
	}
	
	window.ImagesLoader = ImagesLoader;
})();