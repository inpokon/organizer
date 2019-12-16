import {Component, OnDestroy, OnInit} from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  slider = [
    {
      code: 'js',
      sliderTitle: 'JavaScript',
      circleTitle: 'JS',
      donutTitle: 'Основа веб разработки.',
    },
    {
      code: 'angular',
      sliderTitle: 'Angular',
      circleTitle: 'SPA',
      donutTitle: 'Фреймворк для разработки веб-приложений.',
    },
    {
      code: 'react',
      sliderTitle: 'React Js',
      circleTitle: 'ERP',
      donutTitle: 'JavaScript-библиотека.',
      },
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
    this.svg = this.slider[this.count].code;
  }

}
