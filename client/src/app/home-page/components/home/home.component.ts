import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {slide} from "../../shared/iterfaces";

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss'],
    encapsulation: ViewEncapsulation.None
})
export class HomeComponent implements OnInit {

    items: slide[];

    sliders: slide[];

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

        console.log(this.width)
    }

    ngOnInit() {

    }

}
