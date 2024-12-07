import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../../user.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css'
})
export class SignupComponent {
  signupData = {
    name: '',
    email: '',
    contact: '',
    password: ''
  };

  constructor(private userService: UserService, private router:Router) {}

  signup(): void {
    if (this.signupData.name && this.signupData.email && this.signupData.password) {
      localStorage.setItem('userAccount', JSON.stringify(this.signupData));
      alert('Signup successful! You can now log in.');
      this.router.navigate(['/login']);
    } else {
      alert('Please fill out all required fields!');
    }
  }
}
