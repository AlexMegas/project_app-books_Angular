import { Component, OnInit } from '@angular/core';
import { User } from '../models/user';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  public user: User = {
    name: '', passw: ''
  };

  constructor(
    private userService: UserService
  ) { }

  ngOnInit() { }

  submitted = false;
  userSignup() {
    this.submitted = true;
    this.userService.signup(this.user)
      .then(res => {
        console.log(res);
      });
  }
}
