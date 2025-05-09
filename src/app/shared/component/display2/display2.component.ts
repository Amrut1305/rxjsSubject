import { Component, OnInit } from '@angular/core';
import { SubjectService } from '../../service/subject.service';

@Component({
  selector: 'app-display2',
  templateUrl: './display2.component.html',
  styleUrls: ['./display2.component.scss']
})
export class Display2Component implements OnInit {
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
