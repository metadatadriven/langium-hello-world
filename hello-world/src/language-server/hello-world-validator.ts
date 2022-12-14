import { ValidationAcceptor, ValidationChecks, ValidationRegistry } from 'langium';
import { HelloWorldAstType, Person } from './generated/ast';
import type { HelloWorldServices } from './hello-world-module';

/**
 * Registry for validation checks.
 */
export class HelloWorldValidationRegistry extends ValidationRegistry {
    constructor(services: HelloWorldServices) {
        super(services);
        const validator = services.validation.HelloWorldValidator;
        const checks: ValidationChecks<HelloWorldAstType> = {
            Person: validator.checkPersonStartsWithCapital
        };
        this.register(checks, validator);
    }
}

/**
 * Implementation of custom validations.
 */
export class HelloWorldValidator {

    checkPersonStartsWithCapital(person: Person, accept: ValidationAcceptor): void {
        if (person.name) {
            const firstChar = person.name.substring(0, 1);
            if (firstChar.toUpperCase() !== firstChar) {
                accept('warning', 'Person name should start with a capital.', { node: person, property: 'name' });
            }
        }
    }

}
