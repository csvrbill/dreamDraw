
(function(){
window.onload = function()
{
	game.init();
};
	
var game = 
{
	res: [
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
		{id:"load", size:143, src:"images/load.png"},
		{id:"button1", size:11, src:"images/button1.png"},
		{id:"cirle", size:29, src:"images/cirle.png"},
		{id:"redfinger", size:709, src:"images/redfinger.png"},
		{id:"draw", size:90, src:"images/draw.jpg"}	
	],
	
	container: null,
	width: 0,
	height: 0,
	params: null,
	frames: 0,
	
	fps: 40,
	timer: null,
	eventTarget: null,
	state: null,
	
	dolphin: null,
	balls: [],
	maxBalls: 5,
	collidedBall: null,
	
	time: {total:120, current:120},
	score: 0,
	scoreNum: null
};

var ns = window.game = game;

game.init = function()
{
	//加载进度信息
	var container = Q.getDOM("container");
	var div = document.createElement("div");
	div.style.position = "absolute";
	div.style.width = container.clientWidth + "px";
	//div.style.left = "0px";
	//div.style.top = (container.clientHeight >> 1) + "px";
	div.style.textAlign = "center";
	//div.style.color = "#000";
	div.style.font = Q.isMobile ?  'bold 16px 黑体' : 'bold 16px 宋体';
	div.style.textShadow = Q.isAndroid ? "0 2px 2px #111" : "0 2px 2px #ccc";
	//div.style.backgroundImage = game.getImage("draw");
	container.appendChild(div);
	this.loader = div;
    
    //隐藏浏览器顶部导航
    setTimeout(game.hideNavBar, 10);    
    if(Q.supportOrient)
    {
        window.onorientationchange = function(e)
        {
            game.hideNavBar();
            game.calcStagePosition();
        };
    }
	
    //加载图片素材
	var loader = new Q.ImageLoader();
	loader.addEventListener("loaded", Q.delegate(this.onLoadLoaded, this));
	loader.addEventListener("complete", Q.delegate(this.onLoadComplete, this));
	loader.load(this.res);
};

//加载进度条
game.onLoadLoaded = function(e)
{
	this.loader.innerHTML = "正在加载资源中，请稍候...<br>";
	this.loader.innerHTML +=e.target.getLoaded()+"/"+e.target.getTotal()+"<br>";
	this.loader.innerHTML += "(" + Math.round(e.target.getLoadedSize()/e.target.getTotalSize()*100) + "%)";
}

//加载完成
game.onLoadComplete = function(e)
{
	e.target.removeAllEventListeners();
	Q.getDOM("container").removeChild(this.loader);
	this.loader = null;
	
	this.images = e.images;
	//初始化一些类
	//ns.Ball.init();
	//ns.Num.init();
	//启动游戏
	this.startup();
}

//获取图片资源
game.getImage = function(id)
{
	return this.images[id].image;
}

//启动游戏
game.startup = function()
{
	//手持设备的特殊webkit设置
	if(Q.isWebKit && Q.supportTouch)
	{
		document.body.style.webkitTouchCallout = "none";
		document.body.style.webkitUserSelect = "none";
		document.body.style.webkitTextSizeAdjust = "none";
		document.body.style.webkitTapHighlightColor = "rgba(0,0,0,0)";
	}
	
	//初始化容器设置
	var colors = ["#00c2eb", "#cbfeff"];
	this.container = Q.getDOM("container");
	this.container.style.overflow = "hidden";
	//this.container.style.background = "-moz-linear-gradient(top, "+ colors[0] +", "+ colors[1] +")"; 
	//this.container.style.background = "-webkit-gradient(linear, 0 0, 0 bottom, from("+ colors[0] +"), to("+ colors[1] +"))";
	//this.container.style.background = "-o-linear-gradient(top, "+ colors[0] +", "+ colors[1] +")";
	//this.container.style.filter = "progid:DXImageTransform.Microsoft.gradient(startColorstr="+ colors[0] +", endColorstr="+ colors[1] +")";
	this.width = 1024;//this.container.clientWidth;
	this.height = 768;//this.container.clientHeight;
	
    //获取URL参数设置
	this.params = Q.getUrlParams();
    this.fps = this.params.fps || 40;
	
	//初始化context
	var context = null;
	if(this.params.canvas)
	{
		var canvas = Q.createDOM("canvas", {id:"canvas1", width:this.width, height:this.height, style:{position:"absolute"}});
		this.container.appendChild(canvas);
		this.context = new Q.CanvasContext({canvas:canvas});
	}else
	{
		var canvas = document.getElementById("canvas");
		canvas.width = 1024;//this.width;
		canvas.height = 768;//this.height;
		this.context = new Q.CanvasContext({canvas:canvas});
	}	

	
	//创建舞台
	this.stage = new Q.Stage({width:this.width, height:this.height, context:this.context, update:function(){/*game.loadmc.rotation += 0.3*/}});
	
	var events = Q.supportTouch ? ["touchstart","touchmove","touchend"] : ["mousedown","mousemove","mouseup", "mouseout"];
	var em = new Q.EventManager();
	em.registerStage(this.stage, events, true, true);
	

	var btn1 = new Q.Bitmap({id:"cirle", image:game.getImage("cirle"),x:500,y:200});
	btn1.rotation = 90;	
	this.btn1 = btn1;	
	btn1.addEventListener("mouseup" ,drawFinger,false);
	btn1.addEventListener("touchend" ,drawFinger,false);

	this.stage.addChild(btn1);

	//按钮测试	
	var btn2 = new Q.Button({id:"button1", image:game.getImage("button1"), x:500, y:300, width:195, height:54,
	up:{rect:[0,0,195,54]},
	over:{rect:[0,0,195,54]},
	down:{rect:[0,54,195,54]},
	disabled:{rect:[0,54,195,54]}
	});
	this.stage.addChild(btn2);
	
	//load转动测试
/*	var loadmc = new Quark.Bitmap({image:game.getImage("load")});
	loadmc.regX = 183;
	loadmc.regY = 196;
	loadmc.x = 400;
	loadmc.y = 300;
	loadmc.rotation = 0;
	this.loadmc = loadmc;
	this.stage.addChild(loadmc);*/
	
	timer = new Q.Timer(1000/200);
	timer.addListener(this.stage);
	timer.start();
};

/*game.drawFinger = function(e)
{
	var redfinger = new Q.Bitmap({id:"redfinger", image:this.getImage("redfinger")});
	var img = redfinger.image;
	//img.addEventListener("mouseup" ,alerts,true);
	var sw = img.width;
	var sh = img.height;
	var dw = img.width/4;
	var dh = img.height/4;

	//this.context.drawImage(img,0,0,sw,sh,e.pageX,e.pageY,dw,dh);
}*/

//隐藏浏览器顶部导航
game.hideNavBar = function()
{
    window.scrollTo(0, 1);
}

//重新计算舞台stage在页面中的偏移
game.calcStagePosition = function()
{
    if(game.stage) 
    {
        var offset = Q.getElementOffset(game.stage.context.canvas);
        game.stage.stageX = offset.left;
        game.stage.stageY = offset.top;
    }
}

	
})();