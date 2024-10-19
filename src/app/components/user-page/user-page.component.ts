import { Component } from '@angular/core';
import { LoginComponent } from '../login/login.component';
import { NavbarComponent } from '../navbar/navbar.component';
@Component({
  selector: 'app-user-page',
  standalone: true,
  imports: [LoginComponent, NavbarComponent],
  templateUrl: './user-page.component.html',
  styleUrl: './user-page.component.css',
})
export class UserPageComponent {}
