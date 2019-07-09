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
    }

    ngOnInit() {

    }

}
