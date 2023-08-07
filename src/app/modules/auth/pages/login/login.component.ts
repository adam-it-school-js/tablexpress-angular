import { Component } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { CheckFormService } from "src/app/core/services/check-form.service";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.scss"],
})
export class LoginComponent {
  // Declare the loginForm FormGroup
  loginForm!: FormGroup;

  // Define formFields array with input field details
  formFields = [
    {
      name: "phone",
      label: "Phone&nbspnumber",
      type: "text",
      error: "Phone number is required and should be valid.",
    },
    {
      name: "password",
      label: "Password",
      type: "password",
      error: "Password is required.",
    },
  ];

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

  // Function to handle form submission
  userLoginSubmit(): boolean {
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

  // Function to check if an input field is invalid and touched
  isInvalidInput(name: string): boolean {
    return (
      (this.loginForm.get(name)?.invalid &&
        this.loginForm.get(name)?.touched) ||
      false
    );
  }
}
