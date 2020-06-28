import { Component, OnInit, Input } from '@angular/core';
import { IArticle } from 'src/app/interface/article.interface';

@Component({
  selector: 'app-search-card',
  templateUrl: './search-card.component.html',
  styleUrls: ['./search-card.component.css']
})
export class SearchCardComponent implements OnInit {
  @Input() article: IArticle
  constructor() { }

  ngOnInit(): void {
  }

}
