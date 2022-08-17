import { Component, OnInit } from '@angular/core';
import { UserlistService } from '../userlist.service';
import { Users } from '../users';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss'],
})
export class UsersComponent implements OnInit {
  Users: Array<Users>;
  constructor(private users: UserlistService) {}

  ngOnInit(): void {
    this.users.getUsers().subscribe((data: Users[]) => {
      this.Users = data;
    });
  }
}
