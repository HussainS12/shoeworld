import { HttpClientModule } from '@angular/common/http';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';

import { TestBed } from '@angular/core/testing';

import { UserlistService } from './userlist.service';
import { Users } from './users';

fdescribe('UserlistService', () => {
  let service: UserlistService;
  let HttpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule, HttpClientTestingModule],
    });
    service = TestBed.inject(UserlistService);
    HttpMock = TestBed.inject(HttpTestingController);
  });

  it('should get Users from db.json file with GET method', () => {
    const DummyUser: Users[] = [
      {
        Name: 'Hussain',
        Username: 'HussainS12',
        Password: 'Hussain123',
        Email: 'Hussainlala58@gmail.com',
        phone: '1234567890',
      },
    ];
    service.getUsers().subscribe((users) => {
      expect(users.length).toBe(1);
      expect(users).toEqual(DummyUser);
    });
    const req = HttpMock.expectOne(service._url);
    expect(req.request.method).toBe('GET');
    req.flush(DummyUser);
  });
});
