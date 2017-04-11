var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var FirstGame = (function (_super) {
    __extends(FirstGame, _super);
    function FirstGame(start) {
        var _this = _super.call(this) || this;
        _this.start = start;
        _this.once(egret.Event.ADDED_TO_STAGE, _this.gameStart, _this);
        return _this;
    }
    FirstGame.prototype.gameStart = function () {
        this.skinName = "resource/eui_skins/FlappyBird.exml";
        var a = { 'touchstart': this.start, 'btnbackgroundImage': 'button_play_png' };
        this.btn0 = new Button(a);
        this.btnStart.addChild(this.btn0);
        var b = { 'touchstart': function () { console.log(2); }, 'btnbackgroundImage': 'button_score_png' };
        this.btnlast = new Button(b);
        this.btnaaa.addChild(this.btnlast);
    };
    return FirstGame;
}(eui.Component));
__reflect(FirstGame.prototype, "FirstGame");
