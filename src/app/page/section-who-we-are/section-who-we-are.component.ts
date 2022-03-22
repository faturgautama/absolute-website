import { Component, Input, OnInit } from '@angular/core';
import { ContentModel } from 'src/app/models/index.interface';
import { BerandaService } from 'src/app/service/beranda/beranda.service';

@Component({
    selector: 'app-section-who-we-are',
    templateUrl: './section-who-we-are.component.html',
    styleUrls: ['./section-who-we-are.component.css']
})
export class SectionWhoWeAreComponent implements OnInit {

    @Input('SectionWhoWeAreHeading') SectionWhoWeAreHeading: string;

    Content: ContentModel[];

    constructor(
        public berandaService: BerandaService
    ) { }

    ngOnInit(): void {
        this.onGetAllSectionContent();
    }

    onGetAllSectionContent(): void {
        this.berandaService.onGetContentBySectionId('who_we_are')
            .subscribe((result) => {
                this.Content = result;
            });
    }
}
