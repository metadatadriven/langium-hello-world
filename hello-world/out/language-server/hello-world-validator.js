"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HelloWorldValidator = exports.HelloWorldValidationRegistry = void 0;
const langium_1 = require("langium");
/**
 * Registry for validation checks.
 */
class HelloWorldValidationRegistry extends langium_1.ValidationRegistry {
    constructor(services) {
        super(services);
        const validator = services.validation.HelloWorldValidator;
        const checks = {
            Person: validator.checkPersonStartsWithCapital
        };
        this.register(checks, validator);
    }
}
exports.HelloWorldValidationRegistry = HelloWorldValidationRegistry;
/**
 * Implementation of custom validations.
 */
class HelloWorldValidator {
    checkPersonStartsWithCapital(person, accept) {
        if (person.name) {
            const firstChar = person.name.substring(0, 1);
            if (firstChar.toUpperCase() !== firstChar) {
                accept('warning', 'Person name should start with a capital.', { node: person, property: 'name' });
            }
        }
    }
}
exports.HelloWorldValidator = HelloWorldValidator;
//# sourceMappingURL=hello-world-validator.js.map