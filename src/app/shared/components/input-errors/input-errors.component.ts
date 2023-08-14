import { Component, Input } from "@angular/core";
import { ValidationErrors } from "@angular/forms";

@Component({
  selector: "app-input-errors",
  templateUrl: "./input-errors.component.html",
})
export class InputErrorsComponent {
  @Input() errors!: ValidationErrors | null | undefined;

  private minLength: number = 5;
  private maxLength: number = 10;

  get errorMessage(): string {
    console.log("this.errors :>> ", this.errors);
    if (!this.errors) {
      return "";
    }

    const key = Object.keys(this.errors)[0];
    
    const defaultMessage = "This field has an error.";
    const messages: { [key: string]: string } = {
      required: "This field is required.",
      minlength: `This field should have a minimum length of ${this.minLength} characters.`,
      maxlength: `This field should have a maximum length of ${this.maxLength} characters.`,
      email: "Please enter a valid email address.",
      pattern: "The input does not match the expected pattern.",
    };

    console.log("messages[key] :>> ", messages[key]);
    return messages[key] || defaultMessage;
  }
}
