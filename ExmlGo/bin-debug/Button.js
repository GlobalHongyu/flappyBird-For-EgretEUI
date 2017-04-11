var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Button = (function (_super) {
    __extends(Button, _super);
    function Button(btnjson) {
        var _this = _super.call(this) || this;
        _this.size = 1;
        _this.size = btnjson.btnsize;
        _this.btnbackgroundImage = btnjson.btnbackgroundImage;
        _this.touchstart = btnjson.touchstart ? btnjson.touchstart : _this.touch;
        _this.touchend = btnjson.touchend ? btnjson.touchend : _this.touch;
        _this.touchmove = btnjson.touchmove ? btnjson.touchmove : _this.touch;
        _this.onLoadComplete();
        _this.addEventListener(egret.TouchEvent.TOUCH_BEGIN, _this.onbtn, _this);
        _this.addEventListener(egret.TouchEvent.TOUCH_RELEASE_OUTSIDE, _this.onbtnend, _this);
        _this.addEventListener(egret.TouchEvent.TOUCH_END, _this.onbtnend, _this);
        _this.addEventListener(egret.TouchEvent.TOUCH_MOVE, _this.onbtnmove, _this);
        return _this;
    }
    Button.prototype.touch = function () { };
    ;
    Button.prototype.onbtnmove = function () {
        this.touchmove();
    };
    Button.prototype.onLoadComplete = function () {
        this.source = this.btnbackgroundImage;
        //    var imgdata=new egret.Bitmap(RES.getRes(this.btnbackgroundImage));
        //     imgdata.touchEnabled = true;
        //     imgdata.scaleX=this.size;
        //     imgdata.scaleY=this.size;
        //     this.addChild(imgdata);
        this.scaleX = 2;
        this.scaleY = 2;
        this.horizontalCenter = 0;
        this.verticalCenter = 0;
    };
    Button.prototype.onClick = function (event) {
        this.onbtnend();
    };
    Button.prototype.onbtn = function (event) {
        var colorMatrix = [
            1, 0, 0, 0, 100,
            0, 1, 0, 0, 100,
            0, 0, 1, 0, 100,
            0, 0, 0, 1, 0
        ];
        var colorFlilter = new egret.ColorMatrixFilter(colorMatrix);
        egret.Tween.get(this).to({
            scaleX: 1.6,
            scaleY: 1.6,
            filters: [colorFlilter]
        }, 100);
        this.touchstart();
    };
    Button.prototype.onbtnend = function () {
        egret.Tween.get(this).to({
            scaleX: 2,
            scaleY: 2,
            filters: []
        }, 100);
        this.touchend();
    };
    return Button;
}(eui.Image));
__reflect(Button.prototype, "Button");
