// JavaScript Document
game.showOperationLayer=function()
{
	//隐藏上面一层		
		Q.getDOM("mainMenuLayer").style.display = "none";
		Q.getDOM("canvas").style.display = "none";		
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
		this.OperationButtonDiv = Q.getDOM("OperationButtonDiv");
		this.OperationButtonCanvas = Q.getDOM("OperationButtonCanvas");
	}
	else
	{ 
		//创建所需DOM元素
		this.OperationDiv = document.createElement("div");
			this.OperationDiv.id="OperationDiv";	
			this.OperationDiv.style.width="900px";
			this.OperationDiv.style.height="640px";
			//this.OperationDiv.style.border="1px solid #d3d3d3";
			this.OperationDiv.style.margin="0 auto";
			this.OperationDiv.style.margin="60px 60px";
		this.OperationCanvas = document.createElement("canvas");
			this.OperationCanvas.setAttribute("style", "float:left;border-radius:20px;background-color:white");
			this.OperationCanvas.id="OperationCanvas";	
			this.OperationCanvas.width=745;
			this.OperationCanvas.height=640;
			//this.OperationCanvas.style.border="1px solid red";
			this.OperationCanvas.style.margin="0px 6px";
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
		this.OperationDiv.appendChild(this.OperationCanvas);
		this.OperationDiv.appendChild(this.OperationButtonDiv);
		this.OperationButtonDiv.appendChild(this.OperationButtonCanvas);
	
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
			//画板
			this.OperationGra = new Q.Graphics({width:745, height:640});
			this.OperationStage.addChild(this.OperationGra);
			//挂载事件
			this.OperationStage.addEventListener("touchstart", touchstart,false);
			this.OperationStage.addEventListener("touchmove",touchmove,false);
			this.OperationStage.addEventListener("touchend" ,touchend,false);
			this.OperationStage.addEventListener("mousedown", touchstart,false);
			this.OperationStage.addEventListener("mousemove",touchmove,false);
			this.OperationStage.addEventListener("mouseup" ,touchend,false);
			//猴子
				//this.stage=this.OperationStage;
				//this.drawMonkey();
			//时钟
			this.OperationTimer = new Q.Timer(1000/200);
			this.OperationTimer.addListener(this.OperationStage);
			this.OperationTimer.start();
			
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
				//
				this.OperationColB = new Q.Button({id:"yanse", image:game.getImage("yanse"), x:0, y:4, width:140, height:71,
				up:{rect:[0,0,140,71]},
				over:{rect:[0,71,140,71]},
				down:{rect:[0,71,140,71]},
				disabled:{rect:[0,54,140,71]}
				});
				this.OperationColB.addEventListener("mouseup" ,function(){},false);
				this.OperationColB.addEventListener("touchend" ,function(){},false);
				//
				this.OperationErrB = new Q.Button({id:"xiangpi", image:game.getImage("xiangpi"), x:0, y:87, width:140, height:71,
				up:{rect:[0,0,140,71]},
				over:{rect:[0,71,140,71]},
				down:{rect:[0,71,140,71]},
				disabled:{rect:[0,54,140,71]}
				});
				this.OperationErrB.addEventListener("mouseup" ,function(){},false);
				this.OperationErrB.addEventListener("touchend" ,function(){},false);
				//
				this.OperationCleB = new Q.Button({id:"qingchu", image:game.getImage("qingchu"), x:0, y:170, width:140, height:71,
				up:{rect:[0,0,140,71]},
				over:{rect:[0,71,140,71]},
				down:{rect:[0,71,140,71]},
				disabled:{rect:[0,54,140,71]}
				});
				this.OperationCleB.addEventListener("mouseup" ,function(){},false);
				this.OperationCleB.addEventListener("touchend" ,function(){},false);
				//
				this.OperationRefB = new Q.Button({id:"cankao", image:game.getImage("cankao"), x:0, y:252, width:140, height:71,
				up:{rect:[0,0,140,71]},
				over:{rect:[0,71,140,71]},
				down:{rect:[0,71,140,71]},
				disabled:{rect:[0,54,140,71]}
				});
				this.OperationRefB.addEventListener("mouseup" ,function(){},false);
				this.OperationRefB.addEventListener("touchend" ,function(){},false);
				//
				this.OperationFinB = new Q.Button({id:"wancheng", image:game.getImage("wancheng"), x:0, y:334, width:140, height:90,
				up:{rect:[0,0,140,90]},
				over:{rect:[0,90,140,90]},
				down:{rect:[0,90,140,90]},
				disabled:{rect:[0,54,140,71]}
				});
				this.OperationFinB.addEventListener("mouseup" ,function(){},false);
				this.OperationFinB.addEventListener("touchend" ,function(){},false);
				//
				this.OperationBacB = new Q.Button({id:"fanhui", image:game.getImage("fanhui"), x:0, y:483, width:140, height:90,
				up:{rect:[0,0,140,71]},
				over:{rect:[0,71,140,71]},
				down:{rect:[0,71,140,71]},
				disabled:{rect:[0,54,140,71]}
				});
				this.OperationBacB.addEventListener("mouseup" ,function(){},false);
				this.OperationBacB.addEventListener("touchend" ,function(){},false);
				//
				this.OperationFriB = new Q.Button({id:"haoyou", image:game.getImage("haoyou"), x:0, y:567, width:140, height:90,
				up:{rect:[0,0,140,71]},
				over:{rect:[0,71,140,71]},
				down:{rect:[0,71,140,71]},
				disabled:{rect:[0,54,140,71]}
				});
				this.OperationFriB.addEventListener("mouseup" ,function(){},false);
				this.OperationFriB.addEventListener("touchend" ,function(){},false);
			//添加按钮
			this.OperationButtonStage.addChild(this.OperationColB,this.OperationErrB,this.OperationCleB,this.OperationRefB,this.OperationFinB,this.OperationBacB,this.OperationFriB);
		//时钟	
		this.OperationButtonTimer = new Q.Timer(1000/200);
		this.OperationButtonTimer.addListener(this.OperationButtonStage);
		this.OperationButtonTimer.start();
//		
//		var btn2 = new Q.Button({id:"button2", image:game.getImage("button2"), x:310, y:367, width:195, height:54,
//		up:{rect:[0,0,195,54]},
//		over:{rect:[0,54,195,54]},
//		down:{rect:[0,54,195,54]},
//		disabled:{rect:[0,54,195,54]}
//		});
//		btn2.addEventListener("mouseup" ,function(){alert("df")},false);
//		btn2.addEventListener("touchend" ,function(){alert("df")},false);
//		
//		var btn3 = new Q.Button({id:"button3", image:game.getImage("button3"), x:310, y:447, width:195, height:54,
//		up:{rect:[0,0,195,54]},
//		over:{rect:[0,54,195,54]},
//		down:{rect:[0,54,195,54]},
//		disabled:{rect:[0,54,195,54]}
//		});
//		btn3.addEventListener("mouseup" ,function(){alert("df")},false);
//		btn3.addEventListener("touchend" ,function(){alert("df")},false);
//
//
//
//		//var monkeyF1 = new Q.Bitmap({id:"monkeyF2", image:game.getImage("monkeyF2"),x:0,y:0});
//	
//		/*var btn1 = new Q.Bitmap({id:"monkeyF1", image:game.getImage("cirle"),x:520,y:125});
//		btn1.rotation = 100;
//		this.btn1 = btn1;	
//		btn1.scaleX = 1.3;
//		btn1.scaleY = 1.3;
//		btn1.addEventListener("mouseup" ,drawFinger,false);
//		btn1.addEventListener("touchend" ,drawFinger,false);
//
//		var btn2 = new Q.Bitmap({id:"monkeyF2", image:game.getImage("cirle"),x:300,y:215});
//		btn2.rotation = 10;
//		this.btn2 = btn2;	
//		btn2.scaleX = 1.2;
//		btn2.scaleY = 1.2;
//		btn2.addEventListener("mouseup" ,drawFinger,false);
//		btn2.addEventListener("touchend" ,drawFinger,false);
//	
//		this.stage.addChild(btn1,btn2);*/
//		
//		this.drawMonkey();
//
//		/*var btn = new Q.Button({id:"button1", image:game.getImage("button1"), x:100, y:187, width:195, height:54,
//		up:{rect:[0,0,195,54]},
//		over:{rect:[0,54,195,54]},
//		down:{rect:[0,54,195,54]},
//		disabled:{rect:[0,54,195,54]}
//		});
//		btn.addEventListener("mouseup" ,function(){game.showMainMenu();Q.getDOM("drawLayer").style.display = "none";},false);
//		btn.addEventListener("touchend" ,function(){game.showMainMenu();Q.getDOM("drawLayer").style.display = "none";},false);
//		
//		this.stage.addChild(btn);*/
		
		//timer = new Q.Timer(1000/200);
//		timer.addListener(this.stage);
//		timer.start();
	}
}