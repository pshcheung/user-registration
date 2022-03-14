import { Component, OnInit } from '@angular/core';
import {generateUser, User} from "../../models";

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  readonly user: User;

  constructor() {
    this.user = generateUser();
  }

  ngOnInit(): void {
  }
}
