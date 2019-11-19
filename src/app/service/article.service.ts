import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Globals} from '../globals';
import {Article} from "../class/article";

@Injectable({
  providedIn: 'root'
})
export class ArticleService {
  constructor(private http: HttpClient) { }
  uri = Globals.APP_API + 'article/';

  public getArticles() {
    return this.http.get<Article[]>(`${this.uri}`);
  }
}
