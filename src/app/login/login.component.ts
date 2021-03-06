import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(protected router: Router) { }

  ngOnInit(): void {
  }

  goToProducts(): void {
    this.router.navigateByUrl('products');
  }
}
