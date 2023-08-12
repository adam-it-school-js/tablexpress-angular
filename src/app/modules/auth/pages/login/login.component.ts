import { Component } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { CheckFormService } from "src/app/core/services/check-form.service";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.scss"],
})
export class LoginComponent {
  // Declare the form FormGroup
  form!: FormGroup;

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
    this.form = this.formBuilder.group({
      phone: ["", [Validators.required, CheckFormService.CheckPhoneNumber]],
      password: ["", Validators.required],
      rememberUser: [false],
    });
  }

  // Function to handle form submission
  userLoginSubmit(): boolean {
    if (this.form.valid) {
      console.log("Form is valid");
      console.log("Phone:", this.form.value.phone);
      console.log("Password:", this.form.value.password);
      console.log("Remember User:", this.form.value.rememberUser);
    } else {
      console.log("Form is invalid");
    }

    return false;
  }

  // Function to check if an input field is invalid and touched
  isInvalidInput(name: string): boolean {
    return (
      (this.form.get(name)?.invalid &&
        this.form.get(name)?.touched) ||
      false
    );
  }
}
