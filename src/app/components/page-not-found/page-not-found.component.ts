import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-page-not-found',
  templateUrl: './page-not-found.component.html',
  styleUrl: './page-not-found.component.scss'
})
export class PageNotFoundComponent implements OnInit {

  constructor(private readonly router: Router) {
  }

  ngOnInit() {
    setTimeout(() => {
      this.router.navigateByUrl('/');
    }, 
      5000);
  }
}
