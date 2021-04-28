Blockly.JavaScript['map_operation'] = function (block) {
    //let closureVar = block.getFieldValue('VAR');
    let closureVar = Blockly.JavaScript.variableDB_.getName(
        block.getFieldValue('VAR'), Blockly.Variables.NAME_TYPE);    
    let collection = Blockly.JavaScript.valueToCode(
        block, 'COLLECTION', Blockly.JavaScript.ORDER_NONE);
    let closureContent = Blockly.JavaScript.statementToCode(
        block, 'CLOSURE_CONTENT') || "";
    let yieldVal = Blockly.JavaScript.valueToCode(
        block, 'YIELD', Blockly.JavaScript.ORDER_NONE);
    var code = '(' + collection + ').map(' + closureVar + ' => {' +
        closureContent + 'return ' + yieldVal + '; })';
    return [code, Blockly.JavaScript.ORDER_FUNCTION_CALL];
};

Blockly.JavaScript['flatmap_operation'] = function (block) {
    //let closureVar = block.getFieldValue('VAR');
    let closureVar = Blockly.JavaScript.variableDB_.getName(
        block.getFieldValue('VAR'), Blockly.Variables.NAME_TYPE);
    let collection = Blockly.JavaScript.valueToCode(
        block, 'COLLECTION', Blockly.JavaScript.ORDER_NONE);
    let closureContent = Blockly.JavaScript.statementToCode(
        block, 'CLOSURE_CONTENT') || "";
    let yieldVal = Blockly.JavaScript.valueToCode(
        block, 'YIELD', Blockly.JavaScript.ORDER_NONE);
    var code = '(' + collection + ').flatMap(' + closureVar + ' => {' +
        closureContent + 'return ' + yieldVal + '; })';
    return [code, Blockly.JavaScript.ORDER_FUNCTION_CALL];
};

Blockly.JavaScript['filter_operation'] = function (block) {
    //let closureVar = block.getFieldValue('VAR');
    let closureVar = Blockly.JavaScript.variableDB_.getName(
        block.getFieldValue('VAR'), Blockly.Variables.NAME_TYPE);
    let collection = Blockly.JavaScript.valueToCode(
        block, 'COLLECTION', Blockly.JavaScript.ORDER_NONE);
    let closureContent = Blockly.JavaScript.statementToCode(
        block, 'CLOSURE_CONTENT') || "";
    let yieldVal = Blockly.JavaScript.valueToCode(
        block, 'YIELD', Blockly.JavaScript.ORDER_NONE);
    var code = '(' + collection + ').filter(' + closureVar + ' => {' +
        closureContent + 'return ' + yieldVal + '; })';
    return [code, Blockly.JavaScript.ORDER_FUNCTION_CALL];
};