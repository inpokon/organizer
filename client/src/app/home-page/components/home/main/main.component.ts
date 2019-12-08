import {Component, OnDestroy, OnInit} from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  slider = [
    {
      code: 'react',
      sliderTitle: 'React Js',
      circleTitle: 'ERP',
      donutTitle: 'Web ERP',
      desc: 'Решения с единой базой данных, которая находится на основном сервере, работает гараздо быстрее, при этом нагрузка на веб-сервер значительно ниже, а трафика потребляется меньше, чем при терминальном доступе.'
    },
    {
      code: 'angular',
      sliderTitle: 'Angular',
      circleTitle: 'SPA',
      donutTitle: 'Web-приложения',
      desc: 'Размещенное на одной web-странице, которая для обеспечения работы загружает весь необходимый код вместе с загрузкой самой страницы.'
    },
    {
      code: 'webpack',
      sliderTitle: 'JavaScript',
      circleTitle: 'JS',
      donutTitle: 'Web-приложения',
      desc: 'Все современные браузеры выбрали JavaScript'
    }
  ];

  sliderTitle: string;
  circleTitle: string;
  donutTitle: string;
  desc: string;
  svg: string;
  count: number = 0;
  activeClass: string = '';

  constructor() {
    this.editSlider();
  }

  ngOnInit(): void {
    this.mySlider();
  }

  mySlider() {
    setTimeout(() => {
      this.count += 1;
      if (this.count >= this.slider.length) {
        this.count = 0;
      }
      this.activeClass = 'active';
      setTimeout(() => {
        this.editSlider();
        this.activeClass = '';
      }, 600);
      this.mySlider();
    }, 10000)
  }

  editSlider() {
    this.sliderTitle = this.slider[this.count].sliderTitle;
    this.circleTitle = this.slider[this.count].circleTitle;
    this.donutTitle = this.slider[this.count].donutTitle;
    this.desc = this.slider[this.count].desc;
    this.svg = this.slider[this.count].code;
  }

}
