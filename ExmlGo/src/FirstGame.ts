class FirstGame extends  eui.Component{




	private btnStart:eui.Group;
	private btn0:eui.Image;
	private btnaaa:eui.Group;
	private btnlast;
	private start;

	public constructor(start) {

		super();
		this.start = start;
		this.once(egret.Event.ADDED_TO_STAGE,this.gameStart,this);
	}

	private gameStart(){

		this.skinName = "resource/eui_skins/FlappyBird.exml";
		var a = {'touchstart':this.start,'btnbackgroundImage':'button_play_png'};
	
		this.btn0 =new  Button(a);
		this.btnStart.addChild(this.btn0);


		 var b = {'touchstart':function(){console.log(2);},'btnbackgroundImage':'button_score_png'};
		 this.btnlast =new Button(b);
		 this.btnaaa.addChild(this.btnlast);


	}

}