var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var BackgroundImage = (function (_super) {
    __extends(BackgroundImage, _super);
    function BackgroundImage(measured) {
        var _this = _super.call(this) || this;
        _this.measured = measured;
        _this.addimg();
        _this.addChild(_this.imagedata);
        return _this;
    }
    BackgroundImage.prototype.searchImg = function () {
        var num = parseInt(String(Math.random() * 2 + 1));
        switch (num) {
            case 2:
                this.img = "bg_day_png";
                break;
            case 1:
                this.img = "bg_night_png";
                break;
        }
    };
    BackgroundImage.prototype.addimg = function () {
        this.searchImg();
        this.imagedata = new egret.Bitmap(RES.getRes(this.img));
        this.imagedata.width = this.measured.stageW;
        this.imagedata.height = this.measured.stageH;
    };
    return BackgroundImage;
}(egret.DisplayObjectContainer));
__reflect(BackgroundImage.prototype, "BackgroundImage");
