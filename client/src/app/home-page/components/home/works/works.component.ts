import {Component, OnInit, ViewEncapsulation} from '@angular/core';

@Component({
  selector: 'app-works',
  templateUrl: './works.component.html',
  styleUrls: ['./works.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class WorksComponent implements OnInit {

  activeSpa = false;
  activeSites = false;
  activeTeh = false;

  spa = [
    {
      img: 'erp',
      title: 'ERP для стоматологической клиники "NewSmile"',
      link: '/erp',
    },
    {
      img: 'organizer',
      title: 'Приложение-органайзер',
      link: '/organizer-about'
    },
  ];
  sites = [
    {
      img: 'newsmile',
      title: 'Многостраничный сайт для стоматологической клиники "NewSmile"',
      link: '/newsmile',
    },
    {
      img: 'flyboots',
      title: 'Интернет-магазин салонов обуви "Flyboots"',
      link: '/flyboots',
    },
    {
      img: 'key',
      title: 'Landing-page коттеджного поселка "Серебряный ключ"',
      link: '/key',
    },
  ];
  teh = [
    {
      img: 'alans',
      title: 'Многостраничный сайт для компании инженерных изысканий',
      link: 'https://ooo-alans.ru/',
    },
    {
      img: 'maria',
      title: 'Интернет-магазин кондитерских изделий',
      link: 'https://www.maria-irk.ru/',
    },
    {
      img: 'rasol',
      title: 'Ресторан «Рассольник»',
      link: 'https://xn--80aqgckemja6i.xn--p1ai/',
    },
    {
      img: 'glavtrans',
      title: 'Перевозки по железной дороге',
      link: 'https://glavtrans38.com/',
    },
    {
      img: 'hammer',
      title: 'Фитнес клуб "Hammer"',
      link: 'http://hammerclass.ru/',
    },
    {
      img: 'nagrada',
      title: 'Интернет-магазин сувениров "Награда-центр"',
      link: 'https://nagrada38.ru/',
    },
    {
      img: 'shina',
      title: 'Интернет-магазин автошин "Автошина38"',
      link: 'https://avtoshina38.ru/',
    },
  ];
  constructor() { }

  ngOnInit() {
  }

  onChangeIsHovered = (type, result) => {
    this['active' + type] = result;
  }

}
