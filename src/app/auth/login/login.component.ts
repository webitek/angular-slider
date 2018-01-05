import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl} from "@angular/forms";

import {Router} from "@angular/router";
import {AuthService} from "../services/auth.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.sass']
})
export class LoginComponent implements OnInit {

  // public LoginForm: FormGroup;
  authUser = {username: '', password: ''};
  errorMessage: string = '';
  public loading: boolean = false;
  constructor(private authService: AuthService,
              private router: Router,
  ) { }

  ngOnInit() {
    // this.LoginForm = new FormGroup({
    //   nickNameControl: new FormControl(),
    //   passwordControl: new FormControl()
		//
    // })
  }
  public login() {
    // console.log(form.value);
    // console.log(form.value.nickNameControl);
    this.authService.login(this.authUser.username, this.authUser.password)
      .subscribe((data) => {
        console.log(data);
        this.router.navigate(['/']);
      })
  }

}
