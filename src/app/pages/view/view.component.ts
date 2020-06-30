import { Component, OnInit } from '@angular/core';
import { Routes, ActivatedRoute, Router } from '@angular/router';
import { AtricleService } from 'src/app/service/atricle.service';
import { IArticle } from 'src/app/interface/article.interface';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {
  article: IArticle
  id: string
  constructor(public activatedRoute: ActivatedRoute, 
              public articleService: AtricleService,
              public router: Router) { }

  ngOnInit(): void {
    this.id = this.activatedRoute.snapshot.paramMap.get('id')
    this.articleService.getArticleById(this.id).subscribe(result => this.article = result)
  }
  gotoEditPage() {
    this.router.navigate(['edit',this.id])
  }

}
