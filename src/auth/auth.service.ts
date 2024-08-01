/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';

@Injectable()
export class AuthService {
    signIn(){
        return {msg:'I am signIn method'}
    }
}
