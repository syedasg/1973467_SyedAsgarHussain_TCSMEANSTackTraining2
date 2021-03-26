import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  token: any;
  username: any;
  password: any;
  check: any;
  loginRef = new FormGroup({
    user: new FormControl(),
    pass: new FormControl()
  });
  constructor(public router: Router) { }

  ngOnInit(): void {

  }

  register() {
    this.router.navigate(["registration"])
  }

  login() {
    let user1 = this.loginRef.get("user")?.value;  // get specific control value. 
    let pass1 = this.loginRef.get("pass")?.value;
    this.username = sessionStorage.getItem("username");
    this.password = sessionStorage.getItem("password")
    this.check = false;
    console.log(this.check);
    if ((user1 == this.username && pass1 == this.password) && (user1 != null && pass1 != null)) {
      sessionStorage.setItem("token", "123")
      this.check = true;

      this.token = sessionStorage.getItem("token")
      this.router.navigate(["portfolio"])
    }

  }
}