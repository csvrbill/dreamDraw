
(function(){
window.onload = function()
{
	game.init();
	//关卡预览
	animalLevel =["acalephYL","chickYL","pigYL","frogYL","mouseYL","monkeyYL","rabbitYL"];
	//关卡是否解锁
	animalLocked = [0,1,1,1,1,1,1];

	//fingerImgId,x,y,rot,scaleX,scaleY
	drawObj=[];
	
	//关卡预览
	animalLevel2 =["acalephYL2","chickYL2","monkeyYL2","frogYL2","hippoYL2","mouseYL2","pigYL2","hiheadYL2","crabYL2","rabbitYL2","snailYL2","wormYL2"];
	peopleLevel2 =["ysmailYL2","smileYL2","toothYL2","hlwYL2","jzYL2","flagYL2","mamaYL2","teacherYL2","workerYL2","sonwYL2","runnerYL2","IsnowYL2"];
	vehicleLevel2=["AmbulancenYL2","busYL2","planeYL2","trailerYL2","submarineYL2","convertibleYL2","tankYL2","trainYL2","helicopterYL2","carYL2","bikeYL2","shipYL2"];
	 foodLevel2=["candyYL2","tomatoYL2","szYL2","appleYL2","aubergineYL2","icecreamYL2","carrotYL2","cushawYL2","eggYL2","strawberryYL2","watermelonYL2","ananasYL2"];
	 dailyuseLevel2=["balloonYL2","bowlYL2","ImouseYL2","kettlesYL2","ligYL2","lightYL2","pictureYL2","teapotYL2","charYL2","fanYL2","telYL2","shoeYL2"];
	 plantLevel2=["bulrushYL2","crocusYL2","podYL2","treeYL2","lotusYL2","cactusYL2","sunflowerYL2","flowerYL2","rflowerYL2","valleyYL2","gloryYL2","leafYL2"];
	
	//关卡占位符
	levelHold=["animal_0","animal_0","animal_0","animal_0","animal_0","animal_0"];
	L=[1,2,3,4,5,6,7,8,9,10,11,12];
	 
	//关卡是否解锁
	
	Locked=[    	  
			  peopleLocked=[0,1,1,1,1,1,1,1,1,1,1,1],
			  plantLocked=[0,1,1,1,1,1,1,1,1,1,1,1],
			  foodLocked=[0,1,1,1,1,1,1,1,1,1,1,1],
			  dailyuseLecked=[0,1,1,1,1,1,1,1,1,1,1,1],
			  animalLocked=[0,1,1,1,1,1,1,1,1,1,1,1],
			  vehicleLocked=[0,1,1,1,1,1,1,1,1,1,1,1]
		    ];
			
			
			//游戏配置变量
       var jiazai=new Array();
	  kindloader=new Q.ImageLoader();
	  oneloader=new Q.ImageLoader();
	  kindload:null;
	  oneload:null;
	  kindflag:null;
	 // oneprops:null;
	 // onele:null;
			
			
	 openbsong="false";
	 openbgsong="false";
	
	 game.playSong();
	 game.playbSong();
	 ltimer=null;
};
	
var game = 
{
	res: [
		{id:"back", size:372, src:"images/back.png"},
		{id:"beijingyinyue", size:69, src:"images/beijingyinyue.png"},
		{id:"bg", size:77, src:"images/bg.png"},
		{id:"button1", size:11, src:"images/button1.png"},
		{id:"button2", size:186, src:"images/button2.png"},
		{id:"button3", size:151, src:"images/button3.png"},
		{id:"cankao", size:42, src:"images/cankao.png"},
		{id:"cirle", size:29, src:"images/cirle.png"},
		{id:"duihao", size:50, src:"images/duihao.png"},
		{id:"duoxuankuang", size:49, src:"images/duoxuankuang.png"},
		{id:"fanhui", size:19, src:"images/fanhui.png"},
		{id:"flower", size:37, src:"images/flower.png"},
		{id:"haoyou", size:14, src:"images/haoyou.png"},
		{id:"load", size:149, src:"images/load.png"},
		{id:"menu1", size:149, src:"images/menu1.png"},
		{id:"menu2", size:149, src:"images/menu2.png"},
		{id:"menu3", size:149, src:"images/menu3.png"},
		{id:"menu4", size:149, src:"images/menu4.png"},
		{id:"menu5", size:149, src:"images/menu5.png"},
		{id:"menu6", size:149, src:"images/menu6.png"},
		{id:"menu7", size:149, src:"images/menu7.png"},
		{id:"qingchu", size:149, src:"images/qingchu.png"},
		{id:"queding", size:149, src:"images/queding.png"},
		//{id:"redfinger", size:709, src:"images/redfinger.png"},
		{id:"set_bg", size:149, src:"images/set_bg.png"},
		{id:"title", size:149, src:"images/title.png"},
		{id:"wancheng", size:149, src:"images/wancheng.png"},
		{id:"xiangpi", size:149, src:"images/xiangpi.png"},
		{id:"yanse", size:149, src:"images/yanse.png"},
		{id:"yinxiao", size:149, src:"images/yinxiao.png"},
		{id:"zw", size:149, src:"images/zw.png"},
		{id:"share", size:149, src:"images/share.png"},
		{id:"line", size:149, src:"images/line.png"},
		{id:"jixu", size:192, src:"images/jixu.png"},
		{id:"jixuanniu", size:192, src:"images/jixuanniu.png"},
		{id:"quxiaoanniu", size:192, src:"images/quxiaoanniu.png"},
		{id:"fanhuianniu", size:192, src:"images/fanhuianniu.png"},
		{id:"fenxianganniu", size:192, src:"images/fenxianganniu.png"},
		{id:"star", size:192, src:"images/star.png"},
		//关卡menu
		{id:"starflag",size:3,src:"images/starflag.png"},
		{id:"star1",size:5,src:"images/star1.png"},
		{id:"star2",size:5,src:"images/star2.png"},
		{id:"star3",size:5,src:"images/star3.png"}
	
		],
		
		//人
		
		people:[
		     {id:"animal_0",size:44,src:"images/animal_0.png"},
			 {id:"ysmailYL2",size:58,src:"images/imagesyl/4/ysmailYL2.png"},
		     {id:"smileYL2",size:28,src:"images/imagesyl/4/smileYL2.png"},  
		     {id:"toothYL2",size:40,src:"images/imagesyl/4/toothYL2.png"},
			 {id:"hlwYL2",size:57,src:"images/imagesyl/4/hlwYL2.png"},
			 {id:"jzYL2",size:57,src:"images/imagesyl/4/jzYL2.png"},
			 {id:"flagYL2",size:49,src:"images/imagesyl/4/flagYL2.png"},
			 {id:"mamaYL2",size:36,src:"images/imagesyl/4/mamaYL2.png"},
			 {id:"teacherYL2",size:36,src:"images/imagesyl/4/teacherYL2.png"},
			 {id:"workerYL2",size:36,src:"images/imagesyl/4/workerYL2.png"},
			 {id:"sonwYL2",size:34,src:"images/imagesyl/4/sonwYL2.png"},
			 {id:"runnerYL2",size:37,src:"images/imagesyl/4/runnerYL2.png"},
			 {id:"IsnowYL2",size:37,src:"images/imagesyl/4/IsnowYL2.png"}
            ],
			
			people1:
			[
				[
					//{id:"ysmailYL",size:59,src:"images/people/ysmailYL.png"},
					{id:"ysmailL",size:36,src:"images/people/ysmailL.png"},
					{id:"ysmailF1",size:36,src:"images/people/ysmailF1.png"}
					
				],
				
				
				[
					//{id:"smileYL",size:28,src:"images/people/smileYL.png"},
					{id:"smileL",size:28,src:"images/people/smileL.png"},
					{id:"smileF1",size:28,src:"images/people/smileF1.png"}	
				],
				
				
				[
					//{id:"toothYL",size:40,src:"images/people/toothYL.png"},
					{id:"toothL",size:40,src:"images/people/toothL.png"},
					{id:"toothF1",size:40,src:"images/people/toothF1.png"}					
				],
				
				
				[
					//{id:"hlwYL",size:57,src:"images/people/hlwYL.png"},
					{id:"hlwL",size:57,src:"images/people/hlwL.png"},					
					{id:"hlwF2",size:57,src:"images/people/hlwF2.png"},
					{id:"hlwF1",size:57,src:"images/people/hlwF1.png"}
				],
				
				
				[
					//{id:"jzYL",size:57,src:"images/people/jzYL.png"},
					{id:"jzL",size:57,src:"images/people/jzL.png"},
					{id:"jzF1",size:57,src:"images/people/jzF1.png"}
				],
				
				
				[
					//{id:"flagYL",size:49,src:"images/people/flagYL.png"},
					{id:"flagL",size:49,src:"images/people/flagL.png"},
					{id:"flagF2",size:49,src:"images/people/flagF2.png"},
					{id:"flagF1",size:49,src:"images/people/flagF1.png"}					
				],
				
				
				[
					//{id:"mamaYL",size:36,src:"images/people/mamaYL.png"},
					{id:"mamaL",size:36,src:"images/people/mamaL.png"},
					{id:"mamaF2",size:36,src:"images/people/mamaF2.png"},
					{id:"mamaF1",size:36,src:"images/people/mamaF1.png"}					
				],
				
				[
					//{id:"teacherYL",size:57,src:"images/people/teacherYL.png"},
					{id:"teacherL",size:57,src:"images/people/teacherL.png"},					
					{id:"teacherF2",size:36,src:"images/people/teacherF2.png"},
					{id:"teacherF1",size:36,src:"images/people/teacherF1.png"}
				],
				
				[
					//{id:"workerYL",size:57,src:"images/people/workerYL.png"},
					{id:"workerL",size:57,src:"images/people/workerL.png"},
					{id:"workerF2",size:36,src:"images/people/workerF2.png"},
					{id:"workerF1",size:36,src:"images/people/workerF1.png"}					
				],
				
				[
					//{id:"sonwYL",size:34,src:"images/people/sonwYL.png"},
					{id:"sonwL",size:34,src:"images/people/sonwL.png"},
					{id:"sonwF3",size:34,src:"images/people/sonwF3.png"},
					{id:"sonwF2",size:34,src:"images/people/sonwF2.png"},
					{id:"sonwF1",size:34,src:"images/people/sonwF1.png"}					
				],
				
				
				[
					//{id:"runnerYL",size:37,src:"images/people/runnerYL.png"},
					{id:"runnerL",size:37,src:"images/people/runnerL.png"},
					{id:"runnerF3",size:37,src:"images/people/runnerF3.png"},
					{id:"runnerF2",size:37,src:"images/people/runnerF2.png"},
					{id:"runnerF1",size:37,src:"images/people/runnerF1.png"}					
				],
				
				
				[
					//{id:"IsnowYL",size:57,src:"images/people/IsnowYL.png"},
					{id:"IsnowL",size:57,src:"images/people/IsnowL.png"},
					{id:"IsnowF2",size:37,src:"images/people/IsnowF2.png"},
					{id:"IsnowF1",size:37,src:"images/people/IsnowF1.png"}				
				]						
			],			
			
		//动物
		animal:
		[
			{id:"animal_0",size:44,src:"images/animal_0.png"},
			{id:"acalephYL2",size:36,src:"images/imagesyl/1/acalephYL2.png"},
			{id:"chickYL2",size:28,src:"images/imagesyl/1/chickYL2.png"},
			{id:"crabYL2",size:40,src:"images/imagesyl/1/crabYL2.png"},
			{id:"frogYL2",size:57,src:"images/imagesyl/1/frogYL2.png"},
			{id:"hiheadYL2",size:49,src:"images/imagesyl/1/hiheadYL2.png"},
			{id:"hippoYL2",size:36,src:"images/imagesyl/1/hippoYL2.png"},
			{id:"monkeyYL2",size:34,src:"images/imagesyl/1/monkeyYL2.png"},
			{id:"mouseYL2",size:37,src:"images/imagesyl/1/mouseYL2.png"},
			{id:"pigYL2",size:42,src:"images/imagesyl/1/pigYL2.png"},
			{id:"rabbitYL2",size:29,src:"images/imagesyl/1/rabbitYL2.png"},
			{id:"snailYL2",size:37,src:"images/imagesyl/1/snailYL2.png"},
			{id:"wormYL2",size:36,src:"images/imagesyl/1/wormYL2.png"}
		],
			
		animal1:
		[		
			[
				//{id:"acalephYL", size:149, src:"images/animal/acalephYL.png"},
				{id:"acalephL",size:36,src:"images/animal/acalephL.png"},
				{id:"acalephF1",size:36,src:"images/animal/acalephF1.png"}
			],
			
			[
				//{id:"chickYL", size:149, src:"images/animal/chickYL.png"},
				{id:"chickL",size:36,src:"images/animal/chickL.png"},
				{id:"chickF1",size:36,src:"images/animal/chickF1.png"}
			],
			[
				//{id:"monkeyYL", size:149, src:"images/animal/monkeyYL.png"},
				{id:"monkeyL",size:36,src:"images/animal/monkeyL.png"},
				{id:"monkeyF2",size:36,src:"images/animal/monkeyF2.png"},
				{id:"monkeyF1",size:36,src:"images/animal/monkeyF1.png"}					
			],
			[
				//{id:"frogYL", size:162, src:"images/animal/frogYL.png"},
				{id:"frogL",size:36,src:"images/animal/frogL.png"},
				{id:"frogF2",size:36,src:"images/animal/frogF2.png"},
				{id:"frogF1",size:36,src:"images/animal/frogF1.png"}					
			],
		
			[
				//{id:"hippoYL", size:149, src:"images/animal/hippoYL.png"},
				{id:"hippoL",size:36,src:"images/animal/hippoL.png"},
				{id:"hippoF3",size:36,src:"images/animal/hippoF3.png"},
				{id:"hippoF2",size:36,src:"images/animal/hippoF2.png"},					
				{id:"hippoF1",size:36,src:"images/animal/hippoF1.png"}					
			],
		
			[
				//{id:"mouseYL", size:149, src:"images/animal/mouseYL.png"},
				{id:"mouseL",size:36,src:"images/animal/mouseL.png"},
				{id:"mouseF3",size:36,src:"images/animal/mouseF3.png"},
				{id:"mouseF2",size:36,src:"images/animal/mouseF2.png"},					
				{id:"mouseF1",size:36,src:"images/animal/mouseF1.png"}					
			],
		
			[
				//{id:"pigYL", size:149, src:"images/animal/pigYL.png"},
				{id:"pigL",size:36,src:"images/animal/pigL.png"},
				{id:"pigF1",size:36,src:"images/animal/pigF1.png"}
			],
		
			[
				//{id:"hiheadYL", size:149, src:"images/animal/hiheadYL.png"},
				{id:"hiheadL",size:36,src:"images/animal/hiheadL.png"},
				{id:"hiheadF2",size:36,src:"images/animal/hiheadF2.png"},
				{id:"hiheadF1",size:36,src:"images/animal/hiheadF1.png"}					
			],
		
			[
				//{id:"crabYL", size:149, src:"images/animal/crabYL.png"},
				{id:"crabL",size:36,src:"images/animal/crabL.png"},
				{id:"crabF3",size:36,src:"images/animal/crabF3.png"},
				{id:"crabF2",size:36,src:"images/animal/crabF2.png"},					
				{id:"crabF1",size:36,src:"images/animal/crabF1.png"}
			],
			
			[
				//{id:"rabbitYL", size:149, src:"images/animal/rabbitYL.png"},
				{id:"rabbitL",size:36,src:"images/animal/rabbitL.png"},
				{id:"rabbitF4",size:36,src:"images/animal/rabbitF4.png"},
				{id:"rabbitF3",size:36,src:"images/animal/rabbitF3.png"},					
				{id:"rabbitF2",size:36,src:"images/animal/rabbitF2.png"},					
				{id:"rabbitF1",size:36,src:"images/animal/rabbitF1.png"}					
			],
		
			[
				//{id:"snailYL", size:149, src:"images/animal/snailYL.png"},
				{id:"snailL",size:36,src:"images/animal/snailL.png"},
				{id:"snailF4",size:36,src:"images/animal/snailF4.png"},
				{id:"snailF3",size:36,src:"images/animal/snailF3.png"},					
				{id:"snailF2",size:36,src:"images/animal/snailF2.png"},					
				{id:"snailF1",size:36,src:"images/animal/snailF1.png"}					
			],
		
			[
				//{id:"wormYL", size:149, src:"images/animal/wormYL.png"},		
				{id:"wormL",size:36,src:"images/animal/wormL.png"},
				{id:"wormF7",size:36,src:"images/animal/wormF7.png"},
				{id:"wormF6",size:36,src:"images/animal/wormF6.png"},					
				{id:"wormF5",size:36,src:"images/animal/wormF5.png"},					
				{id:"wormF4",size:36,src:"images/animal/wormF4.png"},					
				{id:"wormF3",size:36,src:"images/animal/wormF3.png"},					
				{id:"wormF2",size:36,src:"images/animal/wormF2.png"},					
				{id:"wormF1",size:36,src:"images/animal/wormF1.png"},					
			]
		],			 
		//交通工具
		vehicle:
		[
		    {id:"animal_0",size:44,src:"images/animal_0.png"},
			{id:"AmbulancenYL2",size:30,src:"images/imagesyl/6/AmbulancenYL2.png"},
			{id:"bikeYL2",size:27,src:"images/imagesyl/6/bikeYL2.png"},
			{id:"busYL2",size:38,src:"images/imagesyl/6/busYL2.png"},
			{id:"carYL2",size:41,src:"images/imagesyl/6/carYL2.png"},
			{id:"convertibleYL2",size:30,src:"images/imagesyl/6/convertibleYL2.png"},
			{id:"planeYL2",size:23,src:"images/imagesyl/6/planeYL2.png"},
			{id:"submarineYL2",size:29,src:"images/imagesyl/6/submarineYL2.png"},
			{id:"tankYL2",size:34,src:"images/imagesyl/6/tankYL2.png"},
			{id:"trailerYL2",size:35,src:"images/imagesyl/6/trailerYL2.png"},
			{id:"trainYL2",size:34,src:"images/imagesyl/6/trainYL2.png"}, 
			{id:"helicopterYL2",size:34,src:"images/imagesyl/6/helicopterYL2.png"},
			{id:"shipYL2",size:34,src:"images/imagesyl/6/shipYL2.png"}
		],
		vehicle1:
		[
			[
				//{id:"AmbulancenYL",size:34,src:"images/vehicle/AmbulancenYL.png"},
				{id:"AmbulancenL",size:34,src:"images/vehicle/AmbulancenL.png"},
				{id:"AmbulancenF1",size:34,src:"images/vehicle/AmbulancenF1.png"}				
			],
		
			[
				//{id:"busYL",size:34,src:"images/vehicle/busYL.png"}
				{id:"busL",size:34,src:"images/vehicle/busL.png"},
				{id:"busF1",size:34,src:"images/vehicle/busF1.png"}				
			],
		
			[			
				//{id:"planeYL",size:34,src:"images/vehicle/planeYL.png"}
				{id:"planeL",size:34,src:"images/vehicle/planeL.png"},
				{id:"planeF1",size:34,src:"images/vehicle/planeF1.png"}
			],
		
			[
				//{id:"trailerYL",size:34,src:"images/vehicle/trailerYL.png"}
				{id:"trailerL",size:34,src:"images/vehicle/trailerL.png"},
				{id:"trailerF1",size:34,src:"images/vehicle/trailerF1.png"}				
			],
		
			[
				//{id:"submarineYL",size:34,src:"images/vehicle/submarineYL.png"}
				{id:"submarineL",size:34,src:"images/vehicle/submarineL.png"},
				{id:"submarineF2",size:34,src:"images/vehicle/submarineF2.png"},
				{id:"submarineF1",size:34,src:"images/vehicle/submarineF1.png"}
			],
		
			[			
				//{id:"convertibleYL",size:34,src:"images/vehicle/convertibleYL.png"}
				{id:"convertibleL",size:34,src:"images/vehicle/convertibleL.png"},
				{id:"convertibleF2",size:34,src:"images/vehicle/convertibleF2.png"},
				{id:"convertibleF1",size:34,src:"images/vehicle/convertibleF1.png"}				
			],
		
			[
				//{id:"tankYL",size:34,src:"images/vehicle/tankYL.png"},
				{id:"tankL",size:34,src:"images/vehicle/tankL.png"},
				{id:"tankF2",size:34,src:"images/vehicle/tankF2.png"},
				{id:"tankF1",size:34,src:"images/vehicle/tankF1.png"},	
			],
		
		
			[
				//{id:"trainYL",size:34,src:"images/vehicle/trainYL.png"}
				{id:"trainL",size:34,src:"images/vehicle/trainL.png"},
				{id:"trainF2",size:34,src:"images/vehicle/trainF2.png"},
				{id:"trainF1",size:34,src:"images/vehicle/trainF1.png"}
			],
		
			[
				//{id:"helicopterYL",size:34,src:"images/vehicle/helicopterYL.png"}
				{id:"helicopterL",size:34,src:"images/vehicle/helicopterL.png"},
				{id:"helicopterF3",size:34,src:"images/vehicle/helicopterF3.png"},
				{id:"helicopterF2",size:34,src:"images/vehicle/helicopterF2.png"},
				{id:"helicopterF1",size:34,src:"images/vehicle/helicopterF1.png"}
			],
		
			[
				//{id:"carYL",size:34,src:"images/vehicle/carYL.png"}
				{id:"carL",size:34,src:"images/vehicle/carL.png"},
				{id:"carF3",size:34,src:"images/vehicle/carF3.png"},
				{id:"carF2",size:34,src:"images/vehicle/carF2.png"},
				{id:"carF1",size:34,src:"images/vehicle/carF1.png"}			
			],
		
			[
				//{id:"bikeYL",size:34,src:"images/vehicle/bikeYL.png"}
				{id:"bikeL",size:34,src:"images/vehicle/bikeL.png"},
				{id:"bikeF3",size:34,src:"images/vehicle/bikeF3.png"},
				{id:"bikeF2",size:34,src:"images/vehicle/bikeF2.png"},
				{id:"bikeF1",size:34,src:"images/vehicle/bikeF1.png"}				
			],
		
			[
				//{id:"shipYL",size:34,src:"images/vehicle/shipYL.png"}
				{id:"shipL",size:34,src:"images/vehicle/shipL.png"},
				{id:"shipF3",size:34,src:"images/vehicle/shipF3.png"},
				{id:"shipF2",size:34,src:"images/vehicle/shipF2.png"},
				{id:"shipF1",size:34,src:"images/vehicle/shipF1.png"}
			]
		],
		//植物
		plant:
		[
		  	{id:"animal_0",size:44,src:"images/animal_0.png"},
			{id:"bulrushYL2",size:11,src:"images/imagesyl/5/bulrushYL2.png"},
			{id:"cactusYL2",size:28,src:"images/imagesyl/5/cactusYL2.png"},
			{id:"crocusYL2",size:20,src:"images/imagesyl/5/crocusYL2.png"},
			{id:"flowerYL2",size:32,src:"images/imagesyl/5/flowerYL2.png"},
			{id:"gloryYL2",size:20,src:"images/imagesyl/5/gloryYL2.png"},
			{id:"leafYL2",size:35,src:"images/imagesyl/5/leafYL2.png"},
			{id:"lotusYL2",size:20,src:"images/imagesyl/5/lotusYL2.png"},
			{id:"podYL2",size:16,src:"images/imagesyl/5/podYL2.png"},
			{id:"rflowerYL2",size:27,src:"images/imagesyl/5/rflowerYL2.png"},
			{id:"sunflowerYL2",size:25,src:"images/imagesyl/5/sunflowerYL2.png"},
			{id:"treeYL2",size:30,src:"images/imagesyl/5/treeYL2.png"},
			{id:"valleyYL2",size:28,src:"images/imagesyl/5/valleyYL2.png"}
		],		
		plant1:
		[
			[
				//{id:"bulrushYL",size:58,src:"images/plant/bulrushYL.png"},	
				{id:"bulrushL",size:9,src:"images/plant/bulrushL.png"},
				{id:"bulrushF2",size:28,src:"images/plant/bulrushF2.png"},
				{id:"bulrushF1",size:26,src:"images/plant/bulrushF1.png"}
			],
		
			[
				//{id:"crocusYL",size:76,src:"images/plant/crocusYL.png"},
				{id:"crocusL",size:20,src:"images/plant/crocusL.png"},
				{id:"crocusF1",size:55,src:"images/plant/crocusF1.png"}				
			],	
			
			[
				//{id:"podYL",size:55,src:"images/plant/podYL.png"},
				{id:"podL",size:10,src:"images/plant/podL.png"},
				{id:"podF5",size:17,src:"images/plant/podF5.png"},
				{id:"podF4",size:15,src:"images/plant/podF4.png"},				
				{id:"podF3",size:15,src:"images/plant/podF3.png"},				
				{id:"podF2",size:14,src:"images/plant/podF2.png"},				
				{id:"podF1",size:12,src:"images/plant/podF1.png"}
			],
			
			[
				//{id:"treeYL",size:164,src:"images/plant/treeYL.png"},
				{id:"treeL",size:27,src:"images/plant/treeL.png"},
				{id:"treeF",size:135,src:"images/plant/treeF.png"}				
			],	
		
			[
				//{id:"lotusYL",size:92,src:"images/plant/lotusYL.png"},
				{id:"lotusL",size:15,src:"images/plant/lotusL.png"},
				{id:"lotusF3",size:24,src:"images/plant/lotusF3.png"},
				{id:"lotusF2",size:34,src:"images/plant/lotusF2.png"},				
				{id:"lotusF1",size:40,src:"images/plant/lotusF1.png"}				
			],
		
			[
				//{id:"cactusYL",size:146,src:"images/plant/cactusYL.png"},
				{id:"cactusL",size:33,src:"images/plant/cactusL.png"},
				{id:"cactusF2",size:21,src:"images/plant/cactusF2.png"},
				{id:"cactusF1",size:96,src:"images/plant/cactusF1.png"}
			],
		
			[
				//{id:"sunflowerYL",size:153,src:"images/plant/sunflowerYL.png"},
				{id:"sunflowerL",size:7,src:"images/plant/sunflowerL.png"},
				{id:"sunflowerF7",size:62,src:"images/plant/sunflowerF7.png"},
				{id:"sunflowerF6",size:62,src:"images/plant/sunflowerF6.png"},
				{id:"sunflowerF5",size:64,src:"images/plant/sunflowerF5.png"},
				{id:"sunflowerF4",size:64,src:"images/plant/sunflowerF4.png"},
				{id:"sunflowerF3",size:12,src:"images/plant/sunflowerF3.png"},
				{id:"sunflowerF2",size:15,src:"images/plant/sunflowerF2.png"},
				{id:"sunflowerF1",size:15,src:"images/plant/sunflowerF1.png"}				
			],	
				
			[
				//{id:"flowerYL",size:186,src:"images/plant/flowerYL.png"},
				{id:"flowerL",size:17,src:"images/plant/flowerL.png"},
				{id:"flowerF8",size:27,src:"images/plant/flowerF8.png"},
				{id:"flowerF7",size:27,src:"images/plant/flowerF7.png"},
				{id:"flowerF6",size:29,src:"images/plant/flowerF6.png"},
				{id:"flowerF5",size:29,src:"images/plant/flowerF5.png"},
				{id:"flowerF4",size:27,src:"images/plant/flowerF4.png"},
				{id:"flowerF3",size:29,src:"images/plant/flowerF3.png"},
				{id:"flowerF2",size:25,src:"images/plant/flowerF2.png"},
				{id:"flowerF1",size:24,src:"images/plant/flowerF1.png"}				
			],
		
			[
				//{id:"rflowerYL",size:124,src:"images/plant/rflowerYL.png"},
				{id:"rflowerL",size:23,src:"images/plant/rflowerL.png"},
				{id:"rflowerF4",size:37,src:"images/plant/rflowerF4.png"},
				{id:"rflowerF3",size:36,src:"images/plant/rflowerF3.png"},
				{id:"rflowerF2",size:30,src:"images/plant/rflowerF2.png"},
				{id:"rflowerF1",size:35,src:"images/plant/rflowerF1.png"}
			],	
			
			[
				//{id:"valleyYL",size:103,src:"images/plant/valleyYL.png"},
				{id:"valleyL",size:24,src:"images/plant/valleyL.png"},
				{id:"valleyF2",size:41,src:"images/plant/valleyF2.png"},
				{id:"valleyF1",size:47,src:"images/plant/valleyF1.png"}				
			],
				
		
			[
				//{id:"gloryYL",size:98,src:"images/plant/gloryYL.png"},
				{id:"gloryL",size:28,src:"images/plant/gloryL.png"},
				{id:"gloryF2",size:36,src:"images/plant/gloryF2.png"},
				{id:"gloryF1",size:36,src:"images/plant/gloryF1.png"}				
			],
						
			[
				//{id:"leafYL",size:125,src:"images/plant/leafYL.png"},
				{id:"leafL",size:28,src:"images/plant/leafL.png"},
				{id:"leafF3",size:61,src:"images/plant/leafF3.png"},
				{id:"leafF2",size:31,src:"images/plant/leafF2.png"},
				{id:"leafF1",size:20,src:"images/plant/leafF1.png"}
			]
		],
						
		//食物 
		food:
		[
			{id:"animal_0",size:44,src:"images/animal_0.png"},
			{id:"ananasYL2",size:26,src:"images/imagesyl/3/ananasYL2.png"},
			{id:"appleYL2",size:52,src:"images/imagesyl/3/appleYL2.png"},
			{id:"aubergineYL2",size:46,src:"images/imagesyl/3/aubergineYL2.png"},
			{id:"candyYL2",size:29,src:"images/imagesyl/3/candyYL2.png"},
			{id:"carrotYL2",size:22,src:"images/imagesyl/3/carrotYL2.png"},
			{id:"cushawYL2",size:34,src:"images/imagesyl/3/cushawYL2.png"},
			{id:"eggYL2",size:15,src:"images/imagesyl/3/eggYL2.png"},
			{id:"icecreamYL2",size:40,src:"images/imagesyl/3/icecreamYL2.png"},
			{id:"strawberryYL2",size:30,src:"images/imagesyl/3/strawberryYL2.png"},
			{id:"tomatoYL2",size:44,src:"images/imagesyl/3/tomatoYL2.png"},
			{id:"watermelonYL2",size:55,src:"images/imagesyl/3/watermelonYL2.png"},      
			{id:"szYL2",size:23,src:"images/imagesyl/3/szYL2.png"}
		],	
		
		food1:
		[		
			[
				//{id:"candyYL",size:99,src:"images/food/candyYL.png"},
				{id:"candyL",size:12,src:"images/food/candyL.png"},
				{id:"candyF1",size:86,src:"images/food/candyF1.png"}
			],	
		
			[
				//{id:"tomatoYL",size:91,src:"images/food/tomatoYL.png"},
				{id:"tomatoL",size:15,src:"images/food/tomatoL.png"},
				{id:"tomatoF1",size:80,src:"images/food/tomatoF1.png"}
			],
		
			[
				//{id:"szYL",size:122,src:"images/food/szYL.png"},
				{id:"szL",size:14,src:"images/food/szL.png"},
				{id:"szF2",size:55,src:"images/food/szF2.png"},
				{id:"szF1",size:55,src:"images/food/szF1.png"}
			],
		
			[
				//{id:"appleYL",size:105,src:"images/food/appleYL.png"},
				{id:"appleL",size:22,src:"images/food/appleL.png"},
				{id:"appleF2",size:46,src:"images/food/appleF2.png"},
				{id:"appleF1",size:43,src:"images/food/appleF1.png"}
			],		
		
			[
				//{id:"aubergineYL",size:108,src:"images/food/aubergineYL.png"},
				{id:"aubergineL",size:29,src:"images/food/aubergineL.png"},
				{id:"aubergineF2",size:40,src:"images/food/aubergineF2.png"},
				{id:"aubergineF1",size:47,src:"images/food/aubergineF1.png"}
			],	
		
			[
				//{id:"icecreamYL",size:120,src:"images/food/icecreamYL.png"},
				{id:"icecreamL",size:12,src:"images/food/icecreamL.png"},
				{id:"icecreamF2",size:61,src:"images/food/icecreamF2.png"},
				{id:"icecreamF1",size:62,src:"images/food/icecreamF1.png"}
			],	
		
			[
				//{id:"carrotYL",size:104,src:"images/food/carrotYL.png"},
				{id:"carrotL",size:24,src:"images/food/carrotL.png"},
				{id:"carrotF",size:77,src:"images/food/carrotF.png"}			
			],	
		
			[
				//{id:"cushawYL",size:139,src:"images/food/cushawYL.png"},
				{id:"cushawL",size:21,src:"images/food/cushawL.png"},
				{id:"cushawF3",size:53,src:"images/food/cushawF3.png"},
				{id:"cushawF2",size:49,src:"images/food/cushawF2.png"},
				{id:"cushawF1",size:51,src:"images/food/cushawF1.png"}
			],	
		
			[
				//{id:"eggYL",size:51,src:"images/food/eggYL.png"},
				{id:"eggL",size:22,src:"images/food/eggL.png"},
				{id:"eggF2",size:16,src:"images/food/eggF2.png"},
				{id:"eggF1",size:16,src:"images/food/eggF1.png"}
			],
			
			[
				//{id:"strawberryYL",size:90,src:"images/food/strawberryYL.png"},
				{id:"strawberryL",size:22,src:"images/food/strawberryL.png"},
				{id:"strawberryF1",size:67,src:"images/food/strawberryF1.png"}
			],
		
			[
				//{id:"watermelonYL",size:131,src:"images/food/watermelonYL.png"},
				{id:"watermelonL",size:34,src:"images/food/watermelonL.png"},
				{id:"watermelonF1",size:96,src:"images/food/watermelonF1.png"}
			],
				
			[
				//{id:"ananasYL",size:119,src:"images/food/ananasYL.png"},
				{id:"ananasL",size:38,src:"images/food/ananasL.png"},
				{id:"ananasF1",size:85,src:"images/food/ananasF1.png"}
			]			
		],
		
		//日常用品		
		dailyuse:
		[
			{id:"animal_0",size:44,src:"images/animal_0.png"},
			{id:"balloonYL2",size:20,src:"images/imagesyl/2/balloonYL2.png"},
			{id:"bowlYL2",size:29,src:"images/imagesyl/2/bowlYL2.png"},
			{id:"kettlesYL2",size:31,src:"images/imagesyl/2/kettlesYL2.png"},
			{id:"lightYL2",size:21,src:"images/imagesyl/2/lightYL2.png"},
			{id:"ligYL2",size:23,src:"images/imagesyl/2/ligYL2.png"},
			{id:"ImouseYL2",size:17,src:"images/imagesyl/2/ImouseYL2.png"},
			{id:"pictureYL2",size:30,src:"images/imagesyl/2/pictureYL2.png"},
			{id:"teapotYL2",size:20,src:"images/imagesyl/2/teapotYL2.png"},
			{id:"telYL2",size:30,src:"images/imagesyl/2/telYL2.png"},
			{id:"fanYL2",size:30,src:"images/imagesyl/2/fanYL2.png"},
			{id:"shoeYL2",size:30,src:"images/imagesyl/2/shoeYL2.png"},
			{id:"charYL2",size:30,src:"images/imagesyl/2/charYL2.png"}
		],		
		dailyuse1:
		[
			[
				//{id:"balloonYL",size:30,src:"images/dailyuse/balloonYL.png"}
				{id:"balloonL",size:30,src:"images/dailyuse/balloonL.png"},
				{id:"balloonF6",size:30,src:"images/dailyuse/balloonF6.png"},
				{id:"balloonF5",size:30,src:"images/dailyuse/balloonF5.png"},
				{id:"balloonF4",size:30,src:"images/dailyuse/balloonF4.png"},
				{id:"balloonF3",size:30,src:"images/dailyuse/balloonF3.png"},
				{id:"balloonF2",size:30,src:"images/dailyuse/balloonF2.png"},
				{id:"balloonF1",size:30,src:"images/dailyuse/balloonF1.png"}
			],
		
			[
				//{id:"bowlYL",size:30,src:"images/dailyuse/bowlYL.png"}
				{id:"bowlL",size:30,src:"images/dailyuse/bowlL.png"},				
				{id:"bowlF3",size:30,src:"images/dailyuse/bowlF3.png"},
				{id:"bowlF2",size:30,src:"images/dailyuse/bowlF2.png"},
				{id:"bowlF1",size:30,src:"images/dailyuse/bowlF1.png"}
			],
		
			[
				//{id:"ImouseYL",size:30,src:"images/dailyuse/ImouseYL.png"}
				{id:"ImouseL",size:30,src:"images/dailyuse/ImouseL.png"},
				{id:"ImouseF1",size:30,src:"images/dailyuse/ImouseF1.png"}
			],
		
			[
				//{id:"kettlesYL",size:30,src:"images/dailyuse/kettlesYL.png"},
				{id:"kettlesL",size:30,src:"images/dailyuse/kettlesL.png"},
				{id:"kettlesF2",size:30,src:"images/dailyuse/kettlesF2.png"},
				{id:"kettlesF1",size:30,src:"images/dailyuse/kettlesF1.png"}
			],
		
			[
				//{id:"ligYL",size:30,src:"images/dailyuse/ligYL.png"},
				{id:"ligL",size:30,src:"images/dailyuse/ligL.png"},
				{id:"ligF3",size:30,src:"images/dailyuse/ligF3.png"},
				{id:"ligF2",size:30,src:"images/dailyuse/ligF2.png"},
				{id:"ligF1",size:30,src:"images/dailyuse/ligF1.png"}
			],
		
			[
				//{id:"lightYL",size:30,src:"images/dailyuse/lightYL.png"}
				{id:"lightL",size:30,src:"images/dailyuse/lightL.png"},
				{id:"lightF2",size:30,src:"images/dailyuse/lightF2.png"},
				{id:"lightF1",size:30,src:"images/dailyuse/lightF1.png"}
			],
		
			[
				//{id:"pictureYL",size:30,src:"images/dailyuse/pictureYL.png"}
				{id:"pictureL",size:30,src:"images/dailyuse/pictureL.png"},
				{id:"pictureF2",size:30,src:"images/dailyuse/pictureF2.png"},
				{id:"pictureF1",size:30,src:"images/dailyuse/pictureF1.png"}
			],
		
			[
				//{id:"teapotYL",size:30,src:"images/dailyuse/teapotYL.png"}
				{id:"teapotL",size:30,src:"images/dailyuse/teapotL.png"},
				{id:"teapotF1",size:30,src:"images/dailyuse/teapotF1.png"}
			],
		
			[
				//{id:"charYL",size:30,src:"images/dailyuse/charYL.png"}
				{id:"charL",size:30,src:"images/dailyuse/charL.png"},
				{id:"charF2",size:30,src:"images/dailyuse/charF2.png"},
				{id:"charF1",size:30,src:"images/dailyuse/charF1.png"}
			],
		
			[
				//{id:"fanYL",size:30,src:"images/dailyuse/fanYL.png"}
				{id:"fanL",size:30,src:"images/dailyuse/fanL.png"},
				{id:"fanF5",size:30,src:"images/dailyuse/fanF5.png"},
				{id:"fanF4",size:30,src:"images/dailyuse/fanF4.png"},
				{id:"fanF3",size:30,src:"images/dailyuse/fanF3.png"},
				{id:"fanF2",size:30,src:"images/dailyuse/fanF2.png"},
				{id:"fanF1",size:30,src:"images/dailyuse/fanF1.png"}
			],
		
			[
				//{id:"telYL",size:30,src:"images/dailyuse/telYL.png"}
				{id:"telL",size:30,src:"images/dailyuse/telL.png"},
				{id:"telF1",size:30,src:"images/dailyuse/telF1.png"}
			],
		
			[
				//{id:"shoeYL",size:30,src:"images/dailyuse/shoeYL.png"}
				{id:"shoeL",size:30,src:"images/dailyuse/shoeL.png"},
				{id:"shoeF2",size:30,src:"images/dailyuse/shoeF2.png"},
				{id:"shoeF1",size:30,src:"images/dailyuse/shoeF1.png"}
			]		
		],
		//自由作画
	free:
	  [
		{id:"1-a",size:44,src:"images/finger/1-a.png"},
		{id:"1-b",size:44,src:"images/finger/1-b.png"},
		{id:"1-g",size:44,src:"images/finger/1-g.png"},
		{id:"1-o",size:44,src:"images/finger/1-o.png"},
		{id:"1-p",size:44,src:"images/finger/1-p.png"},
		{id:"1-q",size:44,src:"images/finger/1-q.png"},
		{id:"1-r",size:44,src:"images/finger/1-r.png"},
		{id:"1-s",size:44,src:"images/finger/1-s.png"},
		{id:"1-y",size:44,src:"images/finger/1-y.png"},
		{id:"2-a",size:44,src:"images/finger/2-a.png"},
		{id:"2-b",size:44,src:"images/finger/2-b.png"},
		{id:"2-g",size:44,src:"images/finger/2-g.png"},
		{id:"2-o",size:44,src:"images/finger/2-o.png"},
		{id:"2-p",size:44,src:"images/finger/2-p.png"},
		{id:"2-q",size:44,src:"images/finger/2-q.png"},
		{id:"2-r",size:44,src:"images/finger/2-r.png"},
		{id:"2-s",size:44,src:"images/finger/2-s.png"},
		{id:"2-y",size:44,src:"images/finger/2-y.png"},
		{id:"3-a",size:44,src:"images/finger/3-a.png"},
		{id:"3-b",size:44,src:"images/finger/3-b.png"},
		{id:"3-g",size:44,src:"images/finger/3-g.png"},
		{id:"3-o",size:44,src:"images/finger/3-o.png"},
		{id:"3-p",size:44,src:"images/finger/3-p.png"},
		{id:"3-q",size:44,src:"images/finger/3-q.png"},
		{id:"3-r",size:44,src:"images/finger/3-r.png"},
		{id:"3-s",size:44,src:"images/finger/3-s.png"},
		{id:"3-y",size:44,src:"images/finger/3-y.png"},
		{id:"4-a",size:44,src:"images/finger/4-a.png"},
		{id:"4-b",size:44,src:"images/finger/4-b.png"},
		{id:"4-g",size:44,src:"images/finger/4-g.png"},
		{id:"4-o",size:44,src:"images/finger/4-o.png"},
		{id:"4-p",size:44,src:"images/finger/4-p.png"},
		{id:"4-q",size:44,src:"images/finger/4-q.png"},
		{id:"4-r",size:44,src:"images/finger/4-r.png"},
		{id:"4-s",size:44,src:"images/finger/4-s.png"},
		{id:"4-y",size:44,src:"images/finger/4-y.png"},
		{id:"5-a",size:44,src:"images/finger/5-a.png"},
		{id:"5-b",size:44,src:"images/finger/5-b.png"},
		{id:"5-g",size:44,src:"images/finger/5-g.png"},
		{id:"5-o",size:44,src:"images/finger/5-o.png"},
		{id:"5-p",size:44,src:"images/finger/5-p.png"},
		{id:"5-q",size:44,src:"images/finger/5-q.png"},
		{id:"5-r",size:44,src:"images/finger/5-r.png"},
		{id:"5-s",size:44,src:"images/finger/5-s.png"},
		{id:"5-y",size:44,src:"images/finger/5-y.png"},
		{id:"6-a",size:44,src:"images/finger/6-a.png"},
		{id:"6-b",size:44,src:"images/finger/6-b.png"},
		{id:"6-g",size:44,src:"images/finger/6-g.png"},
		{id:"6-o",size:44,src:"images/finger/6-o.png"},
		{id:"6-p",size:44,src:"images/finger/6-p.png"},
		{id:"6-q",size:44,src:"images/finger/6-q.png"},
		{id:"6-r",size:44,src:"images/finger/6-r.png"},
		{id:"6-s",size:44,src:"images/finger/6-s.png"},
		{id:"6-y",size:44,src:"images/finger/6-y.png"},
		{id:"7-a",size:44,src:"images/finger/7-a.png"},
		{id:"7-b",size:44,src:"images/finger/7-b.png"},
		{id:"7-g",size:44,src:"images/finger/7-g.png"},
		{id:"7-o",size:44,src:"images/finger/7-o.png"},
		{id:"7-p",size:44,src:"images/finger/7-p.png"},
		{id:"7-q",size:44,src:"images/finger/7-q.png"},
		{id:"7-r",size:44,src:"images/finger/7-r.png"},
		{id:"7-s",size:44,src:"images/finger/7-s.png"},
		{id:"7-y",size:44,src:"images/finger/7-y.png"},
		{id:"8-a",size:44,src:"images/finger/8-a.png"},
		{id:"8-b",size:44,src:"images/finger/8-b.png"},
		{id:"8-g",size:44,src:"images/finger/8-g.png"},
		{id:"8-o",size:44,src:"images/finger/8-o.png"},
		{id:"8-p",size:44,src:"images/finger/8-p.png"},
		{id:"8-q",size:44,src:"images/finger/8-q.png"},
		{id:"8-r",size:44,src:"images/finger/8-r.png"},
		{id:"8-s",size:44,src:"images/finger/8-s.png"},
		{id:"8-y",size:44,src:"images/finger/8-y.png"},
		{id:"9-a",size:44,src:"images/finger/9-a.png"},
		{id:"9-b",size:44,src:"images/finger/9-b.png"},
		{id:"9-g",size:44,src:"images/finger/9-g.png"},
		{id:"9-o",size:44,src:"images/finger/9-o.png"},
		{id:"9-p",size:44,src:"images/finger/9-p.png"},
		{id:"9-q",size:44,src:"images/finger/9-q.png"},
		{id:"9-r",size:44,src:"images/finger/9-r.png"},
		{id:"9-s",size:44,src:"images/finger/9-s.png"},
		{id:"9-y",size:44,src:"images/finger/9-y.png"},
		{id:"10-a",size:44,src:"images/finger/10-a.png"},
		{id:"10-b",size:44,src:"images/finger/10-b.png"},
		{id:"10-g",size:44,src:"images/finger/10-g.png"},
		{id:"10-o",size:44,src:"images/finger/10-o.png"},
		{id:"10-p",size:44,src:"images/finger/10-p.png"},
		{id:"10-q",size:44,src:"images/finger/10-q.png"},
		{id:"10-r",size:44,src:"images/finger/10-r.png"},
		{id:"10-s",size:44,src:"images/finger/10-s.png"},
		{id:"10-y",size:44,src:"images/finger/10-y.png"},
		{id:"11-a",size:44,src:"images/finger/11-a.png"},
		{id:"11-b",size:44,src:"images/finger/11-b.png"},
		{id:"11-g",size:44,src:"images/finger/11-g.png"},
		{id:"11-o",size:44,src:"images/finger/11-o.png"},
		{id:"11-p",size:44,src:"images/finger/11-p.png"},
		{id:"11-q",size:44,src:"images/finger/11-q.png"},
		{id:"11-r",size:44,src:"images/finger/11-r.png"},
		{id:"11-s",size:44,src:"images/finger/11-s.png"},
		{id:"11-y",size:44,src:"images/finger/11-y.png"},
		{id:"12-a",size:44,src:"images/finger/12-a.png"},
		{id:"12-b",size:44,src:"images/finger/12-b.png"},
		{id:"12-g",size:44,src:"images/finger/12-g.png"},
		{id:"12-o",size:44,src:"images/finger/12-o.png"},
		{id:"12-p",size:44,src:"images/finger/12-p.png"},
		{id:"12-q",size:44,src:"images/finger/12-q.png"},
		{id:"12-r",size:44,src:"images/finger/12-r.png"},
		{id:"12-s",size:44,src:"images/finger/12-s.png"},
		{id:"12-y",size:44,src:"images/finger/12-y.png"}
		
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
	//隐藏浏览器顶部导航
   /* setTimeout(game.hideNavBar, 10);    
    if(Q.supportOrient)
    {
        window.onorientationchange = function(e)
        {
            game.hideNavBar();
            game.calcStagePosition();
        };
    }*/
	
	this.loader();
	//this.showMainMenu();
};

//游戏加载
game.loader = function(e)
{
	//显示加载页
	var loaderLayer = Q.getDOM("loaderLayer");
	loaderLayer.style.display = "block";
	//加载进度信息
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
	loaderLayer.appendChild(div);
	this.loader = div;
	
    //加载图片素材
	var loader = new Q.ImageLoader();
	loader.addEventListener("loaded", Q.delegate(this.onLoadLoaded, this));
	loader.addEventListener("complete", Q.delegate(this.onLoadComplete, this));
	loader.load(this.res);	
}

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
	//Q.getDOM("loaderLayer").removeChild(this.loader);
	Q.getDOM("loaderLayer").style.display = "none";
	this.loader = null;
	
	this.images = e.images;
	//启动游戏
	//this.startup();
	game.showMainMenu();
}
//line颜色数组
game.arrLineColor = Array();
game.arrLineColor["a"] = "black";
game.arrLineColor["b"] = "#007FFF";
game.arrLineColor["g"] = "#0fc442";
game.arrLineColor["o"] = "orange";
game.arrLineColor["p"] = "#a403bc";
game.arrLineColor["q"] = "#31f4bf";
game.arrLineColor["r"] = "red";
game.arrLineColor["s"] = "blue";
game.arrLineColor["y"] = "#f7e51e";
game.arrLineColor["w"] = "white";
//边框位置
game.arrStrokePlace = Array();
game.arrStrokePlace["a"] = [10,30];
game.arrStrokePlace["r"] = [10,95];
game.arrStrokePlace["o"] = [10,160];
game.arrStrokePlace["y"] = [10,225];
game.arrStrokePlace["g"] = [10,290];
game.arrStrokePlace["p"] = [10,355];
game.arrStrokePlace["s"] = [10,420];
game.arrStrokePlace["b"] = [10,485];
game.arrStrokePlace["q"] = [10,550];
//选择颜色函数
game.selectColor = function(color){
	//if(game.freeBtnState)
	//{
		if(color){
			game.lineColor = color;
			game.zwColor = color;
		}
		var x = game.arrStrokePlace[game.lineColor][0]-5;
		var y = game.arrStrokePlace[game.lineColor][1]-5;
	//}
	/*else
	{
		if(color)
			game.zwColor = color;
		var x = game.arrStrokePlace[game.zwColor][0]-5;
		var y = game.arrStrokePlace[game.zwColor][1]-5;
	}*/
	//边框
	game.FreeColorStage.removeChild(game.StrokeA);
	game.StrokeA = new Q.Graphics();
	game.StrokeA._addAction(["strokeStyle","grey"]);
	//a._addAction(["strokeLine","3px"]);
	//console.log(x+"aaaaa"+y);
	game.StrokeA.drawRect(x, y, 50, 50);
	game.StrokeA._addAction(["stroke"]);
	game.FreeColorStage.addChild(game.StrokeA);
}
//自由创作

//自由创作函数
game.Freeflag=false;

game.FreeclickX = new Array();
game.FreeclickY = new Array();
game.FreeclickDrag = new Array();

game.Freepoint = {};
game.Freepoint.notFirst = false;

game.Freetouchstart=function(e){
	game.FreePre.push(game.FreeStage.children.lastC()._actions.length);
	//game.FreeTimer.pause();
	this.Freeflag = true;
	this.FreeaddClick(e.eventX,e.eventY);
	this.Freeredraw();
	//console.log(game.FreePre);
	//this.Freeredraw1();
}

game.Freetouchmove=function (e){
	if(this.Freeflag)
	{
		if(e.eventX<=10||734<=e.eventX)
		{this.Freeflag = false;
		}
		if(e.eventY<=10||628<=e.eventY)
		{this.Freeflag = false;
		}
		this.FreeaddClick(e.eventX,e.eventY,true);
		
		this.Freeredraw();
		//this.Freeredraw1();
	}
}

game.Freetouchend=function (e)
{
	game.Freeg.cache();
	this.Freeflag = false;
	//game.FreeTimer.resume();
	//game.FreeStage.step();
}
game.FreeaddClick=function(x,y,dragging)
{
	this.FreeclickX.push(x);
	this.FreeclickY.push(y);
	this.FreeclickDrag.push(dragging);
}
//画布画线
game.Freeredraw = function(){
	canvas = document.getElementById("FreeCanvas");
	context = canvas.getContext('2d');
	
	context.strokeStyle = this.arrLineColor[this.lineColor];
	//context.lineJoin = "round";
	context.lineWidth =3;
	
	while(this.FreeclickX.length>0){
	
	this.Freepoint.bx = this.Freepoint.x;
	this.Freepoint.by = this.Freepoint.y;
	this.Freepoint.x = this.FreeclickX.pop();
	this.Freepoint.y = this.FreeclickY.pop();
	this.Freepoint.drag = this.FreeclickDrag.pop();
	
	context.beginPath();
	game.Freeg.beginPath();
	
	if (this.Freepoint.drag && this.Freepoint.notFirst){
		context.moveTo(this.Freepoint.bx,this.Freepoint.by);
		game.Freeg._addAction(["moveTo",this.Freepoint.bx,this.Freepoint.by]);
	}else{
		this.Freepoint.notFirst = true;
		context.moveTo(this.Freepoint.x-1,this.Freepoint.y);
		game.Freeg._addAction(["lineWidth", this.lineWidth]);
		game.Freeg._addAction(["strokeStyle", this.arrLineColor[this.lineColor]]);
		//game.Freeg._addAction(["lineJoin", "round"]);
		//game.Freeg.lineStyle(this.lineWidth, this.arrLineColor[this.lineColor]);
		game.Freeg._addAction(["moveTo",this.Freepoint.x-1,this.Freepoint.y]);
	}
	context.lineTo(this.Freepoint.x,this.Freepoint.y);
	game.Freeg._addAction(["lineTo",this.Freepoint.x,this.Freepoint.y]);
	context.closePath();
	context.stroke();
	//game.Freeg._addAction(["lineWidth", this.lineWidth]);
	//game.Freeg._addAction(["strokeStyle", this.arrLineColor[this.lineColor]]);
	game.Freeg._addAction(["stroke"]);
	//game.Freeg.lineStyle(this.lineWidth, this.arrLineColor[this.lineColor]).endFill();
	//game.Freeg.endFill();
	}
}	
game.addFreeFinger = function(){
		this.FreeStage.addEventListener("touchstart", freeStart,false);
		this.FreeStage.addEventListener("touchend" ,freeEnd,false);
		this.FreeStage.addEventListener("mousedown", freeStart,false);
		this.FreeStage.addEventListener("mouseup" ,freeEnd,false);
	}
game.delFreeEve = function(){
	this.FreeStage.removeAllEventListeners();
	}
game.addFreeLine = function(){
	this.FreeStage.addEventListener("touchstart",Quark.delegate(game.Freetouchstart,this),false);
	this.FreeStage.addEventListener("touchmove",Quark.delegate(game.Freetouchmove,this),false);
	this.FreeStage.addEventListener("touchend" ,Quark.delegate(game.Freetouchend,this),false);
	this.FreeStage.addEventListener("mousedown",Quark.delegate(game.Freetouchstart,this),false);
	this.FreeStage.addEventListener("mousemove",Quark.delegate(game.Freetouchmove,this),false);
	this.FreeStage.addEventListener("mouseup" ,Quark.delegate(game.Freetouchend,this),false);	
	//if(!game.Freeg){
	game.Freeg = new Q.Graphics({width:745, height:640});
	//if(this.FreeStage.children[0]){
	//this.FreeStage.children[0] = game.Freeg;
	//}else{
	this.FreeStage.addChild(game.Freeg);
		//}
	//}
	}
game.addShareEve = function(){
		game.FreeTimer.pause();
		document.getElementById("FreeCloseDiv").addEventListener("mouseup" ,shareEnd,false);
		document.getElementById("FreeCloseDiv").addEventListener("touchend" ,shareEnd,false);
			////console.log(console);
//			var t = setTimeout(function(){
//				//console.log(document.getElementById("FreeShareIframe").contentWindow.document.getElementById("timer").innerHTML); 
//				console.log("aaa");
//				},1000);
		//}
	}
function shareEnd(){
	//console.log(e.EventX+"end"+e.EventY);
	game.FreeDiv.removeChild(document.getElementById("FreeShareDiv"));
	//game.FreeFriB.upState.rect = [0,0,140,71];
	if(game.freeBtnState)
		game.addFreeLine();
	else
		game.addFreeFinger();
	}
//数组最后一个节点
Array.prototype.lastC = function (){
		return this[this.length-1];
	};
function previousFree(){
	
	if(game.FreeStage.children.length==0)
		return;
	/*for(;game.FreeStage.children.lastC().id != "finger"&&game.FreeStage.children.lastC()._actions.length==0;)
			{
				game.FreeStage.children.pop();
				if(game.FreeStage.children.length==0||game.FreeStage.children.lastC().id == "finger")
					break;
			}*/
	if(game.FreeStage.children.lastC().id == "finger")
	{
		//console.log("bbb");
		game.FreeStage.children.pop();
		if(game.freeBtnState)
			{
				//console.log("aaa");
				game.delFreeEve();
				game.addFreeLine();
			}
	}else {
		
		if(game.FreeStage.children.lastC()._actions.length!=0){
			game.FreeStage.children.lastC()._actions.length = game.FreePre.pop();
			game.FreeStage.children.lastC().cache();
			//console.log(game.FreePre);
			for(;game.FreeStage.children.lastC()._actions.length==0;)
			{
				//console.log("aaa");
				game.FreeStage.children.pop();
				if(game.FreeStage.children.length==0||game.FreeStage.children.lastC().id == "finger")
				{
					if(game.freeBtnState){
						game.delFreeEve();
						game.addFreeLine();
					}
					break;
				}
			}
		}else{
			//console.log("ccc");
			for(;true;)
			{
				//console.log("aaa");
				if(game.FreeStage.children.lastC().id != "finger"&&game.FreeStage.children.lastC()._actions.length!=0)
				{
					game.FreeStage.children.lastC()._actions.length = game.FreePre.pop();
					game.FreeStage.children.lastC().cache();
					break;
				}
				game.FreeStage.children.pop();
				
				if(game.FreeStage.children.length==0||game.FreeStage.children.lastC().id == "finger")
				{
					game.FreeStage.children.pop();
					break;
				}
			}
			if(game.freeBtnState)
			{
				//console.log("bbb");
				game.delFreeEve();
				game.addFreeLine();
			}
			
			}
		
		}
		if(game.freeBtnState&&game.FreeStage.children.length==0){
			//console.log("addFreeline");
			//console.log(game.FreePre);
			game.delFreeEve();
			game.addFreeLine();
			}
	//console.log(game.FreeStage.children);
	//console.log(game.FreePre);
	//console.log(game.FreeStage.children[0].type);
	//console.log(game.FreeStage.children[0]._actions.length);
	//game.FreeStage.children[0]._actions.length-=7;
	//game.FreeStage.children[0].cache();
	//game.addFreePrevious();
	game.FreeStage.step();
	}
function freeClear(){
	//console.log(game.FreeStage.children);
	//game.FreeTimer.resume();
	game.FreeStage.children = Array();
	if(game.freeBtnState){
			game.delFreeEve();
			game.addFreeLine();
	}
	if(game.Freeg)
		game.Freeg.uncache();
	game.FreeStage.step();
	}
function freeShare(){
	//console.log("aaa");
	var _t = encodeURI('梦想指纹画');
	var _url = encodeURI('');
	var _appkey = encodeURI('');
	var _pic = encodeURI('');
	var _line1 = encodeURI('ipad游戏');
	var url = "http://share.v.t.qq.com/index.php?c=share&a=index&url="+_url+"&title="+_t+"&line1="+_line1+"&pic="+_pic;
	if(document.getElementById("FreeShareDiv")){
		game.FreeDiv.removeChild(document.getElementById("FreeShareDiv"));
		//game.FreeFriB.upState.rect = [0,0,140,71];
		/*if(game.freeBtnState)
			game.addFreeLine();
		else
			game.addFreeFinger();*/
	}
		//game.FreeFriB.upState.rect = [0,71,140,71];
		game.FreeShareDiv = document.createElement("div");				
		game.FreeShareDiv.id="FreeShareDiv";	
	//	//game.FreeShareDiv.setAttribute("style", "float:left;");
		game.FreeShareDiv.style.width="630px";
		game.FreeShareDiv.style.height="630px";
		game.FreeShareDiv.style.position="absolute";
		game.FreeShareDiv.style.top="70px";
		game.FreeShareDiv.style.left="180px";
		//game.FreeShareDiv.style.border="1px solid #d3d3d3";
		game.FreeShareDiv.style.margin="0px 0px";
		game.FreeCloseDiv = document.createElement("div");				
		game.FreeCloseDiv.id="FreeCloseDiv";	
		//game.FreeCloseDiv.setAttribute("style", "float:left;");
		game.FreeCloseDiv.style.width="30px";
		game.FreeCloseDiv.style.height="30px";
		game.FreeCloseDiv.style.position="relative";
		game.FreeCloseDiv.style.bottom="359px";
		game.FreeCloseDiv.style.left="600px";
		game.FreeCloseDiv.style.border="1px solid #d3d3d3";
		game.FreeCloseDiv.style.margin="0px 0px";

		game.FreeShareIframe = document.createElement("iframe");			
		game.FreeShareIframe.id="FreeShareIframe";	
		//game.FreeShareIframe.setAttribute("style", "float:left;");
		game.FreeShareIframe.setAttribute("src", url);
		game.FreeShareIframe.style.width="630px";
		game.FreeShareIframe.style.height="630px";
		
		game.FreeShareIframe.style.border="2px outset";
		//game.FreeShareIframe.style.margin="0px 0px";
		game.FreeDiv.appendChild(game.FreeShareDiv);
		game.FreeShareDiv.appendChild(game.FreeShareIframe);
		game.FreeShareDiv.appendChild(game.FreeCloseDiv);
		game.delFreeEve();
		game.addShareEve();
		/*var t=setInterval(function(){
		console.log(document.getElementById("FreeShareDiv"));
		},1000);*/
	//game.FreeShareDiv.appendChild(game.FreeShareIframe);
	//console.log(document.getElementById("FreeShareIframe"));
	//document.getElementById("FreeShareDiv").innerHTML=document.getElementById("FreeShareIframe").innerHTML;
}
function zwEve(){
	game.freeBtnState = false;
	game.delFreeEve();
	game.addFreeFinger();
	game.FreeColB.upState.rect = [0,71,140,71];
	game.FreeErrB.upState.rect = [0,0,140,71];
	game.selectColor();
	//game.FreeTimer.resume();
	}
function lineEve(){
	game.freeBtnState = true;
	game.delFreeEve();
	game.addFreeLine();
	game.FreeColB.upState.rect = [0,0,140,71];
	game.FreeErrB.upState.rect = [0,71,140,71];
	game.selectColor();
	//game.FreeTimer.pause();
	}
function freeStart(e){
	this.freeSX = e.eventX;
	this.freeSY = e.eventY;
	//console.log("start"+this.freeSX+"and"+this.freeSY);
	}
function freeEnd(e){
	this.freeEX = e.eventX;
	this.freeEY = e.eventY;
	//console.log("end"+this.freeEX+"and"+this.freeEY);
	if(this.freeEX == this.freeSX && this.freeEY == this.freeSY)
		showFreeFinger(this.freeSX,this.freeSY,0,false);
	else{
		var deg = (Math.atan2(this.freeEY-this.freeSY,this.freeEX-this.freeSX)/Math.PI)*180-90;
		//console.log(deg);
		showFreeFinger(this.freeSX,this.freeSY,deg,true);
	}
	//game.FreeStage.step();
	}
function showFreeFinger(fx,fy,degree,flag){
	if(flag)
	{
		var name = parseInt(Math.random()*9)+1;
		name = name+'-'+game.zwColor;
		//console.log(name);
		game.FreeImg = new Image();
		game.FreeImg.src = "images/finger/"+name+".png";
		game.FreeImg.onload = function(){
			var finger = new Q.Bitmap({id:"finger", image:game.FreeImg,x:fx,y:fy});
			finger.scaleX = 0.3;
			finger.scaleY = 0.3;
			finger.regX = finger.width/2;
			finger.regY = finger.height/2;
			finger.rotation = degree;
			game.FreeStage.addChild(finger);
			game.FreeStage.step();
			}
		
	}
	else
	{//圆指纹
		var name = parseInt(Math.random()*3)+10;
		name = name+'-'+game.zwColor;
		//console.log(name);
		game.FreeImg = new Image();
		game.FreeImg.src = "images/finger/"+name+".png";
		game.FreeImg.onload = function(){
			var finger = new Q.Bitmap({id:"finger", image:game.FreeImg,x:fx,y:fy});
			finger.scaleX = 0.45;
			finger.scaleY = 0.45;
			finger.regX = finger.width/2;
			finger.regY = finger.height/2;
			finger.rotation = degree;
			game.FreeStage.addChild(finger);
			game.FreeStage.step();
			}
		
	}
	//game.FreeStage.addChild(finger);
	
	//console.log();
	}
//自由创作界面
game.freeDraw = function()
{
	//初始化变量
	this.zwColor = "a";
	this.lineColor = "a";
	this.lineWidth = 3;
	this.FreePre = new Array();
	//隐藏上面一层		
	Q.getDOM("classLayer").style.display = "none";
	//取得相关对象
	this.container = Q.getDOM("container");	
	this.FreeDiv = Q.getDOM("FreeDiv");
	/*	
	如果没有相关对象，那么创建相关对象：
		<FreeDiv>
			<FreeCanvas>
			</canvas>
			<FreeButtonDiv>   
				<FreeButtonCanvas>       
				</canvas>             	
			</div>
        </div>
	*/
	if (this.FreeDiv != null)
	{
		this.FreeCanvas = Q.getDOM("FreeCanvas");
		this.FreeButtonDiv = Q.getDOM("FreeButtonDiv");
		this.FreeButtonCanvas = Q.getDOM("FreeButtonCanvas");
	}
	else
	{ 
		//创建所需DOM元素
			this.FreeDiv = document.createElement("div");
				this.FreeDiv.id="FreeDiv";	
				this.FreeDiv.style.width="960px";
				this.FreeDiv.style.height="640px";
				//this.FreeDiv.style.border="1px solid #d3d3d3";
				this.FreeDiv.style.margin="0 auto";
				this.FreeDiv.style.margin="60px 25px";
			this.FreeColorDiv = document.createElement("div");				
				this.FreeColorDiv.id="FreeColorDiv";	
				this.FreeColorDiv.setAttribute("style", "float:left;");
				this.FreeColorDiv.style.width="60px";
				this.FreeColorDiv.style.height="640px";
				//this.FreeColorDiv.style.border="1px solid #d3d3d3";
				this.FreeColorDiv.style.margin="0px 0px";
			this.FreeColorCanvas = document.createElement("canvas");
				this.FreeColorCanvas.id="FreeColorCanvas";
				this.FreeColorCanvas.width=60;
				this.FreeColorCanvas.height=640;
				//this.FreeButtonCanvas.style.border="1px solid red";
				this.FreeColorCanvas.style.margin="0px 0px";
			this.FreeCanvas = document.createElement("canvas");
				this.FreeCanvas.setAttribute("style", "float:left;border-radius:20px;background-color:white");
				this.FreeCanvas.id="FreeCanvas";	
				this.FreeCanvas.width=745;//745//60
				this.FreeCanvas.height=640;
				//this.FreeCanvas.style.border="1px solid red";
				this.FreeCanvas.style.margin="0px 6px";
			this.FreeButtonDiv = document.createElement("div");
				this.FreeButtonDiv.setAttribute("style", "float:left");
				this.FreeButtonDiv.id="FreeButtonDiv";
				this.FreeButtonDiv.style.width="138px";
				this.FreeButtonDiv.style.height="640px";
				//this.FreeButtonDiv.style.border="1px solid blue";
				this.FreeButtonDiv.style.margin="0px 0px";		
			this.FreeButtonCanvas = document.createElement("canvas");
				this.FreeButtonCanvas.id="FreeButtonCanvas";
				this.FreeButtonCanvas.width=139;
				this.FreeButtonCanvas.height=640;
				//this.FreeButtonCanvas.style.border="1px solid red";
				this.FreeButtonCanvas.style.margin="0px 0px";
			//连接所需DOM元素		
			this.container.appendChild(this.FreeDiv);
				this.FreeDiv.appendChild(this.FreeColorDiv);
					this.FreeColorDiv.appendChild(this.FreeColorCanvas);
				this.FreeDiv.appendChild(this.FreeCanvas);
				this.FreeDiv.appendChild(this.FreeButtonDiv);
					this.FreeButtonDiv.appendChild(this.FreeButtonCanvas);
		//FreeCanvas部分的设计
			//创建上下文
			this.FreeContext = new Q.CanvasContext({canvas:this.FreeCanvas});
			//创建舞台
			this.FreeStage = new Q.Stage({width:this.FreeCanvas.width, height:this.FreeCanvas.height, context:this.FreeContext, update:function(){
				
			}});
			//事件管理器
			var events = Q.supportTouch ? ["touchstart","touchmove","touchend"] : ["mousedown","mousemove","mouseup", "mouseout"];
			this.FreeEm = new Q.EventManager();
			this.FreeEm.registerStage(this.FreeStage, events, true, true);
			//时钟
			this.FreeTimer = new Q.Timer(1000/200);
			this.FreeTimer.addListener(this.FreeStage);
			//this.FreeTimer.start();
			//this.FreeTimer.stop();
			
		//FreeButtonCanvas部分的设计
			//创建上下文
			this.FreeButtonContext = new Q.CanvasContext({canvas:this.FreeButtonCanvas});
			//创建舞台
			this.FreeButtonStage = new Q.Stage({width:this.FreeButtonCanvas.width, height:this.FreeButtonCanvas.height, context:this.FreeButtonContext, update:function(){
				
			}});
			//事件管理器
			var events = Q.supportTouch ? ["touchstart","touchmove","touchend"] : ["mousedown","mousemove","mouseup", "mouseout"];
			this.FreeButtonEm = new Q.EventManager();
			this.FreeButtonEm.registerStage(this.FreeButtonStage, events, true, true);
			//创建按钮
				//
				this.FreeColB = new Q.Button({id:"zw", image:game.getImage("zw"), x:0, y:14, width:140, height:71,
				up:{rect:[0,71,140,71]},
				over:{rect:[0,71,140,71]},
				down:{rect:[0,71,140,71]},
				disabled:{rect:[0,0,140,71]},
				});
				
				this.FreeColB.addEventListener("mouseup" ,zwEve,false);
				this.FreeColB.addEventListener("touchend" ,zwEve,false);
				//
				this.FreeErrB = new Q.Button({id:"line", image:game.getImage("line"), x:0, y:97, width:140, height:71,
				up:{rect:[0,0,140,71]},
				over:{rect:[0,71,140,71]},
				down:{rect:[0,71,140,71]},
				disabled:{rect:[0,0,140,71]},
				});
				this.FreeErrB.addEventListener("mouseup" ,lineEve,false);
				this.FreeErrB.addEventListener("touchend" ,lineEve,false);
				//
				this.FreeCleB = new Q.Button({id:"xiangpi", image:game.getImage("xiangpi"), x:0, y:180, width:140, height:71,
				up:{rect:[0,0,140,71]},
				over:{rect:[0,71,140,71]},
				down:{rect:[0,71,140,71]},
				disabled:{rect:[0,54,140,71]}
				});
				this.FreeCleB.addEventListener("mouseup" ,previousFree,false);
				this.FreeCleB.addEventListener("touchend" ,previousFree,false);
				//
				this.FreeRefB = new Q.Button({id:"qingchu", image:game.getImage("qingchu"), x:0, y:265, width:140, height:71,
				up:{rect:[0,0,140,71]},
				over:{rect:[0,71,140,71]},
				down:{rect:[0,71,140,71]},
				disabled:{rect:[0,54,140,71]}
				});
				this.FreeRefB.addEventListener("mouseup" ,freeClear,false);
				this.FreeRefB.addEventListener("touchend" ,freeClear,false);
				//
				this.FreeFinB = new Q.Button({id:"wancheng", image:game.getImage("wancheng"), x:0, y:334, width:140, height:90,
				up:{rect:[0,0,140,90]},
				over:{rect:[0,90,140,90]},
				down:{rect:[0,90,140,90]},
				disabled:{rect:[0,54,140,71]}
				});
				this.FreeFinB.addEventListener("mouseup" ,false);
				this.FreeFinB.addEventListener("touchend" ,false);
				//
				this.FreeBacB = new Q.Button({id:"fanhui", image:game.getImage("fanhui"), x:0, y:350, width:140, height:90,
				up:{rect:[0,0,140,71]},
				over:{rect:[0,71,140,71]},
				down:{rect:[0,71,140,71]},
				disabled:{rect:[0,54,140,71]}
				});
				this.FreeBacB.addEventListener("mouseup" ,function(){freeClear();Q.getDOM("FreeDiv").style.display = "none";Q.getDOM("classLayer").style.display = "block";},false);
				this.FreeBacB.addEventListener("touchend" ,function(){freeClear();Q.getDOM("FreeDiv").style.display = "none";Q.getDOM("classLayer").style.display = "block";},false);
				//
				this.FreeFriB = new Q.Button({id:"share", image:game.getImage("share"), x:0, y:567, width:140, height:90,
				up:{rect:[0,0,140,71]},
				over:{rect:[0,71,140,71]},
				down:{rect:[0,71,140,71]},
				disabled:{rect:[0,54,140,71]}
				});
				this.FreeFriB.addEventListener("mouseup" ,function(){},false);
				this.FreeFriB.addEventListener("touchend" ,function(){},false);
			//添加按钮
			this.FreeButtonStage.addChild(this.FreeColB,this.FreeErrB,this.FreeCleB,this.FreeRefB,this.FreeBacB);
		//时钟	
		this.FreeButtonTimer = new Q.Timer(1000/200);
		this.FreeButtonTimer.addListener(this.FreeButtonStage);
		this.FreeButtonTimer.start();
	//颜色设计
		//创建上下文
			this.FreeColorContext = new Q.CanvasContext({canvas:this.FreeColorCanvas});
			//创建舞台
			this.FreeColorStage = new Q.Stage({width:this.FreeColorCanvas.width, height:this.FreeColorCanvas.height, context:this.FreeColorContext, update:function(){
				
			}});
			//事件管理器
			var events = Q.supportTouch ? ["touchstart","touchmove","touchend"] : ["mousedown","mousemove","mouseup", "mouseout"];
			this.FreeColorEm = new Q.EventManager();
			this.FreeColorEm.registerStage(this.FreeColorStage, events, true, true);
			
			//颜色按钮
			var a = new Q.Graphics();
			a.beginFill("black", 1);
			a.drawRect(10, 30, 40, 40);
			a.endFill();
			a.addEventListener("mouseup" ,function(){game.selectColor("a");},false);
			a.addEventListener("touchend" ,function(){game.selectColor("a");},false);
			//console.log(a);
			var r = new Q.Graphics();
			r.beginFill("red", 1);
			r.drawRect(10, 95, 40, 40);
			r.endFill();
			r.addEventListener("mouseup" ,function(){game.selectColor("r");},false);
			r.addEventListener("touchend" ,function(){game.selectColor("r");},false);
			
			var o = new Q.Graphics();
			o.beginFill("orange", 1);
			o.drawRect(10, 160, 40, 40);
			o.endFill();
			o.addEventListener("mouseup" ,function(){game.selectColor("o");},false);
			o.addEventListener("touchend" ,function(){game.selectColor("o");},false);
			
			var y = new Q.Graphics();
			y.beginFill("#f7e51e", 1);
			y.drawRect(10, 225, 40, 40);
			y.endFill();
			y.addEventListener("mouseup" ,function(){game.selectColor("y");},false);
			y.addEventListener("touchend" ,function(){game.selectColor("y");},false);
			
			var g = new Q.Graphics();
			g.beginFill("#0fc442", 1);
			g.drawRect(10, 290, 40, 40);
			g.endFill();
			g.addEventListener("mouseup" ,function(){game.selectColor("g");},false);
			g.addEventListener("touchend" ,function(){game.selectColor("g");},false);
			
			var p = new Q.Graphics();
			p.beginFill("#a403bc", 1);
			p.drawRect(10, 355, 40, 40);
			p.endFill();
			p.addEventListener("mouseup" ,function(){game.selectColor("p");},false);
			p.addEventListener("touchend" ,function(){game.selectColor("p");},false);
			
			var b = new Q.Graphics();
			b.beginFill("blue", 1);
			b.drawRect(10, 420, 40, 40);
			b.endFill();
			b.addEventListener("mouseup" ,function(){game.selectColor("b");},false);
			b.addEventListener("touchend" ,function(){game.selectColor("b");},false);
			
			var s = new Q.Graphics();
			s.beginFill("#007FFF", 1);
			s.drawRect(10, 485, 40, 40);
			s.endFill();
			s.addEventListener("mouseup" ,function(){game.selectColor("s",true);},false);
			s.addEventListener("touchend" ,function(){game.selectColor("s",true);},false);
			
			var q = new Q.Graphics();
			q.beginFill("#31f4bf", 1);
			q.drawRect(10, 550, 40, 40);
			q.endFill();
			q.addEventListener("mouseup" ,function(){game.selectColor("q");},false);
			q.addEventListener("touchend" ,function(){game.selectColor("q");},false);
			
			
			
			
			
			
			
			var aa = new Q.Button({id:"aa", image:game.getImage("share"), x:10, y:30, width:40, height:40,
				up:{rect:[0,0,0,0]},
				over:{rect:[0,0,0,0]},
				down:{rect:[0,0,0,0]},
				disabled:{rect:[0,0,0,0]}
			});
			aa.addEventListener("mouseup" ,function(){game.selectColor("a");},false);
			aa.addEventListener("touchend" ,function(){game.selectColor("a");},false);
			
			var rr = new Q.Button({id:"rr", image:game.getImage("share"), x:10, y:95, width:40, height:40,
				up:{rect:[0,0,0,0]},
				over:{rect:[0,0,0,0]},
				down:{rect:[0,0,0,0]},
				disabled:{rect:[0,0,0,0]}
			});
			rr.addEventListener("mouseup" ,function(){game.selectColor("r")},false);
			rr.addEventListener("touchend" ,function(){game.selectColor("r")},false);
			
			var oo = new Q.Button({id:"oo", image:game.getImage("share"), x:10, y:160, width:40, height:40,
				up:{rect:[0,0,0,0]},
				over:{rect:[0,0,0,0]},
				down:{rect:[0,0,0,0]},
				disabled:{rect:[0,0,0,0]}
			});
			oo.addEventListener("mouseup" ,function(){game.selectColor("o")},false);
			oo.addEventListener("touchend" ,function(){game.selectColor("o")},false);
			
			var yy = new Q.Button({id:"yy", image:game.getImage("share"), x:10, y:225, width:40, height:40,
				up:{rect:[0,0,0,0]},
				over:{rect:[0,0,0,0]},
				down:{rect:[0,0,0,0]},
				disabled:{rect:[0,0,0,0]}
			});
			yy.addEventListener("mouseup" ,function(){game.selectColor("y")},false);
			yy.addEventListener("touchend" ,function(){game.selectColor("y")},false);
			
			var gg = new Q.Button({id:"gg", image:game.getImage("share"), x:10, y:290, width:40, height:40,
				up:{rect:[0,0,0,0]},
				over:{rect:[0,0,0,0]},
				down:{rect:[0,0,0,0]},
				disabled:{rect:[0,0,0,0]}
			});
			gg.addEventListener("mouseup" ,function(){game.selectColor("g")},false);
			gg.addEventListener("touchend" ,function(){game.selectColor("g")},false);
			
			var pp = new Q.Button({id:"pp", image:game.getImage("share"), x:10, y:355, width:40, height:40,
				up:{rect:[0,0,0,0]},
				over:{rect:[0,0,0,0]},
				down:{rect:[0,0,0,0]},
				disabled:{rect:[0,0,0,0]}
			});
			pp.addEventListener("mouseup" ,function(){game.selectColor("p")},false);
			pp.addEventListener("touchend" ,function(){game.selectColor("p")},false);
			
			
			
			var ss = new Q.Button({id:"ss", image:game.getImage("share"), x:10, y:420, width:40, height:40,
				up:{rect:[0,0,0,0]},
				over:{rect:[0,0,0,0]},
				down:{rect:[0,0,0,0]},
				disabled:{rect:[0,0,0,0]}
			});
			ss.addEventListener("mouseup" ,function(){game.selectColor("s")},false);
			ss.addEventListener("touchend" ,function(){game.selectColor("s")},false);
			
			var bb = new Q.Button({id:"bb", image:game.getImage("share"), x:10, y:485, width:40, height:40,
				up:{rect:[0,0,0,0]},
				over:{rect:[0,0,0,0]},
				down:{rect:[0,0,0,0]},
				disabled:{rect:[0,0,0,0]}
			});
			bb.addEventListener("mouseup" ,function(){game.selectColor("b")},false);
			bb.addEventListener("touchend" ,function(){game.selectColor("b")},false);
			
			var qq = new Q.Button({id:"qq", image:game.getImage("share"), x:10, y:550, width:40, height:40,
				up:{rect:[0,0,0,0]},
				over:{rect:[0,0,0,0]},
				down:{rect:[0,0,0,0]},
				disabled:{rect:[0,0,0,0]}
			});
			qq.addEventListener("mouseup" ,function(){game.selectColor("q")},false);
			qq.addEventListener("touchend" ,function(){game.selectColor("q")},false);
			
			this.FreeColorStage.addChild(a,r,o,y,g,p,b,s,q,aa,rr,oo,yy,gg,pp,bb,ss,qq);
			//时钟
			this.FreeColorTimer = new Q.Timer(1000/200);
			this.FreeColorTimer.addListener(this.FreeColorStage);
			this.FreeColorTimer.start();
		
	}
	//默认选中指纹
	zwEve();
	Q.getDOM("FreeDiv").style.display = "block";
}


//显示主界面
game.showMainMenu = function()
{
	var container = Q.getDOM("container");
	
	var canvas = Q.getDOM("mainMenuLayer");
	
	if (canvas == null)
	{
		canvas = document.createElement("canvas");
		canvas.id = "mainMenuLayer";
		container.appendChild(canvas);
		
		canvas.style.position = "absolute";
		canvas.width = container.clientWidth;
		canvas.height = container.clientHeight;
		canvas.style.top = "0px";
		canvas.style.left = "0px";
		
		var context = new Q.CanvasContext({canvas:canvas});
		//创建舞台
		var mainMenuStage = new Q.Stage({width:canvas.width, height:canvas.height, context:context, update:function(){}});
		
		var events = Q.supportTouch ? ["touchstart","touchmove","touchend"] : ["mousedown","mousemove","mouseup", "mouseout"];
		var em = new Q.EventManager();
		em.registerStage(mainMenuStage, events, true, true);
	
		var title = new Q.Bitmap({id:"title", image:game.getImage("title"),x:310,y:140});
		var flower = new Q.Bitmap({id:"flower", image:game.getImage("flower"),x:544,y:270});
		/*var img = title.image;
		img.style.position = "absolute";
		img.style.top ="150px";
		img.style.left ="310px";*/
		//mainMenuLayer.appendChild(img);
		
		//按钮测试	
		var btn1 = new Q.Button({id:"button1", image:game.getImage("button1"), x:310, y:287, width:195, height:54,
		up:{rect:[0,0,195,54]},
		over:{rect:[0,54,195,54]},
		down:{rect:[0,54,195,54]},
		disabled:{rect:[0,54,195,54]}
		});
		btn1.addEventListener("mouseup" ,function(){game.showClass();game.playbSong(localStorage.getItem("openbsong"));},false);
		btn1.addEventListener("touchend" ,function(){game.showClass();game.playbSong(localStorage.getItem("openbsong"));},false);
		
		var btn2 = new Q.Button({id:"button2", image:game.getImage("button2"), x:310, y:367, width:195, height:54,
		up:{rect:[0,0,195,54]},
		over:{rect:[0,54,195,54]},
		down:{rect:[0,54,195,54]},
		disabled:{rect:[0,54,195,54]}
		});
		btn2.addEventListener("mouseup" ,function(){game.songPlay(); game.playbSong(localStorage.getItem("openbsong"));},false);
		btn2.addEventListener("touchend" ,function(){game.songPlay(); game.playbSong(localStorage.getItem("openbsong"));},false);
		
		var btn3 = new Q.Button({id:"button3", image:game.getImage("button3"), x:310, y:447, width:195, height:54,
		up:{rect:[0,0,195,54]},
		over:{rect:[0,54,195,54]},
		down:{rect:[0,54,195,54]},
		disabled:{rect:[0,54,195,54]}
		});
		btn3.addEventListener("mouseup" ,function(){game.gameHelp(); game.playbSong(localStorage.getItem("openbsong"));},false);
		btn3.addEventListener("touchend" ,function(){game.gameHelp(); game.playbSong(localStorage.getItem("openbsong"));},false);
		
		mainMenuStage.addChild(btn1,btn2,btn3,title,flower);
		
		var timer = new Q.Timer(1000/200);
		timer.addListener(mainMenuStage);
		timer.start();
	}
	
	Q.getDOM("mainMenuLayer").style.display = "block";
}

//显示类别
game.showClass = function()
{
	Q.getDOM("mainMenuLayer").style.display = "none";
	var container = Q.getDOM("container");
	var canvas = Q.getDOM("classLayer");
	if (canvas == null)
	{
		canvas = document.createElement("canvas");
		canvas.id = "classLayer";
		container.appendChild(canvas);
		
		canvas.style.position = "absolute";
		canvas.width = container.clientWidth;
		canvas.height = container.clientHeight;
		canvas.style.top = "0px";
		canvas.style.left = "0px";
		
		var context = new Q.CanvasContext({canvas:canvas});
		//创建舞台
		var classStage = new Q.Stage({width:canvas.width, height:canvas.height, context:context, update:function(){}});
		
		var events = Q.supportTouch ? ["touchstart","touchmove","touchend"] : ["mousedown","mousemove","mouseup", "mouseout"];
		var em = new Q.EventManager();
		em.registerStage(classStage, events, true, true);
		 
		var menu1 = new Q.Button({id:"menu1", image:game.getImage("menu1"), x:185, y:205, width:217, height:219,rotation:-45,
		up:{rect:[0,0,217,219]},
		over:{rect:[0,0,217,219]},
		down:{rect:[0,219,217,219]},
		disabled:{rect:[0,0,217,219]}
		});
		var menu2 = new Q.Button({id:"menu2", image:game.getImage("menu2"), x:535, y:205, width:217, height:219,rotation:-45,
		up:{rect:[0,0,217,219]},
		over:{rect:[0,0,217,219]},
		down:{rect:[0,219,217,219]},
		disabled:{rect:[0,0,217,219]}
		});
		var menu3 = new Q.Button({id:"menu3", image:game.getImage("menu3"), x:355, y:380, width:217, height:219,rotation:-45,
		up:{rect:[0,0,217,218]},
		over:{rect:[0,0,217,218]},
		down:{rect:[0,218,217,218]},
		disabled:{rect:[0,0,217,218]}
		});
		var menu4 = new Q.Button({id:"menu4", image:game.getImage("menu4"), x:5, y:370, width:217, height:219,rotation:-45,
		up:{rect:[0,0,217,219]},
		over:{rect:[0,0,217,219]},
		down:{rect:[0,219,217,219]},
		disabled:{rect:[0,0,217,219]}
		});
		var menu5 = new Q.Button({id:"menu5", image:game.getImage("menu5"), x:530, y:555, width:217, height:219,rotation:-45,
		up:{rect:[0,0,217,219]},
		over:{rect:[0,0,217,219]},
		down:{rect:[0,219,217,219]},
		disabled:{rect:[0,0,217,219]}
		});
		var menu6 = new Q.Button({id:"menu6", image:game.getImage("menu6"), x:175, y:540, width:217, height:219,rotation:-45,
		up:{rect:[0,0,217,219]},
		over:{rect:[0,0,217,219]},
		down:{rect:[0,219,217,219]},
		disabled:{rect:[0,0,217,219]}
		});
		var menu7 = new Q.Button({id:"menu7", image:game.getImage("menu7"), x:710, y:375, width:217, height:219,rotation:-45,
		up:{rect:[0,0,217,218]},
		over:{rect:[0,0,217,218]},
		down:{rect:[0,218,217,218]},
		disabled:{rect:[0,0,217,218]}
		});
		var classBack = new Q.Button({id:"classBack", image:game.getImage("back"), x:405, y:650, width:195, height:54,
		up:{rect:[0,0,195,54]},
		over:{rect:[0,0,195,54]},
		down:{rect:[0,53,195,54]},
		disabled:{rect:[0,0,195,54]}
		});
		classBack.addEventListener("mouseup" ,function(){Q.getDOM("classLayer").style.display = "none";Q.getDOM("mainMenuLayer").style.display = "block";},false);
		classBack.addEventListener("touchend" ,function(){Q.getDOM("classLayer").style.display = "none";Q.getDOM("mainMenuLayer").style.display = "block";},false);
		menu1.addEventListener("mouseup" ,function(){game.gradualGet("people");},false);
		menu1.addEventListener("touchend" ,function(){game.gradualGet("people");},false);
		menu2.addEventListener("mouseup" ,function(){game.gradualGet("plant");},false);
		menu2.addEventListener("touchend" ,function(){game.gradualGet("plant");},false);
		menu3.addEventListener("mouseup" ,function(){game.gradualGet("food");},false);
		menu3.addEventListener("touchend" ,function(){game.gradualGet("food");},false);
		menu4.addEventListener("mouseup" ,function(){game.gradualGet("dailyuse");},false);
		menu4.addEventListener("touchend" ,function(){game.gradualGet("dailyuse");},false);
		menu5.addEventListener("mouseup" ,function(){game.gradualGet("vehicle");},false);
		menu5.addEventListener("touchend" ,function(){game.gradualGet("vehicle");},false);
		menu6.addEventListener("mouseup" ,function(){game.gradualGet("animal");},false);
		menu6.addEventListener("touchend" ,function(){game.gradualGet("animal");},false);
		menu7.addEventListener("mouseup" ,function(){game.gradualGet("free");},false);
		menu7.addEventListener("touchend" ,function(){game.gradualGet("free");},false);
		classStage.addChild(menu1,menu2,menu3,menu4,menu5,menu6,menu7,classBack);
		
		var timer = new Q.Timer(1000/200);
		timer.addListener(classStage);
		timer.start();
	}
	
	Q.getDOM("classLayer").style.display = "block";
}
//关卡函数

//显示关卡

game.drawChoice = function(props,props1)
{
	Q.getDOM("classLayer").style.display = "none";
	
	var container = Q.getDOM("container");	
	var canvas = Q.getDOM("choiceLayer");
	
	if (canvas == null)
	{
		canvas = document.createElement("canvas");
		canvas.id = "choiceLayer";
		container.appendChild(canvas);
		
		canvas.style.position = "absolute";
		canvas.width = container.clientWidth;
		canvas.height = container.clientHeight;
		canvas.style.top = "0px";
		canvas.style.left = "0px";
		
		var context = new Q.CanvasContext({canvas:canvas});
		//创建舞台
		var choiceStage = new Q.Stage({width:canvas.width, height:canvas.height, context:context, update:function(){}});
		
		var events = Q.supportTouch ? ["touchstart","touchmove","touchend"] : ["mousedown","mousemove","mouseup", "mouseout"];
		var em = new Q.EventManager();
		em.registerStage(choiceStage, events, true, true);
	      
		
		
		
		//中间替换变量
		var lock=new Array();
		var flag=new Array();
		var btn=new Array();
		var btnstar=new Array();
		var star=new Array();
		//判断本地是否有关卡存档
		  game.getLevel();
		//初始化关卡
		  game.siteLevel(props,lock,flag,star);
		
		 //关卡位置定位(X:219 Y:182)   
		  for(var j=0;j<12;j++){
				
				
				 
			 btn[j] = new Q.Button({id:flag[j], image:game.getKindImage(flag[j]), x:81+j%4*219, y:78+Math.floor(j/4)*182, width:205, height:152,
			up:{rect:[0,0,205,152]},	
			}); 
			
			 if(star[j]==1||star[j]==0){
				 btnstar[j] = new Q.Button({id:"starflag", image:game.getImage("star1"), x:181+j%4*219, y:190+Math.floor(j/4)*182, width:84, height:30,
				 up:{rect:[0,0,6,6]},});       
			}else if(star[j]==2){				
				 btnstar[j] = new Q.Button({id:"star1", image:game.getImage("star1"), x:181+j%4*219, y:190+Math.floor(j/4)*182, width:84, height:30,
				 up:{rect:[0,0,84,30]},});    
			}else if(star[j]==3){
				 btnstar[j] = new Q.Button({id:"star2", image:game.getImage("star2"), x:181+j%4*219, y:190+Math.floor(j/4)*182, width:84, height:30,
				 up:{rect:[0,0,84,30]},}); 	 
			}else if(star[j]==4){
				   btnstar[j] = new Q.Button({id:"star3", image:game.getImage("star3"), x:181+j%4*219, y:190+Math.floor(j/4)*182, width:84, height:30,
				 up:{rect:[0,0,84,30]},}); 
			
		  }
			
				  if(lock[j]!=1){
						 eval('btn[j].addEventListener("mouseup" ,function(){ltimer.stop();container.removeChild(canvas);game.showOperationLayer(props,'+L[j]+');},false);');
						 eval('btn[j].addEventListener("touchend" ,function(){ltimer.stop();container.removeChild(canvas);game.showOperationLayer(props,'+L[j]+');},false);');
				  }		  
	   }
		           
                    
		
		
		 var backbtn = new Q.Button({id:"back", image:game.getImage("back"), x:418, y:635, width:195, height:54,
		up:{rect:[0,0,195,54]},
		over:{rect:[0,54,195,54]},
		down:{rect:[0,54,195,54]},
		disabled:{rect:[0,54,195,54]}
		});
		 
		 backbtn.addEventListener("mouseup" ,function(){ltimer.stop();container.removeChild(canvas);Q.getDOM("classLayer").style.display = "block";},false);
		backbtn.addEventListener("touchend" ,function(){ltimer.stop();container.removeChild(canvas);Q.getDOM("classLayer").style.display = "block";},false);
		
		
		choiceStage.addChild(btn[0],btn[1],btn[2],btn[3],btn[4],btn[5],btn[6],btn[7],btn[8],btn[9],btn[10],btn[11],backbtn);
	  choiceStage.addChild(btnstar[0],btnstar[1],btnstar[2],btnstar[3],btnstar[4],btnstar[5],btnstar[6],btnstar[7],btnstar[8],btnstar[9],btnstar[10],btnstar[11]);
		 ltimer = new Q.Timer(1000/200);
		ltimer.addListener(choiceStage);
		ltimer.start();
	}
	
	Q.getDOM("choiceLayer").style.display = "block";
	
	
	
	
	
}


//分类加载
game.gradualGet=function(props){
	        
			switch(props)
		{
			case "people":
				kindload=game.people;
				break;
			case "plant":
				kindload=game.plant;
				break;
			case "food":
				kindload=game.food;
				break;
			case "dailyuse":
				kindload=game.dailyuse;
				break;
			case "animal":
				kindload=game.animal;
				break;	
			case "vehicle":
				kindload=game.vehicle;
				break;	
			case "free":
			    //kindload=game.free;
				kindload = Array();
				break;	
		}
			
			
			kindflag=props;
		    kindloader.addEventListener("complete", Q.delegate(this.onLoadKindComplete,this));
	        kindloader.load(kindload);
				  	
}


game.onLoadKindComplete = function(e)
{
	
	e.target.removeAllEventListeners();
	this.loader = null;	
	this.images2 = e.images;
		if(kindflag!="free"){
		  game.drawChoice(kindflag);
		}else{
			game.freeDraw()
		    }
		
		
}

game.getKindImage = function(id)
{	
	  return this.images2[id].image;	
}


//单项加载
game.ongGet=function(props,le)
{ 
		switch(props)
		{
			case "people":
				oneload=game.people1[le-1];
				break;
			case "plant":
				oneload=game.plant1[le-1];
				break;
			case "food":
				oneload=game.food1[le-1];
				break;
			case "dailyuse":
				oneload=game.dailyuse1[le-1];
				break;
			case "animal":
				oneload=game.animal1[le-1];
				break;	
			case "vehicle":
				oneload=game.vehicle1[le-1];
				break;	
		}
		 //oneprops=props;
	     // onele=le;
	    oneloader.addEventListener("complete", Q.delegate(this.onLoadOneComplete,this));
	    oneloader.load(oneload);	
}

game.onLoadOneComplete = function(e)
{
	e.target.removeAllEventListeners();
	this.loader = null;	
	this.images3 = e.images;	
}

game.getOneImage = function(id)
{	
	return this.images3[id].image;	
}
//关卡类别初始化
game.siteLevel=function(props,lock,flag,star){
      
 
		  switch(props)
		  {
			  case "people":
			           for(var i=0;i<=11;i++){
				
				   if(Locked[0][i]==0||Locked[0][i]==2||Locked[0][i]==3||Locked[0][i]==4){
						  flag[i]=peopleLevel2[i];
						  
					
						  
				   }else{
						  flag[i]=levelHold[0];	
				   }  
				   lock[i]=Locked[0][i]; 
				   star[i]=Locked[0][i];
			   }  
			  break
			  case "plant":
			          for(var i=0;i<=11;i++){
						    if(Locked[1][i]==0||Locked[1][i]==2||Locked[1][i]==3||Locked[1][i]==4){
							  flag[i]=plantLevel2[i];
							 
							
				         }else{
							  flag[i]=levelHold[1];
				     }  
				      lock[i]=Locked[1][i];
					  star[i]=Locked[1][i];
			   }
			  break
			  case "food":
			              for(var i=0;i<=11;i++){
						    if(Locked[2][i]==0||Locked[2][i]==2||Locked[2][i]==3||Locked[2][i]==4){
							  flag[i]=foodLevel2[i];
							 
							
				         }else{
							  flag[i]=levelHold[2];
				     }  
				      lock[i]=Locked[2][i];
					  star[i]=Locked[2][i];
			   }
			            
			  break
			  case "dailyuse":
			           for(var i=0;i<=11;i++){
						    if(Locked[3][i]==0||Locked[3][i]==2||Locked[3][i]==3||Locked[3][i]==4){
							  flag[i]=dailyuseLevel2[i];
							 
							
				         }else{
							  flag[i]=levelHold[3];
				     }  
				      lock[i]=Locked[3][i];
					  star[i]=Locked[3][i];
				 }
			  break
			  case "animal":
			         for(var i=0;i<=11;i++){
				
				   if(Locked[4][i]==0||Locked[4][i]==2||Locked[4][i]==3||Locked[4][i]==4){
						  flag[i]=animalLevel2[i];
						  lock[i]=Locked[4][i];
						
				   }else{
						  flag[i]=levelHold[0];
						
				   } 
				     lock[i]=Locked[4][i]; 
				     star[i]=Locked[4][i];
			   }
			  break
			  case "vehicle":
			            for(var i=0;i<=11;i++){
						    if(Locked[5][i]==0||Locked[5][i]==2||Locked[5][i]==3||Locked[5][i]==4){
							  flag[i]=vehicleLevel2[i];
							 
							 
				         }else{
							  flag[i]=levelHold[5];
				     }  
				        lock[i]=Locked[5][i];
					    star[i]=Locked[5][i];
				 }
			      
			  break
			  default:  
		  }   	
}

//本地存储关卡
game.saveLevel=function(){
	
   localStorage.setItem("fingerLock","true");  
   for(var n=0;n<6;n++){
              for(var m=0;m<12;m++){   
	                  localStorage.setItem("level_"+n+"_"+m,Locked[n][m]);   	   
                   }
                }	
}

//本地获取关卡
game.getLevel=function(){
	if(localStorage.getItem("fingerLock")=="true"){
		for(var n=0;n<6;n++){
		  for(var m=0;m<12;m++){
				Locked[n][m]=localStorage.getItem("level_"+n+"_"+m);
			  }			
		}
		
		 
	}else{
		  //alert("存档不存在");
	}
}

//获取图片资源
game.getImage = function(id)
{
	return this.images[id].image;
}

//信息数组
	game.MsgArr=
	[
		//people
		[
			//ysmail
			[
				"ysmail",
				[
					["ysmailF1",300,190,-2,1.2,1.3]
				]
			],
			//smile
			[
				"smile",
				[
					["smileF1",270,130,0,1.7,2]
				]
			],
			//tooth
			[
				"tooth",
				[
					["toothF1",270,130,0,1.7,2.1]
				]
			],
			//hlw
			[
				"hlw",
				[
					["hlwF1",230,360,-86,1.6,1.7],
					["hlwF2",262,422,-86,1.3,1.5]
				]
			],
			//jz
			[
				"jz",
				[
					["jzF1",290,183,0,1.3,1.4]
				]
			],
			//flag
			[
				"flag",
				[
					["flagF1",280,150,0,1*1.2,0.7*1.2],
					["flagF2",265,300,0,1*1.4,0.7*1.4]
				]
			],
			//mama
			[
				"mama",
				[
					["mamaF1",265,220,-86,1,1],
					["mamaF2",280,220,5,1.2,1.3]
				]
			],
			//teacher
			[
				"teacher",
				[
					["teacherF1",303,60,0,1.1,1],
					["teacherF2",290,243,0,1.1,1]
				]
			],
			//worker
			[
				"worker",
				[
					["workerF1",331,255,-110,1.1,1.1],
					["workerF2",335,231,-5,1.3,1.2]
				]
			],
			//sonw
			[
				"sonw",
				[
					["sonwF1",290,135,0,1*1.3,0.7*1.3],
					["sonwF2",270,280,0,1*1.3,0.7*1.3],
					["sonwF3",235,554,-86,1.4,1.4]
				]
			],
			//runner
			[
				"runner",
				[
					["runnerF1",340,100,0,1*0.9,0.7*0.9],
					["runnerF2",310,200,0,1*0.9,0.7*0.9],
					["runnerF3",280,280,0,1*0.9*1.1,0.7*0.9]
				]
			],
			//Isnow
			[
				"Isnow",
				[
					["IsnowF1",220,345,-86,1.5,1.4],
					["IsnowF2",185,513,-86,1.8,1.8]
		     	]
			]
		],
		//plant
		[
			//flag
			[
				"bulrush",
				[
					["bulrushF1",336,398, 188,0.8,0.95],
					["bulrushF2",456,288,200, 0.81,1]
					
				]
			],
			//runner
			[
				"crocus",
				[
					["crocusF1",446,365,180,1.57,1.75]
					
				]
			],
			//smile
			[
				"pod",
				[
					["podF1",210,275,86,0.5,0.5],
					["podF2",310,245,86,0.5,0.6],
					["podF3",400 ,230, 86 ,0.5 ,0.6],
					["podF4",490 ,258 ,99, 0.5 ,0.6],
					["podF5",596, 285, 100 ,0.54 ,0.67]

				]
			],
			//sonw
			[
				"tree",
				[
					["treeF",540, 458, 168, 2.1, 2.5]
				]
			],
			//tooth
			[
				"lotus",
				[
					["lotusF1",260, 535, 232, 1.15, 1.2],
					["lotusF2",360, 433, 233, 0.93, 1.05],
					["lotusF3",470, 320, 233, 0.73,0.79]
				]
			],
			//ysmail
			[
				"cactus",
				[
					["cactusF1",477, 438, 180, 2, 1.98],
					["cactusF2",461, 207, 233, 1, 0.73]
				]
			],
			//flag
			[
				"sunflower",
				[
					["sunflowerF1",477, 200, 134, 1.4,  1.5],
					["sunflowerF2",350, 330, 230, 1.4,  1.6],
					["sunflowerF3",240, 220, 310, 1.4,  1.6],
					["sunflowerF4",380, 80,  49,  1.4,  1.63],
					["sunflowerF5",372, 107, 49,  1.15, 0.8],
					["sunflowerF6",359, 370, 90,  0.83, 0.8],
					["sunflowerF7",518, 420, 90,  0.83, 0.8]
				]
			],
			//runner
			[
				"flower",
				[
					["flowerF1",370, 260, 140, 0.83, 0.93],
					["flowerF2",330, 290, 83,  0.83, 0.93],
					["flowerF3",320, 325, 24,  0.83, 0.93],
					["flowerF4",518, 475, 165, 0.83, 0.96],
					["flowerF5",618, 314, 110, 0.83, 0.93],
					["flowerF6",510, 124, 40,  0.83, 0.93],
					["flowerF7",434, 274, 180, 0.83, 0.93],
					["flowerF8",466, 256, 90, 0.8, 0.88]
	
				]
			],
			//smile
			[
				"rflower",
				[
					["rflowerF1", 376, 285, 90, 1.1, 1.2],
                    ["rflowerF2", 584, 263, 85, 1.1, 1.2],
				    ["rflowerF3", 393, 200, 95, 1, 1],
		            ["rflowerF4", 533, 170, 78, 1, 1.1]
				]
			],
			//sonw
			[
				"valley",
				[
					["valleyF1", 569, 445, 183, 1.1, 1.32],
					["valleyF2", 350, 430, 195, 1.2, 1.32]
				]
			],
			//tooth
			[
				"glory",
				[
					["gloryF1", 500, 80, 90, 1 ,1.3],
					["gloryF2", 525, 502, 160 ,1, 1.1]
				]
			],
			//ysmail
			[
				"leaf",
				[
					["leafF1", 450, 272, 90, 1.52, 1.6],
					["leafF2", 583, 332, 90, 1, 1],
					["leafF3", 283, 256, 180, 0.9, 0.75]
				]
			]
		],
		//food
		[
			
			[
				"candy",
				[
					["candyF1",533,195,90,1.95,1.93]
				]
			],
			
			[
				"tomato",
				[
					["tomatoF1",554,240,90,1.9,1.94]
				]
			],
			
			[
				"sz",
				[
					
					["szF1",588,125,90,1.6,1.5],
					["szF2",388,275,90,1.6,1.5]
				]
			],
			
			[
				"apple",
				[
					["appleF1",368,230,90,1.56,1.24],
					["appleF2",573,161,90,1.63,1.23]
				]
			],
			
			[
				"aubergine",
				[
					["aubergineF1",272,480,203,1.37,1.66],
					["aubergineF2",574,217,90,1.68,1.1]
				]
			],
			
			[
				"icecream",
				[
					["icecreamF1",375,416,173,1.31,1.55],
					["icecreamF2",514,448,190,1.32,1.53]
				]
			],
			
			
			
			
			[
				"carrot",
				[
					["carrotF",508,268,121,1.66,1.8]

				]
			],
			
			[
				"cushaw",
				[
					["cushawF1",400,400,155,1.4,1.4],
					["cushawF2",476,463,178,1.43,1.42],
					["cushawF3",560,460,195,1.41,1.37]
				]
			],
			
			[
				"egg",
				[
					["eggF1",317,256,90,0.81,0.82],
					["eggF2",552,200,90,0.81,0.82]
				]
			],
			
			[
				"strawberry",
				[
					["strawberryF1",474,478,190,2.1,1.52]
				]
			],
					
			
			[
				"watermelon",
				[
					["watermelonF1",183,463,264, 2.2,2.18]
				]
			],
			
			[
				"ananas",
				[
					["ananasF1",484,550,180,1.96,2.2]
				]
			]
		],
		
		
		//dailyuse
		[
			//balloon
			[
				"balloon",
				[
					["balloonF1",137,127,0,0.83,0.58],
					["balloonF2",217,78,0,0.83,0.58],
					["balloonF3",302,36,0,0.83,0.58],
					["balloonF4",407,59,0,0.83,0.58],
					["balloonF5",274,136,0,0.83,0.58],
					["balloonF6",416,139,0,0.83,0.58]
				]
			],
			//bowl
			[
				"bowl",
				[
					["bowlF1",332,280,0,1.5,0.62],
					["bowlF2",271,162,0,2.5,1.12],
					["bowlF3",283,385,123,0.63,0.68]
				]
			],
			//Imouse
			[
				"Imouse",
				[
					["ImouseF1",323,198,63,1.52,1.55]
				]
			],
			//kettles
			[
				"kettles",
				[
					["kettlesF1",538,198,90,1.35,1.45],
					["kettlesF2",578,270,90,1.9,2]
				]
			],
			//lig
			[
				"lig",
				[
					["ligF1",475,343,90,1.3,1.4],
					["ligF2",495,173,90,1.3,1.4],
					["ligF3",451,117,130,0.65,0.6]
				]
			],
			//light
			[
				"light",
				[
					["lightF1",441,140,105,1.15,1.3],
					["lightF2",535,332,85,1.18,1.32]
				]
			],
			//picture
			[
				"picture",
				[
					["pictureF1",185,228,-30,1.33,1.48],
					["pictureF2",378,145,28,1.33,1.48]
				]
			],
			//teapot
			[
				"teapot",
				[
					["teapotF1",289,167,2,1.4,1.55]
				]
			],
			//char
			[
				"char",
				[
					["charF1",263,55,0,1.4,0.92],
					["charF2",198,215,0,2.5,1.2]
				]
			],
			//fan
			[
				"fan",
				[
					["fanF1",357,155,55,0.8,1.1],
					["fanF2",315,80,0,0.8,1.1],
					["fanF3",523,263,125,0.8,1.1],
					["fanF4",327,328,0,0.6,0.8],
					["fanF5",467,388,90,1.2,1.2]
				]
			],
			//tel
			[
				"tel",
				[
					["telF1",490,220,90,1.75,1.7]
				]
			],
			//shoe
			[
				"shoe",
				[
					["shoeF1",190,88,14,1.6,2],
					["shoeF2",320,160,-14,1.6,2]
				]
			]
		],
		//animal		
		[
			//acaleph
			[
				"acaleph",
				[
					["acalephF1",550,120,90,1.8,2]		
				]				
			],
			//chick
			[
				"chick",
				[
					["chickF1",533,337,140,1.65,1.65]
				]			 
			],			
			//monkey
			[
				"monkey",
				[
					["monkeyF1",520,125,100,1.3,1.3],
					["monkeyF2",300,215,10,1.2,1.2]
				]
			],
			//frog
			[
				"frog",
				[
					["frogF1",535,125,90,1.75,2.01], 
				 	["frogF2",545,286,90,1.75,2.02]
				]			 
			],			
			//hippo
			[
				"hippo",
				[
					["hippoF1",115,460,265,2.1,2.4],
					["hippoF2",575,316,155,1,1.1],
					["hippoF3",459,430,240,1,1.22]
				]			 
			],
			//mouse
			[
				"mouse",
				[
					["mouseF1",347,257,180,1.1,0.73],
					["mouseF2",540,252,180,1.1,0.73],
					["mouseF3",452,458,180,1.25,1.57]
				]				
			],
			//pig
			[
				"pig",
				[
					["pigF1",530,230,100,1.53,1.68]
				]				
			],
			//hihead
			[
				"hihead",
				[
					["hiheadF1",488,488,180,1.9,2.09],
				  	["hiheadF2",549,274,90,1.9,2.09]
				]			  
			],	
			//crab
			[
				"crab",
				[
					["crabF1",250,488,260,1.55,1.48],
					["crabF2",234,316,210,1,1],
					["crabF3",585,238,145,1,1]
				]			 
			],
			//rabbit
			[
				"rabbit",
				[
					["rabbitF1",385,236,157,0.82,0.9],
					["rabbitF2",472,280,210,0.82,0.9],
					["rabbitF3",492,240,100,1.12,1.23],
					["rabbitF4",510,350,95,1.21,1.4]
				]			  
			],
			//snail
			[
				"snail",
				[
					["snailF1",378,480,234,1.39,1.46],
					["snailF2",385,440,172,1.13,1.25],
					["snailF3",281,244,172,0.82,0.59],
					["snailF4",393,231,172,0.82,0.59]
				]				 
			],
			//worm
			[
				"worm",
				[
					["wormF1",350,168,86,1.2,1.18],
					["wormF2",301,293,86,0.82,0.57],
					["wormF3",320,353,86,0.7,0.53],
					["wormF4",388,370,86,0.74,0.53],
					["wormF5",460,370,86,0.74,0.53],
					["wormF6",528,370,86,0.74,0.53],
					["wormF7",590,366,86,0.74,0.53]
				]				
			]						
		],
		//vehicle
		[
			//Ambulancen
			[
				"Ambulancen",
				[
					["AmbulancenF1",192,416,-86,1.8,1.9]
				]
			],
			//bus
			[
				"bus",
				[
					["busF1",156,409,-86,2,2.3]
				]
			],
			//plane
			[
				"plane",
				[
					["planeF1",170,401,-86,1.5,1.8]
				]
			],
			//trailer
			[
				"trailer",
				[   
					["trailerF1",174,402,-86,1.8,2.1]
				]
			],
			//submarine 
			[
				"submarine",
				[
					["submarineF1",221,404,-86,1.4,1.7]
				]
			],
			//convertible
			[
				"convertible",
				[
					["convertibleF1",175,427,-95,1.5,1.6],
					["convertibleF2",314,397,-86,1.5,1.6]
				]
			],
			//tank
			[
				"tank",
				[
					["tankF1",335,190,0,1,0.7],
					["tankF2",206,446,-86,1.5,1.8],
				]
			],
			//train
			[
				"train",
				[
					["trainF1",550,230,90,1.72,1.85],
					["trainF2",395,120,3,1.6,1.82]
				]
			],
			//helicopter
			[
				"helicopter",
				[
					["helicopterF1",410,225,90,1.5,1.5],
					["helicopterF2",263,165,90,0.55,0.72],
					["helicopterF3",418,165,90,0.55,0.72]
				]
			],
			//car
			[
				"car",
				[
					["carF1",550,165,90,2.1,2.12],
					["carF2",370,245,90,1.45,1.6],
					["carF3",585,255,90,1.3,0.9]
				]
			],
			//bike
			[
				"bike",
				[
					["bikeF1",310,275,90,1.5,1.1],
					["bikeF2",605,275,90,1.5,1.1],
					["bikeF3",515,310,90,1.1,1]
				]
			],
			//ship
			[
				"ship",
				[
					["shipF1",310,45,30,1.8,2],
					["shipF2",388,221,-5,1,1.2],
					["shipF3",266,504,-86,0.6,1]
				]
			]
		]
	];
/*
	//////////////////////////////////////////////////////
				xuyang 4/9
	//////////////////////////////////////////////////////
*/
	//类别索引
	game.categoryIndex=null;
	//关卡索引
	game.objIndex=null;
	//类别名称
	game.category=null;	
	
	//界面主函数
	game.showOperationLayer=function(index1,index2)
	{		
		//设置线段默认颜色
		this.lineColor = "a";
		//设置线段默认宽度
		this.lineWidth=3;
		//获得参数信息
		index2--;
		game.category=index1;		
		switch(index1)
		{
			case "people":
				game.categoryIndex=0;
				break;
			case "plant":
				game.categoryIndex=1;
				break;
			case "food":
				game.categoryIndex=2;
				break;
			case "dailyuse":
				game.categoryIndex=3;
				break;
			case "animal":
				game.categoryIndex=4;
				break;	
			case "vehicle":
				game.categoryIndex=5;
				break;		
		}
		game.objIndex=index2;
		//隐藏上面一层		
		Q.getDOM("mainMenuLayer").style.display = "none";
			
		//取得相关对象
		this.container = Q.getDOM("container");	
		this.OperationDiv = Q.getDOM("OperationDiv");
		/*	
		如果没有相关对象，那么创建相关对象：
			<OperationDiv>
				<OperationCanvas>
				</canvas>
				<OperationButtonDiv>   
					<OperationButtonCanvas>       
					</canvas>             	
				</div>
			</div>
		*/
		if (this.OperationDiv != null)
		{			
			this.OperationCanvas = Q.getDOM("OperationCanvas");
			this.OperationCanvasL = Q.getDOM("OperationCanvasL");
			this.OperationButtonDiv = Q.getDOM("OperationButtonDiv");
			this.OperationButtonCanvas = Q.getDOM("OperationButtonCanvas");
			Q.getDOM("OperationDiv").style.display = "block";
		}
		else
		{ 
			//创建所需DOM元素
			this.OperationDiv = document.createElement("div");
				this.OperationDiv.id="OperationDiv";	
				this.OperationDiv.style.width="960px";
				this.OperationDiv.style.height="640px";
				//this.OperationDiv.style.border="1px solid #d3d3d3";
				this.OperationDiv.style.margin="0 auto";
				this.OperationDiv.style.margin="60px 25px";
			this.OperationColorDiv = document.createElement("div");				
				this.OperationColorDiv.id="OperationColorDiv";	
				this.OperationColorDiv.setAttribute("style", "float:left;");
				this.OperationColorDiv.style.width="60px";
				this.OperationColorDiv.style.height="640px";
				//this.OperationColorDiv.style.border="1px solid #d3d3d3";
				this.OperationColorDiv.style.margin="0px 0px";
			this.OperationColorCanvas = document.createElement("canvas");
				this.OperationColorCanvas.id="OperationColorCanvas";
				this.OperationColorCanvas.width=60;
				this.OperationColorCanvas.height=640;
				//this.OperationButtonCanvas.style.border="1px solid red";
				this.OperationColorCanvas.style.margin="0px 0px";
			this.OperationCanvas = document.createElement("canvas");
				this.OperationCanvas.setAttribute
				("style", "float:left;border-radius:20px;background-color:white");
				this.OperationCanvas.id="OperationCanvas";	
				this.OperationCanvas.width=745;//745//60
				this.OperationCanvas.height=640;
				//this.OperationCanvas.style.border="1px solid red";
				this.OperationCanvas.style.margin="0px 6px";
			this.OperationCanvasL = document.createElement("canvas");
				this.OperationCanvasL.setAttribute
				("style","position:absolute;left:91px;top:80px;border-radius:20px;");
				this.OperationCanvasL.id="OperationCanvasL";	
				this.OperationCanvasL.width=745;
				this.OperationCanvasL.height=640;
				//this.OperationCanvasL.style.border="1px solid red";
				//this.OperationCanvasL.style.margin="0px 6px";
			this.OperationButtonDiv = document.createElement("div");
				this.OperationButtonDiv.setAttribute("style", "float:left");
				this.OperationButtonDiv.id="OperationButtonDiv";
				this.OperationButtonDiv.style.width="138px";
				this.OperationButtonDiv.style.height="640px";
				//this.OperationButtonDiv.style.border="1px solid blue";
				this.OperationButtonDiv.style.margin="0px 0px";		
			this.OperationButtonCanvas = document.createElement("canvas");
				this.OperationButtonCanvas.id="OperationButtonCanvas";
				this.OperationButtonCanvas.width=139;
				this.OperationButtonCanvas.height=640;
				//this.OperationButtonCanvas.style.border="1px solid red";
				this.OperationButtonCanvas.style.margin="0px 0px";
			//连接所需DOM元素		
			this.container.appendChild(this.OperationDiv);
				this.OperationDiv.appendChild(this.OperationColorDiv);
					this.OperationColorDiv.appendChild(this.OperationColorCanvas);
				this.OperationDiv.appendChild(this.OperationCanvas);
				this.OperationDiv.appendChild(this.OperationButtonDiv);
					this.OperationButtonDiv.appendChild(this.OperationButtonCanvas);
		
			//OperationColorCanvas部分的设计
				//创建上下文
				this.OperationColorContext = new Q.CanvasContext({canvas:this.OperationColorCanvas});
				//创建舞台
				this.OperationColorStage = new Q.Stage({width:this.OperationColorCanvas.width, height:this.OperationColorCanvas.height, context:	this.OperationColorContext, update:function(){
					
				}});
				//事件管理器
				var events = Q.supportTouch ? ["touchstart","touchmove","touchend"] : ["mousedown","mousemove","mouseup", "mouseout"];
				this.OperationEm = new Q.EventManager();
				this.OperationEm.registerStage(this.OperationColorStage, events, true, true);				
				//添加按钮
					//a
					var a = new Q.Graphics();
					a.beginFill("black", 1);
					a.drawRect(10, 30, 40, 40);
					a.endFill();
					a.addEventListener("mouseup" ,function(){game.OperationSelectColor("a");},false);
					a.addEventListener("touchend" ,function(){game.OperationSelectColor("a");},false);				
					var aa = new Q.Button({id:"aa", image:game.getImage("share"), x:10, y:30, width:40, height:40,
					up:{rect:[0,0,0,0]},
					over:{rect:[0,0,0,0]},
					down:{rect:[0,0,0,0]},
					disabled:{rect:[0,0,0,0]}
					});
					aa.addEventListener("mouseup" ,function(){game.OperationSelectColor("a");},false);
					aa.addEventListener("touchend" ,function(){game.OperationSelectColor("a");},false);
					//r
					var r = new Q.Graphics();
					r.beginFill("red", 1);
					r.drawRect(10, 95, 40, 40);
					r.endFill();
					r.addEventListener("mouseup" ,function(){game.OperationSelectColor("r");},false);
					r.addEventListener("touchend" ,function(){game.OperationSelectColor("r");},false);
					var rr = new Q.Button({id:"rr", image:game.getImage("share"), x:10, y:95, width:40, height:40,
					up:{rect:[0,0,0,0]},
					over:{rect:[0,0,0,0]},
					down:{rect:[0,0,0,0]},
					disabled:{rect:[0,0,0,0]}
					});
					rr.addEventListener("mouseup" ,function(){game.OperationSelectColor("r");},false);
					rr.addEventListener("touchend" ,function(){game.OperationSelectColor("r");},false);
					//o
					var o = new Q.Graphics();
					o.beginFill("orange", 1);
					o.drawRect(10, 160, 40, 40);
					o.endFill();
					o.addEventListener("mouseup" ,function(){game.OperationSelectColor("o");},false);
					o.addEventListener("touchend" ,function(){game.OperationSelectColor("o");},false);
					var oo = new Q.Button({id:"oo", image:game.getImage("share"), x:10, y:160, width:40, height:40,
						up:{rect:[0,0,0,0]},
						over:{rect:[0,0,0,0]},
						down:{rect:[0,0,0,0]},
						disabled:{rect:[0,0,0,0]}
					});
					oo.addEventListener("mouseup" ,function(){game.OperationSelectColor("o");},false);
					oo.addEventListener("touchend" ,function(){game.OperationSelectColor("o");},false);
					//y
					var y = new Q.Graphics();
					y.beginFill("#f7e51e", 1);
					y.drawRect(10, 225, 40, 40);
					y.endFill();
					y.addEventListener("mouseup" ,function(){game.OperationSelectColor("y");},false);
					y.addEventListener("touchend" ,function(){game.OperationSelectColor("y");},false);
					var yy = new Q.Button({id:"yy", image:game.getImage("share"), x:10, y:225, width:40, height:40,
						up:{rect:[0,0,0,0]},
						over:{rect:[0,0,0,0]},
						down:{rect:[0,0,0,0]},
						disabled:{rect:[0,0,0,0]}
					});
					yy.addEventListener("mouseup" ,function(){game.OperationSelectColor("y");},false);
					yy.addEventListener("touchend" ,function(){game.OperationSelectColor("y");},false);
					//g
					var g = new Q.Graphics();
					g.beginFill("#0fc442", 1);
					g.drawRect(10, 290, 40, 40);
					g.endFill();
					g.addEventListener("mouseup" ,function(){game.OperationSelectColor("g");},false);
					g.addEventListener("touchend" ,function(){game.OperationSelectColor("g");},false);
					var gg = new Q.Button({id:"gg", image:game.getImage("share"), x:10, y:290, width:40, height:40,
						up:{rect:[0,0,0,0]},
						over:{rect:[0,0,0,0]},
						down:{rect:[0,0,0,0]},
						disabled:{rect:[0,0,0,0]}
					});
					gg.addEventListener("mouseup" ,function(){game.OperationSelectColor("g");},false);
					gg.addEventListener("touchend" ,function(){game.OperationSelectColor("g");},false);
					//p
					var p = new Q.Graphics();
					p.beginFill("#a403bc", 1);
					p.drawRect(10, 355, 40, 40);
					p.endFill();
					p.addEventListener("mouseup" ,function(){game.OperationSelectColor("p");},false);
					p.addEventListener("touchend" ,function(){game.OperationSelectColor("p");},false);
					var pp = new Q.Button({id:"pp", image:game.getImage("share"), x:10, y:355, width:40, height:40,
						up:{rect:[0,0,0,0]},
						over:{rect:[0,0,0,0]},
						down:{rect:[0,0,0,0]},
						disabled:{rect:[0,0,0,0]}
					});
					pp.addEventListener("mouseup" ,function(){game.OperationSelectColor("p");},false);
					pp.addEventListener("touchend" ,function(){game.OperationSelectColor("p");},false);
					//b
					var b = new Q.Graphics();
					b.beginFill("blue", 1);
					b.drawRect(10, 420, 40, 40);
					b.endFill();
					b.addEventListener("mouseup" ,function(){game.OperationSelectColor("b");},false);
					b.addEventListener("touchend" ,function(){game.OperationSelectColor("b");},false);
					var bb = new Q.Button({id:"bb", image:game.getImage("share"), x:10, y:485, width:40, height:40,
						up:{rect:[0,0,0,0]},
						over:{rect:[0,0,0,0]},
						down:{rect:[0,0,0,0]},
						disabled:{rect:[0,0,0,0]}
					});
					bb.addEventListener("mouseup" ,function(){game.OperationSelectColor("b");},false);
					bb.addEventListener("touchend" ,function(){game.OperationSelectColor("b");},false);
					//s
					var s = new Q.Graphics();
					s.beginFill("#007FFF", 1);
					s.drawRect(10, 485, 40, 40);
					s.endFill();
					s.addEventListener("mouseup" ,function(){game.OperationSelectColor("s");},false);
					s.addEventListener("touchend" ,function(){game.OperationSelectColor("s");},false);
					var ss = new Q.Button({id:"ss", image:game.getImage("share"), x:10, y:420, width:40, height:40,
						up:{rect:[0,0,0,0]},
						over:{rect:[0,0,0,0]},
						down:{rect:[0,0,0,0]},
						disabled:{rect:[0,0,0,0]}
					});
					ss.addEventListener("mouseup" ,function(){game.OperationSelectColor("s");},false);
					ss.addEventListener("touchend" ,function(){game.OperationSelectColor("s");},false);
					//q
					var q = new Q.Graphics();
					q.beginFill("#31f4bf", 1);
					q.drawRect(10, 550, 40, 40);
					q.endFill();
					q.addEventListener("mouseup" ,function(){game.OperationSelectColor("q");},false);
					q.addEventListener("touchend" ,function(){game.OperationSelectColor("q");},false);
					var qq = new Q.Button({id:"qq", image:game.getImage("share"), x:10, y:550, width:40, height:40,
						up:{rect:[0,0,0,0]},
						over:{rect:[0,0,0,0]},
						down:{rect:[0,0,0,0]},
						disabled:{rect:[0,0,0,0]}
					});
					qq.addEventListener("mouseup" ,function(){game.OperationSelectColor("q");},false);
					qq.addEventListener("touchend" ,function(){game.OperationSelectColor("q");},false);
					//默认是黑色
					game.OperationSelectColor("a");
				//注册按钮
				this.OperationColorStage.addChild(a,r,o,y,g,p,b,s,q,aa,rr,oo,yy,gg,pp,bb,ss,qq);
				//时钟
				//this.OperationColorTimer = new Q.Timer(1000/200);
				//this.OperationColorTimer.addListener(this.OperationColorStage);
				game.OperationColorStage.step(0);					
			//OperationCanvas部分的设计
				//创建上下文
				this.OperationContext = new Q.CanvasContext({canvas:this.OperationCanvas});
				//创建舞台
				this.OperationStage = new Q.Stage({width:this.OperationCanvas.width, height:this.OperationCanvas.height, context:this.OperationContext, update:function(){
					
				}});
				//事件管理器
				var events = Q.supportTouch ? ["touchstart","touchmove","touchend"] : ["mousedown","mousemove","mouseup", "mouseout"];
				this.OperationEm = new Q.EventManager();
				this.OperationEm.registerStage(this.OperationStage, events, true, true);	
				//时钟
				this.OperationTimer = new Q.Timer(1000/200);
				this.OperationTimer.addListener(this.OperationStage);
				this.OperationTimer.start();	
			//OperationCanvasL部分的设计
				//创建上下文
				this.OperationContextL= new Q.CanvasContext({canvas:this.OperationCanvasL});
				//创建舞台
				this.OperationStageL= new Q.Stage({width:this.OperationCanvasL.width, height:this.OperationCanvasL.height, context:this.OperationContextL, update:function(){
					
				}});
				this.OperationStageL.stageX=91;
				this.OperationStageL.stageY=60;
				//事件管理器
				var events = Q.supportTouch ? ["touchstart","touchmove","touchend"] : ["mousedown","mousemove","mouseup", "mouseout"];
				this.OperationEmL = new Q.EventManager();
				this.OperationEmL.registerStage(this.OperationStageL, events, true, true);
				//时钟
				//this.OperationTimerL = new Q.Timer(1000/200);
				//this.OperationTimerL.addListener(this.OperationStageL);	
			//OperationButtonCanvas部分的设计
				//创建上下文
				this.OperationButtonContext = new Q.CanvasContext({canvas:this.OperationButtonCanvas});
				//创建舞台
				this.OperationButtonStage = new Q.Stage({width:this.OperationButtonCanvas.width, height:this.OperationButtonCanvas.height, context:this.OperationButtonContext, update:function(){
					
				}});
				//事件管理器
				var events = Q.supportTouch ? ["touchstart","touchmove","touchend"] : ["mousedown","mousemove","mouseup", "mouseout"];
				this.OperationButtonEm = new Q.EventManager();
				this.OperationButtonEm.registerStage(this.OperationButtonStage, events, true, true);
				//创建按钮
					//撤销按钮
					this.OperationErrB = new Q.Button({id:"xiangpi", image:game.getImage("xiangpi"), x:0, y:87-87, width:140, height:71,
					up:{rect:[0,0,140,71]},
					over:{rect:[0,71,140,71]},
					down:{rect:[0,71,140,71]},
					disabled:{rect:[0,54,140,71]}
					});					
					//清除按钮
					this.OperationCleB = new Q.Button({id:"qingchu", image:game.getImage("qingchu"), x:0, y:170-87, width:140, height:71,
					up:{rect:[0,0,140,71]},
					over:{rect:[0,71,140,71]},
					down:{rect:[0,71,140,71]},
					disabled:{rect:[0,54,140,71]}
					});					
					//参考按钮
					this.OperationRefB = new Q.Button({id:"cankao", image:game.getImage("cankao"), x:0, y:252-87, width:140, height:71,
					up:{rect:[0,0,140,71]},
					over:{rect:[0,71,140,71]},
					down:{rect:[0,71,140,71]},
					disabled:{rect:[0,54,140,71]}
					});					
					//完成按钮
					this.OperationFinB = new Q.Button({id:"wancheng", image:game.getImage("wancheng"), x:0, y:334-87, width:140, height:90,
					up:{rect:[0,0,140,90]},
					over:{rect:[0,90,140,90]},
					down:{rect:[0,90,140,90]},
					disabled:{rect:[0,54,140,71]}
					});					
					//返回按钮
					this.OperationBacB = new Q.Button({id:"fanhui", image:game.getImage("fanhui"), x:0, y:483, width:140, height:90,
					up:{rect:[0,0,140,71]},
					over:{rect:[0,71,140,71]},
					down:{rect:[0,71,140,71]},
					disabled:{rect:[0,54,140,71]}
					});		
					this.OperationBacB.addEventListener("mouseup" ,this.OperationBac,false);
					this.OperationBacB.addEventListener("touchend" ,this.OperationBac,false);								
				//添加按钮
				this.OperationButtonStage.addChild(this.OperationErrB,this.OperationCleB,this.OperationRefB,this.OperationFinB,this.OperationBacB);
				//时钟	
				this.OperationButtonTimer = new Q.Timer(1000/200);
				this.OperationButtonTimer.addListener(this.OperationButtonStage);
				this.OperationButtonTimer.start();			
		}//end of 获得相关部分
		
		switch(index1)
		{
			case "people":
				tem=game.people1[index2];
				break;
			case "plant":
				tem=game.plant1[index2];
				break;
			case "food":
				tem=game.food1[index2];
				break;
			case "dailyuse":
				tem=game.dailyuse1[index2];
				break;
			case "animal":
				tem=game.animal1[index2];
				break;	
			case "vehicle":
				tem=game.vehicle1[index2];
				break;	
		}
		//获得图片信息集
		game.oprImgsMsg=[];
		for(var index in tem)
		{
			game.oprImgsMsg[index] = tem[index];
		}
		//当前图片的缓存
		game.oprCurImgM=null;

		//一次加载
		var ttt=game.oprImgsMsg.pop()
		game.oprCurImgM=new Image();		
		game.oprCurImgM.src=ttt.src;
		game.oprCurImgM.onload=function()
		{
			game.OperationDrawObj(game.categoryIndex,game.objIndex);
		}
		
	}//end of game.showOperationLayer()asdf
	game.addOperButtonEve= function()
	{
		this.OperationFinB.addEventListener("mouseup" ,this.finish,false);
		this.OperationFinB.addEventListener("touchend" ,this.finish,false);
		this.OperationErrB.addEventListener("mouseup" ,this.OperationUndo,false);
		this.OperationErrB.addEventListener("touchend" ,this.OperationUndo,false);
		this.OperationCleB.addEventListener("mouseup" ,this.OperationClear,false);
		this.OperationCleB.addEventListener("touchend" ,this.OperationClear,false);
		this.OperationRefB.addEventListener("mouseup" ,this.OperationRef,false);
		this.OperationRefB.addEventListener("touchend" ,this.OperationRef,false);
	}
		
	
	//按钮的响应事件及其相关函数
		//撤销按钮
		game.OperationUndo = function()
		{		
			
			if(true==game.OperationStageL.children[game.OperationStageL.children.length-1]instanceof Quark.Graphics)
			{
				var graph=game.OperationStageL.children[game.OperationStageL.children.length-1];
			}
			if(true==game.OperationStageL.children[game.OperationStageL.children.length-2]instanceof Quark.Graphics)
			{
				var graph=game.OperationStageL.children[game.OperationStageL.children.length-2];
			}				
			if(graph._actions.length==0)
			{return;}
			else
			{
				var j=graph._actions.length-1;				
				while(graph._actions[j][0]=="stroke")
				{	
					j-=4;								
				}	
				if(graph._actions[j][0]=="lineWidth")
				{
					j--;	
					graph._actions.length=j;
				}			
				game.OperationStageL.step(0);
			}			
		}
		//有关左侧颜色按钮
		game.OperationSelectColor = function(color)
		{
			game.lineColor = color;
			//game.penColor = color;
			var x = game.arrStrokePlace[game.lineColor][0]-5;
			var y = game.arrStrokePlace[game.lineColor][1]-5;
	
			//边框
			game.OperationColorStage.removeChild(game.StrokeA);
			game.StrokeA = new Q.Graphics();
			game.StrokeA._addAction(["strokeStyle","grey"]);
	
			game.StrokeA.drawRect(x, y, 50, 50);
			game.StrokeA._addAction(["stroke"]);
			game.OperationColorStage.addChild(game.StrokeA);
			//
			game.OperationColorStage.step(0);
		}
		//有关返回按钮
		game.OperationBac = function()
		{
			game.OperationStage.children=new Array();
			game.container.removeChild(game.OperationDiv);
			drawObj=[];
			game.drawChoice(game.category);
		}	
		//有关清除按钮
		game.OperationClear = function()
		{
			if(true==game.OperationStageL.children[game.OperationStageL.children.length-1]instanceof Quark.Graphics)
			{
				game.OperationStageL.children[game.OperationStageL.children.length-1].clear();
			}
			if(true==game.OperationStageL.children[game.OperationStageL.children.length-2]instanceof Quark.Graphics)
			{
				game.OperationStageL.children[game.OperationStageL.children.length-2].clear();
			}
			game.OperationStageL.step(0);
		}	
		//有关参考按钮
		game.drawLine = function(id)
		{	
			var line = new Q.Bitmap({id:id, image:game.oprCurImgM,x:0,y:0});
			this.line = line;
			this.OperationStage.addChild(this.line);			
			game.OperationStage.step(0);
		}
		game.clearLine=function()
		{
			game.OperationStage.removeChild(game.line)
			game.line=null;
			game.OperationStage.step(0);
		}
		game.OperationRefFlag=false;
		game.OperationRef=function()
		{
			if(game.line==null)
			{			
				game.drawLine(game.MsgArr[game.categoryIndex][game.objIndex][0]+'L');	
			}
			else
			{
				game.clearLine();
			}
		}	
		//有关完成按钮
		game.finish=function()
		{
			//计算得分
				//获得参考图的数据a
					//创建canvas
						game.OperationTempCanvas = document.createElement("canvas");
						//game.OperationTempCanvas.setAttribute("style", "background-color:blue;margin:0px;padding:0px;");
						game.OperationTempCanvas.id="OperationTempCanvas";	
						game.OperationTempCanvas.width=745;
						game.OperationTempCanvas.height=640;
						game.OperationTempCanvas.style.border="9px solid green";
					//加载
						//var t= Q.getDOM("test");
						//t.appendChild(game.OperationTempCanvas);
					//创建context
						game.OperationTempContext = new Q.CanvasContext({canvas:game.OperationTempCanvas});
					//创建stage
						game.OperationTempStage = new Q.Stage({width:game.OperationTempCanvas.width, height:game.OperationTempCanvas.height, context:game.OperationTempContext, update:function(){
								
						}});
					//添加图片
						var id=game.MsgArr[game.categoryIndex][game.objIndex][0]+'L';
						var tempLine = new Q.Bitmap({id:id, image:game.oprCurImgM,x:0,y:0});
						game.OperationTempStage.addChild(tempLine);
					//刷新以显示
						game.OperationTempStage.step(0);	
					//获得ImageData
						var a=game.OperationTempContext.context.getImageData(0,0,745,640);
					//删除图片
						game.OperationTempStage.removeChild(tempLine);
						tempLine=null;
					//处理
						for(var h=0;h<=640-1;h++)
						{
							for(var w=0;w<=745-1;w++)
							{
								if(a.data[(h*745+w)*4+3]!=0)
								{
									a.data[(h*745+w)*4]=255;	
									a.data[(h*745+w)*4+1]=0;
									a.data[(h*745+w)*4+2]=0;	
									a.data[(h*745+w)*4+3]=255;
								}
							}
						}
				//获得涂鸦图的数据b
					var b=game.OperationContextL.context.getImageData(0,0,745,640);	
					for(var h=0;h<=640-1;h++)
					{
						for(var w=0;w<=745-1;w++)
						{
							if(b.data[(h*745+w)*4+3]!=0)
							{
								b.data[(h*745+w)*4]=255;	
								b.data[(h*745+w)*4+1]=0;
								b.data[(h*745+w)*4+2]=0;	
								b.data[(h*745+w)*4+3]=253;
							}
						}
					}	
					//game.OperationContextL.context.putImageData(b,0,0);
				//处理数据得到分数
					var e=0;var tal=0;
					for(var h=0;h<=640-1;h++)
					{
						for(var w=0;w<=745-1;w++)
						{
							if(a.data[(h*745+w)*4+3]!=0)
							{tal++;}
							if(a.data[(h*745+w)*4+3]!=0&&b.data[(h*745+w)*4+3]!=0)
							{
								e++;
							}
							/*else if(a.data[(h*745+w)*4+3]==0&&b.data[(h*745+w)*4+3]!=0)
							{
								e--;
							}*/
						}
					}					
					var score=e/tal;
					if(score&&score<0.05)
					{var grade=1;}
					if(0.05<=score&&score<0.1)
					{var grade=2;}
					if(0.1<=score)
					{var grade=3;}
			//唤出完成窗口后，撤销画线的事件响应
			game.OperationStageL.removeAllEventListeners();
			//保存过关信息
			if(grade==1&&Locked[game.categoryIndex][game.objIndex]<2)//如果本关卡得1级，且原始得分小于1级（2）
			{Locked[game.categoryIndex][game.objIndex]=2;}
			else if(grade==2&&Locked[game.categoryIndex][game.objIndex]<3)//如果本关卡得2级，且原始得分小于2级（3）
			{Locked[game.categoryIndex][game.objIndex]=3;}
			else if(grade==3&&Locked[game.categoryIndex][game.objIndex]<4)//如果本关卡得3级，且原始得分小于3级（4）
			{Locked[game.categoryIndex][game.objIndex]=4;}
			if(Locked[game.categoryIndex][game.objIndex+1]==1)
			{Locked[game.categoryIndex][game.objIndex+1]=0;	}			
			game.saveLevel();	
			//无论什么情况都会:
			//画背景
				var nextOperBG = new Q.Bitmap({id:"set_bg", image:game.getImage("set_bg"),x:200,y:110});
				game.OperationStageL.addChild(nextOperBG);
			//画星星
				if(grade>=1)
				{
					var s1 = new Q.Bitmap({id:'star', image:game.getImage('star'),x:240,y:330});	
					s1.scaleX=1.3;
					s1.scaleY=1.3;	
					game.OperationStageL.addChild(s1);
				}
				if(grade>=2)
				{
					var s2 = new Q.Bitmap({id:'star', image:game.getImage('star'),x:290,y:330});	
					s2.scaleX=1.3;
					s2.scaleY=1.3;
					game.OperationStageL.addChild(s2);
				}
				if(grade>=3)
				{
					var s3 = new Q.Bitmap({id:'star', image:game.getImage('star'),x:340,y:330});	
					s3.scaleX=1.3;
					s3.scaleY=1.3;
					game.OperationStageL.addChild(s3);
				}	
			//开始分情况讨论				
			if(game.objIndex+1!=game.MsgArr[game.categoryIndex].length)//如果没有到最后一个
			{				
				//文字
				var nextOperStr = new Q.Bitmap({id:"jixu", image:game.getImage("jixu"),x:250,y:130});
					nextOperStr.scaleX=1.5;
					nextOperStr.scaleY=1.5;	
				//下一关预览				
				var id=game.MsgArr[game.categoryIndex][game.objIndex+1][0];			
				var idyl=id+"YL2";		
				var nextOperYL = new Q.Bitmap({id:idyl, image:game.getKindImage(idyl),x:450,y:350});
				nextOperYL.scaleX=1;
				nextOperYL.scaleY=1;	
				//继续按钮			
				var nextOperB = new Q.Button({id:"jixuanniu", image:game.getImage("jixuanniu"), x:270, y:380, width:128, height:46,
						up:{rect:[0,0,128,46]},
						over:{rect:[0,46,128,46]},
						down:{rect:[0,46,128,46]},
						disabled:{rect:[0,0,128,46]}
				});
					nextOperB.addEventListener("mouseup" ,game.gotoNextPage);
					nextOperB.addEventListener("touchend" ,game.gotoNextPage);
				//取消按钮，返回绘图界面
				var backOperB = new Q.Button({id:"quxiaoanniu", image:game.getImage("quxiaoanniu"), x:270, y:440, width:128, height:46,
						up:{rect:[0,0,128,46]},
						over:{rect:[0,46,128,46]},
						down:{rect:[0,46,128,46]},
						disabled:{rect:[0,0,128,46]}
				});
					backOperB.addEventListener("mouseup" ,game.backtoThisPage);
					backOperB.addEventListener("touchend" ,game.backtoThisPage);
				//加载
				game.OperationStageL.addChild(nextOperStr,nextOperYL,nextOperB,backOperB);
				//刷新
				game.OperationStageL.step(0);				
			}
			else//如果到最后一个，本类别结束了
			{
				//文字
				var nextOperStr = new Q.Bitmap({id:"jixu", image:game.getImage("jixu"),x:250,y:130});
					nextOperStr.scaleX=1.5;
					nextOperStr.scaleY=1.5;					
				//继续按钮			
				var backOperB = new Q.Button({id:"fanhuianniu", image:game.getImage("fanhuianniu"), x:270, y:380, width:128, height:46,
						up:{rect:[0,0,128,46]},
						over:{rect:[0,46,128,46]},
						down:{rect:[0,46,128,46]},
						disabled:{rect:[0,0,128,46]}
				});
					backOperB.addEventListener("mouseup" ,game.OperationBac);
					backOperB.addEventListener("touchend" ,game.OperationBac);
				var cancelOperB = new Q.Button({id:"quxiaoanniu", image:game.getImage("quxiaoanniu"), x:270, y:440, width:128, height:46,
						up:{rect:[0,0,128,46]},
						over:{rect:[0,46,128,46]},
						down:{rect:[0,46,128,46]},
						disabled:{rect:[0,0,128,46]}
				});
					cancelOperB.addEventListener("mouseup" ,game.backtoThisPage);
					cancelOperB.addEventListener("touchend" ,game.backtoThisPage);								
				//加载
				game.OperationStageL.addChild(nextOperStr,backOperB,cancelOperB);
				//刷新
				game.OperationStageL.step(0);					
			}
		}
		game.gotoNextPage=function()
		{
			game.OperationButtonTimer.stop();	
			game.OperationTimer.stop();	
			game.OperationStage.children=new Array();
			game.container.removeChild(game.OperationDiv);
			game.objIndex++;
			drawObj=[];
			game.objIndex++;
			game.showOperationLayer(game.category,game.objIndex);
		}
		game.backtoThisPage=function(a)
		{
			game.OperationStageL.children.length=1;
			game.OperationStageL.step(0);	
			//返回后，重新设置画线的事件响应
			game.addOperStageLEvt();
		}
	//end of 按钮的响应事件及其相关函数	
	
	game.flag=false;

	game.clickX = new Array();
	game.clickY = new Array();
	game.clickDrag = new Array();
	
	game.point = {};
	game.point.notFirst = false;
	
	game.touchstart=function(e)
	{
		game.flag = true;
		game.addClick(e.eventX,e.eventY-20);
		game.redraw();
	}
	
	game.touchmove=function (e){
		
		if(game.flag)
		{
			if(e.eventX<=10||734<=e.eventX)
			{game.flag = false;
			}
			if(e.eventY<=10||628<=e.eventY)
			{game.flag = false;
			}
			game.addClick(e.eventX,e.eventY-20,true);
			game.redraw();
		}
	}

	game.touchend=function (e)
	{
		game.flag = false;
		game.OperationStageL.step(0);	
	}	
	
	game.OperationDrawObj=function(categoryIndex,objIndex)
	{	
		for(var pro in game.MsgArr[game.categoryIndex][game.objIndex][1])
		{	drawObj[pro] = game.MsgArr[game.categoryIndex][game.objIndex][1][pro];}
		this.drawCircle(drawObj[0][0],drawObj[0][1],drawObj[0][2],drawObj[0][3],drawObj[0][4],drawObj[0][5]);		
		drawObj.shift();
	}
	
	game.drawCircle = function(fingerImgId,x,y,rot,scaleX,scaleY)
	{
			var btn = new Q.Bitmap({id:fingerImgId, image:game.getImage("cirle"),x:x,y:y});
			btn.rotation = rot;
			this.btn = btn;	
			btn.scaleX = scaleX;
			btn.scaleY = scaleY;
			btn.addEventListener("mouseup" ,this.drawFinger,false);
			btn.addEventListener("touchend" ,this.drawFinger,false);	
			this.OperationStage.addChild(btn);
	}
	
	//画指纹
	game.drawFinger=function (e)
	{
		var redfinger = new Q.Bitmap({id:e.eventTarget.id, image:game.oprCurImgM,x:0,y:0});	
		game.OperationStage.addChild(redfinger);	
		game.OperationStage.removeChild(this);
		//使用了一个指纹图片，下面加载下一张图片
		var ttt=game.oprImgsMsg.pop()
		game.oprCurImgM=new Image();		
		game.oprCurImgM.src=ttt.src;
		game.oprCurImgM.onload=function()
		{
			if (drawObj.length>0)
			{
				game.drawCircle(drawObj[0][0],drawObj[0][1],drawObj[0][2],drawObj[0][3],drawObj[0][4],drawObj[0][5]);
				drawObj.shift();
			}
			else
			{
				var id=(game.MsgArr[game.categoryIndex][game.objIndex][0]+'L');
				game.drawLine(id);				
				game.OperationDiv.appendChild(game.OperationCanvasL);	
				game.addOperStageLEvt();
				game.addOperButtonEve();
				game.OperationTimer.stop();			
				game.OperationStage.step(0);
				game.g=new Q.Graphics({width:745, height:640});
				game.OperationStageL.addChild(game.g);	
			}
		}		
	}			
	game.addOperStageLEvt=function()
	{
		game.OperationStageL.addEventListener("touchstart",Quark.delegate(game.touchstart,this),false);
		game.OperationStageL.addEventListener("touchmove",Quark.delegate(game.touchmove,this),false);
		game.OperationStageL.addEventListener("touchend" ,Quark.delegate(game.touchend,this),false);
		game.OperationStageL.addEventListener("mousedown",Quark.delegate(game.touchstart,this),false);
		game.OperationStageL.addEventListener("mousemove",Quark.delegate(game.touchmove,this),false);
		game.OperationStageL.addEventListener("mouseup" ,Quark.delegate(game.touchend,this),false);		
	}
	
	game.addClick=function(x,y,dragging)
	{
		game.clickX.push(x);
		game.clickY.push(y);
		game.clickDrag.push(dragging);
	}
	
	//画线
	game.redraw=function()
	{
		var context=game.OperationContextL.context;
		context.strokeStyle = this.arrLineColor[this.lineColor];
		context.lineWidth =this.lineWidth;		
		while(this.clickX.length>0)
		{	
			game.point.bx =game.point.x;
			game.point.by =game.point.y;
			game.point.x = game.clickX.pop();
			game.point.y = game.clickY.pop();
			game.point.drag = game.clickDrag.pop();
			context.beginPath();	
			game.g.beginPath();		
			if (game.point.drag && game.point.notFirst)
			{
				context.moveTo(game.point.bx,game.point.by);				
				game.g._addAction(["moveTo",game.point.bx,game.point.by]);
			}else
			{
				game.point.notFirst = true;
				context.moveTo(game.point.x-1,game.point.y);
				game.g._addAction(["lineWidth", this.lineWidth]);
				game.g._addAction(["strokeStyle", this.arrLineColor[this.lineColor]]);
				game.g._addAction(["moveTo",game.point.x-1,game.point.y]);
			}
			context.lineTo(game.point.x,game.point.y);
			game.g._addAction(["lineTo",game.point.x,game.point.y]);
			context.closePath();
			context.stroke();	
			game.g._addAction(["stroke"]);				
		}
	}
	
	
/*
	////////////////////////////////////////
			end of xuyang
	////////////////////////////////////////
*/

//设置控制函数
game.songPlay=function()
{
	
	Q.getDOM("mainMenuLayer").style.display = "none";
	
	var container = Q.getDOM("container");	
	var canvas = Q.getDOM("songLayer");
	
	if (canvas == null)
	{
		canvas = document.createElement("canvas");
		canvas.id = "songLayer";
		container.appendChild(canvas);
		
		canvas.style.position = "absolute";
		canvas.width = container.clientWidth;
		canvas.height = container.clientHeight;
		canvas.style.top = "0px";
		canvas.style.left = "0px";
		
		var context = new Q.CanvasContext({canvas:canvas});
		//创建舞台
		var songStage = new Q.Stage({width:canvas.width, height:canvas.height, context:context, update:function(){}});
		
		var events = Q.supportTouch ? ["touchstart","touchmove","touchend"] : ["mousedown","mousemove","mouseup", "mouseout"];
		var em = new Q.EventManager();
		em.registerStage(songStage, events, true, true);
	      
		
		
		
       
		 var sbg = new Q.Bitmap({id:"set_bg", image:game.getImage("set_bg"),x:263,y:146});	 
		 var bgmusic=new Q.Bitmap({id:"beijingyinyue",image:game.getImage("beijingyinyue"),x:408,y:208});
		 var yingxiao=new Q.Bitmap({id:"yinxiao",image:game.getImage("yinxiao"),x:408,y:325});
		// var duihao1=new Q.Bitmap({id:"duihao", image:game.getImage("duihao"),x:332,y:228});
		
		var duihao1=new Q.Button({id:"duihao1", image:game.getImage("duihao"), x:332, y:228, width:53, height:49,
		up:{rect:[0,0,53,49]},
		});
		 var duihao2=new Q.Bitmap({id:"duihao2", image:game.getImage("duihao"),x:332,y:328});
	
		
		var duoxuank1=new Q.Button({id:"duoxuankuang1", image:game.getImage("duoxuankuang"), x:332, y:231, width:42, height:42,
		up:{rect:[0,0,42,42]},
		});
		
		//状态量
		openbgsong=localStorage.getItem("openbgsong");
		//mouseup组合事件
		duoxuank1.addEventListener("mouseup" ,function(){
			
			if(openbgsong=="true"||localStorage.getItem("openbgsong")=="true"){ 
			        openbgsong="false";
		           songStage.addChild(duihao1);
			}
		},false);
		 
		 duihao1.addEventListener("mouseup" ,function(){
			
			if(localStorage.getItem("openbgsong")=="false"||openbgsong=="false"){ 
			        openbgsong="true";
		           songStage.removeChild(duihao1);
			}
		},false);
		//touchend组合事件                                                         
        duoxuank1.addEventListener("touchend" ,function(){
			
			if(openbgsong=="true"||localStorage.getItem("openbgsong")=="true"){ 
			        openbgsong="false";
		           songStage.addChild(duihao1);
			}
		},false);
		 
		 duihao1.addEventListener("touchend" ,function(){
			
			if(localStorage.getItem("openbgsong")=="false"||openbgsong=="false"){ 
			        openbgsong="true";
		           songStage.removeChild(duihao1);
			}
		},false);

           
		  var duoxuank2=new Q.Button({id:"duoxuankuang2", image:game.getImage("duoxuankuang"), x:332, y:331, width:42, height:42,
		up:{rect:[0,0,42,42]},  
		 }); 
		 
		 //状态量
		openbsong=localStorage.getItem("openbsong");
		
		//mouseup组合事件
		duoxuank2.addEventListener("mouseup" ,function(){
			
			if(openbsong=="true"||localStorage.getItem("openbsong")=="true"){ 
			        openbsong="false";
		            songStage.addChild(duihao2);
			}
		},false);
		 
		 duihao2.addEventListener("mouseup" ,function(){
			
			if(localStorage.getItem("openbsong")=="false"||openbsong=="false"){ 
			        openbsong="true";
		           songStage.removeChild(duihao2);
			}
		},false);
		//touchend组合事件
		duoxuank2.addEventListener("touchend" ,function(){
			
			if(openbsong=="true"||localStorage.getItem("openbsong")=="true"){ 
			        openbsong="false";
		            songStage.addChild(duihao2);
			}
		},false);
		 
		 duihao2.addEventListener("touchend" ,function(){
			
			if(localStorage.getItem("openbsong")=="false"||openbsong=="false"){ 
			        openbsong="true";
		           songStage.removeChild(duihao2);
			}
		},false);
		
		
		 //Bitmap事件
	                    
		bgmusic.addEventListener("mouseup" ,function(){
			
			if(openbgsong=="true"){ 
			        openbgsong="false";
		           songStage.addChild(duihao1);
			} else if(openbgsong=="false"){ 
			      
		           songStage.removeChild(duihao1);
				   openbgsong="true";
			}
		},false);
		 
		bgmusic.addEventListener("touchend" ,function(){
			
			if(openbgsong=="true"){ 
			        openbgsong="false";
		           songStage.addChild(duihao1);
			} else if(openbgsong=="false"){ 
			      
		           songStage.removeChild(duihao1);
				   openbgsong="true";
			}
		},false);
		                                                      
       yingxiao.addEventListener("mouseup" ,function(){
			
			if(openbsong=="true"){ 
			        openbsong="false";
		           songStage.addChild(duihao2);
			} else if(openbsong=="false"){ 
			        openbsong="true";
		           songStage.removeChild(duihao2);
			}
		},false);
		 
		
           yingxiao.addEventListener("touchend" ,function(){
			
			if(openbsong=="true"){ 
			        openbsong="false";
		           songStage.addChild(duihao2);
			} else if(openbsong=="false"){ 
			        openbsong="true";
		           songStage.removeChild(duihao2);
			}
		},false);     
		
		  
		 var okbtn = new Q.Button({id:"queding", image:game.getImage("queding"), x:438, y:423, width:156, height:58,
		up:{rect:[0,0,156,58]},
		over:{rect:[0,58,156,58]},
		down:{rect:[0,58,156,58]},
		disabled:{rect:[0,58,156,58]}
		});
		 
		
		 
		 
		okbtn.addEventListener("mouseup" ,function(){
			  localStorage.setItem("openbgsong",openbgsong);
			  localStorage.setItem("openbsong",openbsong);
	          game.playSong();
			  game.playbSong(openbsong);
			  container.removeChild(canvas);Q.getDOM("mainMenuLayer").style.display = "block";},false);
			  
		okbtn.addEventListener("touchend" ,function(){
			  localStorage.setItem("openbgsong",openbgsong);
			  localStorage.setItem("openbsong",openbsong);
	          game.playSong();
			  game.playbSong(openbsong);
			  container.removeChild(canvas);Q.getDOM("mainMenuLayer").style.display = "block";},false);
		
		var open1= localStorage.getItem("openbgsong");
		var open2= localStorage.getItem("openbsong");
		
		if(open1=="false"&&open2=="true"){
			songStage.addChild(sbg,okbtn,duoxuank1,duoxuank2,bgmusic,yingxiao,duihao1);
		}else if(open1=="true"&&open2=="true"){
		    songStage.addChild(sbg,okbtn,duoxuank1,duoxuank2,bgmusic,yingxiao);
		}else if(open1=="true"&&open2=="false"){
			songStage.addChild(sbg,okbtn,duoxuank1,duoxuank2,bgmusic,yingxiao,duihao2);
		}else if(open1=="false"&&open2=="false"){
			songStage.addChild(sbg,okbtn,duoxuank1,duoxuank2,bgmusic,yingxiao,duihao1,duihao2);
		}
		
		var timer = new Q.Timer(1000/200);
		timer.addListener(songStage);
		timer.start();
	}
	
	Q.getDOM("songLayer").style.display = "block";
	
}


game.playSong=function()
{
	  if(localStorage.getItem("openbgsong")==null)
	  {
		  localStorage.setItem("openbgsong",openbgsong); 
	  }
	   
	var audio = Q.getDOM("bgaudio");
	if(localStorage.getItem("openbgsong")=="false"){	     
		      audio.play();     
		}else if(localStorage.getItem("openbgsong")=="true"){
		      audio.pause(); 
		}
	
}

game.playbSong=function(props)
{
	
		if(localStorage.getItem("openbsong")==null){
			localStorage.setItem("openbsong",openbsong); 
		}
		var audio = Q.getDOM("btnaudio");
	if(props=="false")
	        audio.play(); 
     if(props=="true")
		    audio.pause();
}

game.gameHelp=function()
{
	Q.getDOM("mainMenuLayer").style.display = "none";
	var container = Q.getDOM("container");	
	var canvas = Q.getDOM("helpLayer");
	
	if(canvas == null){
		helpcanvas = document.createElement("canvas");
		helpcanvas.id = "helpLayer";
		container.appendChild(helpcanvas);
		
		helpcanvas.style.position = "absolute";
		helpcanvas.width = container.clientWidth;
		helpcanvas.height = container.clientHeight;
		helpcanvas.style.top = "0px";
		helpcanvas.style.left = "0px";
		//创建上下文
		var context = new Q.CanvasContext({canvas:helpcanvas});
		//创建舞台
		var helpStage = new Q.Stage({width:helpcanvas.width, height:helpcanvas.height, context:context, update:function(){}});
		
		var events = Q.supportTouch ? ["touchstart","touchmove","touchend"] : ["mousedown","mousemove","mouseup", "mouseout"];
		var em = new Q.EventManager();
		em.registerStage(helpStage, events, true, true);
		
		var sbg = new Q.Bitmap({id:"set_bg", image:game.getImage("set_bg"),x:263,y:146});
		//sbg.scaleX=0;
		//sbg.scaleY=0;
		var text = "<br>梦想指纹画";
	    var font = "24px 微软雅黑";
		var font1 = "18px 楷体";
		var font2 = "20px 隶书";
        var text1="<br><br>            本游戏旨在培养小孩的创作、创新和模仿能力，有<br>    助于提高大脑智力开发。<br><br>            本游戏分为关卡模式和自由创作模式。";
		var text2="<br><br><br><br>            关卡模式：通过临摹完成定制的指纹画图案。";
		var text3="<br><br><br><br><br>            自由创作模式：可以随意创作，通过快速单击可以<br>    创建圆形指纹，通过按压可以创建长指纹，手指按压的<br>    方向决定指纹的方向。";                                
	    var text4="   <br>";
		
		var txt = new Q.Text({font:font,color:"purple", text:text,lineSpacing:0, x:450,y:160});
		
		var txt1 = new Q.Text({font:font1,color:"purple", text:text1,lineSpacing:1,extAlign:"left", x:270,y:190});
		var txt2 = new Q.Text({font:font1,color:"purple", text:text2,lineSpacing:1, extAlign:"left", x:270,y:250});
		var txt3 = new Q.Text({font:font1,color:"purple", text:text3,lineSpacing:1, extAlign:"left", x:270,y:270});
		var txt4 = new Q.Text({font:font2,color:"red", text:text4,lineSpacing:1, extAlign:"left", x:270,y:320});
		 var okbtn = new Q.Button({id:"queding", image:game.getImage("queding"), x:438, y:463, width:156, height:58,
		up:{rect:[0,0,156,58]},
		over:{rect:[0,58,156,58]},
		down:{rect:[0,58,156,58]},
		disabled:{rect:[0,58,156,58]}
		});	 
		
	okbtn.addEventListener("mouseup" ,function(){
		 timer.stop();Q.getDOM("helpLayer").style.display = "none";Q.getDOM("mainMenuLayer").style.display = "block";},false);
	okbtn.addEventListener("touchend" ,function(){
		 timer.stop();Q.getDOM("helpLayer").style.display = "none";Q.getDOM("mainMenuLayer").style.display = "block";},false);
		
		helpStage.addChild(sbg,txt,txt1,txt2,txt3,txt4,okbtn);
		var timer = new Q.Timer(1000/200);
		timer.addListener(helpStage);
		timer.start();
	
	}
	Q.getDOM("helpLayer").style.display = "block";
     //alert("没有帮助,不会玩了吧!!!,不会玩的话找妈妈");	
}

//隐藏浏览器顶部导航
game.hideNavBar = function()
{
    window.scrollTo(0, 1);
}


//自由创作图片获取
	game.freeFinish=function()
	{
		//var freediv=Q.getDOM("FreeDiv");	
		var freeCanvas= Q.getDOM("FreeCanvas");
		//context.save();
	    var url =freeCanvas.toDataURL();
		alert(url);
		
	   // var img = Q.getDOM("myimg");
	   // img.src = url;
     //  console.log(url);
		
	
	}
	//关卡图片获取
	game.guankaFinish=function(index1,index2)
	{     
	    var levelCanvasl=Q.getDOM("OperationCanvasL");
		//var levelCanvasf=Q.getDoM("OperationCanvas");
		console.log(index1,index2);
		
		switch(index1)
		{
			case "people":
				game.categoryIndex=0;
				break;
			case "plant":
				game.categoryIndex=1;
				break;
			case "food":
				game.categoryIndex=2;
				break;
			case "dailyuse":
				game.categoryIndex=3;
				break;
			case "animal":
				game.categoryIndex=4;
				break;	
			case "vehicle":
				game.categoryIndex=5;
				break;		
		}
		game.objIndex=index2;
		     //game.MsgArr[game.categoryIndex][game.objIndex-1];
		draw=game.MsgArr[game.categoryIndex][game.objIndex-1][1];
		//alert(draw[1][0]);
		//drawObj[pro] = game.MsgArr[game.categoryIndex][game.objIndex][1];
		//alert(draw);
		
		for(var i=0;i<draw.length;i++)
		{
		    btn= new Q.Bitmap({id:draw[i][0], image:game.getImage(draw[i][0]),x:0,y:0});
			//btn.rotation = draw[i][3];	
			//btn.scaleX = draw[i][4];
			//btn.scaleY = draw[i][5];
			game.OperationStageL.addChild(btn);
			game.OperationStageL.step(0);
		}
		//game.drawCircle = function(fingerImgId,x,y,rot,scaleX,scaleY)	
		//console.log(draw);
		var url =levelCanvasl.toDataURL();
		//console.log(url);
		alert(url);
	 // var img = Q.getDOM("asd");
	  // var p = Q.getDOM("pdiv");
	  //   img.src=url;
		// p.innerHTML=url;

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