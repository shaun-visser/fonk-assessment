import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  menuItems: any[] = [
    {
      label: 'Services',
      link: '#',
      class: 'a-menu-item',
    },
    {
      label: 'Work',
      link: '#',
      class: 'a-menu-item',
    },
    {
      label: 'Team',
      link: '#',
      class: 'a-menu-item',
    },
    {
      label: 'Contact',
      link: '/contact',
      class: 'a-btn _secondary',
    },
  ];

  ngOnInit(): void {}
}
