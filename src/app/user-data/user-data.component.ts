import { Component, OnInit } from '@angular/core';
import { FormControl, FormsModule } from '@angular/forms';
import { UserService } from '../user.service';

@Component({
  selector: 'app-user-data',
  templateUrl: './user-data.component.html',
  styleUrl: './user-data.component.css'
})
export class UserDataComponent implements OnInit {
  activeTab: number = 0;

  user = {
    name: '',
    email: '',
    contact: '',
    password: ''
  };
  constructor(private userServices :UserService){}
  ngOnInit(): void {
    this.loadUserData();
  }

  setTab(index: number): void {
    this.activeTab = index;
  }

  updateUser(): void {
    localStorage.setItem('userData', JSON.stringify(this.user));
    alert('User details updated successfully and saved to local storage!');
  }

  loadUserData(): void {
    const storedData = localStorage.getItem('userData');
    if (storedData) {
      this.user = JSON.parse(storedData);
    }
  }
  
  
}
