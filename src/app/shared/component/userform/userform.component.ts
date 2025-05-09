import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { SubjectService } from '../../service/subject.service';

@Component({
  selector: 'app-userform',
  templateUrl: './userform.component.html',
  styleUrls: ['./userform.component.scss']
})
export class UserformComponent implements OnInit {

  userForm !: FormGroup
  constructor(
    private _subject : SubjectService
  ) { }

  ngOnInit(): void {
    this.createForm()
  }
  createForm(){
    this.userForm = new FormGroup({
      user : new FormControl('', Validators.required)
    })
  }

  onSubmit() {
    let userName :string = this.userForm.value['user']
    let userArr:string[]= []
    console.log(userName);
    this.userForm.reset();
    this.userForm.markAsPristine();
    this._subject.userName$.next(userName);
    userArr.push(userName)
    this._subject.userArray$.next(userArr);
  }

}
