'use strict';

var mapOpJson = {
    "message0": "map %1 %2",
    "args0": [
        { "type": "field_variable", "name": "VAR", "variable": "elem", "variableTypes": [""] },
        { "type": "input_value", "name": "COLLECTION", "check": "Array" }
    ],
    "message1": "%1",
    "args1": [
        { "type": "input_statement", "name": "CLOSURE_CONTENT" }
    ],
    "message2": "yield %1",
    "args2": [
        { "type": "input_value", "name": "YIELD" }
    ],
    "output": "Array",
    "nextStatement": null,
    "colour": '%{BKY_PROCEDURES_HUE}'
}

var flatMapOpJson = {
    "message0": "flatMap %1 %2",
    "args0": [
        { "type": "field_variable", "name": "VAR", "variable": "elem", "variableTypes": [""] },
        { "type": "input_value", "name": "COLLECTION", "check": "Array" }
    ],
    "message1": "%1",
    "args1": [
        { "type": "input_statement", "name": "CLOSURE_CONTENT" }
    ],
    "message2": "yield %1",
    "args2": [
        { "type": "input_value", "name": "YIELD", "check": "Array" }
    ],
    "output": "Array",
    "nextStatement": null,
    "colour": '%{BKY_PROCEDURES_HUE}'
}

var filterOpJson = {
    "message0": "filter %1 %2",
    "args0": [
        { "type": "field_variable", "name": "VAR", "variable": "elem", "variableTypes": [""] },
        { "type": "input_value", "name": "COLLECTION", "check": "Array" }
    ],
    "message1": "%1",
    "args1": [
        { "type": "input_statement", "name": "CLOSURE_CONTENT" }
    ],
    "message2": "yield %1",
    "args2": [
        { "type": "input_value", "name": "YIELD", "check": "Boolean" }
    ],
    "output": "Array",
    "nextStatement": null,
    "colour": '%{BKY_PROCEDURES_HUE}'
}

Blockly.Blocks['map_operation'] = {
    init: function () {
        this.jsonInit(mapOpJson);
        // Assign 'this' to a variable for use in the tooltip closure below.
        var thisBlock = this;
    }
};

Blockly.Blocks['flatmap_operation'] = {
    init: function () {
        this.jsonInit(flatMapOpJson);
        // Assign 'this' to a variable for use in the tooltip closure below.
        var thisBlock = this;
    }
};

Blockly.Blocks['filter_operation'] = {
    init: function () {
        this.jsonInit(filterOpJson);
        // Assign 'this' to a variable for use in the tooltip closure below.
        var thisBlock = this;
    }
};

