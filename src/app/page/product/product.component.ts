import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-product',
    templateUrl: './product.component.html',
    styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

    constructor() { }

    ngOnInit(): void {
        window.scrollTo({ top: 0, left: 100, behavior: 'smooth' });
    }
}
