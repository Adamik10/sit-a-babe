import { FormControl } from "@angular/forms";
import { Observable } from "rxjs/internal/Observable";

export class customFormValidators {
    forbiddenPasswords = ["Password123", "Password12", "Password1", "Secret123", "Secret12", "Secret1", "Pass123", "Pass12", "Pass1", "Pw123", "Pw12", "Pw1"];

    forbiddenPasswordsValidator(control: FormControl): { [s: string]: boolean } {
        if (this.forbiddenPasswords.indexOf(control.value) !== -1) {
            return { passwordIsForbidden: true };
        }
        return null;
    }

    forbiddenEmailsValidator(control: FormControl): Promise<any> | Observable<any> {
        const promise = new Promise<any>((resolve, reject) => {
            setTimeout(() => {
                if(control.value === 'adoantal@gmail.com'){
                    resolve({'emailIsForbidden':true});
                }else{
                    resolve(null);
                }
            }, 1500)
        });
        return promise;
    }
}