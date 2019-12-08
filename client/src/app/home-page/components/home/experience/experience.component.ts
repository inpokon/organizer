import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.scss']
})
export class ExperienceComponent implements OnInit {
  experience = [
    {
      date: 'Декабрь 2019',
      type: 'work',
      variant: 'standard',
      title: '"Мегамир IT"',
      desc: 'Разработка ERP для сети стоматологических клиник "New Smile".',
      tabs: [
        'ReactJs',
        '1c-Битрикс'
      ]
    },
    {
      date: 'Декабрь 2019',
      type: 'Course',
      variant: 'standard',
      title: 'Redux',
      desc: 'Курс: "Профессиональная Разработка".',
      tabs: [
        'Redux'
      ]
    },
    {
      date: 'Июль 2019',
      type: 'Course',
      variant: 'standard',
      title: 'FullStack-Мастер',
      desc: 'Курс: "Разработка CRM-системы".',
      tabs: [
        'Node.js',
        'Express',
        'Angular 6',
      ]
    },
    {
      date: 'Июнь 2019',
      type: 'Course',
      variant: 'min',
      title: '',
      desc: 'Курс: "Angular 4 c Нуля до Профи".',
      tabs: []
    },
    {
      date: 'Май 2019',
      type: 'work',
      variant: 'standard',
      title: 'Разработка многостраничного сайта',
      desc: 'для стомтологической клиники NewSmile.',
      tabs: [
        'Pug',
        'Jquery',
        'SCSS',
        'Webpack',
      ]
    },
    {
      date: 'Март 2019',
      type: 'work',
      variant: 'standard',
      title: 'Разработка интернет-магазина',
      desc: 'для салонов обуви Flyboots.',
      tabs: [
        'Pug',
        'Jquery',
        'Webpack',
      ]
    },
    {
      date: 'Январь 2019',
      type: 'Course',
      variant: 'standard',
      title: 'Pug',
      desc: 'Всегда рад изучить новую технологию для более качественной разработке.',
      tabs: [
        'Pug',
        'Webpack'
      ]
    },
    {
      date: 'Ноябрь 2018',
      type: 'work',
      variant: 'standard',
      title: 'Разработка ERP',
      desc: 'Начали командную работу по разрабоке ERP.',
      tabs: [
        'ReactJs',
        '1C-Битрикс',
        'Git',
      ]
    },
    {
      date: 'Сентябрь 2018',
      type: 'Course',
      variant: 'standard',
      title: 'React',
      desc: 'Курс: "Профессиональная Разработка".',
      tabs: []
    },
    {
      date: 'Август 2018',
      type: 'work',
      variant: 'standard',
      title: '"Серебряный ключ"',
      desc: 'Landing-page для коттеджного поселка.',
      tabs: [
        'Gulp',
        'Jquery',
        'Html',
        'Scss',
      ]
    },
    {
      date: 'Июль 2018',
      type: 'Course',
      variant: 'min',
      title: '',
      desc: 'Курс: "Программирование на PHP".',
      tabs: []
    },
    {
      date: 'Июнь 2018',
      type: 'Course',
      variant: 'min',
      title: '',
      desc: 'Курс: "1С-Битрикс ПРАКТИКА СОЗДАНИЯ ВЕБ-ПРОЕКТОВ".',
      tabs: []
    },
    {
      date: 'Май 2018',
      type: 'Course',
      variant: 'min',
      title: '',
      desc: 'Изучение с наставником JavaScript, БЭМ, Git.',
      tabs: []
    },
    {
      date: 'Апрель 2018',
      type: 'work',
      variant: 'standard',
      title: 'Frontend разработчик "Мегамир IT"',
      desc: 'Устроился Frontend разработчиком в студию по разрабоке и тех.поддержки сайтов "Мегамир IT".',
      tabs: []
    },
    {
      date: 'Март 2018',
      type: 'Course',
      variant: 'standard',
      title: 'Jquery для верстки',
      desc: '',
      tabs: [
        'Bower',
        'npm',
        'jquery',
      ]
    },
    {
      date: 'Февраль 2018',
      type: 'Course',
      variant: 'standard',
      title: 'Wordpress для верстальщиков',
      desc: '',
      tabs: [
        'Wordpress',
        'php'
      ]
    },
    {
      date: 'Январь 2018',
      type: 'Course',
      variant: 'standard',
      title: 'Академия верстки: Веб-разработчик',
      desc: '',
      tabs: [
        'Html',
        'CSS',
        'Gulp',
        'JS',
      ]
    },
    {
      date: 'Декабрь 2017',
      type: 'Course',
      variant: 'standard',
      title: 'Академия верстки: Веб-разработчик',
      desc: '',
      tabs: [
        'Html',
        'CSS',
        'Gulp',
        'JS',
      ]
    },
    {
      date: 'Ноябрь 2017',
      type: 'Course',
      variant: 'standard',
      title: 'HTML-Academy',
      desc: 'Прохождение курсов и тестов.',
      tabs: [
        'HTML',
        'CSS'
      ]
    },
  ];
  constructor() { }

  ngOnInit() {
  }

}
