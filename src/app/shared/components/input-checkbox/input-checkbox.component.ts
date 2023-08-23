import {
  Component,
  Input,
  ChangeDetectionStrategy,
  Optional,
  Self,
} from "@angular/core";
import { ControlValueAccessor, NgControl } from "@angular/forms";

@Component({
  selector: "app-input-checkbox",
  templateUrl: "./input-checkbox.component.html",
  styleUrls: ["./input-checkbox.component.scss"],
  changeDetection: ChangeDetectionStrategy.Default,
})
export class InputCheckboxComponent implements ControlValueAccessor {
  @Input() name!: string;
  @Input() label!: string;

  isChecked: boolean = false;

  constructor(@Self() @Optional() public ngControl: NgControl) {
    if (this.ngControl) {
      this.ngControl.valueAccessor = this;
    }
  }

  toggleCheckbox() {
    this.isChecked = !this.isChecked;
    this.onChange(this.isChecked);
  }

  writeValue(value: any): void {
    if (typeof value === "boolean") {
      this.isChecked = value;
    }
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouch = fn;
  }

  // Placeholder functions
  onChange: any = () => {};
  onTouch: any = () => {};
}
