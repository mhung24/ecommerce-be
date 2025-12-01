import { Injectable } from '@nestjs/common';
import { User } from './users.interface';
import { NotFoundError } from 'rxjs';

@Injectable()
export class UsersService {
  private users: User[] = [
    {
      id: '1',
      firstName: 'Manh',
      lastName: 'Hung',
      email: 'hung131@gmail.com',
      password: '123456',
    },
  ];
  getUsers(): User[] {
    return this.users;
  }

  getUser(id: string): User {
    const userFound = this.users.find((users) => users.id === id);

    if (!userFound) {
      throw new NotFoundError('Lỗi');
    }

    return userFound;
  }

  createUser(user: User) {
    this.users.push(user);
    return this.users;
  }
}
