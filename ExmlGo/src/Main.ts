//////////////////////////////////////////////////////////////////////////////////////
//
//  Copyright (c) 2014-present, Egret Technology.
//  All rights reserved.
//  Redistribution and use in source and binary forms, with or without
//  modification, are permitted provided that the following conditions are met:
//
//     * Redistributions of source code must retain the above copyright
//       notice, this list of conditions and the following disclaimer.
//     * Redistributions in binary form must reproduce the above copyright
//       notice, this list of conditions and the following disclaimer in the
//       documentation and/or other materials provided with the distribution.
//     * Neither the name of the Egret nor the
//       names of its contributors may be used to endorse or promote products
//       derived from this software without specific prior written permission.
//
//  THIS SOFTWARE IS PROVIDED BY EGRET AND CONTRIBUTORS "AS IS" AND ANY EXPRESS
//  OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES
//  OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED.
//  IN NO EVENT SHALL EGRET AND CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT,
//  INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT
//  LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES;LOSS OF USE, DATA,
//  OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF
//  LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING
//  NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE,
//  EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
//
//////////////////////////////////////////////////////////////////////////////////////

class Main extends eui.UILayer {
    /**
     * 加载进度界面
     * loading process interface
     */
    private loadingView: LoadingUI;

    public static stageWidth ;
    public static stageHeight ;

    protected createChildren(): void {
        super.createChildren();
        //inject the custom material parser
        //注入自定义的素材解析器
        let assetAdapter = new AssetAdapter();
        egret.registerImplementation("eui.IAssetAdapter",assetAdapter);
        egret.registerImplementation("eui.IThemeAdapter",new ThemeAdapter());
        //Config loading process interface
        //设置加载进度界面
        Main.stageWidth = this.stage.stageWidth;
        Main.stageHeight = this.stage.stageHeight;
        this.loadingView = new LoadingUI();
        this.stage.addChild(this.loadingView);
        // initialize the Resource loading library
        //初始化Resource资源加载库
        RES.addEventListener(RES.ResourceEvent.CONFIG_COMPLETE, this.onConfigComplete, this);
        RES.loadConfig("resource/default.res.json", "resource/");
    }
    /**
     * 配置文件加载完成,开始预加载皮肤主题资源和preload资源组。
     * Loading of configuration file is complete, start to pre-load the theme configuration file and the preload resource group
     */
    private onConfigComplete(event:RES.ResourceEvent):void {
        RES.removeEventListener(RES.ResourceEvent.CONFIG_COMPLETE, this.onConfigComplete, this);
        // load skin theme configuration file, you can manually modify the file. And replace the default skin.
        //加载皮肤主题配置文件,可以手动修改这个文件。替换默认皮肤。
        let theme = new eui.Theme("resource/default.thm.json", this.stage);
        theme.addEventListener(eui.UIEvent.COMPLETE, this.onThemeLoadComplete, this);

        RES.addEventListener(RES.ResourceEvent.GROUP_COMPLETE, this.onResourceLoadComplete, this);
        RES.addEventListener(RES.ResourceEvent.GROUP_LOAD_ERROR, this.onResourceLoadError, this);
        RES.addEventListener(RES.ResourceEvent.GROUP_PROGRESS, this.onResourceProgress, this);
        RES.addEventListener(RES.ResourceEvent.ITEM_LOAD_ERROR, this.onItemLoadError, this);

        RES.loadGroup("preload");
    }
    private isThemeLoadEnd: boolean = false;
    /**
     * 主题文件加载完成,开始预加载
     * Loading of theme configuration file is complete, start to pre-load the 
     */
    private onThemeLoadComplete(): void {
        this.isThemeLoadEnd = true;
        this.createScene();
    }
    private isResourceLoadEnd: boolean = false;
    /**
     * preload资源组加载完成
     * preload resource group is loaded
     */
    private onResourceLoadComplete(event:RES.ResourceEvent):void {
        if (event.groupName == "preload") {
            this.stage.removeChild(this.loadingView);
            RES.removeEventListener(RES.ResourceEvent.GROUP_COMPLETE, this.onResourceLoadComplete, this);
            RES.removeEventListener(RES.ResourceEvent.GROUP_LOAD_ERROR, this.onResourceLoadError, this);
            RES.removeEventListener(RES.ResourceEvent.GROUP_PROGRESS, this.onResourceProgress, this);
            RES.removeEventListener(RES.ResourceEvent.ITEM_LOAD_ERROR, this.onItemLoadError, this);
            this.isResourceLoadEnd = true;
            this.createScene();
        }
    }
    private createScene(){
        if(this.isThemeLoadEnd && this.isResourceLoadEnd){
            this.startCreateScene();
        }
    }
    /**
     * 资源组加载出错
     *  The resource group loading failed
     */
    private onItemLoadError(event:RES.ResourceEvent):void {
        console.warn("Url:" + event.resItem.url + " has failed to load");
    }
    /**
     * 资源组加载出错
     * Resource group loading failed
     */
    private onResourceLoadError(event:RES.ResourceEvent):void {
        //TODO
        console.warn("Group:" + event.groupName + " has failed to load");
        //忽略加载失败的项目
        //ignore loading failed projects
        this.onResourceLoadComplete(event);
    }
    /**
     * preload资源组加载进度
     * loading process of preload resource
     */
    private onResourceProgress(event:RES.ResourceEvent):void {

    }
    private textfield:egret.TextField;
    /**
     * 创建场景界面
     * Create scene interface
     */



    protected startCreateScene(): void {




        let stageW = this.stage.stageWidth;
        let stageH = this.stage.stageHeight;
        let self = this;
        let measured = {'stageW':stageW,'stageH':stageH};
//         let Mask = new egret.Sprite();
//         Mask.graphics.beginFill(0x000000);
//         Mask.graphics.drawRect(0, 0, stageW, stageH);
//         Mask.graphics.endFill();
//         Mask.alpha = 0;
//         let num=0;
//         let firstTouchImage;
//         let integralNum: Num;
// //背景

//         let backgroundimg:BackgroundImage;

//  //柱子 
//         let columnArry=[];
//         var ArchitextureTimer=new egret.Timer(100,0);
//         let columnNum=10;
      
//         ArchitextureTimer.addEventListener(egret.TimerEvent.TIMER,function(){
        
//         if(columnNum>=10){
//         let Architexture = new Pipe(measured);

//         this.addChildAt(Architexture,1);

//         columnArry.push(Architexture);

//         columnNum=0;
//         if((columnArry[0].x+columnArry[0].width)<0){
//             columnArry[0].remove();
//             columnArry.shift();
//         }
//         if((columnArry[0].x+columnArry[0].width)<0){
//             columnArry[0].remove();
//             columnArry.shift();
//         }

//         }
//         columnNum++;

//         },this);     
// //地
//         var floor : Floor;
// //小鸟
//         let bird:Bird;

//         function touchOver(){
//              bird.jump();
//         } 

//  //暂停按钮
//         let suspendBtnArry={'btnbackgroundImage':'button_pause_png','touchstart':suspend,'btnsize':2};
//         let suspendBtn :Button;
//         suspendBtn = new Button(suspendBtnArry);
//         suspendBtn.horizontalCenter=-stageW/2+100;
//         suspendBtn.verticalCenter=-stageH/2+300;

// //暂停方法
//         function suspend(){
//             self.removeChild(suspendBtn);
//             self.stage.removeEventListener(egret.TouchEvent.TOUCH_BEGIN,touchOver,self.stage)
//             self.removeEventListener(egret.Event.ENTER_FRAME,randem,self)
//             ArchitextureTimer.reset();
//             bird.birdSuspend();

//             for(var i=0 ;i<collisionLength;i++){

//             columnArry[i].columnStop();

//             }

//             floor.Stop();

//             self.addChildAt(birdContinueBtn,5);

//         }
// //继续按钮
//         let birdContinueBtnArry={'btnbackgroundImage':'button_resume_png','touchstart':birdContinue,'btnsize':2};
//         let birdContinueBtn = new Button(birdContinueBtnArry);
//             birdContinueBtn.horizontalCenter=-stageW/2+100;
//             birdContinueBtn.verticalCenter=-stageH/2+300;
// //继续方法
//         function birdContinue(){
        
//             self.removeChild(birdContinueBtn);
//             bird.fall();
//             ArchitextureTimer.start();
//             floor.Start();

//             for(var i=0 ;i<collisionLength;i++){

//                 columnArry[i].columnStart();

//                 }
//             self.addEventListener(egret.Event.ENTER_FRAME,randem,self); //监听碰撞

//             self.stage.addEventListener(egret.TouchEvent.TOUCH_BEGIN,touchOver,self.stage);//点击事件

//             self.addChildAt(suspendBtn,6);   
        
//         }

// //Stop方法
//         let stopLength;
//         var colorMatrix = [
//             1.8,0,0,0,100,
//             0,1.8,0,0,100,
//             0,0,1.8,0,100,
//             0,0,0,1.8,0
//         ];
//         var colorFlilter = new egret.ColorMatrixFilter(colorMatrix);
    
//         function Stop(){
//             self.removeChild(suspendBtn);
//             egret.Tween.get(self).to({filters : [ colorFlilter ]}).wait(100).to({filters : []});
//             egret.Tween.removeTweens(bird);
//             self.stage.removeEventListener(egret.TouchEvent.TOUCH_BEGIN,touchOver,self.stage)
//             self.removeEventListener(egret.Event.ENTER_FRAME,randem,self)
//             floor.Stop();
//             bird.birdStop();
//             ArchitextureTimer.reset();
//             stopLength=columnArry.length;
//             for(var i=0;i<stopLength;i++){
//             columnArry[i].columnStop();
//             }

//             var idTimeout= egret.setTimeout( function(){
//                     GameOver();
//             }, self, 700);
//         }
// //游戏结束
//         let over;
//         function GameOver(){


//             over = new GameOvers(function(){
//                 egret.Tween.get(Mask).to({alpha:1},200).call(function(){
//                     Start([bird,backgroundimg,over,integralNum]);
//                 }).to({alpha:0},200)
//             });
//             over.alpha = 0;
//             self.addChildAt(over,3);
//             egret.Tween.get(over).to({alpha:1},200);

//         }
// //重新开始按钮

//         // let startBtnArry={'btnbackgroundImage':'button_restart_png','touchstart':Start,'btnsize':1.5};
//         // let startBtn = new Button(startBtnArry);
//         // startBtn.x=200;
//         // startBtn.y=200;
//         // this.addChildAt(startBtn,11);

// //重新开始方法
//         function Start(arry){
//             num=0;
//         var length = arry.length;
//         for(var i = 0;i<length;i++){
//             self.removeChild(arry[i]);
//         }
//         var pipeLength = columnArry.length;
//         for(var i = 0;i<pipeLength;i++){
//             columnArry[i].remove();
//         }

//         backgroundimg=new BackgroundImage(measured);
//         self.addChildAt(backgroundimg,0);

//         firstTouchImage = new egret.Bitmap(RES.getRes('tutorial_png'));
//         firstTouchImage.scaleX=2;
//         firstTouchImage.scaleY=2;
//         firstTouchImage.x=stageW/2-firstTouchImage.width;
//         firstTouchImage.y=stageH/2-firstTouchImage.height;
//         self.stage.addChildAt(firstTouchImage,2);


//         integralNum = new Num();
//         integralNum.x = stageW/2;
//         integralNum.y = stageH/6;
//         self.addChildAt(integralNum,5);


//         bird=new Bird(measured);
//         bird.x=stageW/3;
//         bird.y=stageH/2;

//         self.addChildAt(bird,2);

         
//         columnArry=[];
        
//         self.touchEnabled = true;
//         self.addEventListener(egret.TouchEvent.TOUCH_BEGIN,firstTouch,self);        

//         }

// //暂停按钮
//         function firstTouch(){

//         this.addChildAt(suspendBtn,6);

//         this.stage.removeChild(firstTouchImage);
//         ArchitextureTimer.start();
//         floor.Start();
//         bird.fall();
//         this.addEventListener(egret.Event.ENTER_FRAME,randem,this); //点击事件
//         this.removeEventListener(egret.TouchEvent.TOUCH_BEGIN,firstTouch,this)
//         this.stage.addEventListener(egret.TouchEvent.TOUCH_BEGIN,touchOver,this.stage)

//        }


// //刚进入游戏

//         let firstGameImage;
//         function firstGame(){

//             backgroundimg=new BackgroundImage(measured);
//             self.addChild(backgroundimg);

//             bird=new Bird(measured);
//             bird.x=stageW/2+bird.width/2;
//             bird.y=stageH/3*1.3;
//             self.addChild(bird);
//             egret.Tween.get(bird , {loop:true}).to({ y : stageH/3*1.3+60},800).to({y : stageH/3*1.3},800)

//             floor= new Floor();
//             floor.bottom = 0;
//             self.addChildAt(floor,5);

//             firstGameImage = new FirstGame(function(){
//                 self.addChildAt(Mask,66);

//                 egret.Tween.get(Mask).to({alpha:1},200).call(function(){
               
//                 egret.Tween.removeTweens(self);
//                     Start([backgroundimg,bird,firstGameImage]);
              
//                 }).to({alpha:0},200)

//             });
//             self.addChild(firstGameImage);

//         }
//         firstGame() //进入游戏

// //碰撞
//         let birdCollision: egret.Rectangle ;
        
//         let collisionLength;

//         let birdAtr;

//         this.addEventListener(egret.Event.ENTER_FRAME,randem,this);
        
//         function randem(){
        
//         birdAtr=bird.getBird();

//         let gameOver=false;
        
//         birdCollision =  new egret.Rectangle(birdAtr.x-birdAtr.width/2,birdAtr.y-birdAtr.height/2,birdAtr.width-5,birdAtr.height*1.3);


//         bird.y>=(stageH/3*2.3+bird.height)&&Stop();

//         collisionLength=columnArry.length;
//         for(var i=0 ;i<collisionLength;i++){
//             if(columnArry[i].changeAfter()){
//                 num+=1;
            
//                 integralNum.changeNum(num);
//             }
//            gameOver= columnArry[i].collision(birdCollision);
//            if(gameOver){Stop()}
//         }

        
//         }






  }

}
