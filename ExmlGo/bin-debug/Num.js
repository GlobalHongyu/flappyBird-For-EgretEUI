var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Num = (function (_super) {
    __extends(Num, _super);
    function Num() {
        var _this = _super.call(this) || this;
        _this.bitmapText = new egret.BitmapText();
        _this.bitmapText.font = RES.getRes('num_fnt');
        _this.bitmapText.text = '0';
        _this.addChild(_this.bitmapText);
        _this.anchorOffsetX = _this.width / 2;
        return _this;
    }
    Num.prototype.changeNum = function (value) {
        this.bitmapText.text = value;
        this.anchorOffsetX = this.width / 2;
    };
    return Num;
}(egret.Sprite));
__reflect(Num.prototype, "Num");
