var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var GameOvers = (function (_super) {
    __extends(GameOvers, _super);
    function GameOvers(start) {
        var _this = _super.call(this) || this;
        _this.start = start;
        _this.once(egret.Event.ADDED_TO_STAGE, _this.gameStart, _this);
        return _this;
    }
    GameOvers.prototype.gameStart = function () {
        this.skinName = "resource/eui_skins/GameOver.exml";
        var resetValue = { 'touchstart': this.start, 'btnbackgroundImage': 'button_play_png' };
        this.resetBtn = new Button(resetValue);
        this.reset.addChild(this.resetBtn);
        var otherValue = { 'btnbackgroundImage': 'button_score_png' };
        this.OtherBtn = new Button(otherValue);
        this.other.addChild(this.OtherBtn);
    };
    return GameOvers;
}(eui.Component));
__reflect(GameOvers.prototype, "GameOvers");
