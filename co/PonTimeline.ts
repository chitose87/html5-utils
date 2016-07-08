module co {
    export class PonTimeline {
        public que:PonTimelineQueObject[] = [];

        constructor() {

        }

        start():PonTimeline {
            this.runQue();
            return this;
        }

        method(method:Function, param:any[] = null):PonTimeline {
            this.addQue("method", [method, param]);
            return this;
        };

        weit(sec:number):PonTimeline {
            this.addQue("weit", sec);
            return this;
        }

        cssTo(target:any, sec:number, param:any, ease:string = "linear", isWeit:boolean = true):PonTimeline {
            this.addQue("cssTo", [target, sec, param, ease, isWeit]);
            return this;
        }

        cssClear(target:any):PonTimeline {
            this.addQue("cssClear", target);
            return this;
        }

        private addQue(label:string, data:any) {
            this.que.push(new PonTimelineQueObject(label, data));
        }

        private runQue() {
            if (this.que.length == 0)return;
            var _que:PonTimelineQueObject = this.que.shift();
            switch (_que.label) {
                case "weit":
                    setTimeout(()=>this.runQue(), Math.floor(_que.data * 1000));
                    break;
                case "method":
                    _que.data[0].apply({}, _que.data[1]);
                    this.runQue();
                    break;
                case "cssTo":
                    if (_que.data[4]) {
                        setTimeout(()=>this.runQue(), Math.floor(_que.data[1] * 1000));
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
        }
    }

    export class PonTimelineQueObject {
        public label:string;
        public data:any;

        constructor(label:string, data:any) {
            this.label = label;
            this.data = data;
        }
    }
}