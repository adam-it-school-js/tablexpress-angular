import { FormGroup, FormControl, ValidationErrors } from "@angular/forms";

export function phoneNumber(control: FormControl): ValidationErrors | null {
  const value = control.value;

  // Define the regular expression pattern for a 10-digit mobile number
  const mobileNumberPattern = /^[0-9]{10}$/;

  if (!mobileNumberPattern.test(value)) {
    return { invalidMobileNumber: true };
  }

  return null;
}
