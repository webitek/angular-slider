import { Component, OnInit } from '@angular/core';
import { User } from '../user';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.pug',
  styleUrls: ['./registration.component.sass']
})
export class RegistrationComponent implements OnInit {
  public users: User[];
  public test: number = 2;
  constructor() { }

  ngOnInit() {
  }

}
