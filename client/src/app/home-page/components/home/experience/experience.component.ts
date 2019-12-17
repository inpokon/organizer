import {Component, OnInit, ViewEncapsulation} from '@angular/core';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ExperienceComponent implements OnInit {
  experience = [
    {
      date: 'Декабрь 2019',
      type: 'work',
      variant: 'standard',
      title: '"Мегамир IT"',
      desc: 'Разработка ERP для сети стоматологических клиник "New Smile".',
      link: 'erp',
      tabs: [
        'React-Js',
        '1c-Битрикс'
      ]
    },
    {
      date: 'Октябрь 2019',
      type: 'course',
      variant: 'standard',
      title: 'Redux',
      desc: 'Курс: "Профессиональная Разработка".',
      tabs: [
        'Redux'
      ]
    },
    {
      date: 'Июль 2019',
      type: 'course',
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
      type: 'course',
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
      desc: 'Для стоматологической клиники NewSmile.',
      link: 'newsmile',
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
      desc: 'Для салонов обуви Flyboots.',
      link: 'flyboots',
      tabs: [
        'Pug',
        'Jquery',
        'Webpack',
      ]
    },
    {
      date: 'Январь 2019',
      type: 'course',
      variant: 'standard',
      title: 'Pug',
      desc: 'Всегда рад изучить новую технологию для более качественной разработки.',
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
      desc: 'Начали командную работу по разработке ERP.',
      link: 'erp',
      tabs: [
        'React-Js',
        '1C-Битрикс',
        'Git',
      ]
    },
    {
      date: 'Сентябрь 2018',
      type: 'course',
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
      link: 'key',
      tabs: [
        'Gulp',
        'Jquery',
        'Html',
        'Scss',
      ]
    },
    {
      date: 'Июль 2018',
      type: 'course',
      variant: 'min',
      title: '',
      desc: 'Курс: "Программирование на PHP".',
      tabs: []
    },
    {
      date: 'Июнь 2018',
      type: 'course',
      variant: 'min',
      title: '',
      desc: 'Курс: "1С-Битрикс ПРАКТИКА СОЗДАНИЯ ВЕБ-ПРОЕКТОВ".',
      tabs: []
    },
    {
      date: 'Май 2018',
      type: 'course',
      variant: 'min',
      title: '',
      desc: 'Изучение с наставником JavaScript, БЭМ, Git.',
      tabs: []
    },
    {
      date: 'Апрель 2018',
      type: 'work',
      variant: 'standard',
      title: 'Front-End разработчик "Мегамир IT"',
      desc: 'Устроился Front-End разработчиком в студию по разработке и тех.поддержке сайтов.',
      tabs: []
    },
    {
      date: 'Март 2018',
      type: 'course',
      variant: 'min',
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
      type: 'course',
      variant: 'min',
      title: 'Wordpress для верстальщиков',
      desc: '',
      tabs: [
        'Wordpress',
        'php'
      ]
    },
    {
      date: 'Январь 2018',
      type: 'course',
      variant: 'min',
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
      type: 'course',
      variant: 'min',
      title: 'Geekbrains: Веб-разработчик',
      desc: '',
      tabs: [
        'Html',
        'CSS',
        'JS',
      ]
    },
    {
      date: 'Ноябрь 2017',
      type: 'course',
      variant: 'min',
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

  onClickBtn = () => {
    this.experience = this.experience.reverse();
  }

}
