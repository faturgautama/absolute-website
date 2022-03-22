import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { SwiperModule } from 'swiper/angular';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BerandaComponent } from './page/beranda/beranda.component';
import { NavbarComponent } from './component/navbar/navbar.component';
import { LayoutComponent } from './component/layout/layout.component';
import { HeadingComponent } from './component/typhograph/heading/heading.component';
import { SectionWhoWeAreComponent } from './page/section-who-we-are/section-who-we-are.component';
import { SectionOurProductComponent } from './page/section-our-product/section-our-product.component';
import { CardComponent } from './component/card/card.component';
import { SectionLatestNewsComponent } from './page/section-latest-news/section-latest-news.component';
import { CardNewsComponent } from './page/section-latest-news/card-news/card-news.component';
import { SectionOurPartnerComponent } from './page/section-our-partner/section-our-partner.component';
import { FooterComponent } from './page/footer/footer.component';
import { ProductComponent } from './page/product/product.component';
import { ServicesComponent } from './page/services/services.component';
import { NewsComponent } from './page/news/news.component';
import { SectionHeaderComponent } from './component/section-header/section-header.component';
import { VerticalTimelineComponent } from './component/vertical-timeline/vertical-timeline.component';
import { SwiperComponent } from './component/swiper/swiper.component';
import { SingleNewsComponent } from './page/section-latest-news/card-news/single-news/single-news.component';
import { GalleryComponent } from './page/gallery/gallery.component';
import { WhatsappFloatingComponent } from './component/whatsapp-floating/whatsapp-floating.component';

@NgModule({
    declarations: [
        AppComponent,
        BerandaComponent,
        NavbarComponent,
        LayoutComponent,
        HeadingComponent,
        SectionWhoWeAreComponent,
        SectionOurProductComponent,
        CardComponent,
        SectionLatestNewsComponent,
        CardNewsComponent,
        SectionOurPartnerComponent,
        FooterComponent,
        ProductComponent,
        ServicesComponent,
        NewsComponent,
        SectionHeaderComponent,
        VerticalTimelineComponent,
        SwiperComponent,
        SingleNewsComponent,
        GalleryComponent,
        WhatsappFloatingComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        SwiperModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
