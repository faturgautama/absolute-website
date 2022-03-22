import { Component, OnInit, ViewChild } from '@angular/core';
import { NewsService } from 'src/app/service/news/news.service';
import { CardNewsComponent } from '../section-latest-news/card-news/card-news.component';

@Component({
    selector: 'app-news',
    templateUrl: './news.component.html',
    styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {

    SectionContentArticle: any[] = [];

    @ViewChild('CardNews') CardNews: CardNewsComponent;

    constructor(
        private newsService: NewsService
    ) { }

    ngOnInit(): void {
        window.scrollTo({ top: 0, left: 100, behavior: 'smooth' });

        this.onGetAllNews();
    }

    onGetAllNews(): void {
        this.newsService.onGetAllNews()
            .subscribe((result) => {
                this.SectionContentArticle = result;

                this.CardNews.Content.next(result);
            });
    }
}
