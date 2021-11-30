import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {Observable} from 'rxjs';

const api_Node = 'http://18.206.89.84:8080/';
const cabecera = new HttpHeaders({'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*'})


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  //Apis del admin
  registerA(registro): Observable<any> {
    return this.http.post(api_Node + 'employee/register',registro,{ headers: cabecera});
  }

  signinA(login): Observable<any> {
    return this.http.post(api_Node + 'authenticate',login,{ headers: cabecera});
  }


  //Apis del empleado
  registerE(registro): Observable<any> {
    return this.http.post(api_Node + 'employee/register',registro,{ headers: cabecera});
  }

  signinE(login): Observable<any> {
    return this.http.post(api_Node + 'authenticate/provider',login,{ headers: cabecera});
  }

  //Apis del Cliente
  registerC(registro): Observable<any> {
    return this.http.post(api_Node + 'patient/register',registro,{ headers: cabecera});
  }

  signinC(login): Observable<any> {
    return this.http.post(api_Node + 'authenticate/client',login,{ headers: cabecera});
  }

  //Listar productos
  getProducts(token): Observable<any> {
    return this.http.get(api_Node + 'producto', { headers: new HttpHeaders({'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*', 'Authorization': 'Bearer '+ token})});
  }


}
