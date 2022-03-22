import { Component, HostListener, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'app-navbar',
    templateUrl: './navbar.component.html',
    styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

    screenWidth: any;

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
    }

    onNavigatePage(url: string, screenWidth: number): void {
        if (screenWidth <= 991.98) {
            let btnCloseOffcanvas = document.getElementById('btnCloseOffcanvas') as HTMLElement;
            btnCloseOffcanvas.click();
        }

        setTimeout(() => {
            this.router.navigateByUrl(url);
        }, 500);
    }

    onClickUrl(url: string): void {
        window.open(url);
    }
}
