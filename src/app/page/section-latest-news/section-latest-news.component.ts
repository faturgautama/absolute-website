import { Component, OnInit, ViewChild } from '@angular/core';
import { NewsService } from 'src/app/service/news/news.service';
import { CardNewsComponent } from './card-news/card-news.component';

@Component({
    selector: 'app-section-latest-news',
    templateUrl: './section-latest-news.component.html',
    styleUrls: ['./section-latest-news.component.css']
})
export class SectionLatestNewsComponent implements OnInit {

    SectionContentArticle: any[] = [];

    @ViewChild('CardNews') CardNews: CardNewsComponent;

    constructor(
        private newsService: NewsService
    ) { }

    ngOnInit(): void {
        this.onGetAllNews()
    }

    onGetAllNews(): void {
        this.newsService.onGetAllNews(3)
            .subscribe((result) => {
                this.SectionContentArticle = result;

                this.CardNews.Content.next(result);
            });
    }
}
