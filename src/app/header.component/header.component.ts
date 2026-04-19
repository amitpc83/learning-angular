import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NgbCollapseModule, NgbNav, NgbNavItem, NgbNavOutlet } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-header',
  imports: [NgbCollapseModule, RouterModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent {
  isCollapsed = true;
}
