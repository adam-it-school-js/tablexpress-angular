import {
  Component,
  Input,
  Output,
  EventEmitter,
  ChangeDetectionStrategy,
  OnInit,
  Optional,
  Self,
} from "@angular/core";
import { ControlValueAccessor, NgControl } from "@angular/forms";

@Component({
  selector: "app-input-text",
  templateUrl: "./input-text.component.html",
  styleUrls: ["./input-text.component.scss"],
  changeDetection: ChangeDetectionStrategy.Default
})
export class InputTextComponent {
  @Output() focus: EventEmitter<FocusEvent> = new EventEmitter();
  @Output() blur: EventEmitter<FocusEvent> = new EventEmitter();
  @Input() showPassword: boolean = false;
  @Input() title!: string;
  @Input() disabled: boolean = false;
  @Input() placeholder!: string;
  @Input() type!: string;
  @Input() width!: string;
  @Input() height!: string;
  @Input() isBorder: boolean = false;

  private innerValue!: string;

  constructor(@Self() @Optional() public ngControl: NgControl) {
    ngControl.valueAccessor = this;
  }

  ngOnInit(): void {}

  get hasError(): boolean {
    return !!(
      this.ngControl.control?.touched && this.ngControl.control?.invalid
    );
  }

  get value(): string{
    return this.innerValue;
  }

  set value(value: string){
    this.writeValue(value)
    this.onChange(value)
    this.onTouch(value)
  }

  public writeValue(value: string): void{
    if(value !== this.innerValue) {
      this.innerValue = value;
    }
  }

  public registerOnChange(fn: any): void{
    this.onChange = fn;
  }

  public registerOnTouched(fn: any): void{
    this.onTouch = fn;
  }

  public setDisabledState(isDisabled: boolean): void{
    this.disabled = isDisabled;
  }

  // For eslint
  public onChange: any = () => {};
  public onTouch: any = () => {};
}
