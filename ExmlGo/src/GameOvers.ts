class GameOvers extends  eui.Component{


	private reset:eui.Group;
	private resetBtn:eui.Image;
	private other:eui.Group;
	private OtherBtn:eui.Image;
	private start;

	public constructor(start) {
		super();
		this.start = start;
		this.once(egret.Event.ADDED_TO_STAGE,this.gameStart,this);
	}

	private gameStart(){

		this.skinName = "resource/eui_skins/GameOver.exml";

		var resetValue = {'touchstart':this.start,'btnbackgroundImage':'button_play_png'};
	
		this.resetBtn =new  Button(resetValue);
		this.reset.addChild(this.resetBtn);

		var otherValue = {'btnbackgroundImage':'button_score_png'};
	
		this.OtherBtn =new  Button(otherValue);
		this.other.addChild(this.OtherBtn);

	}

}