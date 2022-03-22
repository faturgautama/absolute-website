import { Component, Input, OnInit } from '@angular/core';

@Component({
    selector: 'app-heading',
    templateUrl: './heading.component.html',
    styleUrls: ['./heading.component.css']
})
export class HeadingComponent implements OnInit {

    @Input('heading') heading: string;
    @Input('headingClass') headingClass: string = "text-putih";

    constructor() { }

    ngOnInit(): void {
    }

}
