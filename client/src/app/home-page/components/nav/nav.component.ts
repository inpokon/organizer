import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {

  navList = [
    {code: 'about', name: 'Обо мне'},
    {code: 'workExperience', name: 'Опыт работы'},
    {code: 'portfolio', name: 'Портфолио'},
    {code: 'skills', name: 'Навыки'},
    {code: 'contact', name: 'Контакты'},
  ];

  constructor() { }

  ngOnInit() {
  }

}
