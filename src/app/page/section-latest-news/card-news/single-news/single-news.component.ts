import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NewsService } from 'src/app/service/news/news.service';

@Component({
    selector: 'app-single-news',
    templateUrl: './single-news.component.html',
    styleUrls: ['./single-news.component.css']
})
export class SingleNewsComponent implements OnInit {

    News: any;

    constructor(
        private newsService: NewsService,
        private activatedRoute: ActivatedRoute,
    ) { }

    ngOnInit(): void {
        this.onGetNewsByRouteParams();
    }

    onGetNewsByRouteParams(): void {
        let id = this.activatedRoute.snapshot.params['id'];

        this.newsService.onGetNewsById(id)
            .subscribe((result) => {
                this.News = result;

                let detail_content = document.getElementById(`detail_content`) as HTMLElement;
                detail_content.innerHTML = result.content
            });
    }
}
