import { Component } from "@angular/core";
import {
  FormBuilder,
  FormGroup,
  ValidationErrors,
  Validators,
} from "@angular/forms";
import { phoneNumber } from "src/app/utils/validations/validations";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.scss"],
})
export class LoginComponent {
  // Declare the form FormGroup
  public form!: FormGroup;
  public errors!: ValidationErrors | null;

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      phone: [
        null,
        [
          Validators.required,
          Validators.minLength(10),
          Validators.maxLength(10),
          phoneNumber,
        ],
      ],
      password: [null, [Validators.required, Validators.minLength(5)]],
      rememberUser: [false],
    });
  }

  getErrorsAsAString(field: string): string {
    const errors = this.form.get(field)?.errors;
    return JSON.stringify(errors);
  }

  // Function to handle form submission
  userLoginSubmit(): boolean {
    if (this.form.valid) {
      console.log("Form is valid");
      console.log("Phone:", this.form.value.phone);
      console.log("Password:", this.form.value.password);
      console.log("Remember User:", this.form.value.rememberUser);
    } else {
      console.log("Form is invalid", this.errors);
    }

    return false;
  }
}
