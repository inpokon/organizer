import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-works',
  templateUrl: './works.component.html',
  styleUrls: ['./works.component.scss']
})
export class WorksComponent implements OnInit {

  spa = [
    {
      img: 'erp',
      title: 'ERP для стомотологической клиники "NewSmile"',
      link: '/erp',
    },
    {
      img: 'organizer',
      title: 'Приложение-оргонайзей',
      link: '/organizer-about'
    },
  ];
  sites = [
    {
      img: 'newsmile',
      title: 'Многостраничный сайт для стомотологической клиники "NewSmile"',
      link: '/newsmile',
    },
    {
      img: 'flyboots',
      title: 'Интернет-магазин салонов обуви "Flyboots"',
      link: '/flyboots',
    },
    {
      img: 'key',
      title: 'Lending-page коттеджного поселка "Серебрянный ключ"',
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
      title: 'Интрнет-магазин кондитерских изделий',
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

}
