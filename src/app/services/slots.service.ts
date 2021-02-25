import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from '../../environments/environment';

@Injectable()
export class SlotsService {
    public readonly apiUrl = environment.apiUrl;
    public readonly baseUrl = environment.baseUrl;

    constructor(public http: HttpClient) {
    }

    addSlot(slot: object): Observable<any> {
        console.log('this.apiUrl', this.apiUrl);
        return this.http.post(this.apiUrl+'slot', slot)
            .pipe(
                map((response: Response) => {
                    console.log('response', response);
                    return response;
                })
            );
    }

    getSlots(date): Observable<any> {
        console.log('this.apiUrl', this.apiUrl);
        return this.http.get(this.apiUrl+'slot?date=' + date)
            .pipe(
                map((response: Response) => {
                    console.log('response', response);
                    return response;
                })
            );
    }

}