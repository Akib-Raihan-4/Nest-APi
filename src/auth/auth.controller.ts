/* eslint-disable prettier/prettier */
import { Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
    constructor(private authService: AuthService){}

    @Post('signin')
    signIn(){
        return this.authService.signIn()
    }

    @Post('signup')
    signUp(){
        return 'I am signed up'
    }
    
}
