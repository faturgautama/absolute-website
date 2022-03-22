import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BerandaComponent } from './page/beranda/beranda.component';
import { NewsComponent } from './page/news/news.component';
import { ProductComponent } from './page/product/product.component';
import { SingleNewsComponent } from './page/section-latest-news/card-news/single-news/single-news.component';
import { ServicesComponent } from './page/services/services.component';

const routes: Routes = [
    { path: "", component: BerandaComponent, data: { title: 'Home' } },
    { path: "products", component: ProductComponent, data: { title: 'Our Product' } },
    { path: "services", component: ServicesComponent, data: { title: 'Our Service' } },
    { path: "news", component: NewsComponent, data: { title: 'News' } },
    { path: "news/detail/:id", component: SingleNewsComponent, data: { title: 'News' } },
];

@NgModule({
    imports: [RouterModule.forRoot(routes, { useHash: true })],
    exports: [RouterModule]
})
export class AppRoutingModule { }
