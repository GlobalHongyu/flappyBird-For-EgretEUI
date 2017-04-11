class Num extends egret.Sprite{


	private bitmapText:egret.BitmapText;

	public constructor() {

		super();

		this.bitmapText = new egret.BitmapText();
		this.bitmapText.font = RES.getRes('num_fnt');
		this.bitmapText.text = '0'; 
		this.addChild(this.bitmapText);
		this.anchorOffsetX = this.width/2;
	}

	public changeNum(value){
		this.bitmapText.text = value;
		this.anchorOffsetX = this.width/2;
	}

}