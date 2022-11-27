import { ValidatorFn, AbstractControl, ValidationErrors } from "@angular/forms";

export function authorValidator(): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      const regex = new RegExp('^[a-zA-Z0-9_ ]*$');
      const valid = regex.test(control.value);
  
      return valid ? null : { name: true };
    };
  }
