import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  searchFormControl: FormControl = new FormControl('')
  constructor(public router: Router) {}

  ngOnInit(): void {
  }
  search(){
    if(this.searchFormControl.value.length > 0){
      this.router.navigate(['/search', this.searchFormControl.value])
    }
  }
  /* keyDownFunction(e){
    if (e.keyCode === 13) {
      this.search()
    }
  } */

}
