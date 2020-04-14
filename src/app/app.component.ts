import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'app-books';

  SignUp() {
    alert('Pressed button <SignUp>');
  }

  LogIn() {
    alert('Pressed button <LogIn>');
  }
}
