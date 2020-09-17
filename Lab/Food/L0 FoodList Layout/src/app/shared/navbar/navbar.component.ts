import { Component, OnInit } from '@angular/core';
import { MenuService } from '../menu.service';
import { NavItem } from './navItem';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  constructor(private ms: MenuService) {}

  navItems: NavItem[];

  ngOnInit() {
    this.navItems = [
      { title: 'Home', url: '/' },
      { title: 'Cars', url: '/car' },
      { title: 'Admin', url: '/admin' },
    ];
  }
}
