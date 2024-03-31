"use strict"

function fortuneResult() {
    let name = document.getElementById("name").value;
    let resultP = document.getElementById("resultP");
    if (name !== "") {
        resultP.textContent = name + "さんの運勢は…";
    } else {
        resultP.textContent = "あなたの運勢は…";
    }

    let result = fortuneCalc();
    let resultH1 = document.getElementById("resultH1");
    resultH1.textContent = result;

    let resultContainer = document.getElementById("resultContainer");
    resultContainer.style.border = "5px double lightgray";
}

function fortuneCalc() {
    let resultNum = Math.floor(Math.random()*7);
    let result;
    switch (resultNum) {
        case 0:
            result = "大吉";
            resultH1.className = "goldText";
            break;
        case 1:
            result = "吉";
            resultH1.className = "redText";
            break;
        case 2:
            result = "中吉";
            resultH1.className = "greenText";
            break;
        case 3:
            result = "小吉";
            resultH1.className = "blueText";
            break;
        case 4:
            result = "末吉";
            resultH1.className = "lightblueText";
            break;
        case 5:
            result = "凶";
            resultH1.className = "grayText";
            break;
        case 6:
            result = "大凶";
            resultH1.className = "darkText";
    }
    return result;
}