"use strict"

let height = window.prompt("身長を入力してください(cmは不要)。");
if (height === "") {
    window.alert("入力がないと判定できません。");
} else {
    height = parseInt(height);
    if(isNaN(height)) {
        window.alert("半角数字で入力してください");
        // console.log(height + " is " + typeof(height));
    } else {
        if (height >= 100) {
            let ticket = window.confirm("プレミアムチケットを持っていますか？\n持っていれば「OK」、持っていなければ「キャンセル」をクリックしてください。");
            if (ticket === true) {
                window.alert("プレミアムシートに乗車可能です。");
            // console.log(height + " is " + typeof(height));
            } else {
                window.alert("通常のシートに乗車可能です。");
            // console.log(height + " is " + typeof(height));
            }
        } else if (height >= 90) {
            window.alert("付き添いありで乗車可能です。");
            // console.log(height + " is " + typeof(height));
        } else {
            window.alert("乗車できません。");
            // console.log(height + " is " + typeof(height));
        }
    }
}