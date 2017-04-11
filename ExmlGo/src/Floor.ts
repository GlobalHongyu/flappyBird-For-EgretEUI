class Floor extends eui.Component{

	public floor0:eui.Image;
	public floor1:eui.Image;
	

	public constructor() {
		super();
		this.once(egret.Event.ADDED_TO_STAGE,this.gameStart,this);

	}

	private gameStart(){
		this.skinName = "resource/eui_skins/FloorSkin.exml";
	}

	private change(){
		
		if(this.floor0.x<=0){
			this.floor0.x=this.floor1.x+this.floor0.width;
		};
		
		if(this.floor1.x<=0){
			this.floor1.x=this.floor0.x+this.floor0.width;
		};
		this.floor0.x-=5;
		this.floor1.x-=5;
	}

	public Start(){
		this.addEventListener(egret.Event.ENTER_FRAME,this.change,this);
	}
	public Stop(){
		this.removeEventListener(egret.Event.ENTER_FRAME,this.change,this);
	}
}