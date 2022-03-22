import { Component, OnInit } from '@angular/core';
import { ContentModel } from 'src/app/models/index.interface';
import { BerandaService } from 'src/app/service/beranda/beranda.service';

@Component({
    selector: 'app-section-our-product',
    templateUrl: './section-our-product.component.html',
    styleUrls: ['./section-our-product.component.css']
})
export class SectionOurProductComponent implements OnInit {

    Content: ContentModel[];

    constructor(
        private berandaService: BerandaService
    ) { }

    ngOnInit(): void {
        this.onGetOurProductContent();
    }

    onGetOurProductContent(): void {
        this.berandaService.onGetContentBySectionId('our_product')
            .subscribe((result) => {
                this.Content = result;
            });
    }
}
