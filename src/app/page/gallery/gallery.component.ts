import { Component, HostListener, OnInit } from '@angular/core';
import { GalleryModel } from 'src/app/models/index.interface';
import { BerandaService } from 'src/app/service/beranda/beranda.service';

@Component({
    selector: 'app-gallery',
    templateUrl: './gallery.component.html',
    styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit {

    screenWidth: any;

    Content: GalleryModel[];

    slidesPerView: number = 4;

    @HostListener("window:resize", ['$event'])
    private onResize(event: any) {
        this.onDetectScreenSize(event.srcElement.innerWidth);
    }

    constructor(
        private berandaService: BerandaService
    ) { }

    ngOnInit(): void {
        this.onDetectScreenSize(window.innerWidth);

        this.berandaService.onGetAllGallery()
            .subscribe((result) => {
                this.Content = result;
            });
    }

    onDetectScreenSize(screenWidth: any): void {
        this.screenWidth = screenWidth;

        if (screenWidth <= 991.98) {
            this.slidesPerView = 1;
        }

        if (screenWidth >= 992) {
            this.slidesPerView = 4;
        }
    }

}
