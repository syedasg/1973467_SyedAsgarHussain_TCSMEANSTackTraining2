import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Test } from './test.model';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class TestService {

  
    constructor(public http:HttpClient) { }

  
  loadQuestions():Observable<Test[]> {
    return this.http.get<Test[]>("http://localhost:3000/questions");
  
   }
}
