import { Component } from '@angular/core';
import { LoginComponent } from '../login/login.component';
import { NavbarComponent } from '../navbar/navbar.component';
import { ActivatedRoute } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css',
})
export class SidebarComponent {
  constructor(private route: ActivatedRoute) {}
  name = '';
  ngOnInit() {
    // Retrieve the username from the query parameters
    this.route.queryParams.subscribe((params) => {
      this.name = params['username'];
    });
  }
}
