"use strict";
/******************************************************************************
 * This file was generated by langium-cli 0.5.0.
 * DO NOT EDIT MANUALLY!
 ******************************************************************************/
Object.defineProperty(exports, "__esModule", { value: true });
exports.HelloWorldGeneratedModule = exports.HelloWorldGeneratedSharedModule = exports.HelloWorldLanguageMetaData = void 0;
const ast_1 = require("./ast");
const grammar_1 = require("./grammar");
exports.HelloWorldLanguageMetaData = {
    languageId: 'hello-world',
    fileExtensions: ['.hello'],
    caseInsensitive: false
};
exports.HelloWorldGeneratedSharedModule = {
    AstReflection: () => new ast_1.HelloWorldAstReflection()
};
exports.HelloWorldGeneratedModule = {
    Grammar: () => (0, grammar_1.HelloWorldGrammar)(),
    LanguageMetaData: () => exports.HelloWorldLanguageMetaData,
    parser: {}
};
//# sourceMappingURL=module.js.map