"use strict"

let station = window.prompt("目的の駅を入力してください\n1 : A駅\n2 : B駅\n3 : C駅");
switch(station) {
    case "1":
    window.alert("快速電車が停まります。");
    break;
    case "2":
    window.alert("快速電車と急行電車が停まります。");
    break;
    case "3":
    window.alert("特急列車が停まります。");
    break;
    default:
    window.alert("その番号に対応する駅はありません。");
}