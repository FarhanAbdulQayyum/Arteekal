import { Component, OnInit, Input} from '@angular/core';
import { IArticle } from 'src/app/interface/article.interface';
@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  @Input() article: IArticle
  constructor() { }

  ngOnInit(): void {
  }

}
