import { Component, Input, OnInit } from '@angular/core';

@Component({
    selector: 'app-card',
    templateUrl: './card.component.html',
    styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

    @Input('CardClass') CardClass: string;
    @Input('CardHeader') CardHeader: any[];
    @Input('CardBody') CardBody: string;

    constructor() { }

    ngOnInit(): void {
    }

}
