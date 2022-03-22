import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpService } from '../http/http.service';
import * as API from '../../api/index';
import { map, take } from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})
export class NewsService {

    API_CONFIG = API;

    constructor(
        private httpService: HttpService
    ) { }

    onGetAllNews(showNumber?: number): Observable<any[]> {
        return this.httpService.defaultGetRequest(this.API_CONFIG.news_content_api)
            .pipe(
                map((result) => {
                    if (showNumber) {
                        return result.content.slice(0, showNumber);
                    } else {
                        return result.content;
                    }
                })
            )
    }

    onGetNewsById(id: number): Observable<any> {
        return this.httpService.defaultGetRequest(this.API_CONFIG.news_content_api)
            .pipe(
                map((result) => {
                    return result.content.find((item) => { return item.id == id });
                })
            )
    }
}
