import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { HttpService } from 'src/app/services/http.service';
import { CustomFormGroup } from 'src/app/utility/custom-form-group';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrl: './user-details.component.scss'
})
export class UserDetailsComponent implements OnInit {
  form: CustomFormGroup;
  currencies: any;

  constructor(private readonly httpService: HttpService) {
    this.form = new CustomFormGroup({
      firstName: new FormControl('', Validators.required),
      lastName: new FormControl('', Validators.required),
      email: new FormControl('', [Validators.required, Validators.email, Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')]),
      currency: new FormControl('', [Validators.required, Validators.minLength(3), Validators.maxLength(3)])
    });
  }

  ngOnInit() {
    this.httpService.getAvailableCurrencies().subscribe({
      next: (data: any) => this.currencies = data
    });
  }
}
