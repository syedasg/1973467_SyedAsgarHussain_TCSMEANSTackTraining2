import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})

export class PortfolioComponent implements OnInit {

  username = sessionStorage.getItem('username')

  contactRef = new FormGroup({
    cName: new FormControl(),
    cNo: new FormControl()
  });
  contacts: Array<any> = JSON.parse(sessionStorage.getItem('contacts')!) || [];

  constructor(public router: Router) { }

  ngOnInit(): void {
    console.log(JSON.parse(sessionStorage.getItem('contacts')!))
  }

  addContact() {
    var contacts = JSON.parse(sessionStorage.getItem("contacts")!) || [];

    contacts.push({
      name: this.contactRef.get("cName")?.value,
      number: this.contactRef.get("cNo")?.value
    })
    this.contacts.push({
      name: this.contactRef.get("cName")?.value,
      number: this.contactRef.get("cNo")?.value
    })

    sessionStorage.setItem("contacts", JSON.stringify(contacts));
    console.log(contacts)

  }

  logOut() {
    sessionStorage.removeItem("token");
    sessionStorage.clear();
    this.router.navigate(["login"])
  }


}





