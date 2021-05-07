'use strict';

let workspace = null;
let isLogin = false;

function start() {
    // Create main workspace.
    workspace = Blockly.inject('blocklyDiv',
        {
            toolbox: document.getElementById('toolbox-categories'),
        });
    if (checkCookie()) {
        loginButton.value = "Logout";
    }
    else {
        loginButton.value = "Login";
    }
}

function codeGen() {
    let code = Blockly.JavaScript.workspaceToCode(workspace);
    document.getElementById('gen_result').value = code;
    let result = eval(code);
    document.getElementById('eval_result').value = result;
}

function loginClick() {
    if (loginButton.value == "Login")
        location.replace("/login.html");
    else {
        setCookie("username", "", 0);
        location.reload();
    }
}

function saveButton() {
    let xml = Blockly.Xml.workspaceToDom(workspace);
    var xml_text = Blockly.Xml.domToText(xml);
    fetch('fjapi/Save', {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            'username': getCookie("username"),
            'email': "",
            'xml': btoa(xml_text)
        })
    })
        .then(response => {
            let status = response.status;
            if (status == 200)
                alert("saved file");
            else
                alert(response.statusText);
        })
        .catch(error => console.error('Unable to login', error));
}

function loadButton() {
    fetch('fjapi/Load', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            'username': getCookie("username"),
            'email': ""
        })
    })
        .then(response => {
            let status = response.status;
            if (status == 200) {
                response.text().then(txt => {
                    let text = atob(txt);
                    var xml = Blockly.Xml.textToDom(text);
                    Blockly.Xml.domToWorkspace(xml, workspace);
                });
                alert("loaded file");
            }
            else
                alert(response.statusText);
        })
        .catch();
}

function setCookie(cname, cvalue, exdays) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
    var expires = "expires=" + d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

function checkCookie() {
    let user = getCookie("username");
    if (user != "") {
        return true;
    }
    return false;
}

function getCookie(cname) {
    var name = cname + "=";
    var decodedCookie = decodeURIComponent(document.cookie);
    var ca = decodedCookie.split(';');
    for (var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}