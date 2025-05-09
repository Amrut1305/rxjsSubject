import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SubjectService {
  userName$ : Subject<string> = new Subject
  constructor() { }

}
