import { Component, OnInit } from '@angular/core';
import { Routes, ActivatedRoute } from '@angular/router';
import { AtricleService } from 'src/app/service/atricle.service';
import { IArticle } from 'src/app/interface/article.interface';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {
  article: IArticle
  constructor(public activatedRoute: ActivatedRoute, public articleService: AtricleService) { }

  ngOnInit(): void {
    const id = this.activatedRoute.snapshot.paramMap.get('id')
    this.articleService.getArticleById(id).subscribe(result => this.article = result)
  }

}
