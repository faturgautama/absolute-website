import { Component, OnInit } from '@angular/core';
import { BerandaService } from 'src/app/service/beranda/beranda.service';

@Component({
    selector: 'app-beranda',
    templateUrl: './beranda.component.html',
    styleUrls: ['./beranda.component.css']
})
export class BerandaComponent implements OnInit {

    SectionWhoWeAreHeading: string;

    constructor(
        private berandaService: BerandaService
    ) { }

    ngOnInit(): void {
        this.onGetAllHeading();

        window.scrollTo({ top: 0, left: 100, behavior: 'smooth' });
    }

    onGetAllHeading(): void {
        this.berandaService.onGetAllHeading()
            .subscribe((result) => {
                this.SectionWhoWeAreHeading = result[0]['header'];
            });
    }
}
