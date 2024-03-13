import { Component, EventEmitter, OnDestroy, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { CustomFormGroup } from 'src/app/utility/custom-form-group';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { Message, MessageService } from 'primeng/api';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent implements OnInit, OnDestroy {
  @Output()
  onSuccessLogon: EventEmitter<any> = new EventEmitter();
  @Output()
  onFailedLogon: EventEmitter<any> = new EventEmitter();
  
  isPasswordResetRequested = false;
  loading = false;
  loginByUsername = false;

  loginForm: CustomFormGroup;

  constructor(private readonly authenticationService: AuthenticationService,
    private readonly messageService: MessageService,
    private readonly router: Router) {
    this.loginForm = new CustomFormGroup({
      username: new FormControl('', [Validators.required, Validators.minLength(6), Validators.maxLength(20)]),
      password: new FormControl('', [Validators.required, Validators.minLength(8), Validators.maxLength(32)])
    });
  }

  ngOnInit() {
    
  }

  onPasswordReset() {
    this.isPasswordResetRequested = true;
  }

  onLogin() {
    this.loading = true;
    this.authenticationService.getValidLogin(this.loginForm.get('username')?.value, this.loginForm.get('password')?.value)
    .subscribe({
      next: (data) => this.onValidLogin(data),
        error: (err) => this.handleError(err),
        complete: () => {}
      });
  }

  private onValidLogin(data: any) {
    this.loading = false;
    this.onSuccessLogon.emit(data);
  }

  private handleError(error: any) {
    this.onFailedLogon.emit(error);
  }

  isReadyForSubmit() {
    return this.loginForm ? !this.loginForm.valid : false;
  }

  ngOnDestroy(): void {
    
  }
}
