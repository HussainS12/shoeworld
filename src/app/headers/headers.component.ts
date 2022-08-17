import { Component, OnInit } from '@angular/core';
import { CartlistService } from '../cartlist.service';
import { MessengerService } from '../messenger.service';

@Component({
  selector: 'app-headers',
  templateUrl: './headers.component.html',
  styleUrls: ['./headers.component.scss'],
})
export class HeadersComponent implements OnInit {
  name: string;
  isAdmin: boolean;
  count: number;
  constructor(private msg: MessengerService, private clist: CartlistService) {
    this.count = 0;
  }

  ngOnInit(): void {
    this.msg.getName().subscribe((data) => {
      this.name = data;
    });
    this.msg.getAdminStatus().subscribe((data) => {
      this.isAdmin = data;
    });
    this.clist.getListCount().subscribe((data) => (this.count = data));
  }
}
