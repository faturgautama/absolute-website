import { AfterViewInit, Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { delay } from 'rxjs/operators';

@Component({
    selector: 'app-card-news',
    templateUrl: './card-news.component.html',
    styleUrls: ['./card-news.component.css']
})
export class CardNewsComponent implements OnInit, AfterViewInit {

    @Input('SectionHeader') SectionHeader: string;
    @Input('SectionTag') SectionTag: any[] = [];
    @Input('SectionContent') SectionContent: any[] = [];

    Content = new BehaviorSubject([]);

    constructor(
        private router: Router
    ) { }

    ngOnInit(): void {
    }

    ngAfterViewInit(): void {
        this.Content
            .pipe(delay(1000))
            .subscribe((result) => {
                if (result.length > 0) {
                    result.forEach((item) => {
                        let paragraph = document.getElementById(`content${item.id}`) as HTMLElement;
                        paragraph.innerHTML = (item.high_light).substring(0, 150) + '...';
                    })
                }
            })
    }

    onClickReadMore(item: any): void {
        this.router.navigate([`news/detail/${item.id}`]);
    }
}
