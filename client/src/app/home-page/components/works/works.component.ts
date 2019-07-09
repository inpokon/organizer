import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'app-works',
    templateUrl: './works.component.html',
    styleUrls: ['./works.component.scss']
})
export class WorksComponent implements OnInit {

    works = [
        {
            name: 'ERP "NewSmile Clinic"',
            img: 'assets/images/erp.jpg',
            desc: [
                'ERP-система, организационная стратегия интеграции производства и операций, управления трудовыми ресурсами,  ориентированная на стоматологические клиники NewSmile.',
                'Данное приложение было разработано при помощи 1С-Битрикс + ReactJS',
                'Над приложением работали:',
                '1 Backend-разработчик, 3 Frontend-разработчика, 1 UI/UX Дизайнер',
                'Моя роль составила 80% Frontend разработки',
                'Более подробно с приложением можете ознакомиться перейдя по ссылке'
            ],
            url: '/erp',
            code: 'newSmile',
            svg: 'assets/sprites/sprite.svg#react',
            route: true
        },
        {
            name: 'Organizer SPA приложение на AngularJS + NodeJS',
            img: 'assets/images/organizer.jpg',
            desc: [
                'SPA-приложение. Преднозначено для ведения бухгалтерии небольшой организации',
                'Данное приложение было разработано при помощи AngularJS + NodeJS',
                '100% моей работы от начало до конца',
                'Можете ознакомится с приложением пройтя по ссылки. Тестовый логин и пароль test@test.ru'
            ],
            url: '/organizer',
            code: 'organizer',
            svg: 'assets/sprites/sprite.svg#angular',
            route: true
        },
        {
            name: 'Многостраничный сайт для стоматологической клиники "NewSmile Clinic"',
            img: 'assets/images/new-smile.jpg',
            desc: [
                'Данный сайт помогает ознакомится пациентам с услугами и ценами стоматологической клиники',
                'Данное сайт был разработан при помощи 1С-Битрикс + WebPack -> Pug, SCSS, Jquery',
                'Над сайтом работали:',
                '1 Backend-разработчик, 3 Frontend-разработчика, 1 UI/UX Дизайнер',
                'Моя роль составила 80% Frontend разработки'
            ],
            url: 'https://newsmile.clinic/',
            code: 'newSmile-site',
            svg: 'assets/sprites/sprite.svg#webpack',
            route: false
        },
        {
            name: 'Интернет-магазин салонов обуви "Flyboots"',
            img: 'assets/images/flyboots.jpg',
            desc: [
                'Данный сайт был разработан при помощи 1С-Битрикс + WebPack -> Pug, SCSS, Jquery',
                'Над сайтом работали:',
                '1 Backend-разработчик, 1 Frontend-разработчик, 1 UI/UX Дизайнер',
                'Моя роль составила 100% Frontend разработки'
            ],
            url: 'https://flyboots.ru/',
            code: 'flyboots',
            svg: 'assets/sprites/sprite.svg#shopping',
            route: false
        },
        {
            name: 'Landing-page Свой дом в лесу в коттеджном поселке “СЕРЕБРЯНЫЙ КЛЮЧ”',
            img: 'assets/images/key.jpg',
            desc: [
                'Данное сайт был разработан при помощи WebPack -> Pug, SCSS, Jquery',
                'Над приложением работали:',
                '1 Frontend-разработчика, 1 Дизайнер',
                'Моя роль составила 100% Frontend разработки'
            ],
            url: 'https://xn--90aharfglvcf9e0b3bi.xn--p1ai/',
            code: 'silverKey',
            svg: 'assets/sprites/sprite.svg#house',
            route: false
        }
    ];

    constructor() {
    }

    ngOnInit() {
    }

}
