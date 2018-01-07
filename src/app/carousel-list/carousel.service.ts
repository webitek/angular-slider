import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import { Http, Headers, RequestOptions } from "@angular/http";

@Injectable()
export class CarouselService {
  private url = 'http://localhost:3001/upload';

  constructor(
      private http: HttpClient
  ) { }

  public addImage(image) {
    console.log('service:', image);
    return this.http.post( this.url, image)
        .catch(this.handleError);
  }

  private handleError (error: any) {
    let errMsg = error.message || 'Server error';
    console.error(errMsg); // log to console instead
    return Observable.throw(error);
  }
}
