import { Component, OnInit } from '@angular/core';

import { User } from '../user'
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  model = new User('testname', 'p@55vv0rD');
  submitted = false;
  onSubmit() { this.submitted = true; }
  newUser() {
    this.model = new User('', '');
  }

constructor() { }

ngOnInit(): void {
}

}
