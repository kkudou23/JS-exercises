"use strict"

function loadWordInput() {
    let wordValue = document.getElementById("wordInput").value;
    let result = document.getElementById("result");
    if (wordValue === "") {
        window.alert("一文字以上入力してください");
    } else {
        result.textContent = wordValue;
    }
}

function dela() {
    loadWordInput()
    result.className = "dela-style"
}

function dot() {
    loadWordInput()
    result.className = "dot-style"
}

function kaisei() {
    loadWordInput()
    result.className = "kaisei-style"
}

function tagomin() {
    loadWordInput()
    result.className = "tagomin-style"
}

function rampart() {
    loadWordInput()
    result.className = "rampart-style"
}

function rocknRoll() {
    loadWordInput()
    result.className = "rocknRoll-style"
}

function original() {
    loadWordInput()
    result.className = ""
}