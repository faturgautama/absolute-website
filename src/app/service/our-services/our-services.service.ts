import { Injectable } from '@angular/core';
import { HttpService } from '../http/http.service';
import * as API from '../../api/index';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class OurServicesService {

    API_CONFIG = API;

    constructor(
        private httpService: HttpService
    ) { }

    onGetAllServices(): Observable<any> {
        return this.httpService.defaultGetRequest(this.API_CONFIG.services_content_api);
    }
}
