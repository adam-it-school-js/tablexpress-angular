import {
  AbstractControl,
  ValidationErrors,
  FormGroup,
  ValidatorFn,
} from "@angular/forms";

export function matchPassword(password: string, confirmPassword: string) {
  return (formGroup: FormGroup) => {
    const control = formGroup.controls[password];
    const matchingControl = formGroup.controls[confirmPassword];
    if (!control.value && !matchingControl.value) return;
    if (control.value !== matchingControl.value) {
      matchingControl.setErrors({ matchPassword: true });
    } else {
      matchingControl.setErrors(null);
    }
  };
}

export function requireFieldIfOntherFieldSelected(
  param1: string,
  param2: string
) {
  return (formGroup: FormGroup) => {
    const controll1 = formGroup.controls[param1];
    const controll2 = formGroup.controls[param2];
    if (controll1?.value && !controll2?.value) {
      controll2.setErrors({ required: true });
    } else controll2.setErrors(null);
  };
}
