import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
import { User } from '../models/user';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  public user: User = {
    name: '', passw: ''
  };

  constructor(
    private userService: UserService,
    private router: Router
  ) { }

  ngOnInit() { }

  userLogin() {
    this.userService.login(this.user)
      .then(res => {
        console.log(res);
        localStorage.setItem('token', JSON.stringify(res.token));
        let id = JSON.stringify(res.userId);
        id = id.substr(1, id.length - 2);
        localStorage.setItem('userId', id);
        this.router.navigate(['/books']);
      })
  }

}