import { Injectable } from '@angular/core';
import {articles} from '../mockData/articles'
import { Observable, of } from 'rxjs';
import { IArticle } from '../interface/article.interface';
@Injectable({
  providedIn: 'root'
})
export class AtricleService {

  constructor() { }
  getArticles(): Observable<IArticle []> {
    return of(articles)
  }
  getArticleById(id: string): Observable<IArticle> {
    return of(articles.find((article => article.id === id)))
  }
  getArticlesByQuery(query: string): Observable<IArticle []> {
    return of(articles)
  }
}
