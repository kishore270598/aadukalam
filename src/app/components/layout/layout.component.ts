import { Component, OnInit } from '@angular/core';
import { SidebarComponent } from '../sidebar/sidebar.component';
import { Router } from '@angular/router';
import { RouterModule } from '@angular/router';
import { NgModel } from '@angular/forms';
import { NgIf } from '@angular/common';
@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [SidebarComponent, RouterModule, NgIf],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.css',
})
export class LayoutComponent implements OnInit {
  showSidebar: boolean = true;
  homepage: boolean = true;
  constructor(private router: Router) {}
  ngOnInit(): void {
    this.router.events.subscribe(() => {
      // Update showSidebar based on the current route
      console.log('LAYOUT');
      const currentRoute = this.router.url;
      this.showSidebar = !(
        currentRoute.includes('login') || currentRoute.includes('sign-up')
      );
    });
    console.log('yes', this.showSidebar);
    this.router.navigate(['booking']);
  }
}
