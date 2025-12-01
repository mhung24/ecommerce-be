import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { NotFoundError } from 'rxjs';

interface User {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  password: string;
}

@Controller('/users')
export class UsersController {
  private users: User[] = [
    {
      id: '1',
      firstName: 'Manh',
      lastName: 'Hung',
      email: 'hung131@gmail.com',
      password: '123456',
    },
  ];
  @Get()
  getUsers(): User[] {
    return this.users;
  }

  @Get(':id')
  getUsersID(@Param() params: { id: string }): User {
    const id = params.id;

    const userFound = this.users.find((users) => users.id === id);

    if (!userFound) {
      throw new NotFoundError('User k tồn tại');
    }
    return userFound;
  }

  @Post()
  createUser(@Body() user): User[] {
    this.users.push(user);
    return this.users;
  }
}
