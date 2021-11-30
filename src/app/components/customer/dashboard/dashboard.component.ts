import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})

export class CustomerDashboardComponent implements OnInit {

  errorMessage: String;
  data: Array<any>; 

  constructor(private authService: AuthService, private router: Router) {

    this.data = [{
      id: 1,
      nombre: "ZAPATILLA XD",
      descripcion: "ZAPATILLA",
      precio: 300.0,
      imagen: null,
      estado: true,
      fechaRegistro: null,
      cantidad: 5
    }]

   }

  ngOnInit(): void {
    this.errorMessage = null;
    var token = JSON.parse(localStorage.getItem('Usuario'));
    console.log(token.token);

    this.authService.getProducts(token.token)
    .subscribe(
      response => {
        if (!response.error){
          console.log(response);
          localStorage.setItem('Producto', JSON.stringify({producto: response}));          
        }
        else
        { this.errorMessage = response.error}
      },
      error => {console.log(error),
      this.errorMessage = error.message}
      )

  }

}
