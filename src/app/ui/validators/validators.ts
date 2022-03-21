import {AbstractControl, ValidationErrors, ValidatorFn} from '@angular/forms';

export class CustomValidators {

  static passwordValidator(): ValidatorFn {

    return (control: AbstractControl): ValidationErrors | null => {

      const text = control.value;

      if (!text) {
        return null;
      }

      const hasUpperCase = (value: string) => /[a-z]+/.test(value);
      const hasLowerCase = (value: string) => /[A-Z]+/.test(value);
      const hasNumber = (value: string) => /[0-9]+/.test(value);

      if (hasUpperCase(text) && hasLowerCase(text) && hasNumber(text) && text.length > 7) {
        return null;
      } else {
        return {passwordValid: true};
      }

    };

  }

  static mustMatch(index: string): ValidatorFn {

    return (control: AbstractControl): ValidationErrors | null => {

      const text = control.value;

      if (!text) {
        return null;
      } else if (control.parent && control.parent.value[index] === text) {
        return null;
      } else {
        return {confirmPasswordValid: true};
      }

    };

  }

}
