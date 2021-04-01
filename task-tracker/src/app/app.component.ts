import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTable } from '@angular/material/table';
import { AddTaskService } from './task.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'task-tracker';
  userList: any = [];
  userId: any;
  firstName: any;
  task: any;
  date: string;
  displayedColumns: string[] = ['id', 'firstName', 'task', 'userDate'];
  dataSource: any;
  tasks: any;

  constructor(public addTaskServ: AddTaskService) { }

  ngOnInit(): void {
    this.addTaskServ.loadTaskData().subscribe(data => {
      this.tasks = data;
      this.dataSource = this.tasks.task;
      console.log(this.dataSource[1]);
    })
  }

  @ViewChild(MatTable) table: MatTable<any>;

  onSubmit(data) {
    console.log(data);
    let id = data.id;
    let firstName = data.firstName;
    let task = data.task;
    let date = data.date;

    let userObj = {
      id: id,
      userFirstName: firstName,
      userTask: task,
      userDate: date,
    }
    this.addTaskServ.storeTask(userObj);
    this.userId = "";
    this.firstName = "";
    this.task = "";
    this.date = "";
  }
}
