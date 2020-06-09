import { Injectable } from '@nestjs/common';

type User = {
  id: number;
  username: string;
  password: string;
};

@Injectable()
export class UsersService {
  private users: User[] = [
    {
      id: 1,
      username: 'user1',
      password: 'pass',
    },
    {
      id: 2,
      username: 'user2',
      password: 'pass',
    },
    {
      id: 3,
      username: 'user3',
      password: 'pass',
    },
  ];

  async findOne(username: string): Promise<User | undefined> {
    return this.users.find(user => user.username === username);
  }
}
