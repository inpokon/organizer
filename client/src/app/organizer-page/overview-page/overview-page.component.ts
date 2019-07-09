import {AfterViewInit, Component, ElementRef, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {AnalyticsService} from "../shared/sercvices/analytics.service";
import {Observable} from "rxjs";
import {OverviewPage} from "../shared/iterfaces";
import {MaterialInstance, MaterialService} from "../shared/classes/material.service";

@Component({
    selector: 'app-overview-page',
    templateUrl: './overview-page.component.html',
    styleUrls: ['./overview-page.component.scss']
})
export class OverviewPageComponent implements OnInit, OnDestroy, AfterViewInit {

    @ViewChild('tabTarget') tapTargetRef: ElementRef;
    tabTarget: MaterialInstance;
    data$: Observable<OverviewPage>;
    yesterday: Date = new Date();

    constructor(private service: AnalyticsService) {
    }

    ngOnInit() {
        this.data$ = this.service.getOverview();
        this.yesterday.setDate(this.yesterday.getDate() - 1);

    }

    ngOnDestroy(): void {
        this.tabTarget.destroy();
    }

    ngAfterViewInit(): void {
        this.tabTarget = MaterialService.initTabTarget(this.tapTargetRef);
    }

    openInfo() {
        this.tabTarget.open();
    }

}
