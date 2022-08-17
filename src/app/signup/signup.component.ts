import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { UserlistService } from '../userlist.service';
import { Users } from '../users';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss'],
})
export class SignupComponent implements OnInit {
  constructor(
    private users: UserlistService,
    private fb: FormBuilder,
    private route: Router
  ) {}
  user: Users;

  registrationForm = this.fb.group({
    Name: ['', [Validators.required]],
    Email: ['', [Validators.required, Validators.email]],
    Username: [
      '',
      [
        Validators.required,
        Validators.minLength(6),
        Validators.pattern('[a-zA-Z0-9.!]*'),
      ],
    ],
    Password: ['', Validators.required],
    Phone: ['', [Validators.required, Validators.pattern('^d{10}$')]],
  });

  get Name() {
    return this.registrationForm.get('Name');
  }
  get Email() {
    return this.registrationForm.get('Email');
  }
  get Username() {
    return this.registrationForm.get('Username');
  }
  get Password() {
    return this.registrationForm.get('Password');
  }
  get Phone() {
    return this.registrationForm.get('Phone');
  }

  ngOnInit(): void {}

  onSubmit() {
    this.user = this.registrationForm.value;
    this.users.addUser(this.user).subscribe(
      (data) => console.log('Success', data),
      (error) => {
        return console.log('error', error);
      }
    );
    this.route.navigateByUrl('login');
  }
}
