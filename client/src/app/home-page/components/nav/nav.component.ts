import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {Router} from "@angular/router";
import {ViewportScroller} from "@angular/common";

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {

  @ViewChild('experience') experience: ElementRef;
  navList = [
    {code: 'experience', name: 'Опыт работы и обучение'},
    {code: 'works', name: 'Портфолио'},
    {code: 'skills', name: 'Навыки'},
    {code: 'footer', name: 'Контакты'},
  ];

  isHome: boolean = true;

  isBurger: boolean = false;

  openBurger: boolean = false;

  constructor(private router: Router, private viewportScroller: ViewportScroller) { }

  ngOnInit() {
    const windowWidth = window.screen.width;
    if (this.router.url !== '/' && this.router.url[1] !== '#') this.isHome = false;
    if (windowWidth <= 1199) this.isBurger = true;
  }

  onClickItemMenu = (id) => {
    const element = document.getElementById(id);
    element.scrollIntoView({behavior: 'smooth'});
    this.openBurger = false;
  };

  onClickBurger = () => {
    this.openBurger = !this.openBurger;
  }

}
