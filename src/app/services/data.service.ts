import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(public http: Http) {}

  getPosts() {
    return this.http.get('https://jsonplaceholder.typicode.com/posts')
    .pipe(map(res => res.json()));
  }

}
