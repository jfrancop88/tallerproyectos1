import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class EmployeeLoginComponent implements OnInit {
  data = {
    username: '',
    password: '',
  }

  remember = false;
  errorMessage: String;
  submitted = false;

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit(): void {
  }

  signin():void {
    this.errorMessage = null;
    const login = {
      username: this.data.username,
      password: this.data.password
    };

    this.authService.signinE(login)
    .subscribe(
      response => {
        if (!response.error){
          console.log(response);
          localStorage.setItem('Usuario', JSON.stringify({token: response.token, username: login.username}));
          this.submitted = true;}
        else
        { this.errorMessage = response.error}

      },
      
      error => {console.log(error),
      this.errorMessage = error.message}
    )
  }

}
