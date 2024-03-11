import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { HttpService } from '../../services/http.service';
import { CustomFormGroup } from 'src/app/utility/custom-form-group';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent implements OnInit, OnDestroy {
  isPasswordResetRequested = false;
  loading = false;
  loginByUsername = false;

  loginForm: CustomFormGroup;

  constructor(private readonly httpService: HttpService) {
    this.loginForm = new CustomFormGroup({
      username: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required, Validators.minLength(8), Validators.maxLength(16)])
    });
  }

  ngOnInit() {
    
  }

  onPasswordReset() {
    this.isPasswordResetRequested = true;
  }

  onLogin() {
    this.loading = true;
    this.httpService.requestLogin(this.loginForm.get('username')?.value, this.loginForm.get('password')?.value)
    .subscribe({
      next: (data) => this.loading = false,
        error: (err) => this.handleError(err),
        complete: () => {}
      });
  }

  private handleError(error: any) {
    console.log(error);
  }

  isReadyForSubmit() {
    return this.loginForm ? !this.loginForm.valid : false;
  }

  ngOnDestroy(): void {
    
  }
}
