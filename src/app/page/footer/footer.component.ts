import { Component, HostListener, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'app-footer',
    templateUrl: './footer.component.html',
    styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

    screenWidth: any;

    description_div: string;
    pages_demo_div: string;
    resource_div: string;

    @HostListener("window:resize", ['$event'])
    private onResize(event: any) {
        this.onDetectScreenSize(event.srcElement.innerWidth);
    }

    constructor(
        private router: Router
    ) { }

    ngOnInit(): void {
        this.onDetectScreenSize(window.innerWidth);
    }

    onDetectScreenSize(screenWidth: any): void {
        this.screenWidth = screenWidth;

        if (screenWidth <= 991.98) {
            this.description_div = "col-lg-12 col-md-12 col-sm-12 col-xs-12";
            this.pages_demo_div = "col-6";
            this.resource_div = "col-6";
        }

        if (screenWidth >= 992) {
            this.description_div = "col-lg-5 col-md-5 col-sm-5 col-xs-5";
            this.pages_demo_div = "col-lg-4 col-md-4 col-sm-4 col-xs-4";
            this.resource_div = "col-lg-3 col-md-3 col-sm-3 col-xs-3";
        }
    }

    onClickEmail(): void {
        window.location.href = "mailto:cs@ekamedis.com"
    }

    onClickUrl(url: string): void {
        window.open(url);
    }

    onClickMenuFooter(url: string): void {
        this.router.navigateByUrl(url);
    }
}
