'use strict';

let workspace = null;

function start() {
    // Create main workspace.
    workspace = Blockly.inject('blocklyDiv',
        {
            toolbox: document.getElementById('toolbox-categories'),
        });
}

function codeGen() {
    let code = Blockly.JavaScript.workspaceToCode(workspace);
    document.getElementById('gen_result').value = code;
    let result = eval(code)
    document.getElementById('eval_result').value = result;
}