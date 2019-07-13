import {Component, OnInit} from '@angular/core';
import {CategoriesService} from "../shared/sercvices/categories.service";
import {Category} from "../shared/iterfaces";
import {Observable} from "rxjs";

@Component({
    selector: 'app-categories-page',
    templateUrl: './categories-page.component.html',
    styleUrls: ['./categories-page.component.scss']
})
export class CategoriesPageComponent implements OnInit {

    categories$: Observable<Category[]>;

    constructor(private categoriesService: CategoriesService) {
    }

    ngOnInit() {
       this.categories$ = this.categoriesService.fetch();
    }

}