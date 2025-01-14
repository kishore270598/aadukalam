import { Component, OnInit } from '@angular/core';
import { SidebarComponent } from '../sidebar/sidebar.component';
import { Router } from '@angular/router';
import { RouterModule } from '@angular/router';
@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [SidebarComponent, RouterModule],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.css',
})
export class LayoutComponent implements OnInit {
  showSidebar: boolean = true;

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.router.events.subscribe(() => {
      // Update showSidebar based on the current route
      const currentRoute = this.router.url;
      this.showSidebar = !(
        currentRoute.includes('login') || currentRoute.includes('sign-up')
      );
    });
  }
}
