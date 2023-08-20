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
          Validators.maxLength(10),
          phoneNumber,
        ],
      ],
      password: [null, [Validators.required, Validators.minLength(5)]],
      rememberUser: [false],
    });
  }

  // Function to handle form submission
  userLoginSubmit() {
    if (this.form.invalid) {
      return this.form.markAllAsTouched()
    }

    console.log(this.form.value)

    return false;
  }
}
