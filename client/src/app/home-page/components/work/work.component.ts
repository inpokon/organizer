import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {Router} from "@angular/router";

interface Work {
  title: string,
  img: string,
  nameBtn: string,
  link?: string
}

@Component({
  selector: 'app-work',
  templateUrl: './work.component.html',
  styleUrls: ['./work.component.scss'],
  encapsulation: ViewEncapsulation.None
})

export class WorkComponent implements OnInit {

  allWorks = [
    'erp', 'organizer-about', 'newsmile', 'flyboots', 'key'
  ];

  works = {
    erp: {
      title: 'ERP для стоматологической клиники "NewSmile"',
      img: 'erp',
      nameBtn: 'Посмотреть презентацию'
    },
    ['organizer-about']: {
      title: 'Приложение-органайзер',
      img: 'organizer',
      nameBtn: 'Перейти в приложение'
    }
  };

  work: Work;

  currentRoute: string;

  constructor(public router: Router) { }

  ngOnInit() {
    const url = this.router.url.split('/').join('');
    this.currentRoute = url;
    this.work = this.works[url];
  }

}
