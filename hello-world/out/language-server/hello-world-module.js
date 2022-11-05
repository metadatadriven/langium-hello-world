"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createHelloWorldServices = exports.HelloWorldModule = void 0;
const langium_1 = require("langium");
const module_1 = require("./generated/module");
const hello_world_validator_1 = require("./hello-world-validator");
/**
 * Dependency injection module that overrides Langium default services and contributes the
 * declared custom services. The Langium defaults can be partially specified to override only
 * selected services, while the custom services must be fully specified.
 */
exports.HelloWorldModule = {
    validation: {
        ValidationRegistry: (services) => new hello_world_validator_1.HelloWorldValidationRegistry(services),
        HelloWorldValidator: () => new hello_world_validator_1.HelloWorldValidator()
    }
};
/**
 * Create the full set of services required by Langium.
 *
 * First inject the shared services by merging two modules:
 *  - Langium default shared services
 *  - Services generated by langium-cli
 *
 * Then inject the language-specific services by merging three modules:
 *  - Langium default language-specific services
 *  - Services generated by langium-cli
 *  - Services specified in this file
 *
 * @param context Optional module context with the LSP connection
 * @returns An object wrapping the shared services and the language-specific services
 */
function createHelloWorldServices(context) {
    const shared = (0, langium_1.inject)((0, langium_1.createDefaultSharedModule)(context), module_1.HelloWorldGeneratedSharedModule);
    const HelloWorld = (0, langium_1.inject)((0, langium_1.createDefaultModule)({ shared }), module_1.HelloWorldGeneratedModule, exports.HelloWorldModule);
    shared.ServiceRegistry.register(HelloWorld);
    return { shared, HelloWorld };
}
exports.createHelloWorldServices = createHelloWorldServices;
//# sourceMappingURL=hello-world-module.js.map