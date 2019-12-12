import { Component, OnInit } from '@angular/core';

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

  constructor() { }

  ngOnInit() {
  }

}
