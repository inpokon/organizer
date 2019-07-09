import {AfterViewInit, Component, ElementRef, ViewChild} from '@angular/core';
import {AuthService} from "../../sercvices/auth.service";
import {Router} from "@angular/router";
import {MaterialService} from "../../classes/material.service";

@Component({
    selector: 'app-site-layout',
    templateUrl: './site-layout.component.html',
    styleUrls: ['./site-layout.component.scss']
})
export class SiteLayoutComponent implements AfterViewInit {

    @ViewChild('floating') floatingRef: ElementRef;

    links = [
        {url: '/organizer/overview', name: 'Обзор'},
        {url: '/organizer/analytics', name: 'Аналитика'},
        {url: '/organizer/history', name: 'История'},
        {url: '/organizer/order', name: 'Добавить заказ'},
        {url: '/organizer/categories', name: 'Ассортимент'}
    ];

    constructor(private auth: AuthService, private router: Router ) {}

    ngAfterViewInit() {
        MaterialService.initializeFloatingButton(this.floatingRef);
    }

    logout(e: Event) {
        e.preventDefault();
        this.auth.logout();
        this.router.navigate(['/organizer/login'])
    }

}
