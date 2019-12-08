import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {AuthLayoutComponent} from "./organizer-page/shared/layouts/auth-layout/auth-layout.component";
import {SiteLayoutComponent} from "./organizer-page/shared/layouts/site-layout/site-layout.component";
import {LoginPageComponent} from "./organizer-page/login-page/login-page.component";
import {RegisterPageComponent} from "./organizer-page/register-page/register-page.component";
import {AuthGuard} from "./organizer-page/shared/classes/auth.guard";
import {OverviewPageComponent} from "./organizer-page/overview-page/overview-page.component";
import {AnalyticsPageComponent} from "./organizer-page/analytics-page/analytics-page.component";
import {HistoryPageComponent} from "./organizer-page/history-page/history-page.component";
import {OrderPageComponent} from "./organizer-page/order-page/order-page.component";
import {CategoriesPageComponent} from "./organizer-page/categories-page/categories-page.component";
import {CategoriesFormComponent} from "./organizer-page/categories-page/categories-form/categories-form.component";
import {OrderCategoriesComponent} from "./organizer-page/order-page/order-categories/order-categories.component";
import {OrderPositionsComponent} from "./organizer-page/order-page/order-positions/order-positions.component";
import {HomePageComponent} from "./home-page/home-page.component";
import {OrganizerPageComponent} from "./organizer-page/organizer-page.component";
import {HomeComponent} from "./home-page/components/home/home.component";

const routes: Routes = [
  {
    path: '', component: HomePageComponent, children: [
      {path: '', component: HomeComponent}
    ]
  },
  {
    path: '', component: OrganizerPageComponent, children: [
      {
        path: '', component: AuthLayoutComponent, children: [
          {path: 'organizer', redirectTo: 'organizer/login', pathMatch: 'full'},
          {path: 'organizer/login', component: LoginPageComponent},
          {path: 'organizer/register', component: RegisterPageComponent}
        ]
      },
      {
        path: '', component: SiteLayoutComponent, canActivate: [AuthGuard], children: [
          {path: 'organizer/overview', component: OverviewPageComponent},
          {path: 'organizer/analytics', component: AnalyticsPageComponent},
          {path: 'organizer/history', component: HistoryPageComponent},
          {
            path: 'organizer/order', component: OrderPageComponent, children: [
              {path: '', component: OrderCategoriesComponent},
              {path: ':id', component: OrderPositionsComponent},
            ]
          },
          {path: 'organizer/categories', component: CategoriesPageComponent},
          {path: 'organizer/categories/new', component: CategoriesFormComponent},
          {path: 'organizer/categories/:id', component: CategoriesFormComponent},
        ]
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    scrollPositionRestoration: 'enabled', // Add options right here
  })],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
