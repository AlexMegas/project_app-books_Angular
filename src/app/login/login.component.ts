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

  constructor(private userService: UserService,
    private router: Router) { }

  ngOnInit() { }

  userLogin() {
    this.userService.login(this.user)
      .then(res => {
        console.log(res);
        localStorage.setItem('token', JSON.stringify(res.token)); // cannot retrieve token
        this.router.navigate(['/books']);
      })
  }
}