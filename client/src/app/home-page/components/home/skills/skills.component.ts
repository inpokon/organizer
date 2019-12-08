import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent implements OnInit {

  items;

  sliders;

  width: number;

  constructor() {
    this.items = [
      {
        name: 'webpack',
        activeClass: false
      },
      {
        name: 'js',
        activeClass: false
      },
      {
        name: 'react',
        activeClass: true
      },
      {
        name: 'angular',
        activeClass: false
      },
      {
        name: '1c_bitrix',
        activeClass: false
      },
      {
        name: 'gulp',
        activeClass: false
      },
      {
        name: 'boostrap',
        activeClass: false
      },
      {
        name: 'html5',
        activeClass: false
      },
      {
        name: 'jquery',
        activeClass: false
      },
      {
        name: 'sass',
        activeClass: false
      },
      {
        name: 'wordpress',
        activeClass: false
      },
      {
        name: 'git',
        activeClass: false
      },
      {
        name: 'css3',
        activeClass: false
      }
    ];
    this.width = 1000;
    const windowWidth = window.screen.width;
    if (windowWidth > 768 && windowWidth <= 1024) this.width = 650;
    if (windowWidth >= 480 && windowWidth <= 768) this.width = 400;
    if (windowWidth < 480) this.width = 320;

  }

  ngOnInit() {
  }

}
