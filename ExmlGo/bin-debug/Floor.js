var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Floor = (function (_super) {
    __extends(Floor, _super);
    function Floor() {
        var _this = _super.call(this) || this;
        _this.once(egret.Event.ADDED_TO_STAGE, _this.gameStart, _this);
        return _this;
    }
    Floor.prototype.gameStart = function () {
        this.skinName = "resource/eui_skins/FloorSkin.exml";
    };
    Floor.prototype.change = function () {
        if (this.floor0.x <= 0) {
            this.floor0.x = this.floor1.x + this.floor0.width;
        }
        ;
        if (this.floor1.x <= 0) {
            this.floor1.x = this.floor0.x + this.floor0.width;
        }
        ;
        this.floor0.x -= 5;
        this.floor1.x -= 5;
    };
    Floor.prototype.Start = function () {
        this.addEventListener(egret.Event.ENTER_FRAME, this.change, this);
    };
    Floor.prototype.Stop = function () {
        this.removeEventListener(egret.Event.ENTER_FRAME, this.change, this);
    };
    return Floor;
}(eui.Component));
__reflect(Floor.prototype, "Floor");
