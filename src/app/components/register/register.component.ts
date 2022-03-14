import { Component, OnInit } from '@angular/core';
import { NgForm } from "@angular/forms";
import { Observable, Subscription } from "rxjs";

import { generateUser, User } from "../../models";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  user: User;
  processStatus$: Observable<any>|null = null;
  process: Subscription|null = null;

  constructor() {
    this.user = generateUser();
  }

  ngOnInit(): void {
  }

  onSubmit(form: NgForm) {}
}
