import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrl: './user.component.scss'
})
export class UserComponent {

  constructor(private readonly router: Router,
    private readonly messageService: MessageService) { }

  handleErrors(error: any) {
    this.messageService.add({ severity: 'error', summary: 'Error:', detail: error });
  }
  handleSuccessfulLogin(data: any) {
    this.messageService.clear();
    sessionStorage.setItem('authenticatedUserToken', data.token);
    sessionStorage.setItem('authenticatedUser', data.username);
    sessionStorage.setItem('email', data.email);
    sessionStorage.setItem('roles', data.roles);
    this.router.navigateByUrl('/');
  }

}
