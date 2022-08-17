import { StringMap } from '@angular/compiler/src/compiler_facade_interface';

export class Users {
  constructor(
    public Name: string,
    public Username: string,
    public Password: string,
    public Email: string,
    public phone: string
  ) {}
}
