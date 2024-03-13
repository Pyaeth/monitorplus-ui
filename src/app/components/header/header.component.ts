import { Component, Input } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { User } from 'src/app/models/user.model';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  @Input()
  protected user: User = new User();
  items: MenuItem[] | undefined;

  ngOnInit() {
    this.items = [
      {
        label: '', //settings
        icon: 'pi-cog',
        items: [
          {
            label: 'Profile',
            icon: 'pi-user-edit'
          }
        ]
      },      
      {
        label: '', //add new record
        icon: 'pi pi-fw pi-plus',
      },
      {
        label: '', //dashboard
        icon: 'pi pi-fw pi-th-large'
      },
      {
        label: '', //logout
        icon: 'pi pi-fw pi-power-off'
      }
    ];
  }
}
