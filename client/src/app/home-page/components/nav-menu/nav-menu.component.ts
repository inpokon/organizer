import {Component, OnInit, ViewEncapsulation} from '@angular/core';

@Component({
  selector: 'app-nav-menu',
  templateUrl: './nav-menu.component.html',
  styleUrls: ['./nav-menu.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class NavMenuComponent implements OnInit {

  menu = [
    {name: 'Мои работы', link: '/works'},
    {name: 'Обо мне', link: '/about'},
    //{name: 'Контакты', link: '/contacts'}
  ];

  constructor() { }

  ngOnInit() {

  }

}
