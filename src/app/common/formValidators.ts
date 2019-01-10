import { FormControl } from "@angular/forms";

export class customFormValidators {
    forbiddenPasswords = ["Password123", "Password12", "Password1", "Secret123", "Secret12", "Secret1", "Pass123", "Pass12", "Pass1", "Pw123", "Pw12", "Pw1"];

    forbiddenPasswordsValidator(control: FormControl): { [s: string]: boolean } {
        if (this.forbiddenPasswords.indexOf(control.value) !== -1) {
            return { passwordIsForbidden: true };
        }
        return null;
    }
}