var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Pipe = (function (_super) {
    __extends(Pipe, _super);
    function Pipe(ArchValue) {
        var _this = _super.call(this) || this;
        _this.after = true;
        _this.ArchValue = ArchValue;
        _this.x = ArchValue.stageW;
        _this.once(egret.Event.ADDED_TO_STAGE, _this.gameStart, _this);
        return _this;
    }
    Pipe.prototype.changeAfter = function () {
        if (this.after) {
            if (this.x + this.width <= this.ArchValue.stageW / 3) {
                this.after = false;
                return true;
            }
        }
    };
    //创建柱子
    Pipe.prototype.gameStart = function () {
        this.skinName = "resource/eui_skins/Architecture.exml";
        this.down.pixelHitTest = true;
        this.down.pixelHitTest = true;
        this.down.y = -parseInt(String(Math.random() * this.down.height));
        this.up.y = 1.8 * this.down.height + this.down.y + 200;
        this.addEventListener(egret.Event.ENTER_FRAME, this.change, this);
        // this.timer=new egret.Timer(100,0);
        // this.timer.addEventListener(egret.TimerEvent.TIMER,this.starts,this);
        // this.timer.start();
    };
    Pipe.prototype.change = function () {
        this.x -= 5;
    };
    // private starts(){
    // 	var column0=this.x-24;
    // 	egret.Tween.get(this).to({ x: column0 },130)
    // }
    //移除益出的柱子
    Pipe.prototype.remove = function () {
        this.parent.removeChild(this);
    };
    //柱子定时器停止
    Pipe.prototype.columnStop = function () {
        this.removeEventListener(egret.Event.ENTER_FRAME, this.change, this);
    };
    //柱子定时器开始
    Pipe.prototype.columnStart = function () {
        this.addEventListener(egret.Event.ENTER_FRAME, this.change, this);
    };
    //判断柱子与小鸟的碰撞
    Pipe.prototype.collision = function (bird) {
        this.pipe0Down = new egret.Rectangle(this.x, 0, this.width, this.up.y - 200);
        this.pipe1Up = new egret.Rectangle(this.x, this.up.y, this.width, this.up.height);
        this.stop0 = bird.intersects(this.pipe0Down);
        this.stop1 = bird.intersects(this.pipe1Up);
        if (this.stop0 || this.stop1) {
            return 1;
        }
    };
    return Pipe;
}(eui.Component));
__reflect(Pipe.prototype, "Pipe");
