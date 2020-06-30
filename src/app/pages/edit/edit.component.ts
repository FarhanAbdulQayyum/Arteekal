import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  articleForm: FormGroup
  constructor() {
    this.articleForm = new FormGroup({
      title: new FormControl(''),
      content: new FormControl('')
    })
   }

  ngOnInit(): void {
  }
  save() {
    console.log(this.articleForm.value)
  }

}
