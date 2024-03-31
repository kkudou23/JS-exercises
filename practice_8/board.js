"use strict"

let messageCounter = 1;

function postMessage() {
    let name = document.getElementById("name").value;
    let nameInput = document.getElementById("name");
    let content = document.getElementById("content").value;
    let contentTextarea = document.getElementById("content");
    let messageContainer = document.getElementById("messageContainer");

    if (content === "") {
        alert("投稿内容が空欄です！");
        return;
    } else {
        if (name === "") {
            name = "名無しさん";
        }
    
        const createContent = document.createElement("dd");
        createContent.textContent = content;
        messageContainer.prepend(createContent);

        let nameDisplay = name.replace(/</g, '&lt;');
        const postTime = new Date();
        let information = `${messageCounter} : <b>${nameDisplay}</b> : ${postTime.toLocaleString()}`;
        const createName = document.createElement("dt");
        createName.innerHTML = information;
        messageContainer.prepend(createName);
    
        messageCounter++;
    
        nameInput.value = "";
        contentTextarea.value = "";
    }
}