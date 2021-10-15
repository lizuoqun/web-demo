! function () {
    "use strict";
    console.log("你好");
    const o = {
        name: "yueyue"
    };
    console.log(o), o.name = "dayueyeu", console.log(o);
    const e = new Promise(((o, e) => {}));
    console.log(e)
}();