import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {Router} from "@angular/router";

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
    'erp', 'organizer-about', 'newsmile', 'flyboots', 'key'
  ];

  works = {
    erp: {
      title: 'ERP для стоматологической клиники "NewSmile"',
      img: 'erp',
      nameBtn: 'Посмотреть презентацию',
      members: [
        'BackEnd разработчик',
        'Три FrontEnd разработчика (90% моей работы)',
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
      members: [
        'BackEnd разработчик',
        'Три FrontEnd разработчика (50% моей работы)',
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
      members: [
        'BackEnd разработчик',
        '100% моей FrontEnd разработки',
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
      members: [
        '100% моей FrontEnd разработки',
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

}
