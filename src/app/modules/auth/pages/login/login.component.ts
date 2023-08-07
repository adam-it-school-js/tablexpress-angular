import { Component } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { CheckFormService } from "src/app/core/services/check-form.service";

FormBuilder;
@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.scss"],
})
export class LoginComponent {
  // phone!: string;
  // password!: string;
  // rememberUser: Boolean = false;

  loginForm!: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private checkFormService: CheckFormService
  ) {
    this.loginForm = this.formBuilder.group({
      phone: ["", [Validators.required, CheckFormService.CheckPhoneNumber]],
      password: ["", Validators.required],
      rememberUser: [false],
    });
  }

  userLoginSubmit() {
    if (this.loginForm.valid) {
      console.log("Form is valid");
      console.log("Phone:", this.loginForm.value.phone);
      console.log("Password:", this.loginForm.value.password);
      console.log("Remember User:", this.loginForm.value.rememberUser);
    } else {
      console.log("Form is invalid");
    }
    return false;
  }

  isInvalidInput(name: string): boolean {
    return (
      (this.loginForm.get(name)?.invalid &&
        this.loginForm.get(name)?.touched) ||
      false
    );
  }
}
