import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IArticle } from 'src/app/interface/article.interface';
import { AtricleService } from 'src/app/service/atricle.service';

@Component({
  selector: 'app-search-page',
  templateUrl: './search-page.component.html',
  styleUrls: ['./search-page.component.css']
})
export class SearchPageComponent implements OnInit {

  constructor(public route: ActivatedRoute, public articleService: AtricleService, public router: Router) {}
  articles: IArticle [] 
  ngOnInit(): void {
    const query = this.route.snapshot.paramMap.get('query')
    this.articleService.getArticlesByQuery(query).subscribe(results => this.articles = results)
  }
  gotoArticle(id){
    this.router.navigate(['view',id])
  }

}
