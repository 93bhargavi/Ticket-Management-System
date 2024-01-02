import { Component } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
    
  username:any;
  password:any;
  errorMessage:any;
  authService: any;
 
  constructor(private auth:AuthService, private route:Router){}
  login():void{
    const data = { username: this.username, password: this.password };

    this.authService.login(data)
      .subscribe(
        (response: any) => {
          // Handle successful login here
          console.log('Token:', response.token);
          console.log('Encrypted Data:', response.encryptedData);
        },
        (error: any) => {
          // Handle login error
          console.error('Login error:', error);
          this.errorMessage = 'Invalid credentials';
        }
      );
  }


}
