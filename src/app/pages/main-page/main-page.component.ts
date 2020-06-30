import { Component, OnInit } from '@angular/core';
import { AtricleService } from 'src/app/service/atricle.service';
import { IArticle } from 'src/app/interface/article.interface';
import { Router } from '@angular/router';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent implements OnInit {
  articles: IArticle []
  constructor(public articleSvc: AtricleService, public router: Router) { }

  ngOnInit(): void {
    this.articleSvc.getArticles().subscribe(articles => {
      this.articles =[]
      Object.assign(this.articles, articles)
      //this.articles.forEach(arti => arti.content = arti.content.slice(1,20))
    })
  }
  gotoArticle(id: string){
    this.router.navigate(['view',id])
  }

}
