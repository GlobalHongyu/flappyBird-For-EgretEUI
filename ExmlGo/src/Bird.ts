class Bird extends egret.Sprite{

	private mcfValue:string;

	private mc: egret.MovieClip;

	private mcf : egret.MovieClipDataFactory;
	
	private birdTimer : egret.Timer;

	private mcY;

	public maxY;

	private rotate;

	private acceleration = 20;

	public constructor(bigBird) {
		super();
	
		
		var data = RES.getRes("bird_json");
        var tex = RES.getRes("bird_png");
        this.mcf  = new egret.MovieClipDataFactory(data,tex);
        this.mcf.enableCache = true;
        this.addBird();
		this.scaleX=1.8;
		this.scaleY=1.8;
        this.addChild(this.mc);
		this.maxY = bigBird.stageH/3*2.3+this.height+3;
		this.anchorOffsetX=this.mc.width;
		this.anchorOffsetY=this.mc.height;
		this.mc.play(-1);
		
	}
//改变鸟
	public addBird(){
		
	this.searchBird();
	this.mc = new egret.MovieClip(this.mcf.generateMovieClipData(this.mcfValue));

	}
//选择鸟
	private searchBird():void{

		var num=parseInt(String(Math.random()*2+1));
		switch(num){
			case 1:this.mcfValue="bird0"  
			break;
			case 2:this.mcfValue="bird1"
			break;
			case 3:this.mcfValue="bird2"
			break;
		};
	}
	
//获取这个对象
	public getBird(){
		return this;
	}


//点击后 小鸟飞一下
	private jump(){
		this.birdTimer.reset();
		egret.Tween.removeTweens(this);
		this.acceleration = 15;
		this.mc.play(2);
	
		var birdY=this.y-100;
		
		egret.Tween.get(this).to({  y: birdY,rotation: -20},200).call(function(){
			this.fall();
		});

	}
//小鸟坠落
	public fall():void{

		this.birdTimer = new egret.Timer(100,0);
		this.birdTimer.addEventListener(egret.TimerEvent.TIMER,function(){
        this.fallUp();

        },this);      
        this.birdTimer.start();

	}
//小鸟坠落缓动
	private fallUp():void{
		this.acceleration+=10;
		this.y+this.acceleration>=this.maxY?this.mcY=this.maxY:this.mcY=this.y+this.acceleration;
		this.rotation+15>=90?this.rotate=90:this.rotate=this.rotation+30;
        egret.Tween.get(this).to({ y: this.mcY ,rotation:this.rotate},100)

	}
//小鸟死亡
	public birdStop():void{

		this.birdTimer.reset();
		this.mc.gotoAndStop(2);
		var timeOut=egret.setTimeout(function(){
			egret.Tween.removeTweens(this);
			egret.Tween.get(this).to({ y: this.maxY ,rotation:90},500);
			
			clearTimeout(timeOut);
		},this,500);
		
	}
//小鸟暂停
	public birdSuspend(){
		egret.Tween.removeTweens(this);
		this.birdTimer.reset();
	}

}