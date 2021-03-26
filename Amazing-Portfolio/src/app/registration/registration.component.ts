import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  registerRef = new FormGroup({
    fname: new FormControl(),
    lname: new FormControl(),
    user: new FormControl(),
    pass: new FormControl()
  });

  constructor(public router: Router) { }

  ngOnInit(): void {
  }

  loginPage() {
    this.router.navigate(["login"])
  }

  register() {
    sessionStorage.setItem("fname", this.registerRef.get("fname")?.value);
    sessionStorage.setItem("lname", this.registerRef.get("lname")?.value);
    sessionStorage.setItem("username", this.registerRef.get("user")?.value);
    sessionStorage.setItem("password", this.registerRef.get("pass")?.value);
    this.router.navigate(["login"])
  }

}


