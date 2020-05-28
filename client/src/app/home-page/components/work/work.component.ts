import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {Router} from "@angular/router";
import {el} from "@angular/platform-browser/testing/src/browser_util";

interface Work {
  title: string,
  img: string,
  nameBtn: string,
  link?: string,
  members: [],
  skills: [],
  desc: string
}

@Component({
  selector: 'app-work',
  templateUrl: './work.component.html',
  styleUrls: ['./work.component.scss'],
  encapsulation: ViewEncapsulation.None
})

export class WorkComponent implements OnInit {

  allWorks = [
    'erp', 'organizer-about', 'newsmile', 'flyboots', 'key', 'lummix', 'crm-fulogy'
  ];

  works = {
    ['crm-fulogy']: {
      title: 'CRM для компании по производству светильников',
      img: 'lummix',
      nameBtn: 'Перейти на сайт',
      link: 'https://lummix.ru/',
      members: [
        'Front-End разработчик (50% моей работы)',
      ],
      skills: [
        'React',
        'GraphQL'
      ],
      desc: 'Недоработанный проект. CRM будет предназначена для компании по производству светильников'
    },
    lummix: {
      title: 'SPA Сайт для компании по производству светильников на NextJS',
      img: 'lummix',
      nameBtn: 'Перейти на сайт',
      link: 'https://lummix.ru/',
      members: [
        'Front-End разработчик (100% моей работы)',
        'UI/UX Дизайнер'
      ],
      skills: [
        'NextJS',
        'React',
        'Apollo',
        'GraphQL'
      ],
      desc: 'Интернет магазин по производству и продажи светильников высокого качества'
    },
    erp: {
      title: 'ERP для стоматологической клиники "NewSmile"',
      img: 'erp',
      nameBtn: 'Посмотреть презентацию',
      members: [
        'BackEnd разработчик',
        'Три Front-End разработчика (90% моей работы)',
        'UI/UX Дизайнер',
        'Проект менеджер'
      ],
      skills: [
        '1C-Bitrix',
        'ReactJS',
        'GIT'
      ],
      desc: 'Данное приложение разработано для автоматизации и ведения учета в стоматологической клинике: хранение базы ' +
        'данных пациентов, шаблонизация всех видов услуг и процедур, распределение ролей между врачами и ' +
        'администраторами, составление графиков работы, листы обзвона и много другое.'
    },
    ['organizer-about']: {
      title: 'Приложение-органайзер',
      img: 'organizer',
      nameBtn: 'Перейти в приложение',
      members: [
        '100% моей работы'
      ],
      skills: [
        'NodeJS',
        'Express',
        'Angular',
        'MaterializeCSS'
      ],
      desc: 'Приложение разработано для изучения новых технологии Angular и NodeJS. Органайзер можно использовать ' +
        'для учета денежных средств небольшой организации. Включает в себя функции добавления, удаления, редактирования различных видов категорий и позиций товаров. ' +
        'Обзор выручки и заказов за предыдущий рабочий день. Аналитика за весь период использования приложения в виде простого графика. ' +
        'Так же имеется история заказов.'
    },
    newsmile: {
      title: 'Многостраничный сайт для стоматологической клиники "NewSmile"',
      img: 'newsmile',
      nameBtn: 'Перейти на сайт',
      link: 'https://newsmile.clinic/',
      members: [
        'BackEnd разработчик',
        'Три Front-End разработчика (50% моей работы)',
        'UI/UX Дизайнер',
        'Проект менеджер'
      ],
      skills: [
        '1C-Bitrix',
        'WebPack',
        'Pug',
        'JQuery'
      ],
      desc: 'Многостраничный сайт, который содержит в себе информацию об услугах, истории, сотрудниках и ценах стоматологической клиники "NewSmile". '
    },
    flyboots: {
      title: 'Интернет-магазин для сети салонов обуви "Flyboots"',
      img: 'flyboots',
      nameBtn: 'Перейти на сайт',
      link: 'https://flyboots.ru/',
      members: [
        'BackEnd разработчик',
        '100% моей Front-End разработки',
        'UI/UX Дизайнер',
        'Проект менеджер'
      ],
      skills: [
        '1C-Bitrix',
        'WebPack',
        'Pug',
        'JQuery'
      ],
      desc: 'Интернет магазин с обширным функционалом фильтрации товаров. С возможностью самовывоза или оплаты online. Также пользователь может ознакомиться ' +
        'с последними новинками, акциями, адресами магазинов и условиями рассрочки.'
    },
    key: {
      title: 'Landing-page для коттеджного поселка "Серебряный ключ"',
      img: 'key',
      nameBtn: 'Перейти на сайт',
      link: 'https://xn--90aharfglvcf9e0b3bi.xn--p1ai/',
      members: [
        '100% моей Front-End разработки',
        'UI/UX Дизайнер'
      ],
      skills: [
        'Gulp',
        'HTML5',
        'SCSS',
        'JQuery'
      ],
      desc: 'Простой одностраничный сайт для кооператива "Серебряный ключ", на котором пользователь может ознакомиться с инфраструктурой коттеджного поселка, ' +
        'посмотерть примеры построенных домов, а также узнать их стоимость.'
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

  onClickArrow = (way) => {
    const url = this.router.url.split('/').join('');
    let currentIndex = this.allWorks.indexOf(url);
    if (way) {
      currentIndex += 1;
      if (currentIndex === this.allWorks.length) {
        currentIndex = 0
      }
    } else {
      currentIndex -= 1;
      if (currentIndex < 0) {
        currentIndex = this.allWorks.length - 1;
      }
    }
    this.router.navigate(['/' + this.allWorks[currentIndex]]).then(() => {
      this.work = this.works[this.allWorks[currentIndex]];
    })
  }

}
