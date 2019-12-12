import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {

  navList = [
    {code: 'experience', name: 'Опыт работы и обучение'},
    {code: 'works', name: 'Портфолио'},
    {code: 'skills', name: 'Навыки'},
    {code: 'contact', name: 'Контакты'},
  ];

  isHome: boolean = true;

  constructor(public router: Router) { }

  ngOnInit() {
    if (this.router.url !== '/') {
      this.isHome = false;
    }
  }

}
