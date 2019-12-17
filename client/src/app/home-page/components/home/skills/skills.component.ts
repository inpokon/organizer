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

  widthSvg: string = '50px';
  heightSvg: string = '50px';

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
    if (windowWidth > 767 && windowWidth <= 991) {
      this.width = 650;
      this.widthSvg = '45px';
      this.heightSvg = '45px';
    }
    if (windowWidth > 575 && windowWidth <= 768) {
      this.widthSvg = '40px';
      this.heightSvg = '40px';
      this.width = 400;
    }
    if (windowWidth > 414 && windowWidth <= 575) {
      this.width = 200;
      this.widthSvg = '30px';
      this.heightSvg = '30px';
    }
    if (windowWidth <= 414) {
      this.width = 200;
      this.widthSvg = '25px';
      this.heightSvg = '25px';
    }

  }

  ngOnInit() {
  }

}
