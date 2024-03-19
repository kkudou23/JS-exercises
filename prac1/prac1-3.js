"use strict"

let answer = Math.floor(Math.random()*100+1);
console.log(answer);
let number = parseInt(window.prompt("数当てゲーム！数字を入力してください。"));
while (number !== answer) {
    if (number > answer) {
        window.alert("残念！もっと小さいです！");
        number = parseInt(window.prompt("数字を入力してください。"));
    }　else if (number < answer) {
        window.alert("残念！もっと大きいです！");
        number = parseInt(window.prompt("数字を入力してください。"));
    }
}
window.alert("あたり！正解は" + answer + "でした");