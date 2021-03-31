import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Test } from '../test.model';
import { TestService } from '../test.service';
@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {

  questionsList: Array<Test> = [];
  questionsAns: any;
  actualAns: any;
  
  correctAns: any;
  incorrectAns: any;
  currentQuestion: any;
  questionNo: any;
  form = new FormGroup({

    option: new FormControl('', Validators.required)

  });

  
  constructor(public testService: TestService) { }

  ngOnInit(): void {
    this.testService.loadQuestions().subscribe(result => {
      this.questionsList = result
      this.questionNo = this.questionsList.length
      this.currentQuestion = this.questionsList[this.questionsAns]
    },
      error => console.log(error))
    this.questionsAns = 0;
    this.actualAns = 0;
    this.correctAns = [];
    this.incorrectAns = [];
  }

  save() {
    var answered = this.form.value.option;
    let question = this.currentQuestion;
    if (answered == question!.answer) {
      console.log("correct");
      this.correctAns.push(question);
    } else {
      console.log("wrong");
      this.incorrectAns.push(question);

    }
    this.actualAns = this.correctAns.length;
    this.questionsAns += 1;
    this.currentQuestion = this.questionsList[this.questionsAns];

  }

 

  reload() {
    window.location.reload();
  }

}