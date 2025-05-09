import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { SubjectService } from '../../service/subject.service';

@Component({
  selector: 'app-display1',
  templateUrl: './display1.component.html',
  styleUrls: ['./display1.component.scss']
})
export class Display1Component implements OnInit {
  userName !: string
  userArr !: string[]
  constructor(
    private _subject : SubjectService
  ){}

  ngOnInit(): void {
    this.fetchUserName()
  }

  fetchUserName(){
    this._subject.userName$.subscribe(res=>{
      this.userName = res
    })

    this._subject.userArray$.subscribe(res=>{
      this.userArr=res
    })
  }
}
