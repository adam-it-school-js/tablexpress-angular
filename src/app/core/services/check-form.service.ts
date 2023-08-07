import { Injectable } from "@angular/core";
import { AbstractControl, ValidationErrors } from "@angular/forms";

@Injectable({
  providedIn: "root",
})
export class CheckFormService {
  constructor() {}

  static CheckPhoneNumber(control: AbstractControl): ValidationErrors | null {
    // phone number is 10 length
    const phoneNumberPattern = /^\d{10}$/;

    if (!control.value || !phoneNumberPattern.test(control.value)) {
      return { phoneNumber: true };
    }

    return null;
  }
}
