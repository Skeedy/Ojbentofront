import { Component, OnInit } from '@angular/core';
import {ArticleService} from '../../service/article.service';
import {Globals} from '../../globals';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Router} from '@angular/router';
import {Article} from "../../class/article";


@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.scss']
})
export class ArticleComponent implements OnInit {
  uri = Globals.APP_API + 'article/';
  articles: Article[];
  constructor(private articleService: ArticleService, private router: Router, private http: HttpClient) { }

  ngOnInit() {
    this.getArticles();
  }
  getArticles() {
    this.articleService.getArticles().subscribe(data => {
      this.articles = data;
    });
  }
}
