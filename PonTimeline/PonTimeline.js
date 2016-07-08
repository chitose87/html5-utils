var PonTimeline = (function () {
    function PonTimeline() {
        this.que = [];
    }
    PonTimeline.prototype.start = function () {
        this.runQue();
        return this;
    };
    PonTimeline.prototype.method = function (method, param) {
        if (param === void 0) { param = null; }
        this.addQue("method", [method, param]);
        return this;
    };
    ;
    PonTimeline.prototype.weit = function (sec) {
        this.addQue("weit", sec);
        return this;
    };
    PonTimeline.prototype.cssTo = function (target, sec, param, ease, isWeit) {
        if (ease === void 0) { ease = "linear"; }
        if (isWeit === void 0) { isWeit = true; }
        this.addQue("cssTo", [target, sec, param, ease, isWeit]);
        return this;
    };
    PonTimeline.prototype.cssClear = function (target) {
        this.addQue("cssClear", target);
        return this;
    };
    PonTimeline.prototype.addQue = function (label, data) {
        this.que.push(new PonTimelineQueObject(label, data));
    };
    PonTimeline.prototype.runQue = function () {
        var _this = this;
        if (this.que.length == 0)
            return;
        var _que = this.que.shift();
        switch (_que.label) {
            case "weit":
                setTimeout(function () { return _this.runQue(); }, Math.floor(_que.data * 1000));
                break;
            case "method":
                _que.data[0].apply({}, _que.data[1]);
                this.runQue();
                break;
            case "cssTo":
                if (_que.data[4]) {
                    setTimeout(function () { return _this.runQue(); }, Math.floor(_que.data[1] * 1000));
                }
                var obj = _que.data[2];
                obj.transition = "all " + _que.data[1] + "s " + _que.data[3];
                $(_que.data[0]).css(obj);
                if (!_que.data[4]) {
                    this.runQue();
                }
                break;
            case "cssClear":
                $(_que.data).attr("style", null);
                this.runQue();
                break;
        }
    };
    return PonTimeline;
}());
var PonTimelineQueObject = (function () {
    function PonTimelineQueObject(label, data) {
        this.label = label;
        this.data = data;
    }
    return PonTimelineQueObject;
}());
//# sourceMappingURL=PonTimeline.js.map