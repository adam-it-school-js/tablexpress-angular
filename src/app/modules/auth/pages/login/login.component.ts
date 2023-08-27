import { Component, OnInit, OnDestroy } from "@angular/core";
import { ActivatedRoute, Params, Router } from "@angular/router";
import { Subscription } from "rxjs";
import {
  FormBuilder,
  FormGroup,
  ValidationErrors,
  Validators,
} from "@angular/forms";

import { phoneNumber } from "src/app/utils/validations/validations";
import { LoginService } from "./login.service";
import { StorageService } from "src/app/core/services/storage.service";


@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.scss"],
})
export class LoginComponent implements OnInit, OnDestroy {
  // Declare the form FormGroup
  public form!: FormGroup;
  public errors!: ValidationErrors | null;
  loginSubscription!: Subscription;

  constructor(
    private fb: FormBuilder,
    private loginService: LoginService,
    private router: Router,
    private route: ActivatedRoute,
    private storage: StorageService,

  ) {}

  ngOnInit(): void {
    this.form = this.fb.group({
      phone: [
        null,
        [Validators.required, Validators.maxLength(10), phoneNumber],
      ],
      password: [null, [Validators.required, Validators.minLength(5)]],
      rememberUser: [false],
    });

    this.route.queryParams.subscribe((params: Params) => {
      if (params["lodined"]) {
        // You are logined
      }

      // you need to be logined
    });
  }

  // Function to handle form submission
  userLoginSubmit() {
    if (this.form.invalid) {
      return this.form.markAllAsTouched();
    }
    this.form.disable();

    console.log(this.form.value);

    this.loginSubscription = this.loginService.login(this.form.value).subscribe(
      (data) => {
        console.log("loginned :>> ", data.token);

        this.storage.saveToken(data.token)

        this.router.navigate(["/"]);
      },
      (error) => {
        console.warn("error login", error);
        this.form.enable();
      }
    );
  }

  ngOnDestroy(): void {
    if (this.loginSubscription) {
      this.loginSubscription.unsubscribe();
    }
  }
}
