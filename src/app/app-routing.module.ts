import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppAboutMeComponent } from './app-about-me/app-about-me.component';
import { AppHomeComponent } from './app-home/app-home.component';
import { AppShopComponent } from './app-shop/app-shop.component';

const routes: Routes = [
  { path: '', component: AppHomeComponent },
  { path: 'shopping', component: AppShopComponent },
  { path: 'about', component: AppAboutMeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
