import {Component, OnInit, ViewEncapsulation} from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class AboutComponent implements OnInit {

  abouts = [
    {
      code: 'power',
      descTop: 'Принято решение стать',
      descBottom: '"Frontend-разработчиком"',
      date: 'Январь 2018',
      type: 'center'
    },
    {
      code: 'html5',
      descTop: 'Академия верстки: Веб-разработчик',
      descBottom: 'Geekbrains: Веб-разработчик',
      date: 'Февраль 2018',
      type: 'course'
    },
    {
      code: 'wordpress',
      descTop: 'Академия верстки:',
      descBottom: 'Wordpress для верстальщика',
      date: 'Март 2018',
      type: 'course'
    },
    {
      code: 'jquery',
      descTop: 'Jquery для верстки',
      descBottom: 'Bower, npm',
      date: 'Апрель 2018',
      type: 'course'
    },
    {
      code: 'mmit',
      descTop: 'Frontend-разработчик в "MMIT"',
      descBottom: 'Тех-поддержка сайтов на 1С-Битрикс',
      date: 'Июнь 2018',
      type: 'work'
    },
    {
      code: 'js',
      descTop: 'Изучение нативного JavaScript',
      descBottom: 'с наставником по работе',
      date: 'Июль 2018',
      type: 'course'
    },
    {
      code: '',
      descTop: 'Git, Gulp, SCSS, SASS',
      descBottom: '',
      date: 'Август 2018',
      type: 'work'
    },
    {
      code: 'power',
      descTop: 'Принято решение стать "Frontend-разработчиком"',
      descBottom: '',
      date: 'Сентябрь 2018',
      type: 'work'
    },
    {
      code: 'power',
      descTop: 'Принято решение стать "Frontend-разработчиком"',
      descBottom: '',
      date: 'Октябрь 2018',
      type: 'work'
    },
    {
      code: 'power',
      descTop: 'Принято решение стать "Frontend-разработчиком"',
      descBottom: '',
      date: 'Ноябрь 2018',
      type: 'work'
    },
    {
      code: 'power',
      descTop: 'Принято решение стать "Frontend-разработчиком"',
      descBottom: '',
      date: 'Декабрь 2018',
      type: 'work'
    },
    {
      code: 'power',
      descTop: 'Принято решение стать "Frontend-разработчиком"',
      descBottom: '',
      date: 'Января 2019',
      type: 'work'
    },
    {
      code: 'power',
      descTop: 'Принято решение стать "Frontend-разработчиком"',
      descBottom: '',
      date: 'Февраль 2019',
      type: 'work'
    },
    {
      code: 'power',
      descTop: 'Принято решение стать "Frontend-разработчиком"',
      descBottom: '',
      date: 'Март 2019',
      type: 'work'
    },
    {
      code: 'power',
      descTop: 'Принято решение стать "Frontend-разработчиком"',
      descBottom: '',
      date: 'Апрель 2019',
      type: 'work'
    },
    {
      code: 'power',
      descTop: 'Принято решение стать "Frontend-разработчиком"',
      descBottom: '',
      date: 'Май 2019',
      type: 'work'
    },
    {
      code: 'power',
      descTop: 'Принято решение стать "Frontend-разработчиком"',
      descBottom: '',
      date: 'Июнь 2019',
      type: 'work'
    },
    {
      code: 'power',
      descTop: 'Принято решение стать "Frontend-разработчиком"',
      descBottom: '',
      date: 'Июль 2019',
      type: 'work'
    },
    {
      code: 'power',
      descTop: 'Принято решение стать "Frontend-разработчиком"',
      descBottom: '',
      date: 'Август 2019',
      type: 'work'
    },
    {
      code: 'power',
      descTop: 'Принято решение стать "Frontend-разработчиком"',
      descBottom: '',
      date: 'Сентябрь 2019',
      type: 'work'
    },
    {
      code: 'power',
      descTop: 'Принято решение стать "Frontend-разработчиком"',
      descBottom: '',
      date: 'Октябрь 2019',
      type: 'work'
    },
    {
      code: 'power',
      descTop: 'Принято решение стать "Frontend-разработчиком"',
      descBottom: '',
      date: 'Ноябрь 2019',
      type: 'work'
    },
    {
      code: 'power',
      descTop: 'Принято решение стать "Frontend-разработчиком"',
      descBottom: '',
      date: 'Декабрь 2019',
      type: 'work'
    },
  ];

  constructor() { }

  ngOnInit() {
  }

}
