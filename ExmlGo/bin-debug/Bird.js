var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Bird = (function (_super) {
    __extends(Bird, _super);
    function Bird(bigBird) {
        var _this = _super.call(this) || this;
        _this.acceleration = 20;
        var data = RES.getRes("bird_json");
        var tex = RES.getRes("bird_png");
        _this.mcf = new egret.MovieClipDataFactory(data, tex);
        _this.mcf.enableCache = true;
        _this.addBird();
        _this.scaleX = 1.8;
        _this.scaleY = 1.8;
        _this.addChild(_this.mc);
        _this.maxY = bigBird.stageH / 3 * 2.3 + _this.height + 3;
        _this.anchorOffsetX = _this.mc.width;
        _this.anchorOffsetY = _this.mc.height;
        _this.mc.play(-1);
        return _this;
    }
    //改变鸟
    Bird.prototype.addBird = function () {
        this.searchBird();
        this.mc = new egret.MovieClip(this.mcf.generateMovieClipData(this.mcfValue));
    };
    //选择鸟
    Bird.prototype.searchBird = function () {
        var num = parseInt(String(Math.random() * 2 + 1));
        switch (num) {
            case 1:
                this.mcfValue = "bird0";
                break;
            case 2:
                this.mcfValue = "bird1";
                break;
            case 3:
                this.mcfValue = "bird2";
                break;
        }
        ;
    };
    //获取这个对象
    Bird.prototype.getBird = function () {
        return this;
    };
    //点击后 小鸟飞一下
    Bird.prototype.jump = function () {
        this.birdTimer.reset();
        egret.Tween.removeTweens(this);
        this.acceleration = 15;
        this.mc.play(2);
        var birdY = this.y - 100;
        egret.Tween.get(this).to({ y: birdY, rotation: -20 }, 200).call(function () {
            this.fall();
        });
    };
    //小鸟坠落
    Bird.prototype.fall = function () {
        this.birdTimer = new egret.Timer(100, 0);
        this.birdTimer.addEventListener(egret.TimerEvent.TIMER, function () {
            this.fallUp();
        }, this);
        this.birdTimer.start();
    };
    //小鸟坠落缓动
    Bird.prototype.fallUp = function () {
        this.acceleration += 10;
        this.y + this.acceleration >= this.maxY ? this.mcY = this.maxY : this.mcY = this.y + this.acceleration;
        this.rotation + 15 >= 90 ? this.rotate = 90 : this.rotate = this.rotation + 30;
        egret.Tween.get(this).to({ y: this.mcY, rotation: this.rotate }, 100);
    };
    //小鸟死亡
    Bird.prototype.birdStop = function () {
        this.birdTimer.reset();
        this.mc.gotoAndStop(2);
        var timeOut = egret.setTimeout(function () {
            egret.Tween.removeTweens(this);
            egret.Tween.get(this).to({ y: this.maxY, rotation: 90 }, 500);
            clearTimeout(timeOut);
        }, this, 500);
    };
    //小鸟暂停
    Bird.prototype.birdSuspend = function () {
        egret.Tween.removeTweens(this);
        this.birdTimer.reset();
    };
    return Bird;
}(egret.Sprite));
__reflect(Bird.prototype, "Bird");
