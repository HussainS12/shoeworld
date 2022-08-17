import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { MessengerService } from '../messenger.service';
import { UserlistService } from '../userlist.service';
import { Users } from '../users';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  invalid: boolean;

  Users: Array<Users>;
  constructor(
    private msg: MessengerService,
    private user: UserlistService,
    private route: Router
  ) {}

  ngOnInit(): void {
    this.user.getUsers().subscribe((data: Users[]) => {
      this.Users = data;
      this.invalid = false;
    });
  }

  loginForm = new FormGroup({
    Username: new FormControl(''),
    Password: new FormControl(''),
  });

  login() {
    for (let i = 0; i < this.Users.length; i++) {
      if (
        this.Users[i].Username === this.loginForm.value.Username &&
        this.Users[i].Password === this.loginForm.value.Password
      ) {
        console.log('login Sucessful');
        this.invalid = false;
        console.log(this.Users[i].Name);
        this.msg.setName(this.Users[i].Name);
        this.msg.setAdminStatus(false);
        this.route.navigateByUrl('');
      } else if (
        this.loginForm.value.Username === 'admin' &&
        this.loginForm.value.Password === '12345'
      ) {
        this.msg.setName('Admin');
        this.msg.setAdminStatus(true);
        this.route.navigateByUrl('');
        //console.log('invalid Username or Password');
        this.invalid = true;
      }
    }
  }
}
