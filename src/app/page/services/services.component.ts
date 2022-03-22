import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-services',
    templateUrl: './services.component.html',
    styleUrls: ['./services.component.css']
})
export class ServicesComponent implements OnInit {

    constructor() { }

    ngOnInit(): void {
        window.scrollTo({ top: 0, left: 100, behavior: 'smooth' });
    }

}
