class Pipe extends eui.Component{

	private ArchValue;			//传过来的 屏幕高度 屏幕宽度 小鸟包围盒
	private timer : egret.Timer;  //柱子定时器
	private down;			//上面的柱子
	private up;			//下面的柱子

	private after=true;

	public constructor(ArchValue) {

		super();
		
		this.ArchValue=ArchValue;
		this.x=ArchValue.stageW;
		this.once(egret.Event.ADDED_TO_STAGE,this.gameStart,this);
	}
	
	public changeAfter(){
		if(this.after){
			if(this.x+this.width<=this.ArchValue.stageW/3){
				this.after=false;
				return true;
			}
		}
	}
	

	private pipe0Down : egret.Rectangle;

	private pipe1Up : egret.Rectangle;

	private stop0;

	private stop1;

//创建柱子


	private gameStart(){
		this.skinName = "resource/eui_skins/Architecture.exml";
		this.down.pixelHitTest=true;
		this.down.pixelHitTest=true;

		this.down.y= - parseInt(String(Math.random()*this.down.height));
		this.up.y= 1.8*this.down.height+this.down.y+200;

		this.addEventListener(egret.Event.ENTER_FRAME,this.change,this);

		// this.timer=new egret.Timer(100,0);
		// this.timer.addEventListener(egret.TimerEvent.TIMER,this.starts,this);
		// this.timer.start();
	
	}

	private change(){
		this.x-=5;
	}

	// private starts(){
	// 	var column0=this.x-24;
	// 	egret.Tween.get(this).to({ x: column0 },130)
	// }
//移除益出的柱子
	public remove():void{
		this.parent.removeChild(this);
	}	

//柱子定时器停止
	public columnStop():void{
		this.removeEventListener(egret.Event.ENTER_FRAME,this.change,this);

	}
//柱子定时器开始
	public columnStart():void{

		this.addEventListener(egret.Event.ENTER_FRAME,this.change,this);

	}

//判断柱子与小鸟的碰撞
	public collision(bird){
	
	this.pipe0Down =  new egret.Rectangle(this.x,0,this.width,this.up.y-200);

	this.pipe1Up =  new egret.Rectangle(this.x,this.up.y,this.width,this.up.height);

	this.stop0 = bird.intersects(this.pipe0Down);

	this.stop1 = bird.intersects(this.pipe1Up);

		if(this.stop0||this.stop1){return 1}

	}
	
}