import { Component, OnInit } from '@angular/core';
import { SubjectService } from '../../service/subject.service';

@Component({
  selector: 'app-display3',
  templateUrl: './display3.component.html',
  styleUrls: ['./display3.component.scss']
})
export class Display3Component implements OnInit {
  userName !: string
    constructor(
      private _subject : SubjectService
    ) { }
  
    ngOnInit(): void {
      this.fetchUserName()
    }
  
    fetchUserName(){
      this._subject.userName$.subscribe(res=>{
        this.userName = res
      })
    }
}
