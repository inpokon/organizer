import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {LoginPageComponent} from './organizer-page/login-page/login-page.component';
import {AuthLayoutComponent} from './organizer-page/shared/layouts/auth-layout/auth-layout.component';
import {SiteLayoutComponent} from './organizer-page/shared/layouts/site-layout/site-layout.component';
import {RegisterPageComponent} from './organizer-page/register-page/register-page.component';
import {TokenInterceptor} from "./organizer-page/shared/classes/token.interceptor";
import {OverviewPageComponent} from './organizer-page/overview-page/overview-page.component';
import {AnalyticsPageComponent} from './organizer-page/analytics-page/analytics-page.component';
import {HistoryPageComponent} from './organizer-page/history-page/history-page.component';
import {OrderPageComponent} from './organizer-page/order-page/order-page.component';
import {CategoriesPageComponent} from './organizer-page/categories-page/categories-page.component';
import {LoaderComponent} from './organizer-page/shared/components/loader/loader.component';
import {CategoriesFormComponent} from './organizer-page/categories-page/categories-form/categories-form.component';
import {PositionsFormComponent} from './organizer-page/categories-page/categories-form/positions-form/positions-form.component';
import {OrderCategoriesComponent} from './organizer-page/order-page/order-categories/order-categories.component';
import {OrderPositionsComponent} from './organizer-page/order-page/order-positions/order-positions.component';
import {HistoryListComponent} from './organizer-page/history-page/history-list/history-list.component';
import {HistoryFilterComponent} from './organizer-page/history-page/history-filter/history-filter.component';
import {HomePageComponent} from './home-page/home-page.component';
import {IconSpriteModule} from 'ng-svg-icon-sprite';
import { Ng2CarouselamosModule } from 'ng2-carouselamos';
import { MainComponent } from './home-page/components/home/main/main.component';
import { FooterComponent } from './home-page/components/footer/footer.component';
import { WorkComponent } from './home-page/components/work/work.component';
import { NavComponent } from './home-page/components/nav/nav.component';
import { OrganizerPageComponent } from './organizer-page/organizer-page.component';
import { ExperienceComponent } from './home-page/components/home/experience/experience.component';
import { HomeComponent } from './home-page/components/home/home.component';
import { WorksComponent } from './home-page/components/home/works/works.component';
import { SkillsComponent } from './home-page/components/home/skills/skills.component';

@NgModule({
    declarations: [
        AppComponent,
        LoginPageComponent,
        AuthLayoutComponent,
        SiteLayoutComponent,
        RegisterPageComponent,
        OverviewPageComponent,
        AnalyticsPageComponent,
        HistoryPageComponent,
        OrderPageComponent,
        CategoriesPageComponent,
        LoaderComponent,
        CategoriesFormComponent,
        PositionsFormComponent,
        OrderCategoriesComponent,
        OrderPositionsComponent,
        HistoryListComponent,
        HistoryFilterComponent,
        HomePageComponent,
        MainComponent,
        FooterComponent,
        WorkComponent,
        NavComponent,
        OrganizerPageComponent,
        ExperienceComponent,
        HomeComponent,
        WorksComponent,
        SkillsComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        FormsModule,
        ReactiveFormsModule,
        HttpClientModule,
        IconSpriteModule,
        Ng2CarouselamosModule
    ],
    providers: [
        {
            provide: HTTP_INTERCEPTORS,
            multi: true,
            useClass: TokenInterceptor
        }
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
