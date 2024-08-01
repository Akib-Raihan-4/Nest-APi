/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { EntityManager } from '@mikro-orm/core';
import { User } from './user.entity';

@Injectable()
export class UserService {
  constructor(private readonly em: EntityManager) {}

  async create(username: string, email: string, password: string): Promise<User> {
    const user = new User();
    user.username = username;
    user.email = email;
    user.password = password; // Remember to hash passwords in a real application

    await this.em.persistAndFlush(user);
    return user;
  }
}