import { Component, EventEmitter, Output } from '@angular/core';
import { Component, EventEmitter, Output } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { HttpService } from 'src/app/services/http.service';
import { CustomFormGroup } from 'src/app/utility/custom-form-group';

@Component({
  selector: 'app-new-user',
  templateUrl: './new-user.component.html',
  styleUrl: './new-user.component.scss'
})
export class NewUserComponent {
  @Output()
  onSuccessLogon!: EventEmitter<any>;
  @Output()
  onFailedLogon!: EventEmitter<any>;

  form: CustomFormGroup;
  loading = false;

  constructor(private readonly authenticationService: AuthenticationService,
    private readonly router: Router) {
    this.form = new CustomFormGroup({
      username: new FormControl('', [Validators.required, Validators.minLength(6), Validators.maxLength(20)]),
      email: new FormControl('', [Validators.required, Validators.email, Validators.maxLength(50), Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')]),
      newUserPassword: new FormControl('', [Validators.required, Validators.minLength(8), Validators.maxLength(32)])
    });
  }

  onCreateNewUser() {
    this.loading = true;
    this.authenticationService.createUser(this.form.get('username')!.value, this.form.get('email')!.value, this.form.get('newUserPassword')!.value)
    .subscribe({
      next: (data) => this.onSuccessLogon.emit(data),
      error: (err: any)  => this.handleErrors(err)
    });
  }

  handleErrors(err: any) {
    this.loading = false;
    this.onFailedLogon.emit(err);
  }
}
