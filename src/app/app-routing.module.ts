import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { ShopComponent } from './components/shop/shop.component';

const routes: Routes = [
  // co je ten pathMatch full
  { path: '', component: HomeComponent, pathMatch: 'full' },
  { path: 'shop', component: ShopComponent},
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
