import { Component, HostListener, Input, OnInit } from '@angular/core';
import { ContentModel } from 'src/app/models/index.interface';
import SwiperCore, { Autoplay, EffectFade } from 'swiper';

SwiperCore.use([Autoplay, EffectFade])

@Component({
    selector: 'app-swiper',
    templateUrl: './swiper.component.html',
    styleUrls: ['./swiper.component.css']
})
export class SwiperComponent implements OnInit {

    @Input('Content') Content: ContentModel[];

    screenWidth: number;

    slidesPerView: number

    constructor() { }

    @HostListener("window:resize", ['$event'])
    private onResize(event: any) {
        this.onDetectScreenSize(event.srcElement.innerWidth);
    }

    ngOnInit(): void {
        this.onDetectScreenSize(window.innerWidth);
    }

    onDetectScreenSize(screenWidth: any): void {
        this.screenWidth = screenWidth;

        if (screenWidth <= 767.98) {
            this.slidesPerView = 1;
        }

        if (screenWidth >= 768 && screenWidth <= 991.98) {
            this.slidesPerView = 2;
        }

        if (screenWidth >= 992) {
            this.slidesPerView = 3;
        }
    }
}
