import { Component, Input } from '@angular/core';
import { ValidationErrors } from '@angular/forms';

@Component({
  selector: 'app-input-errors',
  templateUrl: './input-errors.component.html',
})
export class InputErrorsComponent {
  @Input() errors!: ValidationErrors;

  minLength: number = 8;

  get errorMessage(): string {
    const key = Object.keys(this.errors)[0];
    const messages: {[key: string]: string } = {
      required: 'This field is required.',
      minlength: `This field should have a minimum length of ${this.minLength} characters.`,
      email: 'Please enter a valid email address.',
      pattern: 'The input does not match the expected pattern.'
    };
    return messages[key];
  }
}
