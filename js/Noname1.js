		if (props == "animal")
		{
			for(var i=0;i<animalLevel.length;i++)
			{console.log(animalLocked[i]);console.log(81+(i%4)*219);console.log(78*(Math.floor(i/4)+1));
				if (animalLocked[i]==0)
				{
					//var   btn1=new Q.Bitmap({id:animalLevel[i], image:game.getImage(animalLevel[i]),x:81+((i%4)*219),y:(78*(Math.floor(i/4)+1)),width:205, height:152});
					var g = new Q.Graphics({width:745, height:640});
					g.beginBitmapFill(game.getImage(animalLevel[i]));
					//g.style.background-color = "#fff";
						var   btn1=new Q.Button({id:animalLevel[i], image:game.getImage(animalLevel[i]), x:81+((i%4)*219),y:(78*(Math.floor(i/4)+1)), width:730, height:630,
											up:{rect:[0,0,730,630]},
											});
				}else{
					 /*var   btn1=new Q.Button({id:animalLevel[i], image:game.getImage(props+"_0"), x:81, y:78+((i%4)*182), width:205, height:152,
											up:{rect:[0,0,760,630]},
											});*/
					var   btn1=new Q.Bitmap({id:animalLevel[i], image:game.getImage(animalLevel[i]),x:81+((i%4)*219),y:(78*(Math.floor(i/4)+1)),width:205, height:152});
				}
				console.log(btn1);
				btn1.scaleX = 0.3;				btn1.scaleY = 0.3;
				//btn1.width = 205;btn1.height = 152;
				btn1.addEventListener("mouseup" ,function(){game.showOperationLayer();},false);
				btn1.addEventListener("touchend" ,function(){game.showOperationLayer();},false);

				choiceStage.addChild(g,btn1);
			}
		}