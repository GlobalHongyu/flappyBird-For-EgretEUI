class BackgroundImage extends egret.DisplayObjectContainer{
	
	private img:string;
	private measured;
	private imagedata;
	public constructor(measured) {

		super();
		this.measured=measured;

		this.addimg();
		this.addChild(this.imagedata);

	}

	private searchImg(){
	var num=parseInt(String(Math.random()*2+1));


		switch(num){
			case 2:this.img="bg_day_png"  
			break;
			case 1:this.img="bg_night_png"
			break;
		}
	}

	public addimg(){
		this.searchImg();

		this.imagedata=new egret.Bitmap(RES.getRes(this.img));

		this.imagedata.width=this.measured.stageW;
		this.imagedata.height=this.measured.stageH;
	
	}

}