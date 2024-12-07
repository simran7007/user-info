import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserDataComponent } from '../../user-data/user-data.component';
import { UserService } from '../../user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  loginData = {
    email: '',
    password: ''
  };

  constructor(private userService: UserService, private router: Router) {}

  login(): void {
    const userAccount = localStorage.getItem('userAccount');
    if (userAccount) {
      const storedUser = JSON.parse(userAccount);
      if (
        this.loginData.email === storedUser.email &&
        this.loginData.password === storedUser.password
      ) {
        this.userService.setUser(storedUser);
        alert('Login successful!');
        this.router.navigate(['/profile']);
      } else {
        alert('Invalid email or password!');
      }
    } else {
      alert('No account found. Please sign up first!');
    }
  }
}
