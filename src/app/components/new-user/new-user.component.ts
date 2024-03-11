import { Component, EventEmitter, Output } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpService } from 'src/app/services/http.service';
import { CustomFormGroup } from 'src/app/utility/custom-form-group';

@Component({
  selector: 'app-new-user',
  templateUrl: './new-user.component.html',
  styleUrl: './new-user.component.scss'
})
export class NewUserComponent {
  form: CustomFormGroup;
  @Output()
  onSuccessLogon!: EventEmitter<any>;

  constructor(private readonly httpService: HttpService,
    private readonly router: Router) {
    this.form = new CustomFormGroup({
      email: new FormControl('', [Validators.required, Validators.email, Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')]),
      newUserPassword: new FormControl('', [Validators.required, Validators.minLength(8), Validators.maxLength(16)])
    });
  }

  onCreateNewUser() {
    this.httpService.registerNewUser(this.form.get('email')!.value, this.form.get('newUserPassword')!.value)
    .subscribe({
      next: () => {
        this.router.navigateByUrl('/dashboard');
      },
      error: (err: any)  => this.handleErrors(err)
    });
  }

  handleErrors(err: any) {

  }
}
