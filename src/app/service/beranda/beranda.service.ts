import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpService } from '../http/http.service';
import * as API from '../../api';
import { map } from 'rxjs/operators';
import { ContentModel, GalleryModel } from 'src/app/models/index.interface';

@Injectable({
    providedIn: 'root'
})
export class BerandaService {

    API = API;

    constructor(
        private httpService: HttpService
    ) { }

    onGetAllHeading(): Observable<string[]> {
        return this.httpService.defaultGetRequest(this.API.beranda_api)
            .pipe(map(result => result.heading))
    }

    onGetContentBySectionId(section: string): Observable<ContentModel[]> {
        return this.httpService.defaultGetRequest(this.API.beranda_content_api)
            .pipe(
                map((result: ContentModel[]) => {
                    return result.filter((item) => {
                        return item.section === section;
                    });
                })
            )
    }

    onGetAllGallery(): Observable<GalleryModel[]> {
        return this.httpService.defaultGetRequest(this.API.gallery_content_api);
    }
}
