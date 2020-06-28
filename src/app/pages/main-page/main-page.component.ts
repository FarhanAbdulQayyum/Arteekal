import { Component, OnInit } from '@angular/core';
import { AtricleService } from 'src/app/service/atricle.service';
import { IArticle } from 'src/app/interface/article.interface';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent implements OnInit {
  articles: IArticle []
  constructor(public articleSvc: AtricleService) { }

  ngOnInit(): void {
    this.articleSvc.getArticles().subscribe(articles => {
      articles.forEach(arti => arti.content = arti.content.slice(1,20))
      this.articles = articles
    })
  }

}
