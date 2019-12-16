import {Component, OnInit, ViewEncapsulation} from '@angular/core';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class SkillsComponent implements OnInit {

  items;

  sliders;

  width: number;

  constructor() {
    this.items = [
      {
        name: 'webpack',
        desc: 'Webpack'
      },
      {
        name: 'js',
        desc: 'JavaScript'
      },
      {
        name: 'react',
        desc: 'ReactJS'
      },
      {
        name: 'angular',
        desc: 'AngularJS'
      },
      {
        name: '1c_bitrix',
        desc: '1C-Bitrix'
      },
      {
        name: 'gulp',
        desc: 'Gulp'
      },
      {
        name: 'boostrap',
        desc: 'Bootstrap'
      },
      {
        name: 'html5',
        desc: 'HTML5'
      },
      {
        name: 'jquery',
        desc: 'JQuery'
      },
      {
        name: 'sass',
        desc: 'Sass/Scss'
      },
      {
        name: 'wordpress',
        desc: 'WordPress'
      },
      {
        name: 'git',
        desc: 'Git'
      },
      {
        name: 'css3',
        desc: 'CSS3'
      },
      {
        name: 'node',
        desc: 'NodeJS'
      },
      {
        name: 'redux',
        desc: 'Redux'
      }
    ];
    this.width = 1000;
    const windowWidth = window.screen.width;
    if (windowWidth > 991 && windowWidth <= 1199) this.width = 800;
    if (windowWidth > 767 && windowWidth <= 991) this.width = 650;
    if (windowWidth > 575 && windowWidth <= 768) this.width = 400;
    if (windowWidth <= 575) this.width = 200;

  }

  ngOnInit() {
  }

}
